import ProfileImage from '../profileImage.png';

function Info() {
    return (
        <div>
            <img src={ProfileImage}></img>
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <p>laurasmith.website</p>
            <div>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    )
}

export default Info;