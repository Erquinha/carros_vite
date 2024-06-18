import React, { useState, useEffect } from 'react';
import './FormLer.css';

function FormLer() {
    const [consultaDados, setConsultaDados] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/carro', {
                method: 'UPDATE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setConsultaDados(data);
        } catch (err) {
            console.error("Erro ao buscar dados do banco", err);
        }
    };

    useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Ler dados do banco</button>
            </form>

            <ol>
                {consultaDados.map((linha, index) => (
                    <li key={index}>
                        <span>Cor: {linha.Cor}</span>
                        <span>Placa: {linha.Placa}</span>
                        <span>Chassi: {linha.Chassi}</span>
                        <span>Modelo: {linha.Modelo}</span>
                        <span>Marca: {linha.Marca}</span>
                        <span>Valor: {linha.Valor}</span>
                        <span>Ano: {linha.Ano}</span>
                        <span>Consultor: {linha.Consultor}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default FormLer;
