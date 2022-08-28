import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link}  from 'react-router-dom'
import Transactions from './components/Transactions';
import Operations from './components/Operations'
import Breakdown from './components/Breakdown'
import axios from 'axios';

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            categoriesAmount :[]
        }
    }
    async componentDidMount() {
        const transactions = await axios.get('http://localhost:5000/transactions')
        this.setState({data: transactions.data})
        console.log(transactions.data);
        const response = await axios.get(`http://localhost:5000/transactionssum`)
        this.setState({categoriesAmount : response.data}) 
    }
    addTransaction = async (transaction) => {
        const response = await axios.post('http://localhost:5000/transaction', transaction)
        this.setState({data: response.data})
    }
    deleteTransaction = async (id) => {
        const response = await axios.delete(`http://localhost:5000/transaction/${id}`)
        this.setState({data: response.data})
    }
    
    render() {
        return (
            <Router>  
                <div className="App">

                    <div className='links'>
                        <ul>
  <li><Link className='lin' to='/operations'>Operations</Link></li>
  <li><Link className='lin' to='/transactions'>Transactions</Link></li>
  <li><Link className='lin' to='/breakdown'>Brakedown</Link></li>
                    </ul>
                    </div>
                    
                    <Route exact path='/breakdown' render={()=> < Breakdown categories={this.state.categoriesAmount}/>} />
                 <Route exact path="/transactions" render={()=> <Transactions transactions ={this.state.data}
                        deleteTransaction={
                            this.deleteTransaction
                        }/>} />
                    <Route exact path="/operations" render={() => <Operations addTransaction={this.addTransaction} />} />
                </div>
            </Router>

        );
    }

}

export default App;
