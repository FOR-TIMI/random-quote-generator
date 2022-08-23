import React, { Component } from 'react'
import './QuoteBox.css';
import Buttons from './Buttons';

class QuoteBox extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
            

        
        return(
           
            <div id="quote-box">
                
            <div className="quote-text">
              <i className="fa fa-quote-left"> </i><span id="text">If you want your children to turn out well, spend twice as much time with them, and half as much money.</span>
            </div>
            <div className="quote-author">- <span id="author">matt damon</span></div>
            <Buttons/>
          </div>
        )
    }
}

export default QuoteBox