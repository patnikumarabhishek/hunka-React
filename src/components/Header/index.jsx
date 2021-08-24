import React from 'react'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux';
import loginImg from '../../images/login.png'
import addUserImg from '../../images/add-user.png'
import companyLogo from '../../images/logo.png'

const Header = (props) => {

  const { status, userProfileData } = props
  const onSearch = (e) => {
    e.preventDefault()
    console.log('search clicked')
  }

  const logoutHandler = () => {
    console.log('Logout clicked')
  }

  return (
    <header>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-7 d_i">
              <ul>
                <div className="mailbx">
                  <li><a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i> contacto@hunka.mx</a></li>
                </div>
                {/* <li><a href="#"> <i className="fa fa-phone" aria-hidden="true"></i> +91-000 000 0000 </a></li> */}
              </ul>
            </div>
            <div className="col-sm-6 col-5 d_r">
              <div className="login_top">
                {
                  status !== 'SUCCESS' && (
                    <ul>
                      <li><Link to='/login'><img src={loginImg} alt="user-login-logo" /> Login </Link></li>
                      <li><Link to='/register'><img src={addUserImg} alt="user-registration-logo" /> Register</Link></li>
                    </ul>
                  )
                }
                {
                  status === 'SUCCESS' && (
                    <ul>
                      <li>{`Welcome ${userProfileData?.fullname}`}</li>
                      <li><button className="card-button" onClick={logoutHandler}>Logout</button></li>
                    </ul>
                  )
                }
              </div>
              <div className="a_icon">
                <ul>
                  <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i> </a></li>
                  <li><a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="https://plus.google.com/" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom header_fix" >
        <div className="container">
          <div className="page-wrapper">
            <div className="nav-wrapper">
              <nav className="navbar"> <Link to='/'><img src={companyLogo} alt="Company Logo" /></Link>
                <div className="menu-toggle" id="mobile-menu"> <span className="bar"></span> <span className="bar"></span> <span className="bar"></span> </div>
                <ul className="nav no-search">
                  <div className="search_top_header mobile_search">
                    <form onSubmit={onSearch}>
                      <input className="form-control " type="search" placeholder="Search . . . ." aria-label="Search" />
                      <button className=" " type="submit"><i className="fa fa-search" aria-hidden="true"></i> </button>
                    </form>
                  </div>
                  <li className="nav-item"><Link to='/it-hunting'>It Hunting </Link></li>
                  <li className="nav-item"><Link to='/vacancies'>Vacancies </Link></li>
                  <li className="nav-item"><Link to='/community'>Community </Link></li>
                  <li className="nav-item"><Link to='/meditation'>Meditation</Link></li>
                  {/* <li className="nav-item"><a href="#">Espanol </a></li> */}
                  <div className="search_top_header destop_search">
                    <form onSubmit={onSearch}>
                      <input className="form-control " type="search" placeholder="Search . . . ." aria-label="Search" />
                      <button className=" " type="submit"><i className="fa fa-search" aria-hidden="true"></i> </button>
                    </form>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function mapStateToProps(state) {
  console.log('state', state)
  const { status } = state.users;
  const { userProfileData } = state.userProfile
  return { status, userProfileData };
}

const connectedHeader = connect(mapStateToProps, {})(Header);
export { connectedHeader as Header };