import { FC } from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer: FC = () => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark" className="footer">
      <Navbar.Text>&copy; {new Date().getFullYear()} Mehmed Jusic</Navbar.Text>
    </Navbar>
  );
};

export default Footer;
