import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

// style
import "./ToggleBlackBtn.css"

function ToggleBlackBtn({radios, selected, setSelected, customeClass}) {
  return (
    <>
      <ButtonGroup className={customeClass} >
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={"outline-dark"}
            name="radio"
            value={radio.value}
            checked={selected === radio.value}
            onChange={(e) => setSelected(e.currentTarget.value)}
            className={`${selected === radio.value ? ".active-btn" : ""}`}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default ToggleBlackBtn;