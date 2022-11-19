import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formErrors, setFormErrors] = useState({});
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        conpassword: "",
        department: '',
        role:'',

    })

    let navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setFormErrors(validate(data));
    }

    const submitForm = (e) => {


        e.preventDefault();
        setFormErrors(validate(data));
        if (Object.values(formErrors).length === 0) {
            axios.post('http://localhost/project7API/reg.php', data)
                .then((result) => {

                    if (result.data.Status == 'Invalid') {
                        alert('Invalid Data')
                    } else {
                        navigate('/Login');
                    }
                })
        }
    }

    const validate = (values) => {
        const errors = {};
        const regex =
            /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter a valid email";
        }

        const pregex = /^[0-9]*$/;

        if (!values.phone) {
            errors.phone = "Phone is required";
        } else if (!pregex.test(values.phone)) {
            errors.phone = "Please enter a valid phone number";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 7) {
            errors.password = "Password must be 8 characters or more";
        } else if (values.password.length > 12) {
            errors.password = "Password must be 12 characters or less";
        }

        if (!values.conpassword) {
            errors.conpassword = "Password confirmation is required";
        } else if (values.conpassword !== values.password) {
            errors.conpassword = "Passwords don't match ";
        }

        if (!values.department) {
            errors.department = "Password confirmation is required";
        }

        return errors;
    };

    return (
        <>
            <br /><br /><br /><br />

            <section className="gradient-form bg-white mt-3" style={{ backgroundColor: '#eee' }}>
                <div className="container   bg-white">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">

                                    <div className="col-lg-5 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">

                                        </div>
                                    </div>

                                    <div className="col-lg-6 ">
                                        <div className="card-body p-md-5 mx-md-4 ">

                                            <div className="text-center">
                                                {/* <img src="./img/logo.png" style={{width: '185px'}} alt="logo"/> */}
                                                <h2>Sign up</h2>
                                            </div><br />

                                            <form onSubmit={submitForm}  >


                                                <div className="row mb-1">{/* Name  */}
                                                    <label
                                                        className="col-md-4 col-form-label text-md-end">Name</label>
                                                    <div className="col-md-8">
                                                        <input id="name" type="text"
                                                            className="form-control @error('name') is-invalid @enderror" name="name"

                                                            onChange={handleChange}
                                                            value={data.name}


                                                            autofocus />
                                                        <p className="errors">{formErrors.name}</p>
                                                    </div>

                                                </div>



                                                <div className="row mb-1">{/* Department  */}
                                                    <label
                                                        className="col-md-4 col-form-label text-md-end">Department</label>
                                                    <div className="col-md-8">

                                                        <select name="department" className="form-control @error('name') is-invalid @enderror"
                                                            required onChange={handleChange} >
                                                            <option selected>Select a department</option>
                                                            <option value='Human Resources'>Human Resources</option>
                                                            <option value={'IT'}>IT</option>
                                                            <option value={'Legal'}>Legal</option>
                                                            <option value='Accounting'>Accounting</option>
                                                        </select>
                                                        <p className="errors">{formErrors.department}</p>
                                                    </div>

                                                </div>

                                                <div className="row mb-1">{/* Phone  */}
                                                    <label
                                                        className="col-md-4 col-form-label text-md-end">Phone</label>
                                                    <div className="col-md-8">
                                                        <input id="phone" type="text"
                                                            className="form-control @error('phone') is-invalid @enderror" name="phone"


                                                            onChange={handleChange}
                                                            value={data.phone}

                                                            autofocus />
                                                        <p className="errors">{formErrors.phone}</p>
                                                    </div>

                                                </div>
                                                <div className="row mb-1" hidden>{/* role  */}
                                                    <label
                                                        className="col-md-4 col-form-label text-md-end">role</label>
                                                    <div className="col-md-8">
                                                        <input id="role" type="text"
                                                            className="form-control @error('phone') is-invalid @enderror" name="role"
                                                            value={data.role}/>
                                                    </div>

                                                </div>

                                                <div className="row mb-1">{/* Email  */}
                                                    <label
                                                        className="col-md-4 col-form-label text-md-end">Email Address</label>
                                                    <div className="col-md-8">
                                                        <input id="email" type="email"
                                                            className="form-control @error('email') is-invalid @enderror" name="email"

                                                            onChange={handleChange}
                                                            value={data.email}
                                                        />
                                                        <p className="errors">{formErrors.email}</p>
                                                    </div>

                                                </div>




                                                <div className="row mb-1">{/* Password  */}
                                                    <label
                                                        className="col-md-4 col-form-label text-md-end">Password</label>
                                                    <div className="col-md-8">
                                                        <input id="password" type="password"
                                                            className="form-control @error('password') is-invalid @enderror"
                                                            name="password"
                                                            onChange={handleChange}
                                                            value={data.password}
                                                        />
                                                        <p className="errors">{formErrors.password}</p>
                                                    </div>

                                                </div>


                                                {/* Confirm Password  */}
                                                <div className="row mb-1">
                                                    <label
                                                        className="col-md-4 col-form-label text-md-end">Confirm Password</label>
                                                    <div className="col-md-8">
                                                        <input id="password-confirm" type="password" className="form-control"
                                                            name="conpassword" required
                                                            onChange={handleChange}
                                                            value={data.conpassword}
                                                        />
                                                        <p className="errors">{formErrors.conpassword}</p>
                                                    </div>
                                                </div>




                                                <div className="row mb-0">
                                                    <div className="col-md-6 offset-md-4">
                                                        <button type="submit" className="btn btn-primary">
                                                            Register
                                                        </button>
                                                    </div>
                                                </div>




                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Signup