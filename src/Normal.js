import React, { useState, useRef } from "react";
import "./Normal.css";
import emailjs from "@emailjs/browser";




import NewNav from "./NewNav";
import Footer from "./Footer";

function Normal() {
  const [name, setTitle] = useState("");
  const [phnumber, setPhnumber] = useState("");
  const [gmail, setGmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_jj5cmuj',
        'template_yvpiols',
        form.current,
        'TKz3CWMYe3Xy7jT6L'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {name,phnumber,gmail,message};

    fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      console.log(post);
    });
  };
  const submit = () => {
    document
      .getElementById("myForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("popup").style.display = "block";
      });
  };

  const closebtn = () => {
    document
      .getElementsByClassName("close-btn")[0]
      .addEventListener("click", function () {
        document.getElementById("popup").style.display = "none";
        clearForm();
      });
  };

  const click = () => {
    window.addEventListener("click", function (event) {
      if (event.target == document.getElementById("popup")) {
        document.getElementById("popup").style.display = "none";
        clearForm();
      }
    });
  };
  function clearForm() {
    document.getElementById("myForm").reset();
  }




  // document.getElementById("myForm").addEventListener("submit", function(event){
  //     event.preventDefault();
  //     document.getElementById("popup").style.display = "block";
  //   });

  //   document.getElementsByclassNameName("close-btn")[0].addEventListener("click", function(){
  //     document.getElementById("popup").style.display = "none";
  //     clearForm();
  //   });

  //   window.addEventListener("click", function(event){
  //     if (event.target == document.getElementById("popup")) {
  //         document.getElementById("popup").style.display = "none";
  //         clearForm();
  //     }
  //   });

  //   function clearForm() {
  //     document.getElementById("myForm").reset();
  //   }

  return (
    <>
      <NewNav />
      <body className="contactbody">
        <section className="contact-section">
          <div className="contact-bg">
            <h3>Get in Touch with Us</h3>
            <h2>Contact Us</h2>
            <div className="line">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="contact-body">
            <div className="contact-info">
              <div>
                <span>
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <span>Phone No.</span>
                <span className="text">+91 98927 55759</span>
              </div>
              <div>
                <span>
                  <i className="fas fa-envelope-open"></i>
                </span>
                <span>E-mail</span>
                <span className="text">drskumarbio4u@gmail.com</span>
              </div>
              <div>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>Address</span>
                <span className="text">
                Konark Darshan, B-106, Zaver Rd, near Jain Temple, Mulund, Mulund West, Mumbai, Maharashtra 400080
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-clock"></i>
                </span>
                <span>Opening Hours</span>
                <span className="text">
                  Monday - Friday (7:00 AM to 7:00 PM)
                </span>
              </div>
            </div>
            <div className="contact-form">
              <form
                ref={form}
                onSubmit={async (value) => {
                  handleSubmit(value);
                  sendEmail(value);
                }}
                id="myForm"
              >
                <div>
                  <input
                    type="text"
                    id="first_name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(event) => setTitle(event.target.value)}
                    name="user_name"
                  />
                  {/* <input type="text" 
                        classNameName="form-control" 
                        placeholder="Last Name" 
                        required
                        value={user_name}
                        onChange={(event) => setTitle(event.target.value)} 
                        name='user_name'
                        /> */}
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    required
                    value={gmail}
                    onChange={(event) => setGmail(event.target.value)}
                    name="user_email"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    required
                    value={phnumber}
                    onChange={(event) => setPhnumber(event.target.value)}
                    name="message"
                  />
                </div>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="form-control"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                ></textarea>
                <input
                  onClick={submit}
                  type="submit"
                  className="input submit"
                />
              </form>
              <div>
                <img src= "/assets/writeus.png" alt="" />
              </div>
            </div>
          </div>
          {/* <div classNameName="contact-footer">
            <h3>Follow Us</h3>
            <div className="social-links">
                <a href="#" classNameName="fab fa-facebook-f"></a>
                <a href="#" classNameName="fab fa-twitter"></a>
                <a href="#" classNameName="fab fa-instagram"></a>
                <a href="#" classNameName="fab fa-linkedin"></a>
                <a href="#" classNameName="fab fa-youtube"></a>
            </div>
        </div> */}
        </section>
        <div onClick={click} id="popup" className="popup">
          <div className="popup-content">
            <span onClick={closebtn} className="close-btn">
              &times;
            </span>

            <p>Form submitted successfully! We will revert you soon</p>
            <div className="photo">
              <img src="/assets/success.png" alt="failure" />
            </div>
          </div>
        </div>
        {/* <script src="script.js"></script> */}

        {/* FOOTER */}
        {/* <footer className="new_footer_area bg_color">
          <div className="new_footer_top">
            <div id="maincentre" className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div
                    id="centrearea"
                    className="f_widget social-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.8s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.8s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <h3 className="f-title f_600 t_color f_size_18">
                      Team Solutions
                    </h3>
                    <div classNameName="f_social_icon">
                      <a href="#" className="fab fa-facebook"></a>
                      <a href="#" className="fab fa-twitter"></a>
                      <a href="#" className="fab fa-linkedin"></a>
                      <a href="#" className="fab fa-pinterest"></a>
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
        </footer> */}
        <Footer/>
      </body>
    </>
  );
}

export default Normal;
