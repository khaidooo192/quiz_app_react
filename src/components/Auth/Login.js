import { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { postLogin } from '../../services/apiService'
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        //validate

        //submit apis
        let data = await postLogin(email, password)
        console.log('check res: ', data);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }

    };

    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have Acount yet?</span>
                <button>Sign up</button>
            </div>
            <div className='title col-3'>

            </div>
            <div className='welcome col-3 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-3 mx-auto'>
                <div className='form-group '>
                    <label>Emai</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group '>
                    <label>Password</label>
                    <input
                        type={'password'}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                </div>
                <span className='forgot-password'>Forgot Password ?</span>
                <div>
                    <button className='btn-submit'
                        onClick={() => handleLogin()}
                    >Login To Quizz</button>
                </div>
                <div className=' text-center'>
                    <span className='back' onClick={() => { navigate('/') }}>
                        &#60;&#60; Go to Home Page
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Login ;