import React from 'react'

const SSR = (props) => {
    return (
        <div>
          {props.quotes.map(data=><p key={Math.random()}>{data.quote}</p>)}
        </div>
    )
}

export async function getServerSideProps(){
    const Res = await fetch('https://dummyjson.com/quotes')
    const data = await Res.json()
    console.log('SSR')
    return {
      props:{
        quotes : data.quotes
      }
    }
}

export default SSR

