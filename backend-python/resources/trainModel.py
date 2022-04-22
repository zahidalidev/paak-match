import pickle
import traceback
import numpy as np
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from flask_restful import Resource
from flask import request
from bson import json_util
import json

class TrainModel(Resource):

    @staticmethod
    def post():
        try:
            choiceLists = request.json
            choiceLists = np.array(choiceLists)
            resultList = []
            for choice in choiceLists:
                test_data = [choice]
                    
                def prediction(X_test, clf_object):
                    y_pred = clf_object.predict(X_test)
                    return y_pred

                filename = 'dataset/finalized_model.sav'
                loaded_model = pickle.load(open(filename, 'rb'))

                y_pred_gini = prediction(test_data, loaded_model)

                resultList.append(y_pred_gini[0])
        
            return  [int(x) for x in resultList]

        except Exception:
            return traceback.format_exc()

    @staticmethod
    def get():
        try:
            train_data = pd.read_excel('dataset/DataSetAI.ods', sheet_name="Sheet1")

            def splitdataset(train_data):
                X_train = train_data.iloc[: , :9]
                Y_train = train_data.iloc[:, 9:10]
                return X_train, Y_train
                
            def train_using_gini(X_train, y_train):
                clf_gini = DecisionTreeClassifier(criterion = "gini",
                        random_state = 100)

                clf_gini.fit(X_train, y_train)
                return clf_gini
                
            X_train, Y_train = splitdataset(train_data)
            clf_gini = train_using_gini(X_train, Y_train)

            filename = 'dataset/finalized_model.sav'
            pickle.dump(clf_gini, open(filename, 'wb'))

            return True
        except Exception:
            return traceback.format_exc()


