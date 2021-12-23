import { alterarNumeroMinimo } from "domain/store/actions/numeros.action";
import React from "react";
import { connect } from 'react-redux';

import AboutPage from "./about.page"

const HomePage = props => {

    const { min, max } = props;

    return (
        <aside className="HomePage">
            Home Page ss { min }
            <button onClick={ () => {
                console.log("btnNumeroMinimo");
                props.alterarMinimo(min + 1) 
                console.log(min);
            }}>Add</button>

            <AboutPage />
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
export default connect(mapStateToProps, mapDispatchtoProps)(HomePage);