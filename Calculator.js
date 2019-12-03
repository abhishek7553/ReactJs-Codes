import React from 'react';

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
            this.state={
                a:0,
                b:0,
                c:0,
                d:'_',
                e:'='
            }
        }
    handleInput1=(e)=>{
        console.log(e.target.value)
        this.setState({
          a:e.target.value
        })
      }
      handleInput2=(e)=>{
        console.log(e.target.value)
        this.setState({
          b:e.target.value
        })
      }
      handleClick1=()=>{
        this.setState({
         c:parseInt(this.state.a) + parseInt(this.state.b),
         d:'+'
       })
       }
     
       handleClick2=()=>{
        this.setState({
         c:parseInt(this.state.a) - parseInt(this.state.b),
         d:'-'
       })
       }

       handleClick3=()=>{
         this.setState({
          c:parseInt(this.state.a) * parseInt(this.state.b),
          d:'*'
        })
        }

        handleClick4=()=>{
          this.setState({
           c:parseInt(this.state.a) / parseInt(this.state.b),
           d:'/'
         })
         }

    render(){
        return(
            <div>
                <h1>Calculator:</h1>
                <input onChange={this.handleInput1}/>
                <input onChange={this.handleInput2}/>
                <br></br>
                <button onClick={this.handleClick1}>ADD</button>
                <button onClick={this.handleClick2}>SUB</button>
                <button onClick={this.handleClick3}>MUL</button>
                <button onClick={this.handleClick4}>DIV</button>
                <br></br>
                {this.state.a}
                {this.state.d}
                {this.state.b}
                {this.state.e}
                {this.state.c}
               
            </div>
        )
    }     
}