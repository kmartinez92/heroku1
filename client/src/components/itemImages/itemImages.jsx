import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const itemImages = (props) => {
	return props.items.allItemsForSale.map((item) => {
		return (
			<div className="col-lg-4 cardSpace" key={item._id}>
				<Card>
					<CardImg className="imgPic" alt={item.item} src={item.image} />
					<CardBody className="cardColor">
						<CardTitle>{item.item} </CardTitle>
						<CardSubtitle className="bottomTextSpace">Type: {item.type}</CardSubtitle>
						<CardSubtitle className="bottomTextSpace">Available: {item.quantity}</CardSubtitle>
						<Button
							className="btn-space"
							color="primary"
							size="lg"
							onClick={(event) => props.handleClick(item._id, item.quantity, item.type, event)}
						>
							+
						</Button>
						<Button
							className="btn-space"
							color="warning"
							size="lg"
							onClick={(event) => props.handleMinusClick(item._id, item.quantity, item.type, event)}
						>
							-
						</Button>
						<Button
							className="btn-space"
							color="danger"
							size="lg"
							onClick={(event) => props.handleDeleteClick(item._id, item.type, event)}
						>
							D
						</Button>
					</CardBody>
				</Card>
			</div>
		);
	});
};

export default itemImages;
