import React from 'react';

import Footer from './Footer'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>

      <div className="content">
        <img src="/images/pagina_construcao.gif" alt="" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
