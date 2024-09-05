import React from 'react'
import "./Styles/skill.css"

function Skill() {
  return (

    <div className='skill-container'>
        <h2>Professional Skill</h2>
        <div className="skills">
            <span className='percentage-display'>70%</span>
        <div className="skill web">
        Web development </div>
        </div>

        <div className="skills">
        <span className='percentage-display'>55%</span>
        <div className="skill java">
            Java </div>
        </div>

        <div className="skills">
        <span className='percentage-display'>75%</span>
        <div className="skill cpp">
            C++  </div>
        </div>

        <div className="skills">
        <span className='percentage-display'>80%</span>
        <div className="skill dsa">
            DSA</div>
        </div>

        <div className="skills">
        <span className='percentage-display'>50%</span>
        <div className="skill networking">
            Networking</div>
        </div>

        <div className="skills">
        <span className='percentage-display'>10%</span>
        <div className="skill react">
            React.js</div>
        </div>

        <div className="skills">
        <span className='percentage-display'>60%</span>
        <div className="skill python">
            Python</div>
        </div>
        <div className="skills">
        <span className='percentage-display'>0%</span>
        <div className="skill angular">
            Angular.js</div>
        </div>

        <div className="skills">
        <span className='percentage-display'>0%</span>
        <div className="skill ajax">
            Ajax</div>
        </div>
        <div className="skills">
        <span className='percentage-display'>95%</span>
        <div className="skill cloud">
            Cloud</div>
        </div>            
    </div>
  )
}

export default Skill
