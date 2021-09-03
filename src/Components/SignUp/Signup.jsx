import React, { useState } from 'react'
import avatar1 from '../../assests/images/avatar1.png'
import avatar2 from '../../assests/images/avatar2.png'
import avatar3 from '../../assests/images/avatar3.png'
import './styles.scss'


const Signup = () =>{
    const [values, setValues] = useState({
        fullName : {
            value : '', 
            error : ''
        } , 
        profession : {
            value : '' ,
            error : ''
        } ,
        phone : {
            value : '' ,
            error : ''
        } , 
        email : {
            value : '' ,
            error : ''
        }
    })

    // Validations
    const validEmailRegex = 
        RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    const fullNameRegex = RegExp(/^[A-Za-z ]+$/)
    const phoneNumberRegex = RegExp(/^[0-9]+$/);

    //Clear input fields
    const clearFields = () =>{
        setValues({
        fullName : {
            value : '', 
            error : ''
        } , 
        profession : {
            value : '' ,
            error : ''
        } ,
        phone : {
            value : '' ,
            error : ''
        } , 
        email : {
            value : '' ,
            error : ''
        }
        })
    }

    //Handle input change
    const handleChange = (e) =>{
        const {name, value} = e.target;
        let error = "";

        switch(name) {
            case 'fullName' : 
                error = (!value ? "Full name can't be empty" : "" ) || (fullNameRegex.test(value) ? '' : 'Full name should only contain alphabets')
                break; 
            case 'profession' : 
                error = !value && "Profession can't be empty";
                break;
            case 'phone' :
                error = (!value && "Phone number can't be empty" ) || (phoneNumberRegex.test(value) ? '' : 'Phone number should only contain numbers')
                break;
            case 'email' : 
                error = (!value && "Email can't be empty" ) || (validEmailRegex.test(value) ? '' : 'Email is not valid')
                break;
            default: 
            break;
        }
       
        setValues({
            ...values,
            [name] : {
                value,
                error
            } 
        })
    }
    

    //Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        for(let key in values) {
            if(values[key].error || !values[key].value){
                alert("Not all values are filled")
                return
            } else{ 
                alert("Form submitted succesfully")
                clearFields()
                return
            }
        }
    }
    return(
        <div className="signup-container">
            <div className="left-signup-section">
                <div className="signup-content-div">
                    <div className="signup-title">Sign up</div>
                    <div className="form-div">
                        <form onSubmit={handleSubmit} className="signup-form" autoComplete="nope">
                            <div className="input-div">
                                <input placeholder="Full name" required type="text" value={values.fullName.value} name="fullName" className="signup-input" onChange={handleChange} autoComplete="fallse"/>
                                {values.fullName.error ? <span className="error-span">{values.fullName.error}</span> : <></>}
                            </div>
                            <div className="input-div">
                                <input placeholder="You are a: Dev, Freelance, Businessman" type="text" name="profession" className="signup-input" value={values.profession.value} onChange={handleChange} autoComplete="nope"/>
                                {values.profession.error ? <span className="error-span">{values.profession.error}</span> : <></>}
                            </div>
                            <div className="input-div">
                                <input placeholder="Phone" name="phone" required className="signup-input" value={values.phone.value} onChange={handleChange} autoComplete="nope"/>
                                {values.phone.error ? <span className="error-span">{values.phone.error}</span> : <></>}
                            </div>
                            <div className="input-div">
                                <input placeholder="Email" type="email" name="email" required className="signup-input" value={values.email.value} onChange={handleChange} autoComplete="nope"/>
                                {values.email.error ? <span className="error-span">{values.email.error}</span> : <></>}
                            </div>
                            <div className="submit-div">
                                <input type="submit" value="Join the wait list" className="signup-button" onClick={handleSubmit}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="right-signup-section">
                <div className="right-content">
                    <div className="welcome-title">Welcome to our community</div>
                    <div className="intro-div">Integrating innovation, community and providing our members with the best user experience. 
                    Sign up to get access to our key features.</div>
                    <div className="members-div">
                        <div className="avatar-div">
                            <img src={avatar1} alt="Edwin" className="avatar-image" />
                            <img src={avatar2} alt="Gaurav" className="avatar-image" style={{right : "-48px"}}/>
                            <img src={avatar3} alt="John" className="avatar-image" style={{right: "-64px"}}/>
                        </div>
                        <div className="joined-members">1k+  members have joined.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;