import express from 'express';
const app = express();
import cors from 'cors';
import connection from './db.js';


app.use(express.json());
app.use(cors());

app.post('/CadastrarCarros', (req, res) => {
  
  const {Cor, Placa, Chassi, Modelo, Marca, Valor, Ano, Consultor} = req.body;
  console.log("Dados recebidos", {Cor, Placa, Chassi, Modelo, Marca, Valor, Ano, Consultor});
  const sql = 'INSERT INTO carros_dados (Cor, Placa, Chassi, Modelo, Marca, Valor, Ano, Consultor) VALUES (?, ?, ? , ?, ?, ?, ?, ?,)';
  connection.query(sql, [Cor, Placa, Chassi, Modelo, Marca, Valor, Ano, Consultor], (error,results,fields) => {

    console.log('Dados inseridos com sucesso!');

  });
});

app.listen(3000, () => {
  console.log(`Servidor rodando com sucesso 3000`)
});

export default CadastrarCarros; 