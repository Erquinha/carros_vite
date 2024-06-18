import  express from  'express';
const app = express();
import cors from 'cors';

import  {getAllCarros, createCarros, updateCarros, deleteCarros } from "./Controller.js";
//import {getAllCarros, createCarros, updatePessoa, deleteCarro } from"./Controller.js";

app.use(express.json());
app.use(cors());

app.get('/carros', getAllCarros);
app.post('/carros', createCarros);
app.put('/carros:/id', updateCarros);
app.delete('/carros/:id', deleteCarros);

app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso na porta 3000`);

});
