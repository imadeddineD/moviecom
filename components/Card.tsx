import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'


const Card = ({data,trending,index } : any) => {


    
  return (
    <Link href="" className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all'>
        
        {
            data?.Poster ? (
                <Image
                    src={data.Poster}
                    alt=''
                    width={100}
                    height={100}
                    className=' object-cover w-full h-full'
                />
            ) : (
                <div className='bg-neutral-800 h-full w-full flex justify-center items-center'>
                    No image found
                </div>
            )

        }

        

        <div className='absolute top-4 '>
            {
                trending && (
                    <div className='py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
                        #{index} Trending
                    </div>
                )
            }
        </div>

        <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full  bg-black/60 p-2'>
            <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.Title}</h2>
            <div className='text-sm text-neutral-400 flex justify-between items-center'>
                <p>{ moment(data.release_date).format("MMMM Do YYYY") }</p>
                <p className='bg-black px-1 rounded-full text-xs text-white'>Rating :{Number(data.imdbRating).toFixed(1)}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card