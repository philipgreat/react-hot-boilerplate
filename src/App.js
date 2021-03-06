


import $ from "jquery";
import React, { Component } from 'react';
import LineItemList from './LineItemList.js'
import ShippingGroupList from './ShippingGroupList.js'
import PaymentGroupList from './PaymentGroupList.js'

export default class App extends Component {

  
  constructor(props) {
		super(props);
    this.state = props
    
    this.refresh = this.refresh.bind(this)
	}

  refresh()
  {

    console.log("refresh t1he pa1ge!")

    this.serverRequest = $.get(this.props.source, function (result) {
      //console.log(result)
      this.state = result
      console.log("request back from server" + result.lineItemList.length)
      //this.state.order = result["title"]
      this.forceUpdate()
    }.bind(this));


  }

  
    renderLineItemList(lineItemList){
    
     var list =  lineItemList.map(function(lineItem) {
        return (
          <div key={lineItem.id}> {lineItem.id} - {lineItem.skuId} {lineItem.skuName} AMT: {lineItem.amount}</div>
        );
    });
    return  list
    
  }

  componentDidMount(){
     console.log("componentDidMount")
     this.refresh()
  }
 

  render() {
    console.log("render called")
    if(this.state == this.props){
        return (
          <div>Wait for complete..{this.props.source} </div>)

    }

    return (
      <div><h1>{this.state.title} total: {this.state.totalAmount}
      <input type="button" value="refresh" onClick={this.refresh}/> </h1>
      <LineItemList lineItemList={this.state.lineItemList}/>
      <ShippingGroupList shippingGroupList={this.state.shippingGroupList}/>
      <PaymentGroupList paymentGroupList={this.state.paymentGroupList}/>
      {this.renderLineItemList(this.state.lineItemList)}
      </div>
      
    );
  }
}