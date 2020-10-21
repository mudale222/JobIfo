import React, { useEffect, useState, useReducer } from 'react'

const blablaData = {
    first: ["טבלאות שכר פופולריות", "טבלאות שכר", "טבלאות שכר תוכנה", "טבלאות שכר שיווק", "טבלאות שכר אינטרנט", "טבלאות שכר חומרה", "טבלאות שכר ביומד"],
    second: ["דרושים הייטק", "דרושים הייטק", "משרות הייטק", "דרושים בכירים", "פורום עבודה בהייטק", "דרושים תוכנה", "דרושים אינטרנט", "דרושים חומרה", "דרושים תשתיות"],
    third: ["מידע חשוב", "חברת השמה", "חברות השמה הייטק", "הכנה לראיון עבודה", "חברות הייטק", "השמת בכירים", "אודותינו", "צור קשר", "מידע למועמד"]
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContiner container text-center pt-5">

                <div className="footerSocialMedia">
                    <div className="iconContainer mr-5">
                        <i className="fa fa-facebook-f mr-5"></i>
                    </div>
                    <div className="iconContainer">
                        <i className="fa fa-linkedin"></i>
                    </div>
                </div>

                <div className="footerBlabla row px-5 mt-5">
                    <div className="blabla3 col">{blablaData.third.map(el => <a>{el}</a>)}</div>
                    <div className="blabla2 col">{blablaData.second.map(el => <a>{el}</a>)}</div>
                    <div className="blabla1 col">{blablaData.first.map(el => <a>{el}</a>)}</div>
                </div>
            </div>

            <div className="coenerImgs pb-5 pl-5">
                <img src="/cornerImg.png" alt="" className="cornerImg1" />
                <img src="/cornerImg2.png" alt="" className="cornerImg2 ml-3" />
            </div>

        </div >
    )
}

export default Footer