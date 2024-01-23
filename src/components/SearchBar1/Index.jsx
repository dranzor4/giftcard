import React, { useState } from "react";
import { Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import "./SearchBar.css";
import useIsMobile from "../../customHooks/useIsMobile";

const SearchBar1 = ({ customStyle }) => {
  const [searchData ,setSearchData] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const searchArr = [
    {
      title: "Amazon Gift Card",
      category: "Demo"
    },
    {
      title: "Flipkart Gift Card",
      category: "Demo"
    }, {
      title: "Myntra Gift Card",
      category: "Demo"
    }, {
      title: "Shopify Gift Card",
      category: "Demo"
    }, {
      title: "netWork Gift Card",
      category: "Demo"
    }, {
      title: "global Gift Card",
      category: "Demo"
    },
    {
      title: "Amazon Gift Card",
      category: "Demo"
    },
    {
      title: "Flipkart Gift Card",
      category: "Demo"
    }, {
      title: "Myntra Gift Card",
      category: "Demo"
    }, {
      title: "Shopify Gift Card",
      category: "Demo"
    }, {
      title: "netWork Gift Card",
      category: "Demo"
    }, {
      title: "global Gift Card",
      category: "Demo"
    },
    {
      title: "Amazon Gift Card",
      category: "Demo"
    },
    {
      title: "Flipkart Gift Card",
      category: "Demo"
    }, {
      title: "Myntra Gift Card",
      category: "Demo"
    }, {
      title: "Shopify Gift Card",
      category: "Demo"
    }, {
      title: "netWork Gift Card",
      category: "Demo"
    }, {
      title: "global Gift Card",
      category: "Demo"
    },
    {
      title: "Amazon Gift Card",
      category: "Demo"
    },
    {
      title: "Flipkart Gift Card",
      category: "Demo"
    }, {
      title: "Myntra Gift Card",
      category: "Demo"
    }, {
      title: "Shopify Gift Card",
      category: "Demo"
    }, {
      title: "netWork Gift Card",
      category: "Demo"
    }, {
      title: "global Gift Card",
      category: "Demo"
    },
    {
      title: "Amazon Gift Card",
      category: "Demo"
    },
    {
      title: "Flipkart Gift Card",
      category: "Demo"
    }, {
      title: "Myntra Gift Card",
      category: "Demo"
    }, {
      title: "Shopify Gift Card",
      category: "Demo"
    }, {
      title: "netWork Gift Card",
      category: "Demo"
    }, {
      title: "global Gift Card",
      category: "Demo"
    }
  ]
  const handleSearch = (event)=> {
    const searchTerm = event.target.value;
    const words = searchTerm.split('');
    if(words.length === 0)  setSearchData([])
    if(words.length >= 3){
      setLoading(true)
      setTimeout(() => {
        const searchFilter = searchArr.filter((item) => item.title.toLowerCase().includes(searchTerm));
      setSearchData(searchFilter)
      setLoading(false)
      },1000)
      
    }
    setSearchTerm(searchTerm)
  }

  const handleSelect = (item) => {
    setSearchData([])
  }
  const hanldeClear =() => {
    setSearchTerm("")
    setSearchData([])
  }
  
  const modile = useIsMobile();
  return (
    <Form inline className={customStyle}>
      <InputGroup className="searchBox">
        {modile && (
          <InputGroup.Text className="searchMobleBtn" id="search-bar">
            {loading ? (
              <span class="loader"></span>
            ) : (
              <img src="/Images/Search.svg" alt="search-icon" />
            )}
          </InputGroup.Text>
        )}
        <Form.Control
          placeholder="Search for Products or Brands"
          aria-label="Username"
          aria-describedby="search-bar"
          className="SearchInput"
          onChange={handleSearch}
          value={searchTerm}
        // onChange={device && onChange}
        />
        {searchTerm && ( // Render clear button only when there's a search term
          <InputGroup.Text className="clearSearchBtn" onClick={hanldeClear}>
            <img src="/Images/Close.svg" alt="clear-icon" />
          </InputGroup.Text>
        )}
        {!modile && (
          <InputGroup.Text className="searchMobleBtn" id="search-bar">
            <img src="/Images/Search.svg" alt="search-icon" />
          </InputGroup.Text>
        )}
      </InputGroup>

      <Dropdown show={searchData.length > 0} >
        <Dropdown.Menu className="search-dropdown">
          {
            searchData.map((item) => {
              return (
                <Dropdown.Item key={item.title} className="search-item"  onClick={() => handleSelect(item)}>
                  <Row className="search-item-title"><p>{item.title}</p></Row>
                  <Row className="search-item-category"><p>{item.category}</p></Row>
                </Dropdown.Item >
              )
            })
          }
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  );
};

export default SearchBar1;
