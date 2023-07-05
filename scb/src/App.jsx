import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import AppContext from "./components/AppContext";
import Layout from './pages/Layout';
import Sobre from './pages/Sobre';
import axios from "axios";
import ListagemGalpao from './pages/galpoes/Listagem';
import CadastroGalpao from './pages/galpoes/Cadastro';
import AlteracaoGalpao from './pages/galpoes/Alteracao';
import ExclusaoGalpao from './pages/galpoes/Exclusao';
import ListagemAnimal from './pages/animais/Listagem';
import CadastroAnimal from './pages/animais/Cadastro';
import AlteracaoAnimal from './pages/animais/Alteracao';
import ExclusaoAnimal from './pages/animais/Exclusao';
import ListagemFuncionario from './pages/funcionarios/Listagem';
import CadastroFuncionario from './pages/funcionarios/Cadastro';
import AlteracaoFuncionario from './pages/funcionarios/Alteracao';
import ExclusaoFuncionario from './pages/funcionarios/Exclusao';
import ListagemCaminhao from './pages/caminhoes/Listagem';
import CadastroCaminhao from './pages/caminhoes/Cadastro';
import AlteracaoCaminhao from './pages/caminhoes/Alteracao';
import ExclusaoCaminhao from './pages/caminhoes/Exclusao';
import ListagemLotes from './pages/lotes/Listagem';
import CadastroLotes from './pages/lotes/Cadastro';
import AlteracaoLotes from './pages/lotes/Alteracao';
import ExclusaoLotes from './pages/lotes/Exclusao';
import ListagemCliente from './pages/clientes/Listagem';
import CadastroCliente from './pages/clientes/Cadastro';
import AlteracaoCliente from './pages/clientes/Alteracao';
import ExclusaoCliente from './pages/clientes/Exclusao';
import ListagemEntrada from './pages/entradas/Listagem';
import CadastroEntrada from './pages/entradas/Cadastro';
import ExclusaoEntrada from './pages/entradas/Exclusao';
import AlteracaoEntrada from './pages/entradas/Alteracao';
import ListagemVacinacao from './pages/vacinacoes/Listagem';
import CadastroVacinacao from './pages/vacinacoes/Cadastro';
import AlteracaoVacinacao from './pages/vacinacoes/Alteracao';
import ExclusaoVacinacao from './pages/vacinacoes/Exclusao';
import ListagemVenda from './pages/vendas/Listagem';
import CadastroVenda from './pages/vendas/Cadastro';
import AlteracaoVenda from './pages/vendas/Alteracao';
import ExclusaoVenda from './pages/vendas/Exclusao';

import ListagemAnimaisRecebidosMes from './pages/relatorios/AnimaisRecebidosMes';
import NotFound from './pages/NotFound';



const App = () => {
  const [tema, setTema] = useState("light");

  axios.defaults.baseURL = "https://scb-backend-node.onrender.com";

  return (
    <div data-bs-theme={tema}>
      <AppContext.Provider value={{ tema, setTema }}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Sobre />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="galpoes">
                <Route index element={<ListagemGalpao />} />
                <Route path="cadastrar" element={<CadastroGalpao />} />
                <Route path="alterar/:id" element={<AlteracaoGalpao />} />
                <Route path="excluir/:id" element={<ExclusaoGalpao />} />
              </Route>
              <Route path="animais">
                <Route index element={<ListagemAnimal />} />
                <Route path="cadastrar" element={<CadastroAnimal />} />
                <Route path="alterar/:id" element={<AlteracaoAnimal />} />
                <Route path="excluir/:id" element={<ExclusaoAnimal />} />
              </Route>
              <Route path="funcionarios">
                <Route index element={<ListagemFuncionario />} />
                <Route path="cadastrar" element={<CadastroFuncionario />} />
                <Route path="alterar/:id" element={<AlteracaoFuncionario />} />
                <Route path="excluir/:id" element={<ExclusaoFuncionario />} />
              </Route>
              <Route path="caminhoes">
                <Route index element={<ListagemCaminhao />} />
                <Route path="cadastrar" element={<CadastroCaminhao />} />
                <Route path="alterar/:id" element={<AlteracaoCaminhao />} />
                <Route path="excluir/:id" element={<ExclusaoCaminhao />} />
              </Route>
              <Route path="lotes">
                <Route index element={<ListagemLotes />} />
                <Route path="cadastrar" element={<CadastroLotes />} />
                <Route path="alterar/:id" element={<AlteracaoLotes />} />
                <Route path="excluir/:id" element={<ExclusaoLotes />} />
              </Route>
              <Route path="clientes">
                <Route index element={<ListagemCliente />} />
                <Route path="cadastrar" element={<CadastroCliente />} />
                <Route path="alterar/:id" element={<AlteracaoCliente />} />
                <Route path="excluir/:id" element={<ExclusaoCliente />} />
              </Route>
              <Route path="entradas">
                <Route index element={<ListagemEntrada />} />
                <Route path="cadastrar" element={<CadastroEntrada />} />
                <Route path="alterar/:id" element={<AlteracaoEntrada />} />
                <Route path="excluir/:id" element={<ExclusaoEntrada />} />
              </Route>
              <Route path="vacinacoes">
                <Route index element={<ListagemVacinacao />} />
                <Route path="cadastrar" element={<CadastroVacinacao />} />
                <Route path="alterar/:id" element={<AlteracaoVacinacao />} />
                <Route path="excluir/:id" element={<ExclusaoVacinacao />} />
              </Route>
              <Route path="vendas">
                <Route index element={<ListagemVenda />} />
                <Route path="cadastrar" element={<CadastroVenda />} />
                <Route path="alterar/:id" element={<AlteracaoVenda />} />
                <Route path="excluir/:id" element={<ExclusaoVenda />} />
              </Route>
              <Route path="relatorios">
                <Route path="animaisRecebidosMes" element={<ListagemAnimaisRecebidosMes />} />
                <Route path="alterar/:id" element={<AlteracaoVenda />} />
                <Route path="excluir/:id" element={<ExclusaoVenda />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App;