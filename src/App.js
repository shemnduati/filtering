import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");


  // -----------Input filter----------------
  
  // Handel input changes
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  // Filtered Items
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !==-1)
  );


   // -----------Radio filter----------------
   const handleChange = (event) => {
    setSelectedCategory(event.target.value)  
   }

   // -----------Buttons filter----------------
   const handleClick = (event) => {
    setSelectedCategory(event.target.value)
   }

   function filteredData(products,selected,query){
    let filteredProducts = products;

    // if we had already filtered the products
    if(query){
      filteredProducts = filteredItems;
    }

    // Selected filter
    if(selected){
     filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title}) =>
        category === selected || color == selected || company === selected || newPrice == selected || title === selected)
    }
    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => {
      <Card 
       key={Math.random}
       img={img}
       title={title}
       star={star}
       reviews={reviews}
       newPrice={newPrice}
       prevPrice={prevPrice}
      />
    }) 
   }

   const results = filteredData(products,selectedCategory,query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
