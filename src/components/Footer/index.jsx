import React from 'react'
import logo from '../../images/logo_w.png'

import { Link } from 'react-router-dom'
 
const Footer = () => {
    return (
        <footer id="footer">
        <div className="footer-top">
         <div className="container">
           <div className="row">
             <div className="col-lg-3 col-md-6 col-sm-6 footer-contact">
               <div className="logofooter"><img src={logo} alt="logo"/></div>
               <p> Ures 93, Mexico City, Mexico <br/>
                 <br/>
                 <strong>Email:</strong> contact@hunka.mx <br/>
               </p>
             </div>
             <div className="col-lg-3 col-md-6 col-sm-6 footer-links">
               <h4>Useful Links</h4>
               <ul>
                 <li><i className="bx bx-chevron-right"></i> <Link to='/'>Home</Link></li>
                 <li><i className="bx bx-chevron-right"></i> <Link to='/about-us'>About us</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to='/contact-us'>Contact Us</Link></li>
                  <li><i className="bx bx-chevron-right"></i> <Link to='/terms-of-service'>Terms of service</Link></li>
                 <li><i className="bx bx-chevron-right"></i> <Link to='/privacy-policy'>Privacy policy</Link></li>
               </ul>
             </div>
             <div className="col-lg-3 col-md-6 col-sm-6 footer-links">
               <h4>Our Services</h4>
               <ul>
                 <li><i className="bx bx-chevron-right"></i> <Link to='it-hunting'>IT Hunting</Link></li>
                 <li><i className="bx bx-chevron-right"></i> <Link to='vacancies'>Strategic Recruitment Consultancy</Link></li>
                 <li><i className="bx bx-chevron-right"></i> <Link to='corporate-yoga'>Corporate Yoga</Link></li>
                 <li><i className="bx bx-chevron-right"></i> <Link to='meditation'>Sound Meditation and the text</Link></li>
               </ul>
             </div>
             <div className="col-lg-3 col-md-6 col-sm-6 footer-links">
               <h4>Our Social Networks</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <div className="social-links mt-3">
                   <a href="https://www.facebook.com" target="_blank" className="twitter"><i className="fa fa-facebook"></i></a>
                   <a href="https://www.twitter.com" target="_blank" className="facebook"><i className="fa fa-twitter"></i></a>
                   <a href="https://plus.google.com/" target="_blank" className="facebook"><i className="fa fa-google-plus"></i></a>
                   <a href="https://www.instagram.com" target="_blank" className="instagram"><i className="fa fa-instagram"></i></a>
                   <a href="https://www.linkedin.com" target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>
             </div>
           </div>
         </div>
       </div>
       <div className="container py-4">
         <div className="copyright"> &copy; Copyright <strong><span>Hunka Desarrollo Humano sc</span></strong>. All Rights Reserved </div>
       </div>
     </footer>
    )
}

export default Footer
