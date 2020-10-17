import React, { useEffect, useState, useReducer } from 'react'

const JobBanner = () => {
    const buttonText = "<< שלח >>"
    return (
        <div className="jobBanner">

            <div className="jobBannerContainer">
                <img className="jobBannerFormImage" src="/jobForm.jpg" />

                <form action="submit">
                    <input type="text" name="jobBannerFormName" id="jobBannerFormName" />
                    <input type="tel" name="jobBannerFormTel" id="jobBannerFormTel" />
                    <input type="email" name="jobBannerFormEmail" id="jobBannerFormEmail" />
                    <button type="submit" id="jobBannerFormSubmit">{buttonText}</button>
                </form>
            </div>

            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="" src="/jobBanner1.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item ">
                        <img className="" src="/jobBanner2.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item ">
                        <img className="" src="/jobBanner3.jpg" alt="Third slide" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobBanner