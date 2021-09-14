import React, {useEffect, useRef} from 'react';
import CallMeModal from "./CallMeModal";
import {connect} from "react-redux";
import {changeCallMeName, changeCallMePhoneNumber} from "../../../redux/actionCreators/callMeActions";
import {compose} from "redux";

const CallMeModalContainer = (props) => {

    return (
        <CallMeModal {...props}/>
    );
};

const mapStateToProps = (state) => {
    return {
        name: state.callMeReducer.name,
        telephoneNumber: state.callMeReducer.telephoneNumber
    }
}

export default compose(
    connect(mapStateToProps, {changeCallMeName, changeCallMePhoneNumber}))(CallMeModalContainer);