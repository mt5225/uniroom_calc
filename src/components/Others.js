import React, {Component, PropTypes} from 'react';
import { ListGroup, ListGroupItem, FormControl, Panel, Form, ControlLabel, FormGroup, Radio } from 'react-bootstrap';
import { connect } from 'react-redux'
import { otherValidateTraffic, otherValidateMisc } from '../actions'

class Others extends Component {
    render() {
        return (
            <div>
                <Panel header="其他费用" bsStyle="success">
                    <ListGroup>
                        <ListGroupItem>
                            <Form inline>
                                <FormGroup controlId="car" validationState={this.props.validateState.Traffic}>
                                    <ControlLabel>交通费估计，约1, 500人民币每月</ControlLabel>
                                    {' '}
                                    <FormControl
                                        type="text"
                                        placeholder="请填写 ..."
                                        name="Traffic"
                                        onChange={this.props.MiscQ}/>
                                    <FormControl.Feedback />
                                </FormGroup>
                            </Form>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h5>美宝证件（按人数）</h5>
                            <form>
                                <FormGroup>
                                    <Radio name="babyMode" inline>
                                        1
                                    </Radio>
                                    {' '}
                                    <Radio name="babyMode"  inline>
                                        2
                                    </Radio>
                                    {' '}
                                    <Radio name="babyMode" inline>
                                        3
                                    </Radio>
                                </FormGroup>
                            </form>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Form inline>
                                <FormGroup controlId="misc" validationState={this.props.validateState.Misc}>
                                    <ControlLabel>其他项目（如机票）汇总</ControlLabel>
                                    {' '}
                                    <FormControl
                                        type="text"
                                        placeholder="请填写 ..."
                                        name= "Misc"
                                        onChange={this.props.MiscQ}/>
                                    <FormControl.Feedback />
                                </FormGroup>
                            </Form>
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        MiscQ: (e) => {
            // let payload = {
            //     name: e.target.name,
            //     value: e.target.value
            // }
            // dispatch(miscAction(payload))

            switch (e.target.name) {
                case 'Traffic':
                    dispatch(otherValidateTraffic(e.target.value))
                    break;
                case 'Misc':
                    dispatch(otherValidateMisc(e.target.value))
                    break;
                default:
            }
        },
    }
}

const mapStateToProps = (state) => {
    return {
        validateState: state.validateReducer.miscState,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Others);