"use strict";(self.webpackChunkizid=self.webpackChunkizid||[]).push([[904],{15803:function(w,$,e){e.r($),e.d($,{demos:function(){return o}});var f=e(15009),B=e.n(f),v=e(99289),C=e.n(v),c=e(67294),l=e(37542),T=e(74508),o={"docs-demo-demo-0":{component:c.memo(c.lazy(C()(B()().mark(function D(){var j,I;return B()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return j=d.sent,I=j.Demo,d.abrupt("return",{default:function(){return c.createElement(I,null)}});case 5:case"end":return d.stop()}},D)})))),asset:{type:"BLOCK",id:"docs-demo-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Demo } from 'izid'

export default () => {
    return <Demo />
}`},izid:{type:"NPM",value:"0.1.10"}},entry:"index.jsx"},context:{izid:T},renderOpts:{compile:function(){var D=C()(B()().mark(function I(){var p,d=arguments;return B()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(p=r.sent).default.apply(p,d));case 3:case"end":return r.stop()}},I)}));function j(){return D.apply(this,arguments)}return j}()}}}},48214:function(w,$,e){var f;e.r($),e.d($,{demos:function(){return j}});var B=e(15009),v=e.n(B),C=e(99289),c=e.n(C),l=e(67294),T=e(24431),o=e(74508),D=e(96216),j={"docs-f-antd-input-demo-0":{component:l.memo(l.lazy(c()(v()().mark(function I(){var p,d,t,r,u,n,g,a;return v()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return p=S.sent,d=p.FAntdInput,S.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=S.sent,r=t.useState,u=t.useEffect,n=t.useRef,S.next=12,Promise.resolve().then(e.bind(e,96216));case 12:return g=S.sent,a=g.Button,S.abrupt("return",{default:function(){var y=r(),h=n();u(function(){var P;(P=h.current)===null||P===void 0||P.focus()},[]);var x=function(){y[1]("Hello World")};return l.createElement(l.Fragment,null,l.createElement("p",null,"Input Value\uFF1A",y[0]),l.createElement(d,{state:y,ref:h}),l.createElement("p",null,l.createElement(a,{type:"primary",onClick:x},"Hello World")))}});case 15:case"end":return S.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.24.7"}},entry:"index.jsx"},context:{izid:o,react:f||(f=e.t(l,2)),antd:D},renderOpts:{compile:function(){var I=c()(v()().mark(function d(){var t,r=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},d)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-1":{component:l.memo(l.lazy(c()(v()().mark(function I(){var p,d,t,r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return p=n.sent,d=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=n.sent,r=t.useState,n.abrupt("return",{default:function(){var a=r(),i=function(m){console.log("\u89E6\u53D1\u641C\u7D22\uFF1A",m)};return l.createElement(l.Fragment,null,l.createElement("p",null,"Input Value\uFF1A",a[0]),l.createElement(d.Search,{state:a,onSearch:i}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:o,react:f||(f=e.t(l,2))},renderOpts:{compile:function(){var I=c()(v()().mark(function d(){var t,r=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},d)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-2":{component:l.memo(l.lazy(c()(v()().mark(function I(){var p,d,t,r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return p=n.sent,d=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=n.sent,r=t.useState,n.abrupt("return",{default:function(){var a=r(),i=function(m){console.log("\u89E6\u53D1\u81EA\u52A8\u641C\u7D22\uFF1A",m)};return l.createElement(l.Fragment,null,l.createElement("p",null,"Input Value\uFF1A",a[0]),l.createElement(d.Search,{state:a,autoSearch:!0,onSearch:i}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:o,react:f||(f=e.t(l,2))},renderOpts:{compile:function(){var I=c()(v()().mark(function d(){var t,r=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},d)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-3":{component:l.memo(l.lazy(c()(v()().mark(function I(){var p,d,t,r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return p=n.sent,d=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=n.sent,r=t.useState,n.abrupt("return",{default:function(){var a=r(),i=function(m){console.log("\u89E6\u53D1\u8282\u6D41\u641C\u7D22\uFF1A",m)};return l.createElement(l.Fragment,null,l.createElement("p",null,"Input Value\uFF1A",a[0]),l.createElement(d.Search,{state:a,throttleDuration:2e3,onSearch:i}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:o,react:f||(f=e.t(l,2))},renderOpts:{compile:function(){var I=c()(v()().mark(function d(){var t,r=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},d)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-4":{component:l.memo(l.lazy(c()(v()().mark(function I(){var p,d,t,r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return p=n.sent,d=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=n.sent,r=t.useState,n.abrupt("return",{default:function(){var a=r();return l.createElement(l.Fragment,null,l.createElement("p",null,"Input Value\uFF1A",a[0]),l.createElement(d.Number,{state:a,strict:!0}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} strict />
    </>;
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:o,react:f||(f=e.t(l,2))},renderOpts:{compile:function(){var I=c()(v()().mark(function d(){var t,r=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},d)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-5":{component:l.memo(l.lazy(c()(v()().mark(function I(){var p,d,t,r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return p=n.sent,d=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=n.sent,r=t.useState,n.abrupt("return",{default:function(){var a=r();return l.createElement(l.Fragment,null,l.createElement("p",null,"Input Value\uFF1A",a[0]),l.createElement(d.Number,{state:a,mode:"price"}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'price'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:o,react:f||(f=e.t(l,2))},renderOpts:{compile:function(){var I=c()(v()().mark(function d(){var t,r=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},d)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-6":{component:l.memo(l.lazy(c()(v()().mark(function I(){var p,d,t,r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return p=n.sent,d=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=n.sent,r=t.useState,n.abrupt("return",{default:function(){var a=r();return l.createElement(l.Fragment,null,l.createElement("p",null,"Input Value\uFF1A",a[0]),l.createElement(d.Number,{state:a,mode:"percent"}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'percent'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:o,react:f||(f=e.t(l,2))},renderOpts:{compile:function(){var I=c()(v()().mark(function d(){var t,r=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},d)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-7":{component:l.memo(l.lazy(c()(v()().mark(function I(){var p,d,t,r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return p=n.sent,d=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=n.sent,r=t.useState,n.abrupt("return",{default:function(){var a=r();return l.createElement(l.Fragment,null,l.createElement("p",null,"Input Value\uFF1A",a[0]),l.createElement(d.Password,{state:a}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Password state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:o,react:f||(f=e.t(l,2))},renderOpts:{compile:function(){var I=c()(v()().mark(function d(){var t,r=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},d)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-8":{component:l.memo(l.lazy(c()(v()().mark(function I(){var p,d,t,r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return p=n.sent,d=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=n.sent,r=t.useState,n.abrupt("return",{default:function(){var a=r("");return l.createElement(l.Fragment,null,l.createElement("p",null,"Input Value\uFF1A",a[0]),l.createElement(d.OTP,{state:a}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.OTP state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:o,react:f||(f=e.t(l,2))},renderOpts:{compile:function(){var I=c()(v()().mark(function d(){var t,r=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},d)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-9":{component:l.memo(l.lazy(c()(v()().mark(function I(){var p,d,t,r;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return p=n.sent,d=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=n.sent,r=t.useState,n.abrupt("return",{default:function(){var a=r("");return l.createElement(l.Fragment,null,l.createElement("p",null,"Input Value\uFF1A",a[0]),l.createElement(d.TextArea,{state:a}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-9",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.TextArea state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:o,react:f||(f=e.t(l,2))},renderOpts:{compile:function(){var I=c()(v()().mark(function d(){var t,r=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},d)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-10":{component:l.memo(l.lazy(c()(v()().mark(function I(){var p,d,t,r,u,n,g;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return p=i.sent,d=p.FAntdInput,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return t=i.sent,r=t.useState,i.next=10,Promise.resolve().then(e.bind(e,96216));case 10:return u=i.sent,n=u.Form,g=u.Button,i.abrupt("return",{default:function(){var m=function(h){console.log("\u8868\u5355\u63D0\u4EA4\uFF1A",h)};return l.createElement(n,{onFinish:m},l.createElement(n.Item,{label:"\u8F93\u5165\u6846",name:"value"},l.createElement(d,null)),l.createElement(n.Item,null,l.createElement(g,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4")))}});case 14:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-10",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.24.7"}},entry:"index.jsx"},context:{izid:o,react:f||(f=e.t(l,2)),antd:D},renderOpts:{compile:function(){var I=c()(v()().mark(function d(){var t,r=arguments;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(t=n.sent).default.apply(t,r));case 3:case"end":return n.stop()}},d)}));function p(){return I.apply(this,arguments)}return p}()}}}},62511:function(w,$,e){var f;e.r($),e.d($,{demos:function(){return p}});var B=e(5574),v=e.n(B),C=e(15009),c=e.n(C),l=e(99289),T=e.n(l),o=e(67294),D=e(39398),j=e(74508),I=e(96216),p={"docs-f-antd-table-demo-0":{component:o.memo(o.lazy(T()(c()().mark(function d(){var t,r,u,n,g;return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return t=i.sent,r=t.FAntdTable,i.next=6,Promise.resolve().then(e.bind(e,96216));case 6:return u=i.sent,n=u.Button,g=function(m){var y=m.current,h=m.pageSize;return new Promise(function(x){setTimeout(function(){x({code:"0",count:21,data:Array.from({length:21},function(P,A){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(A+1,"\u6761\u6570\u636E")}}).slice((y-1)*h,y*h)})},300)})},i.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement("a",null,"Delete")}}];return o.createElement(r,{api:g,columns:m})}});case 10:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.10"},antd:{type:"NPM",value:"5.24.7"}},entry:"index.jsx"},context:{izid:j,antd:I},renderOpts:{compile:function(){var d=T()(c()().mark(function r(){var u,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,n));case 3:case"end":return a.stop()}},r)}));function t(){return d.apply(this,arguments)}return t}()}},"docs-f-antd-table-demo-1":{component:o.memo(o.lazy(T()(c()().mark(function d(){var t,r,u,n,g;return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return t=i.sent,r=t.FAntdTable,i.next=6,Promise.resolve().then(e.bind(e,96216));case 6:return u=i.sent,n=u.Button,g=function(m){var y=m.current,h=m.pageSize;return new Promise(function(x){setTimeout(function(){x({status:200,data:{code:"OK",size:21,records:Array.from({length:21},function(P,A){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(A+1,"\u6761\u6570\u636E")}}).slice((y-1)*h,y*h)}})},300)})},i.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement("a",null,"Delete")}}];return o.createElement(r,{api:g,columns:m,getApiData:function(h){return h.data},reqeustPageConfig:function(h,x){return{pageSearch:{page:h,limit:x}}},mapperOptions:{total:"size",data:"records"},successValid:function(h){return h.code==="OK"}})}});case 10:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.10"},antd:{type:"NPM",value:"5.24.7"}},entry:"index.jsx"},context:{izid:j,antd:I},renderOpts:{compile:function(){var d=T()(c()().mark(function r(){var u,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,n));case 3:case"end":return a.stop()}},r)}));function t(){return d.apply(this,arguments)}return t}()}},"docs-f-antd-table-demo-2":{component:o.memo(o.lazy(T()(c()().mark(function d(){var t,r,u,n,g,a,i,S,m;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return t=h.sent,r=t.FAntdTable,h.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=h.sent,n=u.useRef,g=u.useState,h.next=11,Promise.resolve().then(e.bind(e,96216));case 11:return a=h.sent,i=a.Button,S=a.Space,m=function(P){var A=P.current,R=P.pageSize;return new Promise(function(s){setTimeout(function(){s({code:"0",count:21,data:Array.from({length:21},function(F,z){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(z+1,"\u6761\u6570\u636E")}}).slice((A-1)*R,A*R)})},300)})},h.abrupt("return",{default:function(){var P=n(),A=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement("a",null,"Delete")}}],R=function(F){var z;(z=P.current)===null||z===void 0||z[F]()};return o.createElement(o.Fragment,null,o.createElement(S,{style:{marginBottom:"10px"}},o.createElement(i,{onClick:function(){return R("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),o.createElement(i,{onClick:function(){return R("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),o.createElement(i,{onClick:function(){return R("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),o.createElement(r,{ref:P,api:m,columns:A,autoInit:!1}))}});case 16:case"end":return h.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.24.7"}},entry:"index.jsx"},context:{izid:j,react:f||(f=e.t(o,2)),antd:I},renderOpts:{compile:function(){var d=T()(c()().mark(function r(){var u,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,n));case 3:case"end":return a.stop()}},r)}));function t(){return d.apply(this,arguments)}return t}()}},"docs-f-antd-table-demo-3":{component:o.memo(o.lazy(T()(c()().mark(function d(){var t,r,u,n,g,a,i;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return t=m.sent,r=t.FAntdTable,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=m.sent,n=u.useState,m.next=10,Promise.resolve().then(e.bind(e,96216));case 10:return g=m.sent,a=g.Radio,i=function(h){var x=h.current,P=h.pageSize;return new Promise(function(A){setTimeout(function(){A({code:"0",count:21,data:Array.from({length:21},function(R,s){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(s+1,"\u6761\u6570\u636E")}}).slice((x-1)*P,x*P)})},300)})},m.abrupt("return",{default:function(){var h=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement("a",null,"Delete")}}],x=n([]),P=v()(x,2),A=P[0],R=P[1];return o.createElement(o.Fragment,null,JSON.stringify(A),o.createElement(r,{checkboxState:[A,R],api:i,columns:h}))}});case 14:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.24.7"}},entry:"index.jsx"},context:{izid:j,react:f||(f=e.t(o,2)),antd:I},renderOpts:{compile:function(){var d=T()(c()().mark(function r(){var u,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,n));case 3:case"end":return a.stop()}},r)}));function t(){return d.apply(this,arguments)}return t}()}},"docs-f-antd-table-demo-4":{component:o.memo(o.lazy(T()(c()().mark(function d(){var t,r,u,n,g,a,i;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return t=m.sent,r=t.FAntdTable,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=m.sent,n=u.useState,m.next=10,Promise.resolve().then(e.bind(e,96216));case 10:return g=m.sent,a=g.Radio,i=function(h){var x=h.current,P=h.pageSize;return new Promise(function(A){setTimeout(function(){A({code:"0",count:21,data:Array.from({length:21},function(R,s){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(s+1,"\u6761\u6570\u636E")}}).slice((x-1)*P,x*P)})},300)})},m.abrupt("return",{default:function(){var h=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement("a",null,"Delete")}}],x=n({}),P=v()(x,2),A=P[0],R=P[1];return o.createElement(o.Fragment,null,JSON.stringify(A),o.createElement(r,{radioState:[A,R],api:i,columns:h}))}});case 14:case"end":return m.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.24.7"}},entry:"index.jsx"},context:{izid:j,react:f||(f=e.t(o,2)),antd:I},renderOpts:{compile:function(){var d=T()(c()().mark(function r(){var u,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,n));case 3:case"end":return a.stop()}},r)}));function t(){return d.apply(this,arguments)}return t}()}},"docs-f-antd-table-demo-5":{component:o.memo(o.lazy(T()(c()().mark(function d(){var t,r,u,n,g;return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return t=i.sent,r=t.FAntdTable,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=i.sent,n=u.useState,g=function(m){var y=m.current,h=m.pageSize;return new Promise(function(x){setTimeout(function(){x({code:"0",count:21,data:Array.from({length:21},function(P,A){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(A+1,"\u6761\u6570\u636E")}}).slice((y-1)*h,y*h)})},300)})},i.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement("a",null,"Delete")}}];return o.createElement(r,{api:g,columns:m,filter:function(h){return h.more!=="\u8FD9\u662F\u7B2C5\u6761\u6570\u636E"}})}});case 10:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:j,react:f||(f=e.t(o,2))},renderOpts:{compile:function(){var d=T()(c()().mark(function r(){var u,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,n));case 3:case"end":return a.stop()}},r)}));function t(){return d.apply(this,arguments)}return t}()}},"docs-f-antd-table-demo-6":{component:o.memo(o.lazy(T()(c()().mark(function d(){var t,r,u,n,g;return c()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return t=i.sent,r=t.FAntdTable,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=i.sent,n=u.useState,g=function(m){var y=m.current,h=m.pageSize;return new Promise(function(x){setTimeout(function(){x({code:"0",count:21,data:Array.from({length:21},function(P,A){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(A+1,"\u6761\u6570\u636E")}}).slice((y-1)*h,y*h)})},300)})},i.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement("a",null,"Delete")}}];return o.createElement(r,{api:g,columns:m,requestValid:function(h){return h.current!==2}})}});case 10:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:j,react:f||(f=e.t(o,2))},renderOpts:{compile:function(){var d=T()(c()().mark(function r(){var u,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,n));case 3:case"end":return a.stop()}},r)}));function t(){return d.apply(this,arguments)}return t}()}},"docs-f-antd-table-demo-7":{component:o.memo(o.lazy(T()(c()().mark(function d(){var t,r,u,n,g,a,i,S,m,y;return c()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return t=x.sent,r=t.FAntdTable,u=t.FAntdInput,x.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=x.sent,g=n.useRef,a=n.useState,x.next=12,Promise.resolve().then(e.bind(e,96216));case 12:return i=x.sent,S=i.Button,m=i.Space,y=function(A){var R=A.current,s=A.pageSize;return new Promise(function(F){setTimeout(function(){F({code:"0",count:21,data:Array.from({length:21},function(z,b){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(b+1,"\u6761\u6570\u636E")}}).slice((R-1)*s,R*s)})},300)})},x.abrupt("return",{default:function(){var A=g(),R=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement("a",null,"Delete")}}],s=a(),F=v()(s,2),z=F[0],b=F[1],O=function(V){var L;(L=A.current)===null||L===void 0||L[V]({name:z})},M=a(),W=v()(M,2),Z=W[0],H=W[1];return o.createElement(o.Fragment,null,o.createElement(m,{style:{marginBottom:"10px"}},o.createElement(S,{onClick:function(){return O("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),o.createElement(S,{onClick:function(){return O("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),o.createElement(S,{onClick:function(){return O("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),o.createElement(u,{state:[z,b],placeholder:"\u8F93\u5165\u624B\u52A8\u8BF7\u6C42\u989D\u5916\u53C2\u6570"}),o.createElement("p",null,JSON.stringify(Z)),o.createElement(r,{ref:A,api:y,columns:R,requestValid:function(V){return H(V),!0}}))}});case 17:case"end":return x.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable, FAntdInput } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.24.7"}},entry:"index.jsx"},context:{izid:j,react:f||(f=e.t(o,2)),antd:I},renderOpts:{compile:function(){var d=T()(c()().mark(function r(){var u,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,n));case 3:case"end":return a.stop()}},r)}));function t(){return d.apply(this,arguments)}return t}()}},"docs-f-antd-table-demo-8":{component:o.memo(o.lazy(T()(c()().mark(function d(){var t,r,u,n,g,a,i,S;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,74508));case 2:return t=y.sent,r=t.FAntdTable,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return u=y.sent,n=u.useRef,g=u.useState,y.next=11,Promise.resolve().then(e.bind(e,96216));case 11:return a=y.sent,i=a.Button,S=function(x){var P=x.current,A=x.pageSize;return new Promise(function(R){setTimeout(function(){R({code:"0",count:21,data:Array.from({length:21},function(s,F){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(F+1,"\u6761\u6570\u636E")}}).slice((P-1)*A,P*A)})},300)})},y.abrupt("return",{default:function(){var x=n(),P=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement("a",null,"Delete")}}],A=g(),R=v()(A,2),s=R[0],F=R[1],z=function(){var O;F((O=x.current)===null||O===void 0?void 0:O.getInfo())};return o.createElement(o.Fragment,null,o.createElement(i,{onClick:z},"\u83B7\u53D6\u8868\u683C\u4FE1\u606F"),o.createElement("p",null,JSON.stringify(s)),o.createElement(r,{ref:x,api:S,columns:P}))}});case 15:case"end":return y.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.10"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.24.7"}},entry:"index.jsx"},context:{izid:j,react:f||(f=e.t(o,2)),antd:I},renderOpts:{compile:function(){var d=T()(c()().mark(function r(){var u,n=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,n));case 3:case"end":return a.stop()}},r)}));function t(){return d.apply(this,arguments)}return t}()}}}},11171:function(w,$,e){e.r($),e.d($,{demos:function(){return v}});var f=e(67294),B=e(68537),v={}},74508:function(w,$,e){e.r($),e.d($,{Demo:function(){return B},DemoLog:function(){return R},FAntdInput:function(){return S},FAntdTable:function(){return A}});var f=e(85893),B=function(){return(0,f.jsx)(f.Fragment,{children:"This is a demo component."})},v=e(97857),C=e.n(v),c=e(13769),l=e.n(c),T=e(38289),o=e(13457),D=e(67294),j=e(111),I=e(14615),p=["state","onChange"],d=["state","onInput"],t=["state","onChange","mode","strict"],r=function(F,z){var b=F.state,O=F.onChange,M=l()(F,p);return C()({ref:z,allowClear:!0,value:b==null?void 0:b[0],onChange:function(Z){for(var H,N=arguments.length,V=new Array(N>1?N-1:0),L=1;L<N;L++)V[L-1]=arguments[L];b==null||b[1].apply(b,[(H=Z.target.value)===null||H===void 0?void 0:H.trim()].concat(V)),O&&O.apply(void 0,[Z].concat(V))}},M)},u=(0,D.forwardRef)(function(s,F){return(0,f.jsx)(T.Z,C()({placeholder:"\u8BF7\u8F93\u5165"},r(s,F)))}),n=T.Z.$$typeof,g=T.Z.render,a=l()(T.Z,["$$typeof","render"]);for(var i in a)u[i]=T.Z[i];u.Password=(0,D.forwardRef)(function(s,F){return(0,f.jsx)(T.Z.Password,C()({placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},r(s,F)))}),u.Search=(0,D.forwardRef)(function(s,F){var z,b,O,M=function(){s.onSearch&&s.onSearch.apply(s,arguments)},W=(0,j.Z)(M,(z=s.throttleDuration)!==null&&z!==void 0?z:0,{trailing:(b=s.throttleTrailing)!==null&&b!==void 0?b:!1}),Z=(0,D.useCallback)((0,I.Z)(M,(O=s.debounceDuration)!==null&&O!==void 0?O:500),[]),H=function(V){s.autoSearch&&Z(V.target.value),s.onInput&&s.onInput(V)};return(0,f.jsx)(T.Z.Search,C()(C()({placeholder:s.autoSearch?"\u8F93\u5165\u540E\u81EA\u52A8\u641C\u7D22":"\u8BF7\u8F93\u5165"},r(s,F)),{},{onSearch:W,onInput:H}))}),u.TextArea=(0,D.forwardRef)(function(s,F){return(0,f.jsx)(T.Z.TextArea,C()(C()({placeholder:"\u8BF7\u8F93\u5165",showCount:!0,maxLength:100},r(s,F)),{},{style:C()({height:100},s==null?void 0:s.style)}))}),u.OTP=(0,D.forwardRef)(function(s,F){var z=s.state,b=s.onInput,O=l()(s,d);return(0,f.jsx)(T.Z.OTP,C()(C()({ref:F,value:z==null?void 0:z[0]},O),{},{onInput:function(W){z==null||z[1](W.join("")),b&&b(W)}}))}),u.Number=(0,D.forwardRef)(function(s,F){var z=s.state,b=s.onChange,O=s.mode,M=s.strict,W=l()(s,t),Z=function(J){return M?~~J:J},H=(0,D.useMemo)(function(){var L={};return O==="price"&&(L={formatter:function(U){return"\uFFE5".concat(U).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(U){return Z(U==null?void 0:U.replace(/\￥\s?|(,*)/g,""))}}),O==="percent"&&(L={formatter:function(U){return"".concat(U,"%")},parser:function(U){return Z(U==null?void 0:U.replace("%",""))}}),L},[]),N=(0,D.useMemo)(function(){if(O==="percent"&&M)return 100},[]),V=function(J){z==null||z[1](J),b&&b(J)};return(0,f.jsx)(o.Z,C()(C()(C()({placeholder:"\u8BF7\u8F93\u5165",ref:F,value:z==null?void 0:z[0],keyboard:!0,changeOnWheel:!0,min:M?0:void 0,max:N,step:M?1:.1,precision:M?0:void 0},H),W),{},{onChange:V}))});var S=u,m=e(5574),y=e.n(m),h=e(47921),x=["api","apiData","checkboxState","radioState","filter","getApiData","requestValid","requestPageConfig","successValid","mapperOptions","initPageSize","initCurrent","autoInit","rowKey"],P=(0,D.forwardRef)(function(s,F){var z,b=s.api,O=s.apiData,M=s.checkboxState,W=s.radioState,Z=s.filter,H=Z===void 0?function(E){return!0}:Z,N=s.getApiData,V=N===void 0?function(E){return E}:N,L=s.requestValid,J=L===void 0?function(E){return!0}:L,U=s.requestPageConfig,le=U===void 0?function(E,K){return{current:E,pageSize:K}}:U,oe=s.successValid,ie=oe===void 0?function(E){return E.code==="0"}:oe,se=s.mapperOptions,ae=se===void 0?{total:"count",data:"data"}:se,ce=s.initPageSize,re=ce===void 0?10:ce,pe=s.initCurrent,ne=pe===void 0?1:pe,me=s.autoInit,Ee=me===void 0?!0:me,Ie=s.rowKey,Te=Ie===void 0?function(E){return E}:Ie,G=l()(s,x),De=(0,D.useState)(re),ve=y()(De,2),k=ve[0],Fe=ve[1],$e=(0,D.useState)(ne),fe=y()($e,2),_=fe[0],be=fe[1],Oe=(0,D.useState)(0),he=y()(Oe,2),Ce=he[0],Re=he[1],Me=(0,D.useState)(!1),ge=y()(Me,2),Be=ge[0],ye=ge[1],je=(0,D.useState)([]),xe=y()(je,2),de=xe[0],Le=xe[1],ee=(0,D.useCallback)(function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},K=E.current,X=K===void 0?_:K,Y=E.pageSize,Q=Y===void 0?k:Y,q=E.data,Ue=q===void 0?O:q,Se=E.otherData,Xe=Se===void 0?{}:Se,Pe=Object.assign({},le(X,Q),Ue,Xe);if(J(Pe)){ye(!0);var Ze=X,He=Q;return b(Pe).then(function(Ae){var ze=V(Ae);if(ie(ze)&&Ze===X&&He===Q){var ue,Je=((ue=ze[ae.data])!==null&&ue!==void 0?ue:[]).filter(H);Re(Ae[ae.total]),Le(Je),be(X),Fe(Q)}}).finally(function(){ye(!1)})}},[O,b,V,J,le,ie,ae,H,G.rowKey]),Ne=(0,D.useCallback)(function(E){return ee({current:ne,pageSize:k,otherData:E})},[ne,k]),Ke=(0,D.useCallback)(function(E){return ee({current:ne,pageSize:re,data:{},otherData:E})},[ne,re]),Ve=(0,D.useCallback)(function(E){return ee({otherData:E})},[_,k,O]),te=(0,D.useRef)();(0,D.useImperativeHandle)(F,function(){var E,K;return{getTableData:ee,init:Ne,reload:Ve,reset:Ke,nativeElement:(E=te.current)===null||E===void 0?void 0:E.nativeElement,scrollTo:(K=te.current)===null||K===void 0?void 0:K.scrollTo,getInfo:function(){return[de,_,k]}}},[_,k,O,te,de,_,k]);var We=(0,D.useMemo)(function(){if(M||W){var E=M!=null?M:W;return{type:M?"checkbox":"radio",onChange:function(){for(var X,Y=arguments.length,Q=new Array(Y),q=0;q<Y;q++)Q[q]=arguments[q];E[1](Q[0]),Q==null||(X=Q.rowSelection)===null||X===void 0||X.onChange.apply(X,Q)}}}},[M,W,G.rowSelection,G.rowKey]);return(0,D.useEffect)(function(){Ee&&ee()},[]),(0,f.jsx)(h.Z,C()(C()({ref:te,loading:Be,dataSource:de},G),{},{rowSelection:We,rowKey:Te,columns:(z=G.columns)===null||z===void 0?void 0:z.map(function(E){var K;return E.key=(K=E.key)!==null&&K!==void 0?K:E.dataIndex,E}),pagination:C()(C()({showSizeChanger:!0,current:_,pageSize:k,total:Ce,pageSizeOptions:[5,10,20,50]},G==null?void 0:G.pagination),{},{onChange:function(K,X){var Y;ee({current:K,pageSize:X}),G==null||(Y=G.pagination)===null||Y===void 0||Y.onChange(K,X)}})}))}),A=P,R=function(){console.log("This is a demo log")}},95305:function(w,$,e){e.r($),e.d($,{texts:function(){return B}});var f=e(37542);const B=[{value:"\u8FD9\u662F\u4E00\u4E2ADemo\u7EC4\u4EF6\uFF0C\u7528\u6765\u505A\u6587\u6863\u793A\u4F8B",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"\u65B9\u6CD5\u540D",paraId:2,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:8},{value:"\u8BF4\u660E",paraId:4,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:8},{value:"\u65B9\u6CD5\u540D",paraId:5,tocIndex:9},{value:"\u662F\u5426\u5FC5\u586B",paraId:5,tocIndex:9},{value:"\u8BF4\u660E",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u8BF4\u660E",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u5C5E\u6027\u540D",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:7,tocIndex:12},{value:"\u8BF4\u660E",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"\u65B9\u6CD5\u540D",paraId:8,tocIndex:13},{value:"\u662F\u5426\u5FC5\u586B",paraId:8,tocIndex:13},{value:"\u8BF4\u660E",paraId:8,tocIndex:13},{value:"\u5C5E\u6027",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14}]},87455:function(w,$,e){e.r($),e.d($,{texts:function(){return B}});var f=e(24431);const B=[{value:"\u8FD9\u662F\u4E00\u4E2A\u6709\u5404\u79CD\u5E38\u89C1\u4E1A\u52A1\u573A\u666F\u7684Antd Input\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:1,tocIndex:2},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:2,tocIndex:3},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:3},{value:"debounceDuration",paraId:3},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:3},{value:"500",paraId:3},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:3},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:4,tocIndex:4},{value:"\u4F7F\u7528",paraId:5},{value:"throttleDuration",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:5},{value:"0",paraId:5},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:5},{value:"\u4F7F\u7528",paraId:5},{value:"throttleTrailing",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u641C\u7D22\uFF0C\u9ED8\u8BA4",paraId:5},{value:"false",paraId:5},{value:"\u5728\u8868\u5355\u4E2D\u65B9\u6CD5\u4F7F\u7528\u540CAntd Input\uFF0C\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:6,tocIndex:11},{value:"\u4F60\u4E0D\u80FD\u5728\u8868\u5355\u4E2D\u4F7F\u7528setState\u53BB\u4FEE\u6539\u8868\u5355\u57DF\u7684\u503C\uFF0C\u8BE6\u89C1\uFF1A",paraId:7},{value:"FormItem",paraId:7},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:8,tocIndex:13},{value:"Antd Input",paraId:8,tocIndex:13},{value:"\u5C5E\u6027\u540D",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14},{value:"\u662F\u5426\u5FC5\u586B",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:14},{value:"state",paraId:9,tocIndex:14},{value:"string",paraId:9,tocIndex:14},{value:"false",paraId:9,tocIndex:14},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:9,tocIndex:14},{value:"\u7EC4\u4EF6\u5185\u90E8\u4F9D\u636E",paraId:10,tocIndex:15},{value:"lodash-es",paraId:10,tocIndex:15},{value:"\u4F9D\u8D56\uFF0C\u8BF7\u5148\u4F7F\u7528",paraId:10,tocIndex:15},{value:"npm install lodash-es",paraId:10,tocIndex:15},{value:"\u4E0B\u8F7D\u6240\u9700\u4F9D\u8D56 \uFF0C\u914D\u7F6E\u9879\u7EE7\u627F",paraId:10,tocIndex:15},{value:"Antd Input.Search",paraId:10,tocIndex:15},{value:"\u5C5E\u6027\u540D",paraId:11,tocIndex:16},{value:"\u7C7B\u578B",paraId:11,tocIndex:16},{value:"\u662F\u5426\u5FC5\u586B",paraId:11,tocIndex:16},{value:"\u8BF4\u660E",paraId:11,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:16},{value:"state",paraId:11,tocIndex:16},{value:"string",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:11,tocIndex:16},{value:"autoSearch",paraId:11,tocIndex:16},{value:"function",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8F93\u5165\u65F6\u662F\u5426\u81EA\u52A8\u4F7F\u7528\u9632\u6296\u641C\u7D22",paraId:11,tocIndex:16},{value:"debounceDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u5F00\u542FautoSearch\u540E\uFF0C\u9632\u6296\u65F6\u95F4",paraId:11,tocIndex:16},{value:"500",paraId:11,tocIndex:16},{value:"throttleDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u89E6\u53D1\u641C\u7D22\u4E8B\u4EF6\u65F6\u8282\u6D41\u65F6\u95F4",paraId:11,tocIndex:16},{value:"0",paraId:11,tocIndex:16},{value:"throttleTrailing",paraId:11,tocIndex:16},{value:"boolean",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8282\u6D41\u641C\u7D22\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u89E6\u53D1\u641C\u7D22",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:12,tocIndex:17},{value:"Antd InputNumber",paraId:12,tocIndex:17},{value:"\u5C5E\u6027\u540D",paraId:13,tocIndex:18},{value:"\u7C7B\u578B",paraId:13,tocIndex:18},{value:"\u662F\u5426\u5FC5\u586B",paraId:13,tocIndex:18},{value:"\u8BF4\u660E",paraId:13,tocIndex:18},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:18},{value:"state",paraId:13,tocIndex:18},{value:"string",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:13,tocIndex:18},{value:"mode",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:" ",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:"\u4EF7\u683C\u6A21\u5F0F\u3001",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"\u767E\u5206\u6BD4\u6A21\u5F0F\uFF0C\u51FA\u73B0\u56FA\u5B9A\u7684\u683C\u5F0F",paraId:13,tocIndex:18},{value:"strict",paraId:13,tocIndex:18},{value:"boolean",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E25\u683C\u9650\u5236\uFF0C\u9650\u5236\u4E3A\u6B63\u6574\u6570\u3001\u6B65\u957F\u4E3A1\u3001\u767E\u5206\u6BD4\u6A21\u5F0F\u4E0B\u9650\u5236\u6700\u5927\u503C100",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E0EAntd Input.XXX\u76F8\u540C\uFF0C",paraId:14,tocIndex:19},{value:"Antd Input",paraId:14,tocIndex:19}]},12808:function(w,$,e){e.r($),e.d($,{texts:function(){return B}});var f=e(39398);const B=[{value:"FAntdTable",paraId:0,tocIndex:0},{value:"\u662F\u5BF9Antd Table\u7684\u5C01\u88C5\uFF0C\u53EA\u9700\u8981\u6709api\u548Ccolumns\u5C5E\u6027\u5C31\u80FD\u5FEB\u901F\u6E32\u67D3\u51FA\u4E00\u4E2A\u5206\u9875\u8868\u683C\uFF0C\u5177\u4F53\u6539\u52A8\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"\u5185\u7F6Epagination\u914D\u7F6E\u9879\uFF0C\u521D\u59CB\u5305\u542B5, 10, 20, 50\u5206\u9875\u6570",paraId:1,tocIndex:0},{value:"columns\u4E0D\u5B58\u5728key\u65F6\uFF0C\u5982\u679CdataIndex\u6709\u503C\uFF0C\u5219\u81EA\u52A8\u5C06dataIndex\u5F53\u4F5Ckey",paraId:1,tocIndex:0},{value:"\u81EA\u52A8\u4F7F\u7528",paraId:1,tocIndex:0},{value:"code",paraId:1,tocIndex:0},{value:"\u5224\u65AD\u63A5\u53E3\u72B6\u6001\uFF0C\u6210\u529F\u9ED8\u8BA4\u503C\u4E3A\u5B57\u7B26\u4E32",paraId:1,tocIndex:0},{value:"0",paraId:1,tocIndex:0},{value:"\uFF0C\u53EF\u4F7F\u7528",paraId:1,tocIndex:0},{value:"successValid",paraId:1,tocIndex:0},{value:"\u81EA\u5B9A\u6210\u529F\u6761\u4EF6",paraId:1,tocIndex:0},{value:"\u81EA\u52A8\u4F7F\u7528",paraId:1,tocIndex:0},{value:"count",paraId:1,tocIndex:0},{value:"\u5F53\u603B\u6570\u636E\u6761\u6570\uFF0C",paraId:1,tocIndex:0},{value:"data",paraId:1,tocIndex:0},{value:"\u5F53\u5206\u9875\u6570\u636E\u5217\u8868\uFF0C\u53EF\u4F7F\u7528",paraId:1,tocIndex:0},{value:"mapperOptions",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u5C5E\u6027\u540D",paraId:1,tocIndex:0},{value:"\u9ED8\u8BA4",paraId:1,tocIndex:0},{value:"api",paraId:1,tocIndex:0},{value:"\u8FD4\u56DE\u7684",paraId:1,tocIndex:0},{value:"promise",paraId:1,tocIndex:0},{value:"\u503C\u4E3A\u540E\u7AEF\u8FD4\u56DE\u6570\u636E\u800C\u4E0D\u662F",paraId:1,tocIndex:0},{value:"Response",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u5982\u679C",paraId:1,tocIndex:0},{value:"api",paraId:1,tocIndex:0},{value:"\u8FD4\u56DE",paraId:1,tocIndex:0},{value:"Response",paraId:1,tocIndex:0},{value:"\u5BF9\u8C61\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528",paraId:1,tocIndex:0},{value:"getApiData",paraId:1,tocIndex:0},{value:"\u6307\u5B9A\u4E3A\u63A5\u53E3\u6570\u636E",paraId:1,tocIndex:0},{value:"\u6CE8\u610F\u4EE5\u4E0B\u89C4\u5B9A\uFF1A",paraId:2},{value:"\u5206\u9875\u53C2\u6570\u4E3Acurrent\u3001pageSize",paraId:3},{value:"api",paraId:3},{value:"\u8FD4\u56DE\u7684\u662F\u63A5\u53E3\u6570\u636E\uFF0C\u800C\u4E0D\u662F",paraId:3},{value:"response",paraId:3},{value:"\u6210\u529F\u72B6\u6001\u4E3A",paraId:3},{value:"code==='0'",paraId:3},{value:"\u603B\u6570\u636E\u6761\u6570\u5B57\u6BB5\u4E3A",paraId:3},{value:"total",paraId:3},{value:"\u6570\u636E\u5B57\u6BB5\u4E3A",paraId:3},{value:"data",paraId:3},{value:"\u5047\u8BBE\u63A5\u53E3\u8FD4\u56DEresponse\u5BF9\u8C61\uFF0C\u5206\u9875\u53C2\u6570\u4E3ApageSearch: { limit, page }\uFF0C\u8FD4\u56DE\u4F53\u91CC\u9762\u662Fsize\u548Crecords\uFF0C\u6210\u529F\u6761\u4EF6\u4E3Acode==='OK'",paraId:4,tocIndex:2},{value:"\u4F7F\u7528",paraId:5,tocIndex:6},{value:"filter",paraId:5,tocIndex:6},{value:"\u8FC7\u6EE4\u6389\u7B2C\u4E94\u6761\u6570\u636E",paraId:5,tocIndex:6},{value:"\u4F7F\u7528",paraId:6,tocIndex:7},{value:"requestValid",paraId:6,tocIndex:7},{value:"\u62E6\u622A\u7B2C\u4E8C\u9875\u7684\u8BF7\u6C42",paraId:6,tocIndex:7},{value:"\u53EF\u53C2\u8003",paraId:7,tocIndex:10},{value:"Antd Table",paraId:7,tocIndex:10},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:8,tocIndex:11},{value:"Antd Table",paraId:8,tocIndex:11},{value:"\u5C5E\u6027\u540D",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:9,tocIndex:12},{value:"\u8BF4\u660E",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"api",paraId:9,tocIndex:12},{value:"apiData => Promise",paraId:9,tocIndex:12},{value:"\u662F",paraId:9,tocIndex:12},{value:"\u83B7\u53D6\u8868\u683C\u6570\u636E\u7684\u63A5\u53E3\u51FD\u6570",paraId:9,tocIndex:12},{value:"apiData",paraId:9,tocIndex:12},{value:"object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"api\u51FD\u6570\u8BF7\u6C42\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A",paraId:9,tocIndex:12},{value:"apiData",paraId:9,tocIndex:12},{value:" + ",paraId:9,tocIndex:12},{value:"requestPageConfig",paraId:9,tocIndex:12},{value:"checkboxState",paraId:9,tocIndex:12},{value:"array",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u591A\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:9,tocIndex:12},{value:"radioState",paraId:9,tocIndex:12},{value:"array",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u5355\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:9,tocIndex:12},{value:"filter",paraId:9,tocIndex:12},{value:"itemData => boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8FC7\u6EE4\u8868\u683C\u6570\u636E\uFF0C\u540C",paraId:9,tocIndex:12},{value:"Array.filter",paraId:9,tocIndex:12},{value:"data => true",paraId:9,tocIndex:12},{value:"getApiData",paraId:9,tocIndex:12},{value:"response => object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8FD4\u56DE\u540E\u7AEF\u63A5\u53E3\u54CD\u5E94\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u6D4F\u89C8\u5668response\uFF08\u5982\u679C\u63A5\u53E3\u8FD4\u56DE\u662Fresponse\uFF0C\u5EFA\u8BAE\u53BB\u8C03\u6574\u54CD\u5E94\u62E6\u622A\u5668\uFF0C\u65E0\u6CD5\u8C03\u6574\u62E6\u622A\u5668\u53EF\u4EE5\u6539\u4E3A",paraId:9,tocIndex:12},{value:"response => response.data",paraId:9,tocIndex:12},{value:"\uFF09",paraId:9,tocIndex:12},{value:"response => response",paraId:9,tocIndex:12},{value:"requestValid",paraId:9,tocIndex:12},{value:"requestArgs => boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u662F\u5426\u8FDB\u884C\u8BF7\u6C42\uFF0C\u53EF\u7528\u4E8E\u5728\u4E0D\u6EE1\u8DB3\u8BF7\u6C42\u6761\u4EF6\u65F6\u62E6\u622A\u8BF7\u6C42\uFF0C",paraId:9,tocIndex:12},{value:"requestArgs",paraId:9,tocIndex:12},{value:"\u63A5\u53E3\u8BF7\u6C42\u53C2\u6570",paraId:9,tocIndex:12},{value:"requestArgs => true",paraId:9,tocIndex:12},{value:"requestPageConfig",paraId:9,tocIndex:12},{value:"(current, pageSize) => object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8FD4\u56DE\u4F20\u9012\u63A5\u53E3\u7684\u5206\u9875\u914D\u7F6E\uFF0C\u9ED8\u8BA4",paraId:9,tocIndex:12},{value:"pageSearch: { limit, page }",paraId:9,tocIndex:12},{value:"\u53C2\u6570\uFF0Ccurrent\u5F53\u524D\u9875\uFF0CpageSize\u5F53\u524D\u6761\u6570",paraId:9,tocIndex:12},{value:"(current, pageSize) => ({ current, pageSize })",paraId:9,tocIndex:12},{value:"successValid",paraId:9,tocIndex:12},{value:"response => boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6210\u529F\uFF0C\u9ED8\u8BA4\u5224\u65AD\u54CD\u5E94\u6570\u636E\u4E2D\u7684",paraId:9,tocIndex:12},{value:"code",paraId:9,tocIndex:12},{value:"\u4E3A\u5B57\u7B26\u4E32",paraId:9,tocIndex:12},{value:"0",paraId:9,tocIndex:12},{value:"data => data.code === '0'",paraId:9,tocIndex:12},{value:"mapperOptions",paraId:9,tocIndex:12},{value:"object",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u8868\u683C\u6570\u636E\u6620\u5C04\u5B57\u6BB5\u540D\u79F0",paraId:9,tocIndex:12},{value:"{ total: 'count', data: 'data' }",paraId:9,tocIndex:12},{value:"initPageSize",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u6761\u6570",paraId:9,tocIndex:12},{value:"10",paraId:9,tocIndex:12},{value:"initCurrent",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u9875\u6570",paraId:9,tocIndex:12},{value:"1",paraId:9,tocIndex:12},{value:"autoInit",paraId:9,tocIndex:12},{value:"boolean",paraId:9,tocIndex:12},{value:"\u5426",paraId:9,tocIndex:12},{value:"\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u8868\u683C\u6570\u636E",paraId:9,tocIndex:12},{value:"true",paraId:9,tocIndex:12},{value:"\u65B9\u6CD5\u540D",paraId:10,tocIndex:13},{value:"\u8BF4\u660E",paraId:10,tocIndex:13},{value:"\u7C7B\u578B",paraId:10,tocIndex:13},{value:"getTableData",paraId:10,tocIndex:13},{value:"\u7EC4\u4EF6\u66B4\u9732\u7684\u67E5\u8BE2\u65B9\u6CD5\uFF0C\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F20\u5165data\u53C2\u6570\u4F1A\u8986\u76D6apiData\uFF0C\u9700\u8981\u643A\u5E26\u5176\u4ED6\u53C2\u6570\u8BF7\u4F7F\u7528otherData",paraId:10,tocIndex:13},{value:"({ current\u3001pageSize\u3001data\u3001otherData }) => Promise",paraId:10,tocIndex:13},{value:"init",paraId:10,tocIndex:13},{value:"\u6839\u636E\u5F53\u524D\u6761\u6570\u3001\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u521D\u59CB\u9875\u6570\u7684\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u989D\u5916\u67E5\u8BE2\u6570\u636E\uFF0C\u4E00\u822C\u7528\u4E8E\u67E5\u8BE2",paraId:10,tocIndex:13},{value:"otherData => Promise",paraId:10,tocIndex:13},{value:"reset",paraId:10,tocIndex:13},{value:"\u4F7F\u7528\u521D\u59CB\u6761\u6570\u3001\u521D\u59CB\u9875\u6570\u3001\u7A7A\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u91CD\u7F6E",paraId:10,tocIndex:13},{value:"otherData => Promise",paraId:10,tocIndex:13},{value:"reload",paraId:10,tocIndex:13},{value:"\u5237\u65B0\u5F53\u524D\u9875\u9762\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6",paraId:10,tocIndex:13},{value:"otherData => Promise",paraId:10,tocIndex:13},{value:"getInfo",paraId:10,tocIndex:13},{value:"\u83B7\u53D6\u5F53\u524D\u8868\u683C\u8BF7\u6C42\u6570\u636E",paraId:10,tocIndex:13},{value:"() => ({ current, pageSize, data })",paraId:10,tocIndex:13}]},51446:function(w,$,e){e.r($),e.d($,{texts:function(){return B}});var f=e(68537);const B=[{value:`\u8FD9\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u5C01\u88C5\u7EC4\u4EF6\uFF0C\u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u4E1A\u52A1\u529F\u80FD\uFF0C\u4E3B\u8981\u4E3A\u4E86\u907F\u514D\u5728\u9879\u76EE\u4E2D\u7EC4\u4EF6\u7684\u7B80\u5355\u5C5E\u6027\u5197\u4F59\u3002
\u4EE5\u4E0B\u662F\u5C01\u88C5\u539F\u5219\uFF1A`,paraId:0,tocIndex:0},{value:"\u4E0D\u7834\u574F\u539F\u6709\u7EC4\u4EF6\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\u3001Ref\u3001\u5B50\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u4FDD\u6301\u539F\u6709\u7EC4\u4EF6\u7684\u53EF\u62D3\u5C55\u6027",paraId:1,tocIndex:0},{value:`npm install izid
# or
pnpm add izid
# or
yarn add izid
`,paraId:2,tocIndex:1},{value:"Npm",paraId:3,tocIndex:2}]}}]);
