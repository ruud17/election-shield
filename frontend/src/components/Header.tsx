import { FC } from "react";
import { Navbar, Image } from "react-bootstrap";
import VoteLogo from "../images/vote.svg";

const Header: FC = () => {
  return (
    <Navbar fixed="top" bg="dark" data-bs-theme="light" className="header">
      <Image src={VoteLogo} className="election-logo " />
      Election Shield
    </Navbar>
  );
};

export default Header;
