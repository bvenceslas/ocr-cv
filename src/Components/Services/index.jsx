import Circle from '../image/circle.png';
import './style.scss';

export function ServicesPage(){

    return(
        <div className="services">
           <div className='service-title'>
                {'Services'}
            </div>
            <div className="description">
                {'I develop solutions for individual and companies. After 5 years as an Associate software engineer in DRCongo, I am some of times focused in designing any type of the app, banner, and some illustrations in order to promote the software design system.'}
            </div>
            <div className="all-skills">
                <div className="skill">
                    <div className="tofo">
                        <img src={Circle} alt=""/>
                    </div>
                    <div className="skdesc">
                        <div className="skill-title">
                            {'Web Developement'}
                        </div>
                        <div className="list-skill">
                            <ul>
                                <li>Html</li>
                                <li>Css</li>
                                <li>Javascript</li>
                                <li>Nodejs</li>
                                <li>Reactjs</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

                <div className="skill">
                    <div className="tofo">
                        <img src={Circle} alt=""/>
                    </div>
                    <div className="skdesc">
                        <div className="skill-title">
                            {'UI/UX Design'}
                        </div>
                        <div className="list-skill">
                            <ul>
                                <li>Photoshop</li>
                                <li>Figma</li>
                                <li>Illustrator</li>
                                <li>Mazer</li>
                                <li>.. /..</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="all-skills">
                <div className="skill">
                    <div className="tofo">
                        <img src={Circle} alt=""/>
                    </div>
                    <div className="skdesc">
                        <div className="skill-title">
                            {'Desktop & Database'}
                        </div>
                        <div className="list-skill">
                            <ul>
                                <li>Java SE</li>
                                <li>Mysql</li>
                                <li>SQLServer</li>
                                <li>Mongodb</li>
                                <li>sqlite</li>
                                <li>sqlite</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

                <div className="skill">
                    <div className="tofo">
                        <img src={Circle} alt=""/>
                    </div>
                    <div className="skdesc">
                        <div className="skill-title">
                            {'Testing'}
                        </div>
                        <div className="list-skill">
                            <ul>
                                <li>Cypress</li>
                                <li>Jest</li>
                                <li>Enzyme</li>
                                <li>.. /..</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}