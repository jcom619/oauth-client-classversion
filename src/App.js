import { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import SaveToken from './pages/SaveToken'

const App = () => {

    const [user, setUser] = useState(null)

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
                    <Route path='/saveToken'>
                        <SaveToken setUser={setUser} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App