import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Operations extends Component {
    constructor(){
        super()
        this.state={
            amount :"" ,
            vendor : '' ,
            category:''
        }
        
    }
    updateAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    }
    updateVendor = (event) => {
        this.setState({
            vendor : event.target.value
        })
    }
    updateCatagory = (event) => {
        this.setState({
            category : event.target.value
        })
    }
    addDepositTransaction = () => {
        this.props.addTransaction(this.state)
    }
    addWithdrawTransaction = () => {
        const t = { ...this.state }
        t.amount *= -1
        this.props.addTransaction(t)
    }
    render(){
        
        return(
            <div>
                <div className="inputs">
                <input type="text" id="amnt" value={this.state.amount} onChange={this.updateAmount} placeholder="amount"/>
                <input type="text" id="vend" value={this.state.vendor}  onChange={this.updateVendor} placeholder="vendor"/>
                <input type='text' id="cat"  value={this.state.category}  onChange={this.updateCatagory} placeholder="category"/>
            </div>
            <div className="buttons">
                <Link to='/transactions'>
                <button id="deposit" onClick={this.addDepositTransaction}> Depsoit</button>
                <button id="widthrow" onClick={this.addWithdrawTransaction}>Widthrow</button>
                </Link>
                
            </div>
            </div>
            
        )
    }
}
export default Operations