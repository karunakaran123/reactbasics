import React from 'react'

export default () => {
    let names=["harika","mounika","janaki","radhika","pravallika","renuka"];
  return (
    <div>
      {names.map((name)=><h2 key={Math.random()}>{name}</h2>)}
    </div>
  )
}
