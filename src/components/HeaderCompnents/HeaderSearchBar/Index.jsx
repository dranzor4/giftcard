import React, { useState } from "react";
import { Dropdown, Form, InputGroup, Row } from "react-bootstrap";
import "./SearchBar.css";
import useIsMobile from "../../../customHooks/useIsMobile";

const HeaderSearchBar = ({ customStyle }) => {
  const [searchData, setSearchData] = useState([])
  const [searchIterm, setSearchIterm] = useState("");
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
  const handleSearch = (event) => {
    const searchIterm = event.target.value;
    const words = searchIterm.split('');
    if (words.length === 0) setSearchData([])
    if (words.length >= 3) {
      setLoading(true)
      setTimeout(() => {
        const searchFilter = searchArr.filter((item) => item.title.toLowerCase().includes(searchIterm));
        setSearchData(searchFilter)
        setLoading(false)
      }, 1000)
    }
    setSearchIterm(searchIterm)
  }

  const handleSelect = (item) => {
    setSearchIterm(item.title)
    setSearchData([])
  }
  const hanldeClear = () => {
    setSearchIterm("")
    setSearchData([])
  }

  const mobile = useIsMobile();
  return (
    <Form inline className={customStyle}>
      <InputGroup className="rounded-pill border border-1 border-secondary-subtle py-2 px-3">
        <InputGroup.Text className="p-0 bg-transparent border-0 " id="search-bar">
          {loading ? (
            <span class="loader"></span>
          ) : (
            <img src="/Images/Search.svg" alt="search-icon" />
          )}
        </InputGroup.Text>

        <Form.Control
          placeholder="Search for Products or Brands"
          aria-label="username"
          aria-describedby="search-bar"
          className="p-0 ps-3 bg-transparent border-0 fs-12 outline-0 no-focus-outline"
          onChange={handleSearch}
          value={searchIterm}
        />
        {searchIterm && ( // Render clear button only when there's a search term
          <InputGroup.Text className="p-0 bg-transparent border-0" onClick={hanldeClear}>
            <img src="/Images/Close.svg" alt="clear-icon" width="12px" height="12px"/>
          </InputGroup.Text>
        )}
        {/* todo for desktop view */}
        {/* <InputGroup.Text className="searchMobleBtn" id="search-bar">
            <img src="/Images/Search.svg" alt="search-icon" />
          </InputGroup.Text> */}
      </InputGroup>

      <Dropdown show={searchData.length > 0} >
        <Dropdown.Menu className="w-100 overflow-auto p-0" style={{maxHeight: "500px"}}>
          {
            searchData.map((item) => {
              return (
                <Dropdown.Item key={item.title} className="border border-bottom-1 px-3 py-2" onClick={() => handleSelect(item)}>
                  <Row className=" fs-14 fw-normal"><p>{item.title}</p></Row>
                  <Row className="fs-12 fw-normal"><p>{item.category}</p></Row>
                </Dropdown.Item >
              )
            })
          }
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  );
};

export default HeaderSearchBar;
