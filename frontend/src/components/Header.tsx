import { FC } from "react";
import { Navbar, Row, Alert, Image } from "react-bootstrap";
import VoteLogo from "../images/vote.svg";

const Header: FC = () => {
  return (
    <Navbar fixed="top" bg="light" data-bs-theme="light" className="header">
      <Image src={VoteLogo} className="election-logo " />
      Election Shield
    </Navbar>
    // <Container fluid className="header">
    //   <Row>
    //     <Alert variant="light" className="header">
    //       <Alert.Heading>
    //         <Image src={VoteLogo} className="election-logo " />
    //         Election Shield
    //       </Alert.Heading>
    //     </Alert>
    //   </Row>
    // </Container>
  );
};

export default Header;
