import React, { useEffect, useState } from 'react';
import GunCard from '../GunCard/GunCard';

const AllGuns = ({handleAddToCart}) => {
    const [guns, setGuns] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGuns(data));
    },[])
    return (
        <div className='grid w-[88%] mx-auto my-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                guns.map(singleGun => 
                <GunCard 
                    key={singleGun.id} 
                    singleGun={singleGun}
                    handleAddToCart={handleAddToCart}>
                </GunCard>) 
            }
        </div>
    );
};

export default AllGuns;