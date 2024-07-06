import React from 'react';
import Selector from './Selector';

const SearchForm = ({ title, enterPlayerTeam, search, handleOnSubmit, changeSearch, setLeague, setSeason, hover }) => {
  return (
    <div className='w-[80%] sm:w-[50%] text-dimwhite mx-auto mt-4 lg:ml-8'>
        <h1 className='roboto-medium w-auto text-center lg:text-left text-[1.2em] mb-[4%] lg:mb-[3%] sm:text-[1.3em] md:text-[1.6em]'>SEARCH FOR A {title}</h1>
        <form onSubmit={handleOnSubmit} className='flex flex-wrap w-full justify-evenly items-center' >
            <input type='search' placeholder={enterPlayerTeam} value={search} onChange={changeSearch} className='search w-[80%] roboto-regular lg:w-[40%] outline-none tracking-tight py-[1%] sm:py-[1%] border-b-[1px] border-dimwehite bg-[transparent] mr-4' required />
            <Selector setLeague={setLeague} setSeason={setSeason} />
            <button type='submit' className={`w-auto my-3 mx-auto hover:text-${hover} roboto-medium text-[.8em] px-10 py-2 border-[1px]`}>ENTER</button>
        </form>
    </div>
  )
}

export default SearchForm;


