import React from 'react';
import { useTimeline } from '../context/TimelineContext';

const Timeline = () => {
    const { interactions } = useTimeline();

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Timeline</h2>
            {interactions.length === 0 ? (
                <p>No interactions yet.</p>
            ) : (
                interactions.map((item) => (
                    <div key={item.id} style={{
                        border: '1px solid #ddd',
                        padding: '15px',
                        marginBottom: '10px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                    }}>
                        <span>{item.type === 'Call' ? '📞' : item.type === 'Text' ? '💬' : '🎥'}</span>
                        <div>
                            <strong>{item.type} with {item.name}</strong>
                            <div style={{ fontSize: '12px', color: '#666' }}>{item.date}</div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Timeline;