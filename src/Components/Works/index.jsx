import project from '../image/project.png';
import './style.scss';


export function Works(){
    return (
        <div className='works'>
            <div className='work-title'>
                {'My Works'}
            </div>
            <div className='work-project'>
                {/* My projects */}
                <div className="my-project">
                    <a href="https://chapafrik.netlify.com" target="_blank" rel="noopener noreferrer">  
                        <div className="ptitle">Hng 8</div>
                        <img src={project} alt="project image"/>
                    </a>
                </div>
                
                <div className="my-project">
                    <a href="https://chapafrik.netlify.com" target="_blank" rel="noopener noreferrer">  
                        <div className="ptitle">Mascar</div>
                        <img src={project} alt="project image" />
                    </a>                    
                </div>

                <div className="my-project">
                    <a href="https://chapafrik.netlify.com" target="_blank" rel="noopener noreferrer">  
                        <div className="ptitle">Oasis</div>
                        <img src={project} alt="project image"/>
                    </a>
                </div>
                
                <div className="my-project">
                    <a href="https://chapafrik.netlify.com" target="_blank" rel="noopener noreferrer">  
                        <div className="ptitle">Scola</div>
                        <img src={project} alt="project image" />
                    </a>                    
                </div>
                
            </div>
            
        </div>
    )
}