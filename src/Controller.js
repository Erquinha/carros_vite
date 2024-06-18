import {create, read, update, deletePes} from './connection.js'


export async function createCarros(req, res) {
    const {Cor, Placa, Chassi, Modelo, Marca, Valor, Ano, Consultor } = req.body;
    console.log('Dados recebidos do frontend:', {Cor, Placa, Chassi, Modelo, Marca, Valor, Ano, Consultor});

    create(Cor, Placa, Chassi, Modelo, Marca, Valor, Ano, Consultor, (err, result) => {
        if(err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.status(201).json({ mensagem: 'Carro criado com sucesso'});
    });
}


export async function getAllCarros(req,res) {
   read((err, carros) => {
    if (err) {
        res.status(500).json({error: err.message});
        return;
    }
    res.json(carros);
   });
}

export async function updateCarros(req, res) {
    const { id } = req.params;
    const novosDados = req.body;
    update(id, novosDados, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message});
            return;

        }
        res.send('Carro atualizado com sucesso');

    });

}

export async function deleteCarros(req, res) {
    const { id } = req.params;
    deletePes(id, (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
      
      }
      res.send('Carro exluido com sucesso');
    });
}
