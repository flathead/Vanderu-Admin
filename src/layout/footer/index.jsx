import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap'
import moment from 'moment';

const Footer = (props) => {

  const curYear = moment().format("YYYY");

  return (
    <Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md="12" className="footer-copyright text-center">
              <p className="mb-0">{"Copyright " + curYear + " © Vanderu"}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Fragment>
  );
}

export default Footer;