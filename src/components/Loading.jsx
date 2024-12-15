import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
        </div>
    );
};

export default Loading;
