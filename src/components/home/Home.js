import React from "react";
import Product from "../product/Product";
import product1 from "../../images/product1.jpg";
import product2 from "../../images/product2.jpg";
import product3 from "../../images/product3.jpg";
import product4 from "../../images/product4.jpg";
import product5 from "../../images/product5.jpg";
import product6 from "../../images/product6.jpg";
import product7 from "../../images/product7.jpg";
import product8 from "../../images/product8.jpg";
import product9 from "../../images/product9.jpg";
import product10 from "../../images/product10.jpg";
import product11 from "../../images/product11.jpg";
import product12 from "../../images/product12.jpg";
import "../home/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <Product
          id="1102021"
          title="black 705 sipper"
          price={499}
          image={product3}
          description="black bottle with sipper"
        />

        <Product
          id="2102021"
          title="black 705 bottle"
          price={699}
          image={product4}
          description="black bottle with handle"
        />
      </div>
      <div className="home__row">
        <Product
          id="3102021"
          title="white glass bottle"
          price={899}
          image={product7}
          description="premium white glass bottle"
        />
        <Product
          id="4102021"
          title="premium green bottle"
          price={799}
          image={product2}
          description="premium matt-finish green bottle"
        />
        <Product
          id="5102021"
          title="premium blue bottle"
          price={499}
          image={product6}
          description="premium matt-finish blue bottle"
        />
      </div>
      <div className="home__row">
        <Product
          id="6102021"
          title="premium matt-finish bottles"
          price={1599}
          image={product8}
          description="Buy two premium glossy-finish yellow and green bottles"
        />
        <Product
          id="7102021"
          title="premium glossy-finish bottles"
          price={1999}
          image={product12}
          description="Buy three premium glossy-finish grey, green, blue bottles"
        />
      </div>
      <div className="home__row">
        <Product
          id="8102021"
          title="matt-grey thermos flask"
          price={899}
          image={product1}
          description="matt-grey thermos flask keep cold as cold and warn as warm"
        />
        <Product
          id="9102021"
          title="glossy-grey thermos flask"
          price={999}
          image={product11}
          description="glossy-grey thermos flask keep cold as cold and warn as warm"
        />
      </div>

      <div className="home__row">
        <Product
          id="10102021"
          title="mug bottle black small"
          price={500}
          image={product9}
          description="enjoy our popular mug bottle"
        />
        <Product
          id="11102021"
          title="mug bottle yellow small"
          price={500}
          image={product5}
          description="enjoy our popular mug bottle"
        />
        <Product
          id="12102021"
          title="mug bottle white-coffee small"
          price={500}
          image={product10}
          description="enjoy our popular mug bottle"
        />
      </div>
    </div>
  );
}

export default Home;
