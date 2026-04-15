import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTimeline } from '../context/TimelineContext';
import { FaPhoneAlt, FaRegCommentDots, FaVideo } from 'react-icons/fa'; // আইকন ইমপোর্ট

const Details = () => {
    const { id } = useParams(); // URL থেকে ID নেওয়া
    const { addInteraction } = useTimeline();
    const [friend, setFriend] = useState(null);

    // JSON থেকে ডেটা লোড করা
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(f => f.id === parseInt(id));
                setFriend(found);
            });
    }, [id]);

    if (!friend) return <div className="text-center py-20">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* প্রোফাইল সেকশন */}
                <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
                    <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full mb-4 border-4 border-gray-100" />
                    <h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>
                    <div className="mt-2">
                        <span className={`text-white text-xs font-bold px-3 py-1 rounded-full uppercase ${friend.status === 'overdue' ? 'bg-red-500' : 'bg-green-600'}`}>
                            {friend.status}
                        </span>
                    </div>
                    <p className="italic text-gray-500 mt-4">"{friend.bio}"</p>
                    <p className="text-sm text-gray-400 mt-1 italic">Email: {friend.email}</p>
                </div>

                {/* স্ট্যাটাস ও ইন্টারঅ্যাকশন বাটন */}
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

                    {/* Quick Check-In বাটন যেখানে Timeline-এ ডেটা পাঠানোর ফাংশন আছে */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-6">Quick Check-In</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <button
                                onClick={() => addInteraction('Call', friend.name)}
                                className="flex flex-col items-center gap-3 py-6 border border-gray-100 rounded-2xl hover:bg-gray-50 transition active:scale-95">
                                <FaPhoneAlt className="text-xl text-gray-700" />
                                <span className="text-sm font-medium">Call</span>
                            </button>
                            <button
                                onClick={() => addInteraction('Text', friend.name)}
                                className="flex flex-col items-center gap-3 py-6 border border-gray-100 rounded-2xl hover:bg-gray-50 transition active:scale-95">
                                <FaRegCommentDots className="text-xl text-gray-700" />
                                <span className="text-sm font-medium">Text</span>
                            </button>
                            <button
                                onClick={() => addInteraction('Video', friend.name)}
                                className="flex flex-col items-center gap-3 py-6 border border-gray-100 rounded-2xl hover:bg-gray-50 transition active:scale-95">
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