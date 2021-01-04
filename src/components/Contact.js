import React from "react";

const Contact = () => {
   return (
      <form>
         <ul className="grid sm:grid-flow-row mx-12 mt-12 gap-8 place-content-center">
            <li className="grid">
               <label>Full Name</label>
               <div className="grid gap-10 sm:grid-cols-2">
                  <input type="text" name="firstName" placeholder="First" className="p-2" />
                  <input type="text" name="secondName" placeholder="Last"  className="p-2" />
               </div>
            </li>
            <li className="grid sm:grid-cols-2 gap-10">
               <div className="grid">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="E-mail"  className="p-2"/>
               </div>
               <div className="grid">
                  <label>Contacts</label>
                  <input type="tel" name="number" placeholder="Number"  className="p-2"/>
               </div>
            </li>
            <li className="grid">
               <label>Your Message</label>
               <textarea name="message" id="message"></textarea>
            </li>
            <li className="place-content-center">
               <input type="submit" value="Submit" />
            </li>
         </ul>
      </form>
   );
};

export default Contact;
