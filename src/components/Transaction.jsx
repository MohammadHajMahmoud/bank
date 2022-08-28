import '../styles/transaction.css'
const { Component } = require("react");
class Transaction extends Component{
    deleteTransaction = () => {
        const id = this.props.transaction._id
        this.props.deleteTransaction(id)
    }
    render(){
        let transaction = this.props.transaction 
        return(
            
                <tr className="transaction">
                    <td className="category">{transaction.category}</td>
                    <td className="vendor">  {transaction.vendor}</td>
                    <td id='amount' className={(transaction.amount>=500)?'moreThan500' : 'lessThan500'}>{transaction.amount} </td>
                    <td><button onClick={this.deleteTransaction}>Delete</button></td>
                </tr>
        )
    }
}
export default Transaction