import React, { useEffect, useState } from 'react'
function Detail() {
    let {id}=iseParams();

const [data,setData]=useState (" http://localhost:3000/product"+id)
    .then(res=>res.json())
    .then(data=>setData(data))
}, [id])
  return (
   <>
   <h1>Detail Page</h1>
   <ol type='I'>
    <li>{data.name}</li>
    <li>{data.quantityPerUnit}</li>

   </ol>
   </>
  )
  }

export default Detail
