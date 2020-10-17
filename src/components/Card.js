
import React, { useEffect, useState, useReducer } from 'react'

const ToggleCard = (e, isEnter) => {
    let element
    if (e.target.classList.contains("cardHover"))
        element = e.target
    else if (e.target.classList.contains("cardTopPart"))
        element = e.target.previousElementSibling;
    else if (e.target.classList.contains("cardBottomPart"))
        element = e.target.previousElementSibling.previousElementSibling;
    else if (e.target.classList.contains("cardPartsContainer"))
        element = e.target.firstElementChild;
    else {
        document.querySelectorAll(".cardHover").forEach(el => {
            if (!el.classList.contains("cardHoverToggle"))
                el.classList.add("cardHoverToggle")
            if (el.children.length > 0 && el.firstElementChild.classList.length > 0 &&
                el.firstElementChild.classList.contains("visible")) {
                el.firstElementChild.classList.remove("visible")
                el.firstElementChild.classList.add("invisible")
            }
        })
        document.querySelectorAll("h5").forEach(el => {
            if (el.classList.contains("cardTopHoverToggle"))
                el.classList.remove("cardTopHoverToggle")
        })
        return;
    }

    let cardTopTitle = element.nextElementSibling.firstElementChild

    if (isEnter && element.classList.contains("cardHoverToggle")) {
        element.classList.remove("cardHoverToggle")
        element.firstElementChild.classList.remove("invisible")
        element.firstElementChild.classList.add("visible")
        cardTopTitle.classList.add("cardTopHoverToggle")
    }
    else if (!isEnter && !element.classList.contains("cardHoverToggle")) {
        element.classList.add("cardHoverToggle")
        element.firstElementChild.classList.remove("visible")
        element.firstElementChild.classList.add("invisible")
        cardTopTitle.classList.remove("cardTopHoverToggle")
    }
}

const Card = (props) => {
    return (
        <>
            <div className="cardPartsContainer text-white text-center p-3"
                onMouseEnter={props.data.isOnlyImg ? () => { } : (e) => ToggleCard(e, true)}
                onMouseLeave={props.data.isOnlyImg ? () => { } : (e) => ToggleCard(e, false)}>
                <div className="cardHover cardHoverToggle">
                    <img src="/vector.png" className="vectorImg invisible" />
                    <ul>
                        {props.data.list.map(listItem => {
                            return (
                                <li key={listItem}>{listItem}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="cardTopPart">
                    <h5 className="display-4 cardTitle mb-2">{props.data.title}</h5>
                    {props.data.withPlus ? <p className="cardPlus">+</p> : ""}
                </div>
                <div className="cardBottomPart" style={{ backgroundImage: `url(${props.data.imgUrl})` }}>
                    <img src="/vector.png" className="vectorImg" />
                    {props.data.isOnlyImg && props.data.list.length > 0 ?
                        <ul>
                            {props.data.list.map(listItem => {
                                return (
                                    <li>{listItem}</li>
                                )
                            })}
                        </ul>
                        :
                        ""
                    }
                </div>
            </div>

        </>
    )
}

export default Card
