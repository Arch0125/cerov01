import React, { useEffect } from 'react'
import { createClient } from 'urql'
import GetAccount from '../hooks/GetAccount'
import GetContract from '../hooks/GetContract'
import abi from './abi'

const Individual = () => {

    const[streams, setStreams] = React.useState([])

    const account = GetAccount();
    //const contract = GetContract('0x379B31948D5BFB3114a356c3b7af0A3dE5321079',abi);

    const APIURL = 'https://api.studio.thegraph.com/query/34624/cerograph1/v0.0.1'

    const streamQuery = `
        query {
            streamCreateds {
                id
                sender
                receiver
                amount
                stopTime
                interval
              }
        }
    `

const client = createClient({
  url: APIURL,
})

async function getStreams(){
    const data = await client.query(streamQuery).toPromise()
    setStreams(data.data.streamCreateds);
}

useEffect(() => {
    getStreams();
},[])

  return (

    <div className='flex flex-row my-[10px] mx-[40px]'>

        <div className='flex flex-col w-[70%] mr-[40px] '>
            <div className='flex flex-col border-2 border-black shadow-back py-[60px] px-[40px] bg-bgwhite'>
                <div className='flex flex-row justify-between'>
                    <h1 className='font-mono text-xl'>Incoming Streams</h1>
                    <button className='font-mono text-white text-xl border-2 border-black px-[5px] shadow-back_elements2 bg-red-500 hover:bg-white hover:text-red-500'>Refresh</button>
                </div>
                <hr className='mt-4 border-black' />
                {
                    streams.map((stream) => {

                        if((stream.receiver).toLowerCase() === account.toLowerCase()){
                            return (
                                <div className='flex flex-row justify-between mt-4'>                           
                                        <h1 className='font-mono text-xl'>{(stream.sender).slice(0,6)}...{(stream.sender).slice(38)}</h1>
                                        <h1 className='font-mono text-xl'>{stream.amount} USDC</h1>
                                        <h1 className='font-mono text-xl'>{(stream.interval)/86400} day(s)</h1>
                                        <h1 className='font-mono text-xl'>{(stream.stopTime)}</h1>
                                    <button className='font-mono text-white text-xl border-2 border-black px-[5px] shadow-back_elements2 bg-red-500 hover:bg-white hover:text-red-500'>Accept</button>
                                </div>
                            )
                        }
                    }
                )
                }

            </div>

            <br/>
            <br/>

            <div className='flex flex-col border-2 border-black shadow-back py-[60px] px-[40px] bg-bgwhite'>
                <div className='flex flex-row justify-between'>
                    <h1 className='font-mono text-xl'>Outgoing transfers</h1>
                    <button className='font-mono text-white text-xl border-2 border-black px-[5px] shadow-back_elements2 bg-red-500 hover:bg-white hover:text-red-500'>Refresh</button>
                </div>
                <hr className='mt-4 border-black' />
                {
                    streams.map((stream) => {

                        if((stream.sender).toLowerCase() === account.toLowerCase()){
                            return (
                                <div className='flex flex-row justify-between mt-4'>                           
                                        <h1 className='font-mono text-xl'>{(stream.receiver).slice(0,6)}...{(stream.receiver).slice(38)}</h1>
                                        <h1 className='font-mono text-xl'>{stream.amount} USDC</h1>
                                        <h1 className='font-mono text-xl'>{(stream.interval)/86400} day(s)</h1>
                                        <h1 className='font-mono text-xl'>{(stream.stopTime)}</h1>
                                    <button className='font-mono text-white text-xl border-2 border-black px-[5px] shadow-back_elements2 bg-red-500 hover:bg-white hover:text-red-500'>Accept</button>
                                </div>
                            )
                        }
                    }
                )
                }

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