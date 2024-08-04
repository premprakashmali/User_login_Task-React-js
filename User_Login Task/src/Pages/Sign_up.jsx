import React, { useEffect, useState } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { toast } from 'react-toastify';

function Sign_up() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        mobile: "",
        email: "",
        password: "",
        status: "Unblock",
    }, []);

    const onchahandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {

        let ans = true;
        if (formvalue.name == "") {
            toast.error('Enter the name please')
            ans = false;
            return false
        }
        if (formvalue.mobile == "") {
            toast.error('Enter the Mobile please')
            ans = false;
            return false
        }
        if (formvalue.email == "") {
            toast.error('Enter the Email please')
            ans = false;
            return false
        }
        if (formvalue.password == "") {
            toast.error('Enter the Password please')
            ans = false;
            return false
        }
        return ans;


    }

    const submithandel = (e) => {
        e.preventDefault();
        if (validation()) {
            localStorage.setItem('uid', JSON.stringify(formvalue));
            const res = localStorage.getItem('uid');
            console.log(JSON.parse(res))
            setFormvalue({ ...formvalue, id: "", name: "", email: "", mobile: "", password: "" })
            toast.success("Account Created Successfully")
        }
    }



    return (
        <div>
            <Header />
            <div className="container mt-5">
                <form className="mt-5" action='' method='post' onChange={onchahandel} onSubmit={submithandel}>
                    <div className="row mb-3 mx-auto" style={{ width: "100%", maxWidth: "450px", color: 'black' }}>
                        <div className="col-12">
                            <label htmlFor="Name">Name</label>
                            <input name='name' value={formvalue.name} type="text" id="name" className="form-control border border-dark" placeholder="Enter your Name.." />
                        </div>

                        <div className="col-12 py-2">
                            <label htmlFor="mobile">Mobile</label>
                            <input name='mobile' value={formvalue.mobile} type="number" id="mobile" className="form-control border border-dark" placeholder="Enter your Number.." />
                        </div>
                        <div className="col-12">
                            <label htmlFor="email">Email</label>
                            <input name='email' value={formvalue.email} type="email" id="email" className="form-control border border-dark" placeholder="Enter your Email.." />
                        </div>
                        <div className="col-12">
                            <label htmlFor="password">Password</label>
                            <input name='password' value={formvalue.password} type="password" id="password" className="form-control border border-dark" placeholder="Enter your Password.." />
                        </div>

                        <div className='col-12 d-flex py-2'>
                            <input type="checkbox" />
                            <span> I have read and agree the Terms & Conditions</span>
                        </div>
                        <div className='col-12 d-flex justify-content-center mt-4'>
                            <button type="submit" className="btn btn-dark w-100">Sign Up</button>
                        </div>
                        <div className="col-12 text-center mt-5">
                            Already have an account? <NavLink to="/login" style={{ textDecoration: "none", color: 'red' }}>Login</NavLink>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Sign_up