import React, { useState } from "react";
import Button from "./Button";
import IonIcon from "@reacticons/ionicons";
import "./NewNav.css";
import { Link } from "react-router-dom";
// import "./Nav.css";


function NewNav() {
  const handleClick = () => {
    /*new updated*/

    document.body.classList.toggle("no-scroll");
  };
  /* olderrrr*/
  let Links = [
    { name: "HOME", link: "/" },
    { name: "CENTRE", link: "/centre" },
    { name: "ABOUT US", link: "/about" },
    // {name:"CONTACT",link:"/normal"},
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <body>
        <div
         
          id="navdivmain"
          className="shadow-md w-full fixed top-0 left-0"
        >
          <div className="md:flex items-center justify-between bg-white py-3 md:px-10 px-7">
            <div
              className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
            >
              {/* <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <IonIcon name="logo-ionic"></IonIcon>
        </span>
        Bio4u */}
              <a href="index.html">
                <Link className="linkbtn" to={"/"}>
                  <img className="nav-logo" src="/assets/nav-logooo.png" />
                </Link>
              </a>
            </div>

            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <IonIcon name={open ? "close" : "menu"}></IonIcon>
            </div>

            <ul
              id="mmenu"
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
        ${open ? "top-20 " : "top-[-490px]"}`}
            >
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                  <a id="navbarcontent"
                    href={link.link}
                    className="text-gray-800 hover:text-green-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
             
              <Button id="cntbtn">
                <Link id ='linkcontact' className="md:ml text-xl md:my-0 my-7" to={"/normal"}>
                  CONTACT
                </Link>
              </Button>
            </ul>
          </div>
        </div>
      </body>
    </>
  );
}

export default NewNav;
