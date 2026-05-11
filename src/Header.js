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



