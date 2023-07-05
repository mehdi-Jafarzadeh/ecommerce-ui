import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';



const fields = [
    { "ID" : 1 , "photo": "./assets/footer/github.png" , "des" : "description of the programming language number 1" },
    { "ID" : 2 , "photo": "./assets/footer/github.png" , "des" : "description of the programming language number 2" },
    { "ID" : 3 , "photo": "./assets/footer/github.png" , "des" : "description of the programming language number 3" },
    { "ID" : 4 , "photo": "./assets/footer/github.png" , "des" : "description of the programming language number 4" },
    { "ID" : 5 , "photo": "./assets/footer/github.png" , "des" : "description of the programming language number 5" },
    { "ID" : 6 , "photo": "./assets/footer/github.png" , "des" : "description of the programming language number 6" }
]

const Homepage = () => {
    const [field, setfield] = useState(null);
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
                {fields.map(e => (
                    <div className='home-sec-7-items'>
                        <img className='home-sec-7-items' src={e.photo} alt="" onClick={() => { setfield(e.ID) }}/>
                    </div>
                ))}
            </div>
            <div className='home-sec-8'><img className='home-sec-8-item' src="./assets/pages/Home/down arrow.png" alt="down arrow" /></div>
            <div className='home-sec-8'>{ field ? fields.filter(e => e.ID == field).map(e => e.des) : "the description about the programming field" }</div>
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