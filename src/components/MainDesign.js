import React from 'react';

function MainDesign(){
    return(
        <div className='navBarr'>
            <nav>
                <img  src="/images/logo.png" height={200} class='logo'/>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Proficient</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Talks</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </nav>
            <div className='intro'>
                <h1>Hi, all I am <span>Shozib</span> 👋</h1>
                <br/>
                <p>Full Stack Developer with a passion for crafting seamless user experiences through  
                    <br/>expertise in front-end technologies like React.js and Angular. Proficient in back-end
                    <br/>development with Node.js and Python, ensuring robust and scalable applications. 
                    <br/>Committed to continuous learning and innovation in the ever-evolving landscape of 
                    <br/>web development.
                </p>
                <div className='icon'>
                <img  src="/images/github.png" height={35}/>
                <img  src="/images/linkedin.png" height={35}/>
                <img  src="/images/google.png" height={35}/>
                <img  src="/images/whatsapp.png" height={35}/>
                <img  src="/images/facebook.png" height={35}/>
                </div>
                <a href = "#">Contact Me</a>
                <a href = "#">See Resume</a>
            </div>
            <div>
                  <img src="/images/profile.png" class='image' />
            </div>
        </div>
    )
}
export default MainDesign;