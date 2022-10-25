// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {Item} = props
  const {name, teamImageUrl, id} = Item
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="Item">
        <img className="TLogo" src={teamImageUrl} alt={name} />
        <p className="heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
