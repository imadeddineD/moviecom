"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import data from '../movies.json';
import Image from 'next/image';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Popular = () => {

  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    let left_btn = document?.getElementsByClassName('bi-chevron-left')[0];
    let right_btn = document?.getElementsByClassName('bi-chevron-right')[0];
    let cards = document?.getElementsByClassName('cards')[0];

    left_btn.addEventListener('click', () => {
      cards.scrollLeft -= 140;
    });
    right_btn.addEventListener('click', () => {
      cards.scrollLeft += 140;
    });
  }, []);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);  // Toggle the clicked card
  };

  return (
    <section className='mt-[50px] popular'>
      <h4 className='font-bold text-[26px] container mx-auto'>Popular</h4>
      <FaAngleLeft className='bi-chevron-left' />
      <FaAngleRight className='bi-chevron-right' />
      <div className="cards">
        {data.map((dt, index) => {
          return (
            <div
              key={index}
              className={`card ${activeCard === index ? 'active' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <Image
                src={dt.Poster}
                alt={dt.Title}
                width={180}
                height={200}
                style={{ "objectFit": "cover" }}
                className='w-[100%] h-[100%] poster'
              />
              <div className="rest_card">
                <Image src={dt.Images[0]} alt="" width={300} height={180} />
                <div className="cont flex justify-between ">
                  <div>
                  <h4 className='text-[20px] font-semibold'>{dt.Title}</h4>
                  <p>{dt.Genre} | {dt.Year}</p>
                    <h3 className='text-[22px] font-semibold'><span>IMBD</span> {dt.imdbRating}</h3>
                  </div>
                  <div className="sub">
                  <Link href={`/${dt.id}`} className=' w-[80px] h-[45px] rounded-md bg-yellow-400 flex justify-center items-center text-[18px] font-[600]  '>
                  Show
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
