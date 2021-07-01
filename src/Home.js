import React from "react";
import Product from "./Product";
import "./Home.css";


function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="12321346"
          title="The Lean Startup: How Constant Innovation Creates Radically Business Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
          />
        <Product
          id="12321347"
          title="Vitamix 065337 A2300i Stand Mixer, Plastic, 2 Litres, Slate Grey"
          price={465.90}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51SP-DeQUtL._AC_SX679_.jpg"
          />
      </div>
      
      <div className="home__row">
        <Product
          id="12321343"
          title="BonVivo Sit Stand Workstation - Parent"
          price={179.90}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/7184HjJY8tL._AC_SX679_.jpg"
          />
        <Product
          id="12321341"
          title="Apple AirPods Pro"
          price={190.01}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SX679_.jpg"
          />
        <Product
          id="12321344"
          title="Philips Senseo Quadrante Coffee Pad Machine"
          price={101.89}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81x6Locmy6L._AC_SX679_.jpg"
          />
      </div>

      <div className="home__row">
        <Product
          id="12321345"
          title="CHiQ Freestanding Fridge With Freezer [Energy Class E]"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41WcgbNgsVL._AC_SX679_.jpg"
          />
      </div>
    </div>
  );
}

export default Home;
