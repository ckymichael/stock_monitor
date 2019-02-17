from flask import Flask, render_template, Blueprint

blueprint_ui = Blueprint("ui", __name__)


@blueprint_ui.route("/")
def index():
    return render_template("index.html")

#
# @blueprint_ui.route("/", defaults={"path": ""})
# @blueprint_ui.route("/<path:path>")
# def not_found(path):
#     return render_template("index.html")
