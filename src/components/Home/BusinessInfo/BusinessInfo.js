import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
const infosData=[
    {
        title:'Opening Hours',
        description:'We are open 7 days',
        icon:faClock,
        background:'primary'
    },
    {
        title:'Vist Our Location',
        description:'Brooklyn, NY 10003 USA',
        icon:faMapMarker,
        background:'dark'
    },
    {
        title:'Call Us Now',
        description:'+1567894768',
        icon:faPhone,
        background:'primary'
    }
]
const BusinessInfo = () => {
    return (
       <section className="d-flex justify-content-center">
         <div className="row w-75 text-white">
         {
               infosData.map(info=><InfoCard info={info}></InfoCard>)
           }
         </div>
       </section>
    );
};

export default BusinessInfo;