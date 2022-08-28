import { Component}from "react";

class Category extends Component {
    
    render() {
        return( <tr className="catagory">
        <td>{this.props.category._id}</td>
        <td>{this.props.category.totalAmount}</td>
    
      </tr>   )
}
}
export default Category
