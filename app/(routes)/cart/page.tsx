import { Separator } from '@/components/ui/separator'
import React from 'react'
import EmptyCart from './_components/EmptyCart'
import CartProduct from './_components/CartProduct'
import { products } from '@/config/dummy'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import Buttons from '@/components/Buttons'
import { formatPrice } from '@/lib/format'
import PageHeadings from '@/components/PageHeadings'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='min-h-screen w-full relative my-auto py-16 gap-y-5 px-3 max-w-7xl mx-auto '>
      <PageHeadings
        title='Your Cart' 
        description='Find your most trusted and reliable brands while also discovering new brands'
      />
        {/* <EmptyCart /> */}
        <div className='flex flex-col-reverse md:flex-row gap-x-6 gap-y-5 items-start justify-center gap-6 rounded-lg p-5 md:p-8 h-full w-full border-2 border-black '>
          <div className='flex flex-col gap-y-3 lg:p-4  md:basis-2/3 w-full'>
            {products.slice(0, 5).map((product) => (

              <CartProduct 
                key={product.id}
                imageSrc={product.imageLink}
                productName={product.title}
                inStock={product.inStock}
                pickup={product.pickup}
                price={product.price}
                newPrice={product.newPrice}
              />
            ))}
            {/* <div className="border-2 flex h-full min-h-56 max-h-56 ">
              <Link href='/' className="flex w-4/12 border-2 border-palette rounded-lg">
                <img src="./preview.png" alt="" className='object-cover  rounded-lg h-full w-full'  />
              </Link>
              <div className="border-2 w-6/12 p-2 gap-y-2 flex flex-col">
                <Link href="/">
                  <h2 className=' border-2 font-bold underline line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium earum? Aperiam, pariatur vitae. Laboriosam vitae aut magni, rem fuga aperiam animi iure cumque, nam modi saepe dolor in! Quisquam eum doloribus iure modi nostrum magni, aperiam, impedit necessitatibus quibusdam eius aspernatur quod, sed fugit sequi perspiciatis consectetur ullam soluta. Fuga laudantium nobis corrupti? Sequi reiciendis ab placeat magnam a?</h2>
                </Link>
                <div className="flex flex-col">
                  <span className='flex gap-x-2 items-center'>
                  <CheckCheck className='text-mint' size={16} />
                  <h4 className='text-xs'>In Stock</h4>
                  </span>
                  <span className='flex gap-x-2 items-center'>
                  <X className='text-red-600' size={16} />
                  <h4 className='text-xs'>Available for pickup</h4>
                  </span>
                </div>
              </div>
            </div> */}
            {/* <div className="border-2 flex h-full min-h-56 max-h-56 ">
              <div className="flex w-4/12 border-2 border-palette rounded-lg">
                <img src="https://images.pexels.com/photos/17685567/pexels-photo-17685567/free-photo-of-a-group-of-people-riding-surfboards-in-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='object-cover  rounded-lg h-full w-full'  />
              </div>
            </div>
            <div className="border-2 flex h-full min-h-56 max-h-56 ">
              <div className="flex w-4/12 border-2 border-palette rounded-lg">
                <img src="./preview.png" alt="" className='object-cover  rounded-lg h-full w-full'  />
              </div>
            </div>  */}
          </div>
          <div className='flex flex-col border-2 border-palette rounded-lg relative md:basis-1/3 w-full'>
          <div className="absolute inset-0 bg-palette bg-opacity-20" />
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
                <CardDescription>
                  Here is the subtotal and total of your cart
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col'>
                <span className="flex justify-between">
                  <p className='font-bold'>Subtotal</p>
                  <p className='text-xs'>{formatPrice(3000)}</p>
                </span>
                <span className="flex justify-between">
                  <p className='font-bold'>Delivery Fee</p>
                  <p className='text-xs'>{formatPrice(3000)}</p>
                </span>
                <span className="flex justify-between">
                  <p className='font-bold'>Taxes</p>
                  <p className='text-xs'>{formatPrice(3000)}</p>
                </span>
                <span className="flex justify-between">
                  <p className='font-bold'>Total</p>
                  <p className='text-xs'>{formatPrice(9000)}</p>
                </span>
              </CardContent>
              <CardFooter className='w-full flex flex-col'>
                <Buttons text='Continue to checkout'  /> 
                <div className="relative border-2 my-5">
                  <div className="absolute inset-1  flex items-center">
                    <span className="w-full border-t border-t-palette" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <Buttons text='Paypal'  /> 
              </CardFooter>
            </Card>
          </div>
        </div>
    </div>
  )
}