import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import {
  PageNotFound,
  Home,
  SignIn,
  SignUp,
} from "./pages"
import Layout from "./Layout"
import { Pages, Settings, Templates, UploadFile } from "./components"

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/upload-file" element={<UploadFile/>}/>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={route} />
}

export default App
