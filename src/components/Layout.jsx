import React from 'react';
import Navbar from './Navbar';
import Chatlist from './Chatlist';
import Chat from './Chat';

function Layout () {
    return(
        <div >
            <Navbar />
            <div class="row">
                <Chatlist />
                <Chat />
            </div>
        </div> 
    )
}

export default Layout;