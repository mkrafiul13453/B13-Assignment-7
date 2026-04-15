import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
    // ১. স্ট্যাটাস অনুযায়ী কালার অবজেক্টটি এখানে থাকতে হবে
    const statusColors = {
        "overdue": "bg-red-500",
        "on-track": "bg-green-600",
        "almost due": "bg-orange-400"
    };

    return (
        <Link to={`/details/${friend.id}`}>
            {/* ২. আমরা শুধু একটি মেইন ডিভ ব্যবহার করব */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-md hover:scale-[1.02] cursor-pointer">

                {/* প্রোফাইল পিকচার */}
                <img
                    src={friend.picture}
                    alt={friend.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-50"
                />

                {/* নাম ও সময় */}
                <h3 className="text-lg font-bold text-gray-800">{friend.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{friend.days_since_contact}d ago</p>

                {/* ট্যাগস */}
                <div className="flex gap-2 mb-4 flex-wrap justify-center">
                    {friend.tags.map((tag, index) => (
                        <span key={index} className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* স্ট্যাটাস ব্যাজ */}
                <span className={`${statusColors[friend.status] || 'bg-gray-500'} text-white text-[11px] font-semibold px-4 py-1 rounded-full capitalize`}>
                    {friend.status}
                </span>
            </div>
        </Link>
    );
}

export default FriendCard;