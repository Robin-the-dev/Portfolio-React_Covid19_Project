import React from 'react';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
	width: 15rem;
	text-align: center;
	margin: 1rem auto;
`;

const MyCard = ({header, title, text}) => {
	return (
		<StyledCard bg='light'>
			<Card.Header>{header}</Card.Header>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{text}</Card.Text>
			</Card.Body>
		</StyledCard>
	);
}

export default MyCard;
