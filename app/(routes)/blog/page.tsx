import { Separator } from '@/components/ui/separator'
import React from 'react'
import EmptyBlog from './_components/EmptyBlog'
import BlogCard from './_components/BlogCard'
import { blogPost } from '@/config/dummy';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PageHeadings from '@/components/PageHeadings';

type Props = {}

export default function page({}: Props) {
  return (
    <div className='min-h-screen w-full relative my-auto py-16 gap-y-5 px-3  max-w-6xl xl:max-w-7xl mx-auto '>
      <PageHeadings  
        title='Blog Posts and Press releases'
        description='Blog posts and press releases by Deluccis'
      />
      {/* <EmptyBlog /> */}
      <div className="flex gap-x-6 gap-y-5 items-start justify-center gap-6 rounded-lg p-5 md:p-8 h-full w-full border-2 border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-12 w-full  ">
          {blogPost.map((post) => (
            <BlogCard
              id={post.id}
              key={post.id}
              title={post.title}
              description={post.description}
              imageSrc={post.imageLink}
              readTime={post.time}
              createdAt={post.createdAt}
            />
          ))}
        </div>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}