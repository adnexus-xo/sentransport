import { useState } from 'react';
import './App.css';

import Header from './Header';
import Recherche from './Recherche';
import LigneBus from './LigneBus';
import DetailLigne from './DetailLigne';
import Footer from './Footer';

function App() {
  const [recherche, setRecherche] = useState('');
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);

  // Exemple de données
  const lignes = [
    {
      id: 1,
      numero: '12',
      depart: 'Dakar',
      arrivee: 'Thiès',
      arrets: 5,
      listeArrets: ['Pikine', 'Rufisque', 'Diamniadio']
    },
    {
      id: 2,
      numero: '7',
      depart: 'Guédiawaye',
      arrivee: 'Plateau',
      arrets: 4,
      listeArrets: ['Parcelles', 'Grand Yoff', 'Colobane']
    }
  ];

  // Filtrage des lignes
  const lignesFiltrees = lignes.filter(
    (l) =>
      l.depart.toLowerCase().includes(recherche.toLowerCase()) ||
      l.arrivee.toLowerCase().includes(recherche.toLowerCase()) ||
      l.numero.includes(recherche)
  );

  // Gestion du clic
  function handleClickLigne(ligne) {
    if (
      ligneSelectionnee &&
      ligneSelectionnee.id === ligne.id
    ) {
      setLigneSelectionnee(null);
    } else {
      setLigneSelectionnee(ligne);
    }
  }

  return (
    <div className="App">
      <Header />

      <main className="contenu">
        <Recherche
          valeur={recherche}
          onChange={setRecherche}
        />

        <p className="resultat-recherche">
          {lignesFiltrees.length} ligne
          {lignesFiltrees.length > 1 ? 's' : ''} trouvée
          {lignesFiltrees.length > 1 ? 's' : ''}
        </p>

        {lignesFiltrees.map((ligne) => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
            estSelectionnee={
              ligneSelectionnee &&
              ligneSelectionnee.id === ligne.id
            }
            onClick={() => handleClickLigne(ligne)}
          />
        ))}

        {ligneSelectionnee && (
          <DetailLigne ligne={ligneSelectionnee} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
