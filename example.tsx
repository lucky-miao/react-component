import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button/button.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from './lib/form/form.example';
import ScrollExample from './lib/scroll/scroll.example';
import CheckboxExample from './lib/checkbox/checkbox.example';
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import './example.scss';
import IconDemo from './lib/icon/icon.demo';


const logo = require('./logo.png');

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="48" height="48" alt=""/>
          <span> LUI </span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">按钮</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
            <li>
              <NavLink to="/form">表单</NavLink>
            </li>
            <li>
              <NavLink to="/scroll">滚动条</NavLink>
            </li>
            <li>
              <NavLink to="/checkbox">多选框</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/form" component={FormExample}/>
          <Route path="/scroll" component={ScrollExample}/>
          <Route path="/checkbox" component={CheckboxExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy; 缪云起
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));