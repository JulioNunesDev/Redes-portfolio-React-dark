import {FaGithubAlt, FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'

import './App.css'

function App() {
 

  return (
    <div className="App">
      <div className="box">
        <div className="box2">
        <div className='boxImage'>
          <div className="redes">
           <a href="https://www.facebook.com/profile.php?id=100010528124108" target='_blank'> <FaFacebookF/></a>
           <a href="https://www.instagram.com/julionunesyt/" target='_blank'><FaInstagram/></a>
           <a href="https://www.linkedin.com/in/julionunesdev/" target='_blank'><FaLinkedinIn/></a>
           <a href="https://github.com/JulioNunesDev" target='_blank'><FaGithub/></a>
            </div>
            <div className="infos">
             <h2> Create by <span>Julio Nunes</span></h2>
            </div>
            <div className="menu">
              <nav>
                <ul>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Projects</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
        </div>

      </div>
     
    </div>
  )
}

export default App
