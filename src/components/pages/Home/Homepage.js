import { Link } from 'react-router-dom';
import './Homepage.css';

const languages = [
    { "photo": "./assets/footer/github.png" },
    { "photo": "./assets/footer/github.png" },
    { "photo": "./assets/footer/github.png" },
    { "photo": "./assets/footer/github.png" },
    { "photo": "./assets/footer/github.png" },
    { "photo": "./assets/footer/github.png" }
]

const Homepage = () => {
    return (
        <div className='home-container'>
            <div className='home-sec1'> webco programming group</div>
            <div className='home-sec2'> hello everyone , lets learn programming here and creat what ever we want .</div>
            <div className='home-sec1 , home-sec3'> about us</div>
            <div className='home-sec-4'>
                <div className='home-sec-4-1'>
                    <img className='home-sec-4-1-img' src='./assets/pages/Home/me.jpg' alt='mehdi jafarzadeh' />
                </div>
                <div className='home-sec-4-2'>
                    I am mehdi jafarzadeh  -fullstack software developer with over decade of coding and maintaing projects - and with my team we have created a platform so you can learn all sides of programming and coding full from scratch to advanced level free
                </div>
            </div>
            <div className='home-sec-5'>
                <p>contact with me : </p>
                <Link to=""><p><img className="footer-icons" src="./assets/footer/youtube.png" alt="youtube icon" /></p></Link>
                <Link to=""><p><img className="footer-icons" src="./assets/footer/instagram.png" alt="instagram icon" /></p></Link>
                <Link to=""><p><img className="footer-icons" src="./assets/footer/telegram.png" alt="telegram icon" /></p></Link>
                <Link to=""><p><img className="footer-icons" src="./assets/footer/github.png" alt="github icon" /></p></Link>
            </div>
            <div className='home-sec-6'>what is the fields of programming ?</div>
            <div className='home-sec-7'>
                {languages.map(e => (
                    <div className='home-sec-7-items'>
                        <img className='home-sec-7-items' src={e.photo} alt="" />
                    </div>
                ))}
            </div>
            <div className='home-sec-8'><img className='home-sec-8-item' src="./assets/pages/Home/down arrow.png" alt="down arrow" /></div>
            <div className='home-sec-8'>the description about the programming field</div>
            <div className='home-sec-'></div>
            <div className='home-sec-'></div>
            <div className='home-sec-'></div>
            <div className='home-sec-'></div>
            <div className='home-sec-'></div>
            <div className='home-sec-'></div>
            <div className='home-sec-'></div>
            <div className='home-sec-'></div>
            </div>
            )
}

            export default Homepage