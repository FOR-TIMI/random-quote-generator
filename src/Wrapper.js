import React, { Component } from 'react'
import QuoteBox from './QuoteBox';


import './wrapper.css';


  class Wrapper extends Component{
    constructor(props){
        super(props);
    }


    render(){

  
        return(
         <div id="wrapper">
           <QuoteBox/>
           <div className="footer"><a href="https://github.com/FOR-TIMI/random-quote-generator">By Timi</a></div>
          </div>
        )
    }
  }

export default Wrapper