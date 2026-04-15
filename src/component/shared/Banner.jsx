import React from 'react';
import { HiPlus } from 'react-icons/hi'; // React Icon for 'Add a Friend'

const Banner = () => {
    // স্ট্যাটিক ডেটা যা কার্ডগুলোতে দেখাবে
    const stats = [
        { label: 'Total Friends', value: '10' },
        { label: 'On Track', value: '3' },
        { label: 'Need Attention', value: '6' },
        { label: 'Interactions This Month', value: '12' },
    ];

    return (
        <div className="bg-[#f9fafb] py-16 px-4 font-sans">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2e35] mb-4">
                    Friends to keep close in your life
                </h1>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Add Friend Button */}
                <button className="mt-8 bg-[#1a4335] hover:bg-[#2d6a4f] text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 mx-auto transition-all duration-300">
                    <HiPlus className="text-xl" />
                    Add a Friend
                </button>
            </div>

            {/* Stats Cards Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300"
                    >
                        <span className="text-4xl font-bold text-[#1a4335] mb-2">
                            {item.value}
                        </span>
                        <span className="text-gray-500 font-medium text-center">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;