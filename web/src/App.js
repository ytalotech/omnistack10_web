import React, { useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>
          <button type="submit">Salvar</button>        
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev_item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54129629?s=460&v=4" alt="Ytalo Lopes"/>
              <div className="user-info">
                <strong>Ytalo Lopes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CEO na Lopessoftec. Desenvolvedor web em PHP e aprendendo Javascript, reactJs, React Native, NodeJS,... Sempre em busca de novos conhecimentos.</p>
            <a href="https://github.com/lopessoftec">Acessar perfil no Github</a>
          </li>
          <li className="dev_item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54129629?s=460&v=4" alt="Ytalo Lopes"/>
              <div className="user-info">
                <strong>Ytalo Lopes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CEO na Lopessoftec. Desenvolvedor web em PHP e aprendendo Javascript, reactJs, React Native, NodeJS,... Sempre em busca de novos conhecimentos.</p>
            <a href="https://github.com/lopessoftec">Acessar perfil no Github</a>
          </li>
          <li className="dev_item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54129629?s=460&v=4" alt="Ytalo Lopes"/>
              <div className="user-info">
                <strong>Ytalo Lopes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CEO na Lopessoftec. Desenvolvedor web em PHP e aprendendo Javascript, reactJs, React Native, NodeJS,... Sempre em busca de novos conhecimentos.</p>
            <a href="https://github.com/lopessoftec">Acessar perfil no Github</a>
          </li>
          <li className="dev_item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54129629?s=460&v=4" alt="Ytalo Lopes"/>
              <div className="user-info">
                <strong>Ytalo Lopes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CEO na Lopessoftec. Desenvolvedor web em PHP e aprendendo Javascript, reactJs, React Native, NodeJS,... Sempre em busca de novos conhecimentos.</p>
            <a href="https://github.com/lopessoftec">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
