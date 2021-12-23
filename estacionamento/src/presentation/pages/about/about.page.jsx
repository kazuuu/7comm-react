import { alterarNumeroMinimo } from "domain/store/auth/auth.action";
import AppInputComponent from "presentation/components/app-input/app-input.component";
import React from "react";
import { connect } from 'react-redux';

const AboutPage = props => {

    const { min, max } = props;

    return (
        <aside className="AboutPage">
            About Page ss { min }
            <AppInputComponent></AppInputComponent>
        </aside>
    );
    
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }

}

function mapDispatchtoProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(AboutPage);