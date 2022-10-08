import pprint

from flask import Flask, render_template, url_for, request, make_response
from flask import Flask, flash, request, redirect, url_for
import api as MF

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/base')
def mainn():
    return render_template("BASE.html")


@app.route('/api', methods=['POST', 'GET'])
def api():
    ot = request.json
    ot = MF.api(cmd=ot['cmd'], data=ot['data'])
    print(pprint.pprint(ot))
    if type(ot) == type(""):
        res = make_response("Setting a cookie")
        res.set_cookie('token', str(ot), max_age=60 * 60)
        return res
    return str(ot)


if __name__ == "__main__":
    app.run(debug=True)
