import React, { Fragment, useState, useEffect } from 'react';
import man from '../../assets/images/dashboard/profile.jpg'
import {  LogIn, Mail, User, Bell, Maximize, Search } from 'react-feather';
import { useNavigate } from 'react-router-dom'
import { firebase_app } from '../../data/config'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

const Rightbar = () => {

  const history = useNavigate();
  const [profile, setProfile] = useState('');
  const [name, setName] = useState('')
  const [searchresponsive, setSearchresponsive] = useState(false)
  const [setMoonlight] = useState(false)
  const [notificationDropDown, setNotificationDropDown] = useState(false)
  const { logout } = useAuth0()
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"))

  useEffect(() => {
    setProfile(localStorage.getItem('profileURL') || man);
    setName(localStorage.getItem('Name'))
    if (localStorage.getItem("layout_version") === "dark-only") {
      setMoonlight(true)
    }
  }, []);

  const Logout_From_Firebase = () => {
    localStorage.removeItem('profileURL')
    localStorage.removeItem('token');
    firebase_app.auth().signOut()
    history(`${process.env.PUBLIC_URL}/login`)
  }

  const Logout_From_Auth0 = () => {
    localStorage.removeItem("auth0_profile")
    localStorage.setItem("authenticated", false)
    history(`${process.env.PUBLIC_URL}/login`)
    logout()
  }

  const UserMenuRedirect = (redirect) => {
    history(redirect)
  }

  //full screen function
  function goFull() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  const SeacrhResposive = (searchresponsive) => {
    if (searchresponsive) {
      setSearchresponsive(!searchresponsive)
      document.querySelector(".search-full").classList.add("open");
      document.querySelector(".more_lang").classList.remove("active");
    } else {
      setSearchresponsive(!searchresponsive)
      document.querySelector(".search-full").classList.remove("open");
    }
  }



  return (
    <Fragment>
      <div className="nav-right col-4 pull-right right-header p-0">
        <ul className="nav-menus">
          
          <li><span className="header-search"><Search onClick={() => SeacrhResposive(searchresponsive)} /></span></li>
          <li className="onhover-dropdown">
            <div className="notification-box" onClick={() => setNotificationDropDown(!notificationDropDown)}><Bell /><span className="badge rounded-pill badge-secondary">2</span></div>
            <div className={`notification-dropdown onhover-show-div ${notificationDropDown ? "active" : ""}`}>
              <h6 className="f-18 mb-0 dropdown-title">Notification</h6>
              <ul>
                <li className="b-l-primary border-4">
                  <p>Delivery processing <span className="font-danger">{"10 min."}</span></p>
                </li>
                <li className="b-l-success border-4">
                  <p>Order Complete<span className="font-success">{"1 hr"}</span></p>
                </li>
                <li className="b-l-info border-4">
                  <p>Tickets Generated<span className="font-info">{"3 hr"}</span></p>
                </li>
                <li className="b-l-warning border-4">
                  <p>Delivery Complete<span className="font-warning">{"6 hr"}</span></p>
                </li>
                <li><Link className="font-primary f-w-700" to={`${process.env.PUBLIC_URL}/app/ecommerce/orderhistory/`}>Check all notification</Link>
                </li>
              </ul>
            </div>
          </li>
          
          
          <li className="maximize"><a className="text-dark" href="#javascript" onClick={goFull}><Maximize /></a></li>
          <li className="profile-nav onhover-dropdown p-0">
            <div className="media profile-media">
              <img className="b-r-10" src={authenticated ? auth0_profile.picture : profile} alt="" />
              <div className="media-body"><span>{authenticated ? auth0_profile.name : name}</span>
                <p className="mb-0 font-roboto">Admin <i className="middle fa fa-angle-down"></i></p>
              </div>
            </div>
            <ul className="profile-dropdown onhover-show-div">
              <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/users/userProfile/`)}><User /><span>Аккаунт </span></li>
              <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/email-app/`)}><Mail /><span>Почта</span></li>
              <li onClick={authenticated ? Logout_From_Auth0 : Logout_From_Firebase}><LogIn /><span>Выйти</span></li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>

  );
}
// export default translate(Rightbar);
export default Rightbar;