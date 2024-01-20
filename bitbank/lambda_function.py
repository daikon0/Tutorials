import python_bitbankcc
import os

API_KEY = os.environ["BITBANK_API_KEY"]
API_SECRET = os.environ["BITBANK_API_SECRET"]

BUY_PRICE = 1000

prv = python_bitbankcc.private(API_KEY, API_SECRET)
pub = python_bitbankcc.public()


def order(pair):
    current_price = float(pub.get_ticker(pair)["buy"])
    target_price = current_price - 100
    target_amount = BUY_PRICE / target_price

    # 注文
    prv.order(
        pair,  # ペア
        target_price,  # 価格
        target_amount,  # 注文枚数
        "buy",  # 注文サイド
        "limit",  # 注文タイプ
    )


def lambda_handler(event, context):
    order("btc_jpy")
    order("eth_jpy")
