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
    response_body['positive'] = [
        {
            'name': 'Males',
            'data': [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
                3.9, 3.5, 3]
        },
        {
            'name': 'Females',
            'data': [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
                -4.1, -4, -4.1, -3.4, -3.1, -2.8
            ]
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