import React from 'react'

function MultiplicationTable() {
    let arr=[];
    function mul(n){
        for(let i=1;i<=10;i++){
            arr.push(n+" * "+i+" = "+n*i);
        }
    }
    mul(10);
  return (
    <div>
      {arr.map((n)=><h1 key={Math.random()}>{n}</h1>)}
    </div>
  )
}
export default MultiplicationTable;