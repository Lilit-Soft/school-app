import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

// Pages
import News from '../pages/News';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Live from '../pages/Live';
import FAQ from '../pages/FAQ';
import ContactUs from '../pages/ContactUs';
import Error from '../pages/404-error';
import QuizApp from '../quiz/Quiz';
import QuizTrueFalseApp from '../quiz/QuizTrueFalse';

export type IMainLayoutProps = {}

const MainLayout = (props: IMainLayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Navigation />

      <Routes>
        <Route path="/:locale/news" element={<News />} />
        <Route path="/:locale/about-us" element={<AboutUs />} />
        <Route path="/:locale/live" element={<Live />} />
        <Route path=":locale/faq" element={<FAQ />} />
        <Route path="/:locale/contact-us" element={<ContactUs />} />
        <Route path="/:locale" element={<Home />} />
        <Route path="/:locale/quiz" element={<QuizApp />} />
        <Route path="/:locale/quiz-true-false" element={<QuizTrueFalseApp />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </Box>
  )
}

export default MainLayout
