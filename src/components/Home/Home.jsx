import React, { useEffect, useRef } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Home = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p2m140s", "template_hf0ppyf", form.current, {
        publicKey: "LEHkLS6cWlJCfsS99",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="home">
        <div className="bg1" id="home-sec">
          <div className="bg11">
            <div className="home-p1" data-aos="fade-up">
              Hello !
            </div>
            <div className="home-p2" data-aos="fade-up">
              I am Jishnu C K
            </div>
            <div className="home-p3" data-aos="fade-up">
              I'm a proficient Full Stack web developer adept in both front-end
              and back-end development, committed to crafting seamless digital
              experiences. Please feel free to peruse my CV to get a glimpse of
              my portfolio and previous endeavors.{" "}
            </div>
           
            <a
                href="/myprofile.pdf"
                download="myprofile.pdf"
              >
<button className="btn-home3" data-aos="fade-up" >
              Download CV
            </button>      
              </a>
            <a href="https://www.linkedin.com/in/jishnu-ck/">
              <button className="btn-home" data-aos="fade-up">
                <img src="/linkedin.png" className="btn-img"></img>
              </button>
            </a>
            <a href="https://github.com/Jishnuck2000">
              <button className="btn-home2" data-aos="fade-up">
                <img src="/github (1).png" className="btn-img"></img>
              </button>
            </a>
          </div>

          <a href="https://www.instagram.com/jishnu_c_k_/">
            <img src="/it.png" className="s-m"></img>
          </a>

          <a href="https://github.com/Jishnuck2000">
            <img src="/gh.png" className="s-m2"></img>
          </a>

          <a href="https://www.linkedin.com/in/jishnu-ck/">
            <img src="/ld.png" className="s-m3"></img>
          </a>

          <a href="https://www.facebook.com/jishnu.jishnu.14224094">
            <img src="/fb.png" className="s-m4"></img>
          </a>

          <div className="bg12">
            <img src="/mypic.png" className="mypic" data-aos="zoom-in-up"></img>
          </div>
        </div>

        <div className="bg2" id="skill-sec">
          <div className="bg21" data-aos="fade-up">
            Expertise
          </div>
          <div className="bg22">
            <div className="bg221" data-aos="fade-up">
              <img src="/library.png" className="ex1"></img>
              <img src="/redux.png" className="ex1"></img>
              <img src="/mongodb.png" className="ex1"></img>
              <img src="/nodejs.png" className="ex1"></img>
              <img src="/exprtess.png" className="ex1"></img>
              <img src="/postman.png" className="ex1"></img>
            </div>
            <div className="bg221" data-aos="fade-up">
              <img src="/restapi.png" className="ex1"></img>
              <img src="/jwt.png" className="ex1"></img>
              <img src="/git.png" className="ex1"></img>
              <img src="/bootstrap.png" className="ex1"></img>
              <img src="/javascript.png" className="ex1"></img>
              <img src="/css.png" className="ex1"></img>
            </div>
            <div className="bg221" data-aos="fade-up">
              <img src="/html.png" className="ex1"></img>
            </div>
          </div>
        </div>

        <div className="home-bg3" id="project-sec">
          <div className="home-bg31" data-aos="fade-up">
            Personal Projects
          </div>

          <div className="card-container">
            <div className="card">
              <div className="front-content">
                <p>CYBER CARE</p>
              </div>
              <div className="content">
                <img src="/cc.jpg" className="cc-img"></img>
                <div className="img-p1">
                  <div className="img-p2">
                    <img src="/shield.png" className="shield"></img>
                    <h2 className="shield-h2">CYBER CARE</h2>
                  </div>
                  <div className="img-p3">
                    <ul>
                      <li>
                        The project involves creating a web application to
                        educate people on cyber awareness and protect them from
                        online threats, enhancing their digital safety and
                        security.
                      </li>
                      <li>
                        Technologies Used : React-js ,Express,MongoDB,Node-js{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="img-p4">
                    <a href="https://github.com/Jishnuck2000">
                      <button className="btn1-imgp4">
                        <img src="/git1.png" className="git-imgp4"></img>
                        <h3 className="git-btn">Github</h3>
                      </button>
                    </a>
                    <a href="https://effulgent-cannoli-2ff5bf.netlify.app/">
                      <button className="btn2-imgp4">
                        <img src="/logout1.png" className="git-imgp4"></img>
                        <h3 className="git-btn">Go to web</h3>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="front-content">
                <p>LINCOLN</p>
              </div>
              <div className="content">
                <img src="/LIN.jpg" className="cc-img"></img>
                <div className="img-p11">
                  <div className="img-p2">
                    <img src="/logo.png" className="lincoln1"></img>
                    <h2 className="shield-h2"></h2>
                  </div>
                  <div className="img-p33">
                    <ul>
                      <li>
                        The luxury car clone web app employs CRUD operations,
                        enabling users to Create, Read, Update, and Delete car
                        listings. It mimics luxury car platforms, facilitating
                        seamless browsing, editing, and management of vehicle
                        data.
                      </li>
                      <li>
                        Technologies Used : React-js ,Express,MongoDB,Node-js{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="img-p4">
                    <a href="https://github.com/Jishnuck2000/Lincoln-MERN">
                      <button className="btn11-imgp4">
                        <img src="/git1.png" className="git-imgp4"></img>
                        <h3 className="git-btn">Github</h3>
                      </button>
                    </a>
                    <a href="https://lincoln-mern.vercel.app/">
                      <button className="btn22-imgp4">
                        <img src="/logout1.png" className="git-imgp4"></img>
                        <h3 className="git-btn">Go to web</h3>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="front-content">
                <p>PORTFOLIO</p>
              </div>
              <div className="content">
                <img src="/pc.jpg" className="cc-img"></img>
                <div className="img-p111">
                  <div className="img-p2">
                    {/* <img src="shield.png" className="shield"></img> */}
                    <h2 className="shield-h2">PORTFOLIO</h2>
                  </div>
                  <div className="img-p333">
                    <ul>
                      <li>
                        The project involves creating a web application to
                        educate people on cyber awareness and protect them from
                        online threats, enhancing their digital safety and
                        security.
                      </li>
                      <li>
                        Technologies Used : React-js ,Express,MongoDB,Node-js{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="img-p4">
                    <button className="btn111-imgp4">
                      <img src="/git1.png" className="git-imgp4"></img>
                      <h3 className="git-btn">Github</h3>
                    </button>
                    <button className="btn222-imgp4">
                      <img src="/logout1.png" className="git-imgp4"></img>
                      <h3 className="git-btn">Go to web</h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-bg5" id="contact-sec">
          <div className="home-bg51">
            <div className="bg51-h1">Getting in touch is easy!</div>
          </div>
          <div className="home-bg52">
            <div className="bg52-h1">Send me a Message</div>
            <form ref={form}>
              <div className="fullname">Full Name*</div>
              <input
                type="text"
                className="bg52-i1"
                name="from_name"
                required
              ></input>
              <div className="fullname">Email*</div>
              <input
                type="text"
                className="bg52-i1"
                name="from_email"
                required
              ></input>
              <div className="fullname">Subject*</div>
              <input
                type="text"
                className="bg52-i1"
                name="subject"
                required
              ></input>
              <div className="fullname">Your message here*</div>
              <input
                type="text"
                className="bg52-i1"
                name="message"
                required
              ></input>
              <div>
                <button className="button-send" onClick={sendEmail}>
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        />
                      </svg>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-sec">
        <div className="footer-sec-content">
          <a
            className="footer-card-sec"
            href="https://maps.app.goo.gl/ubY4SunqyHHi9hPq7"
          >
            <img src="/location.jpg" alt="" className="footer-icon" />
            Calicut,Kerala
          </a>

          <a className="footer-card-sec" href="tel:9496159409">
            <img src="/phone.jpg" alt="" className="footer-icon" />
            +91-(9496)159409
          </a>

          <a
            className="footer-card-sec"
            href="mailto:jeochirrakkal26@gmail.com"
          >
            <img src="/email.jpg" alt="" className="footer-icon" />
            jeochirrakkal26@gmail.com
          </a>
        </div>
        <div className="footer-sec-data">© 2024 All Rights Reserved </div>
                
      </div>
    </div>
  );
};

export default Home;
