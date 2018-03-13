// 注意，如果导入了syntax-dynamic-import插件，然后再require会有奇怪的错误
// 还有，impost时，React必须导出，否则会React is not defined

import React, { Component } from 'react';

export default class Tab1 extends Component{
    render() {
        return (
            <div>
                React+Webpack+ES6从环境搭建到HelloWorld
            </div>
        );
    }
};

