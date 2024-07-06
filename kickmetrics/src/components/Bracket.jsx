import React from 'react'

const Bracket = ({ standings, rank }) => {
  return (
    <div className='w-[80%] sm:w-[80%] md:w-[60%] roboto-regular text-grey mx-auto py-10 overflow-x-scroll'>
            <div className='flex text-[.9em] border-b-[1.5px] w-full border-[grey] py-2'>
                <div className='w-[39%] flex items-center'>
                    <h1 className='roboto-medium tracking-tight text-grey w-[50%] md:w-[30%] ml-3'>Club</h1>
                </div>
                <div className='flex text-[1em] w-[50%] overflow-x-scroll mx-auto text-center'>
                    <div className='w-[105px]'>
                        <p className='px-3'>MP</p>
                    </div>
                    <div className='flex justify-between w-[155px] mx-4'>
                        <p className='px-2'>W</p>
                        <p className='px-2'>D</p>
                        <p className='px-2'>L</p>
                    </div>
                    <div className='flex justify-between w-[155px] mx-4'>
                        <p className='px-2'>GF</p>
                        <p className='px-2'>GA</p>
                        <p className='px-2'>GD</p>
                    </div>
                    <div className='w-[105px]'>
                        <p className='px-3'>Pts</p>
                    </div>
                </div>
            </div>
            {rank.map((rank) => (
                <div key={rank.team?.id } className='flex flex-wrap justify-between items-center text-[.9em] w-full border-b-[1.5px] border-[grey] py-2'>
                    <div className='w-[39%] flex flex-wrap items-center'>
                        <h1 className='roboto-regular tracking-tight text-grey w-auto mr-3 mb-1 sm:mb-0'>{rank.rank ? rank.rank : ''} ]</h1>
                        <div className='flex w-[80%] items-center'>
                            <img src={rank.team?.logo ? rank.team?.logo : ''} className='w-[30%] sm:w-[15%] lg:w-[10%] mr-2' />
                            <h1 className='roboto-medium tracking-tight text-grey w-[50%] md:w-[80%]'>{rank.team?.name ? rank.team?.name : ''}</h1>
                        </div>
                    </div>
                        <div className='flex text-[1em] tracking-tighter w-[50%] overflow-x-scroll mx-auto text-center'>
                            <div className='w-[105px]'>
                                <p className='px-3'>{rank.all?.played ? rank.all?.played : '0'}</p>
                            </div>
                            <div className='flex justify-between w-[155px] mx-4'>
                                <p className='px-2'>{rank.all?.win ? rank.all?.win : '0'}</p>
                                <p className='px-2'>{rank.all?.draw ? rank.all?.draw : '0'}</p>
                                <p className='px-2'>{rank.all?.lose ? rank.all?.lose : '0'}</p>
                            </div>
                            <div className='flex justify-between w-[155px] mx-4'>
                                <p className='px-2'>{rank.goalsDiff? rank.goalsDiff : '0'}</p>
                                <p className='px-2'>{rank.all?.goals?.for ? rank.all?.goals?.for : '0'}</p>
                                <p className='px-2'>{rank.all?.goals?.against ? rank.all?.goals?.against : '0'}</p>
                            </div>
                            <div className='w-[105px]'>
                                <p className='px-3'>{rank.points ? rank.points : '0'}</p>
                            </div>
                        </div>
                    </div>
            ))}
    </div>
  )
}

export default Bracket