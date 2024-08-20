import React  from 'react'
import './Centre.css'
import Footer from './Footer';
// import Landing from './Landing';
import NewNav from './NewNav';

function Centre() {
  const handleButtonClick = () => {
    // Redirect to the specified URL when the button is clicked
    window.location.href = 'https://maps.app.goo.gl/Cr4pifKgBB5tXAWc8';
  };

  /* newwww*/

  return (
    <>
     <NewNav/>
     <body className='centrebody'>
     
   
    <div className="cardsall">
    <h1 className='centre'>Our Centres</h1>
   
      
      <div className="card">
        <div className="content">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
            ></path>
          </svg>
          <p className="para">
          Konark Darshan, B-106, Zaver Rd, near Jain Temple, Mulund, Mulund West, Mumbai, Maharashtra 400080
          </p>
          <button1 onClick={handleButtonClick}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="800px"
                  height="800px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                >
                  <path
                
                    d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                  />
                </svg>
              </div>
            </div>
            <span>Location</span>
          </button1>
        </div>
      </div>
      <div className="card1">
        <div className="content">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
            ></path>
          </svg>
          <p id = 'card1para' className="para">
          Varun Arcade, B wing, Ghodbunder Rd, Manpada, Thane West, Thane, Maharashtra 400610
          </p>
          <button1 onClick={handleButtonClick}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                    <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="800px"
                  height="800px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                >
                  <path
                
                    d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                  />
                </svg>
              </div>
            </div>
            <span>Location</span>
          </button1>
        </div>
      </div>
    </div>
   
      
   <Footer/>
   
  </body>
    </>
  )
}

export default Centre
