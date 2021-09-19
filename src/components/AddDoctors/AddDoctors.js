import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctors = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newinfo = { ...info };
        newinfo[e.target.name] = e.target.value;
        setInfo(newinfo);
    }

    const handleFileChange = e => {
        const newFile=e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit=()=>{
        const formData=new FormData();
        formData.append('file',file);
        formData.append('name',info.name);
        formData.append('email',info.email);

        fetch('https://quiet-lake-59398.herokuapp.com/addDoctors',{
            method:'POST',
            body:formData,
        })
        .then(response => response.json())
        .then(result => {
        alert(`${result}`);
        })
        .catch(error => {
          console.error(error)
        })
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Upload an Image</label>
                        <input onChange={handleFileChange} type="File" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctors;