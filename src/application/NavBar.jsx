import { useState } from "react";
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { StyledNavLink } from "../components/DesignComponents";

function NavBar() {
    const [navToggle, setNavToggle] = useState(false);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={() => setNavToggle(!navToggle)} />
                <Collapse isOpen={navToggle} navbar>
                    <Nav className="ml-auto" navbar pills tabs fill>
                        <NavItem active>
                            <StyledNavLink to='/fair-app/'>Home</StyledNavLink>
                        </NavItem>
                        <NavItem>
                            <StyledNavLink to='/fair-app/info'>Info</StyledNavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;