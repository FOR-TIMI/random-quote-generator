import React, { Component } from 'react'
import QuoteBox from './QuoteBox';


import './wrapper.css';


  class Wrapper extends Component{
    constructor(props){
        super(props);
    }
    
     randColor(){
        const colors = [ '#16a085','#27ae60', '#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];
        return colors[Math.floor(Math.random()*colors.length)]
      }

    render(){
        const randomColor = this.randColor();

  
        return(
         <div id="wrapper">
         <style>{`body { background-color:${randomColor}; color: ${randomColor}; } .button{background-color:${randomColor}`}</style>
           <QuoteBox/>
           <div className="footer">by <a href="https://codepen.io/hezag/">Timi</a></div>
          </div>
        )
    }
  }

export default Wrapper