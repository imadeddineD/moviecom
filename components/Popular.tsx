"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import data from '../movies.json';
import Image from 'next/image';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";


const Popular = () => {

  useEffect(()=>{
    let left_btn = document?.getElementsByClassName('bi-chevron-left')[0]
    let right_btn = document?.getElementsByClassName('bi-chevron-right')[0]
    let cards = document?.getElementsByClassName('cards')[0]

    left_btn.addEventListener('click' , () => {
      cards.scrollLeft -= 140 ; 
    })
    right_btn.addEventListener('click' , () => {
      cards.scrollLeft += 140 ; 
    })
},[])  
return (
    <section className=' mt-[50px] popular'>
      <h4 className=' font-bold text-[26px] container mx-auto'>Popular</h4>
      <FaAngleLeft className='bi-chevron-left'/>
      <FaAngleRight className='bi-chevron-right'/>
      <div className="cards">
      {data.map((dt, index) => {
        return (
        <Link href="" className='card' key={index}>
          <Image
              src={dt.Poster} 
              alt={dt.Title} 
              width={180}
              height={200}
              style={{"objectFit" : "cover" }}
              className=' w-[100%] h-[100%] poster'
            />
            <div className="rest_card">
              <Image src={dt.Images[0]} alt="" width={300} height={180}/>
              <div className="cont">
                <h4 className=' text-[20px] font-semibold'>{dt.Title}</h4>
                <div className="sub">
                  <p>{dt.Genre} | {dt.Year}</p>
                  <h3 className=' text-[22px] font-semibold'><span>IMBD</span> {dt.imdbRating}</h3>
                </div>
              </div>
            </div>
        </Link>
        )
      })}
      {/* <Link href="" className='card'>
          <Image
              src={data[0].Poster} 
              alt={data[0].Title} 
              width={180}
              height={200}
              style={{"objectFit" : "cover" }}
              className=' w-[100%] h-[100%] poster'
            />
            <div className="rest_card">
              <Image src={data[0].Images[0]} alt="" width={300} height={180}/>
              <div className="cont">
                <h4 className=' text-[20px] font-semibold'>{data[0].Title}</h4>
                <div className="sub">
                  <p>{data[0].Genre} | {data[0].Year}</p>
                  <h3 className=' text-[22px] font-semibold'><span>IMBD</span> {data[0].imdbRating}</h3>
                </div>
              </div>
            </div>
        </Link> */}
      </div>
    </section>
  )
}

export default Popular