from flask import Flask

# refrence this file
app = Flask(__name__)

@app.route("/analysis", methods=["GET"], strict_slashes=False)
def index():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body


if __name__ == '__main__':
    app.run(debug=True)