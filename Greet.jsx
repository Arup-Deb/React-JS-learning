import React from 'react'
const Greet = props =>
{
    const {name,heroName} = props
    //console.log(props)
    //props.name = 'Vishwas'
   return (
   <div>
   <h1>Hello {name}a.k.a {heroName}</h1>
 
   </div>
   )
}
export default Greet
