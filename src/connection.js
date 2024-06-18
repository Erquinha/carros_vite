import connection from "./db.js";


    //método responsável por realizar a leiturea
    export function read(callback) {
        connection.query('SELECT * FROM Carros', callback);

    }
    //método resposavel por realizar inserção
    export function create(Cor, Placa, Chassi, Modelo, Marca, Valor, Ano, Consultor, callback) {
        connection.query('INSERT INTO Carros (Cor, Placa, Chassi, Modelo, Marca, Valor, Ano, Consultor) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ', [Cor, Placa, Chassi, Modelo, Marca, Valor, Ano, Consultor], callback);

    }
    //metodo por realizar a atualização
    export function update(id, novosDados, callback) {
        connection.query('UPDATE Carros WHERE id = ?', [novosDados, id], callback);
    
    }
    //metodos responsaveis por realizar o delete
    export function deletePes(id, callback) {
        //setar como inativo ao invés de usar delete
        connection.query('DELETE from Carros WHERE id = ?', [ id], callback);

    }



export default connection;
