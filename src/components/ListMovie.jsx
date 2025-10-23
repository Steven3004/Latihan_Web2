import { useCallback, useEffect, useState } from "react";
import http from "../api/api";

export default function ListMovie() {
    const [isLoading, setLoading] = useState(false)
    const [movies, setmovies] = useState([])




    const fetchMovies = useCallback(async() => {
        try {
            setLoading(true)

            // mengambil data movie dari endpoint "/movie"
            const response = await http.get("/movies")

            console.log(response.data.data);

            setmovies(response.data.data)
        } catch (error) {
            console.error(error);
        }finally {
            setLoading(false)
        }
    }, [])

    const handleDeleteMovie = async (id) => {
        try {
            const response = await http.delete(`/movies/${id}`)
            console.log(response);

            if(response.status == 200) {
                fetchMovies()
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [fetchMovies])


    return (
        <div>
            <h1>List Movies</h1>

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Director</th>
                        <th>Public Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((item, index) => {
                            return <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.director}</td>
                                <td>{item.release_year}</td>
                                <td>
                                    <button onClick={() => handleDeleteMovie(item.id)}>
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                    })
                  }
                    
                </tbody>
            </table>
        </div>
    )
}