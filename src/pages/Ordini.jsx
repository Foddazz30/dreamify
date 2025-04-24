
import React from 'react';

const ordiniReali = [
  {
    id: '23-88990-91234',
    data: '2025-04-24',
    cliente: 'Luca Neri',
    totale: '29,99 €',
    stato: 'In attesa',
    img: 'https://via.placeholder.com/50',
    linkAmazon: 'https://www.amazon.it/dp/B0BXXXXXXX'
  },
  {
    id: '23-77889-34567',
    data: '2025-04-23',
    cliente: 'Sara Bianchi',
    totale: '57,00 €',
    stato: 'Spedito',
    img: 'https://via.placeholder.com/50',
    linkAmazon: 'https://www.amazon.it/dp/B0CYYYYYYY'
  }
];

export default function Ordini() {
  return (
    <>
      <h1>Ordini dal tuo store</h1>
      <table className="tabella">
        <thead>
          <tr>
            <th>Foto</th>
            <th>ID Ordine</th>
            <th>Data</th>
            <th>Cliente</th>
            <th>Totale</th>
            <th>Stato</th>
            <th>Amazon</th>
          </tr>
        </thead>
        <tbody>
          {ordiniReali.map(o => (
            <tr key={o.id}>
              <td><img src={o.img} alt="Prodotto" /></td>
              <td>{o.id}</td>
              <td>{o.data}</td>
              <td>{o.cliente}</td>
              <td>{o.totale}</td>
              <td>{o.stato}</td>
              <td><a href={o.linkAmazon} target="_blank">Vai</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
