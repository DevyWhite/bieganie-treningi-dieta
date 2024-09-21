import React, { Component } from "react";
import "../styles/ContactPage.css";

class ContactPage extends Component {
   state = {
      value: "",
   };

   handleChange = (e) => {
      this.setState({
         value: e.target.value,
      });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
         value: "",
      });
   };

   render() {
      const btnDisabled = !this.state.value;

      return (
         <div className='contact'>
            <form onSubmit={this.handleSubmit}>
               <h3>Napisz do nas</h3>
               <textarea
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder='Wpisz swoją wiadomość tutaj...'
               ></textarea>
               <button
                  className='btnContact'
                  disabled={btnDisabled}
                  type='submit'
               >
                  Wyślij
               </button>
            </form>
         </div>
      );
   }
}

export default ContactPage;
