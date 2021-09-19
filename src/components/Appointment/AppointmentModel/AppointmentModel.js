import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
};
Modal.setAppElement('#root');

const AppointmentModel = ({ modalIsOpen, closeModal, booking, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        data.subject=booking.name;
        data.date=date.toDateString();
        data.createDate=new Date().toDateString();
      
        fetch('https://quiet-lake-59398.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        )
            .then(response => response.json())
            .then(sucess => {
                if (sucess) {
                    console.log('Success:', sucess);
                    alert('thank you for submission');
                    closeModal()
                }
            })
    }


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <center>
                    <h1 className="text-brand">{booking.name}</h1>
                    <small style={{ color: 'grey' }}>{date.toDateString()}</small> <br />
                    <small style={{ color: 'grey' }}>{booking.time}</small>
                </center>
                <form style={{ marginTop: '10%', marginBottom: '5%' }} onSubmit={handleSubmit(onSubmit)}>
                    <div class="input-group mb-3">
                        <input placeholder="Name" className="form-control" {...register("Name", { required: true })} /><br />
                        {errors.Name && <span>Name is required</span>}
                    </div>
                    <div class="input-group mb-3">
                        <input className="form-control" placeholder="Phone Number" {...register("PhoneNumber", { required: true })} />
                        {errors.PhoneNumber && <span>Phone number is required</span>}
                    </div>
                    <div class="input-group mb-3">
                        <input placeholder="Email" className="form-control" {...register("Email", { required: true })} />
                        {errors.Email && <span>Email is required</span>}
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="input-group mb-3">
                                <select className="form-select" aria-label="Default select example" {...register("gender", { required: true })}>
                                    <option value>Gendar</option>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                                {errors.gender && <span>gender is required</span>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="input-group mb-3">
                                <input placeholder="Age" className="form-control" {...register("Age", { required: true })} />
                                {errors.Age && <span>Age is required</span>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="input-group mb-3">
                                <input placeholder="weight" className="form-control" {...register("weight", { required: true })} />
                                {errors.weight && <span>weight is required</span>}
                            </div>
                        </div>
                    </div>
                    <input className="btn-brand" type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentModel;