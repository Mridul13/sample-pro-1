import './App.css';
import Info from './components/info';
import About from './components/about';
import Footer from './components/footer';
import Interests from './components/interests';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Info/>
        <About className="aboutMe"/>
        <Interests/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
