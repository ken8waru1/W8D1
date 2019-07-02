import { connect } from 'react-redux';
import { logout } from '../actions/session_actions'
import Greeting from './greeting'


const mapStateToProps = (state) => {
  let currentUserId = state.session.currentUserId;
  return ({
    currentUser: state.entities.users[currentUserId]
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting)