import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './Products';
import LogInPage from "./LogInPage";
import AdminPage from "./AdminPage";

export const RoutesApp = () => {
    return (
        <Route>
            <Routes>
                <Route path="/">
                    <Products />
                </Route>
                <Route path="/LogInPage">
                    <LogInPage />
                </Route>
            </Routes>
        </Route>
    )
}