import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './comonents/MainHeader';
import NewEntryForm from './comonents/NewEntryForm';
import DisplayBalance from './comonents/DisplayBalance';
import DisplayBalances from './comonents/DisplayBalances';
import EntryLine from './comonents/EntryLine';


function App() {
  return (
    <div className="App">
      <Container>
        <MainHeader title="Budget" />
        <DisplayBalance title='Your Baluance' value='123' color='black' size='small' />
        <DisplayBalances />

        <MainHeader title="History" type='h3' />
        <EntryLine title='something3' value='123'/>
        <EntryLine title='something2' value='123' isExpense/>
        <EntryLine title='something' value='123'/>

        <MainHeader title="Add new transaction" type='h3' />
        <NewEntryForm />
      </Container>
    </div>
  );
}

export default App;
