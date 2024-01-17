import React from "react";
import useIsMobile from "../../customHooks/useIsMobile";
import "bootstrap/dist/css/bootstrap.min.css";
import './SearchBy.css';


const SearchBy = () => {
  const mobile=useIsMobile();
  const a = [
    { name: "Categories", url: "category.png" },
    { name: "Offers", url: "offers.png" },
    { name: "Occasion", url: "Occassions.png" },
    { name: "Recipient", url: "Recipient.png" },
  ];

  return (
    <div className="searchByContainer">
      {mobile && <h5 className="searchByTitle ">Search by</h5>}
      <div className="row">
        {a.map((item, index) => (
          <div key={index} className="col-3 col-md-3 col-lg-3">
            <div className="text-center mb-4">
              {mobile && <div className="img_icon">
                <img src={`images/${item?.url}`} alt="" className="img-fluid bg-light p-6 searchByImg"/>
              </div>}
              <p className="mt-2 searchByName">{item?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBy;
