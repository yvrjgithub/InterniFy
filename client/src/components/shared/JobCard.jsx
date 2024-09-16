import React from 'react';
import { Button } from '../ui/button';
import { Book, Bookmark } from 'lucide-react';

const JobCard = () => {
  return (
    <div class="max-w-3/12 p-6  border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 ">
      <div className='flex w-full mx-2 justify-between mb-2'>
       <p className=' text-gray-500'>2 Days ago</p>
       <Bookmark/>
      </div>
    <div className='flex gap-3 mb-2'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzPFGyg8JCSEJwPbZmGPbAjkvmaK6DMrxPg&s" alt="logo"
      className='w-12 h-12' />
      <div>
      <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Company Name</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mumbai</p>
      </div>
    </div>
    <a href="#">
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <Button className="bg-[#CDE4E1] h-6 rounded-full shadow-inner p-2 font-bold text-blue-700 mx-1" variant="outline">12 Positions</Button>
    <Button className="bg-[#CDE4E1] h-6 rounded-full shadow-inner p-2 text-red-700 font-bold mx-1" variant="outline">Part time</Button>
    <Button className="bg-[#CDE4E1] h-6 rounded-full shadow-inner p-2 font-bold mx-1" variant="outline">10k</Button>
    <div className='my-2 mt-4'>
      <Button variant='outline'>Details</Button>
      <Button className='mx-4 bg-[#147FE3]'>Save for Later</Button>
    </div>
</div>

  );
}

export default JobCard;
