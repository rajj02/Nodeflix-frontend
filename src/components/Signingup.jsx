import React,{useState} from 'react'
import authService from '../services/AuthService';

const Signingup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        username:'',
        email:'',
        password: '',
        avatar:null,
        coverImage: null
    });
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [alreadyRegistered, setAlreadyRegistered] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
         const userRegistered  = await authService.registerUser(formData);
         if(userRegistered.status ===201)
         {
          console.log(userRegistered)
          setRegistrationSuccess(true); 
         }

         else if(userRegistered.status === 409){
          setAlreadyRegistered(true);
         }
        }catch(err){
          throw err;
        }
    }
    const handleChange = (e) => {
        if (e.target.name === 'avatar' || e.target.name === 'coverImage')
        {
           setFormData({ ...formData,  [e.target.name]: e.target.files[0] });
        }
        else
        {
           setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };
  return (
  <div className="flex items-center justify-center sm:h-auto">
    <div
         className="flex flex-1 flex-col
                    justify-center px-6 py-12
                     lg:px-8 bg-gray-400 rounded-xl
                      shadow-lg max-w-md overflow-hidden">
    <div 
        className="sm:mx-auto sm:w-full">
      <h2
          className="mt-2 text-center text-2xl
                     font-bold leading-9 
                     tracking-tight text-gray-900">
        Create your account
      </h2>
      <div>
      {registrationSuccess && (
                <div className="alert alert-success" role="alert">
                    Account registered successfully!
                </div>)}

      {alreadyRegistered && (
                <div className="alert alert-success" role="alert">
                    Account registered already!
                </div>)}
      </div>
    </div>
       
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div >
          <label htmlFor="email" 
                 className="block text-sm
                            font-medium leading-6
                             text-gray-900 flex 
                             items-center justify-between">
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
                          shadow-sm ring-1 ring-inset 
                          ring-gray-300 placeholder:text-gray-400
                           focus:ring-2 focus:ring-inset 
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
              className="block w-full rounded-md
                         border-0 py-1.5 text-gray-900
                         shadow-sm ring-1 ring-inset ring-gray-300
                         placeholder:text-gray-400 focus:ring-2 
                         focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div >
          <label htmlFor="email" 
                 className="block text-sm font-medium
                            leading-6 text-gray-900 flex
                            items-center justify-between">
            User Name
          </label>
          <div className="mt-2">
            <input
              name="username"
              type="text"
              autoComplete="username"
              onChange={handleChange}
              required
              className="block w-full rounded-md
                         border-0 py-1.5 text-gray-900
                         shadow-sm ring-1 ring-inset ring-gray-300
                         placeholder:text-gray-400 focus:ring-2
                         focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div >
          <label htmlFor="email" 
                 className="block text-sm
                            font-medium leading-6
                            text-gray-900 flex items-center
                            justify-between">
           full Name
          </label>
          <div className="mt-2">
            <input
              name="fullName"
              type="text"
              autoComplete="fullName"
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
        
        <div >
          <label htmlFor="email" className="block text-sm font-medium
                                            leading-6 text-gray-900 flex
                                            items-center justify-between">
          Avatar
          </label>
          <div className="mt-2">
            <input
              name="avatar"
              type="file"
              onChange={handleChange}
              required
              className="block w-full rounded-md 
                         border-0 py-1.5 text-gray-900 
                         shadow-sm ring-1 ring-inset ring-gray-300
                         placeholder:text-gray-400 focus:ring-2 
                         focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        
        <div >
          <label htmlFor="email" className="block text-sm font-medium 
                                            leading-6 text-gray-900 flex
                                            items-center justify-between">
         Cover Image
          </label>
          <div className="mt-2">
            <input
              name="coverImage"
              type="file"
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
          <button
            type="submit"
            className="flex w-full justify-center
                       rounded-md bg-indigo-600 px-3
                       py-1.5 text-sm font-semibold leading-6 text-white
                       shadow-sm hover:bg-indigo-500 focus-visible:outline
                       focus-visible:outline-2 focus-visible:outline-offset-2
                       focus-visible:outline-indigo-600"
          >
           Create Account
          </button>
        </div>
      </form>
    </div>
  </div>
 </div>
  )
}

export default Signingup
