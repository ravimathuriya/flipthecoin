import React, { Component } from 'react'


export default class Flipcoin extends Component {

    static defaultProps = { 
        coins: [ 
            // Sides of the coin 
            { 
                side: 'head',  
                imgSrc: "https://vixenindia.in/wp-content/uploads/2022/01/HEAD-TAIL-TOSSING-COIN-1.jpg"
            }, 
            { 
                side: 'tail',  
                imgSrc: "https://vixenindia.in/wp-content/uploads/2022/01/HEAD-TAIL-TOSSING-COIN.jpg"
            } 
        ] 
    } 

    constructor(props){
        super(props)
        this.state = {
            currface :null,
            totalflip:0,
            heads:0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    choice = (arr) =>{
        const randomindex = Math.floor(Math.random()*arr.length)
        
        return (arr[randomindex])
    }

    flipcoin = () =>{
        const newface = this.choice(this.props.coins)
        const totalflip = this.state.totalflip
        const heads = this.state.heads + (newface.side==="head" ? 1 : 0)
        this.setState({
                currface:newface.imgSrc,
                totalflip: (totalflip + 1),
                heads:heads
        })
    }

    handleClick = () =>{
        this.flipcoin()    
    }

  render() {
    return (
      <div className='container my-3'>
        <h1>Let's flip the coin</h1>
         {this.state.currface != null ? <img src={this.state.currface} alt="img" /> : ""}   
        <button className="btn btn-primary my-3" onClick={this.handleClick}>Flip Me!</button> 
                <p> 
                    Out of {this.state.totalflip} flips, there have been {this.state.heads} heads 
                    and {this.state.totalflip-this.state.heads} tails 
                </p> 
            
      </div>
    )
  }
}
