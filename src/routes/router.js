import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
    {
        path : "/",
        lazy : {
            Component : async () => {
                const component = await import("../pages/Movie.jsx")

                return component.default
            }
        },
    }
])

export default router