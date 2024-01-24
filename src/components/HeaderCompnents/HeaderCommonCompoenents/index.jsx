import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom';

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
                    showBackButton: false,
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
        <Row className='header-common-comp'>
            <Row>
                <Col>
                    {showBackButton && <BackWithText />}
                </Col>
                <Col>
                    {showFilterDropdown && <FilterSelect />}
                </Col>
            </Row>
            <Row>
                {showSearchBar && <HeaderSearchBar />}
                {showFlotingSearch && <>
                    <Col> back </Col>
                    <Col><span>FLOATING SEARCH</span> </Col>
                </>}
            </Row>
        </Row>
    )
}

export default HeaderCommonCompoenents