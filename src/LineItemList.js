import React, { Component } from 'react';

export default class LineItemList extends Component
{

    
    constructor(props) {
		super(props);
        this.state = props
        this.renderLineItemList = this.renderLineItemList.bind(this)
        //this.refresh = this.refresh.bind(this)
	}

    componentWillReceiveProps( nextProps){

        console.log("will change to "+nextProps)
        this.state = nextProps
    }

    renderLineItemList(lineItemList){
    
     var list =  lineItemList.map(function(lineItem) {
        return (
          <div key={lineItem.id}> {lineItem.id} - {lineItem.skuId} {lineItem.skuName} AMT: {lineItem.amount}</div>
        );
    });
    return  list
    
  }
    
    render() {
        console.log("render called from line item list")
       
        return (
          <div> { this.renderLineItemList(this.state.lineItemList)} </div>
        )

    }

}


