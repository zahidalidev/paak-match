from flask_restful import Resource
from flask import request
import traceback
import json
import numpy as np
import pandas as pd
from sklearn.metrics import confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report


class User(Resource):

    @staticmethod
    def post():
        try:
            data = request.json
            user_dic = {
                "fullName": data["fullName"],
                "email": data["email"],
                "contactNumber": data["contactNumber"],
                "password": data["password"],
            }

            # find user to verify user with the same email already exists or not

            # if user is not exists
            # if user is None:
               
            #     return res

            return 'This email is already Registered'

        except Exception:
            return traceback.format_exc()

    @staticmethod
    def get(email, password):
        try:

            # find user by email and password.
            # user = userCol.find_one({"email": email, "password": password}, {"password": False})

            # if user is None:
            #     return 'Email or Password is invalid'

            # user = json.loads(json_util.dumps(user))  # convert response to json
            # user["_id"] = user["_id"]["$oid"]

            return "user"

        except Exception:
            return 'Email or Password is invalid'


