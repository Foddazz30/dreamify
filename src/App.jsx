
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Ordini from './pages/Ordini';
import Prodotti from './pages/Prodotti';

export default function App() {
  const [pagina, setPagina] = useState('dashboard');

  const renderContent = () => {
    switch(pagina) {
      case 'ordini': return <Ordini />;
      case 'prodotti': return <Prodotti />;
      default: return <Dashboard />;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className="sidebar">
        <h2>Dreamify</h2>
        <a onClick={() => setPagina('dashboard')}>Dashboard</a>
        <a onClick={() => setPagina('ordini')}>Ordini</a>
        <a onClick={() => setPagina('prodotti')}>Prodotti</a>
      </div>
      <div className="main">
        {renderContent()}
      </div>
    </div>
  );
}
