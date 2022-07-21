from flask import Flask, request
from flask_cors import CORS
from utils import *
import sys

# refrence this file
app = Flask(__name__)
CORS(app)

@app.route("/analysis",methods=['GET'])
def index():
    symbol = request.args.get('symbol')
    connection()
    tweets = get_tweets_of_stock(symbol)
    tweets = run_clean_text(tweets)
    response_body = {}
    response_body['treeMap'] = get_top_15(tweets);
    pos = count_values_sentiment(sentiment['POS'])
    neg = count_values_sentiment(sentiment['NEG'])
    response_body['positive'] = [
        {
            'name': 'Positive',
            'data': list(pos.values())
        },
        {
            'name': 'Negative',
            'data': list(neg.values())
        }]
    series, labels = count_hold_buy_sell(tweets)
    response_body['pie'] = {
            'series': series,
            'labels': labels,
    }
    response_body['time'] = stock_price_graph(symbol)
    return response_body


if __name__ == '__main__':
    app.run(debug=True)