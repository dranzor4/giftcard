import arrowDown from "../../assests/images/icon/down-arrow.svg";
import "./Cart.css";
const Cart = () => {
  const handleCartAcc = () => {
    console.log("yo");
  };
  return (
    <>
      <div className="container cart-item">
        <div className="row m-0">
          <div className="col-5 p-0">
            <img src="Images/amazon-card.png" alt="" className="img-fluid" />
          </div>
          <div className="col-7 cart-data">
            <p className="h14">Amazon Shopping Voucher</p>
            <p className="h16">₹1000</p>
            <p className="h12">Value of Reward Points: ₹150</p>
          </div>
        </div>
        <div className="row mx-0 mt-3">
          <div className="col-5 p-0">
            <p className="h12 text-primary">
              View more details
              <i className="cart-icon">
                <img src={arrowDown} alt="" onClick={handleCartAcc} />
              </i>
            </p>
          </div>
          <div className="col-7 text-center">
            <div className="row">
              <div className="col-5 cart-select">
              <label htmlFor="cart-qty">Qty:</label>
                <select name="" id="cart-qty" className="h12">
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
              </div>
              <div className="col-7 cart-add-del pt-2">
                <span className="btn-edit px-1">Edit</span>
                <span className="px-1">Delete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
