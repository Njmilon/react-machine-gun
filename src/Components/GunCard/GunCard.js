import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const GunCard = ({ singleGun, handleAddToCart }) => {
    const { name, price, img, category } = singleGun;

    const [details, setDetails] = useState({});

    // const handleDetails = () => {
    //     setDetails(singleGun)
    // };
    // console.log(details);
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                    <img className='w-full h-64' src={img} alt="Shoes" />
                </figure>
                <div className="card-body px-8 pt-8 pb-4">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    {/* <p className='text-left'>Category: {category}</p>
                    <p className='text-left'>Price: {price}</p> */}
                    <div className="card-actions">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">${price}</div>
                    </div>
                    <div className='my-2 w-[100%] flex'>
                        <button onClick={() => handleAddToCart()} className="btn btn-outline btn-secondary btn-sm w-[50%] mr-1">Add-To-Card</button>
                        {/* <button className="btn btn-outline btn-secondary btn-sm w-[50%]">Details</button> */}
                        <label onClick={() => setDetails(singleGun)} htmlFor="my-modal-3" className="btn modal-button btn-outline btn-secondary btn-sm w-[50%]">open modal</label>
                    </div>
                </div>
                {
                    details && (
                        <Modal details={details} setDetails={setDetails}></Modal>
                    )
                }
                {/* <Modal details={details} setDetails={setDetails}></Modal> */}
            </div>
        </div >
    );
};

export default GunCard;