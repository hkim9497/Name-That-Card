import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  const { isLoggedIn, loggedInUser, logoutUser, gameLogo, selectedGame, questionNumber } = props;
  let logInOutButton = isLoggedIn
  ? <div className="menu-item"><NavLink onClick={() => logoutUser()} to="">Logout</NavLink></div>
  : <div className="menu-item"><NavLink to="/login">Login</NavLink></div>;
  
  let navUsername = isLoggedIn
  ? <div className="menu-item"><span id="loginuser-text">Welcome, {loggedInUser}</span></div>
  : '';
  
  let signUpButton = isLoggedIn
  ? ''
  : <div className="menu-item"><NavLink to="/signup">Sign Up</NavLink></div>;
  
  let homeBtn = <div className="menu-item"><NavLink to="/">Home</NavLink></div>;
  
  let xBtn;
  
  let logoUrl = 'https://s3-us-west-1.amazonaws.com/namethatcard/Logos+%2B+Icons/' + selectedGame + 'Logo.png';
  
  let logo = <div className="logo"> <img className="gameLogo" src={logoUrl}></img> </div>;  

  if (window.location.pathname === '/') {
    homeBtn = '';
    xBtn = '';
    logoUrl = 'https://s3-us-west-1.amazonaws.com/namethatcard/Logos+%2B+Icons/GENERALIcon.png';
    document.body.style.backgroundImage = "url('https://s3-us-west-1.amazonaws.com/namethatcard/Background/GENERALBackground.jpg')";
  } else if (window.location.pathname === '/gameMenu/' + selectedGame) {
    logo;
    xBtn = '';
    document.body.style.backgroundImage = "url('https://s3-us-west-1.amazonaws.com/namethatcard/Background/" + selectedGame + "Background.jpg')";
  } else if (window.location.pathname === '/game') {
    logo;
    logInOutButton = '';
    homeBtn = '';
    signUpButton = '';
    navUsername = '';
    document.body.style.backgroundImage = "url('https://s3-us-west-1.amazonaws.com/namethatcard/Background/" + selectedGame + "Background.jpg')";
    const selectedGameRoute = `/gameMenu/${selectedGame}`
    xBtn = <div className="menu-item"><NavLink to={selectedGameRoute}>X</NavLink></div>;
    if(questionNumber === 20) {
      xBtn = <div className="menu-item"><NavLink to='/'>X</NavLink></div>;
    }
  } else if (window.location.pathname === '/login') {
    logInOutButton = '';
    xBtn = '';
    logo = <div className="logo"> NTC </div>
  } else if (window.location.pathname === '/signup') {
    signUpButton = '';
    xBtn = '';
    logo = <div className="logo"> NTC </div>
  } else if (window.location.pathname === '/admin') {
    signUpButton = '';
    xBtn = '';
    logInOutButton = '';
    logo = '';
  }

  return (
    <div className="navigation">
      {logo}
      <div className="right-menu">
        {homeBtn}
        {xBtn}
        {navUsername}
        {logInOutButton}
        {signUpButton}
      </div>
    </div>
  );
};

export default Navigation;
