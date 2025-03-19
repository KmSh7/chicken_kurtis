import './App.css';
import Footer from './components/footer/Footer';
import Headder from './components/headding/headder/Headder';
import Navigation from './components/headding/navigation/Navigation';
import Main from './components/main/Main';
import Offer from './components/offers/Offer';

function App() {
  return (
    <div className="App">

      {/* top most div for sale offer */}
      <div id="offers" className='offers'>
        <Offer id="offer"/>
      </div>

      {/* headder and navigation tab div */}
      <div id="headding" className="headding" >
        <Headder id="headder" />
        <Navigation  id="navigation" />
      </div>
      
      {/* main div */}
      <Main id="main"/>

      {/* Footer div */}
      <Footer id="footer" />
    </div>
  );
}

export default App;
