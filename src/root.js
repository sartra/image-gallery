import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Gallery from './components/Gallery'

const Root = () => (
  <Router>
    <Gallery />
  </Router>
)

export default Root;