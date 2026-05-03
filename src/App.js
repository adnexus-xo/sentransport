/*
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <p>Bienvenue! Cette application vous aide a trouver votre ligne de bus a Dakar.</p>
      </main>
    </div>
  );
}

export default App;
*/

import Header from './Header';
import Footer from './Footer';
import Statistique from './Statistique';
import './App.css';

function Statistique1() {
  return (
    <div className="statistique">
      <div className="chiffre">10</div>
      <div className="libelle">lignes</div>
    </div>
  );
}

function Statistique2() {
  return (
    <div className="statistique">
      <div className="chiffre">150</div>
      <div className="libelle">arrêts</div>
    </div>
  );
}

function Statistique3() {
  return (
    <div className="statistique">
      <div className="chiffre">5</div>
      <div className="libelle">communes desservies</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />

      <main style={{ padding: '20px' }}>
        <h2>Statistiques du réseau DDD</h2>
        <Statistique1 />
        <Statistique2 />
        <Statistique3 />
      </main>

      <Footer />
    </div>
  );
}

export default App;

