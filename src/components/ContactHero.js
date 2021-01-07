import React from "react";

const ContactHero = () => {
   return (
      <div className="bg-ContactBackground bg-cover mt-20 text-myWhite-100">
         <h1 className="text-center text-6xl pt-12 font-semibold ">Contact</h1>
         <form>
            <ul className="grid mx-12 sm:grid-flow-row sm:mx-20 gap-8 sm:px-12 pb-20 pt-8 text-xl">
               <li className="grid">
                  <label>Full Name</label>
                  <div className="grid gap-10 sm:grid-cols-2">
                     <input type="text" name="firstName" placeholder="First" className="inputStyle" />
                     <input type="text" name="secondName" placeholder="Last" className="inputStyle" />
                  </div>
               </li>
               <li className="grid sm:grid-cols-2 gap-10">
                  <div className="grid">
                     <label>Email</label>
                     <input type="email" name="email" placeholder="E-mail" className="inputStyle" />
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
               <li className="place-self-center bg-transparent group ">
                  <input type="submit" value="Submit" className="submitBtn" />
               </li>
            </ul>
         </form>
      </div>
   );
};

export default ContactHero;
