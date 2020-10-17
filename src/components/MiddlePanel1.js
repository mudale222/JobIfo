import React, { useEffect, useState, useReducer } from 'react'
import Card from './Card'
import Carousle from "./Carousle"
import JobBanner from './JobBanner'

let cardsData = [
    {
        title: "", list: [], imgUrl: "/card5Img.png", withPlus: false, isOnlyImg: true
    },
    {
        title: "פנייה אישית", list: ["חברות הייטק", "ביוטק", "יוצאי יחידות טכנולגיות", "מהנדסים", "מתכנתים"],
        imgUrl: "/card4Img.jpg", withPlus: true, isOnlyImg: false
    },
    {
        title: "טבלאות שכר", list: ["בכירים", "ביומד", "חומרה", "אינטרנט ", "תוכנה"],
        imgUrl: "/card3Img.gif", withPlus: true, isOnlyImg: false
    },
    {
        title: "בכירים", list: ["משרות בכירות", "מגמות שוק"],
        imgUrl: "/card2Img.jpg", withPlus: true, isOnlyImg: false
    },
    {
        title: "מידע למועמדים", list: ["חברות הייטק", "מגמות שוק", "פודקסטים", "פורום קריירה", "פורום דיני עבודה"],
        imgUrl: "/card1Img.jpg", withPlus: false, isOnlyImg: true
    }
]

const MiddlePanel1 = () => {
    let counter = 0;
    return (
        <div className="middlePanel1">
            <div className="row pt-4 justify-content-center" id="cardsRow">
                {cardsData.map(card => {
                    counter++
                    return (<div id={"card" + counter} key={"card" + counter} className="col-lg-2 cardContainer"><Card data={card} /></div>)
                })}
            </div>
            <Carousle />
            <JobBanner />
        </div>
    )
}

export default MiddlePanel1