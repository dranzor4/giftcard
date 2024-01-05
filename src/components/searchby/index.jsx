import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBy = () => {
  const a = [
    { name: "Categories" },
    { name: "Offers" },
    { name: "Occasion" },
    { name: "Recipient" },
  ];

  return (
    <>
    <div className="container">
      <h5>Search by</h5>
      <div className="row">
        {a.map((item, index) => (
          <div key={index} className="col-3 col-md-3 col-lg-3">
            <div className="text-center mb-4">
              <img src="./logo192.png" alt="" className="img-fluid rounded-circle bg-light p-6" style={{ width: "50px", height: "50px" }}/>
              <p className="mt-2">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SearchBy;