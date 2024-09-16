import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { Popover,PopoverContent,PopoverTrigger } from '@radix-ui/react-popover';
import { Avatar,AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '../ui/button';
import { User2,LogOut } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import Menu from './Menu';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const navigate = useNavigate()
  const {user} = useSelector(store=>store.auth)
  console.log(user)
  let [menu,setMenu] = React.useState(false);
  let toggle=()=>{
    setMenu(!menu)
  }
  const handleLogin=()=>{
    navigate('/login')
  }
  const handleSignup=()=>{
    navigate('/signup')
  }
  const handleHome=()=>{
    navigate('/')
  }
  const handleBrowse=()=>{
    navigate('/browse')
  }
  const handleInt=()=>{
    navigate('/internships')
  }
  const handlePro=()=>{
    navigate('/profile')
  }
  return (
    <div>
    <div className='flex justify-between w-11/12 mx-auto '>
      <div className='py-2'>
        <p className='text-3xl font-semibold'><span className='text-[#147fe3]'>Interni</span>Fy</p> 
      </div>
      <div className='flex'>
        <ul className='flex py-4 mx-4'>
          <li className='px-4 text-l font-semibold  hover:underline hidden md:block' onClick={handleHome}>Home</li>
          <li className='px-4 text-l font-semibold  hover:underline hidden md:block' onClick={handleInt}>Internships</li>
          <li className='px-4 text-l font-semibold  hover:underline hidden md:block' onClick={handleBrowse}>Browse</li>
        </ul>
        {!user ? 
        <div className='my-3 gap-4 hidden md:block '>
          <Button variant="outline" className='mx-4 bg-[#CDE4E1]' onClick={handleLogin}>LogIn</Button>
          <Button className='bg-[#147fe3]' onClick={handleSignup}>SignUp</Button>
        </div>
      :
      <Popover>
      <PopoverTrigger >
        <Avatar className='cursor-pointer '><AvatarImage src='https://img.icons8.com/?size=55&id=108652&format=png&color=000000' alt='user'/></Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-80 shadow my-2 bg-white">
      <div className="flex ">
        <Avatar className='cursor-pointer'><AvatarImage src='https://img.icons8.com/?size=55&id=108652&format=png&color=000000' alt='user'/></Avatar>
        <div className='py-2'>
        <h2 className='text-l font-medium '>Yuvraj Upadhyay</h2>
        <h2 className='text-muted-foreground'>Lorem ipsum dolor sit</h2>
        </div>
      </div>
      <div className='flex mx-4 gap-2'>
      <User2/>
      <Button variant="link" className='text-l' onClick={handlePro}>View Profile</Button>
      </div>
      <div className='flex mx-4 gap-2'>
      <LogOut/>
      <Button variant="link" className='text-l'>logout</Button>
      <br /><br />
      </div>
    </PopoverContent>
     </Popover>  
        }
         <AlignJustify className='md:hidden m-4' onClick={toggle}/>
      </div>
    </div>
    {menu?<Menu/>:<></>}
    
    </div>
  );
}

export default Navbar;
