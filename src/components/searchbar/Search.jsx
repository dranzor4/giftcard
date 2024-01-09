import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Search = () => {
    return (
    <>
      
      <div className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/banner2.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/banner1.png"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Search;
