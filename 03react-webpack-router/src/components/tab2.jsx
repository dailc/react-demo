import React, {
    Component,
} from 'react';
import bg from '../style/images/bg1.jpg';
import '../style/index.less';

export default class Tab2 extends Component {
    render() {
        return (
            <div>
                <img src={bg} alt="" />
                <div>
                    tab2的内容
                </div>
                <div style={{ height: 400 }} className="bg2" />
            </div>
        );
    }
}