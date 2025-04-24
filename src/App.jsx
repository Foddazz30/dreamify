
import React from 'react';

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div className="sidebar">
        <h2>Dreamify</h2>
        <a href="#">Dashboard</a>
        <a href="#">Ordini</a>
        <a href="#">Prodotti</a>
      </div>
      <div className="main">
        <h1>Benvenuto su Dreamify</h1>
        <p>Prossimo step: collegare eBay e visualizzare i dati reali.</p>
      </div>
    </div>
  );
}
