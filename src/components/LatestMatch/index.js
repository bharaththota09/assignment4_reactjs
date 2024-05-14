import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      secondInnings,
      umpires,
      venue,
      result,
      manOfTheMatch,
    } = latestMatch

    return (
      <div>
        <h1>Latest Match</h1>
        <div>
          <div>
            <div>
              <p>{competingTeam}</p>
              <p>{date}</p>
              <p>{venue}</p>
              <p>{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div>
            <div>
              <p>First Inninngs</p>
              <p>{firstInnings}</p>
            </div>
            <div>
              <p>Second Innings</p>
              <p>{secondInnings}</p>
            </div>
            <div>
              <p>Man of Match</p>
              <p>{manOfTheMatch}</p>
            </div>
            <div>
              <p>Umpires</p>
              <p>{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
