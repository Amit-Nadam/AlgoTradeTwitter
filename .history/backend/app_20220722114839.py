import sys
from flask import Flask, request, jsonify
from flask_cors import CORS
from utils import *

# refrence this file
app = Flask(__name__)
CORS(app)

@app.route("/analysis",methods=['GET'])
def index():
    symbol = request.args.get('symbol')
    # connection()
    tweets = get_tweets_of_stock(symbol)
    tweets = run_clean_text(tweets)
    response_body = {}
    # response_body['treeMap'] = get_top_15(tweets);
    sentiment = sentiment_tweets(tweets)
    pos = np.array(list(count_values_sentiment(sentiment['POS']).values()))
    neg = list(count_values_sentiment(sentiment['NEG']).values())
    print
    response_body['positive'] = [
        {
            'name': 'Positive',
            'data': pos,
        },
        {
            'name': 'Negative',
            'data': neg,
        }]
    series, labels = count_hold_buy_sell(tweets)
    response_body['pie'] = {
            'series':list(series),
            'labels': list(labels),
    }
    # response_body['time'] = stock_price_graph(symbol)
    return jsonify(response_body)


if __name__ == '__main__':
    app.run(debug=True)