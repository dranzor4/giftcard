import { memo } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

// style
import "./CustomToggleBtn.css"
import { Swiper, SwiperSlide } from 'swiper/react';

function CustomToggleBtn({ radios, selected, setSelected, customeClass, name, isCarousel=false }) {
  return (
    <>
      {
        !isCarousel ? <ButtonGroup className={customeClass} >
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
          :
          <ButtonGroup className={customeClass}>
            <Swiper spaceBetween={5} slidesPerView={"auto"} style={{ margin: "0" }}>
              {radios.map((radio, idx) => (
                <SwiperSlide style={{ width: "auto" }}>
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
                </SwiperSlide>
              ))}

            </Swiper>
          </ButtonGroup>
      }

    </>
  );
}

export default memo(CustomToggleBtn);