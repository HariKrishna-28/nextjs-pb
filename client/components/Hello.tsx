import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

const Hello: NextPage = () => {
    return (
        <div className='p-5 rounded'>
            <div className='flex items-center justify-center gap-10'>
                <div>
                    <Image className='rounded-lg ' draggable="false" src="/profile.jpeg" alt="me" width="300" height="300" />
                </div>

                <div>
                    <div className='text-5xl font-bold'>
                        Hi I'm <span className='text-purple-500'>Harikrishna</span>.
                    </div>
                    A self taught fullstack developer and python programmer
                </div>


            </div>

        </div>
    )
}

export default Hello