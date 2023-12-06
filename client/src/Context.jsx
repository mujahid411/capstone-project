import { createContext,useState,useEffect, useContext } from "react";
import axios from "axios";




const GlobalContext = createContext();
export const useGlobalContext = ()=> useContext(GlobalContext);
const AppContext = ({children})=>{
    const [user,setUser] = useState({});
    // const [user,setUser] = useState('peter');
    const [userId,setUserId] = useState('');
   


    useEffect( ()=>{
      async function authTeacher(){
        try {
          let token = localStorage.getItem('token')

          let response = await axios.get('/api/auth/verify',{
              headers:{
                  token:token
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
         authTeacher();
    },[user])

    return (
        <GlobalContext.Provider  value={{user,setUser}}>
        {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;