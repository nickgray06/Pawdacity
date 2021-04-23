import './App.css';
import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import WalkerContainer from './components/WalkerContainer';
import PageHome from './components/PageHome';
import About from './components/About';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

// const {currentUser} = useAuth()

// const stat

export default class App extends Component {

  state = {
    walkers: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/walkers')
      .then(resp => resp.json())
      .then(walkers => this.setState({
        walkers
      }))
  }

  updateWalker(updatedWalker){
    this.setState(({walkers}) => {
      return {
        walkers: walkers.map((walker) => {
          if(walker.id === updatedWalker.id){
            return updatedWalker
          }else{
            return walker
          }
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Router>
      <nav className="topnav">
        <Link to="/" className="link">Home</Link> : ""  
        <Link to="/cat-walkers" className="link">Cat Walkers</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/signup" className="link">Sign Up</Link>
        <Link to='/login' className="link">Log In</Link>
      </nav>
        <AuthProvider>
        <Switch>
          <Route exact path="/"><PageHome/></Route>
          <PrivateRoute path="/cat-walkers"><WalkerContainer walkers={this.state.walkers} /></PrivateRoute>
          <Route path="/about"><About/></Route>
          <Route path="/signup">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",}}>
              <div className="w-100" style={{ maxWidth: '400px'}}>
                <SignUp />
              </div>
            </Container>
          </Route>
          <Route path="/login">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",}}>
              <div className="w-100" style={{ maxWidth: '400px'}}>
              <Login />
              </div>
            </Container>
          </Route>
          <PrivateRoute path="/profile">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",}}>
              <div className="w-100" style={{ maxWidth: '400px'}}>
              <Profile/>
              </div>
            </Container>
          </PrivateRoute>
          <PrivateRoute path="/update-profile">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",}}>
              <div className="w-100" style={{ maxWidth: '400px'}}>
              <UpdateProfile/>
              </div>
            </Container>
          </PrivateRoute>
          <Route path="/forgot-password">
          <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",}}>
              <div className="w-100" style={{ maxWidth: '400px'}}>
              <ForgotPassword />
              </div>
            </Container>
          </Route>
        </Switch>
        </AuthProvider>
    
      <div className="footer">Here's a footer</div>

    </Router>
        {/* <WalkerContainer /> */}
      </div>
    )
  }
}

