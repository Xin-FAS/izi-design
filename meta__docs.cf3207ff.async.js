"use strict";(self.webpackChunkizid=self.webpackChunkizid||[]).push([[904],{15803:function(q,D,e){e.r(D),e.d(D,{demos:function(){return S}});var v=e(15009),G=e.n(v),g=e(99289),B=e.n(g),i=e(67294),o=e(13302),S={"docs-demo-demo-0":{component:i.memo(i.lazy(B()(G()().mark(function l(){var P,h;return G()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return P=d.sent,h=P.Demo,d.abrupt("return",{default:function(){return i.createElement(h,null)}});case 5:case"end":return d.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-demo-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Demo } from 'izid'

export default () => {
    return <Demo />
}`},izid:{type:"NPM",value:"0.1.11"}},entry:"index.jsx"},context:{izid:o},renderOpts:{compile:function(){var l=B()(G()().mark(function h(){var I,d=arguments;return G()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(I=a.sent).default.apply(I,d));case 3:case"end":return a.stop()}},h)}));function P(){return l.apply(this,arguments)}return P}()}}}},48214:function(q,D,e){var v;e.r(D),e.d(D,{demos:function(){return P}});var G=e(15009),g=e.n(G),B=e(99289),i=e.n(B),o=e(67294),S=e(13302),l=e(88478),P={"docs-f-antd-input-demo-0":{component:o.memo(o.lazy(i()(g()().mark(function h(){var I,d,r,a,u,n,p,t;return g()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return I=c.sent,d=I.FAntdInput,c.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=c.sent,a=r.useState,u=r.useEffect,n=r.useRef,c.next=12,Promise.resolve().then(e.bind(e,88478));case 12:return p=c.sent,t=p.Button,c.abrupt("return",{default:function(){var x=a(),m=n();u(function(){var F;setTimeout((F=m.current)===null||F===void 0?void 0:F.focus,1e3)},[]);var A=function(){x[1]("Hello World")};return o.createElement(o.Fragment,null,o.createElement("p",null,"Input Value\uFF1A",x[0]),o.createElement(d,{state:x,ref:m}),o.createElement("p",null,o.createElement(t,{type:"primary",onClick:A},"Hello World")))}});case 15:case"end":return c.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.1"}},entry:"index.jsx"},context:{izid:S,react:v||(v=e.t(o,2)),antd:l},renderOpts:{compile:function(){var h=i()(g()().mark(function d(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-1":{component:o.memo(o.lazy(i()(g()().mark(function h(){var I,d,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return I=n.sent,d=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a(),s=function(f){console.log("\u89E6\u53D1\u641C\u7D22\uFF1A",f)};return o.createElement(o.Fragment,null,o.createElement("p",null,"Input Value\uFF1A",t[0]),o.createElement(d.Search,{state:t,onSearch:s}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:v||(v=e.t(o,2))},renderOpts:{compile:function(){var h=i()(g()().mark(function d(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-2":{component:o.memo(o.lazy(i()(g()().mark(function h(){var I,d,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return I=n.sent,d=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a(),s=function(f){console.log("\u89E6\u53D1\u81EA\u52A8\u641C\u7D22\uFF1A",f)};return o.createElement(o.Fragment,null,o.createElement("p",null,"Input Value\uFF1A",t[0]),o.createElement(d.Search,{state:t,autoSearch:!0,onSearch:s}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:v||(v=e.t(o,2))},renderOpts:{compile:function(){var h=i()(g()().mark(function d(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-3":{component:o.memo(o.lazy(i()(g()().mark(function h(){var I,d,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return I=n.sent,d=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a(),s=function(f){console.log("\u89E6\u53D1\u8282\u6D41\u641C\u7D22\uFF1A",f)};return o.createElement(o.Fragment,null,o.createElement("p",null,"Input Value\uFF1A",t[0]),o.createElement(d.Search,{state:t,throttleDuration:2e3,onSearch:s}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:v||(v=e.t(o,2))},renderOpts:{compile:function(){var h=i()(g()().mark(function d(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-4":{component:o.memo(o.lazy(i()(g()().mark(function h(){var I,d,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return I=n.sent,d=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return o.createElement(o.Fragment,null,o.createElement("p",null,"Input Value\uFF1A",t[0]),o.createElement(d.Number,{state:t,strict:!0}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} strict />
    </>;
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:v||(v=e.t(o,2))},renderOpts:{compile:function(){var h=i()(g()().mark(function d(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-5":{component:o.memo(o.lazy(i()(g()().mark(function h(){var I,d,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return I=n.sent,d=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return o.createElement(o.Fragment,null,o.createElement("p",null,"Input Value\uFF1A",t[0]),o.createElement(d.Number,{state:t,mode:"price"}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'price'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:v||(v=e.t(o,2))},renderOpts:{compile:function(){var h=i()(g()().mark(function d(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-6":{component:o.memo(o.lazy(i()(g()().mark(function h(){var I,d,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return I=n.sent,d=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return o.createElement(o.Fragment,null,o.createElement("p",null,"Input Value\uFF1A",t[0]),o.createElement(d.Number,{state:t,mode:"percent"}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'percent'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:v||(v=e.t(o,2))},renderOpts:{compile:function(){var h=i()(g()().mark(function d(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-7":{component:o.memo(o.lazy(i()(g()().mark(function h(){var I,d,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return I=n.sent,d=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return o.createElement(o.Fragment,null,o.createElement("p",null,"Input Value\uFF1A",t[0]),o.createElement(d.Password,{state:t}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Password state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:v||(v=e.t(o,2))},renderOpts:{compile:function(){var h=i()(g()().mark(function d(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-8":{component:o.memo(o.lazy(i()(g()().mark(function h(){var I,d,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return I=n.sent,d=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a("");return o.createElement(o.Fragment,null,o.createElement("p",null,"Input Value\uFF1A",t[0]),o.createElement(d.OTP,{state:t}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.OTP state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:v||(v=e.t(o,2))},renderOpts:{compile:function(){var h=i()(g()().mark(function d(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-9":{component:o.memo(o.lazy(i()(g()().mark(function h(){var I,d,r,a;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return I=n.sent,d=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a("");return o.createElement(o.Fragment,null,o.createElement("p",null,"Input Value\uFF1A",t[0]),o.createElement(d.TextArea,{state:t}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-9",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.TextArea state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:v||(v=e.t(o,2))},renderOpts:{compile:function(){var h=i()(g()().mark(function d(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-10":{component:o.memo(o.lazy(i()(g()().mark(function h(){var I,d,r,a,u,n,p;return g()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return I=s.sent,d=I.FAntdInput,s.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=s.sent,a=r.useState,s.next=10,Promise.resolve().then(e.bind(e,88478));case 10:return u=s.sent,n=u.Form,p=u.Button,s.abrupt("return",{default:function(){var f=function(m){console.log("\u8868\u5355\u63D0\u4EA4\uFF1A",m)};return o.createElement(n,{onFinish:f},o.createElement(n.Item,{label:"\u8F93\u5165\u6846",name:"value"},o.createElement(d,null)),o.createElement(n.Item,null,o.createElement(p,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4")))}});case 14:case"end":return s.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-10",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.1"}},entry:"index.jsx"},context:{izid:S,react:v||(v=e.t(o,2)),antd:l},renderOpts:{compile:function(){var h=i()(g()().mark(function d(){var r,a=arguments;return g()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},d)}));function I(){return h.apply(this,arguments)}return I}()}}}},62511:function(q,D,e){var v;e.r(D),e.d(D,{demos:function(){return I}});var G=e(5574),g=e.n(G),B=e(15009),i=e.n(B),o=e(99289),S=e.n(o),l=e(67294),P=e(13302),h=e(88478),I={"docs-f-antd-table-demo-0":{component:l.memo(l.lazy(S()(i()().mark(function d(){var r,a,u,n,p;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return r=s.sent,a=r.FAntdTable,s.next=6,Promise.resolve().then(e.bind(e,88478));case 6:return u=s.sent,n=u.Button,p=function(f){var x=f.current,m=f.pageSize;return new Promise(function(A){setTimeout(function(){A({code:"0",count:21,data:Array.from({length:21},function(F,E){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(E+1,"\u6761\u6570\u636E")}}).slice((x-1)*m,x*m)})},300)})},s.abrupt("return",{default:function(){var f=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:p,columns:f})}});case 10:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { Button } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
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
}`},izid:{type:"NPM",value:"0.1.11"},antd:{type:"NPM",value:"5.25.1"}},entry:"index.jsx"},context:{izid:P,antd:h},renderOpts:{compile:function(){var d=S()(i()().mark(function a(){var u,n=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-1":{component:l.memo(l.lazy(S()(i()().mark(function d(){var r,a,u,n,p;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return r=s.sent,a=r.FAntdTable,s.next=6,Promise.resolve().then(e.bind(e,88478));case 6:return u=s.sent,n=u.Button,p=function(f){var x=f.current,m=f.pageSize;return new Promise(function(A){setTimeout(function(){A({status:200,data:{code:"OK",size:21,records:Array.from({length:21},function(F,E){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(E+1,"\u6761\u6570\u636E")}}).slice((x-1)*m,x*m)}})},300)})},s.abrupt("return",{default:function(){var f=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:p,columns:f,getApiData:function(m){return m.data},reqeustPageConfig:function(m,A){return{pageSearch:{page:m,limit:A}}},mapperOptions:{total:"size",data:"records"},successValid:function(m){return m.code==="OK"}})}});case 10:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { Button } from 'antd'

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
}`},izid:{type:"NPM",value:"0.1.11"},antd:{type:"NPM",value:"5.25.1"}},entry:"index.jsx"},context:{izid:P,antd:h},renderOpts:{compile:function(){var d=S()(i()().mark(function a(){var u,n=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-2":{component:l.memo(l.lazy(S()(i()().mark(function d(){var r,a,u,n,p,t,s,c,f;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return r=m.sent,a=r.FAntdTable,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=m.sent,n=u.useRef,p=u.useState,m.next=11,Promise.resolve().then(e.bind(e,88478));case 11:return t=m.sent,s=t.Button,c=t.Space,f=function(F){var E=F.current,$=F.pageSize;return new Promise(function(z){setTimeout(function(){z({code:"0",count:21,data:Array.from({length:21},function(X,U){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(U+1,"\u6761\u6570\u636E")}}).slice((E-1)*$,E*$)})},300)})},m.abrupt("return",{default:function(){var F=n(),E=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],$=function(X){var U;(U=F.current)===null||U===void 0||U[X]()};return l.createElement(l.Fragment,null,l.createElement(c,{style:{marginBottom:"10px"}},l.createElement(s,{onClick:function(){return $("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(s,{onClick:function(){return $("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(s,{onClick:function(){return $("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),l.createElement(a,{ref:F,api:f,columns:E,autoInit:!1}))}});case 16:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useRef, useState } from 'react'
import { Button, Space } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.1"}},entry:"index.jsx"},context:{izid:P,react:v||(v=e.t(l,2)),antd:h},renderOpts:{compile:function(){var d=S()(i()().mark(function a(){var u,n=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-3":{component:l.memo(l.lazy(S()(i()().mark(function d(){var r,a,u,n,p,t,s;return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return r=f.sent,a=r.FAntdTable,f.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=f.sent,n=u.useState,f.next=10,Promise.resolve().then(e.bind(e,88478));case 10:return p=f.sent,t=p.Radio,s=function(m){var A=m.current,F=m.pageSize;return new Promise(function(E){setTimeout(function(){E({code:"0",count:21,data:Array.from({length:21},function($,z){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(z+1,"\u6761\u6570\u636E")}}).slice((A-1)*F,A*F)})},300)})},f.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],A=n([]),F=g()(A,2),E=F[0],$=F[1];return l.createElement(l.Fragment,null,JSON.stringify(E),l.createElement(a,{checkboxState:[E,$],api:s,columns:m}))}});case 14:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useState } from 'react'
import { Radio } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.1"}},entry:"index.jsx"},context:{izid:P,react:v||(v=e.t(l,2)),antd:h},renderOpts:{compile:function(){var d=S()(i()().mark(function a(){var u,n=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-4":{component:l.memo(l.lazy(S()(i()().mark(function d(){var r,a,u,n,p,t,s;return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return r=f.sent,a=r.FAntdTable,f.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=f.sent,n=u.useState,f.next=10,Promise.resolve().then(e.bind(e,88478));case 10:return p=f.sent,t=p.Radio,s=function(m){var A=m.current,F=m.pageSize;return new Promise(function(E){setTimeout(function(){E({code:"0",count:21,data:Array.from({length:21},function($,z){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(z+1,"\u6761\u6570\u636E")}}).slice((A-1)*F,A*F)})},300)})},f.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],A=n({}),F=g()(A,2),E=F[0],$=F[1];return l.createElement(l.Fragment,null,JSON.stringify(E),l.createElement(a,{radioState:[E,$],api:s,columns:m}))}});case 14:case"end":return f.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useState } from 'react'
import { Radio } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.1"}},entry:"index.jsx"},context:{izid:P,react:v||(v=e.t(l,2)),antd:h},renderOpts:{compile:function(){var d=S()(i()().mark(function a(){var u,n=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-5":{component:l.memo(l.lazy(S()(i()().mark(function d(){var r,a,u,n,p;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return r=s.sent,a=r.FAntdTable,s.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=s.sent,n=u.useState,p=function(f){var x=f.current,m=f.pageSize;return new Promise(function(A){setTimeout(function(){A({code:"0",count:21,data:Array.from({length:21},function(F,E){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(E+1,"\u6761\u6570\u636E")}}).slice((x-1)*m,x*m)})},300)})},s.abrupt("return",{default:function(){var f=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:p,columns:f,filter:function(m){return m.more!=="\u8FD9\u662F\u7B2C5\u6761\u6570\u636E"}})}});case 10:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useState } from 'react'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:v||(v=e.t(l,2))},renderOpts:{compile:function(){var d=S()(i()().mark(function a(){var u,n=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-6":{component:l.memo(l.lazy(S()(i()().mark(function d(){var r,a,u,n,p;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return r=s.sent,a=r.FAntdTable,s.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=s.sent,n=u.useState,p=function(f){var x=f.current,m=f.pageSize;return new Promise(function(A){setTimeout(function(){A({code:"0",count:21,data:Array.from({length:21},function(F,E){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(E+1,"\u6761\u6570\u636E")}}).slice((x-1)*m,x*m)})},300)})},s.abrupt("return",{default:function(){var f=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:p,columns:f,requestValid:function(m){return m.current!==2}})}});case 10:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useState } from 'react'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:v||(v=e.t(l,2))},renderOpts:{compile:function(){var d=S()(i()().mark(function a(){var u,n=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-7":{component:l.memo(l.lazy(S()(i()().mark(function d(){var r,a,u,n,p,t,s,c,f,x;return i()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return r=A.sent,a=r.FAntdTable,u=r.FAntdInput,A.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=A.sent,p=n.useRef,t=n.useState,A.next=12,Promise.resolve().then(e.bind(e,88478));case 12:return s=A.sent,c=s.Button,f=s.Space,x=function(E){var $=E.current,z=E.pageSize;return new Promise(function(X){setTimeout(function(){X({code:"0",count:21,data:Array.from({length:21},function(U,Q){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(Q+1,"\u6761\u6570\u636E")}}).slice(($-1)*z,$*z)})},300)})},A.abrupt("return",{default:function(){var E=p(),$=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],z=t(),X=g()(z,2),U=X[0],Q=X[1],y=function(V){var N;(N=E.current)===null||N===void 0||N[V]({name:U})},M=t(),T=g()(M,2),O=T[0],R=T[1];return l.createElement(l.Fragment,null,l.createElement(f,{style:{marginBottom:"10px"}},l.createElement(c,{onClick:function(){return y("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(c,{onClick:function(){return y("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(c,{onClick:function(){return y("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),l.createElement(u,{state:[U,Q],placeholder:"\u8F93\u5165\u624B\u52A8\u8BF7\u6C42\u989D\u5916\u53C2\u6570"}),l.createElement("p",null,JSON.stringify(O)),l.createElement(a,{ref:E,api:x,columns:$,requestValid:function(V){return R(V),!0}}))}});case 17:case"end":return A.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable, FAntdInput } from 'izid'
import { useRef, useState } from 'react'
import { Button, Space } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.1"}},entry:"index.jsx"},context:{izid:P,react:v||(v=e.t(l,2)),antd:h},renderOpts:{compile:function(){var d=S()(i()().mark(function a(){var u,n=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-8":{component:l.memo(l.lazy(S()(i()().mark(function d(){var r,a,u,n,p,t,s,c;return i()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return r=x.sent,a=r.FAntdTable,x.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=x.sent,n=u.useRef,p=u.useState,x.next=11,Promise.resolve().then(e.bind(e,88478));case 11:return t=x.sent,s=t.Button,c=function(A){var F=A.current,E=A.pageSize;return new Promise(function($){setTimeout(function(){$({code:"0",count:21,data:Array.from({length:21},function(z,X){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(X+1,"\u6761\u6570\u636E")}}).slice((F-1)*E,F*E)})},300)})},x.abrupt("return",{default:function(){var A=n(),F=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],E=p(),$=g()(E,2),z=$[0],X=$[1],U=function(){var y;X((y=A.current)===null||y===void 0?void 0:y.getInfo())};return l.createElement(l.Fragment,null,l.createElement(s,{onClick:U},"\u83B7\u53D6\u8868\u683C\u4FE1\u606F"),l.createElement("p",null,JSON.stringify(z)),l.createElement(a,{ref:A,api:c,columns:F}))}});case 15:case"end":return x.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useRef, useState } from 'react'
import { Button } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            count: 21,
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.1"}},entry:"index.jsx"},context:{izid:P,react:v||(v=e.t(l,2)),antd:h},renderOpts:{compile:function(){var d=S()(i()().mark(function a(){var u,n=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(u=t.sent).default.apply(u,n));case 3:case"end":return t.stop()}},a)}));function r(){return d.apply(this,arguments)}return r}()}}}},46477:function(q,D,e){var v;e.r(D),e.d(D,{demos:function(){return r}});var G=e(5574),g=e.n(G),B=e(15009),i=e.n(B),o=e(99289),S=e.n(o),l=e(67294),P=e(13302),h=e(88478),I=e(21322),d=e.n(I),r={"docs-pwd-score-demo-0":{component:l.memo(l.lazy(S()(i()().mark(function a(){var u,n;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return u=t.sent,n=u.PwdScore,t.abrupt("return",{default:function(){return l.createElement(l.Fragment,null,l.createElement(n,null),l.createElement(n,{value:0}),l.createElement(n,{value:1}),l.createElement(n,{value:2}),l.createElement(n,{value:3}),l.createElement(n,{value:4}))}});case 5:case"end":return t.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore />
        <PwdScore value={0} />
        <PwdScore value={1} />
        <PwdScore value={2} />
        <PwdScore value={3} />
        <PwdScore value={4} />
    </>
}`},izid:{type:"NPM",value:"0.1.11"}},entry:"index.jsx"},context:{izid:P},renderOpts:{compile:function(){var a=S()(i()().mark(function n(){var p,t=arguments;return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(335).then(e.bind(e,37335));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,t));case 3:case"end":return c.stop()}},n)}));function u(){return a.apply(this,arguments)}return u}()}},"docs-pwd-score-demo-1":{component:l.memo(l.lazy(S()(i()().mark(function a(){var u,n,p,t,s,c,f;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return u=m.sent,n=u.PwdScore,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return p=m.sent,t=p.useMemo,s=p.useState,m.next=11,Promise.resolve().then(e.bind(e,88478));case 11:return c=m.sent,f=c.Button,m.abrupt("return",{default:function(){var F=s(),E=g()(F,2),$=E[0],z=E[1],X=t(function(){return[{color:"#a0133d",label:"\u975E\u5E38\u5F31",value:11},{color:"#2f9715",label:"\u5F3A",value:13},{color:"#ffa500",label:"\u4E00\u822C",value:12}]},[]),U=function(){if($===void 0)return z(11);if($===13)return z(void 0);z($+1)};return l.createElement(l.Fragment,null,l.createElement(n,{value:$,scoreList:X}),l.createElement(f,{onClick:U},"\u8C03\u6574\u5F3A\u5EA6"))}});case 14:case"end":return m.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.25.1"}},entry:"index.jsx"},context:{izid:P,react:v||(v=e.t(l,2)),antd:h},renderOpts:{compile:function(){var a=S()(i()().mark(function n(){var p,t=arguments;return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(335).then(e.bind(e,37335));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,t));case 3:case"end":return c.stop()}},n)}));function u(){return a.apply(this,arguments)}return u}()}},"docs-pwd-score-demo-2":{component:l.memo(l.lazy(S()(i()().mark(function a(){var u,n;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return u=t.sent,n=u.PwdScore,t.abrupt("return",{default:function(){return l.createElement(l.Fragment,null,l.createElement(n,{value:0,reverse:!0}),l.createElement(n,{value:1,reverse:!0}),l.createElement(n,{value:2,reverse:!0}),l.createElement(n,{value:3,reverse:!0}),l.createElement(n,{value:4,reverse:!0}))}});case 5:case"end":return t.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore value={0} reverse />
        <PwdScore value={1} reverse />
        <PwdScore value={2} reverse />
        <PwdScore value={3} reverse />
        <PwdScore value={4} reverse />
    </>
}`},izid:{type:"NPM",value:"0.1.11"}},entry:"index.jsx"},context:{izid:P},renderOpts:{compile:function(){var a=S()(i()().mark(function n(){var p,t=arguments;return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(335).then(e.bind(e,37335));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,t));case 3:case"end":return c.stop()}},n)}));function u(){return a.apply(this,arguments)}return u}()}},"docs-pwd-score-demo-3":{component:l.memo(l.lazy(S()(i()().mark(function a(){var u,n,p,t,s,c,f,x,m,A,F,E;return i()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,Promise.resolve().then(e.bind(e,13302));case 2:return u=z.sent,n=u.PwdScore,p=u.FAntdInput,z.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return t=z.sent,s=t.useState,z.next=11,Promise.resolve().then(e.t.bind(e,21322,23));case 11:return c=z.sent,f=c.default,z.next=15,Promise.resolve().then(e.bind(e,88478));case 15:return x=z.sent,m=x.Form,A=x.Button,F=x.Input,E=x.Flex,z.abrupt("return",{default:function(){var U=s(),Q=g()(U,2),y=Q[0],M=Q[1],T=s({}),O=g()(T,2),R=O[0],C=O[1],V=s(""),N=g()(V,2),W=N[0],w=N[1],J=function(){M(W?f(W).score:void 0)};return l.createElement(l.Fragment,null,l.createElement(m,{layout:"vertical",onFinish:C},l.createElement(m.Item,{name:"password",label:l.createElement(E,{align:"center"},l.createElement("span",null,"\u5BC6\u7801"),l.createElement(n,{value:y})),rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},function(K){var L=K.getFieldValue;return{validator:function(re,ue){return!ue||y>=1?Promise.resolve():Promise.reject("\u5BC6\u7801\u5F3A\u5EA6\u592A\u5F31")}}}]},l.createElement(p.Password,{state:[W,w],onChange:J})),l.createElement(m.Item,null,l.createElement(A,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4"))),"\u63D0\u4EA4\u6570\u636E\uFF1A",JSON.stringify(R))}});case 21:case"end":return z.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore, FAntdInput } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.11"},react:{type:"NPM",value:"19.1.0"},zxcvbn:{type:"NPM",value:"4.4.2"},antd:{type:"NPM",value:"5.25.1"}},entry:"index.jsx"},context:{izid:P,react:v||(v=e.t(l,2)),zxcvbn:I,antd:h},renderOpts:{compile:function(){var a=S()(i()().mark(function n(){var p,t=arguments;return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(335).then(e.bind(e,37335));case 2:return c.abrupt("return",(p=c.sent).default.apply(p,t));case 3:case"end":return c.stop()}},n)}));function u(){return a.apply(this,arguments)}return u}()}}}},11171:function(q,D,e){e.r(D),e.d(D,{demos:function(){return G}});var v=e(67294),G={}},13302:function(q,D,e){e.r(D),e.d(D,{Demo:function(){return G},DemoLog:function(){return Q},FAntdInput:function(){return f},FAntdTable:function(){return $},PwdScore:function(){return U}});var v=e(85893),G=function(){return(0,v.jsx)(v.Fragment,{children:"This is a demo component."})},g=e(97857),B=e.n(g),i=e(13769),o=e.n(i),S=e(38289),l=e(13457),P=e(67294),h=e(111),I=e(14615),d=["state","onChange"],r=["state","onInput"],a=["state","onChange","mode","strict"],u=function(M,T){var O=M.state,R=M.onChange,C=o()(M,d);return B()({ref:T,allowClear:!0,value:O==null?void 0:O[0],onChange:function(N){var W;N.target.value=(W=N.target.value)===null||W===void 0?void 0:W.trim();for(var w=arguments.length,J=new Array(w>1?w-1:0),K=1;K<w;K++)J[K-1]=arguments[K];O==null||O[1].apply(O,[N.target.value].concat(J)),R&&R.apply(void 0,[N].concat(J))}},C)},n=(0,P.forwardRef)(function(y,M){return(0,v.jsx)(S.Z,B()({placeholder:"\u8BF7\u8F93\u5165"},u(y,M)))}),p=S.Z.$$typeof,t=S.Z.render,s=o()(S.Z,["$$typeof","render"]);for(var c in s)n[c]=S.Z[c];n.Password=(0,P.forwardRef)(function(y,M){return(0,v.jsx)(S.Z.Password,B()({placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},u(y,M)))}),n.Search=(0,P.forwardRef)(function(y,M){var T,O,R,C=function(){y.onSearch&&y.onSearch.apply(y,arguments)},V=(0,h.Z)(C,(T=y.throttleDuration)!==null&&T!==void 0?T:0,{trailing:(O=y.throttleTrailing)!==null&&O!==void 0?O:!1}),N=(0,P.useCallback)((0,I.Z)(C,(R=y.debounceDuration)!==null&&R!==void 0?R:500),[]),W=function(J){y.autoSearch&&N(J.target.value),y.onInput&&y.onInput(J)};return(0,v.jsx)(S.Z.Search,B()(B()({placeholder:y.autoSearch?"\u8F93\u5165\u540E\u81EA\u52A8\u641C\u7D22":"\u8BF7\u8F93\u5165"},u(y,M)),{},{onSearch:V,onInput:W}))}),n.TextArea=(0,P.forwardRef)(function(y,M){return(0,v.jsx)(S.Z.TextArea,B()(B()({placeholder:"\u8BF7\u8F93\u5165",showCount:!0,maxLength:100},u(y,M)),{},{style:B()({height:100},y==null?void 0:y.style)}))}),n.OTP=(0,P.forwardRef)(function(y,M){var T=y.state,O=y.onInput,R=o()(y,r);return(0,v.jsx)(S.Z.OTP,B()(B()({ref:M,value:T==null?void 0:T[0]},R),{},{onInput:function(V){T==null||T[1](V.join("")),O&&O(V)}}))}),n.Number=(0,P.forwardRef)(function(y,M){var T=y.state,O=y.onChange,R=y.mode,C=y.strict,V=o()(y,a),N=function(L){return C?~~L:L},W=(0,P.useMemo)(function(){var K={};return R==="price"&&(K={formatter:function(j){return"\uFFE5".concat(j).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(j){return N(j==null?void 0:j.replace(/\￥\s?|(,*)/g,""))}}),R==="percent"&&(K={formatter:function(j){return"".concat(j,"%")},parser:function(j){return N(j==null?void 0:j.replace("%",""))}}),K},[]),w=(0,P.useMemo)(function(){if(R==="percent"&&C)return 100},[]),J=function(L){T==null||T[1](L),O&&O(L)};return(0,v.jsx)(l.Z,B()(B()(B()({placeholder:"\u8BF7\u8F93\u5165",ref:M,value:T==null?void 0:T[0],keyboard:!0,changeOnWheel:!0,min:C?0:void 0,max:w,step:C?1:.1,precision:C?0:void 0},W),V),{},{onChange:J}))});var f=n,x=e(5574),m=e.n(x),A=e(47921),F=["api","apiData","checkboxState","radioState","filter","getApiData","requestValid","requestPageConfig","successValid","mapperOptions","initPageSize","initCurrent","autoInit","rowKey"],E=(0,P.forwardRef)(function(y,M){var T,O=y.api,R=y.apiData,C=y.checkboxState,V=y.radioState,N=y.filter,W=N===void 0?function(b){return!0}:N,w=y.getApiData,J=w===void 0?function(b){return b}:w,K=y.requestValid,L=K===void 0?function(b){return!0}:K,j=y.requestPageConfig,re=j===void 0?function(b,Z){return{current:b,pageSize:Z}}:j,ue=y.successValid,me=ue===void 0?function(b){return b.code==="0"}:ue,pe=y.mapperOptions,oe=pe===void 0?{total:"count",data:"data"}:pe,ve=y.initPageSize,se=ve===void 0?10:ve,Ie=y.initCurrent,le=Ie===void 0?1:Ie,fe=y.autoInit,De=fe===void 0?!0:fe,he=y.rowKey,be=he===void 0?function(b){return b}:he,Y=o()(y,F),$e=(0,P.useState)(se),ge=m()($e,2),ee=ge[0],Ce=ge[1],Oe=(0,P.useState)(le),ye=m()(Oe,2),te=ye[0],Me=ye[1],Be=(0,P.useState)(0),xe=m()(Be,2),Re=xe[0],je=xe[1],Le=(0,P.useState)(!1),Se=m()(Le,2),Ne=Se[0],Pe=Se[1],Ke=(0,P.useState)([]),Ae=m()(Ke,2),ie=Ae[0],Ve=Ae[1],ae=(0,P.useCallback)(function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Z=b.current,H=Z===void 0?te:Z,_=b.pageSize,k=_===void 0?ee:_,ne=b.data,Ze=ne===void 0?R:ne,Ee=b.otherData,Je=Ee===void 0?{}:Ee,ze=Object.assign({},re(H,k),Ze,Je);if(L(ze)){Pe(!0);var Ge=H,He=k;return O(ze).then(function(Fe){var Te=J(Fe);if(me(Te)&&Ge===H&&He===k){var ce,Qe=((ce=Te[oe.data])!==null&&ce!==void 0?ce:[]).filter(W);je(Fe[oe.total]),Ve(Qe),Me(H),Ce(k)}}).finally(function(){Pe(!1)})}},[R,O,J,L,re,me,oe,W,Y.rowKey]),We=(0,P.useCallback)(function(b){return ae({current:le,pageSize:ee,otherData:b})},[le,ee]),Ue=(0,P.useCallback)(function(b){return ae({current:le,pageSize:se,data:{},otherData:b})},[le,se]),we=(0,P.useCallback)(function(b){return ae({otherData:b})},[te,ee,R]),de=(0,P.useRef)();(0,P.useImperativeHandle)(M,function(){var b,Z;return{getTableData:ae,init:We,reload:we,reset:Ue,nativeElement:(b=de.current)===null||b===void 0?void 0:b.nativeElement,scrollTo:(Z=de.current)===null||Z===void 0?void 0:Z.scrollTo,getInfo:function(){return[ie,te,ee]}}},[te,ee,R,de,ie,te,ee]);var Xe=(0,P.useMemo)(function(){if(C||V){var b=C!=null?C:V;return{type:C?"checkbox":"radio",onChange:function(){for(var H,_=arguments.length,k=new Array(_),ne=0;ne<_;ne++)k[ne]=arguments[ne];b[1](k[0]),k==null||(H=k.rowSelection)===null||H===void 0||H.onChange.apply(H,k)}}}},[C,V,Y.rowSelection,Y.rowKey]);return(0,P.useEffect)(function(){De&&ae()},[]),(0,v.jsx)(A.Z,B()(B()({ref:de,loading:Ne,dataSource:ie},Y),{},{rowSelection:Xe,rowKey:be,columns:(T=Y.columns)===null||T===void 0?void 0:T.map(function(b){var Z;return b.key=(Z=b.key)!==null&&Z!==void 0?Z:b.dataIndex,b}),pagination:B()(B()({showSizeChanger:!0,current:te,pageSize:ee,total:Re,pageSizeOptions:[5,10,20,50]},Y==null?void 0:Y.pagination),{},{onChange:function(Z,H){var _;ae({current:Z,pageSize:H}),Y==null||(_=Y.pagination)===null||_===void 0||_.onChange(Z,H)}})}))}),$=E,z={"pwd-score__wrapper":"ECZRO8sIboA2Jvnzyv_S","pwd-score__item":"VU4c6Mn96G89buIwnU4M","pwd-score__text":"mstSfTCI_kUSytZ2oNZG"},X=function(M){var T=M.value,O=M.scoreList,R=O===void 0?[{color:"#a0133d",label:"\u975E\u5E38\u5F31",value:0},{color:"#f7e84d",label:"\u8F83\u5F31",value:1},{color:"#ffa500",label:"\u4E00\u822C",value:2},{color:"#1677ff",label:"\u8F83\u5F3A",value:3},{color:"#2f9715",label:"\u5F3A",value:4}]:O,C=M.defaultColor,V=C===void 0?"#e2e2e2":C,N=M.reverse,W=N===void 0?!1:N,w=(0,P.useMemo)(function(){return R.sort(function(L,j){return L.value>j.value?W?-1:1:L.value<j.value?W?1:-1:0})},[R,W]),J=(0,P.useCallback)(function(L){var j=w.findIndex(function(re){return re.value===T});return j===L?w[L].color:V},[T,R]),K=(0,P.useMemo)(function(){var L;return(L=w.find(function(j){return j.value===T}))===null||L===void 0?void 0:L.label},[T,R]);return(0,v.jsxs)("div",{className:z["pwd-score__wrapper"],children:[Array.from({length:w.length},function(L,j){return(0,v.jsx)("div",{className:z["pwd-score__item"],style:{backgroundColor:J(j)}},"pwd-score:"+j)}),(0,v.jsx)("span",{className:z["pwd-score__text"],style:{opacity:+!!K},children:K!=null?K:"\u65E0"})]})},U=X,Q=function(){console.log("This is a demo log")}},95305:function(q,D,e){e.r(D),e.d(D,{texts:function(){return v}});const v=[{value:"\u8FD9\u662F\u4E00\u4E2ADemo\u7EC4\u4EF6\uFF0C\u7528\u6765\u505A\u6587\u6863\u793A\u4F8B",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"\u65B9\u6CD5\u540D",paraId:2,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:8},{value:"\u8BF4\u660E",paraId:4,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:8},{value:"\u65B9\u6CD5\u540D",paraId:5,tocIndex:9},{value:"\u662F\u5426\u5FC5\u586B",paraId:5,tocIndex:9},{value:"\u8BF4\u660E",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u8BF4\u660E",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u5C5E\u6027\u540D",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:7,tocIndex:12},{value:"\u8BF4\u660E",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"\u65B9\u6CD5\u540D",paraId:8,tocIndex:13},{value:"\u662F\u5426\u5FC5\u586B",paraId:8,tocIndex:13},{value:"\u8BF4\u660E",paraId:8,tocIndex:13},{value:"\u5C5E\u6027",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14}]},87455:function(q,D,e){e.r(D),e.d(D,{texts:function(){return v}});const v=[{value:"\u8FD9\u662F\u4E00\u4E2A\u6709\u5404\u79CD\u5E38\u89C1\u4E1A\u52A1\u573A\u666F\u7684Antd Input\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:1,tocIndex:2},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:2,tocIndex:3},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:3},{value:"debounceDuration",paraId:3},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:3},{value:"500",paraId:3},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:3},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:4,tocIndex:4},{value:"\u4F7F\u7528",paraId:5},{value:"throttleDuration",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:5},{value:"0",paraId:5},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:5},{value:"\u4F7F\u7528",paraId:5},{value:"throttleTrailing",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u641C\u7D22\uFF0C\u9ED8\u8BA4",paraId:5},{value:"false",paraId:5},{value:"\u5728\u8868\u5355\u4E2D\u65B9\u6CD5\u4F7F\u7528\u540CAntd Input\uFF0C\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:6,tocIndex:11},{value:"\u4F60\u4E0D\u80FD\u5728\u8868\u5355\u4E2D\u4F7F\u7528setState\u53BB\u4FEE\u6539\u8868\u5355\u57DF\u7684\u503C\uFF0C\u8BE6\u89C1\uFF1A",paraId:7},{value:"FormItem",paraId:7},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:8,tocIndex:13},{value:"Antd Input",paraId:8,tocIndex:13},{value:"\u5C5E\u6027\u540D",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14},{value:"\u662F\u5426\u5FC5\u586B",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:14},{value:"state",paraId:9,tocIndex:14},{value:"string",paraId:9,tocIndex:14},{value:"false",paraId:9,tocIndex:14},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:9,tocIndex:14},{value:"\u7EC4\u4EF6\u5185\u90E8\u4F9D\u636E",paraId:10,tocIndex:15},{value:"lodash-es",paraId:10,tocIndex:15},{value:"\u4F9D\u8D56\uFF0C\u8BF7\u5148\u4F7F\u7528",paraId:10,tocIndex:15},{value:"npm install lodash-es",paraId:10,tocIndex:15},{value:"\u4E0B\u8F7D\u6240\u9700\u4F9D\u8D56 \uFF0C\u914D\u7F6E\u9879\u7EE7\u627F",paraId:10,tocIndex:15},{value:"Antd Input.Search",paraId:10,tocIndex:15},{value:"\u5C5E\u6027\u540D",paraId:11,tocIndex:16},{value:"\u7C7B\u578B",paraId:11,tocIndex:16},{value:"\u662F\u5426\u5FC5\u586B",paraId:11,tocIndex:16},{value:"\u8BF4\u660E",paraId:11,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:16},{value:"state",paraId:11,tocIndex:16},{value:"string",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:11,tocIndex:16},{value:"autoSearch",paraId:11,tocIndex:16},{value:"function",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8F93\u5165\u65F6\u662F\u5426\u81EA\u52A8\u4F7F\u7528\u9632\u6296\u641C\u7D22",paraId:11,tocIndex:16},{value:"debounceDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u5F00\u542FautoSearch\u540E\uFF0C\u9632\u6296\u65F6\u95F4",paraId:11,tocIndex:16},{value:"500",paraId:11,tocIndex:16},{value:"throttleDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u89E6\u53D1\u641C\u7D22\u4E8B\u4EF6\u65F6\u8282\u6D41\u65F6\u95F4",paraId:11,tocIndex:16},{value:"0",paraId:11,tocIndex:16},{value:"throttleTrailing",paraId:11,tocIndex:16},{value:"boolean",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8282\u6D41\u641C\u7D22\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u89E6\u53D1\u641C\u7D22",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:12,tocIndex:17},{value:"Antd InputNumber",paraId:12,tocIndex:17},{value:"\u5C5E\u6027\u540D",paraId:13,tocIndex:18},{value:"\u7C7B\u578B",paraId:13,tocIndex:18},{value:"\u662F\u5426\u5FC5\u586B",paraId:13,tocIndex:18},{value:"\u8BF4\u660E",paraId:13,tocIndex:18},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:18},{value:"state",paraId:13,tocIndex:18},{value:"string",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:13,tocIndex:18},{value:"mode",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:" ",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:"\u4EF7\u683C\u6A21\u5F0F\u3001",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"\u767E\u5206\u6BD4\u6A21\u5F0F\uFF0C\u51FA\u73B0\u56FA\u5B9A\u7684\u683C\u5F0F",paraId:13,tocIndex:18},{value:"strict",paraId:13,tocIndex:18},{value:"boolean",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E25\u683C\u9650\u5236\uFF0C\u9650\u5236\u4E3A\u6B63\u6574\u6570\u3001\u6B65\u957F\u4E3A1\u3001\u767E\u5206\u6BD4\u6A21\u5F0F\u4E0B\u9650\u5236\u6700\u5927\u503C100",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E0EAntd Input.XXX\u76F8\u540C\uFF0C",paraId:14,tocIndex:19},{value:"Antd Input",paraId:14,tocIndex:19}]},12808:function(q,D,e){e.r(D),e.d(D,{texts:function(){return v}});const v=[{value:"FAntdTable",paraId:0,tocIndex:0},{value:"\u662F\u5BF9Antd Table\u7684\u5C01\u88C5\uFF0C\u53EA\u9700\u8981\u6709api\u548Ccolumns\u5C5E\u6027\u5C31\u80FD\u5FEB\u901F\u6E32\u67D3\u51FA\u4E00\u4E2A\u5206\u9875\u8868\u683C\uFF0C\u5BF9Antd Table\u539F\u751F\u6539\u52A8\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"\u5185\u7F6E",paraId:1,tocIndex:0},{value:"api",paraId:1,tocIndex:0},{value:"\u8BF7\u6C42\uFF0C\u53EF\u4F7F\u7528",paraId:1,tocIndex:0},{value:"ref",paraId:1,tocIndex:0},{value:"\u63A7\u5236\u8BF7\u6C42",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\u4E0D\u5B58\u5728",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u65F6\uFF0C\u5982\u679C",paraId:1,tocIndex:0},{value:"dataIndex",paraId:1,tocIndex:0},{value:"\u6709\u503C\uFF0C\u5219\u81EA\u52A8\u5C06",paraId:1,tocIndex:0},{value:"dataIndex",paraId:1,tocIndex:0},{value:"\u5F53\u4F5C",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"checkboxState",paraId:1,tocIndex:0},{value:"\u548C",paraId:1,tocIndex:0},{value:"radioState",paraId:1,tocIndex:0},{value:"\u80FD\u66F4\u5FEB\u7684\u4F7F\u7528\u591A\u9009/\u5355\u9009",paraId:1,tocIndex:0},{value:"\u6709\u4E00\u5957\u9ED8\u8BA4\u7684\u5B57\u6BB5\u6620\u5C04\u3001\u521D\u59CB\u5206\u9875\u914D\u7F6E\uFF0C\u89C1\u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:0},{value:"\u6CE8\u610F\u4EE5\u4E0B\u89C4\u5B9A\uFF1A",paraId:2},{value:"\u5206\u9875\u53C2\u6570\u4E3Acurrent\u3001pageSize",paraId:3},{value:"api",paraId:3},{value:"\u8FD4\u56DE\u7684\u662F\u63A5\u53E3\u6570\u636E\uFF0C\u800C\u4E0D\u662F",paraId:3},{value:"response",paraId:3},{value:"\u6210\u529F\u72B6\u6001\u4E3A",paraId:3},{value:"code==='0'",paraId:3},{value:"\u603B\u6570\u636E\u6761\u6570\u5B57\u6BB5\u4E3A",paraId:3},{value:"total",paraId:3},{value:"\u6570\u636E\u5B57\u6BB5\u4E3A",paraId:3},{value:"data",paraId:3},{value:"\u5047\u8BBE\u63A5\u53E3\u8FD4\u56DEresponse\u5BF9\u8C61\uFF0C\u5206\u9875\u53C2\u6570\u4E3ApageSearch: { limit, page }\uFF0C\u8FD4\u56DE\u4F53\u91CC\u9762\u662Fsize\u548Crecords\uFF0C\u6210\u529F\u6761\u4EF6\u4E3Acode==='OK'",paraId:4,tocIndex:2},{value:"\u4F7F\u7528",paraId:5,tocIndex:6},{value:"filter",paraId:5,tocIndex:6},{value:"\u8FC7\u6EE4\u6389\u7B2C\u4E94\u6761\u6570\u636E",paraId:5,tocIndex:6},{value:"\u4F7F\u7528",paraId:6,tocIndex:7},{value:"requestValid",paraId:6,tocIndex:7},{value:"\u62E6\u622A\u7B2C\u4E8C\u9875\u7684\u8BF7\u6C42",paraId:6,tocIndex:7},{value:"\u53EF\u53C2\u8003",paraId:7,tocIndex:10},{value:"Antd Table",paraId:7,tocIndex:10},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:8,tocIndex:11},{value:"Antd Table",paraId:8,tocIndex:11},{value:"\u5C5E\u6027\u540D",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:9,tocIndex:12},{value:"\u8BF4\u660E",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"api",paraId:9,tocIndex:12},{value:"apiData => Promise",paraId:9,tocIndex:12},{value:"\u662F",paraId:9,tocIndex:12},{value:"\u83B7\u53D6\u8868\u683C\u6570\u636E\u7684\u63A5\u53E3\u51FD\u6570",paraId:9,tocIndex:12},{value:"apiData",paraId:9,tocIndex:12},{value:"object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"api\u51FD\u6570\u8BF7\u6C42\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A",paraId:9,tocIndex:12},{value:"apiData",paraId:9,tocIndex:12},{value:" + ",paraId:9,tocIndex:12},{value:"requestPageConfig",paraId:9,tocIndex:12},{value:"checkboxState",paraId:9,tocIndex:12},{value:"array",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u591A\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:9,tocIndex:12},{value:"radioState",paraId:9,tocIndex:12},{value:"array",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u5355\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:9,tocIndex:12},{value:"filter",paraId:9,tocIndex:12},{value:"itemData => boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8FC7\u6EE4\u8868\u683C\u6570\u636E\uFF0C\u540C",paraId:9,tocIndex:12},{value:"Array.filter",paraId:9,tocIndex:12},{value:"data => true",paraId:9,tocIndex:12},{value:"getApiData",paraId:9,tocIndex:12},{value:"response => object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8FD4\u56DE\u540E\u7AEF\u63A5\u53E3\u54CD\u5E94\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u6D4F\u89C8\u5668response\uFF08\u5982\u679C\u63A5\u53E3\u8FD4\u56DE\u662Fresponse\uFF0C\u5EFA\u8BAE\u53BB\u8C03\u6574\u54CD\u5E94\u62E6\u622A\u5668\uFF0C\u65E0\u6CD5\u8C03\u6574\u62E6\u622A\u5668\u53EF\u4EE5\u6539\u4E3A",paraId:9,tocIndex:12},{value:"response => response.data",paraId:9,tocIndex:12},{value:"\uFF09",paraId:9,tocIndex:12},{value:"response => response",paraId:9,tocIndex:12},{value:"requestValid",paraId:9,tocIndex:12},{value:"requestArgs => boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u662F\u5426\u8FDB\u884C\u8BF7\u6C42\uFF0C\u53EF\u7528\u4E8E\u5728\u4E0D\u6EE1\u8DB3\u8BF7\u6C42\u6761\u4EF6\u65F6\u62E6\u622A\u8BF7\u6C42\uFF0C",paraId:9,tocIndex:12},{value:"requestArgs",paraId:9,tocIndex:12},{value:"\u63A5\u53E3\u8BF7\u6C42\u53C2\u6570",paraId:9,tocIndex:12},{value:"requestArgs => true",paraId:9,tocIndex:12},{value:"requestPageConfig",paraId:9,tocIndex:12},{value:"(current, pageSize) => object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8FD4\u56DE\u4F20\u9012\u63A5\u53E3\u7684\u5206\u9875\u914D\u7F6E\uFF0C\u9ED8\u8BA4",paraId:9,tocIndex:12},{value:"pageSearch: { limit, page }",paraId:9,tocIndex:12},{value:"\u53C2\u6570\uFF0Ccurrent\u5F53\u524D\u9875\uFF0CpageSize\u5F53\u524D\u6761\u6570",paraId:9,tocIndex:12},{value:"(current, pageSize) => ({ current, pageSize })",paraId:9,tocIndex:12},{value:"successValid",paraId:9,tocIndex:12},{value:"response => boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6210\u529F\uFF0C\u9ED8\u8BA4\u5224\u65AD\u54CD\u5E94\u6570\u636E\u4E2D\u7684",paraId:9,tocIndex:12},{value:"code",paraId:9,tocIndex:12},{value:"\u4E3A\u5B57\u7B26\u4E32",paraId:9,tocIndex:12},{value:"0",paraId:9,tocIndex:12},{value:"data => data.code === '0'",paraId:9,tocIndex:12},{value:"mapperOptions",paraId:9,tocIndex:12},{value:"object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8868\u683C\u6570\u636E\u6620\u5C04\u5B57\u6BB5\u540D\u79F0",paraId:9,tocIndex:12},{value:"{ total: 'count', data: 'data' }",paraId:9,tocIndex:12},{value:"initPageSize",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u6761\u6570",paraId:9,tocIndex:12},{value:"10",paraId:9,tocIndex:12},{value:"initCurrent",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u9875\u6570",paraId:9,tocIndex:12},{value:"1",paraId:9,tocIndex:12},{value:"autoInit",paraId:9,tocIndex:12},{value:"boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u8868\u683C\u6570\u636E",paraId:9,tocIndex:12},{value:"true",paraId:9,tocIndex:12},{value:"\u65B9\u6CD5\u540D",paraId:10,tocIndex:13},{value:"\u8BF4\u660E",paraId:10,tocIndex:13},{value:"\u7C7B\u578B",paraId:10,tocIndex:13},{value:"getTableData",paraId:10,tocIndex:13},{value:"\u7EC4\u4EF6\u66B4\u9732\u7684\u67E5\u8BE2\u65B9\u6CD5\uFF0C\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F20\u5165data\u53C2\u6570\u4F1A\u8986\u76D6apiData\uFF0C\u9700\u8981\u643A\u5E26\u5176\u4ED6\u53C2\u6570\u8BF7\u4F7F\u7528otherData",paraId:10,tocIndex:13},{value:"({ current\u3001pageSize\u3001data\u3001otherData }) => Promise",paraId:10,tocIndex:13},{value:"init",paraId:10,tocIndex:13},{value:"\u6839\u636E\u5F53\u524D\u6761\u6570\u3001\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u521D\u59CB\u9875\u6570\u7684\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u989D\u5916\u67E5\u8BE2\u6570\u636E\uFF0C\u4E00\u822C\u7528\u4E8E\u67E5\u8BE2",paraId:10,tocIndex:13},{value:"otherData => Promise",paraId:10,tocIndex:13},{value:"reset",paraId:10,tocIndex:13},{value:"\u4F7F\u7528\u521D\u59CB\u6761\u6570\u3001\u521D\u59CB\u9875\u6570\u3001\u7A7A\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u91CD\u7F6E",paraId:10,tocIndex:13},{value:"otherData => Promise",paraId:10,tocIndex:13},{value:"reload",paraId:10,tocIndex:13},{value:"\u5237\u65B0\u5F53\u524D\u9875\u9762\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6",paraId:10,tocIndex:13},{value:"otherData => Promise",paraId:10,tocIndex:13},{value:"getInfo",paraId:10,tocIndex:13},{value:"\u83B7\u53D6\u5F53\u524D\u8868\u683C\u8BF7\u6C42\u6570\u636E",paraId:10,tocIndex:13},{value:"() => ({ current, pageSize, data })",paraId:10,tocIndex:13}]},6282:function(q,D,e){e.r(D),e.d(D,{texts:function(){return v}});const v=[{value:"\u8FD9\u662F\u4E00\u4E2A\u663E\u793A\u5BC6\u7801\u5F3A\u5EA6\u7684\u663E\u793A\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u6709\u4E94\u4E2A\u7B49\u7EA7(0-4)\uFF0C\u53EF\u81EA\u5B9A\u4E49\u7B49\u7EA7",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E",paraId:1,tocIndex:2},{value:"scoreList",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u6765\u6E32\u67D3\u989C\u8272\u548C\u6587\u5B57\uFF0C\u6839\u636E",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\u8FDB\u884C\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u4F7F\u7528",paraId:2,tocIndex:3},{value:"reverse",paraId:2,tocIndex:3},{value:"\u8C03\u6574\u6E32\u67D3\u987A\u5E8F",paraId:2,tocIndex:3},{value:"\u9700\u8981\u5F15\u5165\u5E93",paraId:3,tocIndex:4},{value:"zxcvbn",paraId:3,tocIndex:4},{value:"\u4F7F\u7528\uFF0C\u5728\u8868\u5355\u4E2D\u81EA\u52A8\u8BA1\u7B97\u5BC6\u7801\u5F3A\u5EA6\uFF0C\u5E76\u9650\u5236\u4F7F\u7528\u7684\u5BC6\u7801\u5F3A\u5EA6\u4E0D\u80FD\u4E3A",paraId:3,tocIndex:4},{value:"\u975E\u5E38\u5F31",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"value",paraId:4,tocIndex:6},{value:"number",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u5BC6\u7801\u5F3A\u5EA6\uFF0C\u9ED8\u8BA4\u53D6\u503C\u8303\u56F40-4",paraId:4,tocIndex:6},{value:"scoreList",paraId:4,tocIndex:6},{value:"array",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u6E32\u67D3",paraId:4,tocIndex:6},{value:'[{"color":"#a0133d","label":"\u975E\u5E38\u5F31","value":0},{"color":"#f7e84d","label":"\u8F83\u5F31","value":1},{"color":"#ffa500","label":"\u4E00\u822C","value":2},{"color":"#1677ff","label":"\u8F83\u5F3A","value":3},{"color":"#2f9715","label":"\u5F3A","value":4}]',paraId:4,tocIndex:6},{value:"defaultColor",paraId:4,tocIndex:6},{value:"color",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u5E95\u8272",paraId:4,tocIndex:6},{value:"'#e2e2e2'",paraId:4,tocIndex:6},{value:"reverse",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8C03\u6574\u5F3A\u5EA6\u663E\u793A\u987A\u5E8F",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6}]},51446:function(q,D,e){e.r(D),e.d(D,{texts:function(){return v}});const v=[{value:`\u8FD9\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u5C01\u88C5\u7EC4\u4EF6\uFF0C\u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u4E1A\u52A1\u529F\u80FD\uFF0C\u4E3B\u8981\u4E3A\u4E86\u907F\u514D\u5728\u9879\u76EE\u4E2D\u7EC4\u4EF6\u7684\u7B80\u5355\u5C5E\u6027\u5197\u4F59\u3002
\u4EE5\u4E0B\u662F\u5C01\u88C5\u539F\u5219\uFF1A`,paraId:0,tocIndex:0},{value:"\u4E0D\u7834\u574F\u539F\u6709\u7EC4\u4EF6\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\u3001Ref\u3001\u5B50\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u4FDD\u6301\u539F\u6709\u7EC4\u4EF6\u7684\u53EF\u62D3\u5C55\u6027",paraId:1,tocIndex:0},{value:`npm install izid
# or
pnpm add izid
# or
yarn add izid
`,paraId:2,tocIndex:1},{value:"Npm",paraId:3,tocIndex:2}]}}]);
