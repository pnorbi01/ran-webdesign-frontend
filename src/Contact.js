import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {

  document.addEventListener('DOMContentLoaded', function() {
    const mailElement = document.querySelector('.mail-element');
    const contactElement = document.querySelector('.contact-element');
  
    contactElement.addEventListener(this.onmouseover, () => {
      mailElement.style.display = 'block';
    });
  
    contactElement.addEventListener(this.onmouseout, () => {
      mailElement.style.display = 'none';
    });
  });


    return (
      <section className="flex w-full flex-row justify-center items-center text-slate-100 flex-wrap mt-32">
          <div className="flex flex-col justify-center items-center gap-2 w-full p-3">
                <div className="content flex flex-col justify-center items-center gap-2 w-1/2 p-5 relative">
                    <div className="pseudo-element-contact before:content-['4'] absolute py-2 px-3.5 -top-8 text-white rounded-full font-bold"></div>
                    <div className="contact-pseudo-line before:content-[''] rounded-lg absolute -top-32 h-24 w-px bg-primary-500"></div>
                    <h3 className="contact-section-title font-extrabold text-2xl text-center">Contact</h3>
                    <h1 className="description-title text-gray-800 font-extrabold text-4xl text-center">Get in touch with us.</h1>
                    <span className="description text-gray-400 font-normal text-base text-center">Don't hesitate! Let's make your project even better together.  Whether you have a new project in mind or need improvements to an existing one, we're here to collaborate and bring your vision to life.</span>
                    <span className="description text-gray-400 font-normal text-base text-center">Your satisfaction is our top priority. Contact us today and let's discuss how we can take your project to the next level!</span>
                </div>
                <div className="contact-container flex flex-col justify-center items-center w-3/5 rounded-xl divide-y-1 divide-slate-300/25 shadow-2xl">
                  <div className="contact-element flex flex-row justify-between items-center w-full p-5 hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-center gap-3">
                      <FontAwesomeIcon icon={faEnvelope} size="1x" className="contactIcon" />
                      <span className="description text-gray-100 font-normal text-base text-center">Via email</span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-3">
                      <span className="description text-gray-100 font-normal text-base text-center">ranwebdesign@gmail.com</span>
                      <FontAwesomeIcon icon={faArrowRight} size="1x" className="arrowIcon transition-all" />
                    </div>
                  </div>
                  <div className="contact-element flex flex-row justify-between items-center w-full p-5 hover:cursor-pointer">
                    <div className="flex flex-row justify-center items-center gap-3">
                      <FontAwesomeIcon icon={faPhone} size="1x" className="contactIcon" />
                      <span className="description text-gray-100 font-normal text-base text-center">Via phone</span>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-3">
                      <span className="description text-gray-100 font-normal text-base text-center">+381606191925</span>
                      <FontAwesomeIcon icon={faArrowRight} size="1x" className="arrowIcon transition-all" />
                    </div>
                  </div>
                </div>
          </div>
      </section>
    );
  }

export default Contact;
