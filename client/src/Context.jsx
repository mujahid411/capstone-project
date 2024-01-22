import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";




const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const AppContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [userId, setUserId] = useState('');
    const [userAuth,setUserAuth] = useState(false)
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()
    let token = localStorage.getItem('token');


     function checkUser(){
        let token = localStorage.getItem('token');
        if(!token){
            navigate('/login')
        }
         
     }



    useEffect(() => {
        async function authUser() {
            try {
                let token = localStorage.getItem('token')

                let response = await axios.get('/api/auth/verify', {
                    headers: {
                        token: token
                    }
                })
                //  let email = response.data.email;

                let details = response.data.userDetails;
                setUser(details)
                // console.log(details)
                let userId = details._id;
                // console.log(userId)
                setUserId(userId);
                // console.log(userId)
            } catch (error) {
                console.error(error)
            }
        }
        authUser();
    }, [user])

    return (
        <GlobalContext.Provider value={{ user, setUser, userId,userAuth,login,setLogin,setUserAuth,checkUser,navigate }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;