// import React from 'react'

// const Shoe = (props) => {
//     // console.log(props)

//     const handleClick = (id) => {
//         props.deleteShoe(id);
//         props.history.push("/shoes")
//     }

//     if (props.shoes && props.shoes.length >= 1) {
//         const shoe = props.shoes.find(shoe => shoe.id === parseInt(props.match.params.id, 10))
        
//         return (
//             <div id={shoe.id}>
//                 <h3>{shoe.name}</h3>
//                 <img src={shoe.picture} alt={shoe.name} height="250" width="300"/>
//                 <div>{shoe.color}</div>
//                 <div>{shoe.size}</div>
//                 <div>{shoe.condition}</div>
//                 <button onClick={() => handleClick(shoe.id)}>Delete Shoe</button>
//             </div>
//         )
//     }

//     return (
//         <div>
//            No Shoe Found 
//         </div>
//     )
// }

// export default Shoe;


import React, { Component } from 'react'
import EditShoe from './EditShoe'

class Shoe extends Component {

    handleDeleteClick = (id) => {
        this.props.deleteShoe(id);
        this.props.history.push("/shoes")
    }

    handleEditClick = (shoe) => {
        console.log(shoe)
        
    }

    
    render() {
        // console.log(this)
        if (this.props.shoes && this.props.shoes.length >= 1) {
            const shoe = this.props.shoes.find(shoe => shoe.id === parseInt(this.props.match.params.id, 10))
            
            return (
                <div id={shoe.id}>
                    <h3>{shoe.name}</h3>
                    <img src={shoe.picture} alt={shoe.name} height="250" width="300"/>
                    <div>{shoe.color}</div>
                    <div>{shoe.size}</div>
                    <div>{shoe.condition}</div>
                    <button onClick={() => this.handleDeleteClick(shoe.id)}>Delete Shoe</button>
                    <button onClick={() => this.handleEditClick(shoe)}>Edit Shoe</button>
                    <EditShoe shoe={shoe} brands={this.props.brands}/>
                </div>
            )
        } else {
            return (
                <div>
                    No Shoe Found
                </div>
            )
        }
    }
}

export default Shoe
