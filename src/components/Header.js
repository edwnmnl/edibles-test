const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="header__left__menu">
            <a href="/" className="nav__links">
              Home
            </a>
            <a href="/" className="nav__links">
              About us
            </a>
            <a href="/" className="nav__links">
              Diet Plans
            </a>
            <a href="/" className="nav__links">
              <div className="nav__button">Select plans</div>
            </a>
          </div>
          <div className="logo">
            <img src="/logo.png" alt="ald" height="60px" />
          </div>
          <div className="header__right__menu">
            <a href="/" className="nav__links">
              Sign in
            </a>
            <a href="/" className="nav__links">
              <div className="nav__button">Register</div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
