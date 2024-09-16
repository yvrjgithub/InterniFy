import React from 'react';
import Navbar from './shared/Navbar';
import { Avatar,AvatarImage} from '@radix-ui/react-avatar';
import { Edit,Contact,Mail,Phone,Link2, Link2Icon } from 'lucide-react';
import { Button } from './ui/button';

const Profile = () => {
    const skills = ['HTML','CSS','JavaScript','ReactJS']
    const resume = "https://drive.google.com/file/d/1i3ECo5PvA1OnjpSyFPnJ86lQxfqtFVkR/view?usp=drivesdk"
  return (
    <div>
    <Navbar/>
    <div className='w-11/12 border-gray-200 mx-auto border rounded-lg'>
    <div className='flex justify-between'>
        <div className='flex gap-8 m-2 md:m-8'>
        <Avatar className='cursor-pointer'><AvatarImage src='https://img.icons8.com/?size=75&id=108652&format=png&color=000000' alt='user'/></Avatar>
        <div>
        <h2 className='text-2xl font-medium mt-2'>Yuvraj Upadhyay</h2>
        <h2 className='text-muted-foreground text-lg'>Lorem ipsum dolor sit</h2>
        </div>
        </div>
      <Edit className='m-8'/>
    </div>
    <div className='flex mx-6 gap-4 md:mx-9'>
    <Mail/>
    <p className='text-l mb-4'>yuvraj@gmail.com</p>
    </div>
    <div className='flex mx-6 gap-4 md:mx-9'>
    <Phone/>
    <p className='text-l mb-4'>9175205766</p>
    </div>
    <p className='mx-6 mb-2 text-xl font-semibold md:mx-9' >Skills:</p>
    <div className='mx-6 mb-4 md:mx-9'>
    {skills.map((data,index)=>(
        <Button className="bg-[#CDE4E1] h-6 rounded-full shadow-inner p-2 font-bold mx-1" variant="outline">{data}</Button>
    ))}
    </div>
    <p className='mx-6 md:mx-9 text-xl font-semibold'>Resume:</p>
    {
    resume?
    <div className='flex mx-7  md:mx-10 mb-4'>
    <Link2 size={20} className='mt-1' color='blue'/>
    <h1 className='text-l text-blue-500 mx-1 cursor-pointer'><a href={resume}>your resume</a></h1></div>:
    <h1></h1>
    }
    </div>
    </div>
  );
}

export default Profile;
