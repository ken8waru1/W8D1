import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'login'
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    processForm: (userForm) => dispatch(login(userForm))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)