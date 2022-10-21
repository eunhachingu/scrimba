import React from "react"
import logo from "../images/banner.png"

export default function Info() {
    return (
        <div>
            <div className="info">
                <img src={logo} alt="banner" className="photo"/>

                    <h1 className="name">Laura Smith</h1>
                    <h2 className="job">Frontend Developer</h2>
                    <p className="website">laurasmith.website</p>
                </div>

                <div className="button">
                    <button className="email-button">
                        <i class="fa-solid fa-envelope"></i>
                        Email
                    </button>
                    <button className="linkedin-button">
                        <i class="fa-brands fa-linkedin linkedin"></i>
                        LinkedIn
                    </button>
            </div>
        </div>
        
    )
}