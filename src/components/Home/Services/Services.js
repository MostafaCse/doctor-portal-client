import React from 'react';
import Fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import Whitening from '../../../images/Whitening.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
const ServicesData=[
    {
        name:'Fluriode Treatment',
        img:Fluoride
    },
    {
        name:'Cavity Filling',
        img:cavity
    },
    {
        name:'Teath Whitening',
        img:Whitening
    }
]
const Services = () => {
 
    return (
       <section className="mt-5">
           <div className="text-center">
           <h5 style={{color:'#1CC7C1',marginBottom:'12px'}}>OUR SERVICES</h5>
           <h2 style={{marginBottom:'80px'}}>Services We Provide</h2>
           </div>
   
 
<div className="d-flex justify-content-center">
<div className="row w-75">
{
    ServicesData.map(serviecs=><ServicesDetails serviecs={serviecs}></ServicesDetails>)
}
    </div>
</div>
       </section>
    );
};

export default Services;