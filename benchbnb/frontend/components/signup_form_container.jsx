import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'login'
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    processForm: (userForm) => dispatch(signup(userForm))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)