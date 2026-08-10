import { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu, MenuItem } from "react-bootstrap-submenu";

// Import Bootstrap styles in the demo
import "bootstrap/dist/css/bootstrap.min.css";
// Import our packaged component CSS
import "react-bootstrap-submenu/dist/index.css";
// Import custom premium demo styles
import "./App.css";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

// AdSense's <ins> tag only requests an ad once `(adsbygoogle = window.adsbygoogle || []).push({})`
// runs against it. In a static HTML page that happens via an inline <script> right after the tag;
// in React, the <ins> only exists once this component has actually mounted, so the push has to
// happen in an effect instead. The `pushed` ref stops StrictMode's dev-only double-invoke of
// effects from pushing twice against the same node (harmless, but throws a noisy console error).
function AdSlot() {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ad blocker, or ad network script not loaded yet — non-fatal either way
    }
  }, []);

  return (
    <div className="ad-slot text-center py-3" aria-label="Advertisement">
      {/* react-bootstrap-submenu */}
      <ins className="adsbygoogle"
           style={{ display: "block" }}
           data-ad-client="ca-pub-8961380325850669"
           data-ad-slot="8329581963"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
}

export default function App() {
  // States to toggle code snippet panels
  const [showCode1, setShowCode1] = useState(false);
  const [showCode2, setShowCode2] = useState(false);
  const [showCode3, setShowCode3] = useState(false);
  const [showCode4, setShowCode4] = useState(false);
  const [showCode5, setShowCode5] = useState(false);

  return (
    <div className="demo-app scrollable-showcase">
      {/* Modern Top Hero Header */}
      <header className="hero-header py-5 text-center bg-dark text-white border-bottom">
        <Container>
          <Badge bg="info" className="mb-3 px-3 py-2">React 16.8+ to 19 Ready</Badge>
          <h1 className="display-4 font-outfit fw-bold text-white mb-3">
            React Bootstrap Submenu
          </h1>
          <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: "750px" }}>
            A high-fidelity scrollable playground demonstrating native multi-level submenus. Start with standard out-of-the-box Bootstrap styling, add item or submenu icons, and explore customized advanced layouts.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="outline-light" className="px-4" href="#demo-section-1">
              Basic Demos
            </Button>
            <Button variant="primary" className="px-4" href="#demo-section-5">
              Advanced Demo
            </Button>
          </div>
        </Container>
      </header>

      <AdSlot />

      {/* SCROLLABLE SHOWCASE SECTIONS */}
      <main className="showcase-content py-5 bg-light text-dark">

        {/* SECTION 1: Basic — Classic Bootstrap Navbar (Light Theme) */}
        <section id="demo-section-1" className="demo-section py-4">
          <Container>
            <h2 className="h3 font-outfit fw-bold text-dark mb-3">1️⃣ 1. Basic: Classic Bootstrap (Light Theme)</h2>
            <p className="text-muted font-xs mb-4">
              Standard light-themed Bootstrap Navbar with zero custom CSS overrides. This is how the component integrates out of the box using default Bootstrap classes.
            </p>
            
            {/* CLASSIC BOOTSTRAP LIGHT NAVBAR */}
            <Navbar bg="white" expand="lg" className="border rounded shadow-sm py-2 mb-4">
              <Container fluid>
                <Navbar.Brand href="#home" className="fw-bold text-dark">
                  Classic Light
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-1" />
                <Navbar.Collapse id="navbar-1">
                  <Nav className="me-auto">
                    <Nav.Link href="#overview" active>Home</Nav.Link>
                    
                    {/* Level 1 Submenu */}
                    <NavDropdownMenu title="Developer Tools" id="nav-dropdown-1">
                      <MenuItem href="#rest">REST Client</MenuItem>
                      <MenuItem href="#grpc">gRPC client</MenuItem>
                      <hr className="dropdown-divider" />
                      
                      {/* Nested Level 2 Submenu */}
                      <DropdownSubmenu href="#graphql" title="GraphQL Engine">
                        <MenuItem href="#queries">Queries</MenuItem>
                        <MenuItem href="#mutations">Mutations</MenuItem>
                        
                        {/* Nested Level 3 Submenu */}
                        <DropdownSubmenu href="#subscriptions" title="Subscriptions">
                          <MenuItem href="#websockets">WebSockets</MenuItem>
                          <MenuItem href="#sse">Server-Sent Events</MenuItem>
                        </DropdownSubmenu>
                      </DropdownSubmenu>
                    </NavDropdownMenu>
                    
                    <Nav.Link href="#metrics">Metrics</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            {/* Standard Bootstrap Card for Code */}
            <Card className="p-4 border shadow-sm bg-white text-dark mb-5">
              <Row className="align-items-center">
                <Col lg={8}>
                  <h4 className="fw-bold mb-1">Standard Drop-Right Nesting</h4>
                  <p className="text-muted font-xs m-0">
                    Demonstrates classic multi-level nested submenus shifting smoothly to the right, retaining native Bootstrap colors, sizes, and fonts.
                  </p>
                </Col>
                <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
                  <Button 
                    variant={showCode1 ? "secondary" : "outline-secondary"} 
                    className="px-4"
                    onClick={() => setShowCode1(!showCode1)}
                  >
                    {showCode1 ? "Hide Code Snippet" : "View Code Snippet"}
                  </Button>
                </Col>
              </Row>

              {showCode1 && (
                <div className="mt-4">
                  <pre className="bg-light p-3 border rounded text-dark font-xs m-0" style={{ whiteSpace: "pre-wrap" }}>
                    <code>{`// Basic implementation with standard light bootstrap classes
import { Navbar, Nav } from "react-bootstrap";
import { NavDropdownMenu, DropdownSubmenu, MenuItem } from "react-bootstrap-submenu";

<Navbar bg="light" expand="lg">
  <NavDropdownMenu title="Developer Tools" id="dropdown">
    <MenuItem href="#rest">REST Client</MenuItem>
    <DropdownSubmenu href="#graphql" title="GraphQL Engine">
      <MenuItem href="#queries">Queries</MenuItem>
      <DropdownSubmenu href="#subscriptions" title="Subscriptions">
        <MenuItem href="#websockets">WebSockets</MenuItem>
      </DropdownSubmenu>
    </DropdownSubmenu>
  </NavDropdownMenu>
</Navbar>`}</code>
                  </pre>
                </div>
              )}
            </Card>
          </Container>
        </section>


        {/* SECTION 2: Basic — Classic Right-Aligned Navbar (Dark Theme) */}
        <section id="demo-section-2" className="demo-section py-4 border-top">
          <Container>
            <h2 className="h3 font-outfit fw-bold text-dark mb-3">2️⃣ 2. Basic: Classic Right-Aligned (Dark Theme)</h2>
            <p className="text-muted font-xs mb-4">
              Standard dark-themed Bootstrap Navbar showing drop-left (left-aligned) submenus automatically structured for items positioned on the right margin.
            </p>

            {/* CLASSIC BOOTSTRAP DARK NAVBAR */}
            <Navbar bg="dark" variant="dark" expand="lg" className="rounded shadow-sm py-2 mb-4">
              <Container fluid>
                <Navbar.Brand href="#home" className="fw-bold">
                  Classic Dark
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-2" />
                <Navbar.Collapse id="navbar-2">
                  <Nav className="me-auto">
                    <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                  </Nav>
                  <Nav className="ms-auto">
                    <Nav.Link href="#docs">Docs</Nav.Link>
                    
                    {/* Right aligned Left-dropping submenu */}
                    <NavDropdownMenu title="Profile Settings" id="nav-dropdown-right" alignRight>
                      <MenuItem href="#profile">My Profile</MenuItem>
                      <MenuItem href="#billing">Billing & Subscriptions</MenuItem>
                      <hr className="dropdown-divider" />
                      
                      {/* Nested Submenu (drops left) */}
                      <DropdownSubmenu href="#security" title="Security Options">
                        <MenuItem href="#mfa">Multi-Factor Auth</MenuItem>
                        <MenuItem href="#sessions">Sessions</MenuItem>
                        
                        {/* Nested Level 3 Submenu */}
                        <DropdownSubmenu href="#keys" title="SSH Key Manager">
                          <MenuItem href="#personal">Personal Keys</MenuItem>
                          <MenuItem href="#deploy">Deploy Keys</MenuItem>
                        </DropdownSubmenu>
                      </DropdownSubmenu>
                    </NavDropdownMenu>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            {/* Standard Bootstrap Card for Code */}
            <Card className="p-4 border shadow-sm bg-white text-dark mb-5">
              <Row className="align-items-center">
                <Col lg={8}>
                  <h4 className="fw-bold mb-1">Standard Drop-Left Nesting</h4>
                  <p className="text-muted font-xs m-0">
                    Setting the <code>alignRight</code> property forces nested levels to shift leftward, preventing clipping or overflow.
                  </p>
                </Col>
                <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
                  <Button 
                    variant={showCode2 ? "secondary" : "outline-secondary"} 
                    className="px-4"
                    onClick={() => setShowCode2(!showCode2)}
                  >
                    {showCode2 ? "Hide Code Snippet" : "View Code Snippet"}
                  </Button>
                </Col>
              </Row>

              {showCode2 && (
                <div className="mt-4">
                  <pre className="bg-light p-3 border rounded text-dark font-xs m-0" style={{ whiteSpace: "pre-wrap" }}>
                    <code>{`// Basic implementation for right-aligned items
import { NavDropdownMenu, DropdownSubmenu, MenuItem } from "react-bootstrap-submenu";

<NavDropdownMenu title="Profile Settings" id="dropdown-right" alignRight>
  <MenuItem href="#profile">My Profile</MenuItem>
  <DropdownSubmenu href="#security" title="Security Options">
    <MenuItem href="#mfa">Multi-Factor Auth</MenuItem>
  </DropdownSubmenu>
</NavDropdownMenu>`}</code>
                  </pre>
                </div>
              )}
            </Card>
          </Container>
        </section>


        {/* SECTION 3: Basic — Menu Items with Icons (Light Theme) */}
        <section id="demo-section-3" className="demo-section py-4 border-top">
          <Container>
            <h2 className="h3 font-outfit fw-bold text-dark mb-3">3️⃣ 3. Basic: Menu Items with Icons (Light Theme)</h2>
            <p className="text-muted font-xs mb-4">
              Demonstrates how to easily add inline emojis, SVGs, or icon components directly inside individual `MenuItem` components under a classic Bootstrap light layout.
            </p>

            {/* CLASSIC BOOTSTRAP LIGHT NAVBAR WITH ICONS */}
            <Navbar bg="white" expand="lg" className="border rounded shadow-sm py-2 mb-4">
              <Container fluid>
                <Navbar.Brand href="#home" className="fw-bold text-dark">
                  Items with Icons
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-3" />
                <Navbar.Collapse id="navbar-3">
                  <Nav className="me-auto">
                    <Nav.Link href="#files-home">🏠 Operations Hub</Nav.Link>
                    
                    {/* Level 1 Submenu with Item Icons */}
                    <NavDropdownMenu title="📁 File Manager" id="nav-dropdown-3-icons">
                      <MenuItem href="#new-file">📄 Create New File</MenuItem>
                      <MenuItem href="#upload">📤 Upload Archive</MenuItem>
                      <hr className="dropdown-divider" />
                      
                      {/* Nested Submenu */}
                      <DropdownSubmenu href="#system" title="⚙️ System Directories">
                        <MenuItem href="#logs">📝 View Activity Logs</MenuItem>
                        <MenuItem href="#cache">🗑️ Purge System Cache</MenuItem>
                      </DropdownSubmenu>
                    </NavDropdownMenu>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            {/* Standard Bootstrap Card for Code */}
            <Card className="p-4 border shadow-sm bg-white text-dark mb-5">
              <Row className="align-items-center">
                <Col lg={8}>
                  <h4 className="fw-bold mb-1">Embedding Item-Level Icons</h4>
                  <p className="text-muted font-xs m-0">
                    Icons are rendered natively as children inside standard `MenuItem` tags, maintaining visual alignment and vertical centering with standard list styles.
                  </p>
                </Col>
                <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
                  <Button 
                    variant={showCode3 ? "secondary" : "outline-secondary"} 
                    className="px-4"
                    onClick={() => setShowCode3(!showCode3)}
                  >
                    {showCode3 ? "Hide Code Snippet" : "View Code Snippet"}
                  </Button>
                </Col>
              </Row>

              {showCode3 && (
                <div className="mt-4">
                  <pre className="bg-light p-3 border rounded text-dark font-xs m-0" style={{ whiteSpace: "pre-wrap" }}>
                    <code>{`// Adding icons directly inside MenuItem children
import { NavDropdownMenu, DropdownSubmenu, MenuItem } from "react-bootstrap-submenu";

<NavDropdownMenu title="📁 File Manager" id="dropdown-icons">
  <MenuItem href="#new">📄 Create New File</MenuItem>
  <MenuItem href="#upload">📤 Upload Archive</MenuItem>
  
  <DropdownSubmenu href="#system" title="⚙️ System Directories">
    <MenuItem href="#logs">📝 View Activity Logs</MenuItem>
  </DropdownSubmenu>
</NavDropdownMenu>`}</code>
                  </pre>
                </div>
              )}
            </Card>
          </Container>
        </section>


        {/* SECTION 4: Basic — Submenus with Icons (Dark Theme) */}
        <section id="demo-section-4" className="demo-section py-4 border-top">
          <Container>
            <h2 className="h3 font-outfit fw-bold text-dark mb-3">4️⃣ 4. Basic: Submenus with Icons (Dark Theme)</h2>
            <p className="text-muted font-xs mb-4">
              Demonstrates how to add icons and visual badges directly inside the `title` prop of `DropdownSubmenu` headers under a classic Bootstrap dark layout.
            </p>

            {/* CLASSIC BOOTSTRAP DARK NAVBAR WITH SUBMENU ICONS */}
            <Navbar bg="dark" variant="dark" expand="lg" className="rounded shadow-sm py-2 mb-4">
              <Container fluid>
                <Navbar.Brand href="#home" className="fw-bold">
                  Submenus with Icons
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-4" />
                <Navbar.Collapse id="navbar-4">
                  <Nav className="me-auto">
                    <Nav.Link href="#core">⚡ Core Services</Nav.Link>
                  </Nav>
                  <Nav className="ms-auto">
                    
                    {/* Level 1 Submenu with Submenu Headers Icons */}
                    <NavDropdownMenu title="🛠️ Support Desk" id="nav-dropdown-4-icons" alignRight>
                      <MenuItem href="#ticket">Create Support Ticket</MenuItem>
                      <hr className="dropdown-divider" />
                      
                      {/* Nested Submenu 1 with Icon Header */}
                      <DropdownSubmenu href="#cloud" title="☁️ Cloud Systems">
                        <MenuItem href="#aws">Amazon AWS Node</MenuItem>
                        <MenuItem href="#gcp">Google Cloud Console</MenuItem>
                      </DropdownSubmenu>

                      {/* Nested Submenu 2 with Icon Header */}
                      <DropdownSubmenu href="#security" title="🔒 Firewall Shields">
                        <MenuItem href="#rules">Active Security Rules</MenuItem>
                        <MenuItem href="#ips">Intrusion Block List</MenuItem>
                      </DropdownSubmenu>
                    </NavDropdownMenu>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            {/* Standard Bootstrap Card for Code */}
            <Card className="p-4 border shadow-sm bg-white text-dark mb-5">
              <Row className="align-items-center">
                <Col lg={8}>
                  <h4 className="fw-bold mb-1">Embedding Submenu Toggle Header Icons</h4>
                  <p className="text-muted font-xs m-0">
                    Pass emojis, components, or React nodes directly into the `title` prop of `DropdownSubmenu` to add header-level indicators, and use `alignRight` to drop left.
                  </p>
                </Col>
                <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
                  <Button 
                    variant={showCode4 ? "secondary" : "outline-secondary"} 
                    className="px-4"
                    onClick={() => setShowCode4(!showCode4)}
                  >
                    {showCode4 ? "Hide Code Snippet" : "View Code Snippet"}
                  </Button>
                </Col>
              </Row>

              {showCode4 && (
                <div className="mt-4">
                  <pre className="bg-light p-3 border rounded text-dark font-xs m-0" style={{ whiteSpace: "pre-wrap" }}>
                    <code>{`// Passing emojis or React nodes directly inside the DropdownSubmenu title prop, and drop left
import { NavDropdownMenu, DropdownSubmenu, MenuItem } from "react-bootstrap-submenu";

<NavDropdownMenu title="🛠️ Support Desk" id="dropdown-sub-icons" alignRight>
  <DropdownSubmenu href="#cloud" title="☁️ Cloud Systems">
    <MenuItem href="#aws">Amazon AWS Node</MenuItem>
  </DropdownSubmenu>
  
  <DropdownSubmenu href="#security" title="🔒 Firewall Shields">
    <MenuItem href="#rules">Active Security Rules</MenuItem>
  </DropdownSubmenu>
</NavDropdownMenu>`}</code>
                  </pre>
                </div>
              )}
            </Card>
          </Container>
        </section>


        {/* SECTION 5: Advanced — Premium Customized Theme (Dark Mode) */}
        <section id="demo-section-5" className="demo-section py-5 border-top bg-dark-theme text-white">
          <Container>
            <Badge bg="info" className="mb-2">Highly Customizable</Badge>
            <h2 className="h3 font-outfit fw-bold text-white mb-3">🔥 5. Advanced: Custom Premium Theme (Dark Mode)</h2>
            <p className="text-secondary font-xs mb-4">
              Demonstrates how the components seamlessly inherit custom CSS properties to deliver a premium, glassmorphic dark-mode showcase with tailored gradients and indicators.
            </p>

            {/* FULL WIDTH PREMIUM NAVBAR */}
            <Navbar collapseOnSelect expand="lg" variant="dark" className="custom-navbar full-width-navbar rounded border py-3 mb-4">
              <Container fluid className="px-4">
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                  <span className="brand-logo">🌌</span>
                  <span className="brand-text ms-2 font-outfit">Premium Custom</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-5" />
                <Navbar.Collapse id="navbar-5">
                  <Nav className="me-auto">
                    <Nav.Link href="#premium-home" active>🏠 Dashboard</Nav.Link>
                    
                    {/* Level 1 Submenu */}
                    <NavDropdownMenu title="🔌 Developer Tools" id="nav-dropdown-5">
                      <MenuItem href="#p-rest">REST client testing</MenuItem>
                      <MenuItem href="#p-grpc">gRPC Protocol stream</MenuItem>
                      <hr className="dropdown-divider" />
                      
                      {/* Nested Level 2 Submenu */}
                      <DropdownSubmenu href="#p-graphql" title="📊 GraphQL Server Engine">
                        <MenuItem href="#p-queries">GraphQL Queries</MenuItem>
                        <MenuItem href="#p-mutations">GraphQL Mutations</MenuItem>
                        
                        {/* Nested Level 3 Submenu */}
                        <DropdownSubmenu href="#p-subscriptions" title="⚡ Subscription Stream">
                          <MenuItem href="#p-websockets">WebSockets Engine</MenuItem>
                          <MenuItem href="#p-sse">Server-Sent Events</MenuItem>
                        </DropdownSubmenu>
                      </DropdownSubmenu>
                    </NavDropdownMenu>
                    
                    <Nav.Link href="#p-metrics">📈 Metrics</Nav.Link>
                  </Nav>
                  <Nav>
                    <span className="navbar-badge font-xs">Premium Skin</span>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            {/* Premium Glassmorphic Card */}
            <Card className="glass-card p-4 text-white">
              <Row className="align-items-center">
                <Col lg={8}>
                  <h4 className="fw-bold mb-1 text-white font-outfit">Tailored CSS Visual Customization</h4>
                  <p className="text-secondary font-xs m-0">
                    Perfect for SaaS dashboards and modern portfolios. Elevates default alignments using glassmorphism, background blurs, and hover transformations.
                  </p>
                </Col>
                <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
                  <Button 
                    variant={showCode5 ? "info" : "outline-info"} 
                    className="px-4"
                    onClick={() => setShowCode5(!showCode5)}
                  >
                    {showCode5 ? "Hide Code Snippet" : "View Code Snippet"}
                  </Button>
                </Col>
              </Row>

              {/* Code Snippet Panel */}
              {showCode5 && (
                <div className="code-snippet-panel mt-4">
                  <pre className="code-block font-xs">
                    <code>{`/* Customizing background menus with glassmorphism */
.dropdown-menu {
  background-color: rgba(28, 33, 52, 0.95) !important;
  backdrop-filter: blur(25px) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 12px !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
  padding: 8px !important;
}`}</code>
                  </pre>
                </div>
              )}
            </Card>
          </Container>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer py-4 bg-dark text-secondary border-top">
        <Container className="text-center font-xs">
          <p className="m-0">Designed and modernized with 🤍 for the open source React-Bootstrap community.</p>
        </Container>
      </footer>
    </div>
  );
}
