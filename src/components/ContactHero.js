import React from "react";

const ContactHero = () => {
   return (
      <div className="bg-ContactBackground bg-cover">
         <h1 className="text-center text-4xl pt-8">Contact</h1>
         <form >
            <ul className="grid sm:grid-flow-row mx-20  gap-8 text-myWhite-100 px-12 py-20 text-xl">
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
                     <label>Contacts</label>
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
