import { Route, Switch } from 'wouter';
import './App.css'
import Header from './components/Header.jsx'
import Homepage from './components/Homepage.jsx'
import Footer from './components/Footer.jsx'
import MyProjects from './components/Myprojects.jsx'
import ContactMe from './components/ContactMe.jsx'

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' component={Homepage} />
        <Route path='/projects' component={MyProjects} />
        <Route path='/contact' component={ContactMe} />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App
