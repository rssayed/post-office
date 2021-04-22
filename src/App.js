/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Routes from './routes/index';
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  
//<Route path='/data/:tab' component={Data} />
  
  render() {
		return (
			<Container fluid>
				<Row>
					<Col className="p-0">
						<Routes />
					</Col>
				</Row>
			</Container>
		);
	}
}





