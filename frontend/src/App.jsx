import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './Layout/User/Master'
import Home from './User/Home'
import About from './User/About'
import Services from './User/Services'
import Projects from './User/Projects'
import Blog from './User/Blog'
import Team from './User/Team'
import Testimonial from './User/Testimonial'
import FAQs from './User/FAQs'
import Contact from './User/Contact'
import AdminMaster from './Layout/Admin/AdminMaster'
import AdminHome from './Admin/AdminHome'
import AdminAbout from './Admin/AdminAbout'
import AdminServices from './Admin/AdminServices'
import AdminProjects from './Admin/AdminProjects'
import AdminBlog from './Admin/AdminBlog'
import AdminTeam from './Admin/AdminTeam'
import AdminTestimonial from './Admin/AdminTestimonial'
import AdminFAQs from './Admin/AdminFAQs'
import DeveloperMaster from './Layout/Developer/DeveloperMaster'
import Register from './Authentication/Register'
import { ToastContainer } from 'react-toastify'
import Login from './Authentication/Login'
import Post from './User/Post'
import DeveloperRegister from './Authentication/DeveloperRegister'
import AddTechnology from './Admin/addtechnology'
import ManageTechnology from './Admin/ManageTechnology'
import ManagePost from './User/ManagePost'
import DeveloperPost from './Developer/DeveloperPost'
import Task from './Developer/Task'
import AddBid from './Developer/AddBId'
import DeveloperDashboard from './Developer/Dashboard'
import TrackBidStatus from './Developer/TrackBidStatus'
import ViewBid from './Admin/ViewBid'
import ManageQuery from './Admin/ManageQuery'
import ManageBid from './User/ManageBid'
import UpdateTechnology from './Admin/UpdateTechnology'
import UpdatePost from './User/Updatepost'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Master />}>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/team' element={<Team />}/>
      <Route path='/testimonial' element={<Testimonial />}/>
      <Route path='/faqs' element={<FAQs />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path='/post' element={<Post />}/>
      <Route path='/managepost' element={<ManagePost />}/>
      <Route path='/developerregister' element={<DeveloperRegister />}/>
      <Route path='/managebid' element={<ManageBid />}/>
      <Route path='/updatepost/:id' element={<UpdatePost/>}/>
      </Route>

      <Route path='/admin' element={<AdminMaster />}>
      <Route path='/admin' element={<AdminHome />}/>
      <Route path='/admin/adminabout' element={<AdminAbout />}/>
      <Route path='/admin/adminServices' element={<AdminServices />}/>
      <Route path='/admin/adminProjects' element={<AdminProjects />}/>
      <Route path='/admin/adminBlog' element={<AdminBlog />}/>
      <Route path='/admin/adminTeam' element={<AdminTeam />}/>
      <Route path='/admin/adminTestimonial' element={<AdminTestimonial />}/>
      <Route path='/admin/adminfaqs' element={<AdminFAQs />}/>
      <Route path='/admin/addtechnology' element={<AddTechnology />}/>
      <Route path='/admin/managetechnology' element={<ManageTechnology />}/>
       <Route path='/admin/updatetechnology/:id' element={<UpdateTechnology />}/>
      <Route path='/admin/viewbid' element= {<ViewBid />}/>
      <Route path='/admin/managequery' element = {<ManageQuery />}/>
      </Route>


      
      <Route path='/developer' element={<DeveloperMaster />}>
      <Route path='/developer' element={<DeveloperDashboard />}/>
      <Route path='/developer/developerpost' element={<DeveloperPost />}/>
      <Route path='/developer/task' element={<Task/>}/>
      <Route path='/developer/addbid/:id' element={<AddBid/>}/>
      <Route path='/developer/trackbidstatus' element={<TrackBidStatus />}/>


      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
