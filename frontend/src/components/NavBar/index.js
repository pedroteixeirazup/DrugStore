import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand,Nav, NavItem, NavLink, Button} from 'reactstrap';
import './styles.css'
export default class NavBarFarm extends Component {
    constructor(props){
        super(props);

        this.toggleNavBar = this.toggleNavBar.bind(this);
        this.state = {
            collapsed: false
        };
    }

    toggleNavBar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

        
    render() {
        return (
       
            <div>
                <Navbar color="faded" light id="nav_bar">
                    <NavbarBrand href="/" className="mr-auto" id="navbrand">FarmApp</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavBar} className="mr-2" style={{color: 'white'}}/>
                    <Collapse isOpen={this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem >
                            <NavLink id="navitem" href="/components/">Founders</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="navitem" href="https://github.com/pedroteixeirazup/ReactJs/tree/master/farm_app">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
