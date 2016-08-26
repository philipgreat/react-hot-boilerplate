import React, { Component } from 'react';

export default class PaymentGroupList extends Component
{

    
    constructor(props) {
		super(props);
        this.state = props
        this.renderPaymentGroupList = this.renderPaymentGroupList.bind(this)
        //this.refresh = this.refresh.bind(this)
	}

  renderPaymentGroupList(paymentGroupList){
    
     var list =  paymentGroupList.map(function(paymentGroup) {
        return (
          <div key={paymentGroup.id}> {paymentGroup.id} - {paymentGroup.name} - {paymentGroup.cardNumber}</div>
        );
    });
    return list
  }
    
    render() {
        console.log("render called")
       
        return (
          <div> { this.renderPaymentGroupList(this.state.paymentGroupList)} </div>)

    }

}