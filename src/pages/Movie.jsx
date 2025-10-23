//rfc

import { NavLink } from "react-router";
import ListMovie from "../components/ListMovie";

export default function Movie() {
  return (
    <div>
      <NavLink to="/add-movie">Add Movie</NavLink>
      <ListMovie/>
    </div>
  )
}
