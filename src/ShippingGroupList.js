import React, { Component } from 'react';

export default class ShippingGroupList extends Component
{

    
    constructor(props) {
		super(props);
        this.state = props
        this.renderShippingGroupList = this.renderShippingGroupList.bind(this)
        //this.refresh = this.refresh.bind(this)
	}

  renderShippingGroupList(shippingGroupList){
    
     var list =  shippingGroupList.map(function(shippingGroup) {
        return (
          <div key={shippingGroup.id}> {shippingGroup.id} - {shippingGroup.name} - {shippingGroup.amount}</div>
        );
    });
    return list
  }
    
    render() {
        console.log("render called")
       
        return (
          <div> { this.renderShippingGroupList(this.state.shippingGroupList)} </div>)

    }

}
