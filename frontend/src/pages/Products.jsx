
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products(){
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/api/products")
      .then(res => res.json())
      .then(setItems);
  },[]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(p => (
        <Link key={p.slug} to={`/products/${p.slug}`} className="bg-white shadow p-3 rounded-xl">
          <img src={p.image || 'https://via.placeholder.com/300'} className="w-full h-44 object-cover rounded-lg" />
          <h3 className="mt-2 font-bold">{p.name}</h3>
          <p>₹{p.basePrice}</p>
        </Link>
      ))}
    </div>
  );
}
