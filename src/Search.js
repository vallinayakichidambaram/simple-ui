import React from 'react'
import './index.css'

export default function Search() {
  return (
    <div className='search-bar'>
        <h2>OpenSea.io</h2>
        <div className='search-title'>
          <input type='text' placeholder='Search items, collections,..'></input>
          <button className='btn connect'>Connect Wallet</button>
        </div>
       
    </div>
  )
}
