"use client";

import { useEffect, useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            let response = await fetch("https://dummyjson.com/products");
            let data = await response.json();
            setProducts(data.products);
        } catch (error) {
            //console.error('Error fetching data:', error);
            // Handle error or set default state for products
        }
    };

    fetchData();

}, []);
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {
            products.map((item)=>(
                <h3 key={item.id}>
                    Name : {item.title}
                </h3>
            ))
        }

      </ul>
    </div>
  );
}
