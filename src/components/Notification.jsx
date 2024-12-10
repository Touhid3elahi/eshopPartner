import React from 'react';

const NotificationIcon = () => {
    const notificationCount = 5; // Replace with dynamic count if needed

    return (
        <div style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}>
            {/* Bell Icon */}
            <span style={{ fontSize: '20px' }}>🔔</span>

            {/* Notification Badge */}
            {notificationCount > 0 && (
                <span
                    style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        background: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '3px 5px',
                        fontSize: '9px',
                        fontWeight: 'bold',
                    }}
                >
                    {notificationCount}
                </span>
            )}
        </div>
    );
};

export default NotificationIcon;
