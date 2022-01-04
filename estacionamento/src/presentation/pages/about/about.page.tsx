import React from "react";
import { connect } from 'react-redux';
import { 
    Button,
    Container,
    Col,
    Row
} from 'react-bootstrap';
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { UserModel } from "../../../domain/models";
import { setCurrentUser } from "../../../domain/store/auth/auth.action";

interface AboutState {
    currentUser: UserModel
}

interface AboutProps extends RouteComponentProps<any> {
    currentUser: UserModel,
    setCurrentUser(username: string, email: string): any,
}

class AboutPage extends React.Component<AboutProps, AboutState> {
    constructor(props: AboutProps) {
      super(props);
    }

    public render(): JSX.Element {     
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md={2}>
                            <Link to="/">[HomePage]</Link>
                        </Col>
                        <Col md={2}>
                            AboutPage
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Button onClick={() => {this.props.setCurrentUser("aboutUser", "aboutUser@teste.com");}}>setAboutUser</Button>
                        </Col>
                        <Col md={2}>
                        { this.props.currentUser.username}<br />
                        { this.props.currentUser.email}
                        </Col>

                    </Row>
                </Container>                
            </>
        )
    }
}

const connectModule = connect(
    (state: any) => ({
        currentUser: state.authReducer.currentUser
    }),
    (dispatch, ownProps) => ({
        setCurrentUser(username: string, email: string) {
            const action = setCurrentUser(username, email);
            dispatch(action);
        }
    }),
)(AboutPage);
  
export default withRouter(connectModule);
