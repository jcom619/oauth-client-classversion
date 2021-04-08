import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App