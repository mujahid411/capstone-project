import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
  
    const [studentLoginData, setStudentLoginData] = useState({
      name: '',
      email: ''
    });
    let handleChange = (e) => {
      setStudentLoginData({ ...studentLoginData, [e.target.name]: e.target.value })
    }
  
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let response = await axios.post(`/api/student/studentLogin`, {
          ...studentLoginData
        });
     console.log(response.data)
     navigate('/studentNavbar')
    
      } catch (error) {
        console.log('this is a error')
        console.error(error)
        setShowAlert(!showAlert)
        setTimeout(function () {
          setShowAlert(false)
        }, 4000)
      }
    };



    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" id='flex-container' >
                <div id='animation-contanier' style={{ marginBottom: '0' }}>
                    <div>
                        <a className="flex items-center ps-2.5 mb-3">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" style={{ fontSize: '1.8rem', marginRight: '15px' }}>E-learning</span>
                        </a>
                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" style={{ fontSize: '1.8rem' }}>
                    <form className="space-y-6"  onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900" style={{ textAlign: 'initial', fontSize: '1.0rem' }}>
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    value={studentLoginData.email}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" style={{ fontSize: '1.0rem' }}>
                                    Password
                                </label>
                                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    value={studentLoginData.password}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                style={{ fontSize: '1.0rem' }}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
        //     <div>
        //         <div className="hero min-h-screen bg-base-200">
        //   <div className="hero-content flex-col lg:flex-row-reverse">
        //     <div className="text-center lg:text-left">
        //       <h1 className="text-5xl font-bold">Login now!</h1>
        //       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //     </div>
        //     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //       <form className="card-body">
        //         <div className="form-control">
        //           <label className="label">
        //             <span className="label-text">Email</span>
        //           </label>
        //           <input type="email" placeholder="email" className="input input-bordered" required />
        //         </div>
        //         <div className="form-control">
        //           <label className="label">
        //             <span className="label-text">Password</span>
        //           </label>
        //           <input type="password" placeholder="password" className="input input-bordered" required />
        //           <label className="label">
        //             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        //           </label>
        //         </div>
        //         <div className="form-control mt-6">
        //           <button className="btn btn-primary">Login</button>
        //         </div>
        //       </form>
        //     </div>
        //   </div>
        // </div>
        //     </div>
    )
}

export default StudentLogin