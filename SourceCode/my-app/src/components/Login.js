import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Login = () => {

    const [formErrors, setFormErrors] = useState({});
    let navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
        role:"",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setFormErrors(validate(data));

    }



    const submitForm = (e) => {
        e.preventDefault();


        axios.post('http://localhost/project7API/log.php', data)

            .then((result) => {
                console.log(result.data);
                console.log(result.data[0].role)

                if (result.data.length == 0) {
                    const elem = document.getElementById("errorMassage");
                    elem.innerHTML = "Invalied Email and Password";

                } else if (result.data.length !== 0 && result.data[0].role === 'user') {

                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('id', result.data[0].id);
                    sessionStorage.setItem('role', result.data[0].role);


                    navigate('/Userprofile');


                } else if (result.data.length !== 0 && result.data[0].role === 'admin') {

                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('id', result.data[0].id);
                    sessionStorage.setItem('role', result.data[0].role);


                    navigate('/Admindashboard');


                } else {
                    navigate('/Signup');
                }
            })




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


        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 7) {
            errors.password = "Password must be 8 characters or more";
        } else if (values.password.length > 12) {
            errors.password = "Password must be 12 characters or less";
        }
        return errors;
    };







    return (
        <div >
            <br /><br /><br /><br /><br />
            <section className="gradient-form-log bg-white mt-3" style={{ backgroundColor: '#eee' }}>
                <div className="container   bg-white">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">

                                    <div className="col-lg-5 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">

                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                {/* <img src="./img/logo.png" style={{width: '185px'}} alt="logo"/> */}
                                                <h2>Login</h2>
                                            </div><br />


                                            <form onSubmit={submitForm}  >


                                                <div className="row mb-3">{/* Email  */}

                                                    <label
                                                        className="col-md-4 col-form-label ">Email Address</label>
                                                    <div className="col-md-12">
                                                        <input id="email" type="email"
                                                            className="form-control @error('email') is-invalid @enderror" name="email" required
                                                            onChange={handleChange}
                                                            value={data.email} />
                                                        <p className="errors">{formErrors.email}</p>
                                                    </div>

                                                </div>





                                                <div className="row mb-3">{/* Password  */}
                                                    <label
                                                        className="col-md-4 col-form-label ">Password</label>
                                                    <div className="col-md-12">

                                                        <input id="password" type="password"
                                                            className="form-control @error('password') is-invalid @enderror"
                                                            name="password" required
                                                            onChange={handleChange}
                                                            value={data.password}
                                                        />
                                                        <p className="errors">{formErrors.password}</p>
                                                    </div>

                                                </div>





                                                <div className="row mb-0">
                                                    <div className="col-md-6 offset-md-4">
                                                        <button type="submit" className="btn btn-primary">
                                                            Login
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
        </div>
    )
}
export default Login