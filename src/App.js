import logo from './logo.svg';
import './App.css';

function App() {

  const Products = [
    { name: "Watch", price: "1000" },
    { name: "Laptop", price: "10000" },
    { name: "Tablet", price: "12000" },
    { name: "Mobile", price: "20000" },
  ]
  return (
    <div className="App">

      {
        Products.map(product => <Pro name={product.name} price={product.price}></Pro>)
      }
      {/* <Products name="Watch" price="1000"></Products>
      <Products name="Laptop" price="42000"></Products>
      <Products name="Mobile" price="20000"></Products> */}
    </div>
  );
}

function Pro(props) {
  return (
    <div className="Product">
      <h3>Product Name:{props.name} </h3>
      <p>Price:{props.price}  </p>
    </div>
  )
}
export default App;
