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
                <div className="loginJoinJobAwait">
                    <div className="loginJoin">
                        <label htmlFor="" className="enter">כניסה</label>
                        <label htmlFor="" className="join">הצטרפות</label>
                    </div>
                    <div className="jobAwait">
                        <label htmlFor="" className="jobAwaitNumber">1049</label>
                        <label htmlFor="" className="jobAwaitNumber">משרות ממתינות לך</label>
                    </div>
                </div>
                <div className="menu">
                    <Burger />
                </div>
            </div>

            <div className="searchForJob row">
                <button className="searchForJobButton">חפש</button>
                <select className="custom-select searchForJobDropdown">
                    <option>כל האזורים</option>
                    <option>אזור דרום</option>
                    <option>אזור ירושלים</option>
                    <option>אזור השפלה</option>
                    <option>אזור חיפה</option>
                    <option>אזור הבקעה</option>
                    <option>אזור הטוסיק</option>
                </select>

                <input type="text" name="searchForJobText" className="searchForJobText" id="searchForJobText" placeholder="חפש משרה (לדוג' seo, אבטחת מידע,c++,java)" />

            </div>

            <div className="sendResumeContainer">
                <button className="sendResumeButton">
                    <img src="/origamiWhite.svg" className="origami" alt=""/>
                    <label htmlFor="" className="origamiText">שלח קו"ח אלינו</label>
                </button>
            </div>
        </div>
    )
}

export default TopPanel