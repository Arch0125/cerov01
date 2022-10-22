import React from 'react'

const Individual = () => {
  return (

    <div className='flex flex-row my-[70px] mx-[40px]'>

        <div className='flex flex-col w-[70%] mr-[40px] '>
            <div className='flex flex-col border-2 border-black shadow-back py-[60px] px-[40px] bg-bgwhite'>
                <div className='flex flex-row justify-between'>
                    <h1 className='font-mono text-xl'>Incoming Streams</h1>
                    <button className='font-mono text-white text-xl border-2 border-black px-[5px] shadow-back_elements2 bg-red-500 hover:bg-white hover:text-red-500'>Refresh</button>
                </div>

            </div>

            <br/>
            <br/>

            <div className='flex flex-col border-2 border-black shadow-back py-[60px] px-[40px] bg-bgwhite'>
                <div className='flex flex-row justify-between'>
                    <h1 className='font-mono text-xl'>Outgoing transfers</h1>
                    <button className='font-mono text-white text-xl border-2 border-black px-[5px] shadow-back_elements2 bg-red-500 hover:bg-white hover:text-red-500'>Refresh</button>
                </div>
            </div>
        </div>

        <div className='flex flex-col w-[35%] '>
            <div className='flex flex-col border-2 border-black px-[20px] py-[10px] text-left shadow-back bg-bgwhite'>
                <h1 className='font-semibold text-2xl my-[10px] font-mono'>Withdraw funds</h1>
                <hr/>
                <button className='border-2 text-red-500 border-black shadow-back_elements my-[10px] py-[7px] font-mono'>Select Stream</button>
                <label className='text-xl font-mono'>Available Stream Amount :</label>
                <label className='text-xl font-mono'>At Date & Time :</label>
                <div className='flex flex-row my-[10px] shadow-back_elements'>
                    <input type="number" className='border-2 border-black w-[100%] py-[7px] font-mono'/>
                    <button className='border-2 text-red-500 border-black  px-[7px] font-mono'>MAX</button>
                </div>
                <button className='border-2 border-black text-white shadow-back_elements my-[10px] py-[7px] font-mono bg-red-500 hover:bg-white hover:text-red-500'>Withdraw</button>
                <button className='border-2 border-black text-white shadow-back_elements my-[10px] py-[7px] font-mono bg-red-500 hover:bg-white hover:text-red-500'>Instant Full Withdraw</button>
            </div>
            
            <br/>
            <br/>

            <div className='flex flex-col border-2 border-black px-[20px] py-[10px] text-left shadow-back bg-bgwhite'>
                <h1 className='font-semibold text-2xl my-[10px] font-mono'>Transfer funds</h1>
                <hr/>
                <button className='border-2 text-red-500 border-black shadow-back_elements my-[10px] py-[7px] font-mono '>Select Stream</button>
                <label className='text-xl font-mono'>Available Stream Amount :</label>
                <label className='text-xl font-mono'>At Date & Time :</label>
                <input className='border-2 border-black w-[100%] my-[10px] py-[7px] shadow-back_elements font-mono'/>
                <div className='flex flex-row my-[10px] shadow-back_elements'>
                    <input type="number" className='border-2 border-black w-[100%] py-[7px] font-mono'/>
                    <button className='border-2  text-red-500 border-black px-[7px] font-mono '>MAX</button>
                </div>
                <button className='border-2 border-black text-white shadow-back_elements my-[10px] py-[7px] font-mono bg-red-500 hover:bg-white hover:text-red-500'>Transfer</button>
            </div>
        </div>
    </div>
  )
}

export default Individual