import React, { useState } from "react";
import profile from '../images/profile.jpeg';
import sunset from '../images/blackart.jpeg';
import '../PageStyles.css';

const UserSettings = () => {
    const [personalInfo, setPersonalInfo] = useState({
        username: '',
        email: '',
    });
    const [password, setPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        smsNotifications: false,
    });
    const [errors, setErrors] = useState({});

    const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPassword({ ...password, [name]: value });
    };

    const handleNotificationsChange = (e) => {
        const { name, checked } = e.target;
        setNotifications({ ...notifications, [name]: checked });
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validate email
        if (!validateEmail(personalInfo.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        // Validate password match
        if (password.newPassword !== password.confirmPassword) {
            newErrors.password = 'New password and confirm password do not match.';
        }

        setErrors(newErrors);

        // If no errors, proceed with form submission
        if (Object.keys(newErrors).length === 0) {
            // Handle form submission logic here
            window.location = '/artconnect/profile';
        }
    };

    return (
        <div>
            {/* <Navbar /> */}
            <div>
                <div className="d-flex " style={{ marginTop: '100px' }}>
                    <div className="artistProfile" style={{ backgroundColor: 'lightGrey', border:'2px solid white', borderRadius: '10px'}}>
                        <div className="artistPicture">
                            <img src={profile} alt="Profile" />
                        </div>
                        <div className="mt-3">
                            <p><a href='/artconnect/profile' className='ms-2 mt-5'>Username</a> <hr style={{ color: 'grey' }} /></p>
                            <p><a href='/artconnect/userArts' className="ms-2">My Arts</a> <hr style={{ color: 'grey' }} /></p>
                            <p><a href='/artconnect/userEvents' className="ms-2">My Events</a> <hr style={{ color: 'grey' }} /></p>
                            <p><a href='/artconnect/userUploadArt' className="ms-2">Upload Art</a> <hr style={{ color: 'grey' }} /></p>
                            <p><a href='/artconnect/userSettings' className="ms-2">Settings</a></p>
                        </div>
                    </div>

                    <div className='profile' style={{border:'2px solid white', borderRadius: '10px', height: '80vh', width: '80vw'}}>
                        <div style={{border:'2px solid white', borderRadius: '10px', height: '32vh', width: '100%', marginBottom: '10px', alignContent: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
                            <img src={sunset} alt='Profile background' style={{height: '100%', width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
                        </div>

                        <div className='ms-3' >
                            <h6 style={{color: 'black', fontSize: '2.0rem', fontFamily: "'Lobster', cursive"}}>Upload Art</h6>
                            <hr style={{color: 'black', marginBottom: '5px'}}></hr>
                            <div className='' style={{color: 'black', height: '38vh', overflowY: 'auto', borderLeft: '1px solid lightGrey', borderBottom: '1px solid lightGrey', marginRight: '20px', marginLeft: '2px', padding: '10px'}}>
                                <div className="mb-3">
                                    <h4>Personal Information</h4>
                                    <label className="form-label" htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" value={personalInfo.username} onChange={handlePersonalInfoChange} placeholder="Username" disabled/>
                                    <label className="form-label mt-3" htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={personalInfo.email} onChange={handlePersonalInfoChange}/>
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>

                                <div className="mb-3">
                                    <h4>Change Password</h4>
                                    <label className="form-label" htmlFor="currentPassword">Current Password</label>
                                    <input type="password" className="form-control" id="currentPassword" name="currentPassword" value={password.currentPassword} onChange={handlePasswordChange}/>
                                    <label className="form-label mt-3" htmlFor="newPassword">New Password</label>
                                    <input type="password" className="form-control" id="newPassword" name="newPassword" value={password.newPassword} onChange={handlePasswordChange}/>
                                    <label className="form-label mt-3" htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={password.confirmPassword} onChange={handlePasswordChange}/>
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>

                                <div className="mb-3">
                                    <h4>Notifications</h4>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="emailNotifications" name="emailNotifications" checked={notifications.emailNotifications} onChange={handleNotificationsChange}/>
                                        <label className="form-check-label" htmlFor="emailNotifications">
                                            Email Notifications
                                        </label>
                                    </div>
                                    <div className="form-check mt-2">
                                        <input className="form-check-input" type="checkbox" id="smsNotifications" name="smsNotifications" checked={notifications.smsNotifications} onChange={handleNotificationsChange}/>
                                        <label className="form-check-label" htmlFor="smsNotifications">
                                            SMS Notifications
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary search" style={{marginLeft: '20vw', width: '200px', padding: '2px'}} onClick={handleSubmit}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UserSettings;
