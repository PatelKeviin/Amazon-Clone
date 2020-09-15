import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={require("./images/amazon-home.jpg")}
          alt="home page"
        />

        <div className="home__row">
          <Product
            id="124"
            title="The Lean Startup: How Constant Creates Radically Succussful Businesses Paperback"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />

          <Product
            id="1243"
            title="Crocs Mens Santa Cruz Loafers Espresso/Espresso EU43.5"
            price={9.99}
            rating={2}
            image={require("./images/loafer.jpg")}
          />
        </div>

        <div className="home__row">
          <Product
            id="12434"
            title="Echo Dot with Bose QC35 II"
            price={180.99}
            rating={3}
            image={require("./images/echodot.jpg")}
          />

          <Product
            id="1246735"
            title="Orient Men's '2nd Gen. Bambino Ver. 2' Japanese Automatic Stainless Steel and Leather Dress Watch"
            price={222.38}
            rating={3}
            image={require("./images/watch.jpg")}
          />
          <Product
            id="1242124"
            title="The Lean Startup: How Constant Creates Radically Succussful Businesses Paperback"
            price={19.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="908229442"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1441"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
