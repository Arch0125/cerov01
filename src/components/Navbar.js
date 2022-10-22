import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

const Navbar = () => {
    return ( 
        <div className='flex flex-row py-2 px-4 justify-end items-center w-screen h-fit' >
            <ConnectButton/>
        </div>
     );
}
 
export default Navbar;