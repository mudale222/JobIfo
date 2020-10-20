import React, { useEffect, useState, useReducer } from 'react'
import ImgCard from './ImgCard'

const imgCardsData = [
    { imgUrl: "/imgCard3.jpg", title:"מגייסים", circleColor:"#202A68" },
    { imgUrl: "/imgCard2.jpg", title:"המדריך לכתיבת קורות חיים", circleColor:"#FB8E0F" },
    { imgUrl: "/imgCard1.jpg", title:"מדריך וידאו למציאת עבודה", circleColor:"#CCC9C6" }
]

const MiddlePanel3 = () => {
    return (
        <div className="middlePanel3">
            <div className="middlePanel3Container row container mx-auto px-5">
                <div className="imgCard1 col-lg-4">
                    <ImgCard data={imgCardsData[0]} />
                </div>
                <div className="imgCard2 col-lg-4">
                    <ImgCard data={imgCardsData[1]} />
                </div>
                <div className="imgCard3 col-lg-4">
                    <ImgCard data={imgCardsData[2]} />
                </div>
            </div>
        </div>
    )
}

export default MiddlePanel3