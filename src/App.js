import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Intro from './components/Intro/Intro';
import Social from './components/Social/Social';
import About from './components/About/About';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App" style={{position: 'relative'}}>
      <Header/>
      <Intro/>
      <Social/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
