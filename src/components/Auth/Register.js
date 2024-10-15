import { useState } from 'react'
import './Register.scss'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { postRegister } from '../../services/apiService'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleRegister = async () => {
        let isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            toast.error('Invalid Email')
            return;
        }
        if (!password) {
            toast.error('Invalid Password')
            return;
        }
        let data = await postRegister(email, password, username)
        console.log('check register data: ', data);
        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate('/login')
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }

    }

    return (
        <>
            <div className="register-container">
                <div className="header">
                    <span>Have Acount yet?</span>
                    <button onClick={() => { navigate('/login') }}>Login</button>
                </div>
                <div className="title col-3 mx-auto">
                    QUIZZ
                </div>
                <div className="welcome col-3 mx-auto">
                    Sign up to join with Us
                </div>
                <div className='content-form col-3 mx-auto'>
                    <div className='form-group'>
                        <label>Email *</label>
                        <input
                            type={'email'}
                            className='form-control'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className='password-group form-group'>
                        <label>Password *</label>
                        <div className='password-group'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className='form-control'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <span className='show-hide'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Username</label>
                        <input
                            type={'text'}
                            className='form-control'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div>
                        <button className='btn-submit'
                            onClick={() => handleRegister()}
                        >Submit</button>
                    </div>
                    <div className=' text-center'>
                        <span className='back' onClick={() => { navigate('/') }}>
                            &#60;&#60; Go to Home Page
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Register