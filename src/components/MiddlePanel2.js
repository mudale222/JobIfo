import React, { useEffect, useState, useReducer } from 'react'
import FlatCard from './FlatCard'

const flatCardsData = [
    {
        title: "חומרה מולטידיספלינרי", link: "משרות חומרה", titleColor: "#fff", listColor: "#fff",
        cardColor: "#706D69", listHoverColor: "",
        list: ["Board Design", "מהנדס וריפיקציה", "Backend",
            "ASIC/VLSI", "מפתח אלגורתמים", "מהנדס מערכת", "מהנדס RF"]
    },
    {
        title: "אינטרנט", link: "משרות אינטרנט", titleColor: "#fff", listColor: "#202a68",
        cardColor: "#FB8E0F", listHoverColor: "#fff",
        list: ["מתכנת JavaScript","מתכנת Web","מתכנת PHP","ASP.NET","גרפיקאי/מעצב","מתכנת HTML","קידום אתרים"]
    },
    {
        title: "תוכנה", link: "משרות תוכנה", titleColor: "#202a68", listColor: "#202a68",
        cardColor: "#FFFFFF", listHoverColor: "#FFE1A7",
        list: ["מתכנת C#/.NET","מתכנת ++C","מפתח למובייל","מפתח אלגוריתמים","מתכנת JAVA","System Architect","RT/Embedded"]
    },
    {
        title: "למשרות הייטק נוספות", link: "", titleColor: "#FB8E0F", listColor: "",
        cardColor: "#D9D6D3", listHoverColor: "",
        list: []
    },
    {
        title: "משרות בכירות", link: "משרות בכירות", titleColor: "#fff", listColor: "#fff",
        cardColor: "#202A68", listHoverColor: "#FB8E0F",
        list: ["תוכנה","אינטרנט","חומרה","שיווק","מכירות"]
    },
    {
        title: "תשתיות", link: "משרות תשתיות", titleColor: "#fff", listColor: "#fff",
        cardColor: "#9D9892", listHoverColor: "",
        list: ["System Admin","System Manager","תמיכה טכנית","מומחה אבטחת מידע"]
    }
]

const MiddlePanel2 = () => {
    let counter=0
    return (
        <div className="middlePanel2">
            <div className="middlePanel2TitleContainer text-center  text-light container">
                <h1 className="middlePanel2Title t-white py-4">מצא משרות הייטק לפי תחום</h1>
                <div className="row justify-content-center">
                    {flatCardsData.map(flatCardData => {
                        counter++
                        return (
                            <div id={"flatCard" + counter} key={"flatCard" + counter} className="col-lg-4 flatCardContainer p-0 border-0">
                                <FlatCard data={flatCardData} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MiddlePanel2