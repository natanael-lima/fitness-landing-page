import React from 'react'

export default function Footer() {
  return (
        <footer className="bg-white rounded-3xl shadow ">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-stone-400 sm:mb-0 dark:text-stone-300">
                      <li>
                          <a href="#" className="hover:underline me-4 md:me-6">About</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Contact</a>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-stone-200 sm:mx-auto dark:border-stone-400 lg:my-8" />
              <span className="block text-sm text-stone-500 sm:text-center dark:text-gray-stone">© 2023 <a href="https://flowbite.com/" className="hover:underline">FlowN™</a>. All Rights Reserved.</span>
          </div>
      </footer>


  )
}