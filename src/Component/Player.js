import React from 'react'
import {Card,ListGroup}  from 'react-bootstrap'

const Player = ({jerseyNumber,age,name, nationality,imageUrl,team}) => {
  // console.log(data)
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Team: {team}
        </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Nationality: {nationality}</ListGroup.Item>
        <ListGroup.Item>JerseyNumber: {jerseyNumber}</ListGroup.Item>
        <ListGroup.Item>Age: {age}</ListGroup.Item>
        </ListGroup>
    </Card>

    )
}
// defining default props for each attribute
Player.defaultProps = {
  name: 'Lionel Messi',
  age : '36 years',
  jerseyNumber: '2',
  nationality :'Argentin',
  team: 'TInter Miami CF',
  photo: 'https://www.lejdd.fr/lmnr/var/jdd/public/media/image/2023/06/03/19/2023-06-01t120701z_1658076920_rc2xx0afkmhj_rtrmadp_3_soccer-france-psg-messi.jpg?VersionId=ccdteb_6p_PJSRhwBsEpnaP2R4iN27b1'
}
export default Player