import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

// style
import "./ToggleBlackBtn.css"

function ToggleBlackBtn({radios, formToggle, setFormToggle}) {
  return (
    <>
      <ButtonGroup >
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={"outline-dark"}
            name="radio"
            value={radio.value}
            checked={formToggle === radio.value}
            onChange={(e) => setFormToggle(e.currentTarget.value)}
            className={`toggle-btn-1 ${formToggle === radio.value ? ".active-btn" : ""}`}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default ToggleBlackBtn;