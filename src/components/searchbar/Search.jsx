import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Search = () => {
  // Sample data from JSON
  const iconData = [
    { id: 1, icon: "bi-search", name: "Search" },
    { id: 2, icon: "bi-person", name: "Person" },
    { id: 3, icon: "bi-envelope", name: "Envelope" },
    { id: 4, icon: "bi-gear", name: "Gear" },
  ];

  return (
    <>
      
      <div className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placehold.it/800x400"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placehold.it/800x400"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Search;
