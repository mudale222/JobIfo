import React, { useEffect, useState, useReducer } from 'react'
import Burger from './Burger'
const TopPanel = () => {
    return (
        <div className="topPanel">
            <div className="topPanelTraingle"></div>

            <div className="topPanel-header row">
                <div className="companySloganAndIcon col">
                    <img className="row topPanelLogo-logo" src="/jobInfoLogo.png" alt="JobInfo"></img>
                    <span className="row topPanelLogo-text">הרבה מעבר לחברת השמה</span>
                </div>
                <div className="loginJoinJobAwait row mt-3 justify-content-between justify-content-lg-start">
                    <div className="jobAwait pr-3  d-none d-xl-block">
                        <label htmlFor="" className="jobAwaitText">משרות ממתינות לך</label>
                        <label htmlFor="" className="jobAwaitNumber">1049</label>
                    </div>
                    <div className="borderBetweenLogin pr-1 d-none d-xl-block"></div>
                    <div className="loginJoin ml-5">
                        <label htmlFor="" className="join pr-1">הצטרפות</label>
                        <div className="borderBetweenJoindAndEnter pr-1"></div>
                        <label htmlFor="" className="enter">כניסה</label>
                    </div>
                </div>
                <div className="menu">
                    <Burger />
                </div>
            </div>

            <div className="hiddenBorderBetweenLogin pr-1 d-none d-xl-block"></div>
            <div className="hiddenJobAwait d-none">
                <div className="jobAwait pr-3">
                    <h1 className="jobAwaitNumber display-2">1049</h1>
                    <label htmlFor="" className="jobAwaitText">משרות ממתינות לך</label>
                </div>
            </div>

            <div className="searchForJob row">
                <button className="searchForJobButton ">חפש</button>
                <select className="custom-select searchForJobDropdown">
                    <option>כל האזורים</option>
                    <option>אזור דרום</option>
                    <option>אזור ירושלים</option>
                    <option>אזור השפלה</option>
                    <option>אזור חיפה</option>
                    <option>אזור הבקעה</option>
                    <option>אזור הטוסיק</option>
                </select>

                <input type="text" name="searchForJobText" className="searchForJobText" id="searchForJobText"
                    placeholder="חפש משרה (לדוג' seo, אבטחת מידע,c++,java)" />

            </div>

            <div className="sendResumeContainer">
                <button className="sendResumeButton">
                    <img src="/origamiWhite.svg" className="origami" alt="" />
                    <label htmlFor="" className="origamiText">שלח קו"ח אלינו</label>
                </button>
            </div>
        </div>
    )
}

export default TopPanel