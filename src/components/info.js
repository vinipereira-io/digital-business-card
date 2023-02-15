import ProfileImage from '../profileImage.jpeg';

function Info() {
    return (
        <div className='Info'>
            <img src={ProfileImage}></img>
            <div className='Info--content'>
                <h1>Vini Pereira</h1>
                <h3>Software Developer</h3>
                <a href='https://vinipereira.io' target='_blank'>vinipereira.io</a>
                <div className='Info--content--buttons'>
                    <form action='mailto:vini@vinipereira.io' method='get'>
                        <button data-destination='email'>Email</button>
                    </form>
                    <form action='https://www.linkedin.com/in/viniciusvmp/' method='get' target='_blank'>
                        <button data-destination='linkedin'>LinkedIn</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Info;