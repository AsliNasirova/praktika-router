// import React from 'react'
// import Card from './Components/Card'

// const Home = () => {
//   return (
//     <>
//       <h1>Home page</h1>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illum molestias placeat corporis deserunt! Similique officiis ex quasi totam numquam esse. Ex tempore magnam explicabo corporis corrupti numquam voluptas expedita sequi excepturi perspiciatis. Repellat in ratione architecto illo optio consectetur quisquam quas deserunt porro corporis non officiis eveniet, nisi eaque, dolores, nesciunt itaque sed vitae consequuntur veniam numquam molestiae fugit voluptates? Non numquam eius dolores quia illum quae repellat. Sunt officiis similique modi beatae veritatis voluptatum nihil dolore libero tenetur officia exercitationem eum, recusandae a pariatur aspernatur nesciunt dolorum dolores perferendis quasi omnis earum inventore. Eos ea, qui itaque dolore incidunt rem beatae fuga accusamus eveniet quisquam explicabo, eius vel, quae necessitatibus cumque velit laborum nihil. Nostrum cum distinctio voluptas, quae necessitatibus sapiente id corrupti recusandae incidunt, ipsam fugit adipisci consequatur, molestiae inventore? Accusantium maxime perspiciatis rerum temporibus ratione iure corporis at distinctio harum? Facilis nam veniam deleniti delectus doloribus beatae dolorum consequatur cum, debitis esse et? Repellendus inventore unde amet excepturi distinctio, autem nisi? In ducimus dolorem aperiam aut ipsa quis odit ullam voluptates autem placeat, doloribus sed nobis nulla fugiat possimus quibusdam. Magni molestias, error doloribus nobis voluptates quia incidunt nesciunt repellat explicabo porro optio voluptatem sint corrupti?

     
//     </>
//   )
// }

// export default Home

import React from 'react'
import ShowApi from './Components/ShowApi'

const Home = ({category,image,name,color,size}) => {
    const [data,getProducts] = ShowApi()
    return (
    <div className='col-lg-9'>
        <div className='card'>
           {data && data.map((item)=>(
            <ul key={item.id}>
                <li><img src={item.image} alt="" /></li>
                <li>{item.category}</li>
                <li>{item.name}</li>
                <li>{item.color}</li>
                <li>{item.size}</li>
            </ul>
           ))}
        </div>
        </div>
    )
}

export default Home

