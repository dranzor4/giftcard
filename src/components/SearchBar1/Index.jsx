import React, { useEffect, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import Style from './SearchBar.module.css'
import useIsMobile from '../../customHooks/useIsMobile';

const SearchBar1 = ({ customStyle }) => {
    const modile = useIsMobile();
    return (
        <Form inline className={customStyle} >

            <InputGroup className={Style.searchBox}>
                {
                    modile && <InputGroup.Text className={`${Style.searchMobleBtn}`} id="search-bar"><img src="./Images/Search.svg" alt="" /></InputGroup.Text>
                }
                <Form.Control
                    placeholder="Search for Products or Brands"
                    aria-label="Username"
                    aria-describedby="search-bar"
                    className={Style.SearchInput}
                // onChange={device && onChange}
                />
                {
                    !modile && <InputGroup.Text className={`${Style.searchMobleBtn}`} id="search-bar"><img src="./Images/Search.svg" alt="" /></InputGroup.Text>
                }
            </InputGroup>
        </Form>
    )
}

export default SearchBar1