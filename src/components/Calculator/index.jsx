import { Modal,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";
const CalculatorModal = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="modal_cont">
            <div className="modal_items">
            <p><img src="images/Close.svg" alt="" onClick={handleClose}/></p>
              <div className="calculator_title">
                <i><img src="images/fa-solid_gifts.svg" alt="" /></i>
                <span className="title_text">Reward Points Calculator</span>
              </div>
            </div>
            <div className="modal_items">
              <div className="options">
                <select name="" id="" className="select">
                  <option value="" className="select">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
                <input type="text" name="" id="" className="select" placeholder="Search Brand" />
                <input type="text" name="" id="" className="select" placeholder="Enter Amount" />
              </div>
            </div>
            <div className="modal_items">
              <div className="modal_info">
                <div className="info_item">
                  <p>Price</p>
                  <p>-</p>
                </div>
                <div className="info_item">
                  <p>Regular Reward Points</p>
                  <p>-</p>
                </div>
                <div className="info_item">
                  <p>Bonus Reward Points</p>
                  <p>-</p>
                </div>
                <div className="info_item">
                  <p>Value of Reward Points</p>
                  <p>-</p>
                </div>
                <div className="info_item">
                  <p>Net Effective Price</p>
                  <p>-</p>
                </div>
              </div>
            </div>
            <div className="modal_items">
              <div className="modal_btns">
                <Button className="modal_btn_primary">View Product</Button>
                <Button className="modal_btn_secondary">Add To Cart</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CalculatorModal;
