//rfc

import AddNewMovie from "../components/AddNewMovie";
import ListMovie from "../components/ListMovie";

export default function Movie() {
  return (
    <div>
      <ListMovie/>
      <hr/>
      <AddNewMovie/>
    </div>
  )
}
