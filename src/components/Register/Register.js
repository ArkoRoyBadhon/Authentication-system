import React from 'react';

const Register = () => {

    const handleSignUpForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const password = form.password.value;

        const saveinfo = {
            name,
            phone,
            email,
            password
        }

        console.log(saveinfo);
       
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                {/* <div className="text-center lg:text-left">
                    
                </div> */}
                <div className="w-[25rem] rounded-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUpForm} className="card-body">
                        <h2 className="text-2xl">Please Register</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name='phone' placeholder="Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea type="email" name='address' placeholder="Enter your Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;