import React from 'react';
import appwriteService from "../appwrite/conf"
import {Link} from "react-router-dom"


function PostCard({$id, titile, featuredImage}) {

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rouded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={titile} className='rounded-xl' />
                </div>
                <h2
                className='text-xl font-bold'
                >{titile}</h2>
            </div>
        </Link>
    );
}

export default PostCard;