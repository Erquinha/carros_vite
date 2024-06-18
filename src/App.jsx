import React, { useState } from 'react';
import { FaPlus, FaSearch, FaPen, FaTrash } from 'react-icons/fa';
import FormCadastro from './FormCadastro';
import FormLer from './FormLer';
import FormAtualiza from './FormAtualiza';
import FormDelete from './FormDelete';
import Carrossel from './Carrossel.jsx';
import './App.css';
const App = () => {
 const [currentPage, setCurrentPage] = useState(null);


 const renderPage = () => {
   switch (currentPage) {
     case 'create':
       return <FormCadastro />;
     case 'read':
       return <FormLer />;
     case 'update':
       return <FormAtualiza />;
     case 'delete':
       return <FormDelete />;
     default:
       return null;
    
   }
 };


 return (
   <div className="container">
     <Carrossel />
     <center>
       <button className="button" onClick={() => setCurrentPage('create')}>
         <FaPlus /> Cadastrar (C)
       </button>
       <button className="button" onClick={() => setCurrentPage('read')}>
         <FaSearch /> Ler dados (R)
       </button>
       <button className="button" onClick={() => setCurrentPage('update')}>
         <FaPen /> Atualizar (U)
       </button>
       <button className="button" onClick={() => setCurrentPage('delete')}>
         <FaTrash /> Deletar (D)
       </button>
       {renderPage()}
     </center>
   </div>
 );
};


export default App;
