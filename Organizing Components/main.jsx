
import "./index.css"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)
