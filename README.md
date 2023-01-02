# react-bootstrap-submenu

This library is a React Typescript module that provides a SubMenu functionality for React-Bootstrap.
The current Version of react-bootstrap-submenu 3.x.x is compatible with react-bootstrap 2.x.x

if you are using  the older React-Bootstrap 1.x.x then downgrading to react-bootstrap-submenu 2.x.x

## How to install:
npm install react-bootstrap-submenu

## How to include
### Step 1: Import CSS styles
Styles are located at: 

```
"react-bootstrap-submenu/dist/index.css"
```
### Step2: Import JavaScript modules
```javascript
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
```
## To use
Create A NavBar with React-Bootstrap, but instead of using NavDropdown use NavDropdownMenu, then, to create a submenu use DropdownSubmenu
 
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

A small example is provided here: https://codesandbox.io/s/react-bootstrap-submenu-hz17d

## Donations
Creating these libraries is my hobie. If you consider my work useful to you, please consider buying me a coffee. Your contribution keeps me motivated to created and maintain these useful libraries.


[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?business=7X3JAPNBQTXZG&amount=5&no_recurring=0&item_name=NPM%2FGitHub+libraries&currency_code=USD)

[![QR](https://raw.githubusercontent.com/felipecarrillo100/bankgreen/main/QR_Code_5Euro.png)](https://www.paypal.com/donate/?business=7X3JAPNBQTXZG&amount=5&no_recurring=0&item_name=NPM%2FGitHub+libraries&currency_code=USD)



