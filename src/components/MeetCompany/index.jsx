import "./style.css"

import MeetCompanyPhoto from "@/assets/meetcompany-photo.jpg";

export default function MeetCompany(props){
    return(
        <div className="meetcompany-container">
            <section className="meetcompany-container-section">
                <div className="meetcompany-container-section-title">
                    <h1 className="meetcompany-container-section-title-h1">
                        {props.title}
                    </h1>
                </div>
                <div className="meetcompany-container-section-content">
                    <span className="meetcompany-container-section-content-span">
                        {props.content}
                    </span>
                </div>
            </section>
            <div className="meetcompany-container-logo">
                <img src={MeetCompanyPhoto} alt="Equipe PROWNOVAR" className="meetcompany-container-logo-img" />
            </div>
        </div>
    )
}
