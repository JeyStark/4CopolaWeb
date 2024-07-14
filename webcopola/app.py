from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "FUNCIONA!"

if __name__ == '__main__':
    app.run(debug=True)
    print("Esto es lo que debería subirse a la web")