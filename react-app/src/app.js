import { BrowserRouter, Route } from 'react-router-dom';
import HeaderNav from './component/headerNav'
import Index from './component/index'
import Home from './component/home'
import About from './component/about'

export default function App() {
  return (
    <BrowserRouter>
      <HeaderNav></HeaderNav>
      <div>
        <Route path="/"  exact render={() => <Index/>}></Route>
        <Route path="/home"   render={() => <Home/>}></Route>
        <Route path="/about"  render={() => <About/>}></Route>
      </div>
    </BrowserRouter>
  )
}
