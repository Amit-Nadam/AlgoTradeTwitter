import sys
from twython import Twython
import csv
import json
import json
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime
import re
import pendulum
from datetime import datetime
from textblob import TextBlob
import numpy as np
from pysentimiento import create_analyzer
from pysentimiento.preprocessing import preprocess_tweet
from pysentimiento import create_analyzer
import pprint
import operator
from collections import OrderedDict
from xmlrpc.client import DateTime
from pysentimiento.preprocessing import preprocess_tweet
from twython import Twython
import json
import pandas as pd
import re
import numpy as np
from collections import OrderedDict
import nltk
import yfinance as yf
import matplotlib.pyplot as plt
import numpy as np
import nltk
import yfinance as yf
nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('omw-1.4')
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from nltk.corpus import wordnet as wn
from datetime import date, timedelta
#################################################################

def connection():
    # Enter your keys/secrets as strings in the following fields
    credentials = {}
    credentials['CONSUMER_KEY'] = 'lwGc7BqUKODAsmLchbI7NxsD9'
    credentials['CONSUMER_SECRET'] = 'eFLyC3NyUOcVbUjWkItxxTvnIjoiKgvxkRp8gFn8kzfHjiIj9g'
    credentials['ACCESS_TOKEN'] = '1314146132872908801-z9LD9Wz7rSwKDqynGJ8rdpoZcPgiUr'
    credentials['ACCESS_SECRET'] = 'Hz5stK6AfOSc9Lg2rSqR8KKBbq17EZKZiPKd1KEZ5iwg0'

    # Save the credentials object to file
    with open("twitter_credentials.json", "w") as file:
        json.dump(credentials, file)

def get_tweets_of_stock(symbol, count = 100):
    today = date.today()
    time_search = str(date.today())
    time_search_end = date.today() - timedelta(days=7)
    
    creds = {}
    creds['CONSUMER_KEY'] = 'lwGc7BqUKODAsmLchbI7NxsD9'
    creds['CONSUMER_SECRET'] = 'eFLyC3NyUOcVbUjWkItxxTvnIjoiKgvxkRp8gFn8kzfHjiIj9g'
    creds['ACCESS_TOKEN'] = '1314146132872908801-z9LD9Wz7rSwKDqynGJ8rdpoZcPgiUr'
    creds['ACCESS_SECRET'] = 'Hz5stK6AfOSc9Lg2rSqR8KKBbq17EZKZiPKd1KEZ5iwg0'

    # Load credentials from json file
    # with open("twitter_credentials.json", "r") as file:
    #     creds = json.load(file)

    # Instantiate an object
    python_tweets = Twython(creds['CONSUMER_KEY'], creds['CONSUMER_SECRET'])
    # Create our quer
    query = {'q': symbol,
            'count': count,
            'lang': 'en',
            'since': time_search,
            'until': time_search_end
    }

    # Search tweets
    dict_ = {'user': [], 'date': [], 'text': [], 'favorite_count': []}
    for status in python_tweets.search(**query)['statuses']:
        dict_['user'].append(status['user']['screen_name'])
        dict_['date'].append(status['created_at'])
        dict_['text'].append(status['text'])
        dict_['favorite_count'].append(status['favorite_count'])

    # Structure data in a pandas DataFrame for easier manipulation
    df = pd.DataFrame(dict_)
    df.sort_values(by='favorite_count', inplace=True, ascending=False)
    return df

def clean_text(text):
    lemmatizer = WordNetLemmatizer()
    punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
    stop_words = list(stopwords.words('english')) + ['will', 'are', 'at', 'as','to','is']
    emoji_pattern = re.compile("["
    u"\U0001F600-\U0001F64F"  # emoticons
    u"\U0001F300-\U0001F5FF"  # symbols & pictographs
    u"\U0001F680-\U0001F6FF"  # transport & map symbols
    u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                    "]+", flags=re.UNICODE)
    if len(text)>2:
        clear_text = []
        for word in text.split():
            word = str(word).lower()
            if word.startswith('http') or word in stop_words:
                continue
            # word = word.translate(str.maketrans('', '', string.punctuation + punctuations))
            word =  re.sub(r'[^\w\s]','',word) #remove punctuation with regex 
            word = "".join([i for i in word if not i.isdigit()])
            # word = "".join([i for i in word if not i.isdigit() and i not in string.punctuation + punctuations])
            word = emoji_pattern.sub(r'', word) # no emoji
            word_lema = lemmatizer.lemmatize(word)
            if len(word_lema)>2 and word_lema not in stop_words:
                clear_text.append(word_lema) 
        return " ".join(clear_text)
    else:
        return ""

def run_clean_text(tweets_data_frame):
    tweets_data_frame['clean_text'] = tweets_data_frame['text'].apply(lambda s: clean_text(s))
    # print(tweets_data_frame['clean_text'])
    # tweets_data_frame['clean_text'] = tweets_data_frame['text'].apply(lambda s: preprocess_tweet(s))
    return tweets_data_frame

def get_top_15(tweets_data_frame):
    word_dict = {}
    for i in range(tweets_data_frame.shape[0]):
      list_words = tweets_data_frame.iloc[i]["clean_text"].split()
      for word in list_words:
        if word not in word_dict.keys():
          word_dict[word] = 0
        word_dict[word] += 1
    sort_orders = sorted(word_dict.items(), key=lambda x: x[1], reverse=True)

    ret = []
    for i in range(min(len(sort_orders),15)):
        ret.append({
            'x' : sort_orders[i][0], 
            'y': sort_orders[i][1]})
    return ret

def stock_price_graph(stock_name):
    price_history = yf.Ticker(stock_name).history(period='1y', # valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
                                    interval='1mo', # valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
                                    actions=False)
    time_series = list(price_history['Open'])
    # dt_list = [pendulum.parse(str(dt)).float_timestamp for dt in list(price_history.index)]
    dt_list = [dt for dt in list(price_history.index)]
    
    print(price_history['Open'].keys(), time_series)
    lst = []
    for key, val in price_history['Open'].items():
        lst.append([key, val])
    return lst

def extract_word(words):
  lst = []
  for word in words:
    lst.append(word.lower())
    for synset in wn.synsets(word):
      for lemma in synset.lemmas():
        lst.append(lemma.name().lower())
  return set(lst)

############################################################
buy_words = ("outperform", "buy", "sector perform", "Hot", "Bulles", "overweight", "Positive", "strong buy")
sell_words = ("sell", "underperform", "underweight", "Underwt/In-Line", "Frozen", "Bleeding", "reduce")
holding_words = ("hold", "neutral", "market perform")
BUY_WORDS = extract_word(buy_words)
SELL_WORDS = extract_word(sell_words)
HOLDING_WORDS = extract_word(holding_words)
############################################################

def count_words_exist_in_other(words, other):
  counter = 0
  for word in words:
    if word in other:
      counter += 1
  return counter

def tweet_hold_buy_sell(lst):
  counter_buy = count_words_exist_in_other(BUY_WORDS, lst)
  counter_sell = count_words_exist_in_other(SELL_WORDS, lst)
  counter_hold = count_words_exist_in_other(HOLDING_WORDS, lst)
  print(counter_buy, counter_sell, counter_hold)
  if counter_buy > counter_sell and counter_buy > counter_hold: # BUY
    return 'Buy'
  elif counter_sell > counter_buy and counter_sell > counter_hold: # SELL
    return 'Sell'
  else:
    return 'Hold'

def count_hold_buy_sell(tweets):
  dict_ = {'Buy': 0, 
           'Sell': 0,
           'Hold': 0}
  for tweet in tweets['clean_text']:
    words = tweet.split()
    lst = extract_word(words)
    dict_[tweet_hold_buy_sell(lst)] += 1
  return  dict_.values(),dict_.keys()

def sentiment_tweets(tweets):
  tweets['clean_text'] = tweets['text'].apply(lambda s: preprocess_tweet(s))
  analyzer = create_analyzer(task="sentiment", lang="en") 
  sentiment = {'NEG': [], 'POS': []}
  tweets['sentiment'] = 0
  for i in range(tweets.shape[0]):
    statmente = analyzer.predict(tweets.iloc[i]["clean_text"])
    sentiment['NEG'].append(round(statmente.probas['NEG'], 2))
    sentiment['POS'].append(round(statmente.probas['POS'], 2))
  return sentiment

def count_values_sentiment(sentiment):
  dict_ = {}
  for i in np.linspace(0,1,11):
    dict_[round(i,1)] = 0
  for sent in sentiment:
    dict_[round(sent,1)] +=1
  return dict_

