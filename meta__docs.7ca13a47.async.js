"use strict";(self.webpackChunkizid=self.webpackChunkizid||[]).push([[904],{15803:function(ee,z,e){e.r(z),e.d(z,{demos:function(){return P}});var c=e(15009),X=e.n(c),y=e(99289),E=e.n(y),o=e(67294),s=e(41244),P={"docs-demo-demo-0":{component:o.memo(o.lazy(E()(X()().mark(function l(){var S,h;return X()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return S=u.sent,h=S.Demo,u.abrupt("return",{default:function(){return o.createElement(h,null)}});case 5:case"end":return u.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-demo-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Demo } from 'izid'

export default () => {
    return <Demo />
}`},izid:{type:"NPM",value:"0.1.24"}},entry:"index.jsx"},context:{izid:s},renderOpts:{compile:function(){var l=E()(X()().mark(function h(){var I,u=arguments;return X()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(I=a.sent).default.apply(I,u));case 3:case"end":return a.stop()}},h)}));function S(){return l.apply(this,arguments)}return S}()}}}},48214:function(ee,z,e){var c;e.r(z),e.d(z,{demos:function(){return S}});var X=e(15009),y=e.n(X),E=e(99289),o=e.n(E),s=e(67294),P=e(41244),l=e(15316),S={"docs-f-antd-input-demo-0":{component:s.memo(s.lazy(o()(y()().mark(function h(){var I,u,r,a,d,n,p,t;return y()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=i.sent,u=I.FAntdInput,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=i.sent,a=r.useState,d=r.useEffect,n=r.useRef,i.next=12,Promise.resolve().then(e.bind(e,15316));case 12:return p=i.sent,t=p.Button,i.abrupt("return",{default:function(){var v=a(),f=n();d(function(){var C;setTimeout((C=f.current)===null||C===void 0?void 0:C.focus,1e3)},[]);var b=function(){v[1]("Hello World")};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",v[0]),s.createElement(u,{state:v,ref:f}),s.createElement("p",null,s.createElement(t,{type:"primary",onClick:b},"Hello World")))}});case 15:case"end":return i.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.26.4"}},entry:"index.jsx"},context:{izid:P,react:c||(c=e.t(s,2)),antd:l},renderOpts:{compile:function(){var h=o()(y()().mark(function u(){var r,a=arguments;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-1":{component:s.memo(s.lazy(o()(y()().mark(function h(){var I,u,r,a;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a(),m=function(x){console.log("\u89E6\u53D1\u641C\u7D22\uFF1A",x)};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Search,{state:t,onSearch:m}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var h=o()(y()().mark(function u(){var r,a=arguments;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-2":{component:s.memo(s.lazy(o()(y()().mark(function h(){var I,u,r,a;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a(),m=function(x){console.log("\u89E6\u53D1\u81EA\u52A8\u641C\u7D22\uFF1A",x)};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Search,{state:t,autoSearch:!0,onSearch:m}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var h=o()(y()().mark(function u(){var r,a=arguments;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-3":{component:s.memo(s.lazy(o()(y()().mark(function h(){var I,u,r,a;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a(),m=function(x){console.log("\u89E6\u53D1\u8282\u6D41\u641C\u7D22\uFF1A",x)};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Search,{state:t,throttleDuration:2e3,onSearch:m}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var h=o()(y()().mark(function u(){var r,a=arguments;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-4":{component:s.memo(s.lazy(o()(y()().mark(function h(){var I,u,r,a;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Number,{state:t,strict:!0}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} strict />
    </>;
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var h=o()(y()().mark(function u(){var r,a=arguments;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-5":{component:s.memo(s.lazy(o()(y()().mark(function h(){var I,u,r,a;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Number,{state:t,mode:"price"}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'price'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var h=o()(y()().mark(function u(){var r,a=arguments;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-6":{component:s.memo(s.lazy(o()(y()().mark(function h(){var I,u,r,a;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Number,{state:t,mode:"percent"}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'percent'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var h=o()(y()().mark(function u(){var r,a=arguments;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-7":{component:s.memo(s.lazy(o()(y()().mark(function h(){var I,u,r,a;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.Password,{state:t}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Password state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var h=o()(y()().mark(function u(){var r,a=arguments;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-8":{component:s.memo(s.lazy(o()(y()().mark(function h(){var I,u,r,a;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a("");return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.OTP,{state:t}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.OTP state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var h=o()(y()().mark(function u(){var r,a=arguments;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-9":{component:s.memo(s.lazy(o()(y()().mark(function h(){var I,u,r,a;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=n.sent,u=I.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,a=r.useState,n.abrupt("return",{default:function(){var t=a("");return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(u.TextArea,{state:t}))}});case 9:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-9",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.TextArea state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:P,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var h=o()(y()().mark(function u(){var r,a=arguments;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-antd-input-demo-10":{component:s.memo(s.lazy(o()(y()().mark(function h(){var I,u,r,a,d,n,p;return y()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return I=m.sent,u=I.FAntdInput,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=m.sent,a=r.useState,m.next=10,Promise.resolve().then(e.bind(e,15316));case 10:return d=m.sent,n=d.Form,p=d.Button,m.abrupt("return",{default:function(){var x=function(f){console.log("\u8868\u5355\u63D0\u4EA4\uFF1A",f)};return s.createElement(n,{onFinish:x},s.createElement(n.Item,{label:"\u8F93\u5165\u6846",name:"value"},s.createElement(u,null)),s.createElement(n.Item,null,s.createElement(p,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4")))}});case 14:case"end":return m.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-10",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.26.4"}},entry:"index.jsx"},context:{izid:P,react:c||(c=e.t(s,2)),antd:l},renderOpts:{compile:function(){var h=o()(y()().mark(function u(){var r,a=arguments;return y()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},u)}));function I(){return h.apply(this,arguments)}return I}()}}}},26220:function(ee,z,e){e.r(z),e.d(z,{demos:function(){return l}});var c=e(15009),X=e.n(c),y=e(99289),E=e.n(y),o=e(67294),s=e(41244),P=e(15316),l={"docs-f-antd-order-table-demo-0":{component:o.memo(o.lazy(E()(X()().mark(function S(){var h,I,u,r,a;return X()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return h=n.sent,I=h.FAntdOrderTable,n.next=6,Promise.resolve().then(e.bind(e,15316));case 6:return u=n.sent,r=u.Space,a=function(t){var m=t.current,i=t.pageSize;return new Promise(function(x){setTimeout(function(){x({code:"0",count:21,data:Array.from({length:21},function(v,f){return{orderInfo:{hotelName:"\u676D\u5DDE\u897F\u6E56XXXX\u9152\u5E97".concat(f+1,"\u53F7"),houseType:"\u9AD8\u7EA7\u5927\u5E8A\u623F",breakfastType:"\u53CC\u65E9",startDate:"2025/05/15",endDate:"2025/05/16",dayCount:1,roomCount:1},contactInfo:{checkName:"\u674E\u56DB",contactName:"\u738B\u4E94"},payInfo:{paymentAmount:200,projectedIncome:200},systemOrderId:"1234567890",createDate:"2025-05-14 15:45:05",orderStatus:"\u5F85\u53D1\u8D27",more:"\u8FD9\u662F\u7B2C".concat(f+1,"\u6761\u6570\u636E")}}).slice((m-1)*i,m*i)})},300)})},n.abrupt("return",{default:function(){var t=[{title:"\u8BA2\u5355\u4FE1\u606F",dataIndex:"orderInfo",render:function(v){return o.createElement(o.Fragment,null,o.createElement("div",null,v.hotelName),o.createElement("div",null,v.houseType,"/",v.breakfastType),o.createElement("div",null,"".concat(v.startDate,"~").concat(v.endDate," ").concat(v.dayCount,"\u665A ").concat(v.roomCount,"\u95F4")))}},{title:"\u8054\u7CFB\u4FE1\u606F",dataIndex:"contactInfo",render:function(v){return o.createElement(o.Fragment,null,o.createElement("div",null,"\u5165\u4F4F\u4EBA\uFF1A",v.checkName),o.createElement("div",null,"\u8054\u7CFB\u4EBA\uFF1A",v.contactName))}},{title:"\u652F\u4ED8\u4FE1\u606F",dataIndex:"payInfo",render:function(v){return o.createElement(o.Fragment,null,o.createElement("div",null,"\u652F\u4ED8\u91D1\u989D\uFF1A\xA5",v.paymentAmount),o.createElement("div",null,"\u9884\u8BA1\u6536\u5165\uFF1A\xA5",v.projectedIncome))}},{title:"\u8BA2\u5355\u72B6\u6001",dataIndex:"orderStatus"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement(r,{direction:"vertical"},o.createElement("a",null,"\u62D2\u5355"),o.createElement("a",null,"\u786E\u8BA4\u53D1\u8D27"),o.createElement("a",null,"\u590D\u5236\u8BA2\u5355"))}}],m=[{label:"\u7CFB\u7EDF\u8BA2\u5355\u53F7",render:function(v){return v.systemOrderId}},{label:"\u4E0B\u5355\u65F6\u95F4",render:function(v){return v.createDate}}],i=function(v){return o.createElement(r,null,o.createElement("a",null,"\u5F55\u5165"),o.createElement("a",null,"\u91C7\u8D2D"),o.createElement("a",null,"\u5907\u6CE8"),o.createElement("a",null,"\u8BE6\u60C5"),o.createElement("a",null,"\u65E5\u5FD7"))};return o.createElement(I,{api:a,columns:t,headerRender:m,headerOptions:i})}});case 10:case"end":return n.stop()}},S)})))),asset:{type:"BLOCK",id:"docs-f-antd-order-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdOrderTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.24"},antd:{type:"NPM",value:"5.26.4"}},entry:"index.jsx"},context:{izid:s,antd:P},renderOpts:{compile:function(){var S=E()(X()().mark(function I(){var u,r=arguments;return X()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(250).then(e.bind(e,90250));case 2:return d.abrupt("return",(u=d.sent).default.apply(u,r));case 3:case"end":return d.stop()}},I)}));function h(){return S.apply(this,arguments)}return h}()}}}},62511:function(ee,z,e){var c;e.r(z),e.d(z,{demos:function(){return I}});var X=e(5574),y=e.n(X),E=e(15009),o=e.n(E),s=e(99289),P=e.n(s),l=e(67294),S=e(41244),h=e(15316),I={"docs-f-antd-table-demo-0":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=p.sent,a=r.FAntdTable,d=function(m){var i=m.current,x=m.pageSize;return new Promise(function(v){setTimeout(function(){v({code:"0",total:21,data:Array.from({length:21},function(f,b){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(b+1,"\u6761\u6570\u636E")}}).slice((i-1)*x,i*x)})},300)})},p.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:d,columns:m})}});case 6:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'

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
}`},izid:{type:"NPM",value:"0.1.24"}},entry:"index.jsx"},context:{izid:S},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-1":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d;return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=p.sent,a=r.FAntdTable,d=function(m){var i=m.current,x=m.pageSize;return new Promise(function(v){setTimeout(function(){v({status:200,data:{code:"OK",size:21,records:Array.from({length:21},function(f,b){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(b+1,"\u6761\u6570\u636E")}}).slice((i-1)*x,i*x)}})},300)})},p.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:d,columns:m,getApiData:function(x){return x.data},reqeustPageConfig:function(x,v){return{pageSearch:{page:x,limit:v}}},mapperOptions:{total:"size",data:"records"},successValid:function(x){return x.code==="OK"}})}});case 6:case"end":return p.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'

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
}`},izid:{type:"NPM",value:"0.1.24"}},entry:"index.jsx"},context:{izid:S},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-2":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p,t,m,i,x;return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=f.sent,a=r.FAntdTable,f.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=f.sent,n=d.useRef,p=d.useState,f.next=11,Promise.resolve().then(e.bind(e,15316));case 11:return t=f.sent,m=t.Button,i=t.Space,x=function(C){var T=C.current,O=C.pageSize;return new Promise(function(A){setTimeout(function(){A({code:"0",total:21,data:Array.from({length:21},function(N,w){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(w+1,"\u6761\u6570\u636E")}}).slice((T-1)*O,T*O)})},300)})},f.abrupt("return",{default:function(){var C=n(),T=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],O=function(N){var w;(w=C.current)===null||w===void 0||w[N]()};return l.createElement(l.Fragment,null,l.createElement(i,{style:{marginBottom:"10px"}},l.createElement(m,{onClick:function(){return O("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(m,{onClick:function(){return O("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(m,{onClick:function(){return O("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),l.createElement(a,{ref:C,api:x,columns:T,autoInit:!1}))}});case 16:case"end":return f.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.26.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(l,2)),antd:h},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-3":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p,t,m,i,x;return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=f.sent,a=r.FAntdTable,f.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=f.sent,n=d.useState,p=d.useRef,f.next=11,Promise.resolve().then(e.bind(e,15316));case 11:return t=f.sent,m=t.Radio,i=t.Button,x=function(C){var T=C.current,O=C.pageSize;return new Promise(function(A){setTimeout(function(){A({code:"0",total:21,data:Array.from({length:21},function(N,w){return{id:w,name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(w+1,"\u6761\u6570\u636E")}}).slice((T-1)*O,T*O)})},300)})},f.abrupt("return",{default:function(){var C=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],T=n([]),O=y()(T,2),A=O[0],N=O[1],w=n([]),H=y()(w,2),ne=H[0],ae=H[1],re=p(),ue=function(){var g;return ae((g=re.current)===null||g===void 0?void 0:g.getSelected())};return l.createElement(l.Fragment,null,JSON.stringify(A),l.createElement(i,{onClick:ue},"\u83B7\u53D6\u9009\u4E2D\u6570\u636E"),JSON.stringify(ne),l.createElement(a,{ref:re,checkboxState:[A,N],rowKey:"id",api:x,columns:C}))}});case 16:case"end":return f.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useState, useRef } from 'react'
import { Radio, Button } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                id: index,
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
    const [selectedData, setSelectedData] = useState([])
    const tableRef = useRef()
    const getTableSelected = () => setSelectedData(tableRef.current?.getSelected())

    return <>
        {JSON.stringify(selectedRows)}
            <Button onClick={getTableSelected}>\u83B7\u53D6\u9009\u4E2D\u6570\u636E</Button>
            {JSON.stringify(selectedData)}
            <FAntdTable
                ref={tableRef}
                checkboxState={[selectedRows, setSelectedRows]}
                rowKey={'id'}
                api={TableDataAPI}
                columns={columns}
            />
    </>
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.26.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(l,2)),antd:h},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-4":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p,t,m,i;return o()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=v.sent,a=r.FAntdTable,v.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=v.sent,n=d.useState,v.next=10,Promise.resolve().then(e.bind(e,15316));case 10:return p=v.sent,t=p.Radio,m=p.Button,i=function(b){var C=b.current,T=b.pageSize;return new Promise(function(O){setTimeout(function(){O({code:"0",total:21,data:Array.from({length:21},function(A,N){return{id:N,name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(N+1,"\u6761\u6570\u636E")}}).slice((C-1)*T,C*T)})},300)})},v.abrupt("return",{default:function(){var b=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],C=n({}),T=y()(C,2),O=T[0],A=T[1];return l.createElement(l.Fragment,null,l.createElement(m,{onClick:function(){return A(3)}},"\u9009\u4E2D\u7B2C\u56DB\u6761\u6570\u636E"),JSON.stringify(O),l.createElement(a,{radioState:[O,A],rowKey:"id",api:i,columns:b}))}});case 15:case"end":return v.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
import { useState } from 'react'
import { Radio, Button } from 'antd'

// \u6A21\u62DF\u63A5\u53E3
const TableDataAPI = ({ current, pageSize }) => new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: '0',
            total: 21,
            data: Array.from({ length: 21 }, (_, index) => ({
                id: index,
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
        <Button onClick={() => setSelectedRows(3)}>\u9009\u4E2D\u7B2C\u56DB\u6761\u6570\u636E</Button>
        {JSON.stringify(selectedRows)}
        <FAntdTable
            radioState={[selectedRows, setSelectedRows]}
            rowKey={'id'}
            api={TableDataAPI}
            columns={columns}
        />
    </>
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.26.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(l,2)),antd:h},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-5":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=m.sent,a=r.FAntdTable,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,n=d.useState,p=function(x){var v=x.current,f=x.pageSize;return new Promise(function(b){setTimeout(function(){b({code:"0",total:21,data:Array.from({length:21},function(C,T){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(T+1,"\u6761\u6570\u636E")}}).slice((v-1)*f,v*f)})},300)})},m.abrupt("return",{default:function(){var x=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:p,columns:x,filter:function(f){return f.more!=="\u8FD9\u662F\u7B2C5\u6761\u6570\u636E"}})}});case 10:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(l,2))},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-6":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=m.sent,a=r.FAntdTable,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=m.sent,n=d.useState,p=function(x){var v=x.current,f=x.pageSize;return new Promise(function(b){setTimeout(function(){b({code:"0",total:21,data:Array.from({length:21},function(C,T){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(T+1,"\u6761\u6570\u636E")}}).slice((v-1)*f,v*f)})},300)})},m.abrupt("return",{default:function(){var x=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(a,{api:p,columns:x,requestValid:function(f){return f.current!==2}})}});case 10:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(l,2))},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-7":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p,t,m,i,x,v;return o()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=b.sent,a=r.FAntdTable,d=r.FAntdInput,b.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=b.sent,p=n.useRef,t=n.useState,b.next=12,Promise.resolve().then(e.bind(e,15316));case 12:return m=b.sent,i=m.Button,x=m.Space,v=function(T){var O=T.current,A=T.pageSize;return new Promise(function(N){setTimeout(function(){N({code:"0",total:21,data:Array.from({length:21},function(w,H){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(H+1,"\u6761\u6570\u636E")}}).slice((O-1)*A,O*A)})},300)})},b.abrupt("return",{default:function(){var T=p(),O=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],A=t(),N=y()(A,2),w=N[0],H=N[1],ne=t(),ae=y()(ne,2),re=ae[0],ue=ae[1],le=function(M){var W;(W=T.current)===null||W===void 0||W[M]({name:w})},g=t(),B=y()(g,2),D=B[0],$=B[1];return l.createElement(l.Fragment,null,l.createElement(x,{style:{marginBottom:"10px"}},l.createElement(i,{onClick:function(){return le("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(i,{onClick:function(){return le("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(i,{onClick:function(){return le("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),l.createElement(d,{state:[re,ue],placeholder:"\u8F93\u5165\u8BF7\u6C42\u53C2\u6570"}),l.createElement(d,{state:[w,H],placeholder:"\u8F93\u5165\u624B\u52A8\u8BF7\u6C42\u989D\u5916\u53C2\u6570"}),l.createElement("p",null,JSON.stringify(D)),l.createElement(a,{ref:T,api:v,apiData:{value:re},columns:O,requestValid:function(M){return $(M),!0}}))}});case 17:case"end":return b.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable, FAntdInput } from 'izid'
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
    const [value, setValue] = useState()
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
        <FAntdInput state={[value, setValue]} placeholder={'\u8F93\u5165\u8BF7\u6C42\u53C2\u6570'} />
        <FAntdInput state={[name, setName]} placeholder={'\u8F93\u5165\u624B\u52A8\u8BF7\u6C42\u989D\u5916\u53C2\u6570'} />
        <p>{JSON.stringify(sendParams)}</p>
        <FAntdTable
            ref={tableRef}
            api={TableDataAPI}
            apiData={{
                value
            }}
            columns={columns}
            requestValid={params => {
                setSendParams(params)
                return true
            }}
        />
    </>
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.26.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(l,2)),antd:h},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-8":{component:l.memo(l.lazy(P()(o()().mark(function u(){var r,a,d,n,p,t,m,i;return o()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return r=v.sent,a=r.FAntdTable,v.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return d=v.sent,n=d.useRef,p=d.useState,v.next=11,Promise.resolve().then(e.bind(e,15316));case 11:return t=v.sent,m=t.Button,i=function(b){var C=b.current,T=b.pageSize;return new Promise(function(O){setTimeout(function(){O({code:"0",total:21,data:Array.from({length:21},function(A,N){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(N+1,"\u6761\u6570\u636E")}}).slice((C-1)*T,C*T)})},300)})},v.abrupt("return",{default:function(){var b=n(),C=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],T=p(),O=y()(T,2),A=O[0],N=O[1],w=function(){var ne;N((ne=b.current)===null||ne===void 0?void 0:ne.getInfo())};return l.createElement(l.Fragment,null,l.createElement(m,{onClick:w},"\u83B7\u53D6\u8868\u683C\u4FE1\u606F"),l.createElement("p",null,JSON.stringify(A)),l.createElement(a,{ref:b,api:i,columns:C}))}});case 15:case"end":return v.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.26.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(l,2)),antd:h},renderOpts:{compile:function(){var u=P()(o()().mark(function a(){var d,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,n));case 3:case"end":return t.stop()}},a)}));function r(){return u.apply(this,arguments)}return r}()}}}},46477:function(ee,z,e){var c;e.r(z),e.d(z,{demos:function(){return r}});var X=e(5574),y=e.n(X),E=e(15009),o=e.n(E),s=e(99289),P=e.n(s),l=e(67294),S=e(41244),h=e(15316),I=e(21322),u=e.n(I),r={"docs-pwd-score-demo-0":{component:l.memo(l.lazy(P()(o()().mark(function a(){var d,n;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return d=t.sent,n=d.PwdScore,t.abrupt("return",{default:function(){return l.createElement(l.Fragment,null,l.createElement(n,null),l.createElement(n,{value:0}),l.createElement(n,{value:1}),l.createElement(n,{value:2}),l.createElement(n,{value:3}),l.createElement(n,{value:4}))}});case 5:case"end":return t.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore />
        <PwdScore value={0} />
        <PwdScore value={1} />
        <PwdScore value={2} />
        <PwdScore value={3} />
        <PwdScore value={4} />
    </>
}`},izid:{type:"NPM",value:"0.1.24"}},entry:"index.jsx"},context:{izid:S},renderOpts:{compile:function(){var a=P()(o()().mark(function n(){var p,t=arguments;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(250).then(e.bind(e,90250));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,t));case 3:case"end":return i.stop()}},n)}));function d(){return a.apply(this,arguments)}return d}()}},"docs-pwd-score-demo-1":{component:l.memo(l.lazy(P()(o()().mark(function a(){var d,n,p,t,m,i,x;return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return d=f.sent,n=d.PwdScore,f.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return p=f.sent,t=p.useMemo,m=p.useState,f.next=11,Promise.resolve().then(e.bind(e,15316));case 11:return i=f.sent,x=i.Button,f.abrupt("return",{default:function(){var C=m(),T=y()(C,2),O=T[0],A=T[1],N=t(function(){return[{color:"#a0133d",label:"\u975E\u5E38\u5F31",value:11},{color:"#2f9715",label:"\u5F3A",value:13},{color:"#ffa500",label:"\u4E00\u822C",value:12}]},[]),w=function(){if(O===void 0)return A(11);if(O===13)return A(void 0);A(O+1)};return l.createElement(l.Fragment,null,l.createElement(n,{value:O,scoreList:N}),l.createElement(x,{onClick:w},"\u8C03\u6574\u5F3A\u5EA6"))}});case 14:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"},antd:{type:"NPM",value:"5.26.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(l,2)),antd:h},renderOpts:{compile:function(){var a=P()(o()().mark(function n(){var p,t=arguments;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(250).then(e.bind(e,90250));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,t));case 3:case"end":return i.stop()}},n)}));function d(){return a.apply(this,arguments)}return d}()}},"docs-pwd-score-demo-2":{component:l.memo(l.lazy(P()(o()().mark(function a(){var d,n;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return d=t.sent,n=d.PwdScore,t.abrupt("return",{default:function(){return l.createElement(l.Fragment,null,l.createElement(n,{value:0,reverse:!0}),l.createElement(n,{value:1,reverse:!0}),l.createElement(n,{value:2,reverse:!0}),l.createElement(n,{value:3,reverse:!0}),l.createElement(n,{value:4,reverse:!0}))}});case 5:case"end":return t.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore value={0} reverse />
        <PwdScore value={1} reverse />
        <PwdScore value={2} reverse />
        <PwdScore value={3} reverse />
        <PwdScore value={4} reverse />
    </>
}`},izid:{type:"NPM",value:"0.1.24"}},entry:"index.jsx"},context:{izid:S},renderOpts:{compile:function(){var a=P()(o()().mark(function n(){var p,t=arguments;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(250).then(e.bind(e,90250));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,t));case 3:case"end":return i.stop()}},n)}));function d(){return a.apply(this,arguments)}return d}()}},"docs-pwd-score-demo-3":{component:l.memo(l.lazy(P()(o()().mark(function a(){var d,n,p,t,m,i,x,v,f,b,C,T;return o()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Promise.resolve().then(e.bind(e,41244));case 2:return d=A.sent,n=d.PwdScore,p=d.FAntdInput,A.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return t=A.sent,m=t.useState,A.next=11,Promise.resolve().then(e.t.bind(e,21322,23));case 11:return i=A.sent,x=i.default,A.next=15,Promise.resolve().then(e.bind(e,15316));case 15:return v=A.sent,f=v.Form,b=v.Button,C=v.Input,T=v.Flex,A.abrupt("return",{default:function(){var w=m(),H=y()(w,2),ne=H[0],ae=H[1],re=m({}),ue=y()(re,2),le=ue[0],g=ue[1],B=m(""),D=y()(B,2),$=D[0],F=D[1],M=function(){ae($?x($).score:void 0)};return l.createElement(l.Fragment,null,l.createElement(f,{layout:"vertical",onFinish:g},l.createElement(f.Item,{name:"password",label:l.createElement(T,{align:"center"},l.createElement("span",null,"\u5BC6\u7801"),l.createElement(n,{value:ne})),rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},function(W){var J=W.getFieldValue;return{validator:function(Z,U){return!U||ne>=1?Promise.resolve():Promise.reject("\u5BC6\u7801\u5F3A\u5EA6\u592A\u5F31")}}}]},l.createElement(p.Password,{state:[$,F],onChange:M})),l.createElement(f.Item,null,l.createElement(b,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4"))),"\u63D0\u4EA4\u6570\u636E\uFF1A",JSON.stringify(le))}});case 21:case"end":return A.stop()}},a)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore, FAntdInput } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.24"},react:{type:"NPM",value:"19.1.0"},zxcvbn:{type:"NPM",value:"4.4.2"},antd:{type:"NPM",value:"5.26.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(l,2)),zxcvbn:I,antd:h},renderOpts:{compile:function(){var a=P()(o()().mark(function n(){var p,t=arguments;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(250).then(e.bind(e,90250));case 2:return i.abrupt("return",(p=i.sent).default.apply(p,t));case 3:case"end":return i.stop()}},n)}));function d(){return a.apply(this,arguments)}return d}()}}}},11171:function(ee,z,e){e.r(z),e.d(z,{demos:function(){return X}});var c=e(67294),X={}},41244:function(ee,z,e){e.r(z),e.d(z,{Demo:function(){return X},DemoLog:function(){return le},FAntdInput:function(){return x},FAntdOrderTable:function(){return ue},FAntdTable:function(){return O},PwdScore:function(){return w}});var c=e(85893),X=function(){return(0,c.jsx)(c.Fragment,{children:"This is a demo component."})},y=e(97857),E=e.n(y),o=e(13769),s=e.n(o),P=e(38289),l=e(13457),S=e(67294),h=e(111),I=e(14615),u=["state","onChange"],r=["state","onInput"],a=["state","onChange","mode","strict"],d=function(B,D){var $=B.state,F=B.onChange,M=s()(B,u);return E()({ref:D,allowClear:!0,value:$==null?void 0:$[0],onChange:function(J){var Q;J.target.value=(Q=J.target.value)===null||Q===void 0?void 0:Q.trim();for(var Z=arguments.length,U=new Array(Z>1?Z-1:0),V=1;V<Z;V++)U[V-1]=arguments[V];$==null||$[1].apply($,[J.target.value].concat(U)),F==null||F.apply(void 0,[J].concat(U))}},M)},n=(0,S.forwardRef)(function(g,B){return(0,c.jsx)(P.Z,E()({placeholder:"\u8BF7\u8F93\u5165"},d(g,B)))}),p=P.Z.$$typeof,t=P.Z.render,m=s()(P.Z,["$$typeof","render"]);for(var i in m)n[i]=P.Z[i];n.Password=(0,S.forwardRef)(function(g,B){return(0,c.jsx)(P.Z.Password,E()({placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},d(g,B)))}),n.Search=(0,S.forwardRef)(function(g,B){var D,$,F,M=function(){for(var U,V=arguments.length,G=new Array(V),K=0;K<V;K++)G[K]=arguments[K];(U=g.onSearch)===null||U===void 0||U.call.apply(U,[g].concat(G))},W=(0,h.Z)(M,(D=g.throttleDuration)!==null&&D!==void 0?D:0,{trailing:($=g.throttleTrailing)!==null&&$!==void 0?$:!1}),J=(0,S.useCallback)((0,I.Z)(M,(F=g.debounceDuration)!==null&&F!==void 0?F:500),[]),Q=function(U){var V;g.autoSearch&&J(U.target.value),(V=g.onInput)===null||V===void 0||V.call(g,U)};return(0,c.jsx)(P.Z.Search,E()(E()({placeholder:g.autoSearch?"\u8F93\u5165\u540E\u81EA\u52A8\u641C\u7D22":"\u8BF7\u8F93\u5165"},d(g,B)),{},{onSearch:W,onInput:Q}))}),n.TextArea=(0,S.forwardRef)(function(g,B){return(0,c.jsx)(P.Z.TextArea,E()(E()({placeholder:"\u8BF7\u8F93\u5165",showCount:!0,maxLength:100},d(g,B)),{},{style:E()({height:100},g==null?void 0:g.style)}))}),n.OTP=(0,S.forwardRef)(function(g,B){var D=g.state,$=g.onInput,F=s()(g,r);return(0,c.jsx)(P.Z.OTP,E()(E()({ref:B,value:D==null?void 0:D[0]},F),{},{onInput:function(W){D==null||D[1](W.join("")),$&&$(W)}}))}),n.Number=(0,S.forwardRef)(function(g,B){var D=g.state,$=g.onChange,F=g.mode,M=g.strict,W=s()(g,a),J=function(Z){D==null||D[1](Z),$&&$(Z)};return(0,c.jsx)(l.Z,E()({value:D==null?void 0:D[0],onChange:J,placeholder:"\u8BF7\u8F93\u5165",ref:B,keyboard:!0,changeOnWheel:!0,min:M?0:void 0,max:F==="percent"&&M?100:void 0,step:M?1:.1,precision:M?0:void 0,suffix:F==="percent"?"%":void 0,prefix:F==="price"?"\uFFE5":void 0},W))});var x=n,v=e(5574),f=e.n(v),b=e(47921),C=["api","apiData","checkboxState","radioState","filter","getApiData","requestValid","requestPageConfig","successValid","mapperOptions","initPageSize","initCurrent","autoInit","pagination","columns","rowSelection","dataSource"],T=(0,S.forwardRef)(function(g,B){var D=g.api,$=g.apiData,F=g.checkboxState,M=g.radioState,W=g.filter,J=W===void 0?function(R){return!0}:W,Q=g.getApiData,Z=Q===void 0?function(R){return R}:Q,U=g.requestValid,V=U===void 0?function(R){return!0}:U,G=g.requestPageConfig,K=G===void 0?function(R,j){return{current:R,pageSize:j}}:G,L=g.successValid,me=L===void 0?function(R){return R.code==="0"}:L,Se=g.mapperOptions,pe=Se===void 0?{total:"total",data:"data"}:Se,ve=g.initPageSize,se=ve===void 0?10:ve,Ie=g.initCurrent,de=Ie===void 0?1:Ie,Ae=g.autoInit,Ve=Ae===void 0?!0:Ae,be=g.pagination,fe=be===void 0?{}:be,ze=g.columns,Pe=ze===void 0?[]:ze,Y=g.rowSelection,oe=g.dataSource,ie=s()(g,C),Ue=(0,S.useState)(se),Te=f()(Ue,2),ce=Te[0],Xe=Te[1],Ze=(0,S.useState)(de),De=f()(Ze,2),he=De[0],He=De[1],Ge=(0,S.useState)(0),Fe=f()(Ge,2),Je=Fe[0],Qe=Fe[1],Ye=(0,S.useState)(!1),Oe=f()(Ye,2),ke=Oe[0],Ce=Oe[1],qe=(0,S.useState)([]),$e=f()(qe,2),ye=$e[0],Re=$e[1],te=(0,S.useCallback)(function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},j=R.current,_=j===void 0?he:j,k=R.pageSize,q=k===void 0?ce:k,Le=R.data,nn=Le===void 0?$:Le,Ne=R.otherData,tn=Ne===void 0?{}:Ne,an=!D&&oe;if(an)return Promise.resolve();var Ke=Object.assign({},K(_,q),nn,tn);if(V(Ke)){Ce(!0);var rn=_,ln=q;return D(Ke).then(function(we){var We=Z(we);if(me(We)&&rn===_&&ln===q){var Ee,dn=((Ee=We[pe.data])!==null&&Ee!==void 0?Ee:[]).filter(J);Qe(we[pe.total]),Re(dn),He(_),Xe(q)}}).finally(function(){Ce(!1)})}},[$,D,Z,V,K,me,pe,J,oe]),Me=(0,S.useCallback)(function(R){return te({current:de,pageSize:ce,otherData:R})},[de,ce,te]),Be=(0,S.useCallback)(function(R){return te({current:de,pageSize:se,data:{},otherData:R})},[de,se,te]),je=(0,S.useCallback)(function(R){return te({otherData:R})},[te]),ge=(0,S.useCallback)(function(){return{tableData:ye,configCurrent:he,configPageSize:ce,selected:ie!=null&&ie.rowKey?ye.filter(function(R){if(M)return R[ie.rowKey]===M[0];if(F){var j=F[0];return j.includes(R[ie.rowKey])}}):void 0}},[ye,he,ce,F,M]),_e=(0,S.useCallback)(function(){return ge().selected},[ge]),xe=(0,S.useRef)();(0,S.useImperativeHandle)(B,function(){var R,j;return{getTableData:te,init:Me,reload:je,reset:Be,getInfo:ge,getSelected:_e,nativeElement:(R=xe.current)===null||R===void 0?void 0:R.nativeElement,scrollTo:(j=xe.current)===null||j===void 0?void 0:j.scrollTo}},[te,Me,je,Be,xe,ge]);var en=(0,S.useMemo)(function(){return F?E()(E()({type:"checkbox",selectedRowKeys:F[0]},Y!=null?Y:{}),{},{onChange:function(){for(var j,_=arguments.length,k=new Array(_),q=0;q<_;q++)k[q]=arguments[q];F[1](k[0]),Y==null||(j=Y.onChange)===null||j===void 0||j.call.apply(j,[Y].concat(k))}}):M?E()(E()({type:"radio",selectedRowKeys:[M[0]]},Y!=null?Y:{}),{},{onChange:function(){for(var j,_=arguments.length,k=new Array(_),q=0;q<_;q++)k[q]=arguments[q];M[1](k[0][0]),Y==null||(j=Y.onChange)===null||j===void 0||j.call.apply(j,[Y].concat(k))}}):Y},[F,M,Y]);return(0,S.useEffect)(function(){Ve&&!oe&&te()},[]),(0,S.useEffect)(function(){oe&&Re(oe)},[oe]),(0,c.jsx)(b.Z,E()(E()({ref:xe,loading:ke,dataSource:oe!=null?oe:ye},ie),{},{rowSelection:en,columns:Pe==null?void 0:Pe.map(function(R){var j;return R.key=(j=R.key)!==null&&j!==void 0?j:R.dataIndex,R}),pagination:fe===!1?!1:E()(E()({showSizeChanger:!0,current:he,pageSize:ce,total:Je,pageSizeOptions:[5,10,20,50]},fe),{},{onChange:function(j,_){var k;te({current:j,pageSize:_}),(k=fe.onChange)===null||k===void 0||k.call(fe,j,_),M&&M[1](void 0),F&&F[1]([])}})}))}),O=T,A={"pwd-score__wrapper":"ECZRO8sIboA2Jvnzyv_S","pwd-score__item":"VU4c6Mn96G89buIwnU4M","pwd-score__text":"mstSfTCI_kUSytZ2oNZG"},N=function(B){var D=B.value,$=B.scoreList,F=$===void 0?[{color:"#a0133d",label:"\u975E\u5E38\u5F31",value:0},{color:"#f7e84d",label:"\u8F83\u5F31",value:1},{color:"#ffa500",label:"\u4E00\u822C",value:2},{color:"#1677ff",label:"\u8F83\u5F3A",value:3},{color:"#2f9715",label:"\u5F3A",value:4}]:$,M=B.defaultColor,W=M===void 0?"#e2e2e2":M,J=B.reverse,Q=J===void 0?!1:J,Z=(0,S.useMemo)(function(){return F.sort(function(G,K){return G.value>K.value?Q?-1:1:G.value<K.value?Q?1:-1:0})},[F,Q]),U=(0,S.useCallback)(function(G){var K=Z.findIndex(function(L){return L.value===D});return K===G?Z[G].color:W},[D,F]),V=(0,S.useMemo)(function(){var G;return(G=Z.find(function(K){return K.value===D}))===null||G===void 0?void 0:G.label},[D,F]);return(0,c.jsxs)("div",{className:A["pwd-score__wrapper"],children:[Array.from({length:Z.length},function(G,K){return(0,c.jsx)("div",{className:A["pwd-score__item"],style:{backgroundColor:U(K)}},"pwd-score:"+K)}),(0,c.jsx)("span",{className:A["pwd-score__text"],style:{opacity:+!!V},children:V!=null?V:"\u65E0"})]})},w=N,H={"table-tr__action-content":"WDUdr4YWFPgrL1jr_TcA","action-content__info":"Zy6XaXPuPGoOQGuKXA9r","action-content__item":"CuxqxKq6pw0Bf3SLqCjD","order-body_td":"X1OWv6o0pEijXwqe8ZVU","order-body_tr":"qBIN1Vcf0IsOpfXt3sKS",dark:"VuZ0QcgBeuQI7ua0zATw"},ne=["headerRender","headerOptions"],ae=["children","className","style"],re=(0,S.forwardRef)(function(g,B){var D=g.headerRender,$=g.headerOptions,F=s()(g,ne),M=function(L){return(0,c.jsx)("table",E()(E()({},L),{},{style:E()(E()({},L.style),{},{borderCollapse:"collapse"})}))},W=function(L){return(0,c.jsx)("thead",E()({},L))},J=function(L){return(0,c.jsx)("tr",E()({},L))},Q=function(L){return(0,c.jsx)("th",E()({},L))},Z=function(L){return(0,c.jsx)("tbody",E()({},L))},U=function(L){return(0,c.jsx)("td",E()(E()({},L),{},{style:E()(E()({},L.style),{},{borderRightStyle:"solid",borderRightWidth:"1px"}),className:H["order-body_td"]}))},V=function(L){var me=L.children,Se=L.className,pe=L.style,ve=s()(L,ae),se;if("data-row-key"in L){var Ie=me.at(-1);Ie&&(se=Ie.props.record)}return(0,c.jsxs)(c.Fragment,{children:[se&&(D||$)&&(0,c.jsx)("tr",E()(E()({},ve),{},{"data-row-key":L["data-row-key"]+"/children",children:(0,c.jsx)("td",{colSpan:"9",style:{padding:"0"},children:(0,c.jsxs)("div",{className:"".concat(H["table-tr__action-content"]),children:[(0,c.jsx)("div",{className:H["action-content__info"],children:D==null?void 0:D.map(function(de){return(0,c.jsxs)("span",{className:H["action-content__item"],children:[de.label,"\uFF1A",de.render(se)]},de.label)})}),$&&$(se)]})})})),(0,c.jsx)("tr",E()(E()({},ve),{},{style:{style:pe,borderStyle:"solid",borderWidth:"1px 0 0 1px"},className:H["order-body_tr"],children:me}))]})},G=(0,S.useRef)({table:M,header:{wrapper:W,row:J,cell:Q},body:{wrapper:Z,row:V,cell:U}});return(0,c.jsx)(O,E()({ref:B,components:G.current},F))}),ue=re,le=function(){console.log("This is a demo log")}},95305:function(ee,z,e){e.r(z),e.d(z,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2ADemo\u7EC4\u4EF6\uFF0C\u7528\u6765\u505A\u6587\u6863\u793A\u4F8B",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"\u65B9\u6CD5\u540D",paraId:2,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:8},{value:"\u8BF4\u660E",paraId:4,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:8},{value:"\u65B9\u6CD5\u540D",paraId:5,tocIndex:9},{value:"\u662F\u5426\u5FC5\u586B",paraId:5,tocIndex:9},{value:"\u8BF4\u660E",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u8BF4\u660E",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u5C5E\u6027\u540D",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:7,tocIndex:12},{value:"\u8BF4\u660E",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"\u65B9\u6CD5\u540D",paraId:8,tocIndex:13},{value:"\u662F\u5426\u5FC5\u586B",paraId:8,tocIndex:13},{value:"\u8BF4\u660E",paraId:8,tocIndex:13},{value:"\u5C5E\u6027",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14}]},87455:function(ee,z,e){e.r(z),e.d(z,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2A\u6709\u5404\u79CD\u5E38\u89C1\u4E1A\u52A1\u573A\u666F\u7684Antd Input\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:1,tocIndex:2},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:2,tocIndex:3},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:3},{value:"debounceDuration",paraId:3},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:3},{value:"500",paraId:3},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:3},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:4,tocIndex:4},{value:"\u4F7F\u7528",paraId:5},{value:"throttleDuration",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:5},{value:"0",paraId:5},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:5},{value:"\u4F7F\u7528",paraId:5},{value:"throttleTrailing",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u641C\u7D22\uFF0C\u9ED8\u8BA4",paraId:5},{value:"false",paraId:5},{value:"\u5728\u8868\u5355\u4E2D\u65B9\u6CD5\u4F7F\u7528\u540CAntd Input\uFF0C\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:6,tocIndex:11},{value:"\u4F60\u4E0D\u80FD\u5728\u8868\u5355\u4E2D\u4F7F\u7528setState\u53BB\u4FEE\u6539\u8868\u5355\u57DF\u7684\u503C\uFF0C\u8BE6\u89C1\uFF1A",paraId:7},{value:"FormItem",paraId:7},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:8,tocIndex:13},{value:"Antd Input",paraId:8,tocIndex:13},{value:"\u5C5E\u6027\u540D",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14},{value:"\u662F\u5426\u5FC5\u586B",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:14},{value:"state",paraId:9,tocIndex:14},{value:"string",paraId:9,tocIndex:14},{value:"false",paraId:9,tocIndex:14},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:9,tocIndex:14},{value:"\u7EC4\u4EF6\u5185\u90E8\u4F9D\u636E",paraId:10,tocIndex:15},{value:"lodash-es",paraId:10,tocIndex:15},{value:"\u4F9D\u8D56\uFF0C\u8BF7\u5148\u4F7F\u7528",paraId:10,tocIndex:15},{value:"npm install lodash-es",paraId:10,tocIndex:15},{value:"\u4E0B\u8F7D\u6240\u9700\u4F9D\u8D56 \uFF0C\u914D\u7F6E\u9879\u7EE7\u627F",paraId:10,tocIndex:15},{value:"Antd Input.Search",paraId:10,tocIndex:15},{value:"\u5C5E\u6027\u540D",paraId:11,tocIndex:16},{value:"\u7C7B\u578B",paraId:11,tocIndex:16},{value:"\u662F\u5426\u5FC5\u586B",paraId:11,tocIndex:16},{value:"\u8BF4\u660E",paraId:11,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:16},{value:"state",paraId:11,tocIndex:16},{value:"string",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:11,tocIndex:16},{value:"autoSearch",paraId:11,tocIndex:16},{value:"function",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8F93\u5165\u65F6\u662F\u5426\u81EA\u52A8\u4F7F\u7528\u9632\u6296\u641C\u7D22",paraId:11,tocIndex:16},{value:"debounceDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u5F00\u542FautoSearch\u540E\uFF0C\u9632\u6296\u65F6\u95F4",paraId:11,tocIndex:16},{value:"500",paraId:11,tocIndex:16},{value:"throttleDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u89E6\u53D1\u641C\u7D22\u4E8B\u4EF6\u65F6\u8282\u6D41\u65F6\u95F4",paraId:11,tocIndex:16},{value:"0",paraId:11,tocIndex:16},{value:"throttleTrailing",paraId:11,tocIndex:16},{value:"boolean",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8282\u6D41\u641C\u7D22\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u89E6\u53D1\u641C\u7D22",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:12,tocIndex:17},{value:"Antd InputNumber",paraId:12,tocIndex:17},{value:"\u5C5E\u6027\u540D",paraId:13,tocIndex:18},{value:"\u7C7B\u578B",paraId:13,tocIndex:18},{value:"\u662F\u5426\u5FC5\u586B",paraId:13,tocIndex:18},{value:"\u8BF4\u660E",paraId:13,tocIndex:18},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:18},{value:"state",paraId:13,tocIndex:18},{value:"string",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:13,tocIndex:18},{value:"mode",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:" ",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:"\u4EF7\u683C\u6A21\u5F0F\u3001",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"\u767E\u5206\u6BD4\u6A21\u5F0F\uFF0C\u51FA\u73B0\u56FA\u5B9A\u7684\u683C\u5F0F",paraId:13,tocIndex:18},{value:"strict",paraId:13,tocIndex:18},{value:"boolean",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E25\u683C\u9650\u5236\uFF0C\u9650\u5236\u4E3A\u6B63\u6574\u6570\u3001\u6B65\u957F\u4E3A1\u3001\u767E\u5206\u6BD4\u6A21\u5F0F\u4E0B\u9650\u5236\u6700\u5927\u503C100",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E0EAntd Input.XXX\u76F8\u540C\uFF0C",paraId:14,tocIndex:19},{value:"Antd Input",paraId:14,tocIndex:19}]},8828:function(ee,z,e){e.r(z),e.d(z,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E",paraId:0,tocIndex:0},{value:"FAntdTable",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u5199\u7684\u8BA2\u5355\u8868\u683C\uFF0C\u539F\u7406\u662F\u4F7F\u7528\u4E86",paraId:0,tocIndex:0},{value:"antd table",paraId:0,tocIndex:0},{value:"\u7684\u81EA\u5B9A\u4E49",paraId:0,tocIndex:0},{value:"components",paraId:0,tocIndex:0},{value:`
\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u8BA2\u5355\u8868\u683C\u5728\u6BCF\u4E00\u9879\u6570\u636E\u7684\u5934\u90E8\u589E\u52A0\u4E86\u6570\u636E\u663E\u793A\u548C\u64CD\u4F5C\u7A7A\u95F4`,paraId:0,tocIndex:0},{value:"\u5176\u4ED6\u914D\u7F6E\u9879\u7EE7\u627F",paraId:2,tocIndex:2},{value:"FAntdTable",paraId:3,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"headerRender",paraId:4,tocIndex:3},{value:"{label: string, render: row => React}[]",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"\u5934\u90E8\u6570\u636E\u7684\u663E\u793A\u533A\u57DF",paraId:4,tocIndex:3},{value:"headerOptions",paraId:4,tocIndex:3},{value:"row => React",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"\u5934\u90E8\u6570\u636E\u7684\u64CD\u4F5C\u533A\u57DF",paraId:4,tocIndex:3}]},12808:function(ee,z,e){e.r(z),e.d(z,{texts:function(){return c}});const c=[{value:"FAntdTable",paraId:0,tocIndex:0},{value:"\u662F\u5BF9Antd Table\u7684\u5C01\u88C5\uFF0C\u53EA\u9700\u8981\u6709api\u548Ccolumns\u5C5E\u6027\u5C31\u80FD\u5FEB\u901F\u6E32\u67D3\u51FA\u4E00\u4E2A\u5206\u9875\u8868\u683C\uFF0C\u5BF9Antd Table\u539F\u751F\u6539\u52A8\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"\u5185\u7F6E",paraId:1,tocIndex:0},{value:"api",paraId:1,tocIndex:0},{value:"\u8BF7\u6C42\uFF0C\u53EF\u4F7F\u7528",paraId:1,tocIndex:0},{value:"ref",paraId:1,tocIndex:0},{value:"\u63A7\u5236\u8BF7\u6C42",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\u4E0D\u5B58\u5728",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u65F6\uFF0C\u5982\u679C",paraId:1,tocIndex:0},{value:"dataIndex",paraId:1,tocIndex:0},{value:"\u6709\u503C\uFF0C\u5219\u81EA\u52A8\u5C06",paraId:1,tocIndex:0},{value:"dataIndex",paraId:1,tocIndex:0},{value:"\u5F53\u4F5C",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"checkboxState",paraId:1,tocIndex:0},{value:"\u548C",paraId:1,tocIndex:0},{value:"radioState",paraId:1,tocIndex:0},{value:"\u80FD\u66F4\u5FEB\u7684\u4F7F\u7528\u591A\u9009/\u5355\u9009",paraId:1,tocIndex:0},{value:"\u6709\u4E00\u5957\u9ED8\u8BA4\u7684\u5B57\u6BB5\u6620\u5C04\u3001\u521D\u59CB\u5206\u9875\u914D\u7F6E\uFF0C\u89C1\u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:0},{value:"\u6CE8\u610F\u4EE5\u4E0B\u89C4\u5B9A\uFF1A",paraId:2},{value:"\u5206\u9875\u53C2\u6570\u4E3Acurrent\u3001pageSize",paraId:3},{value:"api",paraId:3},{value:"\u8FD4\u56DE\u7684\u662F\u63A5\u53E3\u6570\u636E\uFF0C\u800C\u4E0D\u662F",paraId:3},{value:"response",paraId:3},{value:"\u6210\u529F\u72B6\u6001\u4E3A",paraId:3},{value:"code==='0'",paraId:3},{value:"\u603B\u6570\u636E\u6761\u6570\u5B57\u6BB5\u4E3A",paraId:3},{value:"total",paraId:3},{value:"\u6570\u636E\u5B57\u6BB5\u4E3A",paraId:3},{value:"data",paraId:3},{value:"\u5047\u8BBE\u63A5\u53E3\u8FD4\u56DEresponse\u5BF9\u8C61\uFF0C\u5206\u9875\u53C2\u6570\u4E3ApageSearch: { limit, page }\uFF0C\u8FD4\u56DE\u4F53\u91CC\u9762\u662Fsize\u548Crecords\uFF0C\u6210\u529F\u6761\u4EF6\u4E3Acode==='OK'",paraId:4,tocIndex:2},{value:"\u7ED1\u5B9A",paraId:5,tocIndex:4},{value:"checkboxState",paraId:5,tocIndex:4},{value:"\u548C",paraId:5,tocIndex:4},{value:"rowKey",paraId:5,tocIndex:4},{value:"\u5373\u53EF\uFF0C\u60F3\u8981\u83B7\u53D6\u9009\u4E2D\u7684\u5168\u90E8\u6570\u636E\u53EF\u4EE5\u4F7F\u7528",paraId:5,tocIndex:4},{value:"ref",paraId:5,tocIndex:4},{value:"\u4E2D\u7684",paraId:5,tocIndex:4},{value:"getSelected",paraId:5,tocIndex:4},{value:"\u65B9\u6CD5",paraId:5,tocIndex:4},{value:"\u4E0E\u591A\u9009\u7C7B\u4F3C\uFF0C\u7ED1\u5B9A",paraId:6,tocIndex:5},{value:"radioState",paraId:6,tocIndex:5},{value:"\u4EE5\u5FEB\u901F\u5B9E\u73B0\u5355\u9009\uFF0C\u7ED1\u5B9A\u503C\u4E3A",paraId:6,tocIndex:5},{value:"rowKey",paraId:6,tocIndex:5},{value:"\u7684\u503C\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6570\u7EC4",paraId:6,tocIndex:5},{value:"\u4F7F\u7528",paraId:7,tocIndex:6},{value:"filter",paraId:7,tocIndex:6},{value:"\u8FC7\u6EE4\u6389\u7B2C\u4E94\u6761\u6570\u636E",paraId:7,tocIndex:6},{value:"\u4F7F\u7528",paraId:8,tocIndex:7},{value:"requestValid",paraId:8,tocIndex:7},{value:"\u62E6\u622A\u7B2C\u4E8C\u9875\u7684\u8BF7\u6C42",paraId:8,tocIndex:7},{value:"\u5728",paraId:9,tocIndex:8},{value:"ref",paraId:9,tocIndex:8},{value:"\u5BF9\u8C61\u4E2D\u7684\u5404\u4E2A\u5237\u65B0\u65B9\u6CD5\u4E0A\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61\u5373\u53EF\uFF0C\u4F1A\u88AB\u5F53\u4F5C\u989D\u5916\u7684\u4E34\u65F6\u67E5\u8BE2\u53C2\u6570",paraId:9,tocIndex:8},{value:"\u53EF\u53C2\u8003",paraId:10,tocIndex:10},{value:"Antd Table",paraId:10,tocIndex:10},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:11,tocIndex:11},{value:"Antd Table",paraId:11,tocIndex:11},{value:"\u5C5E\u6027\u540D",paraId:12,tocIndex:12},{value:"\u7C7B\u578B",paraId:12,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:12,tocIndex:12},{value:"\u8BF4\u660E",paraId:12,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:12},{value:"api",paraId:12,tocIndex:12},{value:"apiData => Promise",paraId:12,tocIndex:12},{value:"\u662F",paraId:12,tocIndex:12},{value:"\u83B7\u53D6\u8868\u683C\u6570\u636E\u7684\u63A5\u53E3\u51FD\u6570",paraId:12,tocIndex:12},{value:"apiData",paraId:12,tocIndex:12},{value:"object",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"api\u51FD\u6570\u8BF7\u6C42\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A",paraId:12,tocIndex:12},{value:"apiData",paraId:12,tocIndex:12},{value:" + ",paraId:12,tocIndex:12},{value:"requestPageConfig",paraId:12,tocIndex:12},{value:"checkboxState",paraId:12,tocIndex:12},{value:"array",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u591A\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:12,tocIndex:12},{value:"radioState",paraId:12,tocIndex:12},{value:"array",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u5355\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:12,tocIndex:12},{value:"filter",paraId:12,tocIndex:12},{value:"itemData => boolean",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u8FC7\u6EE4\u8868\u683C\u6570\u636E\uFF0C\u540C",paraId:12,tocIndex:12},{value:"Array.filter",paraId:12,tocIndex:12},{value:"data => true",paraId:12,tocIndex:12},{value:"getApiData",paraId:12,tocIndex:12},{value:"response => object",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u8FD4\u56DE\u540E\u7AEF\u63A5\u53E3\u54CD\u5E94\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u6D4F\u89C8\u5668response\uFF08\u5982\u679C\u63A5\u53E3\u8FD4\u56DE\u662Fresponse\uFF0C\u5EFA\u8BAE\u53BB\u8C03\u6574\u54CD\u5E94\u62E6\u622A\u5668\uFF0C\u65E0\u6CD5\u8C03\u6574\u62E6\u622A\u5668\u53EF\u4EE5\u6539\u4E3A",paraId:12,tocIndex:12},{value:"response => response.data",paraId:12,tocIndex:12},{value:"\uFF09",paraId:12,tocIndex:12},{value:"response => response",paraId:12,tocIndex:12},{value:"requestValid",paraId:12,tocIndex:12},{value:"requestArgs => boolean",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u662F\u5426\u8FDB\u884C\u8BF7\u6C42\uFF0C\u53EF\u7528\u4E8E\u5728\u4E0D\u6EE1\u8DB3\u8BF7\u6C42\u6761\u4EF6\u65F6\u62E6\u622A\u8BF7\u6C42\uFF0C",paraId:12,tocIndex:12},{value:"requestArgs",paraId:12,tocIndex:12},{value:"\u63A5\u53E3\u8BF7\u6C42\u53C2\u6570",paraId:12,tocIndex:12},{value:"requestArgs => true",paraId:12,tocIndex:12},{value:"requestPageConfig",paraId:12,tocIndex:12},{value:"(current, pageSize) => object",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u8FD4\u56DE\u4F20\u9012\u63A5\u53E3\u7684\u5206\u9875\u914D\u7F6E\uFF0C\u9ED8\u8BA4",paraId:12,tocIndex:12},{value:"current, pageSize",paraId:12,tocIndex:12},{value:"\u53C2\u6570\uFF0Ccurrent\u5F53\u524D\u9875\uFF0CpageSize\u5F53\u524D\u6761\u6570",paraId:12,tocIndex:12},{value:"(current, pageSize) => ({ current, pageSize })",paraId:12,tocIndex:12},{value:"successValid",paraId:12,tocIndex:12},{value:"response => boolean",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6210\u529F\uFF0C\u9ED8\u8BA4\u5224\u65AD\u54CD\u5E94\u6570\u636E\u4E2D\u7684",paraId:12,tocIndex:12},{value:"code",paraId:12,tocIndex:12},{value:"\u4E3A\u5B57\u7B26\u4E32",paraId:12,tocIndex:12},{value:"0",paraId:12,tocIndex:12},{value:"data => data.code === '0'",paraId:12,tocIndex:12},{value:"mapperOptions",paraId:12,tocIndex:12},{value:"object",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u8868\u683C\u6570\u636E\u6620\u5C04\u5B57\u6BB5\u540D\u79F0",paraId:12,tocIndex:12},{value:"{ total: 'total', data: 'data' }",paraId:12,tocIndex:12},{value:"initPageSize",paraId:12,tocIndex:12},{value:"number",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u6761\u6570",paraId:12,tocIndex:12},{value:"10",paraId:12,tocIndex:12},{value:"initCurrent",paraId:12,tocIndex:12},{value:"number",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u9875\u6570",paraId:12,tocIndex:12},{value:"1",paraId:12,tocIndex:12},{value:"autoInit",paraId:12,tocIndex:12},{value:"boolean",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u8868\u683C\u6570\u636E",paraId:12,tocIndex:12},{value:"true",paraId:12,tocIndex:12},{value:"\u65B9\u6CD5\u540D",paraId:13,tocIndex:13},{value:"\u8BF4\u660E",paraId:13,tocIndex:13},{value:"\u7C7B\u578B",paraId:13,tocIndex:13},{value:"getTableData",paraId:13,tocIndex:13},{value:"\u7EC4\u4EF6\u66B4\u9732\u7684\u67E5\u8BE2\u65B9\u6CD5\uFF0C\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F20\u5165data\u53C2\u6570\u4F1A\u8986\u76D6apiData\uFF0C\u9700\u8981\u643A\u5E26\u5176\u4ED6\u53C2\u6570\u8BF7\u4F7F\u7528otherData",paraId:13,tocIndex:13},{value:"({ current\u3001pageSize\u3001data\u3001otherData }) => Promise",paraId:13,tocIndex:13},{value:"init",paraId:13,tocIndex:13},{value:"\u6839\u636E\u5F53\u524D\u6761\u6570\u3001\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u521D\u59CB\u9875\u6570\u7684\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u989D\u5916\u67E5\u8BE2\u6570\u636E\uFF0C\u4E00\u822C\u7528\u4E8E\u67E5\u8BE2",paraId:13,tocIndex:13},{value:"otherData => Promise",paraId:13,tocIndex:13},{value:"reset",paraId:13,tocIndex:13},{value:"\u4F7F\u7528\u521D\u59CB\u6761\u6570\u3001\u521D\u59CB\u9875\u6570\u3001\u7A7A\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u91CD\u7F6E",paraId:13,tocIndex:13},{value:"otherData => Promise",paraId:13,tocIndex:13},{value:"reload",paraId:13,tocIndex:13},{value:"\u5237\u65B0\u5F53\u524D\u9875\u9762\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6",paraId:13,tocIndex:13},{value:"otherData => Promise",paraId:13,tocIndex:13},{value:"getInfo",paraId:13,tocIndex:13},{value:"\u83B7\u53D6\u5F53\u524D\u8868\u683C\u8BF7\u6C42\u6570\u636E",paraId:13,tocIndex:13},{value:"() => ({ current, pageSize, data })",paraId:13,tocIndex:13},{value:"getSelected",paraId:13,tocIndex:13},{value:"\u83B7\u53D6\u5F53\u524D\u8868\u683C\u9009\u4E2D\u6570\u636E",paraId:13,tocIndex:13},{value:"() => array|string|number ",paraId:13,tocIndex:13}]},6282:function(ee,z,e){e.r(z),e.d(z,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2A\u663E\u793A\u5BC6\u7801\u5F3A\u5EA6\u7684\u663E\u793A\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u6709\u4E94\u4E2A\u7B49\u7EA7(0-4)\uFF0C\u53EF\u81EA\u5B9A\u4E49\u7B49\u7EA7",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E",paraId:1,tocIndex:2},{value:"scoreList",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u6765\u6E32\u67D3\u989C\u8272\u548C\u6587\u5B57\uFF0C\u6839\u636E",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\u8FDB\u884C\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u4F7F\u7528",paraId:2,tocIndex:3},{value:"reverse",paraId:2,tocIndex:3},{value:"\u8C03\u6574\u6E32\u67D3\u987A\u5E8F",paraId:2,tocIndex:3},{value:"\u9700\u8981\u5F15\u5165\u5E93",paraId:3,tocIndex:4},{value:"zxcvbn",paraId:3,tocIndex:4},{value:"\u4F7F\u7528\uFF0C\u5728\u8868\u5355\u4E2D\u81EA\u52A8\u8BA1\u7B97\u5BC6\u7801\u5F3A\u5EA6\uFF0C\u5E76\u9650\u5236\u4F7F\u7528\u7684\u5BC6\u7801\u5F3A\u5EA6\u4E0D\u80FD\u4E3A",paraId:3,tocIndex:4},{value:"\u975E\u5E38\u5F31",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"value",paraId:4,tocIndex:6},{value:"number",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u5BC6\u7801\u5F3A\u5EA6\uFF0C\u9ED8\u8BA4\u53D6\u503C\u8303\u56F40-4",paraId:4,tocIndex:6},{value:"scoreList",paraId:4,tocIndex:6},{value:"array",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u6E32\u67D3",paraId:4,tocIndex:6},{value:'[{"color":"#a0133d","label":"\u975E\u5E38\u5F31","value":0},{"color":"#f7e84d","label":"\u8F83\u5F31","value":1},{"color":"#ffa500","label":"\u4E00\u822C","value":2},{"color":"#1677ff","label":"\u8F83\u5F3A","value":3},{"color":"#2f9715","label":"\u5F3A","value":4}]',paraId:4,tocIndex:6},{value:"defaultColor",paraId:4,tocIndex:6},{value:"color",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u5E95\u8272",paraId:4,tocIndex:6},{value:"'#e2e2e2'",paraId:4,tocIndex:6},{value:"reverse",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8C03\u6574\u5F3A\u5EA6\u663E\u793A\u987A\u5E8F",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6}]},51446:function(ee,z,e){e.r(z),e.d(z,{texts:function(){return c}});const c=[{value:`\u8FD9\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u5C01\u88C5\u7EC4\u4EF6\uFF0C\u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u4E1A\u52A1\u529F\u80FD\uFF0C\u4E3B\u8981\u4E3A\u4E86\u907F\u514D\u5728\u9879\u76EE\u4E2D\u7EC4\u4EF6\u7684\u7B80\u5355\u5C5E\u6027\u5197\u4F59\u3002
\u4EE5\u4E0B\u662F\u5C01\u88C5\u539F\u5219\uFF1A`,paraId:0,tocIndex:0},{value:"\u4E0D\u7834\u574F\u539F\u6709\u7EC4\u4EF6\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\u3001Ref\u3001\u5B50\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u4FDD\u6301\u539F\u6709\u7EC4\u4EF6\u7684\u53EF\u62D3\u5C55\u6027",paraId:1,tocIndex:0},{value:`npm install izid
# or
pnpm add izid
# or
yarn add izid
`,paraId:2,tocIndex:1},{value:"Npm",paraId:3,tocIndex:2}]}}]);
