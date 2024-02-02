import React from 'react'


type Props = {text: string}

export default function Buttons(props: Props) {
    const {text} = props
  return (
    <button  className=' relative inline-flex  md:px-5 px-3 py-2 font-medium group'>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-mint group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-palette border-2 border-slate-400 group-hover:bg-mint"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0 translate-y-0 bg-palette group-hover:translate-x-1 group-hover:translate-y-1"></span>
        <span className="relative text-white transition text-xs md:text-base duration-200 ease-out group-hover:translate-y-1" >{text}</span>
        {/* <Carousel className="flex relative w-full border-2  border-mint ">
        <CarouselContent className=" flex gap-x-5">
            {products.map((product) => (
                <CarouselItem  className="pl-1 max-w-[20rem] w-full  min-w-[20rem] md:basis-1/2 lg:basis-1/3 shadow-lg" key={product.id}>
        
                    <Card  >
                        <CardHeader className='relative'>
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            <img src={product.imageLink} className='rounded-lg' alt="" />
                            <div className="text-mint absolute top-10 right-10">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                            </div>
                            <div className="flex border-2 justify-between border-palette">
                                <CardTitle className='text-base'>{product.title}</CardTitle>
                                <div className="flex gap-x-2">
                                    <Star className='' />
                                    <h3>{product.rating}</h3>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className='line-clamp-2'>{product.description}</CardDescription>
                        </CardContent>
                            <CardFooter className="justify-between space-x-2">
                                <Buttons text='Buy Now' />
                                <Buttons text='Add To Cart' />
                            </CardFooter>
                    </Card>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel> */}
    </button>

  )
}