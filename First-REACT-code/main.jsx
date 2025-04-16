/**
 * import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
const root = createRoot(document.getElementById("root"))

function Page() {
  return (
      <div>
          <header>
          <img src="./react.png" alt="image" />
          </header>
          <main>
              <h1>Reason I am excited to learn React</h1>
              <ol>
                  <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                  <li>I am more likely to get a job as a front end developer if I know React</li>
              </ol>
          </main>
          <footer>
              <small>© 2024 Taoshiflex. All rights reserved.</small>
          </footer>
      </div>
  )
}
root.render(
    <Page></Page>
)


