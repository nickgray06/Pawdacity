import React from 'react'
import cat from '../gifs/cat-on-leash-1.gif'
import cat1 from '../gifs/forgot-walk.gif'
import cat2 from '../gifs/lazy-cat.gif'
import cat3 from '../gifs/creative-cat.gif'
import cat4 from '../gifs/learn-to-walk.gif'


export default function About() {
  return (
    <div style={{paddingRight: "2em"}}>
      <h1 style={{paddingTop: "2em", paddingBottom: "1em"}}> 5 Reasons to walk your cat</h1> <br></br>
      <h3>1. They love feeling the grass on their backs.</h3>
      <img src={cat} alt=""/> <br/>
      <h3>2. Sometimes they forget how to walk.</h3>
      <img src={cat1} alt=""/> <br/>
      <h3>3. They need some exercise right meow.</h3>
      <img src={cat2} alt=""/> <br/>
      <h3>4. It brings out their creativity.</h3>
      <img src={cat3} alt=""/> <br/>
      <h3>5. So they can walk their friends.</h3>
      <img src={cat4} alt=""/> <br/>
    </div>
  )
}
