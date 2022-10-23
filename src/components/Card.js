/* eslint-disable jsx-a11y/alt-text */
import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={require("../images/katie.png")} className="card--image" />
            <div className="card--stats">
                <img src={require("../images/star.png")} className="card--star" />
                <span>5.0</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}