import React from 'react';
import Navbar from './shared/Navbar';
import Selector from './shared/Selector';
import JobCard from './shared/JobCard';
const Interns = () => {
    const jobs=[1,2,3,4,5,6,7,8,9]
  return (
    <div>
        <Navbar/>
        <div className='flex w-11/12 justify-between mx-auto'>
        <Selector/>
        <div className='w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 overflow-y-scroll h-[86vh]'>
        {
            jobs.map((item,index)=><JobCard/>)
        }
      </div>
        </div>
    </div>
  );
}

export default Interns;
