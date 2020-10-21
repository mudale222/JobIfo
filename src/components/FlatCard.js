import React, { useEffect, useState, useReducer } from 'react'

const FlatCard = (props) => {
    return (
        <div className="flatCard">
            <div className="card" style={{ background: props.data.cardColor }}>
                <div className="card-body text-right mr-2">
                    <h4 className="card-title" style={{ color: props.data.titleColor }}>{props.data.title}</h4>
                    <ul id={props.data.id + "Ul"}>
                        {props.data.list.map(el => {
                            return (<li >
                                <a href="#" className="card-link" ket={el} style={{ color: props.data.listColor }}>{el}</a>
                            </li>)
                        })}
                    </ul>
                    <a href="#" id={props.data.id + "Link"} className="flatCardLink" style={{ color: props.data.listColor }}>{"← " + props.data.link}</a>
                </div>
            </div>
        </div>
    )
}

export default FlatCard