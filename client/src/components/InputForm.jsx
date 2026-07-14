import { useState } from 'react';



const InputForm = () => {
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

            console.log(responseData);
        } catch (error) {
            console.log(`Request Failed: ${error}`);
        }
    }

    return(
        <div>
            <form onSubmit={getFormData} method="POST">
                <label htmlFor="card_number">Card Number</label>
                <input type="text" name="card_number"/>
                <button type="button">BIN Lookup</button>
            </form>
        </div>
    )
};




export { InputForm };