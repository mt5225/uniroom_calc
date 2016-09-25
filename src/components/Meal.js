import React, {Component, PropTypes} from 'react';
import { Col, Form, InputGroup, ControlLabel, FormGroup, FormControl, Panel } from 'react-bootstrap';
import { connect } from 'react-redux'
import { mealAction } from '../actions'

class Meal extends Component {
    render() {
        return (
            <div>
                <Panel header="餐费, 按 30美金/每人/每天 计算" bsStyle="success">
                    <Form>
                        <FormGroup controlId="numOfPeople" validationState="warning">
                            <ControlLabel>人数</ControlLabel>
                            {' '}
                            <FormControl type="text" placeholder="请填写 ..." />
                            <FormControl.Feedback />
                        </FormGroup>
                        {' '}
                        <FormGroup controlId="numOfDays" validationState="warning">
                            <ControlLabel>天数</ControlLabel>
                            <FormControl type="text" placeholder="请填写 .." />
                            <FormControl.Feedback />
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        MealQ: (e) => {
            let payload = {
                value: e.target.value
            }
            dispatch(mealAction(payload))
        },
    }
}

const mapStateToProps = (state) => {
    return {
        validateState: state.validateReducer.mealState,
    }
}

export default connect(null, mapDispatchToProps)(Meal)