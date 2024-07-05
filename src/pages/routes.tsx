import { Route, Routes } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "./Home"

const BlogRoutes = () => {

    return (
       
        <MainLayout>
            <Routes>
                <Route index element={<Home/>}></Route>
            </Routes>
        </MainLayout>
       
    )
}
export default BlogRoutes;