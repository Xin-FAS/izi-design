"use strict";(self.webpackChunkizid=self.webpackChunkizid||[]).push([[904],{15803:function(K,f,t){t.r(f),t.d(f,{demos:function(){return A}});var s=t(15009),P=t.n(s),l=t(99289),g=t.n(l),c=t(67294),n=t(37542),S=t(8960),A={"docs-demo-demo-0":{component:c.memo(c.lazy(g()(P()().mark(function x(){var C,o;return P()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return C=r.sent,o=C.Demo,r.abrupt("return",{default:function(){return c.createElement(o,null)}});case 5:case"end":return r.stop()}},x)})))),asset:{type:"BLOCK",id:"docs-demo-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Demo } from 'izid'

export default () => {
    return <Demo />
}`},izid:{type:"NPM",value:"0.1.9"}},entry:"index.jsx"},context:{izid:S},renderOpts:{compile:function(){var x=g()(P()().mark(function o(){var d,r=arguments;return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.e(335).then(t.bind(t,37335));case 2:return u.abrupt("return",(d=u.sent).default.apply(d,r));case 3:case"end":return u.stop()}},o)}));function C(){return x.apply(this,arguments)}return C}()}}}},48214:function(K,f,t){var s;t.r(f),t.d(f,{demos:function(){return C}});var P=t(15009),l=t.n(P),g=t(99289),c=t.n(g),n=t(67294),S=t(24431),A=t(8960),x=t(56356),C={"docs-f-antd-input-demo-0":{component:n.memo(n.lazy(c()(l()().mark(function o(){var d,r,a,u,p,e,F,m;return l()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return d=E.sent,r=d.FAntdInput,E.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=E.sent,u=a.useState,p=a.useEffect,e=a.useRef,E.next=12,Promise.resolve().then(t.bind(t,56356));case 12:return F=E.sent,m=F.Button,E.abrupt("return",{default:function(){var i=u(),y=e();p(function(){var I;(I=y.current)===null||I===void 0||I.focus()},[]);var v=function(){i[1]("Hello World")};return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",i[0]),n.createElement(r,{state:i,ref:y}),n.createElement("p",null,n.createElement(m,{type:"primary",onClick:v},"Hello World")))}});case 15:case"end":return E.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd'

export default () => {
    const state = useState();
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current?.focus()
    }, []);

    const setHello = () => {
        state[1]('Hello World')
    }

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput state={state} ref={inputRef} />
        <p><Button type={'primary'} onClick={setHello}>Hello World</Button></p>
    </>;
}`},izid:{type:"NPM",value:"0.1.9"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.24.6"}},entry:"index.jsx"},context:{izid:A,react:s||(s=t.t(n,2)),antd:x},renderOpts:{compile:function(){var o=c()(l()().mark(function r(){var a,u=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,u));case 3:case"end":return e.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"docs-f-antd-input-demo-1":{component:n.memo(n.lazy(c()(l()().mark(function o(){var d,r,a,u;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return d=e.sent,r=d.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,u=a.useState,e.abrupt("return",{default:function(){var m=u(),h=function(M){console.log("\u89E6\u53D1\u641C\u7D22\uFF1A",M)};return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",m[0]),n.createElement(r.Search,{state:m,onSearch:h}))}});case 9:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('\u89E6\u53D1\u641C\u7D22\uFF1A', value)
    }

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Search state={state} onSearch={onSearch} />
    </>;
}`},izid:{type:"NPM",value:"0.1.9"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:A,react:s||(s=t.t(n,2))},renderOpts:{compile:function(){var o=c()(l()().mark(function r(){var a,u=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,u));case 3:case"end":return e.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"docs-f-antd-input-demo-2":{component:n.memo(n.lazy(c()(l()().mark(function o(){var d,r,a,u;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return d=e.sent,r=d.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,u=a.useState,e.abrupt("return",{default:function(){var m=u(),h=function(M){console.log("\u89E6\u53D1\u81EA\u52A8\u641C\u7D22\uFF1A",M)};return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",m[0]),n.createElement(r.Search,{state:m,autoSearch:!0,onSearch:h}))}});case 9:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('\u89E6\u53D1\u81EA\u52A8\u641C\u7D22\uFF1A', value)
    }

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Search state={state} autoSearch onSearch={onSearch} />
    </>;
}`},izid:{type:"NPM",value:"0.1.9"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:A,react:s||(s=t.t(n,2))},renderOpts:{compile:function(){var o=c()(l()().mark(function r(){var a,u=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,u));case 3:case"end":return e.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"docs-f-antd-input-demo-3":{component:n.memo(n.lazy(c()(l()().mark(function o(){var d,r,a,u;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return d=e.sent,r=d.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,u=a.useState,e.abrupt("return",{default:function(){var m=u(),h=function(M){console.log("\u89E6\u53D1\u8282\u6D41\u641C\u7D22\uFF1A",M)};return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",m[0]),n.createElement(r.Search,{state:m,throttleDuration:2e3,onSearch:h}))}});case 9:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('\u89E6\u53D1\u8282\u6D41\u641C\u7D22\uFF1A', value)
    }

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Search state={state} throttleDuration={2000} onSearch={onSearch} />
    </>;
}`},izid:{type:"NPM",value:"0.1.9"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:A,react:s||(s=t.t(n,2))},renderOpts:{compile:function(){var o=c()(l()().mark(function r(){var a,u=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,u));case 3:case"end":return e.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"docs-f-antd-input-demo-4":{component:n.memo(n.lazy(c()(l()().mark(function o(){var d,r,a,u;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return d=e.sent,r=d.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,u=a.useState,e.abrupt("return",{default:function(){var m=u();return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",m[0]),n.createElement(r.Number,{state:m,strict:!0}))}});case 9:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} strict />
    </>;
}`},izid:{type:"NPM",value:"0.1.9"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:A,react:s||(s=t.t(n,2))},renderOpts:{compile:function(){var o=c()(l()().mark(function r(){var a,u=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,u));case 3:case"end":return e.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"docs-f-antd-input-demo-5":{component:n.memo(n.lazy(c()(l()().mark(function o(){var d,r,a,u;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return d=e.sent,r=d.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,u=a.useState,e.abrupt("return",{default:function(){var m=u();return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",m[0]),n.createElement(r.Number,{state:m,mode:"price"}))}});case 9:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'price'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.9"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:A,react:s||(s=t.t(n,2))},renderOpts:{compile:function(){var o=c()(l()().mark(function r(){var a,u=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,u));case 3:case"end":return e.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"docs-f-antd-input-demo-6":{component:n.memo(n.lazy(c()(l()().mark(function o(){var d,r,a,u;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return d=e.sent,r=d.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,u=a.useState,e.abrupt("return",{default:function(){var m=u();return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",m[0]),n.createElement(r.Number,{state:m,mode:"percent"}))}});case 9:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'percent'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.9"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:A,react:s||(s=t.t(n,2))},renderOpts:{compile:function(){var o=c()(l()().mark(function r(){var a,u=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,u));case 3:case"end":return e.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"docs-f-antd-input-demo-7":{component:n.memo(n.lazy(c()(l()().mark(function o(){var d,r,a,u;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return d=e.sent,r=d.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,u=a.useState,e.abrupt("return",{default:function(){var m=u();return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",m[0]),n.createElement(r.Password,{state:m}))}});case 9:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Password state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.9"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:A,react:s||(s=t.t(n,2))},renderOpts:{compile:function(){var o=c()(l()().mark(function r(){var a,u=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,u));case 3:case"end":return e.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"docs-f-antd-input-demo-8":{component:n.memo(n.lazy(c()(l()().mark(function o(){var d,r,a,u;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return d=e.sent,r=d.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,u=a.useState,e.abrupt("return",{default:function(){var m=u("");return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",m[0]),n.createElement(r.OTP,{state:m}))}});case 9:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.OTP state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.9"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:A,react:s||(s=t.t(n,2))},renderOpts:{compile:function(){var o=c()(l()().mark(function r(){var a,u=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,u));case 3:case"end":return e.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"docs-f-antd-input-demo-9":{component:n.memo(n.lazy(c()(l()().mark(function o(){var d,r,a,u;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return d=e.sent,r=d.FAntdInput,e.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=e.sent,u=a.useState,e.abrupt("return",{default:function(){var m=u("");return n.createElement(n.Fragment,null,n.createElement("p",null,"Input Value\uFF1A",m[0]),n.createElement(r.TextArea,{state:m}))}});case 9:case"end":return e.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-9",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.TextArea state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.9"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:A,react:s||(s=t.t(n,2))},renderOpts:{compile:function(){var o=c()(l()().mark(function r(){var a,u=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,u));case 3:case"end":return e.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"docs-f-antd-input-demo-10":{component:n.memo(n.lazy(c()(l()().mark(function o(){var d,r,a,u,p,e,F;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(t.bind(t,8960));case 2:return d=h.sent,r=d.FAntdInput,h.next=6,Promise.resolve().then(t.t.bind(t,67294,19));case 6:return a=h.sent,u=a.useState,h.next=10,Promise.resolve().then(t.bind(t,56356));case 10:return p=h.sent,e=p.Form,F=p.Button,h.abrupt("return",{default:function(){var M=function(y){console.log("\u8868\u5355\u63D0\u4EA4\uFF1A",y)};return n.createElement(e,{onFinish:M},n.createElement(e.Item,{label:"\u8F93\u5165\u6846",name:"value"},n.createElement(r,null)),n.createElement(e.Item,null,n.createElement(F,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4")))}});case 14:case"end":return h.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-10",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';
import { Form, Button } from 'antd'

export default () => {
    const onFinish = data => {
        console.log('\u8868\u5355\u63D0\u4EA4\uFF1A', data)
    }

    return <Form onFinish={onFinish}>
        <Form.Item label={'\u8F93\u5165\u6846'} name={'value'}>
            <FAntdInput />
        </Form.Item>
        <Form.Item>
            <Button type={'primary'} htmlType="submit">\u63D0\u4EA4</Button>
        </Form.Item>
    </Form>;
}`},izid:{type:"NPM",value:"0.1.9"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.24.6"}},entry:"index.jsx"},context:{izid:A,react:s||(s=t.t(n,2)),antd:x},renderOpts:{compile:function(){var o=c()(l()().mark(function r(){var a,u=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,u));case 3:case"end":return e.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}}}},11171:function(K,f,t){t.r(f),t.d(f,{demos:function(){return l}});var s=t(67294),P=t(68537),l={}},8960:function(K,f,t){t.r(f),t.d(f,{Demo:function(){return P},DemoLog:function(){return M},FAntdInput:function(){return E}});var s=t(85893),P=function(){return(0,s.jsx)(s.Fragment,{children:"This is a demo component."})},l=t(97857),g=t.n(l),c=t(13769),n=t.n(c),S=t(38289),A=t(13457),x=t(67294),C=t(111),o=t(14615),d=["state","onChange"],r=["state","onInput"],a=["state","onChange","mode","strict"],u=function(y,v){var I=y.state,z=y.onChange,O=n()(y,d);return g()({ref:v,allowClear:!0,value:I==null?void 0:I[0],onChange:function(R){for(var T,N=arguments.length,L=new Array(N>1?N-1:0),D=1;D<N;D++)L[D-1]=arguments[D];I==null||I[1].apply(I,[(T=R.target.value)===null||T===void 0?void 0:T.trim()].concat(L)),z&&z.apply(void 0,[R].concat(L))}},O)},p=(0,x.forwardRef)(function(i,y){return(0,s.jsx)(S.Z,g()({placeholder:"\u8BF7\u8F93\u5165"},u(i,y)))}),e=S.Z.$$typeof,F=S.Z.render,m=n()(S.Z,["$$typeof","render"]);for(var h in m)p[h]=S.Z[h];p.Password=(0,x.forwardRef)(function(i,y){return(0,s.jsx)(S.Z.Password,g()({placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},u(i,y)))}),p.Search=(0,x.forwardRef)(function(i,y){var v,I,z,O=function(){i.onSearch&&i.onSearch.apply(i,arguments)},B=(0,C.Z)(O,(v=i.throttleDuration)!==null&&v!==void 0?v:0,{trailing:(I=i.throttleTrailing)!==null&&I!==void 0?I:!1}),R=(0,x.useCallback)((0,o.Z)(O,(z=i.debounceDuration)!==null&&z!==void 0?z:500),[]),T=function(L){i.autoSearch&&R(L.target.value),i.onInput&&i.onInput(L)};return(0,s.jsx)(S.Z.Search,g()(g()({placeholder:i.autoSearch?"\u8F93\u5165\u540E\u81EA\u52A8\u641C\u7D22":"\u8BF7\u8F93\u5165"},u(i,y)),{},{onSearch:B,onInput:T}))}),p.TextArea=(0,x.forwardRef)(function(i,y){return(0,s.jsx)(S.Z.TextArea,g()(g()({placeholder:"\u8BF7\u8F93\u5165",showCount:!0,maxLength:100},u(i,y)),{},{style:g()({height:100},i==null?void 0:i.style)}))}),p.OTP=(0,x.forwardRef)(function(i,y){var v=i.state,I=i.onInput,z=n()(i,r);return(0,s.jsx)(S.Z.OTP,g()(g()({ref:y,value:v==null?void 0:v[0]},z),{},{onInput:function(B){v==null||v[1](B.join("")),I&&I(B)}}))}),p.Number=(0,x.forwardRef)(function(i,y){var v=i.state,I=i.onChange,z=i.mode,O=i.strict,B=n()(i,a),R=function(j){return O?~~j:j},T=(0,x.useMemo)(function(){var D={};return z==="price"&&(D={formatter:function($){return"\uFFE5".concat($).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function($){return R($==null?void 0:$.replace(/\￥\s?|(,*)/g,""))}}),z==="percent"&&(D={formatter:function($){return"".concat($,"%")},parser:function($){return R($==null?void 0:$.replace("%",""))}}),D},[]),N=(0,x.useMemo)(function(){if(z==="percent"&&O)return 100},[]),L=function(j){v==null||v[1](j),I&&I(j)};return(0,s.jsx)(A.Z,g()(g()(g()({placeholder:"\u8BF7\u8F93\u5165",ref:y,value:v==null?void 0:v[0],keyboard:!0,changeOnWheel:!0,min:O?0:void 0,max:N,step:O?1:.1,precision:O?0:void 0},T),B),{},{onChange:L}))});var E=p,M=function(){console.log("This is a demo log")}},95305:function(K,f,t){t.r(f),t.d(f,{texts:function(){return P}});var s=t(37542);const P=[{value:"\u8FD9\u662F\u4E00\u4E2ADemo\u7EC4\u4EF6\uFF0C\u7528\u6765\u505A\u6587\u6863\u793A\u4F8B",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"\u65B9\u6CD5\u540D",paraId:2,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:8},{value:"\u8BF4\u660E",paraId:4,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:8},{value:"\u65B9\u6CD5\u540D",paraId:5,tocIndex:9},{value:"\u662F\u5426\u5FC5\u586B",paraId:5,tocIndex:9},{value:"\u8BF4\u660E",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u8BF4\u660E",paraId:6,tocIndex:10},{value:"\u5C5E\u6027\u540D",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:7,tocIndex:12},{value:"\u8BF4\u660E",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"\u65B9\u6CD5\u540D",paraId:8,tocIndex:13},{value:"\u662F\u5426\u5FC5\u586B",paraId:8,tocIndex:13},{value:"\u8BF4\u660E",paraId:8,tocIndex:13},{value:"\u5C5E\u6027",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14}]},87455:function(K,f,t){t.r(f),t.d(f,{texts:function(){return P}});var s=t(24431);const P=[{value:"\u8FD9\u662F\u4E00\u4E2A\u6709\u5404\u79CD\u5E38\u89C1\u4E1A\u52A1\u573A\u666F\u7684Antd Input\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:1,tocIndex:2},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:2,tocIndex:3},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:3},{value:"debounceDuration",paraId:3},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:3},{value:"500",paraId:3},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:3},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:4,tocIndex:4},{value:"\u4F7F\u7528",paraId:5},{value:"throttleDuration",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:5},{value:"0",paraId:5},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:5},{value:"\u4F7F\u7528",paraId:5},{value:"throttleTrailing",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u641C\u7D22\uFF0C\u9ED8\u8BA4",paraId:5},{value:"false",paraId:5},{value:"\u5728\u8868\u5355\u4E2D\u65B9\u6CD5\u4F7F\u7528\u540CAntd Input\uFF0C\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:6,tocIndex:11},{value:"\u4F60\u4E0D\u80FD\u5728\u8868\u5355\u4E2D\u4F7F\u7528setState\u53BB\u4FEE\u6539\u8868\u5355\u57DF\u7684\u503C\uFF0C\u8BE6\u89C1\uFF1A",paraId:7},{value:"FormItem",paraId:7},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:8,tocIndex:13},{value:"Antd Input",paraId:8,tocIndex:13},{value:"\u5C5E\u6027\u540D",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14},{value:"\u662F\u5426\u5FC5\u586B",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:14},{value:"state",paraId:9,tocIndex:14},{value:"string",paraId:9,tocIndex:14},{value:"false",paraId:9,tocIndex:14},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:9,tocIndex:14},{value:"\u7EC4\u4EF6\u5185\u90E8\u4F9D\u636E",paraId:10,tocIndex:15},{value:"lodash-es",paraId:10,tocIndex:15},{value:"\u4F9D\u8D56\uFF0C\u8BF7\u5148\u4F7F\u7528",paraId:10,tocIndex:15},{value:"npm install lodash-es",paraId:10,tocIndex:15},{value:"\u4E0B\u8F7D\u6240\u9700\u4F9D\u8D56 \uFF0C\u914D\u7F6E\u9879\u7EE7\u627F",paraId:10,tocIndex:15},{value:"Antd Input.Search",paraId:10,tocIndex:15},{value:"\u5C5E\u6027\u540D",paraId:11,tocIndex:16},{value:"\u7C7B\u578B",paraId:11,tocIndex:16},{value:"\u662F\u5426\u5FC5\u586B",paraId:11,tocIndex:16},{value:"\u8BF4\u660E",paraId:11,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:16},{value:"state",paraId:11,tocIndex:16},{value:"string",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:11,tocIndex:16},{value:"autoSearch",paraId:11,tocIndex:16},{value:"function",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8F93\u5165\u65F6\u662F\u5426\u81EA\u52A8\u4F7F\u7528\u9632\u6296\u641C\u7D22",paraId:11,tocIndex:16},{value:"debounceDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u5F00\u542FautoSearch\u540E\uFF0C\u9632\u6296\u65F6\u95F4",paraId:11,tocIndex:16},{value:"500",paraId:11,tocIndex:16},{value:"throttleDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u89E6\u53D1\u641C\u7D22\u4E8B\u4EF6\u65F6\u8282\u6D41\u65F6\u95F4",paraId:11,tocIndex:16},{value:"0",paraId:11,tocIndex:16},{value:"throttleTrailing",paraId:11,tocIndex:16},{value:"boolean",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8282\u6D41\u641C\u7D22\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u89E6\u53D1\u641C\u7D22",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:12,tocIndex:17},{value:"Antd InputNumber",paraId:12,tocIndex:17},{value:"\u5C5E\u6027\u540D",paraId:13,tocIndex:18},{value:"\u7C7B\u578B",paraId:13,tocIndex:18},{value:"\u662F\u5426\u5FC5\u586B",paraId:13,tocIndex:18},{value:"\u8BF4\u660E",paraId:13,tocIndex:18},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:18},{value:"state",paraId:13,tocIndex:18},{value:"string",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:13,tocIndex:18},{value:"mode",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:" ",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:"\u4EF7\u683C\u6A21\u5F0F\u3001",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"\u767E\u5206\u6BD4\u6A21\u5F0F\uFF0C\u51FA\u73B0\u56FA\u5B9A\u7684\u683C\u5F0F",paraId:13,tocIndex:18},{value:"strict",paraId:13,tocIndex:18},{value:"boolean",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E25\u683C\u9650\u5236\uFF0C\u9650\u5236\u4E3A\u6B63\u6574\u6570\u3001\u6B65\u957F\u4E3A1\u3001\u767E\u5206\u6BD4\u6A21\u5F0F\u4E0B\u9650\u5236\u6700\u5927\u503C100",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E0EAntd Input.XXX\u76F8\u540C\uFF0C",paraId:14,tocIndex:19},{value:"Antd Input",paraId:14,tocIndex:19}]},51446:function(K,f,t){t.r(f),t.d(f,{texts:function(){return P}});var s=t(68537);const P=[{value:`\u8FD9\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u5C01\u88C5\u7EC4\u4EF6\uFF0C\u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u4E1A\u52A1\u529F\u80FD\uFF0C\u4E3B\u8981\u4E3A\u4E86\u907F\u514D\u5728\u9879\u76EE\u4E2D\u7EC4\u4EF6\u7684\u7B80\u5355\u5C5E\u6027\u5197\u4F59\u3002
\u4EE5\u4E0B\u662F\u5C01\u88C5\u539F\u5219\uFF1A`,paraId:0,tocIndex:0},{value:"\u4E0D\u7834\u574F\u539F\u6709\u7EC4\u4EF6\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\u3001Ref\u3001\u5B50\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u4FDD\u6301\u539F\u6709\u7EC4\u4EF6\u7684\u53EF\u62D3\u5C55\u6027",paraId:1,tocIndex:0},{value:`npm install izid
# or
pnpm add izid
# or
yarn add izid
`,paraId:2,tocIndex:1},{value:"Npm",paraId:3,tocIndex:2}]}}]);
