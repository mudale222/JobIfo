import React, { useEffect, useState, useReducer } from 'react'

const HiddenPanel = (props) => {
    return (
        <div className="hiddenPanel d-block d-lg-none">
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

export default HiddenPanel