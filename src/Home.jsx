import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Grid from "./Components/GRID/jsx and css/Grid.jsx";
import Carousel from "./Components/Carousel/Carousel.jsx";
import ScrollToTopButton from "./Components/Scroll/Scroll.jsx";
import "./App.css";
import "./Components/Context.jsx";
import { Outlet } from "react-router-dom";
import CartContext from "./Components/Context.jsx";
import { useState } from "react";
function Home() {
  const [cartcount, setcartcount] = useState(0);
  return (
    <>
      <CartContext.Provider value={{ cartcount, setcartcount }}>
        <Header></Header>
        <Carousel></Carousel>
        <Grid></Grid>
        {/* <section id="seeds-grid"> */}
        {/* <div className="grid-container">
          {imageData.map((value) => (
            <Card
              key={value.id}
              iurl={value.imageUrl}
              name={value.name}
              desc={value.description}
              price={value.price}
            ></Card>
          ))}
        </div> */}
        {/* </section> */}
        <section className="products-grid">
          <Outlet />
        </section>
        <Footer></Footer>
        <ScrollToTopButton></ScrollToTopButton>
      </CartContext.Provider>
    </>
  );
}

export default Home;
