import { setCurrentUser } from "domain/store/auth/auth.action";
import React from "react";
import { connect } from 'react-redux';

import AboutPage from "../about/about.page"
import { 
    Button,
    Container,
    Col,
    Row
} from 'react-bootstrap';
import { Link } from "react-router-dom";

const HomePage = props => {

    const { currentUser } = props;

    return (
        <>
                <Link to="/about">[About]</Link>

            <Container fluid>
                <Row>
                    <Col md={2}>1 of 1</Col>
                    <Col md={5}>1 of 1</Col>
                    <Col md={5}>1 of 1</Col>
                </Row>
            </Container>
            <aside className="HomePage">
                Home Page ss { currentUser.username }

                <AboutPage />

            </aside>    
            <Button>Show Toast</Button>
        </>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.authReducer.currentUser
    }
}
    
function mapDispatchtoProps(dispatch) {
    return {
        setCurrentUser() {
            const action = setCurrentUser();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(HomePage);