import React, { useEffect, useState, useReducer } from 'react'

const ImgCard = (props) => {
    return (
        <div className="imgCard">
            <img src={props.data.imgUrl} alt="" className="imgCard-img" style={{ borderColor: props.data.circleColor }} />
            <h4 className="imgCardTitle">{props.data.title}</h4>
        </div>
    )
}

export default ImgCard