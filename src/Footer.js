import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
     <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div id = 'maincentre'  className="container">
                    <div className="row">
                       
                        <div  className="col-lg-3 col-md-6">
                            <div id = 'centrearea' className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" 
                            style={{
                              visibility: 'visible',
                                animationDelay: '0.8s', 
                                animationName: "fadeInLeft"
                                }}>
                                <h3 className="f-title f_600 t_color f_size_18">Bio4u</h3>
                                <div className="f_social_icon">
                                    <a href="https://www.facebook.com/bio4ubiologytuitions" className="fab fa-facebook"></a>
                                    <a href="https://x.com/Bio4u_Skumar" className="fab fa-twitter"></a>
                                    <a href="https://www.youtube.com/@bio4uprof.sushilmishra" className="fab fa-youtube"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
           
        </footer>
    </>
  )
}

export default Footer
