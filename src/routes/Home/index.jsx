import React from 'react';
import ReactDOM from 'react-dom';
import { enquireScreen } from 'enquire-js';


import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content6 from './Content6';
import Content7 from './Content7';
import Content8 from './Content8';
import Content9 from './Content9';
import Footer from './Footer';

import './less/antMotion_style.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    } 
    
  }

  render() {
    const children = [
      <Nav id="nav_1_0" key="nav_1_0" isMobile={this.state.isMobile}/>,
      <Content0 id="content_10_0" key="content_10_0" isMobile={this.state.isMobile}/>,
      <Content1 id="content_9_0" key="content_9_0" isMobile={this.state.isMobile}/>,
      <Content2 id="content_2_0" key="content_2_0" isMobile={this.state.isMobile}/>,
      <Content3 id="content_3_0" key="content_3_0" isMobile={this.state.isMobile}/>,
      <Content4 id="content_2_1" key="content_2_1" isMobile={this.state.isMobile}/>,
      <Content6 id="content_4_0" key="content_4_0" isMobile={this.state.isMobile}/>,
      <Content7 id="content_6_0" key="content_6_0" isMobile={this.state.isMobile}/>,
      <Content8 id="content_8_0" key="content_8_0" isMobile={this.state.isMobile}/>,
      <Content9 id="content_7_0" key="content_7_0" isMobile={this.state.isMobile}/>,
      <Footer id="footer_1_0" key="footer_1_0" isMobile={this.state.isMobile}/>,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}
