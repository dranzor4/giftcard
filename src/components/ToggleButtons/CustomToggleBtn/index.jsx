import { memo } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

// style
import "./CustomToggleBtn.css"

function CustomToggleBtn({radios, selected, setSelected, customeClass, name}) {
  return (
    <>
      <ButtonGroup className={customeClass} >
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${radio.value}`}
            type="radio"
            variant={"outline-dark"}
            name={name}
            value={radio.value}
            checked={selected === radio.value}
            onChange={setSelected}
            className={`${selected === radio.value ? ".active-btn" : ""}`}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default memo(CustomToggleBtn);