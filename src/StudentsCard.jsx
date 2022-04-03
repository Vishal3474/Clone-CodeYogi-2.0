import React from "react";
import { ImTwitter } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';

function StudentsCard({user}) {
    return (
        <div>
            <div className="my-4 rounded-md shadow-sm w-72 ">
                 <img className="w-64 h-40 pt-2 mx-auto rounded-lg" src={user.picture.large } alt="" />
                 <div className="flex flex-col ml-4 space-y-2">
                    <div className="font-semibold">{user.name.title} {user.name.first} {user.name.last}</div>
                
                    <div className="font-semibold text-indigo-500">{user.location.city} <span>,</span> {user.location.country }</div>
                    <div className="flex pb-4 space-x-4">
                        <a href="https://www.twitter.com"><ImTwitter /></a>
                        <a href="https://www.instagram.com"><FaInstagram /></a>
                    </div>
                 </div>
                
            </div>
        </div>
    );
}

export default StudentsCard;