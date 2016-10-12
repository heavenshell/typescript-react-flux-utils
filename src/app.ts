import * as React from 'react'
import * as ReactDOM from 'react-dom'
import AppContainer from './containers/App'

const MainFactory = React.createFactory(AppContainer)

ReactDOM.render(
  MainFactory(),
  document.getElementById('app')!
)
