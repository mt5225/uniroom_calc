import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { Jumbotron, ProgressBar, SplitButton, MenuItem } from 'react-bootstrap';


class Result extends Component {
    render() {
        const progressInstance = (
            <ProgressBar active now={this.props.progressPercentage} 
            label={this.props.progress} />
        );

        const dropdownBtn = (
            <SplitButton bsStyle={'success'} title={'DIY方式'} key={1} id={`split-button-basic-1`}>
                <MenuItem eventKey="1">DIY方式</MenuItem>
                <MenuItem eventKey="2">月子中心</MenuItem>
            </SplitButton>
        );

        return (
            <div>
                <Jumbotron>
                    <h3>&nbsp; 估计：  <code> {this.props.totalPrice}  </code> 人民币</h3>
                    <br/>
                    <h4>&nbsp; &nbsp; 当前选择 ：{dropdownBtn}</h4>
                    <br/>
                    <div> {progressInstance} </div>
                    <p> &nbsp; &#169; uniroom inc, 2016</p>
                </Jumbotron>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const progressString = state.calcReducer.questionAnswered.toString() +
        '/' +
        state.calcReducer.questionTotal.toString()
    const percent = ((state.calcReducer.questionAnswered / state.calcReducer.questionTotal) * 100)
    const finishState =
        state.calcReducer.questionAnswered === state.calcReducer.questionTotal ?
            true : false
    return {
        progress: progressString,
        progressPercentage: percent,
        done: finishState,
        totalPrice: state.calcReducer.totalPrice,
    }
}

export default connect(mapStateToProps, null)(Result);