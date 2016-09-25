import React, {Component, PropTypes} from 'react';
import { FormGroup, Radio, Panel } from 'react-bootstrap';
import { connect } from 'react-redux'
import { careAction } from '../actions'

class Care extends Component {
    render() {
        return (
            <div>
                <Panel header="是否需要聘请月嫂 (～4,500人民币 + 15% 小费)" bsStyle="success">
                    <form>
                        <FormGroup>
                            <Radio name="careMode"
                                value="yes"
                                onClick={this.props.CareQ}
                                inline>
                                需要
                            </Radio>
                            {' '}
                            <Radio name="careMode"
                                value="no"
                                onClick={this.props.CareQ}
                                inline>
                                不需要
                            </Radio>
                        </FormGroup>
                    </form>
                </Panel>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CareQ: (e) => {
            let payload = {
                value: e.target.value
            }
            dispatch(careAction(payload))
        },
    }
}

export default connect(null, mapDispatchToProps)(Care)