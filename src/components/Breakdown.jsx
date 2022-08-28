import Category from "./Category";
import { Component } from "react";
import '../styles/breakdown.css'
class Breakdown extends Component{
   
    render(){
        return (
            <div className="tableCon">
                <table>
            <tr>
              <th>Cotegory</th>
              <th>total Amount</th>
            </tr>
                {this.props.categories.map(c=> <Category  category={c}/>)}
                </table>
            </div>
            
        )
    }
}
export default Breakdown