import React, { Component } from 'react';
import { FormGroup, Radio, Panel } from 'react-bootstrap';
import { connect } from 'react-redux'
import { doctorAction } from '../actions'


class Doctor extends Component {

    render() {
        return (
            <div>
                <Panel header="医院费用与生产方式相关" bsStyle="success">
                    <FormGroup >
                        <Radio name="productMode"
                            onClick={this.props.DoctorQ}
                            value="自然产"
                            inline>
                            自然产
                        </Radio>
                        {' '}
                        <Radio name="productMode"
                            onClick={this.props.DoctorQ}
                            value="剖腹产"
                            inline>
                            剖腹产
                        </Radio>
                    </FormGroup>
                </Panel>
                <Panel header="医院等级" bsStyle="success">
                    <FormGroup>
                        <Radio name="hospitalClass"
                            onClick={this.props.DoctorQ}
                            value="高评分"
                            inline>
                            高评分
                        </Radio>
                        {' '}
                        <Radio name="hospitalClass"
                            onClick={this.props.DoctorQ}
                            value="中等评分"
                            inline>
                            中等评分
                        </Radio>
                        {' '}
                        <Radio name="hospitalClass"
                            onClick={this.props.DoctorQ}
                            value="低评分"
                            inline>
                            低评分
                        </Radio>
                    </FormGroup>
                </Panel>
                <Panel header="医生收费等级" bsStyle="success">
                    <FormGroup>
                        <Radio name="doctorClass"
                            onClick={this.props.DoctorQ}
                            value="收费较高"
                            inline>
                            收费较高
                        </Radio>
                        {' '}
                        <Radio name="doctorClass"
                            onClick={this.props.DoctorQ}
                            value="收费中等"
                            inline>
                            收费中等
                        </Radio>
                        {' '}
                        <Radio name="doctorClass"
                            onClick={this.props.DoctorQ}
                            value="收费较低"
                            inline>
                            收费较低
                        </Radio>
                    </FormGroup>
                </Panel>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DoctorQ: (e) => {
            let payload = {
                name: e.target.name,
                value: e.target.value
            }
            dispatch(doctorAction(payload))
        },
    }
}

export default connect(null, mapDispatchToProps)(Doctor)