
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {

  const personName = {
    firstName : 'Bruce',
    lastName : 'Wayne'
  }

  const nameList = [
    {
      firstName : 'Bruce1',
      lastName : 'Wayne1'
    },
    {
      firstName : 'Bruce2',
      lastName : 'Wayne2'
    },
    {
      firstName : 'Bruce3',
      lastName : 'Wayne3'
    }

  ]

  const status = 'isLoading' 
  return (
    <div className="App">
      <Greet name="nikitha" messageCount={20} isLoggedIn={true}></Greet>
      <Person name ={personName}></Person>
      <PersonList names ={nameList}></PersonList>
      <Status status={status}></Status>
      <Heading>hello</Heading>
      <Oscar>
        <Heading>You got the oscar</Heading>
      </Oscar>
      <Greet name='niks' isLoggedIn={false}></Greet>
    </div>
  ); 
}

export default App;
