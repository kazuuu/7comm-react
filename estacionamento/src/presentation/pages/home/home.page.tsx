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
// import { RootState } from "../../../domain/store/store.config";

interface HomeState {
    currentUser: UserModel
}

interface HomeProps extends RouteComponentProps<any> {
    currentUser: UserModel
}

class HomePage extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
      super(props);
    }

    public render(): JSX.Element {     
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md={1}>
                            HomePage { this.props.currentUser.email}
                        </Col>
                        <Col md={1}>
                            <Link to="/about">[AboutPage]</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Button>Teste</Button>
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
    {
        // setCurrentUser() {
        //     const action = setCurrentUser();
        //     dispatch(action);
        // }
    }
)(HomePage);
  
export default withRouter(connectModule);