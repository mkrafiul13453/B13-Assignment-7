import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPhoneAlt, FaRegCommentDots, FaVideo, FaEdit } from 'react-icons/fa';

const Details = () => {
    const { id } = useParams(); // URL থেকে ID নেওয়া হচ্ছে
    const [friend, setFriend] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const foundFriend = data.find(f => f.id === parseInt(id));
                setFriend(foundFriend);
            });
    }, [id]);

    if (!friend) return <div className="text-center py-20">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* প্রোফাইল সেকশন (Left) */}
                <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
                    <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full mb-4 border-4 border-gray-100" />
                    <h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>
                    <div className="flex flex-col gap-2 mt-2">
                        <span className={`text-white text-xs font-bold px-3 py-1 rounded-full uppercase ${friend.status === 'overdue' ? 'bg-red-500' : 'bg-green-600'}`}>
                            {friend.status}
                        </span>
                    </div>
                    <p className="italic text-gray-500 mt-4">"{friend.bio}"</p>
                    <p className="text-sm text-gray-400 mt-1 italic">Email: {friend.email}</p>
                </div>

                {/* স্ট্যাটাস ও অ্যাকশন (Right) */}
                <div className="md:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <h3 className="text-4xl font-bold text-[#1a4335]">{friend.days_since_contact}</h3>
                            <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <h3 className="text-4xl font-bold text-[#1a4335]">{friend.goal}</h3>
                            <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <h3 className="text-xl font-bold text-[#1a4335]">{friend.next_due_date}</h3>
                            <p className="text-gray-500 text-sm mt-1">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-6">Quick Check-In</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="flex flex-col items-center gap-3 py-6 border border-gray-100 rounded-2xl hover:bg-gray-50 transition">
                                <FaPhoneAlt className="text-xl text-gray-700" />
                                <span className="text-sm font-medium">Call</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 py-6 border border-gray-100 rounded-2xl hover:bg-gray-50 transition">
                                <FaRegCommentDots className="text-xl text-gray-700" />
                                <span className="text-sm font-medium">Text</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 py-6 border border-gray-100 rounded-2xl hover:bg-gray-50 transition">
                                <FaVideo className="text-xl text-gray-700" />
                                <span className="text-sm font-medium">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;