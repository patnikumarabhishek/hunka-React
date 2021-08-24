import React from 'react'
import './css/Styles.css'
import './css/Responsive.css'
import './css/Bootstrap.css'
// import './css/owl.carousel.min.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect
} from 'react-router-dom'

import { Login } from './components/Login'
import { Register } from './components/Register'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Vacancies from './components/Vacancies'
import VacancyDetail from './components/VacancyDetail'
import ItHunting from './components/ItHunting'
import Meditation from './components/Meditation'
import Community from './components/Community'
import CorporateYoga from './components/Corporate Yoga'
import Home from './components/Home'
import TermsOfService from './components/Terms Of Service'
import PrivacyPolicy from './components/Privacy Policy'
import AboutUs from './components/About Us'
import ContactUs from './components/Contact Us'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route exact path="/">
          <Redirect to="/login" />
        </Route> */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/vacancies" component={Vacancies} />
        <Route path="/vacancy-detail" component={VacancyDetail} />
        <Route path="/it-hunting" component={ItHunting} />
        <Route path="/meditation" component={Meditation} />
        <Route path="/community" component={Community} />
        <Route path="/corporate-yoga" component={CorporateYoga} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
