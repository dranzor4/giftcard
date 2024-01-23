import React, { useState } from 'react';
import Select from 'react-select';
import "./CustomSelect.css"

const CustomSelect = () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: '1px solid #ccc',
            borderRadius: '8px',
            '&:hover': {
                borderColor: '#CBD5E1',
            },
            fontSize: '14px', // Change the font size
            padding : "10px 16px",
            outline : state.isFocused ? "none" : "none"
        }),
        option: (provided, state) => ({
            ...provided,
            background: state.isFocused ? '#B62028' : 'white',
            color: state.isFocused ? 'white' : 'black',
            borderRadius: "4px"
            // padding: "20px"
        }),
        input : (provided, state) => ({
            ...provided,
            fontSize: "14px",

        }),
        placeholder: (provided, state) => ({
            ...provided,
            transform: `scale(${state.isFocused || selectedOption ? .85 : 1}) translateY(${state.isFocused || selectedOption ? '-100%' : '0'}) translateX(${state.isFocused || selectedOption ? '-5%' : '0'})`,
            transformOrigin: 'left bottom',
            transition: 'transform 0.3s ease-in-out',
            background: "#ffffff",
            maxWidth: "130px",
            padding: "5px",
            fontSize: "14px"
        }),
        menu: (provided) => ({
            ...provided,
            padding: '4px 8px', // Add padding to the parent section
          }),

    };

    const DropdownIndicator = ({ selectProps, ...props }) => {
        const isOpen = selectProps.menuIsOpen;
        return (
            <>
                {
                    isOpen ? <img src="/Images/chevron-up.svg" alt="" className='select-up-arrow' /> : <img src="/Images/chevron-down.svg" alt="" className='select-up-arrow' />
                }
            </>
        );
    };

    return (
        <div className='custom-select'>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                placeholder="Select an option"
                styles={customStyles}
                components={{ DropdownIndicator }}
            />

        </div>
    );

    function handleChange(selectedOption) {
        setSelectedOption(selectedOption);
    }
};

export default CustomSelect;
