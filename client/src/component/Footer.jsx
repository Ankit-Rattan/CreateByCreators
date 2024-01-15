import React from 'react'

function Footer() {

  return (
    <div className='bg-blue-50'>
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="" class="h-8" alt="" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Create By Creators</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-lg font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#about" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="/" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/center" class="hover:underline me-4 md:me-6">Center</a>
                </li>
                <li>
                    <a href="/contact" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Create By Creators</a>. All Rights Reserved.</span>
    </div>
    </div>

  )
}

export default Footer