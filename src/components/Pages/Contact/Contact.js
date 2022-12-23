import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import Lottie from 'react-lottie';
import contact from '../../../contact3.json'

const Contact = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: contact,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_zelvuyb",
            "template_5zgg1fs",
            form.current,
            "at_o008ecSLLqaDff"
          )
          .then(
            (result) => {
              console.log(result.text);
              console.log("message sent");
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
    return (
        <div className="m-20 bg-base-200 mx-auto rounded-lg">
        <h4 className="text-center font-bold text-lg font-serif text-pink-500 mt-10 p-4">Contact</h4>
        <h3 className="text-4xl text-center p-3 font-serif">Get In Touch</h3>
        <div className="hero">
        
            <div className="hero-content flex-col lg:flex-row justify-around">
            
                <div className="lg:w-1/2 sm:w-full">
                
                    {/* <img src={img} className="rounded-lg shadow-2xl" alt="" /> */}
                    <Lottie options={defaultOptions}/>
                </div>
                <div className="card lg:w-1/2 sm:w-full flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <form  className="card-body" ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" className="input input-bordered" />
                        <label>Email</label>
                        <input type="email" name="user_email" className="input input-bordered"/>
                        <label>Message</label>
                        <textarea name="message" className="input input-bordered"/>
                        <input type="submit" value="Send"
                        className="btn bg-gradient-to-t from-pink-600" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contact;