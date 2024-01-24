import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./SearchBar.css";
import useIsMobile from "../../../customHooks/useIsMobile";

const HeaderSearchBar = ({ customStyle }) => {
  const mobile = useIsMobile();
  return (
    <Form inline className={customStyle}>
      <InputGroup className="searchBox">
        {mobile && (
          <InputGroup.Text className="searchMobleBtn" id="search-bar">
            <img src="/Images/Search.svg" alt="search-icon" />
          </InputGroup.Text>
        )}
        <Form.Control
          placeholder="Search for Products or Brands"
          aria-label="Username"
          aria-describedby="search-bar"
          className="SearchInput"
          // onChange={device && onChange}
        />
        {!mobile && (
          <InputGroup.Text className="searchMobleBtn" id="search-bar">
            <img src="/Images/Search.svg" alt="search-icon" />
          </InputGroup.Text>
        )}
      </InputGroup>
    </Form>
  );
};

export default HeaderSearchBar;
