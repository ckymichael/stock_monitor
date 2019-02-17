from server.controller import api
from flask import Flask
from server.controller.FrontEndController import blueprint_ui

app = Flask(__name__)
app.register_blueprint(blueprint_ui)
api.init_app(app)

#
# if __name__ == '__main__':
#     app.run()
