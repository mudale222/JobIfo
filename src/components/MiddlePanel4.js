import React, { useEffect, useState, useReducer } from 'react'

const MiddlePanel4 = () => {
    return (
        <div className="middlePanel4">
            <div className="row container mx-auto text-right pt-5 justify-content-center">
                <div className="text1 col-35">
                    <h4> חברת השמה בהייטק</h4>
Jobinfo מתמחה בתהליכי איתור וגיוס מועמדים טכנולוגים. כחברת השמה אנו מלווים מעל 20 שנה מועמדים לכל אורך הקריירה, משלב היותם סטודנטים ועד הגעתם למשרות ניהוליות בכירות. חלק גדול מהמועמדים שליווינו חוזרים ומגייסים את הצוותים שלהם דרכנו.                    </div>

                <div className="text2 col-35 mr-5">
                    <b>הירשמו לאתר Jobinfo ותוכלו להיחשף לעשרות משרות חדשות הנפתחות מידי יום</b> בתחומים: תוכנה, אינטרנט, חומרה, תקשורת, אבטחת מידע, ביומד, מערכות מידע (DBA), כספים, שיווק ומכירות, רכש ותפעול. ניתן לפנות בקלות על ידי הרשמה וטעינת קורות חיים חד פעמית.
                    </div>

                <div className="text3 col-35 mr-5">
                    <b> למה חברות השמה?</b> כחברת השמה להייטק אנו מבינים את החשיבות של תכנון הקריירה שלכם. העבודה לפי צוותי התמחות בשילוב מידע אודות דרישות החברות המגייסות מאפשרים לנו לקדם אתכם לשלב הבא ולהתבלט מבין כל המועמדים. עם לקוחותינו נמנות חברות מובילות בתעשיות ההייטק והביומד, סטרטאפים, חברות בינלאומיות ומרכזי פיתוח הפועלים בארץ.                    </div>

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

export default MiddlePanel4