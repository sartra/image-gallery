import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Galleryfrom './Components/Gallery';


export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={Gallery}/>
   <Route path='/0' component={Gallery}/>
   <Route path='/1' render={}/>
   </Switch>
   </BrowserRouter>
 )
}