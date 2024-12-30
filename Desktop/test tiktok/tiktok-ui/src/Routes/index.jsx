import { HeaderOnly } from "../../src/component/Layout" 
import Home from "../../src/pages/Home"
import Following from "../../src/pages/Following"
import Profile from "../../src/pages/Profile"
import Upload from "../../src/pages/Upload"
import Search from "../../src/pages/Search"

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component: Profile},
    { path: '/Upload', component: Upload, layout: HeaderOnly},
    { path: '/search', component: Search, layout: null},
]
const privateRoutes = [
    
]
export {publicRoutes, privateRoutes}