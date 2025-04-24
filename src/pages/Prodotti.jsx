
import React from 'react';

const prodotti = [
  { id: 1, titolo: "Zaino Impermeabile", vendite: 23, visual: 140, da: "12 giorni" },
  { id: 2, titolo: "Tastiera Meccanica RGB", vendite: 51, visual: 402, da: "30 giorni" },
];

export default function Prodotti() {
  return (
    <>
      <h1>Prodotti attivi su eBay</h1>
      <table className="tabella">
        <thead>
          <tr>
            <th>Titolo</th>
            <th>Vendite</th>
            <th>Visualizzazioni</th>
            <th>Online da</th>
          </tr>
        </thead>
        <tbody>
          {prodotti.map(p => (
            <tr key={p.id}>
              <td>{p.titolo}</td>
              <td>{p.vendite}</td>
              <td>{p.visual}</td>
              <td>{p.da}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
