import flask
import api

@api.app.route("/")
def home():
    return "Hello, World!"
    
if __name__ == "__main__":
    app.run(debug=True)