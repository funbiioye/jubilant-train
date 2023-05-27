import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import SignUp from '../src/Screens/SignUp';
import LoginPage from '../src/Screens/LoginPage';
import ForgotPass from '../src/Screens/ForgotPass'; 
import CheckMail from './Screens/CheckMail';
import SetPass from './Screens/SetPass';
import PassReset from './Screens/PassReset';



const Router = () => {
  return (
    <BRouter>
      <Routes>
        <Route
          path='/'
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
      </Routes>
    </BRouter>
  );
}

export default Router