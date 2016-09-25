import React, {Component, PropTypes} from 'react';
import { ListGroup, ListGroupItem,FormControl, Panel, Form, ControlLabel, FormGroup,Radio } from 'react-bootstrap';

class Others extends Component {
    render() {
        return (
            <div>
                <Panel header="其他费用" bsStyle="success">
                    <ListGroup>
                        <ListGroupItem>
                        <Form inline>
                                <FormGroup controlId="car">
                                    <ControlLabel>交通费估计，约1,500人民币每月</ControlLabel>
                                    {' '}
                                    <FormControl type="text" placeholder="1500" />
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
                                <FormGroup controlId="misc">
                                    <ControlLabel>其他项目（如机票）汇总</ControlLabel>
                                    {' '}
                                    <FormControl type="text" placeholder="请填写 ..." />
                                </FormGroup>

                            </Form>
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
            </div>
        );
    }
}

Others.propTypes = {

};

export default Others;