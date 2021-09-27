import React from 'react';
import dentalCare from '../../../images/dentalCare.png';

const FeatureService = () => {
    return (
        <section style={{marginTop:'100px'}} className="d-flex justify-content-center">
            <div className="row w-75">
                <div className="col-md-6">
               
                <img style={{height:'95%'}} className="img-fluid" src={dentalCare} alt=""></img>
                </div>
                <div className="col-md-6 mt-5">
                    <h1 className="mb-5">Exceptional Dental <br />Care, on Your Terms</h1>
                    <p className="text-secondary mb-5">Minim incididunt ex ea qui magna excepteur nulla laborum. Do aliquip consequat in aute. Id nisi sint proident commodo dolore laboris officia adipisicing elit officia. Et culpa incididunt proident laboris. Velit laboris consectetur ullamco excepteur anim officia eu ad laboris. Ex labore excepteur mollit esse.proident commodo dolore laboris officia adipisicing elit officia. Et culpa incididunt proident laboris. Velit laboris consectetur ullamco excepteur anim officia eu ad laboris. Ex labore excepteur mollit esse.</p>
                    <button  className="btn btn-info mt-5">Learn More</button>
                </div>
            </div>
        </section>

    );
};

export default FeatureService;