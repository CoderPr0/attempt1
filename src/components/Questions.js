import { useState } from 'react'
import arrow from '../assets/images/icon-arrow.svg'

const Questions = () => {
  const [active, setActive] = useState("")

  return (
    <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of our FAQs, if you have any other questions you'd like answered please feel free to email us.</p>

        <div className="questions">
            <details className={active === "faq1" ? "active" : ""} open={active !== "faq1" && false}>
                <summary onClick={()=>active !== "faq1" ?  setActive("faq1") : setActive("")}>
                  <h4>What is Bookmark?</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/>
                  </svg>
                </summary>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
            </details>
            <details className={active === "faq2" ? "active" : ""} open={active !== "faq2" && false}>
                <summary onClick={()=>active !== "faq2" ?  setActive("faq2") : setActive("")}>
                  <h4>How can I request a new browser?</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/>
                  </svg>
                </summary>

                <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
            </details>
            <details className={active === "faq3" ? "active" : ""} open={active !== "faq3" && false}>
                <summary onClick={()=>active !== "faq3" ?  setActive("faq3") : setActive("")}>
                  <h4>Is there a mobile app?</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/>
                  </svg>
                </summary>

                <p>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.</p>
            </details>
            <details className={active === "faq4" ? "active" : ""} open={active !== "faq4" && false}>
                <summary onClick={()=>active !== "faq4" ?  setActive("faq4") : setActive("")}>
                  <h4>What about other Chromium browsers?</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/>
                  </svg>
                </summary>

                <p>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.</p>
            </details>
        </div>

        <button>More Info</button>
    </div>
  )
}

export default Questions