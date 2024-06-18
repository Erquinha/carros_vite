import React, { useState } from 'react';
import './FormCadastro.css';


function FormCadastro() {
 const [formValores, setFormValores] = useState({
   Cor: '',
   Placa: '',
   Chassi: '',
   Modelo: '',
   Marca: '',
   Valor: '',
   Ano: '',
   Consultor: '',
 });


 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormValores((prevState) => ({
     ...prevState,
     [name]: value,
   }));
 };


 const handleSubmit = async (e) => {
   e.preventDefault();


   try {
     console.log("Dados a serem enviados:", formValores);
     const response = await fetch('http://localhost:3000/carro', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(formValores)
     });
     const json = await response.json();
     console.log(response)
     console.log(json);
     //alert(json.carro)
   } catch (err) {
     console.error("Erro ao enviar os dados", err)
   }
 };


 return (
   <div>
     <form className="form-container" onSubmit={handleSubmit}>
       <div className="input-group">
         <label htmlFor="Cor" className="label">Cor:</label>
         <input type="text" id="Cor" name="Cor" value={formValores.Cor} onChange={handleChange} className="input-field" />
       </div>
       <div className="input-group">
         <label htmlFor="Placa" className="label">Placa:</label>
         <input type="text" id="Placa" name="Placa" value={formValores.Placa} onChange={handleChange} className="input-field" />
       </div>
       <div className="input-group">
         <label htmlFor="Chassi" className="label">Chassi:</label>
         <input type="text" id="Chassi" name="Chassi" value={formValores.Chassi} onChange={handleChange} className="input-field" />
       </div>
       <div className="input-group">
         <label htmlFor="Modelo" className="label">Modelo:</label>
         <input type="text" id="Modelo" name="Modelo" value={formValores.Modelo} onChange={handleChange} className="input-field" />
       </div>
       <div className="input-group">
         <label htmlFor="Marca" className="label">Marca:</label>
         <input type="text" id="Marca" name="Marca" value={formValores.Marca} onChange={handleChange} className="input-field" />
       </div>
       <div className="input-group">
         <label htmlFor="Valor" className="label">Valor:</label>
         <input type="text" id="Valor" name="Valor" value={formValores.Valor} onChange={handleChange} className="input-field" />
       </div>
       <div className="input-group">
         <label htmlFor="Ano" className="label">Ano:</label>
         <input type="text" id="Ano" name="Ano" value={formValores.Ano} onChange={handleChange} className="input-field" />
       </div>
       <div className="input-group">
         <label htmlFor="Consultor" className="label">Consultor:</label>
         <input type="text" id="Consultor" name="Consultor" value={formValores.Consultor} onChange={handleChange} className="input-field" />
       </div>


       <button type="submit" className="button">Cadastrar</button>
     </form>
   </div>
 );
}


export default FormCadastro;
