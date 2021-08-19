import { Avatar } from 'antd';
import './style.scss';
import myPicture from '../image/brain.png';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import { Works } from '../Works';

export function HomePage(){

    return(
        <>
        <div className="home-page">
           <div className="content">
               <div className="div-avatar">
                   <Avatar style={{ border: '2px solid white' }} src={myPicture} size={300} />
               </div>
               <div className="div-intro">
                   <div className="intro-name">Call me Venceslas Josh</div>
                   <div className="intro-poste">Full stack software engineer</div>
                   <div className="div-socials">
                       <div> <a href="https://www.linkedin.com/in/venceslas_burongu/" target="_blank" rel="noopener noreferrer"> <LinkedinOutlined /> </a> </div>
                       <div> <a href="https://twitter.com/bvenceslas" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a> </div>
                       <div> <a href="https://github.com/bvenceslas" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a> </div>
                   </div>
               </div>
           </div>
        </div>
        {/* my works */}
        <Works />
        </>
    )
}