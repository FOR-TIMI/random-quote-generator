import React, { Component } from 'react'
import './QuoteBox.css';


class QuoteBox extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.getQuoteBoxText()
    }

    getQuoteBoxText(){
      const url = 'https://type.fit/api/quotes'
      // this.setQuoteBoxText(data)

      fetch(url)
        .then(res => res.json())
        .then(data => {
           data = data[Math.floor(Math.random() * data.length)]
           this.setQuoteBoxText(data)
        })
          
    }



    setQuoteBoxText(data){
      const text = document.querySelector('#text');
      const author = document.querySelector('#author');
      const tweetTag = document.querySelector('#tweet-quote');

      tweetTag.setAttribute('href',`twitter.com/intent/tweet?text=${data.text}`)
      text.innerHTML = data.text
      author.innerHTML = data.author

    }

        
    randColor(){
      const colors = [ '#16a085','#27ae60', '#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];
      return colors[Math.floor(Math.random()*colors.length)]
    }
    
    render(){
            
      let randomColor = this.randColor();
       

        
        return(
           
            <div id="quote-box" style={{color : randomColor}}>
            <style>{`body { background-color:${randomColor};} .button{background-color:${randomColor}`}</style>
            <div className="quote-text">
              <i className="fa fa-quote-left"> </i><span id="text">If you want your children to turn out well, spend twice as much time with them, and half as much money.</span>
            </div>
            <div className="quote-author">- <span id="author">matt damon</span></div>
              <div className="buttons">
              <a
                className="button"
                id="tweet-quote"
                title="Tweet this quote!"
                target="_top"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="button"
                id="tumblr-quote"
                title="Post this quote on tumblr!"
                target="_blank"
              >
                <i className="fa fa-tumblr"></i>
              </a> 
           <button className="button" onClick={this.handleClick} id="new-quote">New quote</button>
              
            </div>
          </div>
        )
    }
}

export default QuoteBox