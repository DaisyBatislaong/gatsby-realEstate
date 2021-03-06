import React from "react";
import emailjs, {init} from 'emailjs-com';
init("user_Kf1UiIYzyL2Bkk2bgaqtz");


const Contact = () => {
 
   function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'contact_form', e.target, 'user_Kf1UiIYzyL2Bkk2bgaqtz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
   return (
      <div className="bg-black my-20 mx-8">
         <h1 className="text-center text-6xl pt-12 font-semibold text-myWhite-100">Contact</h1>
         <form onSubmit={sendEmail}>
            <ul className="grid sm:grid-flow-row sm:mx-20 gap-x-8 gap-y-6 text-myWhite-100 px-12 pb-20 pt-8 text-xl -mx-5">
               <li className="grid">
                  <label>Full Name</label>
                  <div className="grid gap-10 sm:grid-cols-2">
                     <input type="text" name="firstName" placeholder="First" className="inputStyle"/>
                     <input type="text" name="secondName" placeholder="Last" className="inputStyle" />
                  </div>
               </li>
               <li className="grid sm:grid-cols-2 gap-10">
                  <div className="grid">
                     <label>Email</label>
                     <input type="email" name="email" placeholder="E-mail" className="inputStyle"  />
                  </div>
                  <div className="grid">
                     <label>Contact Number</label>
                     <input type="tel" name="number" placeholder="Number" className="inputStyle" />
                  </div>
               </li>
               <li className="grid">
                  <label>Your Message</label>
                  <textarea name="message" id="message" className="inputStyle"></textarea>
               </li>
               <button className="place-self-center bg-transparent group ">
                  <input type="submit" value="Submit" className="submitbtn" />
               </button>
            </ul>
         </form>
      </div>
   );
};

export default Contact;
