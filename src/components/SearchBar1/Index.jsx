import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./SearchBar.css";
import useIsMobile from "../../customHooks/useIsMobile";

const SearchBar1 = ({ customStyle }) => {
  const modile = useIsMobile();
  return (
    <Form inline className={customStyle}>
      <InputGroup className="searchBox">
        {modile && (
          <InputGroup.Text className="searchMobleBtn" id="search-bar">
            <img src="/Images/Search.svg" alt="" />
          </InputGroup.Text>
        )}
        <Form.Control
          placeholder="Search for Products or Brands"
          aria-label="Username"
          aria-describedby="search-bar"
          className="SearchInput"
          // onChange={device && onChange}
        />
        {!modile && (
          <InputGroup.Text className="searchMobleBtn" id="search-bar">
            <img src="/Images/Search.svg" alt="search-icon" />
          </InputGroup.Text>
        )}
      </InputGroup>
    </Form>
  );
};

export default SearchBar1;
