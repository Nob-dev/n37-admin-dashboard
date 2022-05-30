import React from "react";
import dateFormat from "dateformat";
import {BsPencilSquare, BsTrash} from "react-icons/bs";
import { Link } from "react-router-dom";


export default function PostCard({ post, onDeleteClick }) {
    if (!post) return null
    const  { title, thumbnail, tags, meta, createdAt, slug } = post
  return (
    <div className="border rounded-lg group bg-white shadow-sm overflow-hidden flex flex-col">
        <img className=" h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out " src={thumbnail || './blank.jpg'} alt={title} />
        <div className="p-2 flex-1 flex-col justify-between">
        <h1 className="text-lg font-semibold text-gray-700">{title}</h1>
        <p className="text-gray-500">{meta.substring(0, 80) + "..."}</p>

        <div className="flex justify-between py-2">
        <p className="text-gray-500 text-sm">
            {dateFormat(createdAt, "mediumDate")}
            </p>

        <p className="text-gray-500 text-sm">{tags.join(', ')}</p>
        </div>
        <div className="flex space-x-3">
            <Link to={`/update-post/${slug}`} 
            className="w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-600 flex justify-center items-center text-white"
            >
                <BsPencilSquare />
            </Link>
            <button 
            onClick={ onDeleteClick}
            className="w-8 h-8 rounded-full bg-red-400 hover:bg-red-600 flex justify-center items-center text-white">
                <BsTrash />
            </button>
        </div>
    </div>
    </div>
  )
}
