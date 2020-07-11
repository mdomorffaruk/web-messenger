import React,{useState,useEffect} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';
import Message from './Message.js';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


function App() {
  const classes = useStyles();

  const [input,setInput]=useState('');
  const [messages,setMessages]= useState([]);
  const [username,setUserName] = useState('');
  const [name,setName] = useState('');

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc=>({id: doc.id, message: doc.data()})))
    })
  },[])

  useEffect(() => {
    setUserName(prompt('Enter your username:'))
    setName(prompt("Enter your full name:"))
  }, [])


  //console.log(username);
  //console.log(name);

  const sendMessage = (event)=>{
    event.preventDefault();
    db.collection("messages").add({
      username: username,
      name: name,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }; 
  return (
    <div className="App">
      <h1>Assalamu-alaikum {name} ❤</h1>
      <h6>Join as {username===""? "Unknown user" : username}!</h6>
      <form className="app__form">
        <FormControl className='app__formControl'>
          <Input className="app__input"
            placeholder='Enter a message'
            value={input} 
            onChange={event=> 
            setInput(event.target.value)} />
            <IconButton 
              className="app__iconButton"
              disabled={!input} 
              variant="contained" 
              size="small"
              className={classes.margin}
              color="primary" 
              type="submit" 
              onClick={sendMessage}>
              <SendIcon/>
            </IconButton>
        </FormControl>
      </form>
      
     <FlipMove>
        {
          messages.map(({id,message})=>(
          <Message key={id} username={username} message={message}/>
          ))
        }
     </FlipMove>
    </div>
  );
}

export default App;
