import { Container } from '@material-ui/core'
import React from 'react'
import { AuthProvider } from '../contexts/AuthContext'
import background from '../images/cat-bg.jpg'
import SignUp from './SignUp'

export default function PageHome() {
  return (
    <div className="home" style={{backgroundImage: `url(${background})`, height: "100vh", backgroundSize: "cover", margin: "0", padding: "20px" }}>
      <h1 className="main">Welcome to Pawdacity</h1>
      <h3 className="subheader">"Your only source for the pRRRfect cat walker."</h3>
    </div>
  )
}
