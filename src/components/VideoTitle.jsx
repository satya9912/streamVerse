import React from 'react'

const VideoTitle = ({movie}) => {
  const {original_title, overview} = movie
  console.log(original_title)
  return (
    <div className="bg-black text-white p-8">
        <h3 className="text-4xl font-extrabold drop-shadow-lg mb-4">{original_title}</h3>
        <p className="w-1/2 text-gray-200 text-lg mb-6 line-clamp-3">{overview}</p>
        <div className="flex space-x-4">
          {/* Play Button with ▶ symbol */}
          <button className="flex items-center bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-300 transition duration-200 cursor-pointer">
            <span className="mr-2 text-lg">▶</span>
            Play
          </button>

          {/* More Info Button with ℹ symbol */}
          <button className="flex items-center bg-gray-700 bg-opacity-80 px-6 py-2 rounded-md text-white font-semibold hover:bg-gray-600 transition duration-200 cursor-pointer">
            <span className="mr-2 text-lg">ℹ</span>
            More Info
          </button>
        </div>
    </div>



  )
}

export default VideoTitle;