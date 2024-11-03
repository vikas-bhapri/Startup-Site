import React from 'react'
import { STARTUP_BY_USER_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import StartupCard, { StartupTypeCard } from './StartupCard'

const UserBlogs = async ({id}: {id: string}) => {

    const blogs = await client.fetch(STARTUP_BY_USER_QUERY, {id})
    
    

  return (
    <>
        {blogs.length > 0 ? (blogs.map((blog: StartupTypeCard) => (
            <StartupCard key={blog._id} post={blog} />
        )) ): (<p className="no-result">
            No posts yet
        </p>) }
    </>
  )
}

export default UserBlogs