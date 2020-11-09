import Header from '../src/Header/Header'
import Main from '../src/Main/Main'
import About from '../src/About/About'
import Projects from '../src/Projects/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <br/>
      <Projects />
      <br/>
      {/* <About />
      <br/> */}
    </div>
  );
}

export default App;
