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

interface NotFoundState {
    // currentUser: UserModel
}

interface NotFoundProps extends RouteComponentProps<any> {
    // currentUser: UserModel
}

class NotFoundPage extends React.Component<NotFoundProps, NotFoundState> {
    constructor(props: NotFoundProps) {
      super(props);
    }

    public render(): JSX.Element {     
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md={1}>
                            <Link to="/">[HomePage]</Link>
                        </Col>
                        <Col md={1}>
                            AboutPage
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>404 - PAGE NOT FOUND</h2>
                        </Col>
                    </Row>
                </Container>                
            </>
        )
    }
}

const connectModule = connect(
    (state) => ({
      // Map state to props
    }),
    {
      // Map dispatch to props
    }
)(NotFoundPage);
  
export default withRouter(connectModule);