import React, { useState, useEffect } from 'react';
import './register.scss';

function Register(props) {
        const [user, setUser] = useState({
          username: '',
          password: '',
          confirmpassword: '',
          fathername: '',
          mothername: '',
          email: '',
          phone: ''
        });
      
        const [formValid, setFormValid] = useState(true);      
      
        useEffect(() => {
          console.log('Register props: ', props)
        }, [])
      
        const handleChange = e => {
          setUser({
            ...user, [e.target.name]: e.target.value,
          });
          e.target.focus()
        };
        
        const handleSubmit = (e) => {
          e.preventDefault();
          if (user.username.length && user.password.length && (user.password === user.confirmpassword)) {
            props.logIn(user, props.history);
            
            setUser({
              username: '',
              password: ''
            });
          } else {
            setFormValid(false)
          }
        };
         
    return (
        <div>
<div className='top'>        
    <div>
           <div className='alignleft'><h1> Register With Speak Out</h1></div>
           <div className='leftperson'><h4>Register In Person</h4></div>
            </div>
            <div>
            <br></br>
            </div>
            <div className='alignleft'>
           <h4> How to Register with Speak Out</h4>
           <div className='persondiv'>
           <div className='leftaddress'>Address</div>
           <div className='leftroad'> Rd No 3949, Bani Jamra, Bahrain</div>
           <div className='leftbahrain'>6F66+65 Bani Jamra, Bahrain</div>
           <div className='leftphone'>Telephone</div>
           <div className='leftphonenum'>+973 3561 7635</div>
           <div className='leftschedule'><button className='buttonred'>Schedule Appointment</button></div>
           </div>
           </div>
            <br></br>
            <div className ='instruct'>
            <div className='alignleft'>
            <h4>1. Enter your information</h4>
            </div>
            <div className='alignleft'>
            <h4>2. Enter student information</h4>
            </div>
            <div className='alignleft'>
            <h4>3. Review & Submit Registration</h4>
            </div>
            <br></br>
            <div className='alignleft'>
            <p></p>
            </div>
            <div className='alignleftgreen'>
            After submitting registration, you will choose
            </div>
            <div className='alignleftgreen'>
            options for the student placement test(s). 
            </div>
            </div>
            </div>
            <br></br>     
<div className='line1'></div>
<button className='button1'>✔</button>
<button className='button2'></button>
<button className='button3'></button>
<div className='buttonlabel1'>Your Information</div>
<div className='buttonlabel2'>Student Information</div>
<div className='buttonlabel3'>Submit Registration</div>
<div className='your'>Your Information</div>

<div className='formdata'>
        <form onSubmit={handleSubmit} method="POST">
          <fieldset>
            <div className='alignleft0'>
          <label htmlFor="username">User</label>
            <input
              style={{ marginBottom: "15px" }}
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={user.username}
            />
            </div>
            <div className='alignleft0'>
            <label htmlFor="fathername">Father Name</label>
            <input
              style={{ marginBottom: "15px" }}
              type="text"
              name="fathername"
              placeholder="Fathername"
              onChange={handleChange}
              value={user.fathername}
            />
            </div>
            <div className='alignleft0'>
            <label htmlFor="mothername">Mother Name</label>
            <input
              style={{ marginBottom: "15px" }}
              type="text"
              name="mothername"
              placeholder="Mothername"
              onChange={handleChange}
              value={user.mothername}
            />
            </div>
            <div>
            <div className='alignleft0'>
            <label htmlFor="email">Email</label>
            <input
              style={{ marginBottom: "15px" }}
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={user.email}
            />
            </div>
            <div className='alignleft0'>
            <label htmlFor="password">Password</label>
            <input
              style={{ marginBottom: "15px" }}
              className="input-class"
              type="password"
              name="password"
              onChange={handleChange}
              value={user.password}
            />
            </div>
            <div className='alignleft0'>
            <label htmlFor="confirmpassword">ConfirmPassword</label>
            <input
              style={{ marginBottom: "15px" }}
              className="input-class"
              type="password"
              name="confirmpassword"
              onChange={handleChange}
              value={user.confirmpassword}
            />
            </div>
            <div className='alignleft0'>
            <label htmlFor="phone">Telephone</label>
            <input
              style={{ marginBottom: "15px" }}
              className="input-class"
              type="text"
              name="phone"
              onChange={handleChange}
              value={user.phone}
            />
            </div>
            </div>
            <button style={{borderColor: '#C73642', color: '#C73642', padding: '#C73642'}} type="submit">Next Student Information</button>
          </fieldset>
        </form>

      </div>

    </div>
    )
}

export default Register;