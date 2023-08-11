import React from 'react'

export default function Nft({input}) {
  if (input == '') return
  return (
    <div className='nft'>
      <img src= {input.imagefile} alt='image'/>
      <h3>{input.name}</h3>
      <h4>{input.price} ETH</h4>
    </div>
  )
}
