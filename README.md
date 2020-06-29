# react-bootstrap-submenu
A React Typescript module that provides a SubMenu functionality for React-Bootstrap >1.0.

## How to install:
npm install react-bootstrap-submenu

## How to include
```javascript
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
```
## To use
Create A NavBar with React-Bookstrap, but instead of using NavDropdown use NavDropdownMenu, then, to create a submenu use DropdownSubmenu
 
Example:
```javascript
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <NavDropdownMenu title="Dropdown 1" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <DropdownSubmenu href="#action/3.7" title="Text to show">
              <NavDropdown.Item href="#action/8.1">Sub 1</NavDropdown.Item>
              <DropdownSubmenu href="#action/3.7" title="Text to show">
                <NavDropdown.Item href="#action/9.1">
                  Sub 2
                </NavDropdown.Item>
              </DropdownSubmenu>
            </DropdownSubmenu>
          </NavDropdownMenu>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
```  

If you want to drop the menus to the left you can use NavDropdownMenu with prop alignRight=true
Example:
```javascript
     <NavDropdownMenu title="Dropdown R" id="collasible-nav-dropdown" alignRight >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <DropdownSubmenu href="#action/3.7" title="Text to show">
          <NavDropdown.Item href="#action/8.1">Sub 1</NavDropdown.Item>
          <DropdownSubmenu href="#action/3.7" title="Text to show">
            <NavDropdown.Item href="#action/9.1">
              Sub 2
            </NavDropdown.Item>
          </DropdownSubmenu>
        </DropdownSubmenu>
      </NavDropdownMenu>
```  

