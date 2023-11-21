import Styles from './Sidebar.module.css';
import Image from './death.jpg';
import instaicon from '../../Assets/instaicon.png';
import linkedinicon from '../../Assets/linkedinicon.png';
import me from '../../Assets/me.png';
function Sidebar () {
    return (
        <div className={Styles.outline}>
            <div className={Styles.headline}>
            <img src={me} className={Styles.myimg} />
            </div>
            <div className={Styles.headline}>
                <h3 className={Styles.name}>Ayush Gour</h3>
                <p className={Styles.designation}>full stack developer</p>
            </div>
            <div className={Styles.headline}>
                <p className={Styles.designation}>ayushofficials2609@gmail.com</p>
            </div>
            <div className={Styles.headline}>
                <p className={Styles.designation} style={{textAlign : 'center'}}>Meera Empire, siddharth Nagar, Bavdhan , Pune (411021) , Maharashtra, India</p>
            </div>
            <div className={Styles.headline} style={{marginTop : '80px'}}>
                <a href='https://www.instagram.com/gour_ayush2/'><img src={instaicon} className={Styles.icon}/></a>
                <a href='https://www.linkedin.com/in/ayush-gour-a317541a9/'><img src={linkedinicon} className={Styles.icon}/></a>
            </div>
        </div>
    )
}

export default Sidebar;