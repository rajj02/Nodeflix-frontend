import React, { useState } from 'react'
import authService from '../services/AuthService';
import { login} from '../store/AuthSlice';
import{ useDispatch} from 'react-redux';
const Login = () => {
    const[formData, setFormData] = useState({
        email:'',
        password:''
    });
    const[userLogged, setUserLogged]= useState(false);
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
           const userLoggedIn = await authService.loginUser(formData);
           if(userLoggedIn)
           {
            // console.log(userLoggedIn);
            setUserLogged(true);
            dispatch(login(userLoggedIn)) 
           }
          }catch(err){
            throw err;
          }
      }
      const handleChange = (e) => {

             setFormData({ ...formData, [e.target.name]: e.target.value });     
          };
  return (
    <div className="flex items-center justify-center sm:h-auto">
    <div className="flex flex-1 flex-col justify-center
                    px-6 py-12 lg:px-8 bg-gray-400 rounded-xl
                    shadow-lg max-w-md overflow-hidden">
    <div className="sm:mx-auto sm:w-full">
      <h2 className="mt-2 text-center text-2xl 
                    font-bold leading-9 tracking-tight text-gray-900">
        Login to your account
      </h2>
      <div>
      {userLogged && (
                <div className="alert alert-success" role="alert">
                    User logged In successfully!
                </div>)}
      </div>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div >
          <label htmlFor="email" 
                 className="block text-sm
                            font-medium leading-6
                            text-gray-900 flex items-center justify-between">
            Email address
          </label>
          <div className="mt-2">
            <input
              name="email"
              type="email"
              autoComplete="email"
              onChange={handleChange}
              required
              className="block w-full rounded-md
                         border-0 py-1.5 text-gray-900
                         shadow-sm ring-1 ring-inset ring-gray-300
                         placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                         focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 py-1.5
                         text-gray-900 shadow-sm ring-1 ring-inset
                         ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                         focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md
                       bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                       leading-6 text-white shadow-sm hover:bg-indigo-500 
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                       focus-visible:outline-indigo-600"
          >
          Log In
          </button>
        </div>
      </form>
    </div>
  </div>
 </div>
  )
}

export default Login
