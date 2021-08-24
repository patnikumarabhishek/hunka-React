import React from 'react'
import MeditationOnePic from '../../images/meditation1.JPG'
import MeditationTwoPic from '../../images/meditation1.JPG'
const Meditation = () => {
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
                        <h3>Sound Healing</h3>
                        <p>Metal Singing Bowls and Harmonic Chanting</p>
                    </div>
                    <div className="row about-extra">
                        <div className="col-lg-6 wow fadeInUp"> <img src={MeditationOnePic} className="img-fluid" alt="meditation one" /> </div>
                        <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                            <p>Everything that exists in the universe has its own vibration, therefore we all have our own sound, which varies according to the state of our physical and mental health.
                            </p>
                            <p>Sound therapy is based on the resonance principle, where a vibration with greater power and purity automatically transfers its qualities to any minor or dissonant vibration that exists within its range of action.</p>
                            <p> The singing bowls have a healing and relaxing effect at cellular level, providing the patient with general well-being and balance, thus recovering the natural harmony of the body, as we should normally feel.</p>
                            <p>The sound produced by these sacred instruments, plus the healing intention of the therapist, makes us feel enormous relaxation and well-being during the session, feeling their effects over a long period of time, which varies according to the person.</p>
                            <p>The patient contributes with predisposition towards change, seeking the own well-being and healing.   </p>
                        </div>
                    </div>
                    <div className="row about-extra">
                        <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                            <p>Everything that exists in the universe has its own vibration, therefore we all have our own sound, which varies according to the state of our physical and mental health.
                            </p>
                            <p>Sound therapy is based on the resonance principle, where a vibration with greater power and purity automatically transfers its qualities to any minor or dissonant vibration that exists within its range of action.</p>
                            <p> The singing bowls have a healing and relaxing effect at cellular level, providing the patient with general well-being and balance, thus recovering the natural harmony of the body, as we should normally feel.</p>
                            <p>The sound produced by these sacred instruments, plus the healing intention of the therapist, makes us feel enormous relaxation and well-being during the session, feeling their effects over a long period of time, which varies according to the person.</p>
                            <p>The patient contributes with predisposition towards change, seeking the own well-being and healing.   </p>
                        </div>
                        <div className="col-lg-6 wow fadeInUp"> <img src={MeditationTwoPic} className="img-fluid" alt="meditation two" /> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Meditation