import './App.scss'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import whatWeHaveDone from './Components/whatWeHaveDone/whatWeHaveDone'
import whatWeDo from './Components/whatWeDo/whatWeDo'
import howWeDoIt from './Components/howWeDoIt/howWeDoIt'
import { createContext, useEffect, useState } from 'react'
import ContentfulAPI from './Components/ContentfulAPI/ContentfulAPI'

export const BlogContext = createContext()
function App() {
  const [blog, setBlog] = useState()

  useEffect(() => {
    ContentfulAPI.getEntries()
      .then((res) => console.log(setBlog(res.items)))
      .catch((err) => console.log(err))
  }, [])
  return (
    <BlogContext.Provider value={blog}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/whatWeHaveDone' component={whatWeHaveDone} />
          <Route exact path='/whatWeDo' component={whatWeDo} />
          <Route exact path='/howWeDoIt' component={howWeDoIt} />
        </Switch>
      </Router>
    </BlogContext.Provider>
  )
}

export default App
