import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";
const CalculatorModal = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="title">
            <h5>Reward Points Calculator</h5>
            <hr />
          </div>
          <div className="search_product">
            <div className="searchitem">
              <div className="select">
                <select>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <img src="images/arrow.png" alt="" />
              </div>
            </div>
            <div className="searchitem">
              <input type="text" className="form-control" />
            </div>
            <div className="searchitem">
              <input type="number" className="form-control" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CalculatorModal;
