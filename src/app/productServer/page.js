import ProductPrice from "./product";

async function getProduct() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function ProductServer() {
  let products = await getProduct();
  return (
    <div>
      <h2>This Product list is fetched throgh server component</h2>
      {products.map((item) => (
        <div key={item.id}>
          <h3> Name : {item.title}</h3>
          <ProductPrice price={item.price} />
        </div>
      ))}
    </div>
  );
}
