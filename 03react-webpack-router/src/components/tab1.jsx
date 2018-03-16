import React, {
    Component,
} from 'react';
import bg from '../style/images/bg4.jpg';
import readme from '../static/README.md';
import '../style/index.less';

export default class Tab1 extends Component {
    render() {
        return (
            <div>
                <img src={bg} alt="" />
                <div>
                    React+Webpack+ES6从环境搭建到HelloWorld
                </div>
                <div style={{ height: 400 }} className="bg2" />
                <a href={readme} >README.md</a>
                <div style={{ height: 200 }} className="bg1" />
            </div>
        );
    }
}