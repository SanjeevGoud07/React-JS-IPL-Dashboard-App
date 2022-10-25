// Write your code here
import './index.css'

const LatestMatch = props => {
  const {Item} = props
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
  } = Item
  return (
    <>
      <label htmlFor="Lat" className="Paragraph">
        Latest Matches
      </label>
      <div className="lat" id="Lat">
        <div className="Left">
          <p className="Head">{compTeam}</p>
          <p className="Pa">{date}</p>
          <p className="Text">{venue}</p>
          <p className="Text">{result}</p>
        </div>
        <img
          src={compLogo}
          alt={`latest match ${compTeam}`}
          className="compLogo"
        />
        <div className="Right">
          <p className="TextHead">First Innings</p>
          <p className="Text">{firstI}</p>
          <p className="TextHead">Second Innings</p>
          <p className="Text">{secondI}</p>
          <p className="TextHead">Man Of The Match</p>
          <p className="Text">{manOfTheMatch}</p>
          <p className="TextHead">Umpires</p>
          <p className="Text">{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
