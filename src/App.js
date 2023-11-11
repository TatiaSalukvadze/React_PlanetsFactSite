import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//style
import "./App.css";
// pages
import Overview from "./pages/Overview";
import Geology from "./pages/Geology";
import IntStr from "./pages/IntStr";

// layouts
import RootLayout from "./layouts/RootLayout";
import PlanetLayout from "./layouts/PlanetLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path=":planet" element={<PlanetLayout />}>
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="intstr" element={<IntStr />} />
        <Route path="geology" element={<Geology />} />
      </Route>
      {/* <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
