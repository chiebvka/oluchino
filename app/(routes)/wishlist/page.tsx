import React from 'react'
import { Separator } from '@/components/ui/separator'
import EmptyWishlist from './_components/EmptyWishlist'
import { products } from '@/config/dummy'
import WishlistProduct from './_components/WishlistProduct'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='min-h-screen w-full relative my-auto py-16 gap-y-5 px-3 max-w-7xl mx-auto '>
    <div className="flex flex-col gap-y-5 justify-center">
        <h1 className='lg:text-3xl md:text-2xl text-lg  font-extrabold  '>Your Wishlist</h1>
        <p className='text-sm md:text-base'>Find your most trusted and reliable brands while also discovering new brands </p>
    </div>
    <Separator className='my-5' />
    {/* <EmptyWishlist /> */}
    <div className="flex gap-x-6 gap-y-5 items-start justify-center gap-6 rounded-lg p-8 h-full w-full border-2 border-black">
      <div className="flex flex-col gap-y-3 lg:p-4  w-full ">
        {products.splice(0,3).map((product) => (
          <WishlistProduct 
            key={product.id}
            imageSrc={product.imageLink}
            productName={product.title}
            price={product.price}
            newPrice={product.newPrice}
          />
        ))}
      </div>
    </div>
</div>
  )
}