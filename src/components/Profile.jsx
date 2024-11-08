import { useState } from "react"

const Profile = (props) => {

    let [showMore,setShowMore] = useState(false)

    let toggleShow = () => {
        setShowMore(!showMore)
    }

    return <div className={props.darkMode ? "light-border" : "dark-border"} >
        <h2>Förnamn: {props.data.namn}</h2>
        <button onClick={toggleShow}>{showMore ? "Show less" : "Show more"}</button>

        {showMore && <>
            <h2>Efternamn: {props.data.efternamn}</h2>
            <h2>{props.data.ålder} år</h2>
            <h2>Hobby: {props.data.hobby}</h2>
        </>}
    </div>
}

export default Profile