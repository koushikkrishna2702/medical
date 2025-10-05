import React ,{useState}from 'react'
import {assets} from "../assets/assets";
import {NavLink,useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate();

  const [showMenu ,setShowMenu]=useState(false)
  const[token,setToken]=useState(true)

  return (
    <div className='flex items-center justify-between text-sm  py-4 mb-5 border-b border-b-gray-400 '>
        <img onClick={()=>navigate('/')} className='w-25 h-20 cursor-pointer'src={assets.logo} alt="" />
        <ul className='hidden md:flex item-start gap-10 font-medium'>
            <NavLink to ='/'>
                <li className='py-1'>HOME</li>
                <hr className='abc'/>
            </NavLink>
            <NavLink to ='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='abc'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='abc'/>
            </NavLink>
            <NavLink to ='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='abc'/>
            </NavLink>
        </ul>
        <div className='flex item-center gap-4'>
          {
            token ?
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-12 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Log Out</p>
                </div>
              </div>
            </div>
            :<button onClick={()=>navigate('/login')} className='btn'>Create Account</button>
          }
          
        </div>
    </div>
  )
}

export default Navbar