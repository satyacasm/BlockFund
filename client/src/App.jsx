import React from 'react'
import { Route,Routes } from 'react-router-dom';

import {Home,Profile,CampignDetail,CreateCampaign} from './pages'
import {Navbar,Sidebar} from './components'
const App = () => {
  return (
    <div className='relative sm:-8 p-4 gradient-bg-welcome'>
     app
  <Navbar/>
  <Sidebar/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampignDetail />} />
        </Routes>
    </div>
  )
}

export default App
