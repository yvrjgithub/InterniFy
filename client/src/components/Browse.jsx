import React from 'react';
import Navbar from './shared/Navbar';
import JobCard from './shared/JobCard';

const Browse = () => {
    const jobs = [1,2,3,4,5,6,7,8,9,,12,3,4,5,6,]
  return (
    <div>
      <Navbar/>
      <div className='w-11/12 mx-auto'>
      <h1 className='text-xl mt-4 font-medium'>Search results ({jobs.length})</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-1'>
        {
            jobs.map((item,index)=><JobCard/>)
        }
        </div>
        </div>
    </div>
  );
}

export default Browse;
