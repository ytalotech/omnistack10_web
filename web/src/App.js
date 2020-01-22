import React, { useState, useEffect } from 'react';
// useEffect serve para disparamos uma função, toda vex que uma informação alterar ou uma unica vez
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]); //ja que é multiplos devs é bom array

  useEffect(() => {
    async function loadDevs() {

      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    //e.preventDefault(); //rvitar enviar para outra página

    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]); //é assim que faz uma adição. remover o .filter, alterar .map
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {/* não coloco chaves prque estou declarando o retiorno da função */}
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
