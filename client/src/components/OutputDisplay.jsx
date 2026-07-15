import { useState } from 'react';

const OutputDisplay = ({ cardData }) => {
    const CanBeSurcharged = () => {
        if("DebitCard" in cardData || cardData.Status === 'NotFound'){
            return (
                <h3 className="status-banner banner-error">Cannot be surcharged</h3>
            )
        } else {
            return(
                <h3 className="status-banner banner-success">Can be surcharged</h3>
            )
        }
    }

    if (!cardData) {
        return(
            <div className="welcome-container">
                <h3 className="welcome-text">Enter a Card Number</h3>
            </div>
        ) 
    }

    // 2. Strict check for plain objects (rejects strings, arrays, etc.)
    if (typeof cardData !== 'object' || Array.isArray(cardData)) {
        return (
            <div className="welcome-text">
                <h3>Express Response Message</h3>
                <p>{String(cardData)}</p>
            </div>
        );
    }
        
    return (
        <div className="results-container">
            <h3 className="section-title">Status</h3>
            {/* Optional chaining prevents crashes if Status is missing */}
            <p className="status-text">{cardData?.Status || 'N/A'}</p> 
            
            {Object.entries(cardData)
                .filter(([key]) => key && key.includes('Card'))
                .map(([key, value]) => (
                    <div key={key} className="detail-item">
                        <span className="detail-key">{key}</span>
                        <span className="detail-value">{value === 'Y' ? 'Yes' : 'No'}</span>
                    </div>
            ))}

            <CanBeSurcharged />
            
        </div>
    );

    
};

export { OutputDisplay };