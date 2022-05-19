import React from 'react';
import { Search } from './features/components/search/Search';
import { Header } from './features/components/header/Header';
import { Footer } from './features/components/footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Header />
          <Search />
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;
