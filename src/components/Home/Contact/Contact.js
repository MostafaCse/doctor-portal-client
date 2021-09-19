import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";



const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
           <section className="contact-container">
         <center>
         <h5 style={{fontWeight:'bold',color:'#1CC7C1'}}>CONTACT US</h5>
           <h1 style={{color:'white',marginBottom:'4%'}}>Always Connect With us</h1>
<div>
<form onSubmit={handleSubmit(onSubmit)}>
      <input className="inputHighlight" required placeholder="Email Address*" {...register("email")} /> <br/>
      <input className="inputHighlight" required placeholder="Subject*" {...register("subject")} /> <br/>
      <input style={{height:'130px'}} className="inputHighlight" required placeholder="Your Message*" {...register("message")} /> <br/>
      <input id="btn-highlight" type="submit"/>
    </form>
</div>
         </center>
           </section>
    
    );
};

export default Contact;