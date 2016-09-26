import React, { Component } from 'react';
import { FormGroup, FormControl, Panel } from 'react-bootstrap';
import { connect } from 'react-redux'
import { houseAction } from '../actions'

class House extends Component {
    render() {
        return (
            <div>
                <Panel header="选择住宿类型" bsStyle="success">
                    <form>
                        <FormGroup>
                            <FormControl componentClass="select" placeholder="请选择 ..." onChange={this.props.HouseQ}>
                                <option value="type0">请选择 ...</option>
                                <option value="type1">独立屋(3,000美金每月)</option>
                                <option value="type2">公寓类型一(2,500美金每月)</option>
                                <option value="type3">公寓类型二(2,000美金每月)</option>
                            </FormControl>
                        </FormGroup>
                    </form>
                </Panel>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        HouseQ: (e) => {
            let payload = {
                value: e.target.value
            }
            dispatch(houseAction(payload))
        },
    }
}

export default connect(null, mapDispatchToProps)(House)