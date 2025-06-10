"use strict";(self.webpackChunkizid=self.webpackChunkizid||[]).push([[904],{15803:function(q,T,e){e.r(T),e.d(T,{demos:function(){return P}});var i=e(15009),W=e.n(i),g=e(99289),E=e.n(g),o=e(67294),s=e(41244),P={"docs-demo-demo-0":{component:o.memo(o.lazy(E()(W()().mark(function l(){var S,y;return W()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return S=u.sent,y=S.Demo,u.abrupt("return",{default:function(){return o.createElement(y,null)}});case 5:case"end":return u.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-demo-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Demo } from 'izid'

export default () => {
    return <Demo />
}`},izid:{type:"NPM",value:"0.1.13"}},entry:"index.jsx"},context:{izid:s},renderOpts:{compile:function(){var l=E()(W()().mark(function y(){var I,u=arguments;return W()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(I=a.sent).default.apply(I,u));case 3:case"end":return a.stop()}},y)}));function S(){return l.apply(this,arguments)}return S}()}}}},48214:function(q,T,e){var i;e.r(T),e.d(T,{demos:function(){return S}});var W=e(15009),g=e.n(W),E=e(99289),o=e.n(E),s=e(67294),P=e(41244),l=e(88478),S={"docs-f-antd-input-demo-0":{component:s.memo(s.lazy(o()(g()().mark(function y(){var I,u,r,a,d,n,p,t;return g()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=m.sent,u=I.FAntdInput,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=m.sent,a=r.useState,d=r.useEffect,n=r.useRef,m.next=12,Promise.resolve().then(e.bind(e,88478));case 12:return p=m.sent,t=p.Button,m.abrupt("return",{default:function(){var f=a(),h=n();d(function(){var D;setTimeout((D=h.current)===null||D===void 0?void 0:D.focus,1e3)},[]);var A=function(){f[1]("Hello World")};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",f[0]),s.createElement(u,{state:f,ref:h}),s.createElement("p",null,s.createElement(t,{type:"primary",onClick:A},"Hello World")))}});case 15:case"end":return m.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd'

export default () => {
    const state = useState();
    const inputRef = useRef()

    useEffect(() => {
        setTimeout(inputRef.current?.focus, 1000)
    }, []);

    const setHello = () => {
        state[1]('Hello World')
    }

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput state={state} ref={inputRef} />
        <p><Button type={'primary'} onClick={setHello}>Hello World</Button></p>
    </>;
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.4"}},entry:"index.jsx"},context:{izid:P,react:i||(i=e.t(s,2)),antd:l},renderOpts:{compile:function(){var y=o()(g()().mark(function u(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return y.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-1":{component:s.memo(s.lazy(o()(g()().mark(function y(){var I,u,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a(),c=function(v){console.log("\u89E6\u53D1\u641C\u7D22\uFF1A",v)};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Search,{state:t,onSearch:c}))}});case 9:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:i||(i=e.t(s,2))},renderOpts:{compile:function(){var y=o()(g()().mark(function u(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return y.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-2":{component:s.memo(s.lazy(o()(g()().mark(function y(){var I,u,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a(),c=function(v){console.log("\u89E6\u53D1\u81EA\u52A8\u641C\u7D22\uFF1A",v)};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Search,{state:t,autoSearch:!0,onSearch:c}))}});case 9:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:i||(i=e.t(s,2))},renderOpts:{compile:function(){var y=o()(g()().mark(function u(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return y.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-3":{component:s.memo(s.lazy(o()(g()().mark(function y(){var I,u,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a(),c=function(v){console.log("\u89E6\u53D1\u8282\u6D41\u641C\u7D22\uFF1A",v)};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Search,{state:t,throttleDuration:2e3,onSearch:c}))}});case 9:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:i||(i=e.t(s,2))},renderOpts:{compile:function(){var y=o()(g()().mark(function u(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return y.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-4":{component:s.memo(s.lazy(o()(g()().mark(function y(){var I,u,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Number,{state:t,strict:!0}))}});case 9:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} strict />
    </>;
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:i||(i=e.t(s,2))},renderOpts:{compile:function(){var y=o()(g()().mark(function u(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return y.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-5":{component:s.memo(s.lazy(o()(g()().mark(function y(){var I,u,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Number,{state:t,mode:"price"}))}});case 9:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'price'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:i||(i=e.t(s,2))},renderOpts:{compile:function(){var y=o()(g()().mark(function u(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return y.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-6":{component:s.memo(s.lazy(o()(g()().mark(function y(){var I,u,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Number,{state:t,mode:"percent"}))}});case 9:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'percent'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:i||(i=e.t(s,2))},renderOpts:{compile:function(){var y=o()(g()().mark(function u(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return y.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-7":{component:s.memo(s.lazy(o()(g()().mark(function y(){var I,u,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Password,{state:t}))}});case 9:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Password state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:i||(i=e.t(s,2))},renderOpts:{compile:function(){var y=o()(g()().mark(function u(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return y.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-8":{component:s.memo(s.lazy(o()(g()().mark(function y(){var I,u,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a("");return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.OTP,{state:t}))}});case 9:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.OTP state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:i||(i=e.t(s,2))},renderOpts:{compile:function(){var y=o()(g()().mark(function u(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return y.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-9":{component:s.memo(s.lazy(o()(g()().mark(function y(){var I,u,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a("");return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.TextArea,{state:t}))}});case 9:case"end":return n.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-9",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.TextArea state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:i||(i=e.t(s,2))},renderOpts:{compile:function(){var y=o()(g()().mark(function u(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return y.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-10":{component:s.memo(s.lazy(o()(g()().mark(function y(){var I,u,r,a,d,n,p;return g()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=c.sent,u=I.FAntdInput,c.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=c.sent,a=r.useState,c.next=10,Promise.resolve().then(e.bind(e,88478));case 10:return d=c.sent,n=d.Form,p=d.Button,c.abrupt("return",{default:function(){var v=function(h){console.log("\u8868\u5355\u63D0\u4EA4\uFF1A",h)};return s.createElement(n,{onFinish:v},s.createElement(n.Item,{label:"\u8F93\u5165\u6846",name:"value"},s.createElement(u,null)),s.createElement(n.Item,null,s.createElement(p,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4")))}});case 14:case"end":return c.stop()}},y)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-10",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.4"}},entry:"index.jsx"},context:{izid:P,react:i||(i=e.t(s,2)),antd:l},renderOpts:{compile:function(){var y=o()(g()().mark(function u(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return y.apply(this,arguments)}return I}()}}}},26220:function(q,T,e){e.r(T),e.d(T,{demos:function(){return l}});var i=e(15009),W=e.n(i),g=e(99289),E=e.n(g),o=e(67294),s=e(41244),P=e(88478),l={"docs-f-antd-order-table-demo-0":{component:o.memo(o.lazy(E()(W()().mark(function S(){var y,I,u,r,a;return W()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return y=n.sent,I=y.FAntdOrderTable,n.next=6,Promise.resolve().then(e.bind(e,88478));case 6:return u=n.sent,r=u.Space,a=function(t){var c=t.current,m=t.pageSize;return new Promise(function(v){setTimeout(function(){v({code:"0",count:21,data:Array.from({length:21},function(f,h){return{orderInfo:{hotelName:"\u676D\u5DDE\u897F\u6E56XXXX\u9152\u5E97".concat(h+1,"\u53F7"),houseType:"\u9AD8\u7EA7\u5927\u5E8A\u623F",breakfastType:"\u53CC\u65E9",startDate:"2025/05/15",endDate:"2025/05/16",dayCount:1,roomCount:1},contactInfo:{checkName:"\u674E\u56DB",contactName:"\u738B\u4E94"},payInfo:{paymentAmount:200,projectedIncome:200},systemOrderId:"1234567890",createDate:"2025-05-14 15:45:05",orderStatus:"\u5F85\u53D1\u8D27",more:"\u8FD9\u662F\u7B2C".concat(h+1,"\u6761\u6570\u636E")}}).slice((c-1)*m,c*m)})},300)})},n.abrupt("return",{default:function(){var t=[{title:"\u8BA2\u5355\u4FE1\u606F",dataIndex:"orderInfo",render:function(f){return o.createElement(o.Fragment,null,o.createElement("div",null,f.hotelName),o.createElement("div",null,f.houseType,"/",f.breakfastType),o.createElement("div",null,"".concat(f.startDate,"~").concat(f.endDate," ").concat(f.dayCount,"\u665A ").concat(f.roomCount,"\u95F4")))}},{title:"\u8054\u7CFB\u4FE1\u606F",dataIndex:"contactInfo",render:function(f){return o.createElement(o.Fragment,null,o.createElement("div",null,"\u5165\u4F4F\u4EBA\uFF1A",f.checkName),o.createElement("div",null,"\u8054\u7CFB\u4EBA\uFF1A",f.contactName))}},{title:"\u652F\u4ED8\u4FE1\u606F",dataIndex:"payInfo",render:function(f){return o.createElement(o.Fragment,null,o.createElement("div",null,"\u652F\u4ED8\u91D1\u989D\uFF1A\xA5",f.paymentAmount),o.createElement("div",null,"\u9884\u8BA1\u6536\u5165\uFF1A\xA5",f.projectedIncome))}},{title:"\u8BA2\u5355\u72B6\u6001",dataIndex:"orderStatus"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement(r,{direction:"vertical"},o.createElement("a",null,"\u62D2\u5355"),o.createElement("a",null,"\u786E\u8BA4\u53D1\u8D27"),o.createElement("a",null,"\u590D\u5236\u8BA2\u5355"))}}],c=[{label:"\u7CFB\u7EDF\u8BA2\u5355\u53F7",render:function(f){return f.systemOrderId}},{label:"\u4E0B\u5355\u65F6\u95F4",render:function(f){return f.createDate}}],m=function(f){return o.createElement(r,null,o.createElement("a",null,"\u5F55\u5165"),o.createElement("a",null,"\u91C7\u8D2D"),o.createElement("a",null,"\u5907\u6CE8"),o.createElement("a",null,"\u8BE6\u60C5"),o.createElement("a",null,"\u65E5\u5FD7"))};return o.createElement(I,{api:a,columns:t,headerRender:c,headerOptions:m})}});case 10:case"end":return n.stop()}},S)})))),asset:{type:"BLOCK",id:"docs-f-antd-order-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdOrderTable } from 'izid'
import { Space } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                orderInfo: {
                    hotelName: \`\u676D\u5DDE\u897F\u6E56XXXX\u9152\u5E97\${index + 1}\u53F7\`,
                    houseType: '\u9AD8\u7EA7\u5927\u5E8A\u623F',
                    breakfastType: '\u53CC\u65E9',
                    startDate: '2025/05/15',
                    endDate: '2025/05/16',
                    dayCount: 1,
                    roomCount: 1
                },
                contactInfo: {
                    checkName: '\u674E\u56DB',
                    contactName: '\u738B\u4E94'
                },
                payInfo: {
                    paymentAmount: 200,
                    projectedIncome: 200
                },
                systemOrderId: '1234567890',
                createDate: '2025-05-14 15:45:05',
                orderStatus: '\u5F85\u53D1\u8D27',
                more: \`\u8FD9\u662F\u7B2C\${index + 1}\u6761\u6570\u636E\`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '\u8BA2\u5355\u4FE1\u606F',
            dataIndex: 'orderInfo',
            render (orderInfo) {
                return <>
                    <div>{orderInfo.hotelName}</div>
                    <div>{orderInfo.houseType}/{orderInfo.breakfastType}</div>
                    <div>{\`\${orderInfo.startDate}~\${orderInfo.endDate} \${orderInfo.dayCount}\u665A \${orderInfo.roomCount}\u95F4\`}</div>
                </>
            }
        },
        {
            title: '\u8054\u7CFB\u4FE1\u606F',
            dataIndex: 'contactInfo',
            render (contactInfo) {
                return <>
                    <div>\u5165\u4F4F\u4EBA\uFF1A{contactInfo.checkName}</div>
                    <div>\u8054\u7CFB\u4EBA\uFF1A{contactInfo.contactName}</div>
                </>
            }
        },
        {
            title: '\u652F\u4ED8\u4FE1\u606F',
            dataIndex: 'payInfo',
            render (payInfo) {
                return <>
                    <div>\u652F\u4ED8\u91D1\u989D\uFF1A\xA5{payInfo.paymentAmount}</div>
                    <div>\u9884\u8BA1\u6536\u5165\uFF1A\xA5{payInfo.projectedIncome}</div>
                </>
            }
        },
        {
            title: '\u8BA2\u5355\u72B6\u6001',
            dataIndex: 'orderStatus',
        },
        {
            title: '\u64CD\u4F5C',
            key: 'active',
            render: () => <Space direction="vertical">
                <a>\u62D2\u5355</a>
                <a>\u786E\u8BA4\u53D1\u8D27</a>
                <a>\u590D\u5236\u8BA2\u5355</a>
            </Space>
        }
    ]
    const headerRender = [
        {
            label: '\u7CFB\u7EDF\u8BA2\u5355\u53F7',
            render: row => row.systemOrderId
        },
        {
            label: '\u4E0B\u5355\u65F6\u95F4',
            render: row => row.createDate
        },
    ]
    const headerOptions = row => <Space>
        <a>\u5F55\u5165</a>
        <a>\u91C7\u8D2D</a>
        <a>\u5907\u6CE8</a>
        <a>\u8BE6\u60C5</a>
        <a>\u65E5\u5FD7</a>
    </Space>

    return <FAntdOrderTable
        api={TableDataAPI}
        columns={columns}
        headerRender={headerRender}
        headerOptions={headerOptions}
    />
}`},izid:{type:"NPM",value:"0.1.13"},antd:{type:"NPM",value:"5.25.4"}},entry:"index.jsx"},context:{izid:s,antd:P},renderOpts:{compile:function(){var S=E()(W()().mark(function I(){var u,r=arguments;return W()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(335).then(e.bind(e,37335));case 2:return d.abrupt("return",(u=d.sent).default.apply(u,r));case 3:case"end":return d.stop()}},I)}));function y(){return S.apply(this,arguments)}return y}()}}}},62511:function(q,T,e){var i;e.r(T),e.d(T,{demos:function(){return I}});var W=e(5574),g=e.n(W),E=e(15009),o=e.n(E),s=e(99289),P=e.n(s),l=e(67294),S=e(41244),y=e(88478),I={"docs-f-antd-table-demo-0":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=p.sent,a=r.FAntdTable,d=function(c){var m=c.current,v=c.pageSize;return new Promise(function(f){setTimeout(function(){f({code:"0",total:21,data:Array.from({length:21},function(h,A){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(A+1,"\u6761\u6570\u636E")}}).slice((m-1)*v,m*v)})},300)})},p.abrupt("return",{default:function(){var c=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:d,columns:c})}});case 6:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: \`\u8FD9\u662F\u7B2C\${index + 1}\u6761\u6570\u636E\`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '\u59D3\u540D',
            dataIndex: 'name',
        },
        {
            title: '\u8BF4\u660E',
            dataIndex: 'more',
        },
        {
            title: '\u64CD\u4F5C',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    return <FAntdTable
        api={TableDataAPI}
        columns={columns}
    />
}`},izid:{type:"NPM",value:"0.1.13"}},entry:"index.jsx"},context:{izid:S},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-1":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=p.sent,a=r.FAntdTable,d=function(c){var m=c.current,v=c.pageSize;return new Promise(function(f){setTimeout(function(){f({status:200,data:{code:"OK",size:21,records:Array.from({length:21},function(h,A){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(A+1,"\u6761\u6570\u636E")}}).slice((m-1)*v,m*v)}})},300)})},p.abrupt("return",{default:function(){var c=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:d,columns:c,getApiData:function(v){return v.data},reqeustPageConfig:function(v,f){return{pageSearch:{page:v,limit:f}}},mapperOptions:{total:"size",data:"records"},successValid:function(v){return v.code==="OK"}})}});case 6:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            status: 200,
            data: {
                code: 'OK',
                size: 21,
                records: Array.from({ length: 21 }, (_, index) => ({
                    name: 'Xin',
                    more: \`\u8FD9\u662F\u7B2C\${index + 1}\u6761\u6570\u636E\`
                })).slice((current - 1) * pageSize, current * pageSize)
            }
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '\u59D3\u540D',
            dataIndex: 'name',
        },
        {
            title: '\u8BF4\u660E',
            dataIndex: 'more',
        },
        {
            title: '\u64CD\u4F5C',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    return <FAntdTable
        api={TableDataAPI}
        columns={columns}
        getApiData={data => data.data}
        reqeustPageConfig={(current, pageSize) => ({ pageSearch: { page: current, limit: pageSize } })}
        mapperOptions={{
            total: 'size',
            data: 'records'
        }}
        successValid={data => data.code === 'OK'}
    />
}`},izid:{type:"NPM",value:"0.1.13"}},entry:"index.jsx"},context:{izid:S},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-2":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p,t,c,m,v;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=h.sent,a=r.FAntdTable,h.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=h.sent,n=d.useRef,p=d.useState,h.next=11,Promise.resolve().then(e.bind(e,88478));case 11:return t=h.sent,c=t.Button,m=t.Space,v=function(D){var F=D.current,C=D.pageSize;return new Promise(function(z){setTimeout(function(){z({code:"0",total:21,data:Array.from({length:21},function(G,Z){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(Z+1,"\u6761\u6570\u636E")}}).slice((F-1)*C,F*C)})},300)})},h.abrupt("return",{default:function(){var D=n(),F=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],C=function(G){var Z;(Z=D.current)===null||Z===void 0||Z[G]()};return l.createElement(l.Fragment,null,l.createElement(m,{style:{marginBottom:"10px"}},l.createElement(c,{onClick:function(){return C("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(c,{onClick:function(){return C("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(c,{onClick:function(){return C("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),l.createElement(a,{ref:D,api:v,columns:F,autoInit:!1}))}});case 16:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useRef, useState } from 'react'
import { Button, Space } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: \`\u8FD9\u662F\u7B2C\${index + 1}\u6761\u6570\u636E\`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const tableRef = useRef()
    const columns = [
        {
            title: '\u59D3\u540D',
            dataIndex: 'name',
        },
        {
            title: '\u8BF4\u660E',
            dataIndex: 'more',
        },
        {
            title: '\u64CD\u4F5C',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    // \u64CD\u4F5C\u8868\u683C\u6570\u636E
    const handleTableRef = fnName => {
        tableRef.current?.[fnName]()
    }

    return <>
        <Space style={{ marginBottom: '10px' }}>
            <Button onClick={() => handleTableRef('init')}>\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E</Button>
            <Button onClick={() => handleTableRef('reset')}>\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E</Button>
            <Button onClick={() => handleTableRef('reload')}>\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E</Button>
        </Space>
        <FAntdTable
            ref={tableRef}
            api={TableDataAPI}
            columns={columns}
            autoInit={false}
        />
    </>
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.4"}},entry:"index.jsx"},context:{izid:S,react:i||(i=e.t(l,2)),antd:y},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-3":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p,t,c;return o()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=v.sent,a=r.FAntdTable,v.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=v.sent,n=d.useState,v.next=10,Promise.resolve().then(e.bind(e,88478));case 10:return p=v.sent,t=p.Radio,c=function(h){var A=h.current,D=h.pageSize;return new Promise(function(F){setTimeout(function(){F({code:"0",total:21,data:Array.from({length:21},function(C,z){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(z+1,"\u6761\u6570\u636E")}}).slice((A-1)*D,A*D)})},300)})},v.abrupt("return",{default:function(){var h=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],A=n([]),D=g()(A,2),F=D[0],C=D[1];return l.createElement(l.Fragment,null,JSON.stringify(F),l.createElement(a,{checkboxState:[F,C],api:c,columns:h}))}});case 14:case"end":return v.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useState } from 'react'
import { Radio } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: \`\u8FD9\u662F\u7B2C\${index + 1}\u6761\u6570\u636E\`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '\u59D3\u540D',
            dataIndex: 'name',
        },
        {
            title: '\u8BF4\u660E',
            dataIndex: 'more',
        },
        {
            title: '\u64CD\u4F5C',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    const [selectedRows, setSelectedRows] = useState([])
    return <>
        {JSON.stringify(selectedRows)}
        <FAntdTable
            checkboxState={[selectedRows, setSelectedRows]}
            api={TableDataAPI}
            columns={columns}
        />
    </>
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.4"}},entry:"index.jsx"},context:{izid:S,react:i||(i=e.t(l,2)),antd:y},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-4":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p,t,c;return o()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=v.sent,a=r.FAntdTable,v.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=v.sent,n=d.useState,v.next=10,Promise.resolve().then(e.bind(e,88478));case 10:return p=v.sent,t=p.Radio,c=function(h){var A=h.current,D=h.pageSize;return new Promise(function(F){setTimeout(function(){F({code:"0",total:21,data:Array.from({length:21},function(C,z){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(z+1,"\u6761\u6570\u636E")}}).slice((A-1)*D,A*D)})},300)})},v.abrupt("return",{default:function(){var h=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],A=n({}),D=g()(A,2),F=D[0],C=D[1];return l.createElement(l.Fragment,null,JSON.stringify(F),l.createElement(a,{radioState:[F,C],api:c,columns:h}))}});case 14:case"end":return v.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useState } from 'react'
import { Radio } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: \`\u8FD9\u662F\u7B2C\${index + 1}\u6761\u6570\u636E\`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '\u59D3\u540D',
            dataIndex: 'name',
        },
        {
            title: '\u8BF4\u660E',
            dataIndex: 'more',
        },
        {
            title: '\u64CD\u4F5C',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    const [selectedRows, setSelectedRows] = useState({})
    return <>
        {JSON.stringify(selectedRows)}
        <FAntdTable
            radioState={[selectedRows, setSelectedRows]}
            api={TableDataAPI}
            columns={columns}
        />
    </>
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.4"}},entry:"index.jsx"},context:{izid:S,react:i||(i=e.t(l,2)),antd:y},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-5":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p;return o()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=c.sent,a=r.FAntdTable,c.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=c.sent,n=d.useState,p=function(v){var f=v.current,h=v.pageSize;return new Promise(function(A){setTimeout(function(){A({code:"0",total:21,data:Array.from({length:21},function(D,F){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(F+1,"\u6761\u6570\u636E")}}).slice((f-1)*h,f*h)})},300)})},c.abrupt("return",{default:function(){var v=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:p,columns:v,filter:function(h){return h.more!=="\u8FD9\u662F\u7B2C5\u6761\u6570\u636E"}})}});case 10:case"end":return c.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useState } from 'react'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: \`\u8FD9\u662F\u7B2C\${index + 1}\u6761\u6570\u636E\`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '\u59D3\u540D',
            dataIndex: 'name',
        },
        {
            title: '\u8BF4\u660E',
            dataIndex: 'more',
        },
        {
            title: '\u64CD\u4F5C',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    return <FAntdTable
        api={TableDataAPI}
        columns={columns}
        filter={r => r.more !== '\u8FD9\u662F\u7B2C5\u6761\u6570\u636E'}
    />
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:i||(i=e.t(l,2))},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-6":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p;return o()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=c.sent,a=r.FAntdTable,c.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=c.sent,n=d.useState,p=function(v){var f=v.current,h=v.pageSize;return new Promise(function(A){setTimeout(function(){A({code:"0",total:21,data:Array.from({length:21},function(D,F){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(F+1,"\u6761\u6570\u636E")}}).slice((f-1)*h,f*h)})},300)})},c.abrupt("return",{default:function(){var v=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:p,columns:v,requestValid:function(h){return h.current!==2}})}});case 10:case"end":return c.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useState } from 'react'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: \`\u8FD9\u662F\u7B2C\${index + 1}\u6761\u6570\u636E\`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const columns = [
        {
            title: '\u59D3\u540D',
            dataIndex: 'name',
        },
        {
            title: '\u8BF4\u660E',
            dataIndex: 'more',
        },
        {
            title: '\u64CD\u4F5C',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    return <FAntdTable
        api={TableDataAPI}
        columns={columns}
        requestValid={params => params.current !== 2}
    />
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:i||(i=e.t(l,2))},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-7":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p,t,c,m,v,f;return o()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=A.sent,a=r.FAntdTable,d=r.FAntdInput,A.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=A.sent,p=n.useRef,t=n.useState,A.next=12,Promise.resolve().then(e.bind(e,88478));case 12:return c=A.sent,m=c.Button,v=c.Space,f=function(F){var C=F.current,z=F.pageSize;return new Promise(function(G){setTimeout(function(){G({code:"0",total:21,data:Array.from({length:21},function(Z,Q){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(Q+1,"\u6761\u6570\u636E")}}).slice((C-1)*z,C*z)})},300)})},A.abrupt("return",{default:function(){var F=p(),C=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],z=t(),G=g()(z,2),Z=G[0],Q=G[1],_=function(R){var b;(b=F.current)===null||b===void 0||b[R]({name:Z})},le=t(),de=g()(le,2),oe=de[0],pe=de[1];return l.createElement(l.Fragment,null,l.createElement(v,{style:{marginBottom:"10px"}},l.createElement(m,{onClick:function(){return _("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(m,{onClick:function(){return _("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(m,{onClick:function(){return _("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),l.createElement(d,{state:[Z,Q],placeholder:"\u8F93\u5165\u624B\u52A8\u8BF7\u6C42\u989D\u5916\u53C2\u6570"}),l.createElement("p",null,JSON.stringify(oe)),l.createElement(a,{ref:F,api:f,columns:C,requestValid:function(R){return pe(R),!0}}))}});case 17:case"end":return A.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable, FAntdInput } from 'izid'
import { useRef, useState } from 'react'
import { Button, Space } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: \`\u8FD9\u662F\u7B2C\${index + 1}\u6761\u6570\u636E\`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const tableRef = useRef()
    const columns = [
        {
            title: '\u59D3\u540D',
            dataIndex: 'name',
        },
        {
            title: '\u8BF4\u660E',
            dataIndex: 'more',
        },
        {
            title: '\u64CD\u4F5C',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]


    const [name, setName] = useState()
    // \u64CD\u4F5C\u8868\u683C\u6570\u636E
    const handleTableRef = fnName => {
        tableRef.current?.[fnName]({
            name
        })
    }

    const [sendParams, setSendParams] = useState()

    return <>
        <Space style={{ marginBottom: '10px' }}>
            <Button onClick={() => handleTableRef('init')}>\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E</Button>
            <Button onClick={() => handleTableRef('reset')}>\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E</Button>
            <Button onClick={() => handleTableRef('reload')}>\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E</Button>
        </Space>
        <FAntdInput state={[name, setName]} placeholder={'\u8F93\u5165\u624B\u52A8\u8BF7\u6C42\u989D\u5916\u53C2\u6570'} />
        <p>{JSON.stringify(sendParams)}</p>
        <FAntdTable
            ref={tableRef}
            api={TableDataAPI}
            columns={columns}
            requestValid={params => {
                setSendParams(params)
                return true
            }}
        />
    </>
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.4"}},entry:"index.jsx"},context:{izid:S,react:i||(i=e.t(l,2)),antd:y},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-8":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p,t,c,m;return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=f.sent,a=r.FAntdTable,f.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=f.sent,n=d.useRef,p=d.useState,f.next=11,Promise.resolve().then(e.bind(e,88478));case 11:return t=f.sent,c=t.Button,m=function(A){var D=A.current,F=A.pageSize;return new Promise(function(C){setTimeout(function(){C({code:"0",total:21,data:Array.from({length:21},function(z,G){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(G+1,"\u6761\u6570\u636E")}}).slice((D-1)*F,D*F)})},300)})},f.abrupt("return",{default:function(){var A=n(),D=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],F=p(),C=g()(F,2),z=C[0],G=C[1],Z=function(){var _;G((_=A.current)===null||_===void 0?void 0:_.getInfo())};return l.createElement(l.Fragment,null,l.createElement(c,{onClick:Z},"\u83B7\u53D6\u8868\u683C\u4FE1\u606F"),l.createElement("p",null,JSON.stringify(z)),l.createElement(a,{ref:A,api:m,columns:D}))}});case 15:case"end":return f.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useRef, useState } from 'react'
import { Button } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                name: 'Xin',
                more: \`\u8FD9\u662F\u7B2C\${index + 1}\u6761\u6570\u636E\`
            })).slice((current - 1) * pageSize, current * pageSize)
        })
    }, 300)
})

export default () => {
    const tableRef = useRef()
    const columns = [
        {
            title: '\u59D3\u540D',
            dataIndex: 'name',
        },
        {
            title: '\u8BF4\u660E',
            dataIndex: 'more',
        },
        {
            title: '\u64CD\u4F5C',
            key: 'active',
            render: () => <a>Delete</a>
        }
    ]

    // \u8868\u683C\u4FE1\u606F
    const [tableInfo, setTableInfo] = useState()
    const getTableInfo = () => {
        setTableInfo(tableRef.current?.getInfo())
    }

    return <>
        <Button onClick={getTableInfo}>\u83B7\u53D6\u8868\u683C\u4FE1\u606F</Button>
        <p>{JSON.stringify(tableInfo)}</p>
        <FAntdTable
            ref={tableRef}
            api={TableDataAPI}
            columns={columns}
        />
    </>
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.4"}},entry:"index.jsx"},context:{izid:S,react:i||(i=e.t(l,2)),antd:y},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}}}},46477:function(q,T,e){var i;e.r(T),e.d(T,{demos:function(){return r}});var W=e(5574),g=e.n(W),E=e(15009),o=e.n(E),s=e(99289),P=e.n(s),l=e(67294),S=e(41244),y=e(88478),I=e(21322),u=e.n(I),r={"docs-pwd-score-demo-0":{component:l.memo(l.lazy(P()(o()().mark(function a(){var d,n;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return d=t.sent,n=d.PwdScore,t.abrupt("return",{default:function(){return l.createElement(l.Fragment,null,l.createElement(n,null),l.createElement(n,{value:0}),l.createElement(n,{value:1}),l.createElement(n,{value:2}),l.createElement(n,{value:3}),l.createElement(n,{value:4}))}});case 5:case"end":return t.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore />
        <PwdScore value={0} />
        <PwdScore value={1} />
        <PwdScore value={2} />
        <PwdScore value={3} />
        <PwdScore value={4} />
    </>
}`},izid:{type:"NPM",value:"0.1.13"}},entry:"index.jsx"},context:{izid:S},renderOpts:{compile:function(){var a=P()(o()().mark(function n(){var p,t=arguments;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(335).then(e.bind(e,37335));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,t));case 3:case"end":return m.stop()}},n)}));function d(){return a.apply(this,arguments)}return d}()}},"docs-pwd-score-demo-1":{component:l.memo(l.lazy(P()(o()().mark(function a(){var d,n,p,t,c,m,v;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return d=h.sent,n=d.PwdScore,h.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return p=h.sent,t=p.useMemo,c=p.useState,h.next=11,Promise.resolve().then(e.bind(e,88478));case 11:return m=h.sent,v=m.Button,h.abrupt("return",{default:function(){var D=c(),F=g()(D,2),C=F[0],z=F[1],G=t(function(){return[{color:"#a0133d",label:"\u975E\u5E38\u5F31",value:11},{color:"#2f9715",label:"\u5F3A",value:13},{color:"#ffa500",label:"\u4E00\u822C",value:12}]},[]),Z=function(){if(C===void 0)return z(11);if(C===13)return z(void 0);z(C+1)};return l.createElement(l.Fragment,null,l.createElement(n,{value:C,scoreList:G}),l.createElement(v,{onClick:Z},"\u8C03\u6574\u5F3A\u5EA6"))}});case 14:case"end":return h.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'
import { useMemo, useState } from 'react'
import { Button } from 'antd'

export default () => {
    const [value, setValue] = useState()

    const scoreList = useMemo(() => [
        {
            color: '#a0133d',
            label: '\u975E\u5E38\u5F31',
            value: 11
        },
        {
            color: '#2f9715',
            label: '\u5F3A',
            value: 13
        },
        {
            color: '#ffa500',
            label: '\u4E00\u822C',
            value: 12
        },
    ], [])

    const changeScore = () => {
        if (value === undefined) return setValue(11)
        if (value === 13) return setValue(undefined)
        setValue(value + 1)
    }
    return <>
        <PwdScore
            value={value}
            scoreList={scoreList}
        />
        <Button onClick={changeScore}>\u8C03\u6574\u5F3A\u5EA6</Button>
    </>
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.4"}},entry:"index.jsx"},context:{izid:S,react:i||(i=e.t(l,2)),antd:y},renderOpts:{compile:function(){var a=P()(o()().mark(function n(){var p,t=arguments;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(335).then(e.bind(e,37335));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,t));case 3:case"end":return m.stop()}},n)}));function d(){return a.apply(this,arguments)}return d}()}},"docs-pwd-score-demo-2":{component:l.memo(l.lazy(P()(o()().mark(function a(){var d,n;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return d=t.sent,n=d.PwdScore,t.abrupt("return",{default:function(){return l.createElement(l.Fragment,null,l.createElement(n,{value:0,reverse:!0}),l.createElement(n,{value:1,reverse:!0}),l.createElement(n,{value:2,reverse:!0}),l.createElement(n,{value:3,reverse:!0}),l.createElement(n,{value:4,reverse:!0}))}});case 5:case"end":return t.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore value={0} reverse />
        <PwdScore value={1} reverse />
        <PwdScore value={2} reverse />
        <PwdScore value={3} reverse />
        <PwdScore value={4} reverse />
    </>
}`},izid:{type:"NPM",value:"0.1.13"}},entry:"index.jsx"},context:{izid:S},renderOpts:{compile:function(){var a=P()(o()().mark(function n(){var p,t=arguments;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(335).then(e.bind(e,37335));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,t));case 3:case"end":return m.stop()}},n)}));function d(){return a.apply(this,arguments)}return d}()}},"docs-pwd-score-demo-3":{component:l.memo(l.lazy(P()(o()().mark(function a(){var d,n,p,t,c,m,v,f,h,A,D,F;return o()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return d=z.sent,n=d.PwdScore,p=d.FAntdInput,z.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return t=z.sent,c=t.useState,z.next=11,Promise.resolve().then(e.t.bind(e,21322,23));case 11:return m=z.sent,v=m.default,z.next=15,Promise.resolve().then(e.bind(e,88478));case 15:return f=z.sent,h=f.Form,A=f.Button,D=f.Input,F=f.Flex,z.abrupt("return",{default:function(){var Z=c(),Q=g()(Z,2),_=Q[0],le=Q[1],de=c({}),oe=g()(de,2),pe=oe[0],x=oe[1],R=c(""),b=g()(R,2),M=b[0],B=b[1],N=function(){le(M?v(M).score:void 0)};return l.createElement(l.Fragment,null,l.createElement(h,{layout:"vertical",onFinish:x},l.createElement(h.Item,{name:"password",label:l.createElement(F,{align:"center"},l.createElement("span",null,"\u5BC6\u7801"),l.createElement(n,{value:_})),rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},function(V){var U=V.getFieldValue;return{validator:function(X,w){return!w||_>=1?Promise.resolve():Promise.reject("\u5BC6\u7801\u5F3A\u5EA6\u592A\u5F31")}}}]},l.createElement(p.Password,{state:[M,B],onChange:N})),l.createElement(h.Item,null,l.createElement(A,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4"))),"\u63D0\u4EA4\u6570\u636E\uFF1A",JSON.stringify(pe))}});case 21:case"end":return z.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore, FAntdInput } from 'izid'
import { useState } from 'react'
import zxcvbn from 'zxcvbn'
import { Form, Button, Input, Flex } from 'antd'

export default () => {
    const [passwordScore, setPasswordScore] = useState()
    const [log, setLog] = useState({})
    const [password, setPassword] = useState('')

    const pwdChange = () => {
        if (!password) setPasswordScore(undefined)
        // \u4F7F\u7528zxcvbn\u8BA1\u7B97\u5BC6\u7801\u5F3A\u5EA6\uFF0C\u8303\u56F40-4\uFF0C\u5982\u679C\u6709\u81EA\u5B9A\u4E49\u5F3A\u5EA6\u7684\u8BDD\u9700\u8981\u624B\u52A8\u4FEE\u6539
        else setPasswordScore(zxcvbn(password).score)
    }

    return <>
        <Form
            layout="vertical"
            onFinish={setLog}
        >
            <Form.Item
                name={'password'}
                label={<Flex align={'center'}>
                    <span>\u5BC6\u7801</span>
                    <PwdScore value={passwordScore} />
                </Flex>}
                rules={[
                    {
                        required: true,
                        message: '\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A'
                    },
                    ({ getFieldValue }) => ({
                        validator (rule, value) {
                            if (!value || passwordScore >= 1) return Promise.resolve()
                            return Promise.reject('\u5BC6\u7801\u5F3A\u5EA6\u592A\u5F31')
                        },
                    }),
                ]}
            >
                <FAntdInput.Password state={[password, setPassword]} onChange={pwdChange} />
            </Form.Item>
            <Form.Item>
                <Button type={'primary'} htmlType="submit">\u63D0\u4EA4</Button>
            </Form.Item>
        </Form>
        \u63D0\u4EA4\u6570\u636E\uFF1A{JSON.stringify(log)}
    </>
}`},izid:{type:"NPM",value:"0.1.13"},react:{type:"NPM",value:"19.1.0"},zxcvbn:{type:"NPM",value:"4.4.2"},antd:{type:"NPM",value:"5.25.4"}},entry:"index.jsx"},context:{izid:S,react:i||(i=e.t(l,2)),zxcvbn:I,antd:y},renderOpts:{compile:function(){var a=P()(o()().mark(function n(){var p,t=arguments;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(335).then(e.bind(e,37335));case 2:return m.abrupt("return",(p=m.sent).default.apply(p,t));case 3:case"end":return m.stop()}},n)}));function d(){return a.apply(this,arguments)}return d}()}}}},11171:function(q,T,e){e.r(T),e.d(T,{demos:function(){return W}});var i=e(67294),W={}},41244:function(q,T,e){e.r(T),e.d(T,{Demo:function(){return W},DemoLog:function(){return pe},FAntdInput:function(){return v},FAntdOrderTable:function(){return oe},FAntdTable:function(){return C},PwdScore:function(){return Z}});var i=e(85893),W=function(){return(0,i.jsx)(i.Fragment,{children:"This is a demo component."})},g=e(97857),E=e.n(g),o=e(13769),s=e.n(o),P=e(38289),l=e(13457),S=e(67294),y=e(111),I=e(14615),u=["state","onChange"],r=["state","onInput"],a=["state","onChange","mode","strict"],d=function(R,b){var M=R.state,B=R.onChange,N=s()(R,u);return E()({ref:b,allowClear:!0,value:M==null?void 0:M[0],onChange:function(U){var H;U.target.value=(H=U.target.value)===null||H===void 0?void 0:H.trim();for(var X=arguments.length,w=new Array(X>1?X-1:0),L=1;L<X;L++)w[L-1]=arguments[L];M==null||M[1].apply(M,[U.target.value].concat(w)),B==null||B.apply(void 0,[U].concat(w))}},N)},n=(0,S.forwardRef)(function(x,R){return(0,i.jsx)(P.Z,E()({placeholder:"\u8BF7\u8F93\u5165"},d(x,R)))}),p=P.Z.$$typeof,t=P.Z.render,c=s()(P.Z,["$$typeof","render"]);for(var m in c)n[m]=P.Z[m];n.Password=(0,S.forwardRef)(function(x,R){return(0,i.jsx)(P.Z.Password,E()({placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},d(x,R)))}),n.Search=(0,S.forwardRef)(function(x,R){var b,M,B,N=function(){for(var w,L=arguments.length,j=new Array(L),O=0;O<L;O++)j[O]=arguments[O];(w=x.onSearch)===null||w===void 0||w.call.apply(w,[x].concat(j))},V=(0,y.Z)(N,(b=x.throttleDuration)!==null&&b!==void 0?b:0,{trailing:(M=x.throttleTrailing)!==null&&M!==void 0?M:!1}),U=(0,S.useCallback)((0,I.Z)(N,(B=x.debounceDuration)!==null&&B!==void 0?B:500),[]),H=function(w){var L;x.autoSearch&&U(w.target.value),(L=x.onInput)===null||L===void 0||L.call(x,w)};return(0,i.jsx)(P.Z.Search,E()(E()({placeholder:x.autoSearch?"\u8F93\u5165\u540E\u81EA\u52A8\u641C\u7D22":"\u8BF7\u8F93\u5165"},d(x,R)),{},{onSearch:V,onInput:H}))}),n.TextArea=(0,S.forwardRef)(function(x,R){return(0,i.jsx)(P.Z.TextArea,E()(E()({placeholder:"\u8BF7\u8F93\u5165",showCount:!0,maxLength:100},d(x,R)),{},{style:E()({height:100},x==null?void 0:x.style)}))}),n.OTP=(0,S.forwardRef)(function(x,R){var b=x.state,M=x.onInput,B=s()(x,r);return(0,i.jsx)(P.Z.OTP,E()(E()({ref:R,value:b==null?void 0:b[0]},B),{},{onInput:function(V){b==null||b[1](V.join("")),M&&M(V)}}))}),n.Number=(0,S.forwardRef)(function(x,R){var b=x.state,M=x.onChange,B=x.mode,N=x.strict,V=s()(x,a),U=function(j){return N?~~j:j},H=(0,S.useMemo)(function(){var L={};return B==="price"&&(L={formatter:function(O){return"\uFFE5".concat(O).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(O){return U(O==null?void 0:O.replace(/\￥\s?|(,*)/g,""))}}),B==="percent"&&(L={formatter:function(O){return"".concat(O,"%")},parser:function(O){return U(O==null?void 0:O.replace("%",""))}}),L},[]),X=(0,S.useMemo)(function(){if(B==="percent"&&N)return 100},[]),w=function(j){b==null||b[1](j),M&&M(j)};return(0,i.jsx)(l.Z,E()(E()(E()({placeholder:"\u8BF7\u8F93\u5165",ref:R,value:b==null?void 0:b[0],keyboard:!0,changeOnWheel:!0,min:N?0:void 0,max:X,step:N?1:.1,precision:N?0:void 0},H),V),{},{onChange:w}))});var v=n,f=e(5574),h=e.n(f),A=e(47921),D=["api","apiData","checkboxState","radioState","filter","getApiData","requestValid","requestPageConfig","successValid","mapperOptions","initPageSize","initCurrent","autoInit","rowKey"],F=(0,S.forwardRef)(function(x,R){var b,M=x.api,B=x.apiData,N=x.checkboxState,V=x.radioState,U=x.filter,H=U===void 0?function($){return!0}:U,X=x.getApiData,w=X===void 0?function($){return $}:X,L=x.requestValid,j=L===void 0?function($){return!0}:L,O=x.requestPageConfig,K=O===void 0?function($,J){return{current:$,pageSize:J}}:O,ve=x.successValid,ye=ve===void 0?function($){return $.code==="0"}:ve,fe=x.mapperOptions,ue=fe===void 0?{total:"total",data:"data"}:fe,ae=x.initPageSize,se=ae===void 0?10:ae,ie=x.initCurrent,Ie=ie===void 0?1:ie,Se=x.autoInit,Me=Se===void 0?!0:Se,Pe=x.rowKey,Re=Pe===void 0?function($){return $}:Pe,Y=s()(x,D),je=(0,S.useState)(se),Ee=h()(je,2),te=Ee[0],Be=Ee[1],Le=(0,S.useState)(Ie),Ae=h()(Le,2),ce=Ae[0],Ne=Ae[1],Ke=(0,S.useState)(0),ze=h()(Ke,2),we=ze[0],We=ze[1],Ve=(0,S.useState)(!1),be=h()(Ve,2),Ue=be[0],Te=be[1],Xe=(0,S.useState)([]),De=h()(Xe,2),ge=De[0],Ze=De[1],me=(0,S.useCallback)(function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},J=$.current,k=J===void 0?ce:J,ne=$.pageSize,ee=ne===void 0?te:ne,re=$.data,Ye=re===void 0?B:re,Fe=$.otherData,ke=Fe===void 0?{}:Fe,Oe=Object.assign({},K(k,ee),Ye,ke);if(j(Oe)){Te(!0);var qe=k,_e=ee;return M(Oe).then(function($e){var Ce=w($e);if(ye(Ce)&&qe===k&&_e===ee){var xe,en=((xe=Ce[ue.data])!==null&&xe!==void 0?xe:[]).filter(H);We($e[ue.total]),Ze(en),Ne(k),Be(ee)}}).finally(function(){Te(!1)})}},[B,M,w,j,K,ye,ue,H,Y.rowKey]),He=(0,S.useCallback)(function($){return me({current:Ie,pageSize:te,otherData:$})},[Ie,te]),Ge=(0,S.useCallback)(function($){return me({current:Ie,pageSize:se,data:{},otherData:$})},[Ie,se]),Je=(0,S.useCallback)(function($){return me({otherData:$})},[ce,te,B]),he=(0,S.useRef)();(0,S.useImperativeHandle)(R,function(){var $,J;return{getTableData:me,init:He,reload:Je,reset:Ge,nativeElement:($=he.current)===null||$===void 0?void 0:$.nativeElement,scrollTo:(J=he.current)===null||J===void 0?void 0:J.scrollTo,getInfo:function(){return[ge,ce,te]}}},[ce,te,B,he,ge,ce,te]);var Qe=(0,S.useMemo)(function(){if(N||V){var $=N!=null?N:V;return{type:N?"checkbox":"radio",onChange:function(){for(var k,ne=arguments.length,ee=new Array(ne),re=0;re<ne;re++)ee[re]=arguments[re];$[1](ee[0]),ee==null||(k=ee.rowSelection)===null||k===void 0||k.onChange.apply(k,ee)}}}},[N,V,Y.rowSelection,Y.rowKey]);return(0,S.useEffect)(function(){Me&&me()},[]),(0,i.jsx)(A.Z,E()(E()({ref:he,loading:Ue,dataSource:ge},Y),{},{rowSelection:Qe,rowKey:Re,columns:(b=Y.columns)===null||b===void 0?void 0:b.map(function($){var J;return $.key=(J=$.key)!==null&&J!==void 0?J:$.dataIndex,$}),pagination:(Y==null?void 0:Y.pagination)===!1?!1:E()(E()({showSizeChanger:!0,current:ce,pageSize:te,total:we,pageSizeOptions:[5,10,20,50]},Y==null?void 0:Y.pagination),{},{onChange:function(J,k){var ne;me({current:J,pageSize:k}),Y==null||(ne=Y.pagination)===null||ne===void 0||ne.onChange(J,k)}})}))}),C=F,z={"pwd-score__wrapper":"ECZRO8sIboA2Jvnzyv_S","pwd-score__item":"VU4c6Mn96G89buIwnU4M","pwd-score__text":"mstSfTCI_kUSytZ2oNZG"},G=function(R){var b=R.value,M=R.scoreList,B=M===void 0?[{color:"#a0133d",label:"\u975E\u5E38\u5F31",value:0},{color:"#f7e84d",label:"\u8F83\u5F31",value:1},{color:"#ffa500",label:"\u4E00\u822C",value:2},{color:"#1677ff",label:"\u8F83\u5F3A",value:3},{color:"#2f9715",label:"\u5F3A",value:4}]:M,N=R.defaultColor,V=N===void 0?"#e2e2e2":N,U=R.reverse,H=U===void 0?!1:U,X=(0,S.useMemo)(function(){return B.sort(function(j,O){return j.value>O.value?H?-1:1:j.value<O.value?H?1:-1:0})},[B,H]),w=(0,S.useCallback)(function(j){var O=X.findIndex(function(K){return K.value===b});return O===j?X[j].color:V},[b,B]),L=(0,S.useMemo)(function(){var j;return(j=X.find(function(O){return O.value===b}))===null||j===void 0?void 0:j.label},[b,B]);return(0,i.jsxs)("div",{className:z["pwd-score__wrapper"],children:[Array.from({length:X.length},function(j,O){return(0,i.jsx)("div",{className:z["pwd-score__item"],style:{backgroundColor:w(O)}},"pwd-score:"+O)}),(0,i.jsx)("span",{className:z["pwd-score__text"],style:{opacity:+!!L},children:L!=null?L:"\u65E0"})]})},Z=G,Q={"table-tr__action-content":"WDUdr4YWFPgrL1jr_TcA","action-content__info":"Zy6XaXPuPGoOQGuKXA9r","action-content__item":"CuxqxKq6pw0Bf3SLqCjD","order-body_td":"X1OWv6o0pEijXwqe8ZVU","order-body_tr":"qBIN1Vcf0IsOpfXt3sKS",dark:"VuZ0QcgBeuQI7ua0zATw"},_=["headerRender","headerOptions"],le=["children","className","style"],de=(0,S.forwardRef)(function(x,R){var b=x.headerRender,M=x.headerOptions,B=s()(x,_),N=function(K){return(0,i.jsx)("table",E()(E()({},K),{},{style:E()(E()({},K.style),{},{borderCollapse:"collapse"})}))},V=function(K){return(0,i.jsx)("thead",E()({},K))},U=function(K){return(0,i.jsx)("tr",E()({},K))},H=function(K){return(0,i.jsx)("th",E()({},K))},X=function(K){return(0,i.jsx)("tbody",E()({},K))},w=function(K){return(0,i.jsx)("td",E()(E()({},K),{},{style:E()(E()({},K.style),{},{borderRightStyle:"solid",borderRightWidth:"1px"}),className:Q["order-body_td"]}))},L=function(K){var ve=K.children,ye=K.className,fe=K.style,ue=s()(K,le),ae;if("data-row-key"in K){var se=ve.at(-1);se&&(ae=se.props.record)}return(0,i.jsxs)(i.Fragment,{children:[ae&&(b||M)&&(0,i.jsx)("tr",E()(E()({},ue),{},{"data-row-key":K["data-row-key"]+"/children",children:(0,i.jsx)("td",{colSpan:"9",style:{padding:"0"},children:(0,i.jsxs)("div",{className:"".concat(Q["table-tr__action-content"]),children:[(0,i.jsx)("div",{className:Q["action-content__info"],children:b==null?void 0:b.map(function(ie){return(0,i.jsxs)("span",{className:Q["action-content__item"],children:[ie.label,"\uFF1A",ie.render(ae)]},ie.label)})}),M&&M(ae)]})})})),(0,i.jsx)("tr",E()(E()({},ue),{},{style:{style:fe,borderStyle:"solid",borderWidth:"1px 0 0 1px"},className:Q["order-body_tr"],children:ve}))]})},j=(0,S.useRef)({table:N,header:{wrapper:V,row:U,cell:H},body:{wrapper:X,row:L,cell:w}});return(0,i.jsx)(C,E()({ref:R,components:j.current},B))}),oe=de,pe=function(){console.log("This is a demo log")}},95305:function(q,T,e){e.r(T),e.d(T,{texts:function(){return i}});const i=[{value:"\u8FD9\u662F\u4E00\u4E2ADemo\u7EC4\u4EF6\uFF0C\u7528\u6765\u505A\u6587\u6863\u793A\u4F8B",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"\u65B9\u6CD5\u540D",paraId:2,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:8},{value:"\u8BF4\u660E",paraId:4,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:8},{value:"\u65B9\u6CD5\u540D",paraId:5,tocIndex:9},{value:"\u662F\u5426\u5FC5\u586B",paraId:5,tocIndex:9},{value:"\u8BF4\u660E",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u8BF4\u660E",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u5C5E\u6027\u540D",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:7,tocIndex:12},{value:"\u8BF4\u660E",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"\u65B9\u6CD5\u540D",paraId:8,tocIndex:13},{value:"\u662F\u5426\u5FC5\u586B",paraId:8,tocIndex:13},{value:"\u8BF4\u660E",paraId:8,tocIndex:13},{value:"\u5C5E\u6027",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14}]},87455:function(q,T,e){e.r(T),e.d(T,{texts:function(){return i}});const i=[{value:"\u8FD9\u662F\u4E00\u4E2A\u6709\u5404\u79CD\u5E38\u89C1\u4E1A\u52A1\u573A\u666F\u7684Antd Input\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:1,tocIndex:2},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:2,tocIndex:3},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:3},{value:"debounceDuration",paraId:3},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:3},{value:"500",paraId:3},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:3},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:4,tocIndex:4},{value:"\u4F7F\u7528",paraId:5},{value:"throttleDuration",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:5},{value:"0",paraId:5},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:5},{value:"\u4F7F\u7528",paraId:5},{value:"throttleTrailing",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u641C\u7D22\uFF0C\u9ED8\u8BA4",paraId:5},{value:"false",paraId:5},{value:"\u5728\u8868\u5355\u4E2D\u65B9\u6CD5\u4F7F\u7528\u540CAntd Input\uFF0C\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:6,tocIndex:11},{value:"\u4F60\u4E0D\u80FD\u5728\u8868\u5355\u4E2D\u4F7F\u7528setState\u53BB\u4FEE\u6539\u8868\u5355\u57DF\u7684\u503C\uFF0C\u8BE6\u89C1\uFF1A",paraId:7},{value:"FormItem",paraId:7},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:8,tocIndex:13},{value:"Antd Input",paraId:8,tocIndex:13},{value:"\u5C5E\u6027\u540D",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14},{value:"\u662F\u5426\u5FC5\u586B",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:14},{value:"state",paraId:9,tocIndex:14},{value:"string",paraId:9,tocIndex:14},{value:"false",paraId:9,tocIndex:14},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:9,tocIndex:14},{value:"\u7EC4\u4EF6\u5185\u90E8\u4F9D\u636E",paraId:10,tocIndex:15},{value:"lodash-es",paraId:10,tocIndex:15},{value:"\u4F9D\u8D56\uFF0C\u8BF7\u5148\u4F7F\u7528",paraId:10,tocIndex:15},{value:"npm install lodash-es",paraId:10,tocIndex:15},{value:"\u4E0B\u8F7D\u6240\u9700\u4F9D\u8D56 \uFF0C\u914D\u7F6E\u9879\u7EE7\u627F",paraId:10,tocIndex:15},{value:"Antd Input.Search",paraId:10,tocIndex:15},{value:"\u5C5E\u6027\u540D",paraId:11,tocIndex:16},{value:"\u7C7B\u578B",paraId:11,tocIndex:16},{value:"\u662F\u5426\u5FC5\u586B",paraId:11,tocIndex:16},{value:"\u8BF4\u660E",paraId:11,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:16},{value:"state",paraId:11,tocIndex:16},{value:"string",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:11,tocIndex:16},{value:"autoSearch",paraId:11,tocIndex:16},{value:"function",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8F93\u5165\u65F6\u662F\u5426\u81EA\u52A8\u4F7F\u7528\u9632\u6296\u641C\u7D22",paraId:11,tocIndex:16},{value:"debounceDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u5F00\u542FautoSearch\u540E\uFF0C\u9632\u6296\u65F6\u95F4",paraId:11,tocIndex:16},{value:"500",paraId:11,tocIndex:16},{value:"throttleDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u89E6\u53D1\u641C\u7D22\u4E8B\u4EF6\u65F6\u8282\u6D41\u65F6\u95F4",paraId:11,tocIndex:16},{value:"0",paraId:11,tocIndex:16},{value:"throttleTrailing",paraId:11,tocIndex:16},{value:"boolean",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8282\u6D41\u641C\u7D22\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u89E6\u53D1\u641C\u7D22",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:12,tocIndex:17},{value:"Antd InputNumber",paraId:12,tocIndex:17},{value:"\u5C5E\u6027\u540D",paraId:13,tocIndex:18},{value:"\u7C7B\u578B",paraId:13,tocIndex:18},{value:"\u662F\u5426\u5FC5\u586B",paraId:13,tocIndex:18},{value:"\u8BF4\u660E",paraId:13,tocIndex:18},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:18},{value:"state",paraId:13,tocIndex:18},{value:"string",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:13,tocIndex:18},{value:"mode",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:" ",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:"\u4EF7\u683C\u6A21\u5F0F\u3001",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"\u767E\u5206\u6BD4\u6A21\u5F0F\uFF0C\u51FA\u73B0\u56FA\u5B9A\u7684\u683C\u5F0F",paraId:13,tocIndex:18},{value:"strict",paraId:13,tocIndex:18},{value:"boolean",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E25\u683C\u9650\u5236\uFF0C\u9650\u5236\u4E3A\u6B63\u6574\u6570\u3001\u6B65\u957F\u4E3A1\u3001\u767E\u5206\u6BD4\u6A21\u5F0F\u4E0B\u9650\u5236\u6700\u5927\u503C100",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E0EAntd Input.XXX\u76F8\u540C\uFF0C",paraId:14,tocIndex:19},{value:"Antd Input",paraId:14,tocIndex:19}]},8828:function(q,T,e){e.r(T),e.d(T,{texts:function(){return i}});const i=[{value:"\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E",paraId:0,tocIndex:0},{value:"FAntdTable",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u5199\u7684\u8BA2\u5355\u8868\u683C\uFF0C\u539F\u7406\u662F\u4F7F\u7528\u4E86",paraId:0,tocIndex:0},{value:"antd table",paraId:0,tocIndex:0},{value:"\u7684\u81EA\u5B9A\u4E49",paraId:0,tocIndex:0},{value:"components",paraId:0,tocIndex:0},{value:`
\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u8BA2\u5355\u8868\u683C\u5728\u6BCF\u4E00\u9879\u6570\u636E\u7684\u5934\u90E8\u589E\u52A0\u4E86\u6570\u636E\u663E\u793A\u548C\u64CD\u4F5C\u7A7A\u95F4`,paraId:0,tocIndex:0},{value:"\u5176\u4ED6\u914D\u7F6E\u9879\u7EE7\u627F",paraId:2,tocIndex:2},{value:"FAntdTable",paraId:3,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"headerRender",paraId:4,tocIndex:3},{value:"{label: string, render: row => React}[]",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"\u5934\u90E8\u6570\u636E\u7684\u663E\u793A\u533A\u57DF",paraId:4,tocIndex:3},{value:"headerOptions",paraId:4,tocIndex:3},{value:"row => React",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"\u5934\u90E8\u6570\u636E\u7684\u64CD\u4F5C\u533A\u57DF",paraId:4,tocIndex:3}]},12808:function(q,T,e){e.r(T),e.d(T,{texts:function(){return i}});const i=[{value:"FAntdTable",paraId:0,tocIndex:0},{value:"\u662F\u5BF9Antd Table\u7684\u5C01\u88C5\uFF0C\u53EA\u9700\u8981\u6709api\u548Ccolumns\u5C5E\u6027\u5C31\u80FD\u5FEB\u901F\u6E32\u67D3\u51FA\u4E00\u4E2A\u5206\u9875\u8868\u683C\uFF0C\u5BF9Antd Table\u539F\u751F\u6539\u52A8\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"\u5185\u7F6E",paraId:1,tocIndex:0},{value:"api",paraId:1,tocIndex:0},{value:"\u8BF7\u6C42\uFF0C\u53EF\u4F7F\u7528",paraId:1,tocIndex:0},{value:"ref",paraId:1,tocIndex:0},{value:"\u63A7\u5236\u8BF7\u6C42",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\u4E0D\u5B58\u5728",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u65F6\uFF0C\u5982\u679C",paraId:1,tocIndex:0},{value:"dataIndex",paraId:1,tocIndex:0},{value:"\u6709\u503C\uFF0C\u5219\u81EA\u52A8\u5C06",paraId:1,tocIndex:0},{value:"dataIndex",paraId:1,tocIndex:0},{value:"\u5F53\u4F5C",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"checkboxState",paraId:1,tocIndex:0},{value:"\u548C",paraId:1,tocIndex:0},{value:"radioState",paraId:1,tocIndex:0},{value:"\u80FD\u66F4\u5FEB\u7684\u4F7F\u7528\u591A\u9009/\u5355\u9009",paraId:1,tocIndex:0},{value:"\u6709\u4E00\u5957\u9ED8\u8BA4\u7684\u5B57\u6BB5\u6620\u5C04\u3001\u521D\u59CB\u5206\u9875\u914D\u7F6E\uFF0C\u89C1\u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:0},{value:"\u6CE8\u610F\u4EE5\u4E0B\u89C4\u5B9A\uFF1A",paraId:2},{value:"\u5206\u9875\u53C2\u6570\u4E3Acurrent\u3001pageSize",paraId:3},{value:"api",paraId:3},{value:"\u8FD4\u56DE\u7684\u662F\u63A5\u53E3\u6570\u636E\uFF0C\u800C\u4E0D\u662F",paraId:3},{value:"response",paraId:3},{value:"\u6210\u529F\u72B6\u6001\u4E3A",paraId:3},{value:"code==='0'",paraId:3},{value:"\u603B\u6570\u636E\u6761\u6570\u5B57\u6BB5\u4E3A",paraId:3},{value:"total",paraId:3},{value:"\u6570\u636E\u5B57\u6BB5\u4E3A",paraId:3},{value:"data",paraId:3},{value:"\u5047\u8BBE\u63A5\u53E3\u8FD4\u56DEresponse\u5BF9\u8C61\uFF0C\u5206\u9875\u53C2\u6570\u4E3ApageSearch: { limit, page }\uFF0C\u8FD4\u56DE\u4F53\u91CC\u9762\u662Fsize\u548Crecords\uFF0C\u6210\u529F\u6761\u4EF6\u4E3Acode==='OK'",paraId:4,tocIndex:2},{value:"\u4F7F\u7528",paraId:5,tocIndex:6},{value:"filter",paraId:5,tocIndex:6},{value:"\u8FC7\u6EE4\u6389\u7B2C\u4E94\u6761\u6570\u636E",paraId:5,tocIndex:6},{value:"\u4F7F\u7528",paraId:6,tocIndex:7},{value:"requestValid",paraId:6,tocIndex:7},{value:"\u62E6\u622A\u7B2C\u4E8C\u9875\u7684\u8BF7\u6C42",paraId:6,tocIndex:7},{value:"\u53EF\u53C2\u8003",paraId:7,tocIndex:10},{value:"Antd Table",paraId:7,tocIndex:10},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:8,tocIndex:11},{value:"Antd Table",paraId:8,tocIndex:11},{value:"\u5C5E\u6027\u540D",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:9,tocIndex:12},{value:"\u8BF4\u660E",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"api",paraId:9,tocIndex:12},{value:"apiData => Promise",paraId:9,tocIndex:12},{value:"\u662F",paraId:9,tocIndex:12},{value:"\u83B7\u53D6\u8868\u683C\u6570\u636E\u7684\u63A5\u53E3\u51FD\u6570",paraId:9,tocIndex:12},{value:"apiData",paraId:9,tocIndex:12},{value:"object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"api\u51FD\u6570\u8BF7\u6C42\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A",paraId:9,tocIndex:12},{value:"apiData",paraId:9,tocIndex:12},{value:" + ",paraId:9,tocIndex:12},{value:"requestPageConfig",paraId:9,tocIndex:12},{value:"checkboxState",paraId:9,tocIndex:12},{value:"array",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u591A\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:9,tocIndex:12},{value:"radioState",paraId:9,tocIndex:12},{value:"array",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u5355\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:9,tocIndex:12},{value:"filter",paraId:9,tocIndex:12},{value:"itemData => boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8FC7\u6EE4\u8868\u683C\u6570\u636E\uFF0C\u540C",paraId:9,tocIndex:12},{value:"Array.filter",paraId:9,tocIndex:12},{value:"data => true",paraId:9,tocIndex:12},{value:"getApiData",paraId:9,tocIndex:12},{value:"response => object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8FD4\u56DE\u540E\u7AEF\u63A5\u53E3\u54CD\u5E94\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u6D4F\u89C8\u5668response\uFF08\u5982\u679C\u63A5\u53E3\u8FD4\u56DE\u662Fresponse\uFF0C\u5EFA\u8BAE\u53BB\u8C03\u6574\u54CD\u5E94\u62E6\u622A\u5668\uFF0C\u65E0\u6CD5\u8C03\u6574\u62E6\u622A\u5668\u53EF\u4EE5\u6539\u4E3A",paraId:9,tocIndex:12},{value:"response => response.data",paraId:9,tocIndex:12},{value:"\uFF09",paraId:9,tocIndex:12},{value:"response => response",paraId:9,tocIndex:12},{value:"requestValid",paraId:9,tocIndex:12},{value:"requestArgs => boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u662F\u5426\u8FDB\u884C\u8BF7\u6C42\uFF0C\u53EF\u7528\u4E8E\u5728\u4E0D\u6EE1\u8DB3\u8BF7\u6C42\u6761\u4EF6\u65F6\u62E6\u622A\u8BF7\u6C42\uFF0C",paraId:9,tocIndex:12},{value:"requestArgs",paraId:9,tocIndex:12},{value:"\u63A5\u53E3\u8BF7\u6C42\u53C2\u6570",paraId:9,tocIndex:12},{value:"requestArgs => true",paraId:9,tocIndex:12},{value:"requestPageConfig",paraId:9,tocIndex:12},{value:"(current, pageSize) => object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8FD4\u56DE\u4F20\u9012\u63A5\u53E3\u7684\u5206\u9875\u914D\u7F6E\uFF0C\u9ED8\u8BA4",paraId:9,tocIndex:12},{value:"pageSearch: { limit, page }",paraId:9,tocIndex:12},{value:"\u53C2\u6570\uFF0Ccurrent\u5F53\u524D\u9875\uFF0CpageSize\u5F53\u524D\u6761\u6570",paraId:9,tocIndex:12},{value:"(current, pageSize) => ({ current, pageSize })",paraId:9,tocIndex:12},{value:"successValid",paraId:9,tocIndex:12},{value:"response => boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6210\u529F\uFF0C\u9ED8\u8BA4\u5224\u65AD\u54CD\u5E94\u6570\u636E\u4E2D\u7684",paraId:9,tocIndex:12},{value:"code",paraId:9,tocIndex:12},{value:"\u4E3A\u5B57\u7B26\u4E32",paraId:9,tocIndex:12},{value:"0",paraId:9,tocIndex:12},{value:"data => data.code === '0'",paraId:9,tocIndex:12},{value:"mapperOptions",paraId:9,tocIndex:12},{value:"object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8868\u683C\u6570\u636E\u6620\u5C04\u5B57\u6BB5\u540D\u79F0",paraId:9,tocIndex:12},{value:"{ total: 'total', data: 'data' }",paraId:9,tocIndex:12},{value:"initPageSize",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u6761\u6570",paraId:9,tocIndex:12},{value:"10",paraId:9,tocIndex:12},{value:"initCurrent",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u9875\u6570",paraId:9,tocIndex:12},{value:"1",paraId:9,tocIndex:12},{value:"autoInit",paraId:9,tocIndex:12},{value:"boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u8868\u683C\u6570\u636E",paraId:9,tocIndex:12},{value:"true",paraId:9,tocIndex:12},{value:"\u65B9\u6CD5\u540D",paraId:10,tocIndex:13},{value:"\u8BF4\u660E",paraId:10,tocIndex:13},{value:"\u7C7B\u578B",paraId:10,tocIndex:13},{value:"getTableData",paraId:10,tocIndex:13},{value:"\u7EC4\u4EF6\u66B4\u9732\u7684\u67E5\u8BE2\u65B9\u6CD5\uFF0C\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F20\u5165data\u53C2\u6570\u4F1A\u8986\u76D6apiData\uFF0C\u9700\u8981\u643A\u5E26\u5176\u4ED6\u53C2\u6570\u8BF7\u4F7F\u7528otherData",paraId:10,tocIndex:13},{value:"({ current\u3001pageSize\u3001data\u3001otherData }) => Promise",paraId:10,tocIndex:13},{value:"init",paraId:10,tocIndex:13},{value:"\u6839\u636E\u5F53\u524D\u6761\u6570\u3001\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u521D\u59CB\u9875\u6570\u7684\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u989D\u5916\u67E5\u8BE2\u6570\u636E\uFF0C\u4E00\u822C\u7528\u4E8E\u67E5\u8BE2",paraId:10,tocIndex:13},{value:"otherData => Promise",paraId:10,tocIndex:13},{value:"reset",paraId:10,tocIndex:13},{value:"\u4F7F\u7528\u521D\u59CB\u6761\u6570\u3001\u521D\u59CB\u9875\u6570\u3001\u7A7A\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u91CD\u7F6E",paraId:10,tocIndex:13},{value:"otherData => Promise",paraId:10,tocIndex:13},{value:"reload",paraId:10,tocIndex:13},{value:"\u5237\u65B0\u5F53\u524D\u9875\u9762\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6",paraId:10,tocIndex:13},{value:"otherData => Promise",paraId:10,tocIndex:13},{value:"getInfo",paraId:10,tocIndex:13},{value:"\u83B7\u53D6\u5F53\u524D\u8868\u683C\u8BF7\u6C42\u6570\u636E",paraId:10,tocIndex:13},{value:"() => ({ current, pageSize, data })",paraId:10,tocIndex:13}]},6282:function(q,T,e){e.r(T),e.d(T,{texts:function(){return i}});const i=[{value:"\u8FD9\u662F\u4E00\u4E2A\u663E\u793A\u5BC6\u7801\u5F3A\u5EA6\u7684\u663E\u793A\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u6709\u4E94\u4E2A\u7B49\u7EA7(0-4)\uFF0C\u53EF\u81EA\u5B9A\u4E49\u7B49\u7EA7",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E",paraId:1,tocIndex:2},{value:"scoreList",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u6765\u6E32\u67D3\u989C\u8272\u548C\u6587\u5B57\uFF0C\u6839\u636E",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\u8FDB\u884C\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u4F7F\u7528",paraId:2,tocIndex:3},{value:"reverse",paraId:2,tocIndex:3},{value:"\u8C03\u6574\u6E32\u67D3\u987A\u5E8F",paraId:2,tocIndex:3},{value:"\u9700\u8981\u5F15\u5165\u5E93",paraId:3,tocIndex:4},{value:"zxcvbn",paraId:3,tocIndex:4},{value:"\u4F7F\u7528\uFF0C\u5728\u8868\u5355\u4E2D\u81EA\u52A8\u8BA1\u7B97\u5BC6\u7801\u5F3A\u5EA6\uFF0C\u5E76\u9650\u5236\u4F7F\u7528\u7684\u5BC6\u7801\u5F3A\u5EA6\u4E0D\u80FD\u4E3A",paraId:3,tocIndex:4},{value:"\u975E\u5E38\u5F31",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"value",paraId:4,tocIndex:6},{value:"number",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u5BC6\u7801\u5F3A\u5EA6\uFF0C\u9ED8\u8BA4\u53D6\u503C\u8303\u56F40-4",paraId:4,tocIndex:6},{value:"scoreList",paraId:4,tocIndex:6},{value:"array",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u6E32\u67D3",paraId:4,tocIndex:6},{value:'[{"color":"#a0133d","label":"\u975E\u5E38\u5F31","value":0},{"color":"#f7e84d","label":"\u8F83\u5F31","value":1},{"color":"#ffa500","label":"\u4E00\u822C","value":2},{"color":"#1677ff","label":"\u8F83\u5F3A","value":3},{"color":"#2f9715","label":"\u5F3A","value":4}]',paraId:4,tocIndex:6},{value:"defaultColor",paraId:4,tocIndex:6},{value:"color",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u5E95\u8272",paraId:4,tocIndex:6},{value:"'#e2e2e2'",paraId:4,tocIndex:6},{value:"reverse",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8C03\u6574\u5F3A\u5EA6\u663E\u793A\u987A\u5E8F",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6}]},51446:function(q,T,e){e.r(T),e.d(T,{texts:function(){return i}});const i=[{value:`\u8FD9\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u5C01\u88C5\u7EC4\u4EF6\uFF0C\u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u4E1A\u52A1\u529F\u80FD\uFF0C\u4E3B\u8981\u4E3A\u4E86\u907F\u514D\u5728\u9879\u76EE\u4E2D\u7EC4\u4EF6\u7684\u7B80\u5355\u5C5E\u6027\u5197\u4F59\u3002
\u4EE5\u4E0B\u662F\u5C01\u88C5\u539F\u5219\uFF1A`,paraId:0,tocIndex:0},{value:"\u4E0D\u7834\u574F\u539F\u6709\u7EC4\u4EF6\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\u3001Ref\u3001\u5B50\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u4FDD\u6301\u539F\u6709\u7EC4\u4EF6\u7684\u53EF\u62D3\u5C55\u6027",paraId:1,tocIndex:0},{value:`npm install izid
# or
pnpm add izid
# or
yarn add izid
`,paraId:2,tocIndex:1},{value:"Npm",paraId:3,tocIndex:2}]}}]);
