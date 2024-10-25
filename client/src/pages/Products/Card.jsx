import React, { useState } from 'react'
import { AiFillHeart, AiOutlineClockCircle } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import BidModal from '../../components/Modal/BidModal';


const Card = ({item}) => {
    const {img, title,price, likes, sale} = item;
    const[isModalOpen, setIsModalOpen] = useState(false);
    const[bidAmount, setBidAmount] = useState(price);
    const[fullName, setFullName] = useState("")
    const[email, setEmail] = useState("")

    const toggleModal =() => {
        setIsModalOpen(!isModalOpen)
    };

    const handleSubmit =() => {
      
      const data ={
        fullName:fullName,
        email: email,
        amount: bidAmount
      }
// Possible errors
      try {
        fetch('http://localhost:5000/checkout',{
        method: 'POST',
        Headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      }).then((response) =>{
        if(!response.ok){
          throw new Error("Network response was not ok")
        }
        return response.json()
      }).then((data) =>{
        // console.log(data)
        window.location.href = data.invoice.result.url;
      })

      } catch (error) {
        console.log(error);
        throw error;
      }

      console.log(data);
      toggleModal()
    }


  return (
    <>
    <div className='flex group flex-col space-y-10 rounded-lg overflow-hidden border border-slate-400/10 pb-8 hover:shadow-xl duration-500 ease-in-out hover:shadow-white/5 relative'>

{/* {images and counter} */}

<div className='flex flex-col items-start relative'>
  <img src = {img} alt="" className='object-cover'/>
  {
    sale && (
      <div className='flex space-x-2 items-center justify-center px-4 py-1 bg-gradient-to-r from-red-400 via-fuchsia-500 to-indigo-500 rounded-xl absolute bottom-5 left-5'>
        <AiOutlineClockCircle />
        <p>66 : 08 :19 : 27</p>
      </div>
    )
  }
</div>

  {/* {Content} */}
  <div className='px-6 flex flex-col space-y-3'>
    <h3>{title}</h3>
    <div>
      {/* {price} */}
      <div className='flex justify-between'>
        <div className='flex space-x-2 text-indigo-600 items-center'>
        <FaEthereum size={18}/>
        <p className='text-sm font-semibold'>{price} ETH</p>
        </div>
        <div className='flex space-x-2 text-indigo-600 items-center'>
        <AiFillHeart size={18} className='text-red-600'/>
        <p className='text-sm text-slate-400 font-semibold'>{likes} </p>
        </div>
      </div>
    </div>
  </div>

  {/* {hover effect} */}
  <div className='absolute hidden top-1/4 md:right-1/4 left-1/3 md:left-1/4 group-hover:flex animate-bounce transition-all ease-in-out duration-1000'>

    <button 
    onClick={toggleModal}
    className='text-sm px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 duration-200 ease-in-out'>Place Bid</button>
  </div>
</div>

  {/* {Modal} */}
    <BidModal
    isOpen={isModalOpen}
    onClose={toggleModal}
    onBidSubmit={handleSubmit}
    fullName={fullName}
    setFullName={setFullName}
    setEmail={setEmail}
    bidAmount={bidAmount}
    setBidAmount={setBidAmount}
    />
    </>
  )
}

export default Card