from flask import Flask, jsonify, request
from flask_cors import CORS

# Instantiation
app = Flask(__name__)

# Settings for comunication betwen servers
CORS(app)

# Routes
@app.route('/application', methods=['POST'])
def evaluateApplication():
    print(request.json)
    tax_id = request.json['Tax_Id'],
    business_name = request.json['Business_Name'],
    requested_amount = request.json['Requested_Amount']

    decision = "Decline"

    if requested_amount == 50000:
        decision = "Undecided"
    elif requested_amount < 50000:
        decision = "Approved"
    
    return jsonify({
        'decision': decision
    })


if __name__ == "__main__":
    app.run(debug=True)