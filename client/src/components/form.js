import { useState } from 'react';

const Form = (props) => {

    const [message, setNewMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.sendNewMessage(message)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Send a message</h2>
            <div className='form'>
                <textarea 
                cols="50" 
                rows="10" 
                placeholder='Type your message here' 
                value={message} 
                onChange={(e) => setNewMessage(e.target.value)}></textarea>
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default Form;