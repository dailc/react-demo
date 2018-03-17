import React, {
    Component,
} from 'react';
import {
    bindActionCreators,
} from 'redux';
import {
    connect,
} from 'react-redux';

import * as actionList from '../actions/index';
import mapState from '../reducers/data';

import bg from '../style/images/bg1.jpg';
import '../style/index.less';

class Tab2 extends Component {
    render() {
        return (
            <div>
                <img src={bg} alt="" />
                <div>
                    tab2的内容
                </div>
                <div>
                    {this.props.contentTab2}
                </div>
                <div style={{ height: 400 }} className="bg2" />
            </div>
        );
    }
}


function bindAction(dispatch) {
    return bindActionCreators(actionList, dispatch);
}

export default connect(mapState, bindAction)(Tab2);