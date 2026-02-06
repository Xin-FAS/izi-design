(self.webpackChunkizid=self.webpackChunkizid||[]).push([[904],{95819:function(Y,A,e){"use strict";e.r(A),e.d(A,{demos:function(){return S}});var c=e(15009),R=e.n(c),x=e(99289),E=e.n(x),o=e(67294),s=e(72573),S={"docs-demo-component-demo-0":{component:o.memo(o.lazy(E()(R()().mark(function u(){var h,I;return R()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return h=l.sent,I=h.Demo,l.abrupt("return",{default:function(){return o.createElement(I,null)}});case 5:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-demo-component-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Demo } from 'izid'

export default () => {
    return <Demo />
}`},izid:{type:"NPM",value:"0.1.26"}},entry:"index.jsx"},context:{izid:s},renderOpts:{compile:function(){var u=E()(R()().mark(function I(){var p,l=arguments;return R()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(250).then(e.bind(e,90250));case 2:return d.abrupt("return",(p=d.sent).default.apply(p,l));case 3:case"end":return d.stop()}},I)}));function h(){return u.apply(this,arguments)}return h}()}}}},57397:function(Y,A,e){"use strict";e.r(A),e.d(A,{demos:function(){return u}});var c=e(15009),R=e.n(c),x=e(99289),E=e.n(x),o=e(67294),s=e(72573),S=e(4816),u={"docs-demo-util-demo-0":{component:o.memo(o.lazy(E()(R()().mark(function h(){var I,p,l,r;return R()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return I=a.sent,p=I.DemoLog,a.next=6,Promise.resolve().then(e.bind(e,4816));case 6:return l=a.sent,r=l.Button,a.abrupt("return",{default:function(){return o.createElement(r,{onClick:p},"\u70B9\u51FB\u6253\u5370log")}});case 9:case"end":return a.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-demo-util-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { DemoLog } from 'izid'
import { Button } from 'antd'

export default () => {
    return <Button onClick={DemoLog}>\u70B9\u51FB\u6253\u5370log</Button>
}`},izid:{type:"NPM",value:"0.1.26"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:s,antd:S},renderOpts:{compile:function(){var h=E()(R()().mark(function p(){var l,r=arguments;return R()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,r));case 3:case"end":return a.stop()}},p)}));function I(){return h.apply(this,arguments)}return I}()}}}},48214:function(Y,A,e){"use strict";var c;e.r(A),e.d(A,{demos:function(){return h}});var R=e(15009),x=e.n(R),E=e(99289),o=e.n(E),s=e(67294),S=e(72573),u=e(4816),h={"docs-f-antd-input-demo-0":{component:s.memo(s.lazy(o()(x()().mark(function I(){var p,l,r,d,a,n,v,t;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return p=i.sent,l=p.FAntdInput,i.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=i.sent,d=r.useState,a=r.useEffect,n=r.useRef,i.next=12,Promise.resolve().then(e.bind(e,4816));case 12:return v=i.sent,t=v.Button,i.abrupt("return",{default:function(){var f=d(),y=n();a(function(){var $;setTimeout(($=y.current)===null||$===void 0?void 0:$.focus,1e3)},[]);var F=function(){f[1]("Hello World")};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",f[0]),s.createElement(l,{state:f,ref:y}),s.createElement("p",null,s.createElement(t,{type:"primary",onClick:F},"Hello World")))}});case 15:case"end":return i.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(s,2)),antd:u},renderOpts:{compile:function(){var I=o()(x()().mark(function l(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},l)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-1":{component:s.memo(s.lazy(o()(x()().mark(function I(){var p,l,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return p=n.sent,l=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d(),m=function(P){console.log("\u89E6\u53D1\u641C\u7D22\uFF1A",P)};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(l.Search,{state:t,onSearch:m}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var I=o()(x()().mark(function l(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},l)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-2":{component:s.memo(s.lazy(o()(x()().mark(function I(){var p,l,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return p=n.sent,l=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d(),m=function(P){console.log("\u89E6\u53D1\u81EA\u52A8\u641C\u7D22\uFF1A",P)};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(l.Search,{state:t,autoSearch:!0,onSearch:m}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var I=o()(x()().mark(function l(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},l)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-3":{component:s.memo(s.lazy(o()(x()().mark(function I(){var p,l,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return p=n.sent,l=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d(),m=function(P){console.log("\u89E6\u53D1\u8282\u6D41\u641C\u7D22\uFF1A",P)};return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(l.Search,{state:t,throttleDuration:2e3,onSearch:m}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var I=o()(x()().mark(function l(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},l)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-4":{component:s.memo(s.lazy(o()(x()().mark(function I(){var p,l,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return p=n.sent,l=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(l.Number,{state:t,strict:!0}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} strict />
    </>;
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var I=o()(x()().mark(function l(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},l)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-5":{component:s.memo(s.lazy(o()(x()().mark(function I(){var p,l,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return p=n.sent,l=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(l.Number,{state:t,mode:"price"}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'price'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var I=o()(x()().mark(function l(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},l)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-6":{component:s.memo(s.lazy(o()(x()().mark(function I(){var p,l,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return p=n.sent,l=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(l.Number,{state:t,mode:"percent"}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'percent'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var I=o()(x()().mark(function l(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},l)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-7":{component:s.memo(s.lazy(o()(x()().mark(function I(){var p,l,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return p=n.sent,l=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d();return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(l.Password,{state:t}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Password state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var I=o()(x()().mark(function l(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},l)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-8":{component:s.memo(s.lazy(o()(x()().mark(function I(){var p,l,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return p=n.sent,l=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d("");return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(l.OTP,{state:t}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.OTP state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var I=o()(x()().mark(function l(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},l)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-9":{component:s.memo(s.lazy(o()(x()().mark(function I(){var p,l,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return p=n.sent,l=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d("");return s.createElement(s.Fragment,null,s.createElement("p",null,"Input Value\uFF1A",t[0]),s.createElement(l.TextArea,{state:t}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-9",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.TextArea state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(s,2))},renderOpts:{compile:function(){var I=o()(x()().mark(function l(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},l)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-10":{component:s.memo(s.lazy(o()(x()().mark(function I(){var p,l,r,d,a,n,v;return x()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return p=m.sent,l=p.FAntdInput,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=m.sent,d=r.useState,m.next=10,Promise.resolve().then(e.bind(e,4816));case 10:return a=m.sent,n=a.Form,v=a.Button,m.abrupt("return",{default:function(){var P=function(y){console.log("\u8868\u5355\u63D0\u4EA4\uFF1A",y)};return s.createElement(n,{onFinish:P},s.createElement(n.Item,{label:"\u8F93\u5165\u6846",name:"value"},s.createElement(l,null)),s.createElement(n.Item,null,s.createElement(v,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4")))}});case 14:case"end":return m.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-10",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(s,2)),antd:u},renderOpts:{compile:function(){var I=o()(x()().mark(function l(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},l)}));function p(){return I.apply(this,arguments)}return p}()}}}},26220:function(Y,A,e){"use strict";e.r(A),e.d(A,{demos:function(){return u}});var c=e(15009),R=e.n(c),x=e(99289),E=e.n(x),o=e(67294),s=e(72573),S=e(4816),u={"docs-f-antd-order-table-demo-0":{component:o.memo(o.lazy(E()(R()().mark(function h(){var I,p,l,r,d;return R()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return I=n.sent,p=I.FAntdOrderTable,n.next=6,Promise.resolve().then(e.bind(e,4816));case 6:return l=n.sent,r=l.Space,d=function(t){var m=t.current,i=t.pageSize;return new Promise(function(P){setTimeout(function(){P({code:"0",count:21,data:Array.from({length:21},function(f,y){return{orderInfo:{hotelName:"\u676D\u5DDE\u897F\u6E56XXXX\u9152\u5E97".concat(y+1,"\u53F7"),houseType:"\u9AD8\u7EA7\u5927\u5E8A\u623F",breakfastType:"\u53CC\u65E9",startDate:"2025/05/15",endDate:"2025/05/16",dayCount:1,roomCount:1},contactInfo:{checkName:"\u674E\u56DB",contactName:"\u738B\u4E94"},payInfo:{paymentAmount:200,projectedIncome:200},systemOrderId:"1234567890",createDate:"2025-05-14 15:45:05",orderStatus:"\u5F85\u53D1\u8D27",more:"\u8FD9\u662F\u7B2C".concat(y+1,"\u6761\u6570\u636E")}}).slice((m-1)*i,m*i)})},300)})},n.abrupt("return",{default:function(){var t=[{title:"\u8BA2\u5355\u4FE1\u606F",dataIndex:"orderInfo",render:function(f){return o.createElement(o.Fragment,null,o.createElement("div",null,f.hotelName),o.createElement("div",null,f.houseType,"/",f.breakfastType),o.createElement("div",null,"".concat(f.startDate,"~").concat(f.endDate," ").concat(f.dayCount,"\u665A ").concat(f.roomCount,"\u95F4")))}},{title:"\u8054\u7CFB\u4FE1\u606F",dataIndex:"contactInfo",render:function(f){return o.createElement(o.Fragment,null,o.createElement("div",null,"\u5165\u4F4F\u4EBA\uFF1A",f.checkName),o.createElement("div",null,"\u8054\u7CFB\u4EBA\uFF1A",f.contactName))}},{title:"\u652F\u4ED8\u4FE1\u606F",dataIndex:"payInfo",render:function(f){return o.createElement(o.Fragment,null,o.createElement("div",null,"\u652F\u4ED8\u91D1\u989D\uFF1A\xA5",f.paymentAmount),o.createElement("div",null,"\u9884\u8BA1\u6536\u5165\uFF1A\xA5",f.projectedIncome))}},{title:"\u8BA2\u5355\u72B6\u6001",dataIndex:"orderStatus"},{title:"\u64CD\u4F5C",key:"active",render:function(){return o.createElement(r,{direction:"vertical"},o.createElement("a",null,"\u62D2\u5355"),o.createElement("a",null,"\u786E\u8BA4\u53D1\u8D27"),o.createElement("a",null,"\u590D\u5236\u8BA2\u5355"))}}],m=[{label:"\u7CFB\u7EDF\u8BA2\u5355\u53F7",render:function(f){return f.systemOrderId}},{label:"\u4E0B\u5355\u65F6\u95F4",render:function(f){return f.createDate}}],i=function(f){return o.createElement(r,null,o.createElement("a",null,"\u5F55\u5165"),o.createElement("a",null,"\u91C7\u8D2D"),o.createElement("a",null,"\u5907\u6CE8"),o.createElement("a",null,"\u8BE6\u60C5"),o.createElement("a",null,"\u65E5\u5FD7"))};return o.createElement(p,{api:d,columns:t,headerRender:m,headerOptions:i})}});case 10:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-order-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdOrderTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.26"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:s,antd:S},renderOpts:{compile:function(){var h=E()(R()().mark(function p(){var l,r=arguments;return R()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,r));case 3:case"end":return a.stop()}},p)}));function I(){return h.apply(this,arguments)}return I}()}}}},62511:function(Y,A,e){"use strict";var c;e.r(A),e.d(A,{demos:function(){return p}});var R=e(5574),x=e.n(R),E=e(15009),o=e.n(E),s=e(99289),S=e.n(s),u=e(67294),h=e(72573),I=e(4816),p={"docs-f-antd-table-demo-0":{component:u.memo(u.lazy(S()(o()().mark(function l(){var r,d,a;return o()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return r=v.sent,d=r.FAntdTable,a=function(m){var i=m.current,P=m.pageSize;return new Promise(function(f){setTimeout(function(){f({code:"0",total:21,data:Array.from({length:21},function(y,F){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(F+1,"\u6761\u6570\u636E")}}).slice((i-1)*P,i*P)})},300)})},v.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return u.createElement("a",null,"Delete")}}];return u.createElement(d,{api:a,columns:m})}});case 6:case"end":return v.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'

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
}`},izid:{type:"NPM",value:"0.1.26"}},entry:"index.jsx"},context:{izid:h},renderOpts:{compile:function(){var l=S()(o()().mark(function d(){var a,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return l.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-1":{component:u.memo(u.lazy(S()(o()().mark(function l(){var r,d,a;return o()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return r=v.sent,d=r.FAntdTable,a=function(m){var i=m.current,P=m.pageSize;return new Promise(function(f){setTimeout(function(){f({status:200,data:{code:"OK",size:21,records:Array.from({length:21},function(y,F){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(F+1,"\u6761\u6570\u636E")}}).slice((i-1)*P,i*P)}})},300)})},v.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return u.createElement("a",null,"Delete")}}];return u.createElement(d,{api:a,columns:m,getApiData:function(P){return P.data},reqeustPageConfig:function(P,f){return{pageSearch:{page:P,limit:f}}},mapperOptions:{total:"size",data:"records"},successValid:function(P){return P.code==="OK"}})}});case 6:case"end":return v.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'

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
}`},izid:{type:"NPM",value:"0.1.26"}},entry:"index.jsx"},context:{izid:h},renderOpts:{compile:function(){var l=S()(o()().mark(function d(){var a,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return l.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-2":{component:u.memo(u.lazy(S()(o()().mark(function l(){var r,d,a,n,v,t,m,i,P;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return r=y.sent,d=r.FAntdTable,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=y.sent,n=a.useRef,v=a.useState,y.next=11,Promise.resolve().then(e.bind(e,4816));case 11:return t=y.sent,m=t.Button,i=t.Space,P=function($){var C=$.current,O=$.pageSize;return new Promise(function(z){setTimeout(function(){z({code:"0",total:21,data:Array.from({length:21},function(U,Z){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(Z+1,"\u6761\u6570\u636E")}}).slice((C-1)*O,C*O)})},300)})},y.abrupt("return",{default:function(){var $=n(),C=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return u.createElement("a",null,"Delete")}}],O=function(U){var Z;(Z=$.current)===null||Z===void 0||Z[U]()};return u.createElement(u.Fragment,null,u.createElement(i,{style:{marginBottom:"10px"}},u.createElement(m,{onClick:function(){return O("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),u.createElement(m,{onClick:function(){return O("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),u.createElement(m,{onClick:function(){return O("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),u.createElement(d,{ref:$,api:P,columns:C,autoInit:!1}))}});case 16:case"end":return y.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(u,2)),antd:I},renderOpts:{compile:function(){var l=S()(o()().mark(function d(){var a,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return l.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-3":{component:u.memo(u.lazy(S()(o()().mark(function l(){var r,d,a,n,v,t,m,i,P;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return r=y.sent,d=r.FAntdTable,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=y.sent,n=a.useState,v=a.useRef,y.next=11,Promise.resolve().then(e.bind(e,4816));case 11:return t=y.sent,m=t.Radio,i=t.Button,P=function($){var C=$.current,O=$.pageSize;return new Promise(function(z){setTimeout(function(){z({code:"0",total:21,data:Array.from({length:21},function(U,Z){return{id:Z,name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(Z+1,"\u6761\u6570\u636E")}}).slice((C-1)*O,C*O)})},300)})},y.abrupt("return",{default:function(){var $=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return u.createElement("a",null,"Delete")}}],C=n([]),O=x()(C,2),z=O[0],U=O[1],Z=n([]),Q=x()(Z,2),te=Q[0],de=Q[1],oe=v(),ce=function(){var ue;return de((ue=oe.current)===null||ue===void 0?void 0:ue.getSelected())};return u.createElement(u.Fragment,null,JSON.stringify(z),u.createElement(i,{onClick:ce},"\u83B7\u53D6\u9009\u4E2D\u6570\u636E"),JSON.stringify(te),u.createElement(d,{ref:oe,checkboxState:[z,U],rowKey:"id",api:P,columns:$}))}});case 16:case"end":return y.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(u,2)),antd:I},renderOpts:{compile:function(){var l=S()(o()().mark(function d(){var a,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return l.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-4":{component:u.memo(u.lazy(S()(o()().mark(function l(){var r,d,a,n,v,t,m,i;return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return r=f.sent,d=r.FAntdTable,f.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=f.sent,n=a.useState,f.next=10,Promise.resolve().then(e.bind(e,4816));case 10:return v=f.sent,t=v.Radio,m=v.Button,i=function(F){var $=F.current,C=F.pageSize;return new Promise(function(O){setTimeout(function(){O({code:"0",total:21,data:Array.from({length:21},function(z,U){return{id:U,name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(U+1,"\u6761\u6570\u636E")}}).slice(($-1)*C,$*C)})},300)})},f.abrupt("return",{default:function(){var F=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return u.createElement("a",null,"Delete")}}],$=n({}),C=x()($,2),O=C[0],z=C[1];return u.createElement(u.Fragment,null,u.createElement(m,{onClick:function(){return z(3)}},"\u9009\u4E2D\u7B2C\u56DB\u6761\u6570\u636E"),JSON.stringify(O),u.createElement(d,{radioState:[O,z],rowKey:"id",api:i,columns:F}))}});case 15:case"end":return f.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(u,2)),antd:I},renderOpts:{compile:function(){var l=S()(o()().mark(function d(){var a,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return l.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-5":{component:u.memo(u.lazy(S()(o()().mark(function l(){var r,d,a,n,v;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return r=m.sent,d=r.FAntdTable,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=m.sent,n=a.useState,v=function(P){var f=P.current,y=P.pageSize;return new Promise(function(F){setTimeout(function(){F({code:"0",total:21,data:Array.from({length:21},function($,C){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(C+1,"\u6761\u6570\u636E")}}).slice((f-1)*y,f*y)})},300)})},m.abrupt("return",{default:function(){var P=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return u.createElement("a",null,"Delete")}}];return u.createElement(d,{api:v,columns:P,filter:function(y){return y.more!=="\u8FD9\u662F\u7B2C5\u6761\u6570\u636E"}})}});case 10:case"end":return m.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(u,2))},renderOpts:{compile:function(){var l=S()(o()().mark(function d(){var a,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return l.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-6":{component:u.memo(u.lazy(S()(o()().mark(function l(){var r,d,a,n,v;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return r=m.sent,d=r.FAntdTable,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=m.sent,n=a.useState,v=function(P){var f=P.current,y=P.pageSize;return new Promise(function(F){setTimeout(function(){F({code:"0",total:21,data:Array.from({length:21},function($,C){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(C+1,"\u6761\u6570\u636E")}}).slice((f-1)*y,f*y)})},300)})},m.abrupt("return",{default:function(){var P=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return u.createElement("a",null,"Delete")}}];return u.createElement(d,{api:v,columns:P,requestValid:function(y){return y.current!==2}})}});case 10:case"end":return m.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(u,2))},renderOpts:{compile:function(){var l=S()(o()().mark(function d(){var a,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return l.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-7":{component:u.memo(u.lazy(S()(o()().mark(function l(){var r,d,a,n,v,t,m,i,P,f;return o()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return r=F.sent,d=r.FAntdTable,a=r.FAntdInput,F.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=F.sent,v=n.useRef,t=n.useState,F.next=12,Promise.resolve().then(e.bind(e,4816));case 12:return m=F.sent,i=m.Button,P=m.Space,f=function(C){var O=C.current,z=C.pageSize;return new Promise(function(U){setTimeout(function(){U({code:"0",total:21,data:Array.from({length:21},function(Z,Q){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(Q+1,"\u6761\u6570\u636E")}}).slice((O-1)*z,O*z)})},300)})},F.abrupt("return",{default:function(){var C=v(),O=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return u.createElement("a",null,"Delete")}}],z=t(),U=x()(z,2),Z=U[0],Q=U[1],te=t(),de=x()(te,2),oe=de[0],ce=de[1],le=function(ve){var Ie;(Ie=C.current)===null||Ie===void 0||Ie[ve]({name:Z})},ue=t(),ee=x()(ue,2),me=ee[0],pe=ee[1];return u.createElement(u.Fragment,null,u.createElement(P,{style:{marginBottom:"10px"}},u.createElement(i,{onClick:function(){return le("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),u.createElement(i,{onClick:function(){return le("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),u.createElement(i,{onClick:function(){return le("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),u.createElement(a,{state:[oe,ce],placeholder:"\u8F93\u5165\u8BF7\u6C42\u53C2\u6570"}),u.createElement(a,{state:[Z,Q],placeholder:"\u8F93\u5165\u624B\u52A8\u8BF7\u6C42\u989D\u5916\u53C2\u6570"}),u.createElement("p",null,JSON.stringify(me)),u.createElement(d,{ref:C,api:f,apiData:{value:oe},columns:O,requestValid:function(ve){return pe(ve),!0}}))}});case 17:case"end":return F.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable, FAntdInput } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(u,2)),antd:I},renderOpts:{compile:function(){var l=S()(o()().mark(function d(){var a,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return l.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-8":{component:u.memo(u.lazy(S()(o()().mark(function l(){var r,d,a,n,v,t,m,i;return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return r=f.sent,d=r.FAntdTable,f.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=f.sent,n=a.useRef,v=a.useState,f.next=11,Promise.resolve().then(e.bind(e,4816));case 11:return t=f.sent,m=t.Button,i=function(F){var $=F.current,C=F.pageSize;return new Promise(function(O){setTimeout(function(){O({code:"0",total:21,data:Array.from({length:21},function(z,U){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(U+1,"\u6761\u6570\u636E")}}).slice(($-1)*C,$*C)})},300)})},f.abrupt("return",{default:function(){var F=n(),$=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return u.createElement("a",null,"Delete")}}],C=v(),O=x()(C,2),z=O[0],U=O[1],Z=function(){var te;U((te=F.current)===null||te===void 0?void 0:te.getInfo())};return u.createElement(u.Fragment,null,u.createElement(m,{onClick:Z},"\u83B7\u53D6\u8868\u683C\u4FE1\u606F"),u.createElement("p",null,JSON.stringify(z)),u.createElement(d,{ref:F,api:i,columns:$}))}});case 15:case"end":return f.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(u,2)),antd:I},renderOpts:{compile:function(){var l=S()(o()().mark(function d(){var a,n=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return l.apply(this,arguments)}return r}()}}}},537:function(Y,A,e){"use strict";e.r(A),e.d(A,{demos:function(){return u}});var c=e(15009),R=e.n(c),x=e(99289),E=e.n(x),o=e(67294),s=e(72573),S=e(4816),u={"docs-f-local-store-demo-0":{component:o.memo(o.lazy(E()(R()().mark(function h(){var I,p,l,r,d;return R()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return I=n.sent,p=I.FLocalStore,n.next=6,Promise.resolve().then(e.bind(e,4816));case 6:return l=n.sent,r=l.Button,d=l.Space,n.abrupt("return",{default:function(){var t=function(i){i==="demo1"&&p.setItem({key:"demoKey",value:{name:"fas"}}),i==="demo2"&&p.setItem({key:"demoKey",value:"fas,duration5000",duration:5e3}),i==="demo3"&&p.removeItem("demoKey"),i==="demo4"&&console.log(p.getItem("demoKey"))};return o.createElement(d,null,o.createElement(r,{onClick:function(){return t("demo1")}},"\u5B58\u50A8\u5185\u5BB9"),o.createElement(r,{onClick:function(){return t("demo2")}},"\u5B58\u50A8\u5185\u5BB9\uFF08\u4E94\u79D2\u8FC7\u671F\uFF09"),o.createElement(r,{onClick:function(){return t("demo3")}},"\u6E05\u7A7A\u5B58\u50A8"),o.createElement(r,{onClick:function(){return t("demo4")}},"\u6253\u5370\u5B58\u50A8\u5185\u5BB9"))}});case 10:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-local-store-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FLocalStore } from 'izid'
import { Button, Space } from 'antd'

export default () => {
    const setLocalData = (mode) => {
        if (mode === 'demo1') {
            FLocalStore.setItem({
                key: 'demoKey',
                value: {
                    name: 'fas'
                }
            })
        }
        if (mode === 'demo2') {
            FLocalStore.setItem({
                key: 'demoKey',
                value: 'fas,duration5000',
                duration: 5 * 1000
            })
        }
        if (mode === 'demo3') {
            FLocalStore.removeItem('demoKey')
        }
        if (mode === 'demo4') {
            console.log(FLocalStore.getItem('demoKey'))
        }
    }

    return <Space>
        <Button onClick={() => setLocalData('demo1')}>\u5B58\u50A8\u5185\u5BB9</Button>
        <Button onClick={() => setLocalData('demo2')}>\u5B58\u50A8\u5185\u5BB9\uFF08\u4E94\u79D2\u8FC7\u671F\uFF09</Button>
        <Button onClick={() => setLocalData('demo3')}>\u6E05\u7A7A\u5B58\u50A8</Button>
        <Button onClick={() => setLocalData('demo4')}>\u6253\u5370\u5B58\u50A8\u5185\u5BB9</Button>
    </Space>
}`},izid:{type:"NPM",value:"0.1.26"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:s,antd:S},renderOpts:{compile:function(){var h=E()(R()().mark(function p(){var l,r=arguments;return R()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,r));case 3:case"end":return a.stop()}},p)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-local-store-demo-1":{component:o.memo(o.lazy(E()(R()().mark(function h(){var I,p,l,r,d;return R()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return I=n.sent,p=I.FLocalStore,n.next=6,Promise.resolve().then(e.bind(e,4816));case 6:return l=n.sent,r=l.Button,d=l.Space,n.abrupt("return",{default:function(){var t=function(i){i==="demo1"&&p.setItem({key:"demoKey",value:{name:"fas"},local:!1}),i==="demo2"&&p.setItem({key:"demoKey",value:"fas,duration5000",duration:5e3,local:!1}),i==="demo3"&&p.removeItem("demoKey"),i==="demo4"&&console.log(p.getItem("demoKey"))};return o.createElement(d,null,o.createElement(r,{onClick:function(){return t("demo1")}},"\u5B58\u50A8\u5185\u5BB9"),o.createElement(r,{onClick:function(){return t("demo2")}},"\u5B58\u50A8\u5185\u5BB9\uFF08\u4E94\u79D2\u8FC7\u671F\uFF09"),o.createElement(r,{onClick:function(){return t("demo3")}},"\u6E05\u7A7A\u5B58\u50A8"),o.createElement(r,{onClick:function(){return t("demo4")}},"\u6253\u5370\u5B58\u50A8\u5185\u5BB9"))}});case 10:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-local-store-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FLocalStore } from 'izid'
import { Button, Space } from 'antd'

export default () => {
    const setLocalData = (mode) => {
        if (mode === 'demo1') {
            FLocalStore.setItem({
                key: 'demoKey',
                value: {
                    name: 'fas'
                },
                local: false
            })
        }
        if (mode === 'demo2') {
            FLocalStore.setItem({
                key: 'demoKey',
                value: 'fas,duration5000',
                duration: 5 * 1000,
                local: false
            })
        }
        if (mode === 'demo3') {
            FLocalStore.removeItem('demoKey')
        }
        if (mode === 'demo4') {
            console.log(FLocalStore.getItem('demoKey'))
        }
    }

    return <Space>
        <Button onClick={() => setLocalData('demo1')}>\u5B58\u50A8\u5185\u5BB9</Button>
        <Button onClick={() => setLocalData('demo2')}>\u5B58\u50A8\u5185\u5BB9\uFF08\u4E94\u79D2\u8FC7\u671F\uFF09</Button>
        <Button onClick={() => setLocalData('demo3')}>\u6E05\u7A7A\u5B58\u50A8</Button>
        <Button onClick={() => setLocalData('demo4')}>\u6253\u5370\u5B58\u50A8\u5185\u5BB9</Button>
    </Space>
}`},izid:{type:"NPM",value:"0.1.26"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:s,antd:S},renderOpts:{compile:function(){var h=E()(R()().mark(function p(){var l,r=arguments;return R()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,r));case 3:case"end":return a.stop()}},p)}));function I(){return h.apply(this,arguments)}return I}()}}}},46477:function(Y,A,e){"use strict";var c;e.r(A),e.d(A,{demos:function(){return r}});var R=e(5574),x=e.n(R),E=e(15009),o=e.n(E),s=e(99289),S=e.n(s),u=e(67294),h=e(72573),I=e(4816),p=e(21322),l=e.n(p),r={"docs-pwd-score-demo-0":{component:u.memo(u.lazy(S()(o()().mark(function d(){var a,n;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return a=t.sent,n=a.PwdScore,t.abrupt("return",{default:function(){return u.createElement(u.Fragment,null,u.createElement(n,null),u.createElement(n,{value:0}),u.createElement(n,{value:1}),u.createElement(n,{value:2}),u.createElement(n,{value:3}),u.createElement(n,{value:4}))}});case 5:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore />
        <PwdScore value={0} />
        <PwdScore value={1} />
        <PwdScore value={2} />
        <PwdScore value={3} />
        <PwdScore value={4} />
    </>
}`},izid:{type:"NPM",value:"0.1.26"}},entry:"index.jsx"},context:{izid:h},renderOpts:{compile:function(){var d=S()(o()().mark(function n(){var v,t=arguments;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(250).then(e.bind(e,90250));case 2:return i.abrupt("return",(v=i.sent).default.apply(v,t));case 3:case"end":return i.stop()}},n)}));function a(){return d.apply(this,arguments)}return a}()}},"docs-pwd-score-demo-1":{component:u.memo(u.lazy(S()(o()().mark(function d(){var a,n,v,t,m,i,P;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return a=y.sent,n=a.PwdScore,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return v=y.sent,t=v.useMemo,m=v.useState,y.next=11,Promise.resolve().then(e.bind(e,4816));case 11:return i=y.sent,P=i.Button,y.abrupt("return",{default:function(){var $=m(),C=x()($,2),O=C[0],z=C[1],U=t(function(){return[{color:"#a0133d",label:"\u975E\u5E38\u5F31",value:11},{color:"#2f9715",label:"\u5F3A",value:13},{color:"#ffa500",label:"\u4E00\u822C",value:12}]},[]),Z=function(){if(O===void 0)return z(11);if(O===13)return z(void 0);z(O+1)};return u.createElement(u.Fragment,null,u.createElement(n,{value:O,scoreList:U}),u.createElement(P,{onClick:Z},"\u8C03\u6574\u5F3A\u5EA6"))}});case 14:case"end":return y.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(u,2)),antd:I},renderOpts:{compile:function(){var d=S()(o()().mark(function n(){var v,t=arguments;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(250).then(e.bind(e,90250));case 2:return i.abrupt("return",(v=i.sent).default.apply(v,t));case 3:case"end":return i.stop()}},n)}));function a(){return d.apply(this,arguments)}return a}()}},"docs-pwd-score-demo-2":{component:u.memo(u.lazy(S()(o()().mark(function d(){var a,n;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return a=t.sent,n=a.PwdScore,t.abrupt("return",{default:function(){return u.createElement(u.Fragment,null,u.createElement(n,{value:0,reverse:!0}),u.createElement(n,{value:1,reverse:!0}),u.createElement(n,{value:2,reverse:!0}),u.createElement(n,{value:3,reverse:!0}),u.createElement(n,{value:4,reverse:!0}))}});case 5:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore value={0} reverse />
        <PwdScore value={1} reverse />
        <PwdScore value={2} reverse />
        <PwdScore value={3} reverse />
        <PwdScore value={4} reverse />
    </>
}`},izid:{type:"NPM",value:"0.1.26"}},entry:"index.jsx"},context:{izid:h},renderOpts:{compile:function(){var d=S()(o()().mark(function n(){var v,t=arguments;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(250).then(e.bind(e,90250));case 2:return i.abrupt("return",(v=i.sent).default.apply(v,t));case 3:case"end":return i.stop()}},n)}));function a(){return d.apply(this,arguments)}return a}()}},"docs-pwd-score-demo-3":{component:u.memo(u.lazy(S()(o()().mark(function d(){var a,n,v,t,m,i,P,f,y,F,$,C;return o()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,Promise.resolve().then(e.bind(e,72573));case 2:return a=z.sent,n=a.PwdScore,v=a.FAntdInput,z.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return t=z.sent,m=t.useState,z.next=11,Promise.resolve().then(e.t.bind(e,21322,23));case 11:return i=z.sent,P=i.default,z.next=15,Promise.resolve().then(e.bind(e,4816));case 15:return f=z.sent,y=f.Form,F=f.Button,$=f.Input,C=f.Flex,z.abrupt("return",{default:function(){var Z=m(),Q=x()(Z,2),te=Q[0],de=Q[1],oe=m({}),ce=x()(oe,2),le=ce[0],ue=ce[1],ee=m(""),me=x()(ee,2),pe=me[0],ae=me[1],ve=function(){de(pe?P(pe).score:void 0)};return u.createElement(u.Fragment,null,u.createElement(y,{layout:"vertical",onFinish:ue},u.createElement(y.Item,{name:"password",label:u.createElement(C,{align:"center"},u.createElement("span",null,"\u5BC6\u7801"),u.createElement(n,{value:te})),rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},function(Ie){var $e=Ie.getFieldValue;return{validator:function(Be,g){return!g||te>=1?Promise.resolve():Promise.reject("\u5BC6\u7801\u5F3A\u5EA6\u592A\u5F31")}}}]},u.createElement(v.Password,{state:[pe,ae],onChange:ve})),u.createElement(y.Item,null,u.createElement(F,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4"))),"\u63D0\u4EA4\u6570\u636E\uFF1A",JSON.stringify(le))}});case 21:case"end":return z.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore, FAntdInput } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.26"},react:{type:"NPM",value:"19.2.4"},zxcvbn:{type:"NPM",value:"4.4.2"},antd:{type:"NPM",value:"6.2.3"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(u,2)),zxcvbn:p,antd:I},renderOpts:{compile:function(){var d=S()(o()().mark(function n(){var v,t=arguments;return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(250).then(e.bind(e,90250));case 2:return i.abrupt("return",(v=i.sent).default.apply(v,t));case 3:case"end":return i.stop()}},n)}));function a(){return d.apply(this,arguments)}return a}()}}}},11171:function(Y,A,e){"use strict";e.r(A),e.d(A,{demos:function(){return R}});var c=e(67294),R={}},72573:function(Y,A,e){"use strict";e.r(A),e.d(A,{Demo:function(){return R},DemoLog:function(){return le},FAntdInput:function(){return P},FAntdOrderTable:function(){return ce},FAntdTable:function(){return O},FLocalStore:function(){return Be},PwdScore:function(){return Z}});var c=e(85893),R=function(){return(0,c.jsx)(c.Fragment,{children:"This is a demo component."})},x=e(97857),E=e.n(x),o=e(13769),s=e.n(o),S=e(28775),u=e(17691),h=e(67294),I=e(111),p=e(14615),l=["state","onChange"],r=["state","onInput"],d=["state","onChange","mode","strict"],a=function(T,D){var B=T.state,b=T.onChange,M=s()(T,l);return E()({ref:D,allowClear:!0,value:B==null?void 0:B[0],onChange:function(H){var J;H.target.value=(J=H.target.value)===null||J===void 0?void 0:J.trim();for(var V=arguments.length,w=new Array(V>1?V-1:0),K=1;K<V;K++)w[K-1]=arguments[K];B==null||B[1].apply(B,[H.target.value].concat(w)),b==null||b.apply(void 0,[H].concat(w))}},M)},n=(0,h.forwardRef)(function(g,T){return(0,c.jsx)(S.Z,E()({placeholder:"\u8BF7\u8F93\u5165"},a(g,T)))}),v=S.Z.$$typeof,t=S.Z.render,m=s()(S.Z,["$$typeof","render"]);for(var i in m)n[i]=S.Z[i];n.Password=(0,h.forwardRef)(function(g,T){return(0,c.jsx)(S.Z.Password,E()({placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},a(g,T)))}),n.Search=(0,h.forwardRef)(function(g,T){var D,B,b,M=function(){for(var w,K=arguments.length,X=new Array(K),N=0;N<K;N++)X[N]=arguments[N];(w=g.onSearch)===null||w===void 0||w.call.apply(w,[g].concat(X))},G=(0,I.Z)(M,(D=g.throttleDuration)!==null&&D!==void 0?D:0,{trailing:(B=g.throttleTrailing)!==null&&B!==void 0?B:!1}),H=(0,h.useCallback)((0,p.Z)(M,(b=g.debounceDuration)!==null&&b!==void 0?b:500),[]),J=function(w){var K;g.autoSearch&&H(w.target.value),(K=g.onInput)===null||K===void 0||K.call(g,w)};return(0,c.jsx)(S.Z.Search,E()(E()({placeholder:g.autoSearch?"\u8F93\u5165\u540E\u81EA\u52A8\u641C\u7D22":"\u8BF7\u8F93\u5165"},a(g,T)),{},{onSearch:G,onInput:J}))}),n.TextArea=(0,h.forwardRef)(function(g,T){return(0,c.jsx)(S.Z.TextArea,E()(E()({placeholder:"\u8BF7\u8F93\u5165",showCount:!0,maxLength:100},a(g,T)),{},{style:E()({height:100},g==null?void 0:g.style)}))}),n.OTP=(0,h.forwardRef)(function(g,T){var D=g.state,B=g.onInput,b=s()(g,r);return(0,c.jsx)(S.Z.OTP,E()(E()({ref:T,value:D==null?void 0:D[0]},b),{},{onInput:function(G){D==null||D[1](G.join("")),B&&B(G)}}))}),n.Number=(0,h.forwardRef)(function(g,T){var D=g.state,B=g.onChange,b=g.mode,M=g.strict,G=s()(g,d),H=function(V){D==null||D[1](V),B&&B(V)};return(0,c.jsx)(u.Z,E()({value:D==null?void 0:D[0],onChange:H,placeholder:"\u8BF7\u8F93\u5165",ref:T,keyboard:!0,changeOnWheel:!0,min:M?0:void 0,max:b==="percent"&&M?100:void 0,step:M?1:.1,precision:M?0:void 0,suffix:b==="percent"?"%":void 0,prefix:b==="price"?"\uFFE5":void 0},G))});var P=n,f=e(5574),y=e.n(f),F=e(68694),$=["api","apiData","checkboxState","radioState","filter","getApiData","requestValid","requestPageConfig","successValid","mapperOptions","initPageSize","initCurrent","autoInit","pagination","columns","rowSelection","dataSource"],C=(0,h.forwardRef)(function(g,T){var D=g.api,B=g.apiData,b=g.checkboxState,M=g.radioState,G=g.filter,H=G===void 0?function(L){return!0}:G,J=g.getApiData,V=J===void 0?function(L){return L}:J,w=g.requestValid,K=w===void 0?function(L){return!0}:w,X=g.requestPageConfig,N=X===void 0?function(L,j){return{current:L,pageSize:j}}:X,W=g.successValid,he=W===void 0?function(L){return L.code==="0"}:W,Fe=g.mapperOptions,ge=Fe===void 0?{total:"total",data:"data"}:Fe,Se=g.initPageSize,fe=Se===void 0?10:Se,Pe=g.initCurrent,se=Pe===void 0?1:Pe,Me=g.autoInit,qe=Me===void 0?!0:Me,Re=g.pagination,Ee=Re===void 0?{}:Re,Le=g.columns,Ce=Le===void 0?[]:Le,k=g.rowSelection,ie=g.dataSource,ye=s()(g,$),_e=(0,h.useState)(fe),je=y()(_e,2),xe=je[0],en=je[1],nn=(0,h.useState)(se),Ke=y()(nn,2),Ae=Ke[0],tn=Ke[1],an=(0,h.useState)(0),Ne=y()(an,2),rn=Ne[0],dn=Ne[1],on=(0,h.useState)(!1),We=y()(on,2),ln=We[0],Ue=We[1],un=(0,h.useState)([]),Ve=y()(un,2),De=Ve[0],we=Ve[1],re=(0,h.useCallback)(function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},j=L.current,ne=j===void 0?Ae:j,q=L.pageSize,_=q===void 0?xe:q,He=L.data,mn=He===void 0?B:He,Je=L.otherData,pn=Je===void 0?{}:Je,vn=!D&&ie;if(vn)return Promise.resolve();var Qe=Object.assign({},N(ne,_),mn,pn);if(K(Qe)){Ue(!0);var In=ne,fn=_;return D(Qe).then(function(Ye){var ke=V(Ye);if(he(ke)&&In===ne&&fn===_){var Oe,yn=((Oe=ke[ge.data])!==null&&Oe!==void 0?Oe:[]).filter(H);dn(Ye[ge.total]),we(yn),tn(ne),en(_)}}).finally(function(){Ue(!1)})}},[B,D,V,K,N,he,ge,H,ie]),Xe=(0,h.useCallback)(function(L){return re({current:se,pageSize:xe,otherData:L})},[se,xe,re]),Ze=(0,h.useCallback)(function(L){return re({current:se,pageSize:fe,data:{},otherData:L})},[se,fe,re]),Ge=(0,h.useCallback)(function(L){return re({otherData:L})},[re]),ze=(0,h.useCallback)(function(){return{tableData:De,configCurrent:Ae,configPageSize:xe,selected:ye!=null&&ye.rowKey?De.filter(function(L){if(M)return L[ye.rowKey]===M[0];if(b){var j=b[0];return j.includes(L[ye.rowKey])}}):void 0}},[De,Ae,xe,b,M]),sn=(0,h.useCallback)(function(){return ze().selected},[ze]),be=(0,h.useRef)();(0,h.useImperativeHandle)(T,function(){var L,j;return{getTableData:re,init:Xe,reload:Ge,reset:Ze,getInfo:ze,getSelected:sn,nativeElement:(L=be.current)===null||L===void 0?void 0:L.nativeElement,scrollTo:(j=be.current)===null||j===void 0?void 0:j.scrollTo}},[re,Xe,Ge,Ze,be,ze]);var cn=(0,h.useMemo)(function(){return b?E()(E()({type:"checkbox",selectedRowKeys:b[0]},k!=null?k:{}),{},{onChange:function(){for(var j,ne=arguments.length,q=new Array(ne),_=0;_<ne;_++)q[_]=arguments[_];b[1](q[0]),k==null||(j=k.onChange)===null||j===void 0||j.call.apply(j,[k].concat(q))}}):M?E()(E()({type:"radio",selectedRowKeys:[M[0]]},k!=null?k:{}),{},{onChange:function(){for(var j,ne=arguments.length,q=new Array(ne),_=0;_<ne;_++)q[_]=arguments[_];M[1](q[0][0]),k==null||(j=k.onChange)===null||j===void 0||j.call.apply(j,[k].concat(q))}}):k},[b,M,k]);return(0,h.useEffect)(function(){qe&&!ie&&re()},[]),(0,h.useEffect)(function(){ie&&we(ie)},[ie]),(0,c.jsx)(F.Z,E()(E()({ref:be,loading:ln,dataSource:ie!=null?ie:De},ye),{},{rowSelection:cn,columns:Ce==null?void 0:Ce.map(function(L){var j;return L.key=(j=L.key)!==null&&j!==void 0?j:L.dataIndex,L}),pagination:Ee===!1?!1:E()(E()({showSizeChanger:!0,current:Ae,pageSize:xe,total:rn,pageSizeOptions:[5,10,20,50]},Ee),{},{onChange:function(j,ne){var q;re({current:j,pageSize:ne}),(q=Ee.onChange)===null||q===void 0||q.call(Ee,j,ne),M&&M[1](void 0),b&&b[1]([])}})}))}),O=C,z={"pwd-score__wrapper":"ECZRO8sIboA2Jvnzyv_S","pwd-score__item":"VU4c6Mn96G89buIwnU4M","pwd-score__text":"mstSfTCI_kUSytZ2oNZG"},U=function(T){var D=T.value,B=T.scoreList,b=B===void 0?[{color:"#a0133d",label:"\u975E\u5E38\u5F31",value:0},{color:"#f7e84d",label:"\u8F83\u5F31",value:1},{color:"#ffa500",label:"\u4E00\u822C",value:2},{color:"#1677ff",label:"\u8F83\u5F3A",value:3},{color:"#2f9715",label:"\u5F3A",value:4}]:B,M=T.defaultColor,G=M===void 0?"#e2e2e2":M,H=T.reverse,J=H===void 0?!1:H,V=(0,h.useMemo)(function(){return b.sort(function(X,N){return X.value>N.value?J?-1:1:X.value<N.value?J?1:-1:0})},[b,J]),w=(0,h.useCallback)(function(X){var N=V.findIndex(function(W){return W.value===D});return N===X?V[X].color:G},[D,b]),K=(0,h.useMemo)(function(){var X;return(X=V.find(function(N){return N.value===D}))===null||X===void 0?void 0:X.label},[D,b]);return(0,c.jsxs)("div",{className:z["pwd-score__wrapper"],children:[Array.from({length:V.length},function(X,N){return(0,c.jsx)("div",{className:z["pwd-score__item"],style:{backgroundColor:w(N)}},"pwd-score:"+N)}),(0,c.jsx)("span",{className:z["pwd-score__text"],style:{opacity:+!!K},children:K!=null?K:"\u65E0"})]})},Z=U,Q={"table-tr__action-content":"WDUdr4YWFPgrL1jr_TcA","action-content__info":"Zy6XaXPuPGoOQGuKXA9r","action-content__item":"CuxqxKq6pw0Bf3SLqCjD","order-body_td":"X1OWv6o0pEijXwqe8ZVU","order-body_tr":"qBIN1Vcf0IsOpfXt3sKS",dark:"VuZ0QcgBeuQI7ua0zATw"},te=["headerRender","headerOptions"],de=["children","className","style"],oe=(0,h.forwardRef)(function(g,T){var D=g.headerRender,B=g.headerOptions,b=s()(g,te),M=function(W){return(0,c.jsx)("table",E()(E()({},W),{},{style:E()(E()({},W.style),{},{borderCollapse:"collapse"})}))},G=function(W){return(0,c.jsx)("thead",E()({},W))},H=function(W){return(0,c.jsx)("tr",E()({},W))},J=function(W){return(0,c.jsx)("th",E()({},W))},V=function(W){return(0,c.jsx)("tbody",E()({},W))},w=function(W){return(0,c.jsx)("td",E()(E()({},W),{},{style:E()(E()({},W.style),{},{borderRightStyle:"solid",borderRightWidth:"1px"}),className:Q["order-body_td"]}))},K=function(W){var he=W.children,Fe=W.className,ge=W.style,Se=s()(W,de),fe;if("data-row-key"in W){var Pe=he.at(-1);Pe&&(fe=Pe.props.record)}return(0,c.jsxs)(c.Fragment,{children:[fe&&(D||B)&&(0,c.jsx)("tr",E()(E()({},Se),{},{"data-row-key":W["data-row-key"]+"/children",children:(0,c.jsx)("td",{colSpan:"9",style:{padding:"0"},children:(0,c.jsxs)("div",{className:"".concat(Q["table-tr__action-content"]),children:[(0,c.jsx)("div",{className:Q["action-content__info"],children:D==null?void 0:D.map(function(se){return(0,c.jsxs)("span",{className:Q["action-content__item"],children:[se.label,"\uFF1A",se.render(fe)]},se.label)})}),B&&B(fe)]})})})),(0,c.jsx)("tr",E()(E()({},Se),{},{style:{style:ge,borderStyle:"solid",borderWidth:"1px 0 0 1px"},className:Q["order-body_tr"],children:he}))]})},X=(0,h.useRef)({table:M,header:{wrapper:G,row:H,cell:J},body:{wrapper:V,row:K,cell:w}});return(0,c.jsx)(O,E()({ref:T,components:X.current},b))}),ce=oe,le=function(){console.log("This is a demo log")},ue=e(81354),ee=e.n(ue),me=new Map,pe=function(T,D){return ee().AES.encrypt(JSON.stringify({value:T}),D).toString()},ae=function(T,D){var B,b;return(B=JSON.parse((b=ee().AES.decrypt(T,D).toString(ee().enc.Utf8))!==null&&b!==void 0?b:""))===null||B===void 0?void 0:B.value},ve=function(T,D){return ee().PBKDF2(T,D,{keySize:128,iterations:128})+""},Ie=function(T){var D=T.key,B=T.value,b=T.duration,M=b===void 0?-1:b,G=T.local,H=G===void 0?!0:G,J=ee().lib.WordArray.random(128),V=ve(D,J),w=pe(B,V),K=ee().SHA3(D)+"",X=pe({value:w,vi:{delay:M===-1?M:Date.now()+M,salt:J}},D);H?localStorage.setItem(K,X):me.set(K,X)},$e=function(T){var D=function(b){var M=ee().SHA3(b)+"",G=me.get(M),H=localStorage.getItem(M);if(H&&!G&&(G=H),!!G){var J=ae(G,b),V=J.vi,w=V.delay,K=V.salt,X=J.value;if(w!==-1&&Date.now()>w)return Te(b);var N=ve(b,K);return ae(X,N)}};return Array.isArray(T)?T.map(D):D(T)},Te=function(T){var D=function(b){var M=String(ee().SHA3(b));me.delete(M),localStorage.removeItem(M)};Array.isArray(T)?T.forEach(D):D(T)},Be={setItem:Ie,getItem:$e,removeItem:Te}},6627:function(Y,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2ADemo\u7EC4\u4EF6\uFF0C\u7528\u6765\u505A\u6587\u6863\u793A\u4F8B",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"\u65B9\u6CD5\u540D",paraId:2,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u8BF4\u660E",paraId:3,tocIndex:6},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:8},{value:"\u8BF4\u660E",paraId:4,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:8},{value:"\u65B9\u6CD5\u540D",paraId:5,tocIndex:9},{value:"\u662F\u5426\u5FC5\u586B",paraId:5,tocIndex:9},{value:"\u8BF4\u660E",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u8BF4\u660E",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u5C5E\u6027\u540D",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:7,tocIndex:12},{value:"\u8BF4\u660E",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"\u65B9\u6CD5\u540D",paraId:8,tocIndex:13},{value:"\u662F\u5426\u5FC5\u586B",paraId:8,tocIndex:13},{value:"\u8BF4\u660E",paraId:8,tocIndex:13},{value:"\u5C5E\u6027",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14}]},76057:function(Y,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2ADemo\u5DE5\u5177\uFF0C\u7528\u6765\u505A\u6587\u6863\u793A\u4F8B",paraId:0,tocIndex:0},{value:"\u8BF7\u524D\u5F80\u63A7\u5236\u53F0\u67E5\u770B",paraId:1,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3}]},87455:function(Y,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2A\u6709\u5404\u79CD\u5E38\u89C1\u4E1A\u52A1\u573A\u666F\u7684Antd Input\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:1,tocIndex:2},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:2,tocIndex:3},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:3},{value:"debounceDuration",paraId:3},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:3},{value:"500",paraId:3},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:3},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:4,tocIndex:4},{value:"\u4F7F\u7528",paraId:5},{value:"throttleDuration",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:5},{value:"0",paraId:5},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:5},{value:"\u4F7F\u7528",paraId:5},{value:"throttleTrailing",paraId:5},{value:"\u5C5E\u6027\u63A7\u5236\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u641C\u7D22\uFF0C\u9ED8\u8BA4",paraId:5},{value:"false",paraId:5},{value:"\u5728\u8868\u5355\u4E2D\u65B9\u6CD5\u4F7F\u7528\u540CAntd Input\uFF0C\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:6,tocIndex:11},{value:"\u4F60\u4E0D\u80FD\u5728\u8868\u5355\u4E2D\u4F7F\u7528setState\u53BB\u4FEE\u6539\u8868\u5355\u57DF\u7684\u503C\uFF0C\u8BE6\u89C1\uFF1A",paraId:7},{value:"FormItem",paraId:7},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:8,tocIndex:13},{value:"Antd Input",paraId:8,tocIndex:13},{value:"\u5C5E\u6027\u540D",paraId:9,tocIndex:14},{value:"\u7C7B\u578B",paraId:9,tocIndex:14},{value:"\u662F\u5426\u5FC5\u586B",paraId:9,tocIndex:14},{value:"\u8BF4\u660E",paraId:9,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:14},{value:"state",paraId:9,tocIndex:14},{value:"string",paraId:9,tocIndex:14},{value:"false",paraId:9,tocIndex:14},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:9,tocIndex:14},{value:"\u7EC4\u4EF6\u5185\u90E8\u4F9D\u636E",paraId:10,tocIndex:15},{value:"lodash-es",paraId:10,tocIndex:15},{value:"\u4F9D\u8D56\uFF0C\u8BF7\u5148\u4F7F\u7528",paraId:10,tocIndex:15},{value:"npm install lodash-es",paraId:10,tocIndex:15},{value:"\u4E0B\u8F7D\u6240\u9700\u4F9D\u8D56 \uFF0C\u914D\u7F6E\u9879\u7EE7\u627F",paraId:10,tocIndex:15},{value:"Antd Input.Search",paraId:10,tocIndex:15},{value:"\u5C5E\u6027\u540D",paraId:11,tocIndex:16},{value:"\u7C7B\u578B",paraId:11,tocIndex:16},{value:"\u662F\u5426\u5FC5\u586B",paraId:11,tocIndex:16},{value:"\u8BF4\u660E",paraId:11,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:16},{value:"state",paraId:11,tocIndex:16},{value:"string",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:11,tocIndex:16},{value:"autoSearch",paraId:11,tocIndex:16},{value:"function",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8F93\u5165\u65F6\u662F\u5426\u81EA\u52A8\u4F7F\u7528\u9632\u6296\u641C\u7D22",paraId:11,tocIndex:16},{value:"debounceDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u5F00\u542FautoSearch\u540E\uFF0C\u9632\u6296\u65F6\u95F4",paraId:11,tocIndex:16},{value:"500",paraId:11,tocIndex:16},{value:"throttleDuration",paraId:11,tocIndex:16},{value:"number",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u89E6\u53D1\u641C\u7D22\u4E8B\u4EF6\u65F6\u8282\u6D41\u65F6\u95F4",paraId:11,tocIndex:16},{value:"0",paraId:11,tocIndex:16},{value:"throttleTrailing",paraId:11,tocIndex:16},{value:"boolean",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u8282\u6D41\u641C\u7D22\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u89E6\u53D1\u641C\u7D22",paraId:11,tocIndex:16},{value:"false",paraId:11,tocIndex:16},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:12,tocIndex:17},{value:"Antd InputNumber",paraId:12,tocIndex:17},{value:"\u5C5E\u6027\u540D",paraId:13,tocIndex:18},{value:"\u7C7B\u578B",paraId:13,tocIndex:18},{value:"\u662F\u5426\u5FC5\u586B",paraId:13,tocIndex:18},{value:"\u8BF4\u660E",paraId:13,tocIndex:18},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:18},{value:"state",paraId:13,tocIndex:18},{value:"string",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"useState\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:13,tocIndex:18},{value:"mode",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:" ",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"price",paraId:13,tocIndex:18},{value:"\u4EF7\u683C\u6A21\u5F0F\u3001",paraId:13,tocIndex:18},{value:"percent",paraId:13,tocIndex:18},{value:"\u767E\u5206\u6BD4\u6A21\u5F0F\uFF0C\u51FA\u73B0\u56FA\u5B9A\u7684\u683C\u5F0F",paraId:13,tocIndex:18},{value:"strict",paraId:13,tocIndex:18},{value:"boolean",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E25\u683C\u9650\u5236\uFF0C\u9650\u5236\u4E3A\u6B63\u6574\u6570\u3001\u6B65\u957F\u4E3A1\u3001\u767E\u5206\u6BD4\u6A21\u5F0F\u4E0B\u9650\u5236\u6700\u5927\u503C100",paraId:13,tocIndex:18},{value:"false",paraId:13,tocIndex:18},{value:"\u4E0EAntd Input.XXX\u76F8\u540C\uFF0C",paraId:14,tocIndex:19},{value:"Antd Input",paraId:14,tocIndex:19}]},8828:function(Y,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E",paraId:0,tocIndex:0},{value:"FAntdTable",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u5199\u7684\u8BA2\u5355\u8868\u683C\uFF0C\u539F\u7406\u662F\u4F7F\u7528\u4E86",paraId:0,tocIndex:0},{value:"antd table",paraId:0,tocIndex:0},{value:"\u7684\u81EA\u5B9A\u4E49",paraId:0,tocIndex:0},{value:"components",paraId:0,tocIndex:0},{value:`
\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u8BA2\u5355\u8868\u683C\u5728\u6BCF\u4E00\u9879\u6570\u636E\u7684\u5934\u90E8\u589E\u52A0\u4E86\u6570\u636E\u663E\u793A\u548C\u64CD\u4F5C\u7A7A\u95F4`,paraId:0,tocIndex:0},{value:"\u5176\u4ED6\u914D\u7F6E\u9879\u7EE7\u627F",paraId:2,tocIndex:2},{value:"FAntdTable",paraId:3,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"headerRender",paraId:4,tocIndex:3},{value:"{label: string, render: row => React}[]",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"\u5934\u90E8\u6570\u636E\u7684\u663E\u793A\u533A\u57DF",paraId:4,tocIndex:3},{value:"headerOptions",paraId:4,tocIndex:3},{value:"row => React",paraId:4,tocIndex:3},{value:"false",paraId:4,tocIndex:3},{value:"\u5934\u90E8\u6570\u636E\u7684\u64CD\u4F5C\u533A\u57DF",paraId:4,tocIndex:3}]},12808:function(Y,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"FAntdTable",paraId:0,tocIndex:0},{value:"\u662F\u5BF9Antd Table\u7684\u5C01\u88C5\uFF0C\u53EA\u9700\u8981\u6709api\u548Ccolumns\u5C5E\u6027\u5C31\u80FD\u5FEB\u901F\u6E32\u67D3\u51FA\u4E00\u4E2A\u5206\u9875\u8868\u683C\uFF0C\u5BF9Antd Table\u539F\u751F\u6539\u52A8\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"\u5185\u7F6E",paraId:1,tocIndex:0},{value:"api",paraId:1,tocIndex:0},{value:"\u8BF7\u6C42\uFF0C\u53EF\u4F7F\u7528",paraId:1,tocIndex:0},{value:"ref",paraId:1,tocIndex:0},{value:"\u63A7\u5236\u8BF7\u6C42",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\u4E0D\u5B58\u5728",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u65F6\uFF0C\u5982\u679C",paraId:1,tocIndex:0},{value:"dataIndex",paraId:1,tocIndex:0},{value:"\u6709\u503C\uFF0C\u5219\u81EA\u52A8\u5C06",paraId:1,tocIndex:0},{value:"dataIndex",paraId:1,tocIndex:0},{value:"\u5F53\u4F5C",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"checkboxState",paraId:1,tocIndex:0},{value:"\u548C",paraId:1,tocIndex:0},{value:"radioState",paraId:1,tocIndex:0},{value:"\u80FD\u66F4\u5FEB\u7684\u4F7F\u7528\u591A\u9009/\u5355\u9009",paraId:1,tocIndex:0},{value:"\u6709\u4E00\u5957\u9ED8\u8BA4\u7684\u5B57\u6BB5\u6620\u5C04\u3001\u521D\u59CB\u5206\u9875\u914D\u7F6E\uFF0C\u89C1\u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:0},{value:"\u6CE8\u610F\u4EE5\u4E0B\u89C4\u5B9A\uFF1A",paraId:2},{value:"\u5206\u9875\u53C2\u6570\u4E3Acurrent\u3001pageSize",paraId:3},{value:"api",paraId:3},{value:"\u8FD4\u56DE\u7684\u662F\u63A5\u53E3\u6570\u636E\uFF0C\u800C\u4E0D\u662F",paraId:3},{value:"response",paraId:3},{value:"\u6210\u529F\u72B6\u6001\u4E3A",paraId:3},{value:"code==='0'",paraId:3},{value:"\u603B\u6570\u636E\u6761\u6570\u5B57\u6BB5\u4E3A",paraId:3},{value:"total",paraId:3},{value:"\u6570\u636E\u5B57\u6BB5\u4E3A",paraId:3},{value:"data",paraId:3},{value:"\u5047\u8BBE\u63A5\u53E3\u8FD4\u56DEresponse\u5BF9\u8C61\uFF0C\u5206\u9875\u53C2\u6570\u4E3ApageSearch: { limit, page }\uFF0C\u8FD4\u56DE\u4F53\u91CC\u9762\u662Fsize\u548Crecords\uFF0C\u6210\u529F\u6761\u4EF6\u4E3Acode==='OK'",paraId:4,tocIndex:2},{value:"\u7ED1\u5B9A",paraId:5,tocIndex:4},{value:"checkboxState",paraId:5,tocIndex:4},{value:"\u548C",paraId:5,tocIndex:4},{value:"rowKey",paraId:5,tocIndex:4},{value:"\u5373\u53EF\uFF0C\u60F3\u8981\u83B7\u53D6\u9009\u4E2D\u7684\u5168\u90E8\u6570\u636E\u53EF\u4EE5\u4F7F\u7528",paraId:5,tocIndex:4},{value:"ref",paraId:5,tocIndex:4},{value:"\u4E2D\u7684",paraId:5,tocIndex:4},{value:"getSelected",paraId:5,tocIndex:4},{value:"\u65B9\u6CD5",paraId:5,tocIndex:4},{value:"\u4E0E\u591A\u9009\u7C7B\u4F3C\uFF0C\u7ED1\u5B9A",paraId:6,tocIndex:5},{value:"radioState",paraId:6,tocIndex:5},{value:"\u4EE5\u5FEB\u901F\u5B9E\u73B0\u5355\u9009\uFF0C\u7ED1\u5B9A\u503C\u4E3A",paraId:6,tocIndex:5},{value:"rowKey",paraId:6,tocIndex:5},{value:"\u7684\u503C\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6570\u7EC4",paraId:6,tocIndex:5},{value:"\u4F7F\u7528",paraId:7,tocIndex:6},{value:"filter",paraId:7,tocIndex:6},{value:"\u8FC7\u6EE4\u6389\u7B2C\u4E94\u6761\u6570\u636E",paraId:7,tocIndex:6},{value:"\u4F7F\u7528",paraId:8,tocIndex:7},{value:"requestValid",paraId:8,tocIndex:7},{value:"\u62E6\u622A\u7B2C\u4E8C\u9875\u7684\u8BF7\u6C42",paraId:8,tocIndex:7},{value:"\u5728",paraId:9,tocIndex:8},{value:"ref",paraId:9,tocIndex:8},{value:"\u5BF9\u8C61\u4E2D\u7684\u5404\u4E2A\u5237\u65B0\u65B9\u6CD5\u4E0A\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61\u5373\u53EF\uFF0C\u4F1A\u88AB\u5F53\u4F5C\u989D\u5916\u7684\u4E34\u65F6\u67E5\u8BE2\u53C2\u6570",paraId:9,tocIndex:8},{value:"\u53EF\u53C2\u8003",paraId:10,tocIndex:10},{value:"Antd Table",paraId:10,tocIndex:10},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:11,tocIndex:11},{value:"Antd Table",paraId:11,tocIndex:11},{value:"\u5C5E\u6027\u540D",paraId:12,tocIndex:12},{value:"\u7C7B\u578B",paraId:12,tocIndex:12},{value:"\u662F\u5426\u5FC5\u586B",paraId:12,tocIndex:12},{value:"\u8BF4\u660E",paraId:12,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:12},{value:"api",paraId:12,tocIndex:12},{value:"apiData => Promise",paraId:12,tocIndex:12},{value:"\u662F",paraId:12,tocIndex:12},{value:"\u83B7\u53D6\u8868\u683C\u6570\u636E\u7684\u63A5\u53E3\u51FD\u6570",paraId:12,tocIndex:12},{value:"apiData",paraId:12,tocIndex:12},{value:"object",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"api\u51FD\u6570\u8BF7\u6C42\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A",paraId:12,tocIndex:12},{value:"apiData",paraId:12,tocIndex:12},{value:" + ",paraId:12,tocIndex:12},{value:"requestPageConfig",paraId:12,tocIndex:12},{value:"checkboxState",paraId:12,tocIndex:12},{value:"array",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u591A\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:12,tocIndex:12},{value:"radioState",paraId:12,tocIndex:12},{value:"array",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u5355\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:12,tocIndex:12},{value:"filter",paraId:12,tocIndex:12},{value:"itemData => boolean",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u8FC7\u6EE4\u8868\u683C\u6570\u636E\uFF0C\u540C",paraId:12,tocIndex:12},{value:"Array.filter",paraId:12,tocIndex:12},{value:"data => true",paraId:12,tocIndex:12},{value:"getApiData",paraId:12,tocIndex:12},{value:"response => object",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u8FD4\u56DE\u540E\u7AEF\u63A5\u53E3\u54CD\u5E94\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u6D4F\u89C8\u5668response\uFF08\u5982\u679C\u63A5\u53E3\u8FD4\u56DE\u662Fresponse\uFF0C\u5EFA\u8BAE\u53BB\u8C03\u6574\u54CD\u5E94\u62E6\u622A\u5668\uFF0C\u65E0\u6CD5\u8C03\u6574\u62E6\u622A\u5668\u53EF\u4EE5\u6539\u4E3A",paraId:12,tocIndex:12},{value:"response => response.data",paraId:12,tocIndex:12},{value:"\uFF09",paraId:12,tocIndex:12},{value:"response => response",paraId:12,tocIndex:12},{value:"requestValid",paraId:12,tocIndex:12},{value:"requestArgs => boolean",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u662F\u5426\u8FDB\u884C\u8BF7\u6C42\uFF0C\u53EF\u7528\u4E8E\u5728\u4E0D\u6EE1\u8DB3\u8BF7\u6C42\u6761\u4EF6\u65F6\u62E6\u622A\u8BF7\u6C42\uFF0C",paraId:12,tocIndex:12},{value:"requestArgs",paraId:12,tocIndex:12},{value:"\u63A5\u53E3\u8BF7\u6C42\u53C2\u6570",paraId:12,tocIndex:12},{value:"requestArgs => true",paraId:12,tocIndex:12},{value:"requestPageConfig",paraId:12,tocIndex:12},{value:"(current, pageSize) => object",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u8FD4\u56DE\u4F20\u9012\u63A5\u53E3\u7684\u5206\u9875\u914D\u7F6E\uFF0C\u9ED8\u8BA4",paraId:12,tocIndex:12},{value:"current, pageSize",paraId:12,tocIndex:12},{value:"\u53C2\u6570\uFF0Ccurrent\u5F53\u524D\u9875\uFF0CpageSize\u5F53\u524D\u6761\u6570",paraId:12,tocIndex:12},{value:"(current, pageSize) => ({ current, pageSize })",paraId:12,tocIndex:12},{value:"successValid",paraId:12,tocIndex:12},{value:"response => boolean",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6210\u529F\uFF0C\u9ED8\u8BA4\u5224\u65AD\u54CD\u5E94\u6570\u636E\u4E2D\u7684",paraId:12,tocIndex:12},{value:"code",paraId:12,tocIndex:12},{value:"\u4E3A\u5B57\u7B26\u4E32",paraId:12,tocIndex:12},{value:"0",paraId:12,tocIndex:12},{value:"data => data.code === '0'",paraId:12,tocIndex:12},{value:"mapperOptions",paraId:12,tocIndex:12},{value:"object",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u8868\u683C\u6570\u636E\u6620\u5C04\u5B57\u6BB5\u540D\u79F0",paraId:12,tocIndex:12},{value:"{ total: 'total', data: 'data' }",paraId:12,tocIndex:12},{value:"initPageSize",paraId:12,tocIndex:12},{value:"number",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u6761\u6570",paraId:12,tocIndex:12},{value:"10",paraId:12,tocIndex:12},{value:"initCurrent",paraId:12,tocIndex:12},{value:"number",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u9875\u6570",paraId:12,tocIndex:12},{value:"1",paraId:12,tocIndex:12},{value:"autoInit",paraId:12,tocIndex:12},{value:"boolean",paraId:12,tocIndex:12},{value:"\u5426",paraId:12,tocIndex:12},{value:"\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u8868\u683C\u6570\u636E",paraId:12,tocIndex:12},{value:"true",paraId:12,tocIndex:12},{value:"\u65B9\u6CD5\u540D",paraId:13,tocIndex:13},{value:"\u8BF4\u660E",paraId:13,tocIndex:13},{value:"\u7C7B\u578B",paraId:13,tocIndex:13},{value:"getTableData",paraId:13,tocIndex:13},{value:"\u7EC4\u4EF6\u66B4\u9732\u7684\u67E5\u8BE2\u65B9\u6CD5\uFF0C\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F20\u5165data\u53C2\u6570\u4F1A\u8986\u76D6apiData\uFF0C\u9700\u8981\u643A\u5E26\u5176\u4ED6\u53C2\u6570\u8BF7\u4F7F\u7528otherData",paraId:13,tocIndex:13},{value:"({ current\u3001pageSize\u3001data\u3001otherData }) => Promise",paraId:13,tocIndex:13},{value:"init",paraId:13,tocIndex:13},{value:"\u6839\u636E\u5F53\u524D\u6761\u6570\u3001\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u521D\u59CB\u9875\u6570\u7684\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u989D\u5916\u67E5\u8BE2\u6570\u636E\uFF0C\u4E00\u822C\u7528\u4E8E\u67E5\u8BE2",paraId:13,tocIndex:13},{value:"otherData => Promise",paraId:13,tocIndex:13},{value:"reset",paraId:13,tocIndex:13},{value:"\u4F7F\u7528\u521D\u59CB\u6761\u6570\u3001\u521D\u59CB\u9875\u6570\u3001\u7A7A\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u91CD\u7F6E",paraId:13,tocIndex:13},{value:"otherData => Promise",paraId:13,tocIndex:13},{value:"reload",paraId:13,tocIndex:13},{value:"\u5237\u65B0\u5F53\u524D\u9875\u9762\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6",paraId:13,tocIndex:13},{value:"otherData => Promise",paraId:13,tocIndex:13},{value:"getInfo",paraId:13,tocIndex:13},{value:"\u83B7\u53D6\u5F53\u524D\u8868\u683C\u8BF7\u6C42\u6570\u636E",paraId:13,tocIndex:13},{value:"() => ({ current, pageSize, data })",paraId:13,tocIndex:13},{value:"getSelected",paraId:13,tocIndex:13},{value:"\u83B7\u53D6\u5F53\u524D\u8868\u683C\u9009\u4E2D\u6570\u636E",paraId:13,tocIndex:13},{value:"() => array|string|number ",paraId:13,tocIndex:13}]},44061:function(Y,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"FLocalStore",paraId:0,tocIndex:0},{value:"\u5BF9",paraId:0,tocIndex:0},{value:"localStorage",paraId:0,tocIndex:0},{value:"\u8FDB\u884C\u4E86\u5C01\u88C5\uFF0C\u7528\u4E8E\u5728\u672C\u5730\u5B89\u5168\u5730\u5B58\u53D6\u654F\u611F\u6570\u636E\u3002 \u4E3A\u4E86\u907F\u514D",paraId:0,tocIndex:0},{value:"key",paraId:0,tocIndex:0},{value:"\u66B4\u9732\uFF0C\u4F1A\u5148\u5BF9",paraId:0,tocIndex:0},{value:"key",paraId:0,tocIndex:0},{value:"\u8FDB\u884C",paraId:0,tocIndex:0},{value:"\u4E0D\u53EF\u9006\u6563\u5217\u52A0\u5BC6",paraId:0,tocIndex:0},{value:`
\uFF0C\u540C\u65F6\u4F7F\u7528`,paraId:0,tocIndex:0},{value:"\u968F\u673A\u76D0",paraId:0,tocIndex:0},{value:"+",paraId:0,tocIndex:0},{value:"PBKDF2",paraId:0,tocIndex:0},{value:"\u751F\u6210\u5BC6\u94A5\uFF0C\u5BF9\u5B58\u50A8\u7684\u5185\u5BB9\u8FDB\u884C\u52A0\u5BC6\u3002 \u4F18\u70B9\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"\u5B58\u50A8\u548C\u53D6\u51FA\u65F6\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u8F6C\u6362",paraId:1,tocIndex:0},{value:"JSON",paraId:1,tocIndex:0},{value:"\u4E86",paraId:1,tocIndex:0},{value:"\u5728",paraId:1,tocIndex:0},{value:"localStorage",paraId:1,tocIndex:0},{value:"\u4E2D\u53EA\u80FD\u770B\u5230\u52A0\u5BC6\u540E\u7684",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u548C",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\uFF0C\u6570\u636E\u66F4\u52A0\u5B89\u5168",paraId:1,tocIndex:0},{value:"\u53EF\u8BBE\u7F6E\u6570\u636E\u8FC7\u671F\u65F6\u95F4",paraId:1,tocIndex:0},{value:"\u53EF\u914D\u7F6E\u4E0D\u5B58\u5165\u672C\u5730\uFF0C\u5F53\u4F5C\u5168\u5C40cache\u4F7F\u7528",paraId:1,tocIndex:0},{value:"\u9700\u8981\u5F15\u5165 ",paraId:2,tocIndex:0},{value:"crypto-js",paraId:2,tocIndex:0},{value:" \u4F7F\u7528\uFF0C",paraId:2,tocIndex:0},{value:"npm install crypto-js",paraId:2,tocIndex:0},{value:"\u5C06\u6570\u636E\u5B58\u50A8\u5230",paraId:3,tocIndex:1},{value:"localStorage",paraId:3,tocIndex:1},{value:"\uFF0C\u8BF7\u524D\u5F80\u63A7\u5236\u53F0\u67E5\u770B",paraId:3,tocIndex:1},{value:"localStorage",paraId:3,tocIndex:1},{value:"\u548C",paraId:3,tocIndex:1},{value:"console",paraId:3,tocIndex:1},{value:"\u914D\u7F6E",paraId:4,tocIndex:2},{value:"local",paraId:4,tocIndex:2},{value:"\u4E3A",paraId:4,tocIndex:2},{value:"false",paraId:4,tocIndex:2},{value:"\uFF0C\u5C06\u6570\u636E\u5B58\u50A8\u5230",paraId:4,tocIndex:2},{value:"\u5168\u5C40Map",paraId:4,tocIndex:2},{value:"\uFF0C\u6D4F\u89C8\u5668\u5237\u65B0\u540E\u6570\u636E\u5931\u6548\uFF0C\u8BF7\u524D\u5F80\u63A7\u5236\u53F0\u67E5\u770B",paraId:4,tocIndex:2},{value:"console",paraId:4,tocIndex:2},{value:"\u7528\u4E8E\u5C06\u6570\u636E\u52A0\u5BC6\u5B58\u50A8\u5230",paraId:5,tocIndex:4},{value:"Map",paraId:5,tocIndex:4},{value:"\u6216",paraId:5,tocIndex:4},{value:"localStorage",paraId:5,tocIndex:4},{value:"\uFF0C",paraId:5,tocIndex:4},{value:"setItem",paraId:5,tocIndex:4},{value:"\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61",paraId:5,tocIndex:4},{value:"options",paraId:5,tocIndex:4},{value:"\uFF0C\u65E0\u8FD4\u56DE\u503C",paraId:5,tocIndex:4},{value:"\u53C2\u6570\u540D",paraId:6,tocIndex:5},{value:"\u7C7B\u578B",paraId:6,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:6,tocIndex:5},{value:"\u8BF4\u660E",paraId:6,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:5},{value:"key",paraId:6,tocIndex:5},{value:"string",paraId:6,tocIndex:5},{value:"\u662F",paraId:6,tocIndex:5},{value:"\u5B58\u50A8\u7684key",paraId:6,tocIndex:5},{value:"value",paraId:6,tocIndex:5},{value:"string | object",paraId:6,tocIndex:5},{value:"\u662F",paraId:6,tocIndex:5},{value:"\u5B58\u50A8\u7684\u5185\u5BB9",paraId:6,tocIndex:5},{value:"duration",paraId:6,tocIndex:5},{value:"number",paraId:6,tocIndex:5},{value:"\u5426",paraId:6,tocIndex:5},{value:"\u5B58\u50A8\u7684\u6709\u6548\u671F\uFF08\u6BEB\u79D2\uFF09\uFF0C-1\u8868\u793A\u4E00\u76F4\u6709\u6548",paraId:6,tocIndex:5},{value:"-1",paraId:6,tocIndex:5},{value:"local",paraId:6,tocIndex:5},{value:"boolean",paraId:6,tocIndex:5},{value:"\u5426",paraId:6,tocIndex:5},{value:"\u662F\u5426\u5B58\u5165",paraId:6,tocIndex:5},{value:"localStorage",paraId:6,tocIndex:5},{value:"\uFF0C",paraId:6,tocIndex:5},{value:"false",paraId:6,tocIndex:5},{value:"\u5219\u4E3A\u5B58\u5165",paraId:6,tocIndex:5},{value:"Map",paraId:6,tocIndex:5},{value:"\u5F53\u4F5C\u4E34\u65F6\u6570\u636E\u4F7F\u7528",paraId:6,tocIndex:5},{value:"true",paraId:6,tocIndex:5},{value:"\u7528\u4E8E\u53D6\u51FA\u5B58\u50A8\u7684\u6570\u636E\uFF0C",paraId:7,tocIndex:6},{value:"getItem",paraId:7,tocIndex:6},{value:"\u53EA\u9700\u8981\u4F20\u5165",paraId:7,tocIndex:6},{value:"key",paraId:7,tocIndex:6},{value:"\u5373\u53EF\uFF0C\u8FD4\u56DE",paraId:7,tocIndex:6},{value:"setItem",paraId:7,tocIndex:6},{value:"\u5B58\u5165\u7684",paraId:7,tocIndex:6},{value:"value",paraId:7,tocIndex:6},{value:"\uFF0C\u6570\u636E\u4E3A\u7A7A\u6216\u8FC7\u671F\u65F6\u8FD4\u56DE",paraId:7,tocIndex:6},{value:"undefined",paraId:7,tocIndex:6},{value:"\u6CE8\u610F\u4E8B\u9879",paraId:8,tocIndex:6},{value:"\u5982\u679C\u4F20\u5165\u591A\u4E2Akey\u65F6\uFF0C\u8FD4\u56DE\u503C\u4E3A\u6570\u7EC4",paraId:9,tocIndex:6},{value:"\u5F53",paraId:9,tocIndex:6},{value:"Map",paraId:9,tocIndex:6},{value:"\u6570\u636E\u548C",paraId:9,tocIndex:6},{value:"localStorage",paraId:9,tocIndex:6},{value:"\u90FD\u5B58\u5728\u6570\u636E\u65F6\uFF0C\u4EE5",paraId:9,tocIndex:6},{value:"Map",paraId:9,tocIndex:6},{value:"\u6570\u636E\u4E3A\u4F18\u5148",paraId:9,tocIndex:6},{value:"\u53C2\u6570\u540D",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"\u662F\u5426\u5FC5\u586B",paraId:10,tocIndex:6},{value:"\u8BF4\u660E",paraId:10,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:6},{value:"key",paraId:10,tocIndex:6},{value:"string | array",paraId:10,tocIndex:6},{value:"\u662F",paraId:10,tocIndex:6},{value:"\u5B58\u50A8\u7684key\uFF0C\u4F20\u5165\u6570\u7EC4\u83B7\u53D6\u591A\u4E2A",paraId:10,tocIndex:6},{value:"\u7528\u4E8E\u5220\u9664\u5B58\u50A8\u7684\u6570\u636E\uFF0C",paraId:11,tocIndex:7},{value:"removeItem",paraId:11,tocIndex:7},{value:"\u53EA\u9700\u8981\u4F20\u5165",paraId:11,tocIndex:7},{value:"key",paraId:11,tocIndex:7},{value:"\u5373\u53EF\uFF0C\u65E0\u8FD4\u56DE\u503C",paraId:11,tocIndex:7},{value:"\u53C2\u6570\u540D",paraId:12,tocIndex:7},{value:"\u7C7B\u578B",paraId:12,tocIndex:7},{value:"\u662F\u5426\u5FC5\u586B",paraId:12,tocIndex:7},{value:"\u8BF4\u660E",paraId:12,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:7},{value:"key",paraId:12,tocIndex:7},{value:"string | array",paraId:12,tocIndex:7},{value:"\u662F",paraId:12,tocIndex:7},{value:"\u5B58\u50A8\u7684key\uFF0C\u4F20\u5165\u6570\u7EC4\u5220\u9664\u591A\u4E2A",paraId:12,tocIndex:7}]},6282:function(Y,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2A\u663E\u793A\u5BC6\u7801\u5F3A\u5EA6\u7684\u663E\u793A\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u6709\u4E94\u4E2A\u7B49\u7EA7(0-4)\uFF0C\u53EF\u81EA\u5B9A\u4E49\u7B49\u7EA7",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E",paraId:1,tocIndex:2},{value:"scoreList",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u6765\u6E32\u67D3\u989C\u8272\u548C\u6587\u5B57\uFF0C\u6839\u636E",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\u8FDB\u884C\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u4F7F\u7528",paraId:2,tocIndex:3},{value:"reverse",paraId:2,tocIndex:3},{value:"\u8C03\u6574\u6E32\u67D3\u987A\u5E8F",paraId:2,tocIndex:3},{value:"\u9700\u8981\u5F15\u5165\u5E93",paraId:3,tocIndex:4},{value:"zxcvbn",paraId:3,tocIndex:4},{value:"\u4F7F\u7528\uFF0C\u5728\u8868\u5355\u4E2D\u81EA\u52A8\u8BA1\u7B97\u5BC6\u7801\u5F3A\u5EA6\uFF0C\u5E76\u9650\u5236\u4F7F\u7528\u7684\u5BC6\u7801\u5F3A\u5EA6\u4E0D\u80FD\u4E3A",paraId:3,tocIndex:4},{value:"\u975E\u5E38\u5F31",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"value",paraId:4,tocIndex:6},{value:"number",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u5BC6\u7801\u5F3A\u5EA6\uFF0C\u9ED8\u8BA4\u53D6\u503C\u8303\u56F40-4",paraId:4,tocIndex:6},{value:"scoreList",paraId:4,tocIndex:6},{value:"array",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u6E32\u67D3",paraId:4,tocIndex:6},{value:'[{"color":"#a0133d","label":"\u975E\u5E38\u5F31","value":0},{"color":"#f7e84d","label":"\u8F83\u5F31","value":1},{"color":"#ffa500","label":"\u4E00\u822C","value":2},{"color":"#1677ff","label":"\u8F83\u5F3A","value":3},{"color":"#2f9715","label":"\u5F3A","value":4}]',paraId:4,tocIndex:6},{value:"defaultColor",paraId:4,tocIndex:6},{value:"color",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u5E95\u8272",paraId:4,tocIndex:6},{value:"'#e2e2e2'",paraId:4,tocIndex:6},{value:"reverse",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u8C03\u6574\u5F3A\u5EA6\u663E\u793A\u987A\u5E8F",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6}]},51446:function(Y,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:`\u8FD9\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u5C01\u88C5\u7EC4\u4EF6\uFF0C\u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u4E1A\u52A1\u529F\u80FD\uFF0C\u4E3B\u8981\u4E3A\u4E86\u907F\u514D\u5728\u9879\u76EE\u4E2D\u7EC4\u4EF6\u7684\u7B80\u5355\u5C5E\u6027\u5197\u4F59\u3002
\u4EE5\u4E0B\u662F\u5C01\u88C5\u539F\u5219\uFF1A`,paraId:0,tocIndex:0},{value:"\u4E0D\u7834\u574F\u539F\u6709\u7EC4\u4EF6\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\u3001Ref\u3001\u5B50\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u4FDD\u6301\u539F\u6709\u7EC4\u4EF6\u7684\u53EF\u62D3\u5C55\u6027",paraId:1,tocIndex:0},{value:`npm install izid
# or
pnpm add izid
# or
yarn add izid
`,paraId:2,tocIndex:1},{value:"Npm",paraId:3,tocIndex:2}]},42480:function(){}}]);
