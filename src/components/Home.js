import React from 'react'

const Home = () => {
  return (
    <div className='m-[90px]'>
    <div className='flex flex-row justify-between bg-white border-4 border-black px-[40px] shadow-back bg-bgwhite'>


        <div className='flex flex-col border-r-4 border-black w-[70%] py-[30px]'>
            <h1 className='text-2xl font-mono'>Payment Streams tooling for web3 Organizations</h1>

            <div className='flex flex-row justify-around w-[95%] mt-[400px]'>
                <button className='bg-red-500 px-[20px] py-[10px] text-xl text-white font-mono font-semibold shadow-back border-4 border-black'>
                    Onboard as Organization 🌐
                </button>

                <button className='bg-red-500 px-[20px] py-[10px] text-xl text-white font-mono font-semibold shadow-back border-4 border-black'>
                    Onboard as an Individual 👤
                </button>
            </div>

        </div>


        <div className='flex flex-col py-[30px] w-[26%] '>
            <h1 className='text-7xl font-mono'>CERØ</h1>
            <br/>
            <div className='text-left border-2 border-black shadow-back_elements px-[20px] py-[10px] font-mono'>
                <h1 className='font-semibold text-lg'>Batch Transactions</h1>
                Wrap up transactions of 50 members over 12 months into a single transaction and start streaming
            </div>
            <br/>
            <div className='text-left border-2 border-black shadow-back_elements px-[20px] py-[10px] font-mono'>
                <h1 className='font-semibold text-lg'>Under-Collateral Loans</h1>
                Payment stream recepients enjoy P2P undercollateral lending based on their streaming amount
            </div>
            <br/>
            <div className='text-left border-2 border-black shadow-back_elements px-[20px] py-[10px] font-mono'>
                <h1 className='font-semibold text-lg'>Editable Rates</h1>
                Change your streaming rates the way you like. Pay yourself per days, weeks or months
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home