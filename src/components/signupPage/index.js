import './index.css'
import {Link} from 'react-router-dom'


const SignupPage =()=>{
    return(
        <div className='main-container'>
            <div className='content-container'>
                 <h1 className='content-heading'>Create Account</h1>
                 <img src='https://res.cloudinary.com/dvzei06gf/image/upload/v1708940384/mwod6wqzru214ngwefre.png' alt='hello' className='image-sizing'/>
                 <input type='text' placeholder='Full Name' className='input-field'/>
                 <input type='text' placeholder='Phone' className='input-field'/>
                 <input type='text' placeholder='Email' className='input-field'/>
                 <input type='password' placeholder='Password' className='input-field'/>
                 <Link to="/home">
                 <button className='button-styling'>Sign Up</button>
                 </Link>
                 
                 <p>*to see the home page click on button</p>
            </div>
        </div>
    )
}
export default SignupPage