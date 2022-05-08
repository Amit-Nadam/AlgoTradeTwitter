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
    response_body['pie'] = 
    return response_body


if __name__ == '__main__':
    app.run(debug=True)