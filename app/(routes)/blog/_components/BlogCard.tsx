"use client"
import Link from 'next/link';
import React from 'react'

interface blogProps  {
    title: string,
    id:number,
    description: string,
    imageSrc: string,
    readTime: number,
    createdAt?: Date;
}

export default function BlogCard({id, title, description, imageSrc, readTime, createdAt}: blogProps) {
    const formattedDate = createdAt ? createdAt.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
  return (
    <>

            <Link href={`/blog/${id}`} className="overflow-hidden collection-card has-before hover:shine rounded-lg shadow transition hover:shadow-lg">
                <img
                    alt={title}
                    src={imageSrc}
                    className="h-56 w-full overflow-hidden object-cover "
                />

                <div className="bg-white p-4 sm:p-6">
                    <div className="flex gap-x-2">
                        <time  className="block text-xs text-gray-500"> {formattedDate}</time>
                        <span className='block text-xs text-gray-500'>{readTime} min read</span>
                    </div>

                    <span >
                    <h3 className="mt-0.5 text-lg hover:underline text-gray-900">{title}</h3>
                    </span>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{description}</p>
                </div>
            </Link>
  
    </>
  )
}