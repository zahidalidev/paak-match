from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from resources.trainModel import TrainModel
from resources.user import User
from resources.verifyImages import VerifyImages

app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(TrainModel, '/trainmodel', '/trainmodel/<id>')

api.add_resource(VerifyImages, '/verifyimages')

api.add_resource(User, '/user', '/user/<id>', '/user/<email>/<password>')

if __name__ == '__main__':
    app.run(debug=True)  # important to mention debug=True
