import '../Utility/Button/Button.css';
import '../Utility/Link/Link.css';
import '../Utility/Logo/Logo.css';
import './Navigation.css';

export default function Navigation({ isLoggedIn }) {
 return (
    <nav className="navigation">
      <div className="logo navigation__logo"></div>
      {
        isLoggedIn
        ?
        <button className="navigation__hamburger">
          <span className="navigation__hamburger-bar"></span>
          <span className="navigation__hamburger-bar"></span>
          <span className="navigation__hamburger-bar"></span>
        </button>
        :
        (<>
          <button className="link navigation__register-link">Регистрация</button>
          <button className="button button_style_primary">Войти</button>
        </>)
      }
    </nav>
 );
};
