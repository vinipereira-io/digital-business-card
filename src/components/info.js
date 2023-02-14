import ProfileImage from '../profileImage.png';

function Info() {
    return (
        <div className='Info'>
            <img src={ProfileImage}></img>
            <div className='Info--content'>
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <p>laurasmith.website</p>
                <div className='Info--content--buttons'>
                    <button data-destination='email'>Email</button>
                    <button data-destination='linkedin'>LinkedIn</button>
                </div>
            </div>
        </div>
    )
}

export default Info;