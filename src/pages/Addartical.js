import React from 'react'

export default function Addartical() {
  return (
    <div>
        <div className="min-h-screen flex items-top justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add a  New Artical</h2>
        </div>
        <form  className="mt-8 space-y-6" method="post">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="bookname" className="sr-only">Title</label>
              <input id="bookname" name="username" type="text"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Title"   />
            </div>
            <br/>
            <div>
              <label htmlFor="content" className="sr-only">Content</label>
              <input id="content" name="text-area" type="text"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Content"   />
            <br/>    
                
           
            </div>
          </div>

          <div>
            <button  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Upload
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}
