import React, { useState } from 'react'
import {NavLink, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { toast } from 'react-toastify'

function Login_page() {


    const redirect = useNavigate()


    const [logindata, setdata] = useState({
        email: "",
        password: ""
    })

    const chnagehandel = (e) => {
        setdata({ ...logindata, [e.target.name]: e.target.value })
        console.log(logindata)
    }

    function validation() {
        let ans = true;
        if (logindata.email == "") {
            toast.error("please Enter the email")
            ans = false;
            return false;
        }
        if (logindata.password == "") {
            toast.error("please Enter the Password")
            ans = false;
            return false;
        }
        return ans
    }

    const submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res_arr = localStorage.getItem('uid');

            if (res_arr) {
                const res_obj = JSON.parse(res_arr);
                const result = (res_obj.email);
                if (result === logindata.email) {
                    if (res_obj.password === logindata.password) {
                        if (res_obj.status == "Unblock") {
    
                            localStorage.setItem('wid', res_obj.id)
                            localStorage.setItem('uname', res_obj.name)
    
                            toast.success('Welcome to our Page')
                            return redirect('/')
                        }
                        else {
                            toast.error('Account Blocked conatct shop')
                            setdata({ ...logindata, email: "", password: "" });
                            return false;
                        }
    
                    }
                    else {
                        toast.error('password does not match')
                        setdata({ ...logindata, email: "", password: "" })
                        return false;
                    }
                }
    
                else {
                    toast.error('email does not exit')
                    setdata({ ...logindata, email: "", password: "" })
                    return false;
                }
            }
         else{
            toast.error("Don't have any Account / Go to Signup page")
         }


        }

    }




    return (
        <div>
            <Header />
            <div className="container mt-5">
                <form className="mt-5" action='' method='post' onChange={chnagehandel} onSubmit={submithandel}>
                    <div className="row mb-3 mx-auto" style={{ width: "100%", maxWidth: "450px", color: 'black' }}>
                        <div className="col-12">
                            <label htmlFor="email">Email</label>
                            <input name='email' value={logindata.email} type="email" id="email" className="form-control border border-dark" placeholder="Enter your Email.." />
                        </div>
                        <div className="col-12">
                            <label htmlFor="password">Password</label>
                            <input name='password' value={logindata.password} type="password" id="password" className="form-control border border-dark" placeholder="Enter your Password.." />
                        </div>

                        <div className='col-12 d-flex py-2'>
                            <input type="checkbox" />
                            <span> I have read and agree the Terms & Conditions</span>
                        </div>
                        <div className='col-12 d-flex justify-content-center mt-4'>
                            <button type="submit" className="btn btn-dark w-100">Login</button>
                        </div>
                        <div className="col-12 text-center mt-5">
                            Already have an account? <NavLink to="/signup" style={{ textDecoration: "none", color: 'red' }}>Signup</NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login_page