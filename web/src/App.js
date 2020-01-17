import React, {useState, useEffect} from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
//Componente: Bloco isolado de JSX: HTML, CSS e JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que um componete PAI passa para um componente FILHO
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitde] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitde(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e){
    e.preventDefault(); 

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })
    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithubUsername(e.target.value)}/>
          </div>

          <div className="input-block">
            <label htmlFor="">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="">Latitude</label>
              <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="">Longitude</label>
              <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude}
              onChange={e => setLongitde(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>

      </aside>
      <main>
        <ul>
          <li className="dev-iten">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54335160?s=460&v=4" alt="danielsampar12"/>
              <div className="user-info">
                <strong>Daniel Sampar</strong>
                <span>ReactJS, React Native e Node.js</span>
              </div>
            </header>
            <p>Aprendendo as stacks React, React Native e Node.js. Programador Java.</p>
            <a href="https://github.com/danielsampar12">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-iten">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54335160?s=460&v=4" alt="danielsampar12"/>
              <div className="user-info">
                <strong>Daniel Sampar</strong>
                <span>ReactJS, React Native e Node.js</span>
              </div>
            </header>
            <p>Aprendendo as stacks React, React Native e Node.js. Programador Java.</p>
            <a href="https://github.com/danielsampar12">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-iten">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54335160?s=460&v=4" alt="danielsampar12"/>
              <div className="user-info">
                <strong>Daniel Sampar</strong>
                <span>ReactJS, React Native e Node.js</span>
              </div>
            </header>
            <p>Aprendendo as stacks React, React Native e Node.js. Programador Java.</p>
            <a href="https://github.com/danielsampar12">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-iten">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54335160?s=460&v=4" alt="danielsampar12"/>
              <div className="user-info">
                <strong>Daniel Sampar</strong>
                <span>ReactJS, React Native e Node.js</span>
              </div>
            </header>
            <p>Aprendendo as stacks React, React Native e Node.js. Programador Java.</p>
            <a href="https://github.com/danielsampar12">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
