import React from 'react'
import ItHuntingOne from '../../images/It_hunting1.JPG'
import ItHuntingTwo from '../../images/It_hunting2.JPG'
const ItHunting = () => {
    return(
        <section className="middle_wraper">
        {/* <div className="banner_area ">
          <div className="banner_inner overlay d-flex align-items-center">
            <div className="container">
              <div className="banner_content text-left">
                <div className="page_link"> <a href="index.html">Home</a> <a href="#">It Hunting</a> </div>
                <h2>It Hunting</h2>
              </div>
            </div>
          </div>
        </div> */}
         <div id="about">
          <div className="container">
            <div className="section-header">
              <h3>It Hunting</h3>
              <p>The experience in the area of ​​integration of technological experts sensitizes us to the need of our clients to incorporate trained human talent with a strategic and business vision.</p>
            </div>
             
            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInUp"> <img src={ItHuntingOne} className="img-fluid" alt="hunting one"/> </div>
              <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                 <p>Our personnel selection techniques through headhunting, use of social networks, referrals and an extensive internal database (with more than 7,000 IT candidates in Mexico and 39,000 globally), gives us the opportunity to provide a service attached to times, quality and cost.</p>
                <p> Our main clients are Consulting and Software Development businesses and Start-ups, being the following technological niche market where we contribute the greatest value: Cloud Computing, Mobile, Web, Big Data & Analytics. </p>
              </div>
            </div>
            <div className="row about-extra">
              <div className="col-lg-6 wow fadeInUp order-1 order-lg-2"> <img src={ItHuntingTwo} className="img-fluid" alt="hunting two"/> </div>
              <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                <p>We specialize in integrating technology professionals, especially those in whom technology is supporting to transform the world.</p>
                <p> We have local and global experience for various public and private sector industries (financial, insurance, consumer, telecommunications, government, pharmaceutical and automotive), also working for remote positions. </p>
               </div>
            </div>
          </div>
        </div>
         
      </section>
    )
}

export default ItHunting