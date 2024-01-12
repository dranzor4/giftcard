import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from './SearchBy.module.css';

const SearchBy = () => {
  const a = [
    { name: "Categories", url: "category.png" },
    { name: "Offers", url: "offers.png" },
    { name: "Occasion", url: "Occassions.png" },
    { name: "Recipient", url: "Recipient.png" },
  ];

  return (
    <div className="searchByContainer">
      <h5 className={style.title}>Search by</h5>
      <div className="row">
        {a.map((item, index) => (
          <div key={index} className="col-3 col-md-3 col-lg-3">
            <div className="text-center mb-4">
              <div className={style.img_icon}>
                <img src={`images/${item?.url}`} alt="" className={`img-fluid bg-light p-6 ${style.searchby_img}`} />
              </div>
              <p className="mt-2">{item?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBy;
