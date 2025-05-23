import './App.css'

function App()
{
  return (
    <>
      <div className="container">
        <div className="cursor"><p></p></div>
        <div className="story-img">
          <div className="img">
            <img src="./assets/story-1.png" alt="" />
          </div>
        </div>

        <div className="story-content">
          <div className="row">
            <div className="indices">
              <div className="index"><div className="index-highlight"></div></div>
              <div className="index"><div className="index-highlight"></div></div>
              <div className="index"><div className="index-highlight"></div></div>
              <div className="index"><div className="index-highlight"></div></div>
              <div className="index"><div className="index-highlight"></div></div>
              <div className="index"><div className="index-highlight"></div></div>
            </div>
            <div className="profile">
              <div className="profile-icon">
                <img src="./assets/profile-1.png" alt="" />
              </div>
              <div className="profile-name">
                <p>Behance</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="title">
              <div className="title-row"><h1>Showcasing creative</h1></div>
              <div className="title-row"><h1>Portfolios and projects</h1></div>
              <div className="title-row"><h1>from top designers</h1></div>
            </div>
            <div className="link">
              <a href="behance.net" target='_blank'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
