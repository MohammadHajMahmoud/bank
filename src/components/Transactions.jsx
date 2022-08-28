import React, { Component } from 'react';
import Transaction from './Transaction';
import '../styles/transaction.css'
class Transactions extends Component{
    render(){
        return(
            <table className='transactions'><tr>
                <th>Category</th>
                <th>Vendor</th>
                <th>Amount</th>
                <th></th>
            </tr>
                {this.props.transactions.map(t=> (<Transaction key={t._id}
                deleteTransaction={this.props.deleteTransaction} transaction={t}/>)
            )}</table>
            )
    }
}
export default Transactions
