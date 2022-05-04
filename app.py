from flask import Flask

# refrence this file
app = Flask(__name__)

@app.route('/')
def index():
    return "hello wolrd"

if __name__ == '__main__':
    app.run(debug=True)