import React, { useState } from 'react'
import Nft from './Nft'
import './index.css'


//Dummy Data
const list = [
    {
        "name": "yellow#322",
        "imagefile": "./images/yellow-flower.jpeg",
        "price": 0.2,
        "isListed": true
    },
    {
        "name": "lotus#235",
        "imagefile": "./images/lotus.jpeg",
        "price": 0.6,
        "isListed": true
    },
    {
        "name": "rose#567",
        "imagefile": "./images/red-rose.jpeg",
        "price": 1.2,
        "isListed": true
    },
    {
        "name": "sunflower#462",
        "imagefile": "./images/sun-flower.jpeg",
        "price": 4.2,
        "isListed": true
    }
];



function NftList() {

    const [cart, setCart] = useState([])
    const [nftList, setNftList] = useState(list)
    //Buy handler
    function handleBuy(value) {

        if (value === '' || cart.includes(value)) return
        setCart((prevNft) => {
            return [...prevNft, value]
        })
    }
    //Pay handler
    function handlePay() {
        const newList = [...nftList];
        cart.map((ele) => {
            const index = newList.indexOf(ele);
            if (index > -1) {
                newList[index].isListed = false;
            }
        })
        setNftList(newList)
    }

    return (
        <div className='nft-div'>

            <div className='nft-list'>
                <h2>Notable Collections</h2>
                {nftList.map((element) => {
                    if (element.isListed) {
                        return (
                            <div className='nft-card'>
                                <Nft key={element.name} input={element} />
                                <button className='btn' onClick={() => handleBuy(element)}>Buy</button>
                            </div>
                        )
                    } else { return }

                })}

            </div>
            <div className='nft-cart'>
                <h2>Cart</h2>
                {cart.map((element) => {
                    return (
                        <div className='nft-card'>
                            <Nft key={element.name} input={element} />
                        </div>
                    )
                })}
                <h3>Total: {cart.reduce(function (acc, obj) { return acc + obj.price }, 0)} ETH</h3>
                <button className='btn' onClick={handlePay}>Pay</button>
            </div>

        </div>

    )
}

export default NftList;