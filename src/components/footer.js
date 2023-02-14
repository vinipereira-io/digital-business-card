import Github from '../iconGitHub.png';
import Twitter from '../iconTwitter.png';
import Instagram from '../iconInstagram.png';

function Footer() {
    return (
        <div className='Footer'>
            <a href='https://github.com/vinipereira-io' target='_blank'>
                <img src={Github}></img> 
            </a>
            <a href='https://twitter.com/vinipereira_io' target='_blank'>
                <img src={Twitter}></img>
            </a>
            <a href='https://www.instagram.com/vinipereira.io/' target='_blank'>
                <img src={Instagram}></img>
            </a>
        </div>
    )
}

export default Footer;