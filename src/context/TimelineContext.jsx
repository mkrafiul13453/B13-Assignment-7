import React, { createContext, useState, useContext } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [interactions, setInteractions] = useState([]);

    const addInteraction = (type, personName) => {
        const newInteraction = {
            id: Date.now(),
            type: type, 
            name: personName,
            date: new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }),
        };
        setInteractions((prev) => [newInteraction, ...prev]);
    };

    return (
        <TimelineContext.Provider value={{ interactions, addInteraction }}>
            {children}
        </TimelineContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTimeline = () => useContext(TimelineContext);