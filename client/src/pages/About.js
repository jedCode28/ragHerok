import React from 'react'

const About =()=> {
  return (
    <>
      <h1>Meet Our Fine Team</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
        <div className="ui card">
            <img src="https://pbs.twimg.com/media/DO6h3uiW0AAFYe3.jpg" />
          <div className="content">
            <a className="header" >Jedi</a>
              <div className="meta">
                <a>Last Seen 15 seconds ago</a>
              </div>
          </div>    
        </div>

        <div className="ui card" style={{marginLeft: '5px'}}>
            <img src="https://pbs.twimg.com/profile_images/1216188479/pffft_400x400.jpg" />
          <div className="content">
            <a className="header" >Cluff-Man</a>
              <div className="meta">
                <a>Last Seen 15 seconds ago</a>
              </div>
          </div>    
        </div>

        <div className="ui card" style={{marginLeft: '5px'}}>
            <img src="https://pbs.twimg.com/profile_images/1378221242/tokitweet_400x400.png" />
          <div className="content">
            <a className="header" >Ad-Maz</a>
              <div className="meta">
                <a>Last Seen 15 seconds ago</a>
              </div>
          </div>    
        </div>

        <div className="ui card" id="pickle" style={{marginLeft: '5px', top: '-13.5px', height: '357px'}}>
            <img src="https://pbs.twimg.com/profile_images/673008545479188482/C9UODJty_400x400.jpg" style={{height:'290px'}}/>
          <div className="content">
            <a className="header" >Jimmi Tha Architect</a>
              <div className="meta">
                <a>Last Seen 15 seconds ago</a>
              </div>
          </div>    
        </div>

      </div>
    </>
  )
}

export default About
