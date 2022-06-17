import React, { Fragment } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Home } from 'react-feather';
import { Link } from 'react-router-dom'
import { classes } from '../../data/layouts';


const Breadcrumbs = (props) => {

  const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();

  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-title">
          <Row>
            <Col xs="6">
              <h3>{props.title}</h3>
            </Col>
            <Col xs="6">
              <Breadcrumb>
                <BreadcrumbItem><Link to={`${process.env.PUBLIC_URL}/dashboard/${layout}`}><Home /></Link></BreadcrumbItem>
                <BreadcrumbItem>{props.parent}</BreadcrumbItem>
                <BreadcrumbItem active>{props.title}</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default Breadcrumbs;