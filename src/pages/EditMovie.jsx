import { useEffect, useState } from "react"
import http from "../api/api"
import { useNavigate, useParams } from "react-router"

export default function AddNewMovie() {
    const navigate = useNavigate()

    const params = useParams()

    const [isLoading, setLoading] = useState(false)

    const [form, setForm] = useState({
        title : "",
        director : "",
        release_year : ""
    })

    const handleOnChange = (event) => {
        const {value, name} = event.target
            
            setForm({
                ...form,
                [name]: value
            })
    }

    const fetchMovie = async () => {
        try {
            setLoading(true)

            const response = await http.get(`/movies/${params.id}`)

            if(response.status == 200) {
                const {data} = response.data

                setForm({
                    title : data.title,
                    director : data.director,
                    release_year : data.release_year
                })
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)

            const response = await http.put(`/movies/${params.id}`,form)

            console.log(response);

            if(response.status == 200) {
                navigate("/", {
                    replace : true
                })
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMovie()
    }, [params.id])

    return (
        <div>

        <h1>Edit Movie</h1>
        <form onSubmit={onSubmit}>
        <div>
            <label>Title : </label>
            <input value={form.title} onChange={handleOnChange} name="title" placeholder="Title" />
        </div>
        <div>
            <label >Director</label>
            <input value={form.director} onChange={handleOnChange} name="director" placeholder="Director" />
        </div>
        <div>
            <label>Release Year : </label>
            <input value={form.release_year} onChange={handleOnChange} name="release_year" placeholder="Release Year" />
        </div>
        <button type="submit">
            Simpan
        </button>
        </form>

        </div>

    )
}