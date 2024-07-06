import React from 'react';
import { leagues, seasons } from '../constants';

const Selector = ({ setLeague, setSeason }) => {
  return (
    <div className='flex flex-wrap w-full lg:w-[30%] justify-evenly'>
      <select className='w-[40%] lg:w-full mt-2 lg:my-1 bg-dimwhite outline-none text-grey roboto-regular text-[.8em] tracking-tight py-[1%] sm:py-[1%] border-b-[1px] cursor-pointer' required onChange={(e) => setLeague(e.target.value)}>
        <option value=''>League</option>
        {leagues.map((league) => (
          <option key={league.id} value={league.id} className='bg-[transparent] roboto-regular text-[.7em] tracking-tight'>
            {league.name} ({league.country})
          </option>
        ))}
      </select>
      <select className='w-[40%] lg:w-full mt-2 lg:my-1 bg-dimwhite outline-none text-grey roboto-regular text-[.8em] tracking-tight py-[1%] sm:py-[1%] border-b-[1px] cursor-pointer' required onChange={(e) => setSeason(e.target.value)}>
        <option value=''>Season</option>
        {seasons.map((season) => (
          <option key={season.id} value={season.value} className='bg-[transparent] roboto-regular text-[.7em] tracking-tight'>
            {season.year}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Selector;
