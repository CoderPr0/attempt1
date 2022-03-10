import chrome from '../assets/images/logo-chrome.svg'
import firefox from '../assets/images/logo-firefox.svg'
import opera from '../assets/images/logo-opera.svg'

const Extension = () => {
  return (
    <div className="extension">
        <h2>Download the extension</h2>
        <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>

        <div className="extensions">
            <div className='chrome'>
                <img src={chrome} alt="" />
                <h3>Add to Chrome</h3>
                <p>Minimum version 62</p>
                <button>Add & Install Extension</button>
            </div>
            <div className='firefox'>
                <img src={firefox} alt="" />
                <h3>Add to Firefox</h3>
                <p>Minimum version 55</p>
                <button>Add & Install Extension</button>
            </div>
            <div className='opera'>
                <img src={opera} alt="" />
                <h3>Add to Opera</h3>
                <p>Minimum version 46</p>
                <button>Add & Install Extension</button>
            </div>
        </div>
    </div>
  )
}

export default Extension