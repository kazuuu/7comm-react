import { setCurrentUser } from "../../../domain/store/auth/auth.action";
import AppInputComponent from "../../components/app-input/app-input.component";
import React from "react";
import { connect } from 'react-redux';
import { UserModel } from "../../../domain/models";

interface RootState {
    currentUser: UserModel
}

type DispatchProps = {
}

type Props = {
    currentUser: UserModel
}


const AboutPage: React.FC<Props>  = ({ currentUser }: Props) => {
    return (
        <>
            <aside className="AboutPage">
                About Page ss { currentUser.username }
            </aside>    
        </>
    )
}

function mapStateToProps(state: RootState) {
    return {
        currentUser: state.currentUser
    }
}
    
function mapDispatchtoProps(dispatch: DispatchProps) {
    return {
        // setCurrentUser() {
        //     const action = setCurrentUser();
        //     dispatch(action);
        // }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(AboutPage);