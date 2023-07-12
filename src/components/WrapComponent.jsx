import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommunityComponent from './wrap/community/CommunityComponent'
import FindingComponent from './wrap/finding/FindingComponent'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Component List
import FooterComponent from './wrap/FooterComponent'
import HeaderComponent from './wrap/HeaderComponent'
import HomeComponent from './wrap/HomeComponent'
import MarketComponent from './wrap/market/MarketComponent'
import RequestComponent from './wrap/request/RequestComponent'
import ExpertJoinComponent from './wrap/user/ExpertJoinComponent'
import JoinComponent from './wrap/user/JoinComponent'
import LoginComponent from './wrap/user/LoginComponent'

export default function WrapComponent() {
  return (
    <div id="wrap">

      <BrowserRouter>
        <Routes>
          <Route path='' element={<HeaderComponent />}>
            <Route index element={<HomeComponent />} />
            <Route path='/home' element={<HomeComponent />} />
            <Route path='/request' element={<RequestComponent />} />
            <Route path='/market' element={<MarketComponent />} />
            <Route path='/finding' element={<FindingComponent />} />
            <Route path='/community' element={<CommunityComponent />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/join' element={<JoinComponent />} />
            <Route path='/expertJoin' element={<ExpertJoinComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  )
}
