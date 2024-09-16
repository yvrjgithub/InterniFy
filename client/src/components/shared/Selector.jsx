import React from 'react';
import { RadioGroup ,RadioGroupItem} from '@radix-ui/react-radio-group';
import { Label } from '@radix-ui/react-label';

const Selector = () => {
  const filterData = [
    {
      filterType:"Location",
      Array:["Delhi NCR","Bangalore","Hyderabad","Pune","Mumbai"]
    },
    {
      filterType:"Domain",
      Array:["Fullstack Developer","Frontend Developer","App developer","Graphic Designer"]
    },
    {
      filterType:"Stipend",
      Array:["<10k","10k-30k","30k-50k",">50k"]
    },
  ]

  return (
    <div className='mt-8'>
      <h1 className='text-2xl font-semibold mb-4'>Filter</h1>
      <RadioGroup>
    {
      filterData.map((data,index)=>(
        <div className='mb-4'>
          <h1 className='text-l font-semibold mb-1'>{data.filterType}</h1>
          {
            data.Array.map((data,index)=>(
              <div>
                <input type="radio" name="index"></input>
                <Label className='font-medium'>{data}</Label>
              </div>
            ))
          }
        </div>
      ))  
    }
    </RadioGroup>  
    </div>
  );
}

export default Selector;
