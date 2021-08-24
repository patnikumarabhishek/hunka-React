import React from 'react'
import BannerHomeOne from '../../images/banner_home.jpg'
import BannerHomeTwo from '../../images/banner_home2.jpg'
import BannerHomeThree from '../../images/banner_home3.jpg'
import ServicesLeftImage from '../../images/services-left-image.png' 

import { Link } from 'react-router-dom'
const Home = () => {
    return(
        <section className="middle_wraper">
        <div className="banner_home">
          <div className="slider-wrapper">
            <div className="owl-carousel main-carousel">
              <div className="item slide1 silder_images"> <img style={{maxWidth: "100%"}} src={BannerHomeOne} alt="banner one"/>
                <div className="banner_home_text">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h2 >Connecting <span>Talent</span></h2>
                        <h3><span style={{color:"#00f"}}>Technology roles</span> @ start-ups and global consultancies</h3>
                        <p>Find and hire the right talent, fast with our tailored in-house built CRM to smoothly manage the selection process.</p>
                        <div className="request_demo "> <a href="#" className="fir_button">See the Hottest Role </a> <a href="#"> Request A Demo </a> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item slide1 silder_images"> <img style={{maxWidth: "100%"}} src={BannerHomeTwo} alt="banner two"/>
                <div className="banner_home_text">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12"></div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h2 >Connecting <span>Talent</span></h2>
                        <h3><span style={{color:"#00f"}}>Technology roles</span> @ start-ups and global consultancies</h3>
                        <p>Find and hire the right talent, fast with our tailored in-house built CRM to smoothly manage the selection process.</p>
                        <div className="request_demo "> <a href="#" className="fir_button">See the Hottest Role </a> <a href="#"> Request A Demo </a> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item slide1 silder_images"> <img style={{maxWidth: "100%"}} src={BannerHomeThree} alt="banner three"/>
                <div className="banner_home_text">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h2 >Connecting <span>Talent</span></h2>
                        <h3><span style={{color:"#00f"}}>Technology roles</span> @ start-ups and global consultancies</h3>
                        <p>Find and hire the right talent, fast with our tailored in-house built CRM to smoothly manage the selection process.</p>
                        <div className="request_demo "> <a href="#" className="fir_button">See the Hottest Role </a> <a href="#"> Request A Demo </a> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="services" className="our-services section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 align-self-center " >
                <div className="left-image"> <img src={ServicesLeftImage} alt="left image"/> </div>
              </div>
              <div className="col-lg-6 col-md-6 " >
                <div className="section-heading">
                  <h2>HunKa Human Development</h2>
                  <p>Start-up born in 2015 in CDMX inspired by the need to generate a window of approach and connection of the best technological talents with local, global companies and start-ups with the common vision of contributing to change through the use and application of technology as means of multifunctional and didactic interaction. <br/>
                    <br/>
                    Technologies that we have been searching lately in the candidates experience: <br/>
                    Selenium, Java, C#, Loadrunner, React, Angular, iOS, Android. </p>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="first-bar progress-skill-bar">
                      <h4>Roles with global IT Consultancies</h4>
                      <span>50%</span>
                      <div className="filled-bar"></div>
                      <div className="full-bar"></div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="second-bar progress-skill-bar">
                      <h4>US related roles in English</h4>
                      <span>80%</span>
                      <div className="filled-bar"></div>
                      <div className="full-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="about" className="about-us section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="left-image " > <img src="images/about-left-image.png" alt="person graphic"> </div>
              </div>
              <div className="col-lg-8 col-md-8 align-self-center">
                <div className="services">
                  <div className="row">
                    <div className="col-lg-6 ">
                      <div className="item "  >
                        <div className="icon"> <img src="images/service-icon-01.png" alt="reporting"> </div>
                        <div className="right-text">
                          <h4>What is Lorem Ipsum?</h4>
                          <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="item " data-wow-duration="1s" data-wow-delay="0.7s">
                        <div className="icon"> <img src="images/service-icon-01.png" alt=""> </div>
                        <div className="right-text">
                          <h4>What is Lorem Ipsum?</h4>
                          <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="item " data-wow-duration="1s" data-wow-delay="0.9s">
                        <div className="icon"> <img src="images/service-icon-01.png" alt=""> </div>
                        <div className="right-text">
                          <h4>What is Lorem Ipsum?</h4>
                          <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="item " data-wow-duration="1s" data-wow-delay="1.1s">
                        <div className="icon"> <img src="images/service-icon-01.png" alt=""> </div>
                        <div className="right-text">
                          <h4>What is Lorem Ipsum?</h4>
                          <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <section id="services" className="services section-bg section_services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Our Services</h2>
            </div>
            <div className="row">
              <div className="services_top">
                <p> The experience in the area of ​​integration of technological experts sensitizes us to the need of our clients to incorporate trained human talent with a strategic and business vision.
                  
                  
                  Our personnel selection techniques through headhunting, use of social networks, referrals and an extensive internal database (with more than 7,000 IT candidates in Mexico and 39,000 globally), gives us the opportunity to provide a service attached to times, quality and cost.
                  
                  Our main clients are Consulting and Software Development businesses and Start-ups, being the following technological niche market where we contribute the greatest value: Cloud Computing, Mobile, Web, Big Data & Analytics.</p>
              </div>
              <div className="col-md-6 col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4 className="title"><Link to='/it-hunting'>IT Hunting</Link></h4>
                  <p className="description">The experience in the area of ​​integration of technological experts sensitizes us to the need of our clients to incorporate trained human talent with a strategic and business vision.</p>
                  <fieldset>
                    <button type="submit" id="form-submit" className="main-button ">View More</button>
                  </fieldset>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4 className="title"><Link to='/vacancies'>Strategic Recruitment Consultancy</Link></h4>
                  <p className="description">Analysis, improvement, structure, training and documentation of the recruitment area under best practices, always acting as an external agent and highly oriented to the needs and objectives of the business.</p>
                  <fieldset>
                    <button type="submit" id="form-submit" className="main-button ">View More</button>
                  </fieldset>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4 className="title"><Link to='/corporate-yoga'>Corporate Yoga</Link></h4>
                  <p className="description">This program is created and proposed with the firm objective of contributing to the well-being of the person, offering a practical alternative to improve their performance and comprehensive development (communication, openness, teamwork, self-criticism, analysis, concentration, attention, active listening and balance).</p>
                  <fieldset>
                    <button type="submit" id="form-submit" className="main-button ">View More</button>
                  </fieldset>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-world"></i></div>
                  <h4 className="title"><Link to='/meditation'>Sound Meditation and the text</Link></h4>
                  <p className="description">The singing bowls have a healing and relaxing effect at cellular level, providing the patient with general well-being and balance, thus recovering the natural harmony of the body, as we should normally feel.</p>
                  <fieldset>
                    <button type="submit" id="form-submit" className="main-button ">View More</button>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="contact" className="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 align-self-center Left" >
                <div className="section-heading">
                  <h2>Feel Free To Send Us a Message </h2>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6  Right" >
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <fieldset>
                        <input type="name" name="name" id="name" placeholder="Name" required/>
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input type="surname" name="surname" id="surname" placeholder="Surname" autoComplete="on" required/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input type="text" name="email" id="email"  placeholder="Your Email" required=""/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="main-button ">Send Message</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
        <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/>
              <input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
      </section>
    )
}

export default Home