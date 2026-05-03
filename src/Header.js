/*
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="header-titre">SenTransport</h1>
            <p className="header-soustitre">
                Votre guide du transport en commun a Dakar
            </p>
        </header>
    );
}

export default Header;
*/

import './Header.css';

function Header() {
  const dateAujourdhui = new Date().toLocaleDateString('fr-FR');

  return (
    <header className="header">
      <h1>SénTransport</h1>
      <p>Votre guide du transport en commun à Dakar</p>
      <p>{dateAujourdhui}</p>
    </header>
  );
}

export default Header;



