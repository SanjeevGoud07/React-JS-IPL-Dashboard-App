// Write your code here
import './index.css'

const Matchcard = props => {
  const {Items} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    compTeam,
    compLogo,
    firstI,
    secondI,
    status,
  } = Items

  const ClassN = status === 'Won' ? 'Green' : 'Red'

  return (
    <li className="LCard">
      <img
        className="CompL"
        src={compLogo}
        alt={`competing team ${compTeam}`}
      />
      <p className="CardH">{compTeam}</p>
      <p className="Text">{result}</p>
      <p className={ClassN}>{status}</p>
    </li>
  )
}

export default Matchcard
