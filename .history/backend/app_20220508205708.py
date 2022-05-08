from flask import Flask

# refrence this file
app = Flask(__name__)

@app.route("/analysis", methods=["GET"])
def index():
    response_body = {}
    response_body['treeMap'] = [
            {
                'x': 'New Delhi',
                'y': 218
            },
            {
                'x': 'Kolkata',
                'y': 149
            },
            {
                'x': 'Mumbai',
                'y': 184
            },
            {
                'x': 'Ahmedabad',
                'y': 55
            },
            {
                'x': 'Bangaluru',
                'y': 84
            },
            {
                'x': 'Pune',
                'y': 31
            },
            {
                'x': 'Chennai',
                'y': 70
            },
            {
                'x': 'Jaipur',
                'y': 30
            },
            {
                'x': 'Surat',
                'y': 44
            },
            {
                'x': 'Hyderabad',
                'y': 68
            },
            {
                'x': 'Lucknow',
                'y': 28
            },
            {
                'x': 'Indore',
                'y': 19
            },
            {
                'x': 'Kanpur',
                'y': 29
            }
        ];
    
    
    return response_body


if __name__ == '__main__':
    app.run(debug=True)