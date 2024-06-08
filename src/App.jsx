import { useState } from "react";

function Home(){
  // const Product = {
  //   title : "The Luxurious Leather Jacket",
  //   price : 1499,
  //   hasoffer:true
  // }
  // let offerContent;
  //   if(Product.hasoffer){
  //     offerContent = <span id="offer">30% off</span>
  //   }else{
  //     offerContent = <></>
  //   }

    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red",
    });
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>It is a {car.color} {car.model} from {car.year}.</p>
        <button type="button" onClick={() => setCar.model("blue")}>
        Blue
      </button>
      </>
    );
  }
  

export default Home;