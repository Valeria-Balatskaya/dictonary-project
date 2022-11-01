import './App.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className='container'>
       <header className='App-header'>
        <h1>Dictionary</h1>
       </header>
       <main>
        <Dictionary defaultKeyword="night" />
       </main>
       <footer className='App-footer'>
        Coded by {" "}
        <a href="https://github.com/Valeria-Balatskaya/dictonary-project" target="_blank" rel="noreferrer" className='ftr'>Valeria Balatska</a>
       </footer>
       </div>
    </div>
  );
}
