import React from 'react';
import JobCard from './JobCard';

const RecentInts = () => {
    const jobs = [1,2,3,4,5,6]
  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='mb-4 text-xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl'> <span className='text-[#147fe3]'>Latest & Top </span>Internships</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-12'>
        {
            jobs.slice(0,6).map((item,index)=><JobCard/>)
        }
      </div>
    </div>
  );
}

export default RecentInts;
