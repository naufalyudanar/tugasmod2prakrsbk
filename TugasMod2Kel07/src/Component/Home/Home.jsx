import React, {} from 'react';
import Cardinfo from '../Cardinfo/Cardinfo';
import Heading from '../Heading/Heading';
document.body.style = 'background: black;';

export default function Home(){
    return(
        <div>
            <div >
                <Heading/>
            </div>
            <div>
                <Cardinfo/>
            </div>
        </div>
       
    )
}

