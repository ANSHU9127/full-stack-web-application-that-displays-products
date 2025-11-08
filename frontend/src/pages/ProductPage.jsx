
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductPage(){
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [variant, setVariant] = useState(null);

  useEffect(()=>{
    fetch("http://localhost:4000/api/products/" + slug)
      .then(res => res.json())
      .then(setData);
  },[slug]);

  if(!data) return <div>Loading...</div>;

  const { product, plans } = data;

  return (
    <div>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg text-gray-600">₹{product.basePrice}</p>
      <h2 className="mt-6 mb-2 font-semibold">EMI Plans</h2>
      {plans.map((p, i) => (
        <div key={i} className="border p-3 rounded-lg my-2 bg-white">
          <p>₹{p.monthlyAmount}/mo for {p.tenureMonths} months</p>
          <p>{p.interest}% Interest</p>
        </div>
      ))}
    </div>
  );
}
