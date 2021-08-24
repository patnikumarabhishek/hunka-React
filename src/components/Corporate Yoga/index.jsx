import React from 'react'
import CorporateYogaOnePic from '../../images/corporate_yoga1.JPG'
import CorporateYogaTwoPic from '../../images/corporate_yoga2.JPG'

const CorporateYoga = () => {
    return (
        <section className="middle_wraper">
        {/* <div className="banner_area ">
          <div className="banner_inner overlay d-flex align-items-center">
            <div className="container">
              <div className="banner_content text-left">
                <div className="page_link"> <a href="index.html">Home</a> <a href="#">Meditation</a> </div>
                <h2>Meditation</h2>
              </div>
            </div>
          </div>
        </div> */}
            <div id="about">
                <div className="container">
                    <div className="section-header">
                        <h3>Corporate Yoga</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="row about-extra">
                        <div className="col-lg-6 wow fadeInUp"> <img src={CorporateYogaOnePic} className="img-fluid" alt="corporate yoga one" /> </div>
                        <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                            <p>This program is created and proposed with the firm objective of contributing to the well-being of the person, offering a practical alternative to improve their performance and comprehensive development (communication, openness, teamwork, self-criticism, analysis, concentration, attention, active listening and balance).</p>
                            <p>This program is created and proposed with the firm objective of contributing to the well-being of the person, offering a practical alternative to improve their performance and comprehensive development (communication, openness, teamwork, self-criticism, analysis, concentration, attention, active listening and balance).</p>
                            <p>This program is created and proposed with the firm objective of contributing to the well-being of the person, offering a practical alternative to improve their performance and comprehensive development (communication, openness, teamwork, self-criticism, analysis, concentration, attention, active listening and balance).</p>
                        </div>
                    </div>
                    <div className="row about-extra">
                        <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                            <p>This program is created and proposed with the firm objective of contributing to the well-being of the person, offering a practical alternative to improve their performance and comprehensive development (communication, openness, teamwork, self-criticism, analysis, concentration, attention, active listening and balance).</p>
                            <p>This program is created and proposed with the firm objective of contributing to the well-being of the person, offering a practical alternative to improve their performance and comprehensive development (communication, openness, teamwork, self-criticism, analysis, concentration, attention, active listening and balance).</p>
                            <p>This program is created and proposed with the firm objective of contributing to the well-being of the person, offering a practical alternative to improve their performance and comprehensive development (communication, openness, teamwork, self-criticism, analysis, concentration, attention, active listening and balance).</p>
                        </div>
                        <div className="col-lg-6 wow fadeInUp"> <img src={CorporateYogaTwoPic} className="img-fluid" alt="corporate yoga two" /> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CorporateYoga