import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom';
import "./HeaderCommonCompoenents.css"

// components
import HeaderSearchBar from '../HeaderSearchBar/Index'
import BackWithText from '../BackWithText'
import FilterSelect from '../../FilterSelect'

const HeaderCommonCompoenents = () => {
    const location = useLocation();
    const params = useParams();

    const determineVisibility = () => {
        const path = location.pathname;
        switch (true) {
            case path === '/':
                return {
                    showBackButton: false,
                    showFilterDropdown: false,
                    showSearchBar: true,
                    showFlotingSearch: false,
                };
            case path === '/my-gift-card':
                return {
                    showBackButton: true,
                    showFilterDropdown: true,
                    showSearchBar: true,
                    showFlotingSearch: false,
                };

            case path.startsWith('/productDetail/'):
                return {
                    showBackButton: true,
                    showFilterDropdown: false,
                    showSearchBar: false,
                    showFlotingSearch: true,
                };

            default:
                return {
                    showBackButton: true,
                    showFilterDropdown: false,
                    showSearchBar: false,
                    showFlotingSearch: false,
                };
        }
    };

    // Get visibility based on the current page
    const { showBackButton, showFilterDropdown, showSearchBar, showFlotingSearch } = determineVisibility();
    return (
        <div className='header-common-comp'>
        <Row>
            <Row>
                {showBackButton && <Col><BackWithText /> </Col>}
                {showFilterDropdown && <Col><FilterSelect /></Col>}
                {showFlotingSearch && <Col className='d-flex align-items-center justify-content-end'><img className='float-end' src="/Images/search-icon.svg" alt="floting search" /></Col>}
            </Row>
            <Row>
                {showSearchBar && <HeaderSearchBar />}
            </Row>
        </Row>
        </div>
    )
}

export default HeaderCommonCompoenents