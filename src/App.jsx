import "./App.css";
import ProductDetails from "./components/Product/ProductDetails";
import ProductImages from "./components/Product/ProductImages";
import TopNavBar from "./components/TopNavBar/TopNavBar";

function App() {
  return (
    <>
      <TopNavBar />
      <div className='container'>
        <div className='container-child-1'>
          <ProductImages />
        </div>
        <div className='container-child-22'>
          <ProductDetails />
        </div>
      </div>
    </>
  );
}

export default App;
