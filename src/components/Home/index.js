/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'

import {Component} from 'react'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {List: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const formattedData = teams.map(Each => ({
      name: Each.name,
      id: Each.id,
      teamImageUrl: Each.team_image_url,
    }))
    console.log(formattedData)
    this.setState({List: formattedData, isLoading: false})
  }

  render() {
    const {List, isLoading} = this.state
    return (
      <div className="Con">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#FF0000" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="Logo-Con">
              <img
                className="Logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="Logo-Heading">IPL Dashboard</h1>
            </div>
            <ul className="List">
              {List.map(E => (
                <TeamCard Item={E} key={E.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
