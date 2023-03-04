import './App.css';
import Form from './components/form';
import Display from './components/display';
import { useState } from 'react';

function App() {

  const [message, setMessage] = useState("Nothing to display")

  // THIS FUNCTION (SENDMAIL) IS PASSED TO THE FORM AS SENDNEWMESSAGE 
  // => THEN TAKES IN AN ARGUMENT ON THE FORM COMPONENT SIDE
  // THE FORM COMPONENT CREATES ITS' OWN USESTATE FOR THE MESSAGE 
  // => THEN THE SETTER TAKES IN THE VALUE FROM THE ONCHANGE IN THE TEXTAREA/INPUT
  // => THEN THE GETTER IS PASSED THROUGH THE SUBMITHANDLER TO THE PROPS.FUNCTION
  // ALAS, THE MESSAGE VALUE FROM THE FORM IS RETURNED TO THE APP
  // => THEN THAT MESSAGE IS PASSED AS PROPS TO THE DISPLAY COMPONENT FOR IT TO BE USED
  const sendMail = (newMessage) => {
    setMessage(newMessage)
  }

  return (
    <div className="App">
      <Form sendNewMessage={sendMail} />
      <Display message={message} />
    </div>
  );
}

export default App;
