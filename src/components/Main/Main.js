import './Main.css';
import Promo from './Promo';
import AboutProject from './AboutProject';
import Techs from './Techs';

export default function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
    </main>
  );
};