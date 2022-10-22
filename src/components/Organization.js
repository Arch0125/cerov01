import React from 'react'
import GetAccount from '../hooks/GetAccount'
import GetContract from '../hooks/GetContract'
import abi from './abi.js'

const Organization = () => {

    var account = GetAccount();
    //const contract = GetContract('0x379B31948D5BFB3114a356c3b7af0A3dE5321079',abi);

  return (
    <div className='flex flex-col my-[60px] mx-[40px]'>
        <div className='flex flex-row p-[20px] border-4 border-black shadow-back_elements bg-bgwhite'>
            <h1 className='font-mono text-2xl font-semibold'>Organization and DAO Details</h1>
        </div>

        <br/>

        <div className='flex flex-row justify-between'>
            <div className='flex flex-col my-[20px] border-4 border-black text-left shadow-back_elements px-[40px] py-[20px] w-[35%] bg-bgwhite'>
                <h1 className='font-mono text-2xl font-semibold'>DAO/Organization Info</h1>
                <hr/>
                <label className='text-xl font-mono'>Name : NSB DAO</label>
                <label className='text-xl font-mono'>Stream Admin : {(account.toString()).slice(0,6)}...{(account.toString()).slice(38)}</label>
                <label className='text-xl font-mono'>Members Streamed : 1</label>
                <hr/>
                <button className='font-mono font-semibold border-2 border-black shadow-back_elements2 p-[5px] mt-[10px] bg-red-500 text-white hover:bg-white hover:text-red-500'>Edit Details</button>
            </div>
            
            <div className='flex flex-col my-[20px] border-4 border-black text-left shadow-back_elements px-[40px] py-[20px] w-[25%] bg-bgwhite'>
                <h1 className=' font-mono text-2xl font-semibold'>Treasury</h1>
                <hr/>
                <label className='text-xl font-mono'>USDC : </label>
                <label className='text-xl font-mono'>DAI : </label>
                <label className='text-xl font-mono'>MATIC : </label>
                <hr/>
                <button className='font-mono font-semibold border-2 border-black shadow-back_elements2 p-[5px] mt-[10px] bg-red-500 text-white hover:bg-white hover:text-red-500'>Add Funds</button>
            </div>

            <div className='flex flex-col my-[20px] border-4 border-black text-left shadow-back_elements px-[40px] py-[20px] w-[25%] bg-bgwhite'>
                <h1 className='font-mono text-2xl font-semibold'>Streams Info</h1>
                <hr/>
                <label className='text-xl font-mono'>Total Streams : </label>
                <label className='text-xl font-mono'>Ongoing Streams : </label>
                <label className='text-xl font-mono'>Finished Streams : </label>
                <hr/>
                <button className='font-mono font-semibold border-2 border-black shadow-back_elements2 p-[5px] mt-[10px] bg-red-500 text-white hover:bg-white hover:text-red-500'>History Book</button>
            </div>
        </div>

        <br/>

        <div className='flex flex-row justify-between'>
            <div className='flex flex-col my-[20px] border-4 border-black text-left shadow-back_elements px-[40px] py-[20px] w-[50%] bg-bgwhite'>
                <h1 className='font-mono text-2xl font-semibold'>Create new stream</h1>
                <hr/>
                <label className='text-xl font-mono'>Recipient Address</label>
                <input className='border-2 border-black'/>
                <label className='text-xl font-mono'>Amount</label>
                <input className='border-2 border-black'/>
                <div className='flex flex-row justify-between mb-[12px]'>
                    <button className='font-semibold font-mono border-2 border-black shadow-back_elements2 mt-[10px] w-[25%] bg-red-500 text-white hover:bg-white hover:text-red-500'>Duration</button>
                    <button className='font-semibold font-mono border-2 border-black shadow-back_elements2 mt-[10px] w-[25%] bg-red-500 text-white hover:bg-white hover:text-red-500'>Choose Token</button>
                    <button className='font-semibold font-mono border-2 border-black shadow-back_elements2 mt-[10px] w-[25%] bg-red-500 text-white hover:bg-white hover:text-red-500'>Stream Rate</button>
                </div>
                <hr/>
                <button className='font-mono font-semibold border-2 border-black shadow-back_elements2 p-[5px] mt-[10px] bg-red-500 text-white hover:bg-white hover:text-red-500'>Create Stream</button>
            </div>

            <div className='flex flex-col my-[20px] border-4 border-black text-left shadow-back_elements px-[40px] pt-[20px] pb-[50px] w-[40%] h-[fit-content] bg-bgwhite'>
                <h1 className='font-mono text-2xl font-semibold'>Current Stream</h1>
                <button className='font-mono font-semibold border-2 border-black shadow-back_elements2 p-[5px] mt-[10px] bg-red-500 text-white hover:bg-white hover:text-red-500'>Show Streams</button>
            </div>
        </div>
    </div>
  )
}

export default Organization