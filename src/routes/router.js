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
    },
    {
        path : "/add-movie",
        lazy : {
            Component : async () => {
                const component = await import("../pages/AddNewMovie.jsx")

                return component.default
            }
        },
    },
    {
        path : "/edit-movie/:id",//menambahkan parameter untuk esit-movie
        lazy : {
            Component : async () => {
                const component = await import("../pages/EditMovie.jsx")

                return component.default
            }
        },
    },
])

export default router