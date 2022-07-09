import React, { Fragment, useState, useLayoutEffect } from 'react';
import { Col } from 'reactstrap'
import { Layers, Inbox, AlignCenter } from 'react-feather'
import { Link } from 'react-router-dom'

const Leftbar = (props) => {
  const [bonusui, setBonusUI] = useState(false)
  const [levelMenu] = useState(false)
  const [sidebartoggle, setSidebartoggle] = useState(true)
  const width = useWindowSize()

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }


 


  const responsive_openCloseSidebar = (toggle) => {
    if (width <= 991) {
      setBonusUI(false)
      document.querySelector(".page-header").className = "page-header";
      document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper "
    } else {
      if (toggle) {
        setSidebartoggle(!toggle);
        document.querySelector(".page-header").className = "page-header close_icon";
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon "
        document.querySelector(".mega-menu-container").classList.remove("d-block")
      } else {
        setSidebartoggle(!toggle);
        document.querySelector(".page-header").className = "page-header";
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper "
      }
    }
  };

  return (
    <Fragment>
      <div className="header-logo-wrapper col-auto p-0" id="out_side_click">
        <div className="logo-wrapper">
          <Link to={`${process.env.PUBLIC_URL}/dashboard/`}>
            <img className="img-fluid for-light" src={require("../../assets/images/logo/logo.png")} alt="" />
          </Link>
        </div>
        <div className="toggle-sidebar" onClick={() => responsive_openCloseSidebar(sidebartoggle)} style={window.innerWidth <= 991 ? { display: "block" } : { display: "none" }}>
          <AlignCenter className="status_toggle middle sidebar-toggle" id="sidebar-toggle" />
        </div>
      </div>
      <Col className="left-header horizontal-wrapper ps-0">
        <ul className="horizontal-menu">
          <li className="mega-menu outside">
            <Link className={`nav-link ${bonusui ? 'active' : ''}`} to={`${process.env.PUBLIC_URL}/tariff/`}><Layers /><span>Оплата сервиса</span></Link>
          </li>
          <li className="level-menu outside">
            <Link className={levelMenu ? "nav-link active" : "nav-link"} to={`${process.env.PUBLIC_URL}/partnership/`}><Inbox /><span>Партнерская программа</span></Link>
            </li>
        </ul>
      </Col>
    </Fragment>
  );
}

export default Leftbar;