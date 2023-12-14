import React, { useState } from 'react'
import StudentNavBar from './StudentNavBar'
import { useGlobalContext } from '../Context';
import SingleCourse from './SingleCourse';

const StudentCart = () => {

    // const [allCourses, setAllCourses] = useState([]);
    // const { user } = useGlobalContext();
    // let cart = user.cart;
    // setAllCourses(cart);
    // if (allCourses.length== 0) {
    //     return (
    //         <div>
    //             <StudentNavBar />

    //         </div>
    //     )
    // }


    return (

        <div>
            <StudentNavBar />
            <h1 className='m-10 p-10'>Your Cart is empty</h1>
           {/* <SingleCourse allCourses={allCourses}/> */}
        </div>
    )
}

export default StudentCart