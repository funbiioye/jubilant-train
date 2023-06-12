import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import SignUp from '../src/Screens/SignUp';
import LoginPage from '../src/Screens/LoginPage';
import ForgotPass from '../src/Screens/ForgotPass'; 
import CheckMail from './Screens/CheckMail';
import SetPass from './Screens/SetPass';
import PassReset from './Screens/PassReset';
import About from './Screens/About';
import Contact from './Screens/Contact';
import PolicyPage from './Screens/PolicyPage';
import Cookies from './Screens/Cookies';
import Terms from './Screens/Terms';
import FAQs from './Screens/FAQs';
import HomePage from './Screens/HomePage';



const Router = () => {
  return (
    <BRouter>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='Signup'
          element={<SignUp />}
        />
        <Route
          path='LoginPage'
          element={<LoginPage />}
        />
        <Route
          path='ForgotPass'
          element={<ForgotPass />}
        />
        <Route
          path='CheckMail'
          element={<CheckMail />}
        />
        <Route
          path='SetPass'
          element={<SetPass />}
        />
        <Route
          path='PassReset'
          element={<PassReset />}
        />
        <Route
          path='Contact'
          element={<Contact />}
        />
        <Route
          path='About'
          element={<About />}
        />
        <Route
          path='PolicyPage'
          element={<PolicyPage />}
        />
        <Route
          path='Cookies'
          element={<Cookies />}
        />
        <Route
          path='Terms'
          element={<Terms />}
        />
        <Route
          path='FAQs'
          element={<FAQs />}
        />
      </Routes>
    </BRouter>
  );
}

export default Router