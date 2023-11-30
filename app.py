from flask import Flask, render_template, request
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/buscar_movimientos', methods=['POST'])
def buscar_movimientos():
    numero_socio = request.form['numero_socio']

    # Lee los datos desde el archivo JSON
    with open('datos.json') as json_file:
        data = json.load(json_file)

    # Verifica si 'movimientos' está presente en el JSON
    if 'movimientos' in data and isinstance(data['movimientos'], list):
        # Filtra los movimientos correspondientes al número de socio
        movimientos_encontrados = [movimiento for movimiento in data['movimientos'] if movimiento.get('numeroSocio') == int(numero_socio)]

        return render_template('resultados.html', movimientos=movimientos_encontrados, numero_socio=numero_socio)
    else:
        # Maneja el caso en el que 'movimientos' no está presente o no es una lista
        return render_template('resultados.html', movimientos=[], numero_socio=numero_socio)

if __name__ == '__main__':
    app.run(debug=True)
