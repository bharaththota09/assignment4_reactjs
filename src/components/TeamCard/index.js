import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  return (
    <li>
      <Link to={`/team-matches/${teamData.id}`}>
        <div>
          <img src={teamData.teamImageUrl} alt={teamData.name} />
          <p>{teamData.name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
