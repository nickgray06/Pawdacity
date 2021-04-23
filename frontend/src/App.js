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
import {auth} from './firebase'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.updateWalker = this.updateWalker.bind(this)
  }

  state = {
    walkers: []
  }

  componentDidMount(){
    auth.onAuthStateChanged(userAuth => {
      this.setState({ user: userAuth});
    });
    fetch('http://localhost:3000/walkers')
      .then(resp => resp.json())
      .then(walkers => this.setState({
        walkers
      }))
  }

  updateWalker(updatedWalker){
    
        const newWalkers = this.state.walkers.map((walker) => {
          if(walker.id === updatedWalker.id){
            return updatedWalker
          }else{
            return walker
          }
        })
        this.setState({walkers: newWalkers})
      }
  

  render() {
    console.log(this.state.user)
    return (
      <div>
        <Router>
      <nav className="topnav">
        <div>
        <Link to="/" className="link">Home</Link>  
        {this.state.user ? <Link to="/cat-walkers" className="link">Cat Walkers</Link> : ""}
        <Link to="/about" className="link">About</Link>
        </div>
        <div>
        {!this.state.user && <Link to="/signup" className="link">Sign Up</Link>}
        {!this.state.user && <Link to='/login' className="link">Log In</Link>}
        {this.state.user && <Link to='/profile' className="link">Profile</Link>}
        
        </div>
      </nav>
        <AuthProvider>
        <Switch>
          <Route exact path="/"><PageHome/></Route>
          <PrivateRoute path="/cat-walkers"><WalkerContainer walkers={this.state.walkers} updateWalker={this.updateWalker} /></PrivateRoute>
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
    
      {/* <div className="footer">Here's a footer</div> */}

    </Router>
        {/* <WalkerContainer /> */}
      </div>
    )
  }
}

