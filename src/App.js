import { ThemeProvider } from 'theme-ui'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ThreeScene from './three'
import theme from './theme'

const Routing = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <ThreeScene />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

const App = () => {
  return (
    <Router>
      <Routing />
    </Router>
  )
}

export default App
