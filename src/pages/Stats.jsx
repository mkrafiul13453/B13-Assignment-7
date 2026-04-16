import React from 'react';
import { useTimeline } from '../context/TimelineContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
    const { interactions } = useTimeline();

    const dataCount = interactions.reduce((acc, curr) => {
        acc[curr.type] = (acc[curr.type] || 0) + 1;
        return acc;
    }, {});

    const chartData = [
        { name: 'Call', value: dataCount['Call'] || 0 },
        { name: 'Text', value: dataCount['Text'] || 0 },
        { name: 'Video', value: dataCount['Video'] || 0 },
    ];

    const COLORS = ['#1a4335', '#4ade80', '#fbbf24'];

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Interaction Statistics</h2>

                <div className="h-100 w-full">
                    {interactions.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            No data available. Add interactions from Details page.
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-3 gap-4 mt-10">
                    {chartData.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                            <p className="text-gray-500 text-sm">{item.name}</p>
                            <p className="text-2xl font-bold" style={{ color: COLORS[idx] }}>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;