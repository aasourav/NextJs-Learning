import React from 'react'
import { useRouter } from 'next/router'
import { execOnce } from 'next/dist/shared/lib/utils';

const Users = (props) => {
    // console.log(props.user.length)
    const router = useRouter();
    const {id} = router.query;
  return (
    <div>{props.user.length >0 ? props.user[0].body:null}</div>
  )
}

export async function getStaticPaths(){
    const Res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await Res.json()
    
    const paths = data.quotes.map(quote=>({
        params: {id: quote.id}
    }))

    return{ paths, fallback:false}
}

// export async function getStaticProps({params}){
//     const Res = await fetch(`https://dummyjson.com/quotes?$[params.id]`)
//     const data = await Res.json()

//     return {
//         props:{
//           quotes : data.quotes
//         }
//     }
// }


/// SSR dynamic paging

// export async function getServerSideProps({params}){
//         const Res = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${params.id}`)
//         const data = await Res.json()

//         return{
//             props:{
//                 user: data
//             }
//         }
// }
export default Users