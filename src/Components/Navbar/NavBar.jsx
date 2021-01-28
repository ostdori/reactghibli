

// import { Container, Menu } from 'semantic-ui-react';

import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer,MDBBtn
} from "mdbreact";
import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

export default class MenuExampleSecondary extends Component {

    state = {
        activeItem: 'Home',
        isOpen: false,
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    };


    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };


    render() {
        const { activeItem } = this.state

        return (

            <div  fluid>
                <MDBNavbar className="white-text" color="green" dark  fixed="top" expand="md" >
                    <MDBNavbarBrand>
                    <MDBNavLink className="white-text" to="/" as={NavLink} >MyGHIBLI</MDBNavLink>
                        {/* <strong className="white-text">GhibliFilms</strong> */}
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem >
                                <MDBNavLink className="white-text" to="/" as={NavLink} >Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="white-text" to="/filmList" as={NavLink}>Films List</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBDropdown white-text>
                                    <MDBDropdownToggle drop nav caret>
                                        <span className="mr-2 white-text">DB List</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu right >
                                        <MDBDropdownItem href="/ListOfFilms" ><MDBBtn className="mean-fruit-gradient color-block-5  "rounded size="lg" floating >
                                            <MDBIcon icon="clipboard-list"/><strong className="text-center"> List </strong>
                                        </MDBBtn></MDBDropdownItem>
                                        <MDBDropdownItem divider />
                                        <MDBDropdownItem text-center href="/AddFilm"> <MDBBtn className="mean-fruit-gradient color-block-5 "rounded size="lg" floating >
                                            <MDBIcon icon="plus"/><strong className="text-center"> Add </strong>
                                        </MDBBtn></MDBDropdownItem>   
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>

                    </MDBCollapse>
                </MDBNavbar>

            </div>
        )
    }

}
