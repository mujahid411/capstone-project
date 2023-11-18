import './App.css'
import LandingPage from './components/LandingPage';
import Ask from './components/Ask';
import Upload from './components/Upload'
import { Routes,Route } from 'react-router-dom';
import TeacherRegister from './components/TeacherRegister';
import StudentRegister from './components/StudentRegister';
import { BouncyCardsFeatures } from './components/AboutUs';
import NavbarMain from './components/NavbarMain';
import SideBar from './components/SideBar';
import Test from './components/Test';
import TeacherNavBar from './components/TeacherNavBar';
import StudentNavBar from './components/StudentNavBar';
import Login from './components/Login';
import StudentLogin from './components/StudentLogin';
import TeacherProfile from './components/TeacherProfile';
import CreateCourse from './components/CreateCourse';
import TeacherMain from './components/TeacherMain';
import StudentMain from './components/StudentMain';
import DisplayCourse from './components/DisplayCourse';
import CourseForm from './components/CourseForm';
import SingleCourse from './components/SingleCourse';
import NewTest from './components/NewTest';
import('preline')
function App() {
  return (
  
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/ask' element={<Ask/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/studentLogin' element={<StudentLogin/>}/>
      <Route path='/teacherRegister' element={<TeacherRegister/>}/>
      <Route path='/studentRegister' element={<StudentRegister/>}/>
      <Route path='/about' element={<BouncyCardsFeatures/>}/>
      <Route path='/navbar' element={<NavbarMain/>}/>
      <Route path='/sidebar' element={<SideBar/>}/>
      <Route path='/teacherNavbar' element={<TeacherNavBar/>}/>
      <Route path='/studentNavbar' element={<StudentNavBar/>}/>
      <Route path='/teacherProfile' element={<TeacherProfile/>}/>
      <Route path='/createCourse' element={<CreateCourse/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path='/teacherMain' element={<TeacherMain/>}/>
      <Route path='/studentMain' element={<StudentMain/>}/>
      <Route path='/displayCourse' element={<DisplayCourse/>}/>
      <Route path='/courseForm' element={<CourseForm/>}/>
      <Route path='/singleCourse' element={<SingleCourse/>}/>
      <Route path='/new' element={<NewTest/>}/>
      <Route path='/createCourse/:courseId' element={<CourseForm/>}/>
    </Routes>

  )
}

export default App
