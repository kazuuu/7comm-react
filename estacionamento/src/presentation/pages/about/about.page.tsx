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

interface AboutState {
    // currentUser: UserModel
}

interface AboutProps extends RouteComponentProps<any> {
    // currentUser: UserModel
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
                        <Col md={1}>
                            <Link to="/">[HomePage]</Link>
                        </Col>
                        <Col md={1}>
                            AboutPage
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
    (state) => ({
      // Map state to props
    }),
    {
      // Map dispatch to props
    }
)(AboutPage);
  
export default withRouter(connectModule);