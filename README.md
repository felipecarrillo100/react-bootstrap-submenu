# react-bootstrap-submenu

A modern, next-generation, high-performance React component providing clean, multi-level nested submenus for **React-Bootstrap**.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg?style=flat-square)](https://felipecarrillo100.github.io/react-bootstrap-submenu/)
[![React 19 Ready](https://img.shields.io/badge/react-19%20ready-blue.svg?style=flat-square)](https://react.dev)
[![TypeScript Native](https://img.shields.io/badge/typescript-native-blue.svg?style=flat-square)](https://typescriptlang.org)
[![Build Tooling](https://img.shields.io/badge/build-tsup%20%7C%20vite%208-purple.svg?style=flat-square)](https://tsup.egoist.dev)

This library is built from the ground up for superior performance, type safety, and modern tooling. It is fully compatible with **React 16.8.0 to 19.x** and **react-bootstrap 2.x.x+**.

## 🌐 Live Interactive Demo
👉 **Explore the premium interactive showcase:** [https://felipecarrillo100.github.io/react-bootstrap-submenu/](https://felipecarrillo100.github.io/react-bootstrap-submenu/)

---

## ⚡ What's New in v4.x.x

*   **React 19 & 18 Complete Support**: Full compatibility with the **React 19 compiler**, concurrent rendering, and **React Strict Mode**.
*   **100% Functional & Hooks-Driven**: Entirely rewritten using modern React Hooks, replacing all legacy class components and deprecated methods.
*   **Eliminated findDOMNode**: Replaced deprecated `ReactDOM.findDOMNode` queries with native React refs, preventing runtime crashes in React 19.
*   **Wide Backwards Compatibility**: Supported in **React >= 16.8.0** all the way to **React 19**, with exact DOM structure and core legacy CSS styling preserved.
*   **TypeScript Native**: Built with strict typing and clean interface exports.
*   **Modern Tooling Bundle**: Powered by `tsup` and `Vite 8` for lightning-fast build distributions in both CommonJS (`.js`) and ESM (`.mjs`) modules with automatic `.d.ts` declaration generation.

---

## 📦 How to Install

```bash
npm install react-bootstrap-submenu
```

---

## 🛠️ How to Include

### Step 1: Import CSS Styles
Import the standard styling sheet:
```javascript
import "react-bootstrap-submenu/dist/index.css";
```

### Step 2: Import Components
```typescript
import { DropdownSubmenu, NavDropdownMenu, MenuItem } from "react-bootstrap-submenu";
```

---

## 🚀 Usage Guide

Create a standard `Navbar` with React-Bootstrap, but instead of using `NavDropdown`, use `NavDropdownMenu`. Then, to create a nested submenu, nest a `DropdownSubmenu` inside it!

### Standard Example:
```javascript
import { Navbar, Nav } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu, MenuItem } from "react-bootstrap-submenu";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          
          <NavDropdownMenu title="Dropdown 1" id="collapsible-nav-dropdown">
            <MenuItem href="#action/3.1">Action</MenuItem>
            
            {/* Nested Submenu */}
            <DropdownSubmenu href="#action/3.7" title="Level 1 Submenu">
              <MenuItem href="#action/8.1">Sub Item 1</MenuItem>
              
              {/* Nested Level 2 Submenu */}
              <DropdownSubmenu href="#action/3.8" title="Level 2 Submenu">
                <MenuItem href="#action/9.1">Sub Item 2</MenuItem>
              </DropdownSubmenu>
            </DropdownSubmenu>
          </NavDropdownMenu>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
```

### Align Submenus Left
If you want your menus to drop to the left (e.g. for right-aligned items), use `NavDropdownMenu` with `alignRight={true}`:
```javascript
<NavDropdownMenu title="Dropdown R" id="collapsible-nav-dropdown" alignRight>
  <MenuItem href="#action/3.1">Action</MenuItem>
  <DropdownSubmenu href="#action/3.7" title="Dropdown Submenu Left">
    <MenuItem href="#action/8.1">Sub Item 1</MenuItem>
  </DropdownSubmenu>
</NavDropdownMenu>
```

---

## 🌱 Support the Project
Creating and maintaining open source libraries is a passion project. If you find this library useful, please consider supporting its development:

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?business=7X3JAPNBQTXZG&amount=5&no_recurring=0&item_name=NPM%2FGitHub+libraries&currency_code=USD)

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
