import React,{useState,useEffect} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';
import Message from './Message.js';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


function App() {
  const classes = useStyles();

  const [input,setInput]=useState('');
  const [messages,setMessages]= useState([
    {username:'babul01',name: "Babul", text:"hi therer"},
    {username:'sagor02',name:"Sagor", text:"Whats up"}
  ]);

  const [username,setUserName] = useState('');
  const [name,setName] = useState('');

  useEffect(() => {
    setUserName(prompt('Enter your username:'))
    setName(prompt("Enter your full name:"))
  }, [])


  //console.log(username);
  //console.log(name);

  const sendMessage = (event)=>{
    event.preventDefault();
    setMessages([
      ...messages, { username:username,name:name, text: input }
    ]);
    setInput('');
  }; 
  return (
    <div className="App">
      <h1>Assalamu-alaikum {name},</h1>
      <h6>Join successfully as {username}🙃!</h6>
      <form>
        <FormControl>
          <InputLabel>Enter message</InputLabel>
          <Input 
            value={input} 
            onChange={event=> 
            setInput(event.target.value)} />
          <Button 
            disabled={!input} 
            variant="contained" 
            size="small"
            className={classes.margin}
            color="primary" 
            type="submit" 
            onClick={sendMessage}>Send
          </Button>
        </FormControl>
        
      
      </form>
      
      {
        messages.map((message)=>(
        <Message username={username} message={message}/>
        ))
       }
    </div>
  );
}

export default App;
