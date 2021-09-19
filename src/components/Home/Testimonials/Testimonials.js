import React from 'react';
import cavity from '../../../images/cavity.png'
import ellipse1 from '../../../images/Ellipse 1.png';
import ellipse2 from '../../../images/Ellipse 2.png';
import ellipse3 from '../../../images/Ellipse 3.png';
import TestimonialsBlog from '../TestimonialsBlog/TestimonialsBlog';

const testData = [
    {
        name: 'Winson Harry',
        location: 'California',
        description: 'Do qui proident elit velit tempor fugiat do culpa Lorem anim. Duis aliquip ea aute in proident voluptate minim. Consectetur minim aute laborum in amet cillum et occaecat sit aliquip velit in.Ad duis dolore sit sunt reprehenderit qui cillum.Ut commodo aute officia sunt ad amet exercitation voluptate dolor ea eu.',
        img: ellipse1
    },
    {
        name: 'Winson Harry',
        location: 'California',
        description: 'Do qui proident elit velit tempor fugiat do culpa Lorem anim. Duis aliquip ea aute in proident voluptate minim. Consectetur minim aute laborum in amet cillum et occaecat sit aliquip velit in.Ad duis dolore sit sunt reprehenderit qui cillum.Ut commodo aute officia sunt ad amet exercitation voluptate dolor ea eu',
        img: ellipse2
    },
    {
        name: 'Winson Harry',
        location: 'California',
        description: 'Do qui proident elit velit tempor fugiat do culpa Lorem anim. Duis aliquip ea aute in proident voluptate minim. Consectetur minim aute laborum in amet cillum et occaecat sit aliquip velit in.Ad duis dolore sit sunt reprehenderit qui cillum.Ut commodo aute officia sunt ad amet exercitation voluptate dolor ea eu',
        img: ellipse3
    }
]

const Testimonials = () => {
    return (
        <div>
            <section style={{ marginTop: '8%' }} className="row">
                <div className="col-md-6 mb-5">
                    <div className="offset-1">
                        <h6>TESTIMONIAL</h6>
                        <h1>What's Our Patients <br /> Says </h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{ opacity: '0.5' }} className="offset-9" src={cavity}></img>
                </div>
            </section>
            <div style={{marginTop:'8%'}} className="d-flex justify-content-center">
                <section className="row">

                    {
                        testData.map(info => <TestimonialsBlog info={info}></TestimonialsBlog>)
                    }
                </section>
            </div>
        </div>
    );
};

export default Testimonials;