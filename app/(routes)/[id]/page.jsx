"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import products from "../../../movies.json";
import Image from 'next/image';
import Link from 'next/link';
import HorizontalScollCard from '@/components/HorizontalScrollCard';
import data from "../../../movies.json"

const Page = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((product) => product.id === id);
      setProduct(foundProduct);
    }
  }, [id]);

  const handleNext = () => {
    if (product && currentImage < product.Images.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (product) {
      const interval = setInterval(() => {
        if (currentImage < product.Images.length - 1) {
          handleNext();
        } else {
          setCurrentImage(0);
        }
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [product, currentImage]);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="w-full h-full relative">
  <div className="flex min-h-full max-h-[100vh] overflow-hidden relative">
    {product.Images.map((dt, index) => (
      <div
        key={index}
        className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        <Image
          src={dt}
          alt={dt}
          layout="responsive"
          width={100}
          height={100}
          style={{ objectFit: "cover" }}
          className="w-[100%] h-[100%]"
        />
      </div>
    ))}

    {/* Background Gradient */}
    <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent z-10"></div>

    {/* Product Content */}
    <div className="absolute inset-0 z-20 flex justify-start items-center px-8">
      <div className="max-w-lg text-left p-4">
        {/* Ensure title and plot are displayed above the image and gradient */}
        <h2 className="font-bold text-3xl lg:text-5xl text-white drop-shadow-2xl mb-4">
          {product.Title}
        </h2>
        <p className="text-white mb-4 max-w-md">
          {product.Plot}
          {product.Plot}
          {product.Plot}
        </p>
        <div className="flex items-center gap-4 text-white mb-4">
          <p>Rating: {Number(product.imdbRating).toFixed(1)}+</p>
          <span>|</span>
          <p>View: {Number(product.imdbVotes).toFixed(0)}</p>
        </div>
        <div className="flex gap-4">
          <Link href="">
            <button className="bg-white px-4 py-2 text-black font-bold rounded hover:bg-gradient-to-l from-blue-900 to-blue-800 shadow-md transition-all hover:scale-105">
              Play
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  </div>
  <HorizontalScollCard data={data} heading={"Related"} trending={false}/>
  <HorizontalScollCard data={data} heading={"Others"} trending={false}/>
</section>


  );
};

export default Page;
