import python_bitbankcc
import os

API_KEY = os.environ['BITBANK_API_KEY']
API_SECRET = os.environ['BITBANK_API_SECRET']

BUY_PRICE = 500

def lambda_handler(event, context):
    prv = python_bitbankcc.private(API_KEY, API_SECRET)
    pub = python_bitbankcc.public()

    current_btc_price = float(pub.get_ticker('btc_jpy')['buy'])
    amount = BUY_PRICE / current_btc_price

    # 注文
    prv.order(
        'btc_jpy', # ペア
        current_btc_price, # 価格
        amount, # 注文枚数
        'buy', # 注文サイド
        'market' # 注文タイプ
    )