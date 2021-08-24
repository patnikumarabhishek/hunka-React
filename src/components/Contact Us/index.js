import React from 'react'
import Address from '../../images/address.png'
import Email from '../../images/email.png'
import Call from '../../images/call.png'
const ContactUs = () => {
    return (
        <section className="middle_wraper">
            {/* <div className="banner_area ">
            <div className="banner_inner overlay d-flex align-items-center">
                <div className="container">
                <div className="banner_content text-left">
                    <div className="page_link"> <a href="index.html">Home</a> <a href="contact_us.html">Contact us</a> </div>
                    <h2>Contact us</h2>
                </div>
                </div>
            </div>
            </div> */}
            <div id="contact">
                <div className="container">
                    <div className="contact_title">
                        <h2>Contact us</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
                            iusto molestias accusamus rem nobis est, et laborum harum doloremque
                            nemo non, minima quos totam labore  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
                            iusto molestias accusamus rem nobis est, et laborum harum doloremque
                            nemo non, minima quos totam labore
                        </p>
                    </div>
                    <div className="contact">
                        <div className="contact-form">
                            <form>
                                <div className="row">
                                    <div className="input100">
                                        <input type="text" placeholder="Full Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input100">
                                        <input type="text" placeholder="Email" />
                                    </div>
                                    <div className="input100">
                                        <input type="text" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input100">
                                        <textarea placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input100">
                                        <input type="submit" value="Send" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="contact-info">
                            <div className="info-box">
                                <img src={Address} className="contact-icon" alt="address"
                                />
                                <div className="details">
                                    <h4>Address</h4>
                                    <p>A108 Adam Street New York, NY 535022 United States </p>
                                </div>
                            </div>
                            <div className="info-box">
                                <img src={Email} className="contact-icon" alt="email" />
                                <div className="details">
                                    <h4>Email</h4>
                                    <a href="mailto:anyone@example.com">info@hunka.com</a>
                                </div>
                            </div>
                            <div className="info-box">
                                <img src={Call} className="contact-icon" alt="call" />
                                <div className="details">
                                    <h4>Call</h4>
                                    <a href="#">+91 000 000 0000</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs