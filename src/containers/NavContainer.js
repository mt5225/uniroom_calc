import Nav from '../components/Nav'
import { connect } from 'react-redux'
import { tabAction } from '../actions'

const mapStateToProps = (state) => {
    return {
        tabId: state.calcReducer.currentTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelect: (id) => {
            dispatch(tabAction(id))
        },
    }
}

let NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer
