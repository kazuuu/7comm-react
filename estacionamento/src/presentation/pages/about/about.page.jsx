import { setCurrentUser } from "domain/store/auth/auth.action";
import AppInputComponent from "presentation/components/app-input/app-input.component";
import React from "react";
import { connect } from 'react-redux';

const AboutPage = props => {

    const { currentUser } = props;

    return (
        <aside className="AboutPage">
            About Page ss { currentUser.username }
            <AppInputComponent></AppInputComponent>
            <button onClick={ () => {
                props.setCurrentUser("teste1", "teste1@teste.com.br");
            }}>Add</button>
        </aside>
    );
    
}

function mapStateToProps(state) {
    return {
        currentUser: state.authReducer.currentUser
    }
}


function mapDispatchtoProps(dispatch) {
    return {
        setCurrentUser(username, email) {
            const action = setCurrentUser(username, email);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(AboutPage);