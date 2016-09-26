import React, {Component, PropTypes} from 'react';
import { Form, ControlLabel, FormGroup, FormControl, Panel } from 'react-bootstrap';
import { connect } from 'react-redux'
import { mealAction, mealValidatePeople, mealValidateDays } from '../actions'

class Meal extends Component {
    render() {
        return (
            <div>
                <Panel header="餐费, 按 30美金/每人/每天 计算" bsStyle="success">
                    <Form>
                        <FormGroup
                            controlId="numOfPeople"
                            validationState={this.props.validateState.NumberOfPeople}>
                            <ControlLabel>人数</ControlLabel>
                            {' '}
                            <FormControl
                                type="text"
                                name="People"
                                placeholder="请填写 ..."
                                onChange={this.props.MealQ}/>
                            <FormControl.Feedback />
                        </FormGroup>
                        {' '}
                        <FormGroup
                            controlId="numOfDays"
                            validationState={this.props.validateState.NumberOfDays}>
                            <ControlLabel>天数</ControlLabel>
                            <FormControl
                                type="text"
                                name="Days"
                                placeholder="请填写 .."
                                onChange={this.props.MealQ}
                                />
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
                name: e.target.name,
                value: e.target.value
            }
            dispatch(mealAction(payload))

            switch (e.target.name) {
                case 'People':
                    dispatch(mealValidatePeople(e.target.value))
                    break;
                case 'Days':
                    dispatch(mealValidateDays(e.target.value))
                    break;
                default:
            }
        },
    }
}

const mapStateToProps = (state) => {
    return {
        validateState: state.validateReducer.mealState,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meal)