import Styles from './main.module.css'
import html from '../../Assets/html.png';
import css from '../../Assets/css.png';
import cypress from '../../Assets/cypress.png';
import docker from '../../Assets/docker.png';
import js from '../../Assets/js.jpg';
import mongo from '../../Assets/mongo.png';
import mqtt from '../../Assets/mqtt.jpg';
import mysql from '../../Assets/mysql.png';
import node from '../../Assets/node.png';
import reactimage from '../../Assets/react.png';
import tailwind from '../../Assets/tailwind.png';
import wix from '../../Assets/wix.png';
import wordpress from '../../Assets/wordpress.png';
import c1 from '../../Assets/c1.png';
import c2 from '../../Assets/c2.png';
import {motion} from 'framer-motion';
import whatsapp from '../../Assets/whatsapp.png';
import linkedin from '../../Assets/linkedin.png';
function Main(){
return(
    <div className={Styles.main}>
        <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{duration: 3}}
        >

        
        <h1 className={Styles.head}>
            About <span className={Styles.green}>Me,</span>
        </h1>
        <p className={Styles.desc}>
            
I am a dynamic full-stack developer with a year of hands-on experience, holding a degree in Computer Science and Engineering. Throughout my academic journey, I've conceptualized and brought to life various innovative projects, showcasing my proficiency in the field. My professional background includes valuable contributions to a thriving startup, where my adaptability, eagerness to learn, and strong communication skills fostered effective teamwork and project success.
        </p>
        </motion.div>

        <div className={Styles.line}>
            <div className={Styles.line1}></div>
            <div className={Styles.line2}></div>
        </div>

        <h1 className={Styles.head}>
            My <span className={Styles.green}>Skill,</span>
            </h1>
            <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{duration: 4}}
        >
            <div className={Styles.flexSkills}>
                <div className={Styles.skill}>
                    <img src={html} className={Styles.skillImage} />
                    <p className={Styles.percentage}>90%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={css} className={Styles.skillImage} />
                    <p className={Styles.percentage}>90%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={js} className={Styles.skillImage} />
                    <p className={Styles.percentage}>90%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={tailwind} className={Styles.skillImage} />
                    <p className={Styles.percentage}>85%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={reactimage} className={Styles.skillImage} />
                    <p className={Styles.percentage}>92%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={node} className={Styles.skillImage} />
                    <p className={Styles.percentage}>92%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={mongo} className={Styles.skillImage} />
                    <p className={Styles.percentage}>80%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={mysql} className={Styles.skillImage} />
                    <p className={Styles.percentage}>80%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={cypress} className={Styles.skillImage} />
                    <p className={Styles.percentage}>94%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={mqtt} className={Styles.skillImage} />
                    <p className={Styles.percentage}>70%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={docker} className={Styles.skillImage} />
                    <p className={Styles.percentage}>60%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={wix} className={Styles.skillImage} />
                    <p className={Styles.percentage}>82%</p>
                </div>
                <div className={Styles.skill}>
                    <img src={wordpress} className={Styles.skillImage} />
                    <p className={Styles.percentage}>80%</p>
                </div>
            </div>
        </motion.div>
            <div className={Styles.line}>
            <div className={Styles.line1}></div>
            <div className={Styles.line2}></div>
        </div>

        <h1 className={Styles.head}>
            My <span className={Styles.green}>Experience,</span>
            </h1>

            <div className={Styles.job}>
                    <ul style={{borderLeft:'2px solid green'}}>
                        <li>
                        <p className={Styles.desc}>26th June 2023 - present</p>
                        <h3 className={Styles.cn}>Starkenn Technologies</h3>
                        <p>Full Stack Developer</p>
                        <p className={Styles.desc2}>As a Full Stack Developer at Starkenn Technologies, I play a pivotal role in crafting robust web solutions and ensuring top-notch quality through comprehensive testing.<br/>
                        <ul style={{display:'flex', flexDirection:'row', alignItems:'flex-start' , justifyContent: 'space-between' , flexWrap:'wrap'}}><li>MERN stack</li> <li>Cypress</li> <li>Docker</li><li>Documentation</li><li>React Native</li></ul>
                        </p>
                        </li>


                        <li>
                        <p className={Styles.desc}>March 2022 - June 2022</p>
                        <h3 className={Styles.cn}>Digilytics</h3>
                        <p>Front-end Developer</p>
                        <p className={Styles.desc2}>As a frontend developer at Digilytics, I spearheaded the implementation of engaging visual effects and crafted the company's website. During a critical moment of backend errors, I swiftly reconstructed the entire design, creating 10 screens in a single day—an experience that showcased my adaptability and rapid problem-solving skills.<br/>
                        <ul style={{display:'flex', flexDirection:'row', alignItems:'flex-start' , justifyContent: 'space-between' , flexWrap:'wrap'}}><li>React</li> <li>Material UI</li> <li>Tailwind</li><li>Documentation</li></ul>
                        </p>
                        </li>
                    </ul>
            </div>

            <div className={Styles.line}>
            <div className={Styles.line1}></div>
            <div className={Styles.line2}></div>
        </div>

        <h1 className={Styles.head}>
            My <span className={Styles.green}>Education,</span>
            </h1>
            <div className={Styles.edu}>
                <div className={Styles.education}>
                    <p className={Styles.desc}>
                        2019-2023
                    </p>
                    <h3 className={Styles.cn}>MIT World Peace University</h3>
                    <p>Computer Science and Engineering (CSE)</p>
                    <p style={{fontStyle: 'italic'}}>Pune, Maharashtra , India</p>
                </div>

                <div className={Styles.education}>
                    <p className={Styles.desc}>
                        2017-2019
                    </p>
                    <h3 className={Styles.cn}>Saint John's Senior Secondary School</h3>
                    <p>HSC - PCM</p>
                    <p style={{fontStyle: 'italic'}}>Kota, Rajasthan, India</p>
                </div>
            </div>

            <div className={Styles.line}>
            <div className={Styles.line1}></div>
            <div className={Styles.line2}></div>
        </div>

        <h1 className={Styles.head}>
            My <span className={Styles.green}>Certifications,</span>
            </h1>

            <div className={Styles.cer}>
                <img src={c1} className={Styles.cimg}/>
                <img src={c2} className={Styles.cimg} />
            </div>

            <div className={Styles.line}>
            <div className={Styles.line1}></div>
            <div className={Styles.line2}></div>
        </div>

        <h1 className={Styles.head}>
            My <span className={Styles.green}>Projects,</span>
            </h1>

            <div className={Styles.project}>
                <a href='https://linkedincloneavin.netlify.app/'>
                    <img src={whatsapp} className={Styles.iframe} />
                </a>

                <a href='https://whatsappcloneavin.netlify.app/'>
                <img src={linkedin} className={Styles.iframe} />
                </a>
            </div>

            <div className={Styles.line}>
            <div className={Styles.line1}></div>
            <div className={Styles.line2}></div>
        </div>

        <h1 className={Styles.head}>
            Corporate <span className={Styles.green}>Experience,</span>
            </h1>
            <div className={Styles.ce}>
                <h3 className={Styles.cn}>Development (MERN)</h3>
                <p className={Styles.desc}>As a backend developer, I crafted multiple APIs and seamlessly integrated email and WhatsApp functionalities. Additionally, I played a pivotal role in frontend development, designing captivating UI, and implementing dynamic maps with markers for enhanced user experience. Check out my linkedin for a detailed showcase of my versatile skills.</p><br/>

                <h3 className={Styles.cn}>Testing (cypress)</h3>
                <p className={Styles.desc}>I initiated and executed comprehensive testing for the entire web application, demonstrating rapid learning by mastering Cypress within a week. I played a key role in bug identification and resolution, showcasing adaptability and efficiency in testing processes. Explore my linkedin for a detailed overview of my testing expertise.</p><br/>

                <h3 className={Styles.cn}>Documentation</h3>
                <p className={Styles.desc}>I meticulously crafted comprehensive documentation outlining the workflow, operational principles, and data flow for both clients and future developers. Additionally, I efficiently managed an Excel sheet to track development and testing progress, culminating in a detailed work contribution presentation. Explore my linkedin for insights into my documentation and project management capabilities.</p><br/>

            </div>

            <div className={Styles.line}>
            <div className={Styles.line1}></div>
            <div className={Styles.line2}></div>
        </div>

        <h1 className={Styles.head} style={{textAlign : 'center'}}>
            Thank <span className={Styles.green}>You, 😊</span>
            </h1>

        
    </div>
)
}

export default Main;