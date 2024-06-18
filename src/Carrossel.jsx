import React, { useState, useEffect } from 'react';
import './Carrossel.css';
import Topo from './Topo'; 

function Carrossel() {
 const imagens = ['imagem de carro1.jpeg', 'imagem de carr 2.webp', 'imagem de carro 3.jpeg'];
 const [indiceAtual, setIndiceAtual] = useState(0);

 const proximoSlide = () => {
   setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
 };

 const voltarSlide = () => {
   setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
 };

 useEffect(() => {
   const intervalo = setInterval(proximoSlide, 5000);
   return () => clearInterval(intervalo);
 }, []);

 return (
   <div className="carrossel-container">
     <Topo /> {/* Adicionando o componente Topo aqui */}
     <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} className="carrossel" />
     <div className="botoes">
       <button onClick={voltarSlide} className="passar_button">&#10094;</button>
       <button onClick={proximoSlide} className="passar_button">&#10095;</button>
     </div>
   </div>
 );
}

export default Carrossel;
