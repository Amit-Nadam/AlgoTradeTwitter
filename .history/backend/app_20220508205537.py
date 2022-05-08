from flask import Flask

# refrence this file
app = Flask(__name__)

@app.route("/analysis", methods=["GET"])
def index():
    response_body = {}
    response_body['']
    return response_body


if __name__ == '__main__':
    app.run(debug=True)