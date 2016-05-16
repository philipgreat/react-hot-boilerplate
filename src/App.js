import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 100};
    this.tick = this.tick.bind(this);
    this.version = this.version.bind(this);
    this.items = this.items.bind(this);
    
  }
  
  render() {
    return this.version();
  }
  
  tick(){
    //console.log("tick called" + this.state.count);
    //this.state.counter +=1;
    this.setState({count: this.state.count + 1});
    //this.render();
  }
  version(){
    console.log("this version called");
   
    return (<div>this shoud be called at this level:{this.items()}</div>);
    
  }
  items(){
     var list = [
       {"count":1},
       {"count":2},
       {"count":3},
       {"count":5}
       ];
  
     return list.map(function(line) {
            return (<div >{line.count}</div>);
        });
  }

  
}
