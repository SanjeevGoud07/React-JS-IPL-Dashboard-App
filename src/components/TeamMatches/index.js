/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {ListTeam: {}, latest: {}, recent: {}, Url: '', isLoading: true}

  componentDidMount() {
    this.getTeamDet()
  }

  getTeamDet = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamURL: data.team_banner_url,
      R: data.recent_matches,
      L: data.latest_match_details,
    }
    const {teamURL, L, R} = formattedData

    const Late = {
      umpires: L.umpires,
      result: L.result,
      manOfTheMatch: L.man_of_the_match,
      id: L.id,
      date: L.date,
      venue: L.venue,
      compTeam: L.competing_team,
      compLogo: L.competing_team_logo,
      firstI: L.first_innings,
      secondI: L.second_innings,
      status: L.match_status,
    }
    // console.log(Late)
    const Rec = R.map(E => ({
      umpires: E.umpires,
      result: E.result,
      manOfTheMatch: E.man_of_the_match,
      id: E.id,
      date: E.date,
      venue: E.venue,
      compTeam: E.competing_team,
      compLogo: E.competing_team_logo,
      firstI: E.first_innings,
      secondI: E.second_innings,
      status: E.match_status,
    }))
    console.log(Rec[1])
    this.setState({
      ListTeam: formattedData,
      Url: teamURL,
      latest: Late,
      recent: Rec,
      isLoading: false,
    })
  }

  render() {
    const {latest, recent, Url, isLoading} = this.state

    return (
      <div className="Con">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" />
          </div>
        ) : (
          <>
            <div className="Box">
              <img className="banner" src={Url} alt="team banner" />

              <LatestMatch Item={latest} key={latest.id} />
              <ul className="Card-List">
                {recent.map(E => (
                  <MatchCard Items={E} key={E.id} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
