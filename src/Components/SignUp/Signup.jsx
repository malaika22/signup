import React from 'react'
import avatar1 from '../../assests/images/avatar1.png'
import avatar2 from '../../assests/images/avatar2.png'
import avatar3 from '../../assests/images/avatar3.png'
import './styles.scss'


const Signup = () =>{

    const handleSubmit = () => {

    }
    return(
        <div className="signup-container">
            <div className="left-signup-section">
                <div className="signup-content-div">
                    <div className="signup-title">Sign up</div>
                    <div className="form-div">
                        <form onSubmit={handleSubmit} className="signup-form">
                            <div className="input-div">
                                <input placeholder="Full name" required type="text" name="name" className="signup-input"/>
                            </div>
                            <div className="input-div">
                                <input placeholder="You are a: Dev, Freelance, Businessman" type="text" name="profession" className="signup-input"/>
                            </div>
                            <div className="input-div">
                                <input placeholder="Phone" name="phone" required className="signup-input"/>
                            </div>
                            <div className="input-div">
                                <input placeholder="Email" type="email" required className="signup-input"/>
                            </div>
                            <div className="submit-div">
                                <input type="submit" value="Join the wait list" className="signup-button"/>
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
                            <img src={avatar1} alt="Edwin" className="avatar-image"/>
                            <img src={avatar2} alt="Gaurav" className="avatar-image"/>
                            <img src={avatar3} alt="John" className="avatar-image"/>
                        </div>
                        <div className="joined-members">1k+  members have joined.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;