import React, { useEffect, useState } from 'react';
import FriendCard from './FriendCard';

const AllFriends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setFriends(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Your Friends</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {friends.map(friend => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
};

export default AllFriends;