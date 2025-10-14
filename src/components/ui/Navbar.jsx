import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MyNavbar() {
  // return (
  //   <nav className="navbar navbar-expand-lg container-fluid">
  //     <NavLink className="navbar-brand" to="/">
  //       <img className="logo" src="/spoolify_logo.jpg" alt="Logo" />
  //     </NavLink>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-toggle="collapse"
  //       data-target="#navbarSupportedContent"
  //       aria-controls="navbarSupportedContent"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>

  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="navbar-nav">
  //         <li className="nav-item active mx-4">
  //           <NavLink to="/" className="nav-link">
  //             Home
  //           </NavLink>
  //         </li>
  //         <li className="nav-item active">
  //           <NavLink to="/albums" className="nav-link mx-4">
  //             Album
  //           </NavLink>
  //         </li>
  //         <li className="nav-item active">
  //           <NavLink to="/genres" className="nav-link mx-4">
  //             Generi
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );

  // PICCOLO TEST CON REACT-BOOTSTRAP

  return (
    <Navbar expand="lg" className="">
      <Container fluid className="">
        <Navbar.Brand as={NavLink} to="/">
          <img className="logo" src="/spoolify_logo.jpg" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="">
            <Nav.Link as={NavLink} to="/" end className="fs-4 mx-4">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/albums" className="fs-4 mx-4">
              Album
            </Nav.Link>
            <Nav.Link as={NavLink} to="/genres" className="fs-4 mx-4">
              Generi
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
