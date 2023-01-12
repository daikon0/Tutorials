import python_bitbankcc
import os

def lambda_handler(event, context):
    API_KEY = os.environ['BITBANK_API_KEY']
    API_SECRET = os.environ['BITBANK_API_SECRET']

    prv = python_bitbankcc.private(API_KEY, API_SECRET)
    pub = python_bitbankcc.public()
    btc_price = pub.get_ticker('btc_jpy')['buy']
    print(btc_price)
    buy_price = 500
    amount = buy_price / float(btc_price)
    print(amount)

    # 注文
    order = prv.order(
        'btc_jpy', # ペア
        btc_price, # 価格
        amount, # 注文枚数
        'buy', # 注文サイド
        'market' # 注文タイプ
    )
    print(order)