import { useState } from 'react'
import Bookmark from './options/Bookmark.js'
import Search from './options/Search.js'
import Sharing from './options/Sharing.js'

const Features = () => {
  const [tab, showTab] = useState("bookmark")
  const [active, setActive] = useState("bookmark")

  const setTab = (tab) =>{
    showTab(tab)
    setActive(tab)
  }

  return (
    <div className="features">
        <h2>Features</h2>
        <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        
      <div className="feature-options">
        <ul>
          <li onClick={() => setTab("bookmark")} className={active === "bookmark" ? "active" : ""}>Simple Bookmarking</li>
          <li onClick={() => setTab("search")} className={active === "search" ? "active" : ""}>Speedy Searching</li>
          <li onClick={() => setTab("share")} className={active === "share" ? "active" : ""}>Easy Sharing</li>
        </ul>
        {tab === "bookmark" && <Bookmark />}
        {tab === "search" && <Search />}
        {tab === "share" && <Sharing />}
      </div>
    </div>
  )
}

export default Features