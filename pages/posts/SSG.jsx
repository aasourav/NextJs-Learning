import React from 'react'

const Static = (props) => {
  return (
    <div>
      {props.quotes.map(data=><p key={Math.random()}>{data.quote}</p>)}
    </div>
  )
}

export async function getStaticProps(){
  const Res = await fetch('https://dummyjson.com/quotes')
  const data = await Res.json()

  console.log('SSG')
  return {
    props:{
      quotes : data.quotes
    }
  }
}


export default Static