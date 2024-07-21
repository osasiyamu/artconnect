
const FrenchNavbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg" aria-label="Navigation principale">
      <div className="container-fluid">
        <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Basculer la navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/artconnect/">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/artconnect/discover">Découvrir</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/artconnect/community">Communauté</a>
            </li>
          </ul>
          <a className="navbar-brand mx-auto websiteName" href="/artconnect/" aria-label="ArtConnect Accueil">ArtConnect</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/artconnect/shop">Boutique</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/artconnect/cart">Mon Panier</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/artconnect/profile" aria-label="Profil">
                <i className="bi bi-person-fill" aria-hidden="true"></i>
                <span className="visually-hidden">Profil</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FrenchNavbar;
