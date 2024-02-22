import React from "react";
import "../assets/css/style.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../screens/Home/home";
import Login from "../screens/Login/login";
import BecomeATutor from "../screens/Become a tutor/become-tutor";
import Findtutor from "../screens/Find Tutor/find-tutor";
import Instructorconsultation from "../screens/Instructor Consultation/Instructor-consultation";
import Signup from "../screens/Signup/sign-up";
import Bookschedule from "../components/models/book-schedule";
import Viewprofile from "../screens/View Profile/view-profile";
import Blog from "../screens/Blogs/blog";
import Blogdetails from "../screens/Blogs/blog-details";
import Faq from "../screens/FAQ/faq";
import Contact from "../screens/Contact/contact";
import Getstarted from "../screens/Home tutors/get-started";
import Alltutors from "../screens/All Tutors/all-tutors";
import Viewfullschedule from "../screens/View full schedule/view-full-schedule";
import Message from "../screens/After Login Screens/messages/message";
import Wishlist from "../screens/After Login Screens/Wishlist/wishlist";
import Profilesetting from "../screens/After Login Screens/Profile Setting/profile-setting";
import Forgotpassword from "../screens/Forgot password/Forgot-password";
import Mylearning from "../screens/After Login Screens/My Learning/my-learning";
import Mycourse from "../screens/After Login Screens/My Learning/my-course";
import InviteAFriend from "../screens/After Login Screens/invite A Friend/invite-A-Friend";
import FindgetStarted from "../screens/Home tutors/find-getStarted";
import RegisterTutore from "../screens/Become a tutor/Register-tutore";
import Checkout from "../screens/After Login Screens/checkout Slot/checkout";

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function NavRoutes() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop /> {/* Add ScrollToTop component here */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/forgot-password" element={<Forgotpassword />} />
          <Route exact path="/become-a-tutor" element={<BecomeATutor />} />
          <Route exact path="/register-a-tutor" element={<RegisterTutore />} />
          <Route exact path="/find-tutor/:id" element={<Findtutor />} />
          <Route
            exact
            path="/instructor-consultation"
            element={<Instructorconsultation />}
          />
          <Route exact path="/view-profile" element={<Viewprofile />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog-details/:id" element={<Blogdetails />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/get-started/:id" element={<Getstarted />} />
          <Route exact path="/find-getStarted" element={<FindgetStarted />} />
          <Route exact path="/all-tutors" element={<Alltutors />} />
          <Route
            exact
            path="/view-full-schedule"
            element={<Viewfullschedule />}
          />

          {/* ===== After Login screens =============== */}
          <Route exact path="/message" element={<Message />} />
          <Route exact path="/my-learning" element={<Mylearning />} />
          <Route exact path="/my-course" element={<Mycourse />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/profile-setting" element={<Profilesetting />} />
          <Route exact path="/invite-a-friend" element={<InviteAFriend />} />
          <Route exact path="/checkout" element={<Checkout />} />

          {/*  Book schedule Model */}
          <Route exact path="/book-schedule" element={<Bookschedule />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default NavRoutes;
