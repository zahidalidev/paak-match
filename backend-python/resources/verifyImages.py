import traceback
import numpy as np
from flask_restful import Resource
from flask import request
import cv2
import numpy as np
import face_recognition
from flask import request
from flask_restful import Resource
import io


class VerifyImages(Resource):

    @staticmethod
    def post():
        try:
            files = request.files

            images = []
            for name, image in files.items():
                in_memory_file = io.BytesIO()
                image.save(in_memory_file)
                image = np.fromstring(
                    in_memory_file.getvalue(), dtype=np.uint8)
                color_image_flag = 1
                image = cv2.imdecode(image, color_image_flag)

                image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
                images.append(image)

            if(len(images) != 2):
                raise Exception("Verification failed, Two faces are required!")

            encoding1 = face_recognition.face_encodings(images[0])
            encoding2 = face_recognition.face_encodings(images[1])[0]
            match = face_recognition.compare_faces(encoding1, encoding2)

            if True in match:
                return True
            else:
                raise Exception(
                    "Verification failed, Try again with clear pictures of your face!")

        except Exception:
            return traceback.format_exc()
