
import React from 'react';

const ordiniFinti = [
  {
    id: '23-12345-12345',
    data: '2025-04-23',
    cliente: 'Mario Rossi',
    totale: '42,90 €',
    stato: 'Spedito'
  },
  {
    id: '23-54321-98765',
    data: '2025-04-22',
    cliente: 'Lucia Verdi',
    totale: '89,00 €',
    stato: 'In attesa'
  }
];

export default function Ordini() {
  return (
    <>
      <h1>Ordini eBay</h1>
      <table style={{ width: '100%', color: 'white', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID Ordine</th>
            <th>Data</th>
            <th>Cliente</th>
            <th>Totale</th>
            <th>Stato</th>
          </tr>
        </thead>
        <tbody>
          {ordiniFinti.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.data}</td>
              <td>{o.cliente}</td>
              <td>{o.totale}</td>
              <td>{o.stato}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
