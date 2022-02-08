import './App.css';
// import ContactCard from './Components/ContactCard/ContactCard';
// import AddEditContact from './Pages/AddEditContact/AddEditContact';
import {Switch,Route} from 'react-router-dom'
 import Footer from './Components/Footer/Footer';
// import Errors from './Pages/Errors/Errors';
import Navbarr from './Components/NavBar/Navbarr';
import ContactList from './Pages/ContactList/ContactList'
import AddEditContact from './Pages/AddEditContact/AddEditContact'
import Errors from './Pages/Errors/Errors'


function App() {
  return (
    <div className="App">  
    <Navbarr/>  
      <Switch>
        <Route exact path='/' component={ContactList}></Route>
        <Route exact path={['/addcontact','/editcontact/:id']} component={AddEditContact}></Route>
        <Route exact path='/*' component={Errors}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
