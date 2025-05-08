import { useEffect, useState } from 'react';

export default function MiListaAmazon() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/amazon-products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Haz click aquí para ver mis productos favoritos de Amazon</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(p => (
          <div key={p.asin} style={{ width: 200, margin: 10 }}>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <img src={p.image} alt="" style={{ width: '100%', borderRadius: 10 }} />
              <p>{p.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
