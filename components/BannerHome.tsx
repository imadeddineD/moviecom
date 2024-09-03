'use client'

import React, { useEffect, useState } from 'react';
import data from '../movies.json';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const BannerHome = () => {

    const [currentImage,setCurrentImage] = useState(0)

    const handleNext = ()=>{
        if(currentImage < data.length - 1){
            setCurrentImage(preve => preve + 1)
        }
    }
    const handleprevious = ()=>{
        if(currentImage > 0){
            setCurrentImage(preve => preve - 1)
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(currentImage < data.length - 1){
                handleNext()
            }else{
                setCurrentImage(0)
            }
        },6000)

        return ()=>clearInterval(interval)
    },[data,currentImage])
  return (
    <section className='w-full h-full'>
        <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
      {data.map((dt, index) => {
        return (
            <div key={index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all'
             style={{ transform : `translateX(-${currentImage * 100}%)`}}
             >
            <div className='w-full h-full'>
            <Image 
              src={dt.Images[0]} 
              alt={dt.Title} 
              layout="responsive"
              width={100}
              height={100}
              style={{"objectFit" : "cover" }}
              className=' w-[100%] h-[100%] '
            />
          </div>

          <div className='absolute top-0 w-full h-full hidden items-center  justify-between px-4 group-hover:lg:flex'>
                                    <button 
                                    onClick={handleprevious} 
                                    className='bg-white  p-1 rounded-full  text-xl z-10 text-black'>
                                        <FaAngleLeft/>
                                    </button>
                                    <button 
                                    onClick={handleNext} 
                                    className='bg-white p-1 rounded-full  text-xl z-10 text-black '>
                                        <FaAngleRight/>
                                    </button>
            </div>

          <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
        </div>

        <div className='container mx-auto'>
        <div className=' w-full absolute bottom-0 max-w-md px-3'>
        <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl '>{dt?.Title}</h2>
        <p className='text-ellipsis line-clamp-3 my-2'>{dt?.Plot}</p>
        <div className='flex items-center gap-4'>
                                            <p>Rating : { Number(dt.imdbRating).toFixed(1) }+</p>
                                            <span>|</span>
                                            <p>View : { Number(dt.imdbVotes).toFixed(0) }</p>
        </div>
        <Link 
        href={""}
        // href={"/"+data?.media_type+"/"+data.id}
        >
            <button  className=' bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-blue-900 to-blue-800 shadow-md transition-all hover:scale-105'>
                Play Now
            </button>
        </Link>
        </div>
        </div>

          </div>
        );
      })}
    </div>
    </section>
  );
};

export default BannerHome;
