import { useState } from 'react';

const InputForm = ({ onResponseReceived }) => {
    const [loading, setLoading] = useState(false);

    const getFormData = async(e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        submitFormData(data);
    }

    const submitFormData = async(data) => {
        const url = 'http://localhost:3000/lookup';

        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();

            if(typeof reponseData !== 'object'){
                onResponseReceived({ errorMessage: responseData });
            }
            onResponseReceived(responseData);
        } catch (error) {
            console.log(`Request Failed: ${error}`);
        }
    }

    return(
        <div className="form-container">
            <form onSubmit={getFormData} method="POST" className="centered-form">
                <label htmlFor="card_number">Card Number</label>
                <input type="text" name="card_number" className="input-field"/>
                <button type="submit" className="btn btn-primary">BIN Lookup</button>
            </form>
        </div>
    )
};

export { InputForm };