import './style.scss';


function Navbar({children}){

    return(
        <div className="page">
            <div className='nav'>
                <div className="nav-part-1">Home</div>
                <div className="nav-part-2">
                    <div className="nav-item">Works</div>
                    <div className="nav-item">Services</div>
                    <div className="nav-item">Education</div>
                    <div className="nav-item">Contact</div>
                </div>
            </div>
            <div className="children"> {children} </div>
        </div>
    )
};

export default Navbar;