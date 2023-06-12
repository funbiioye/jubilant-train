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
          path='/homepage'
          element={<HomePage />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/loginpage'
          element={<LoginPage />}
        />
        <Route
          path='/forgotpass'
          element={<ForgotPass />}
        />
        <Route
          path='/Checkmail'
          element={<CheckMail />}
        />
        <Route
          path='/setpass'
          element={<SetPass />}
        />
        <Route
          path='/passreset'
          element={<PassReset />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/policypage'
          element={<PolicyPage />}
        />
        <Route
          path='/cookies'
          element={<Cookies />}
        />
        <Route
          path='/terms'
          element={<Terms />}
        />
        <Route
          path='/faqs'
          element={<FAQs />}
        />
      </Routes>
    </BRouter>
  );
};

export default Router;
