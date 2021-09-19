import React from 'react';
import doctor from '../../../images/doctor.png';
import DoctorsContact from '../DoctorsContact/DoctorsContact';

const doctorsContact=[
    {
        img:doctor,
        name:'Dr. Curdi',
        phone:'01814262788'
    },
    {
        img:doctor,
        name:'Dr. jhon',
        phone:'01814262211'
    },
    {
        img:doctor,
        name:'Dr. stack',
        phone:'01824762788'
    }
]
const Doctors = () => {
    return (
    <section style={{marginTop:'8%'}}>
         <center><h4 style={{color:'#1CC7C1',fontWeight:'bold'}}>Our Doctors</h4></center>
<center>
<div style={{marginTop:'6%'}} className="row w-75">
{
doctorsContact.map(info=><DoctorsContact info={info}></DoctorsContact>)
}
</div>
</center>
    </section>
    );
};

export default Doctors;