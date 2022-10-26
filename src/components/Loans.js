import React from 'react'

const Loans = () => {
  return (
    <div className='flex flex-col my-[60px] mx-[90px]'>
        <div className='border-4 border-black shadow-back px-[40px] py-[40px] bg-bgwhite'>
            <h1 className='text-left text-3xl font-semibold font-mono'>Pool Details</h1>
            <hr/>
            <br/>
            <div className='flex flex-row justify-between '>
                <div className='flex flex-col text-left w-[25%]'>
                    <label className='text-xl font-mono font-bold'>Token : DAI</label>
                    <label className='text-xl font-mono font-bold'>Total Balance : </label>
                    <label className='text-xl font-mono font-bold'>Incoming Repayments : </label>
                    <label className='text-xl font-mono font-bold'>Shares Owned : </label>
                </div>
                <div className='flex flex-col text-left w-[30%]'>      
                    <input type="number" className='text-xl font-mono font-bold border-2 border-black mb-[5px] shadow-back_elements2'/>
                    <label className='text-xl font-mono font-bold mb-[5px]'>Shares to be minted : </label>
                    <button className='font-semibold text-xl font-mono border-2 border-black shadow-back_elements2 bg-red-500 text-white hover:bg-white hover:text-red-500'>Add Liquidity</button>
                </div>
                <div className='flex flex-col text-left w-[30%]'>
                    <div className='flex flex-row shadow-back_elements2 mb-[5px]'>
                        <input type="number" className='text-xl font-mono border-2 border-black w-[100%]'/>
                        <button className='font-semibold font-mono text-xl border-2 border-black px-[7px] bg-red-500 text-white hover:bg-white hover:text-red-500'>MAX</button>
                    </div>
                    <label className='text-xl font-mono font-bold mb-[5px]'>Estimated amount in DAI</label>
                    <button className='text-xl font-semibold font-mono border-2 border-black shadow-back_elements2 bg-red-500 text-white hover:bg-white hover:text-red-500'>Remove Liquidity</button>
                </div>
            </div>
        </div>

        <br/>
        <br/>

        <div className='flex flex-col border-4 border-black shadow-back px-[40px] py-[20px] bg-bgwhite'>
            <h1 className='text-left text-3xl font-semibold font-mono'>Borrow against Future Stream</h1>
            <hr/>
            <br/>
            <button className='py-[2px] font-semibold text-xl font-mono border-2 border-black shadow-back_elements2 mb-[10px] bg-red-500 text-white hover:bg-white hover:text-red-500'>Select Stream</button>
            <label className='text-xl font-mono font-bold text-left'>Max Loan Amount : </label>
            <label className='text-xl font-mono font-bold text-left mb-[10px]'>At Date & Time : </label>
            <div className='flex flex-row shadow-back_elements2'>
                <input type="number" className='text-xl font-mono  border-2 border-black w-[100%]'/>
                <button className='font-semibold font-mono text-xl border-2 border-black px-[7px] bg-red-500 text-white hover:bg-white hover:text-red-500'>MAX</button>
            </div>
            <br/>
            <button className='py-[2px] font-semibold text-xl font-mono border-2 border-black shadow-back_elements2 bg-red-500 text-white hover:bg-white hover:text-red-500'>Approve Loan</button>
        </div>
    </div>
  )
}

export default Loans