
async function getProduct() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

export default async function ProductServer() {
  let products = await getProduct();
  return (
    <div>
      <h2>This User list is fetched throgh server component with the loader</h2>
      {products.map((item) => (
        <div key={item.id}>
          <h3> Name : {item.firstName}</h3>
        </div>
      ))}
    </div>
  );
}


// here we added loader before api calls
// we just need to make file with loading.js
