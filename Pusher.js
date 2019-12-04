import React from 'react';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            arr: [],
            arr2:[]
        }
    }
    handleInput = (e) => {
        console.log(e.target.value)
        this.setState({
            a: e.target.value
            
    })
}
handleClick = () => {
    this.state.arr.push(this.state.a)
    this.setState({
        arr: this.state.arr
               }    )
        }
  
removeIndex1=(s)=>{
    var index=this.state.arr.indexOf(s);
    this.state.arr2.push(s)
    this.state.arr.splice(index,1);
    this.setState({
        arr:this.state.arr,
        arr2:this.state.arr2
    })
}

removeIndex2=(s)=>{
    var index=this.state.arr2.indexOf(s);
    this.state.arr.push(s)
    this.state.arr2.splice(index,1);
    this.setState({
        arr:this.state.arr,
        arr2:this.state.arr2
    })
}

render(){
    return (
        <div>
            <input onChange={this.handleInput} />
            <button onClick={this.handleClick}>
                PUSH
                </button>
            <br/>
            <div style={{backgroundColor:"#ff0000", width:"50%",display:"inline-block"}}>
                {this.state.arr.map((s) => (
                          
                <button onClick={this.removeIndex1.bind(this,s)}>
                    {s}
                    <br/>
                </button>
                 ) )}
                 </div>
                 <div style={{backgroundColor:"#09d3ac", width:"50%",display:"inline-block"}}>
                 {this.state.arr2.map((s)=>(
                    <button onClick={this.removeIndex2.bind(this,s)}>
                    {s}
                    <br/>
                </button>
                 
                 ))}
                  </div>


        </div>
    )
}
    
}