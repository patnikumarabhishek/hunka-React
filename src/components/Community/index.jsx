import React from 'react'
import CommunityOne from '../../images/community1.jpg'
import CommunityTwo from '../../images/community2.jpg'
import CommunityThree from '../../images/community3.jpg'
import CommunityFour from '../../images/community4.jpg'
import CommunityFive from '../../images/community5.jpg'

const Community = () => {
    return (
        <section className="middle_wraper">
            <div className="community_page">
                <div className="container mt-5">
                    <h2 className="text-center my-5"> Art Expressions</h2>
                    <p>Favorable space to share, express and promote own and collective projects, as ways of integrating the network of people who are leading the paradigm shift in the way people think, interact and do things.</p>
                    <article className="row row-cols-1 row-cols-sm-2 g-2 d-flex justify-content-center">
                        <div className="col-sm-6 col-md-3 mb-4 text-center"> <a data-fancybox="gallery" data-src="images/community1.jpg" data-caption="Picture Title"> <img src={CommunityOne} alt="not found"/>
                            <figcaption>Picture Title</figcaption>
                        </a> </div>
                        <div className="col-sm-6 col-md-3 mb-4 text-center"> <a data-fancybox="gallery" data-src="images/community2.jpg" data-caption="Picture Title"> <img src={CommunityTwo} alt="not found"/>
                            <figcaption>Picture Title</figcaption>
                        </a> </div>
                        <div className="col-sm-6 col-md-3 mb-4 text-center"> <a data-fancybox="gallery" data-src="images/community3.jpg" data-caption="Picture Title"> <img src={CommunityThree} alt="not found"/>
                            <figcaption>Picture Title</figcaption>
                        </a> </div>
                        <div className="col-sm-6 col-md-3 mb-4 text-center"> <a data-fancybox="gallery" data-src="images/community4.jpg" data-caption="Picture Title"> <img src={CommunityFour} alt="not found"/>
                            <figcaption>Picture Title</figcaption>
                        </a> </div>
                        <div className="col-sm-6 col-md-3 mb-4 text-center"> <a data-fancybox="gallery" data-src="images/community5.jpg" data-caption="Picture Title"> <img src={CommunityFive} alt="not found"/>
                            <figcaption>Picture Title</figcaption>
                        </a> </div>
                        <div className="col-sm-6 col-md-3 mb-4 text-center"> <a data-fancybox="gallery" data-src="images/community3.jpg" data-caption="Picture Title"> <img src={CommunityThree} alt="not found"/>
                            <figcaption>Picture Title</figcaption>
                        </a> </div>
                        <div className="col-sm-6 col-md-3 mb-4 text-center"> <a data-fancybox="gallery" data-src="images/community4.jpg" data-caption="Picture Title"> <img src={CommunityFour} alt="not found"/>
                            <figcaption>Picture Title</figcaption>
                        </a> </div>
                        <div className="col-sm-6 col-md-3 mb-4 text-center"> <a data-fancybox="gallery" data-src="images/community5.jpg" data-caption="Picture Title"> <img src={CommunityFive} alt="not found"/>
                            <figcaption>Picture Title</figcaption>
                        </a> </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Community