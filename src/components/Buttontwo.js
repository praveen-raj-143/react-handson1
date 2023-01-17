import React, {Component} from 'react'

class Buttontwo extends Component{
  render(){
    return(
      <div className="component2">
    <h1>This is created using functional component</h1>
    <p className="text">This is done using external CSS</p>
     <p style={{color: "blue"}}>This is done using inline CSS</p>
   </div>
    )
  }
}
// function Buttontwo(){
//     return(
// <div className="component2">
//     <h1>This is created using functional component</h1>
//     <p className="text">This is done using external CSS</p>
//     <p style={{color: "blue"}}>This is done using inline CSS</p>
//   </div>
//     )
// }
 export default Buttontwo ;