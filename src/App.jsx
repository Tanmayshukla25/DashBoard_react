import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import ContactComponent from "./ContactComponent";
import First from "./First";
import AssestComponent from "./AssetsComponent";
import Dashboard from "./Dashboard";
import Resoursec from "./Resoursec";
import Archive from "./Archive";
import Setting from "./Setting";
import Support from "./Support";
import Technicians from "./Technicians";
import Jobcard from "./Jobcard";
import Clients from "./Clients";
import Users from "./Users";
import SupportTicket from "./SupportTicket";
import DashboardWorking from "./DashboardWorking";
import DashboardOpen from "./OpenFileDashboard";
import ToInvoice from "./ToInvoice";
import DashboardOnsiteTechnincFirst from "./OnSitePagefirst";
import DashboardonsitePageSecond from "./OnsitePageSecond";
import JobCardNext from "./JobCardsNextComponent";
import SiteOverview from "./Ster";
import StrelingInfotech from "./StrelingInfotech";
import Clientstest from "./ClientTest";
import JobClientAdd from "./JobClientAdd";
import Google from "./Google";
import AssetDetails1 from "./AssetDetails1";
import AssetsCPUComponent from "./AssetsCPUComponent";
import SupportTicketNext from "./SupportsTicketsnext";
import LoginPage from "./Loginpage";
import RegisterPage from "./Registration";


import ProtectedRoute from "./ProtectedRoute"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <First />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/app/contact", element: <ContactComponent /> },
      { path: "/app/assets", element: <AssestComponent /> },
      { path: "/app/resoursec", element: <Resoursec /> },
      { path: "/app/setting", element: <Setting /> },
      { path: "/app/support", element: <Support /> },
      { path: "/app/archive", element: <Archive /> },
      { path: "/app/jobcard", element: <Jobcard /> },
      { path: "/app/technicians", element: <Technicians /> },
      { path: "/app/toinvoice", element: <ToInvoice /> },
      { path: "/app/clients", element: <Clients /> },
      { path: "/app/users", element: <Users /> },
      { path: "/app/supportTicket", element: <SupportTicket /> },
      { path: "/app/dashboardWorking", element: <DashboardWorking /> },
      { path: "/app/dashboardOpen", element: <DashboardOpen /> },
      { path: "/app/dashboardOnsiteTechnincSecond", element: <DashboardOnsiteTechnincFirst /> },
      { path: "/app/dashboardonsitePageFirst", element: <DashboardonsitePageSecond /> },
      { path: "/app/jobCardNext", element: <JobCardNext /> },
      { path: "/app/siteOverview", element: <SiteOverview /> },
      { path: "/app/strelingInfotech", element: <StrelingInfotech /> },
      { path: "/app/clientstest", element: <Clientstest /> },
      { path: "/app/jobClientAdd", element: <JobClientAdd /> },
      { path: "/app/google", element: <Google /> },
      { path: "/app/assetDetails1", element: <AssetDetails1 /> },
      { path: "/app/assetsCPUComponent", element: <AssetsCPUComponent /> },
      { path: "/app/supportTicketNext", element: <SupportTicketNext /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
