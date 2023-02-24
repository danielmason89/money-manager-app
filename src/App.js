import {
  createBrowserRouter,
  Route,
  Navigate,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/Help/HelpLayout";
import Faq from "./pages/help/faq/Faq";
import Contact, { contactAction } from "./pages/help/contact/Contact";
import NotFound from "./pages/NotFound";
import PlansLayout from "./layout/PlansLayout";
import Plans, { plansLoader } from "./pages/plans/Plans";
import PlansDetails, { planDetailsLoader } from "./pages/plans/PlansDetail";
import PlanError from "./pages/plans/PlanError";
import About from "./pages/about/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="about" element={<About />} />
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route
        path="plans"
        element={<PlansLayout />}
        errorElement={<PlanError />}
      >
        <Route index element={<Plans />} loader={plansLoader} />
        <Route
          path=":id"
          element={<PlansDetails />}
          loader={planDetailsLoader}
        />
      </Route>
      <Route path="/redirect" element={<Navigate to="/" />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
