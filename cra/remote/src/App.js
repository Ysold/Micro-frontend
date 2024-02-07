import LocalButton from './Button';
import Header from '../../sharedComponent/src/components/Header';
import Footer from '../../sharedComponent/src/components/Footer';
import RemoteComponent from './components/RemoteComponent';
import PokeArret from './components/pokeArret';

const App = () => (
  <div>
    <Header />
    <h1>Basic Host-Remote</h1>
    <RemoteComponent title="Remote Landing Page" />
    <h2>Remote</h2>
    <LocalButton />
    <PokeArret />
    <Footer />
  </div>
);

export default App;
