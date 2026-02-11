(self.webpackChunkizid=self.webpackChunkizid||[]).push([[904],{27927:function(Q,A,e){"use strict";var c;e.r(A),e.d(A,{demos:function(){return p}});var j=e(15009),x=e.n(j),g=e(5574),u=e.n(g),i=e(99289),S=e.n(i),l=e(67294),h=e(73117),I=e(52872),p={"docs-antd-drag-modal-demo-0":{component:l.memo(l.lazy(S()(x()().mark(function o(){var r,d,a,n,v,t;return x()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return r=s.sent,d=r.AntdDragModal,s.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=s.sent,n=a.useState,s.next=10,Promise.resolve().then(e.bind(e,52872));case 10:return v=s.sent,t=v.Button,s.abrupt("return",{default:function(){var f=n(!1),y=u()(f,2),T=y[0],$=y[1];return l.createElement(l.Fragment,null,l.createElement(t,{onClick:function(){return $(function(B){return!B})}},T?"\u5173\u95ED":"\u6253\u5F00"),l.createElement(d,{state:[T,$]},Array.from({length:50},function(C){return l.createElement("p",null,"\u6309\u4F4F\u6807\u9898\u680F\u62D6\u52A8")})))}});case 13:case"end":return s.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-antd-drag-modal-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { AntdDragModal } from 'izid'
import { useState } from 'react'
import { Button } from 'antd'

export default () => {
    const [visible, setVisible] = useState(false)

    return <>
        <Button onClick={() => setVisible(value => !value)}>{visible ? '\u5173\u95ED' : '\u6253\u5F00'}</Button>
        <AntdDragModal state={[visible, setVisible]}>
            {
                Array.from({ length: 50 }, _ => <p>\u6309\u4F4F\u6807\u9898\u680F\u62D6\u52A8</p>)
            }
        </AntdDragModal>
    </>
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(l,2)),antd:I},renderOpts:{compile:function(){var o=S()(x()().mark(function d(){var a,n=arguments;return x()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()}}}},95819:function(Q,A,e){"use strict";e.r(A),e.d(A,{demos:function(){return S}});var c=e(15009),j=e.n(c),x=e(99289),g=e.n(x),u=e(67294),i=e(73117),S={"docs-demo-component-demo-0":{component:u.memo(u.lazy(g()(j()().mark(function l(){var h,I;return j()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return h=o.sent,I=h.Demo,o.abrupt("return",{default:function(){return u.createElement(I,null)}});case 5:case"end":return o.stop()}},l)})))),asset:{type:"BLOCK",id:"docs-demo-component-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { Demo } from 'izid'

export default () => {
    return <Demo />
}`},izid:{type:"NPM",value:"0.1.27"}},entry:"index.jsx"},context:{izid:i},renderOpts:{compile:function(){var l=g()(j()().mark(function I(){var p,o=arguments;return j()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(250).then(e.bind(e,90250));case 2:return d.abrupt("return",(p=d.sent).default.apply(p,o));case 3:case"end":return d.stop()}},I)}));function h(){return l.apply(this,arguments)}return h}()}}}},57397:function(Q,A,e){"use strict";e.r(A),e.d(A,{demos:function(){return l}});var c=e(15009),j=e.n(c),x=e(99289),g=e.n(x),u=e(67294),i=e(73117),S=e(52872),l={"docs-demo-util-demo-0":{component:u.memo(u.lazy(g()(j()().mark(function h(){var I,p,o,r;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return I=a.sent,p=I.DemoLog,a.next=6,Promise.resolve().then(e.bind(e,52872));case 6:return o=a.sent,r=o.Button,a.abrupt("return",{default:function(){return u.createElement(r,{onClick:p},"\u70B9\u51FB\u6253\u5370log")}});case 9:case"end":return a.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-demo-util-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { DemoLog } from 'izid'
import { Button } from 'antd'

export default () => {
    return <Button onClick={DemoLog}>\u70B9\u51FB\u6253\u5370log</Button>
}`},izid:{type:"NPM",value:"0.1.27"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:i,antd:S},renderOpts:{compile:function(){var h=g()(j()().mark(function p(){var o,r=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,r));case 3:case"end":return a.stop()}},p)}));function I(){return h.apply(this,arguments)}return I}()}}}},48214:function(Q,A,e){"use strict";var c;e.r(A),e.d(A,{demos:function(){return h}});var j=e(15009),x=e.n(j),g=e(99289),u=e.n(g),i=e(67294),S=e(73117),l=e(52872),h={"docs-f-antd-input-demo-0":{component:i.memo(i.lazy(u()(x()().mark(function I(){var p,o,r,d,a,n,v,t;return x()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return p=s.sent,o=p.FAntdInput,s.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=s.sent,d=r.useState,a=r.useEffect,n=r.useRef,s.next=12,Promise.resolve().then(e.bind(e,52872));case 12:return v=s.sent,t=v.Button,s.abrupt("return",{default:function(){var f=d(),y=n();a(function(){var $;setTimeout(($=y.current)===null||$===void 0?void 0:$.focus,1e3)},[]);var T=function(){f[1]("Hello World")};return i.createElement(i.Fragment,null,i.createElement("p",null,"Input Value\uFF1A",f[0]),i.createElement(o,{state:f,ref:y}),i.createElement("p",null,i.createElement(t,{type:"primary",onClick:T},"Hello World")))}});case 15:case"end":return s.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(i,2)),antd:l},renderOpts:{compile:function(){var I=u()(x()().mark(function o(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},o)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-1":{component:i.memo(i.lazy(u()(x()().mark(function I(){var p,o,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return p=n.sent,o=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d(),m=function(E){console.log("\u89E6\u53D1\u641C\u7D22\uFF1A",E)};return i.createElement(i.Fragment,null,i.createElement("p",null,"Input Value\uFF1A",t[0]),i.createElement(o.Search,{state:t,onSearch:m}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(i,2))},renderOpts:{compile:function(){var I=u()(x()().mark(function o(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},o)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-2":{component:i.memo(i.lazy(u()(x()().mark(function I(){var p,o,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return p=n.sent,o=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d(),m=function(E){console.log("\u89E6\u53D1\u81EA\u52A8\u641C\u7D22\uFF1A",E)};return i.createElement(i.Fragment,null,i.createElement("p",null,"Input Value\uFF1A",t[0]),i.createElement(o.Search,{state:t,autoSearch:!0,onSearch:m}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(i,2))},renderOpts:{compile:function(){var I=u()(x()().mark(function o(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},o)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-3":{component:i.memo(i.lazy(u()(x()().mark(function I(){var p,o,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return p=n.sent,o=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d(),m=function(E){console.log("\u89E6\u53D1\u8282\u6D41\u641C\u7D22\uFF1A",E)};return i.createElement(i.Fragment,null,i.createElement("p",null,"Input Value\uFF1A",t[0]),i.createElement(o.Search,{state:t,throttleDuration:2e3,onSearch:m}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(i,2))},renderOpts:{compile:function(){var I=u()(x()().mark(function o(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},o)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-4":{component:i.memo(i.lazy(u()(x()().mark(function I(){var p,o,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return p=n.sent,o=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d();return i.createElement(i.Fragment,null,i.createElement("p",null,"Input Value\uFF1A",t[0]),i.createElement(o.Number,{state:t,strict:!0}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} strict />
    </>;
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(i,2))},renderOpts:{compile:function(){var I=u()(x()().mark(function o(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},o)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-5":{component:i.memo(i.lazy(u()(x()().mark(function I(){var p,o,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return p=n.sent,o=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d();return i.createElement(i.Fragment,null,i.createElement("p",null,"Input Value\uFF1A",t[0]),i.createElement(o.Number,{state:t,mode:"price"}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'price'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(i,2))},renderOpts:{compile:function(){var I=u()(x()().mark(function o(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},o)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-6":{component:i.memo(i.lazy(u()(x()().mark(function I(){var p,o,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return p=n.sent,o=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d();return i.createElement(i.Fragment,null,i.createElement("p",null,"Input Value\uFF1A",t[0]),i.createElement(o.Number,{state:t,mode:"percent"}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Number state={state} mode={'percent'} />
    </>;
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(i,2))},renderOpts:{compile:function(){var I=u()(x()().mark(function o(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},o)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-7":{component:i.memo(i.lazy(u()(x()().mark(function I(){var p,o,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return p=n.sent,o=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d();return i.createElement(i.Fragment,null,i.createElement("p",null,"Input Value\uFF1A",t[0]),i.createElement(o.Password,{state:t}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.Password state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(i,2))},renderOpts:{compile:function(){var I=u()(x()().mark(function o(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},o)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-8":{component:i.memo(i.lazy(u()(x()().mark(function I(){var p,o,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return p=n.sent,o=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d("");return i.createElement(i.Fragment,null,i.createElement("p",null,"Input Value\uFF1A",t[0]),i.createElement(o.OTP,{state:t}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.OTP state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(i,2))},renderOpts:{compile:function(){var I=u()(x()().mark(function o(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},o)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-9":{component:i.memo(i.lazy(u()(x()().mark(function I(){var p,o,r,d;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return p=n.sent,o=p.FAntdInput,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=n.sent,d=r.useState,n.abrupt("return",{default:function(){var t=d("");return i.createElement(i.Fragment,null,i.createElement("p",null,"Input Value\uFF1A",t[0]),i.createElement(o.TextArea,{state:t}))}});case 9:case"end":return n.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-9",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value\uFF1A{state[0]}</p>
        <FAntdInput.TextArea state={state} />
    </>;
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(i,2))},renderOpts:{compile:function(){var I=u()(x()().mark(function o(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},o)}));function p(){return I.apply(this,arguments)}return p}()}},"docs-f-antd-input-demo-10":{component:i.memo(i.lazy(u()(x()().mark(function I(){var p,o,r,d,a,n,v;return x()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return p=m.sent,o=p.FAntdInput,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return r=m.sent,d=r.useState,m.next=10,Promise.resolve().then(e.bind(e,52872));case 10:return a=m.sent,n=a.Form,v=a.Button,m.abrupt("return",{default:function(){var E=function(y){console.log("\u8868\u5355\u63D0\u4EA4\uFF1A",y)};return i.createElement(n,{onFinish:E},i.createElement(n.Item,{label:"\u8F93\u5165\u6846",name:"value"},i.createElement(o,null)),i.createElement(n.Item,null,i.createElement(v,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4")))}});case 14:case"end":return m.stop()}},I)})))),asset:{type:"BLOCK",id:"docs-f-antd-input-demo-10",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdInput } from 'izid';
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:S,react:c||(c=e.t(i,2)),antd:l},renderOpts:{compile:function(){var I=u()(x()().mark(function o(){var r,d=arguments;return x()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,d));case 3:case"end":return n.stop()}},o)}));function p(){return I.apply(this,arguments)}return p}()}}}},26220:function(Q,A,e){"use strict";e.r(A),e.d(A,{demos:function(){return l}});var c=e(15009),j=e.n(c),x=e(99289),g=e.n(x),u=e(67294),i=e(73117),S=e(52872),l={"docs-f-antd-order-table-demo-0":{component:u.memo(u.lazy(g()(j()().mark(function h(){var I,p,o,r,d;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return I=n.sent,p=I.FAntdOrderTable,n.next=6,Promise.resolve().then(e.bind(e,52872));case 6:return o=n.sent,r=o.Space,d=function(t){var m=t.current,s=t.pageSize;return new Promise(function(E){setTimeout(function(){E({code:"0",count:21,data:Array.from({length:21},function(f,y){return{orderInfo:{hotelName:"\u676D\u5DDE\u897F\u6E56XXXX\u9152\u5E97".concat(y+1,"\u53F7"),houseType:"\u9AD8\u7EA7\u5927\u5E8A\u623F",breakfastType:"\u53CC\u65E9",startDate:"2025/05/15",endDate:"2025/05/16",dayCount:1,roomCount:1},contactInfo:{checkName:"\u674E\u56DB",contactName:"\u738B\u4E94"},payInfo:{paymentAmount:200,projectedIncome:200},systemOrderId:"1234567890",createDate:"2025-05-14 15:45:05",orderStatus:"\u5F85\u53D1\u8D27",more:"\u8FD9\u662F\u7B2C".concat(y+1,"\u6761\u6570\u636E")}}).slice((m-1)*s,m*s)})},300)})},n.abrupt("return",{default:function(){var t=[{title:"\u8BA2\u5355\u4FE1\u606F",dataIndex:"orderInfo",render:function(f){return u.createElement(u.Fragment,null,u.createElement("div",null,f.hotelName),u.createElement("div",null,f.houseType,"/",f.breakfastType),u.createElement("div",null,"".concat(f.startDate,"~").concat(f.endDate," ").concat(f.dayCount,"\u665A ").concat(f.roomCount,"\u95F4")))}},{title:"\u8054\u7CFB\u4FE1\u606F",dataIndex:"contactInfo",render:function(f){return u.createElement(u.Fragment,null,u.createElement("div",null,"\u5165\u4F4F\u4EBA\uFF1A",f.checkName),u.createElement("div",null,"\u8054\u7CFB\u4EBA\uFF1A",f.contactName))}},{title:"\u652F\u4ED8\u4FE1\u606F",dataIndex:"payInfo",render:function(f){return u.createElement(u.Fragment,null,u.createElement("div",null,"\u652F\u4ED8\u91D1\u989D\uFF1A\xA5",f.paymentAmount),u.createElement("div",null,"\u9884\u8BA1\u6536\u5165\uFF1A\xA5",f.projectedIncome))}},{title:"\u8BA2\u5355\u72B6\u6001",dataIndex:"orderStatus"},{title:"\u64CD\u4F5C",key:"active",render:function(){return u.createElement(r,{direction:"vertical"},u.createElement("a",null,"\u62D2\u5355"),u.createElement("a",null,"\u786E\u8BA4\u53D1\u8D27"),u.createElement("a",null,"\u590D\u5236\u8BA2\u5355"))}}],m=[{label:"\u7CFB\u7EDF\u8BA2\u5355\u53F7",render:function(f){return f.systemOrderId}},{label:"\u4E0B\u5355\u65F6\u95F4",render:function(f){return f.createDate}}],s=function(f){return u.createElement(r,null,u.createElement("a",null,"\u5F55\u5165"),u.createElement("a",null,"\u91C7\u8D2D"),u.createElement("a",null,"\u5907\u6CE8"),u.createElement("a",null,"\u8BE6\u60C5"),u.createElement("a",null,"\u65E5\u5FD7"))};return u.createElement(p,{api:d,columns:t,headerRender:m,headerOptions:s})}});case 10:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-antd-order-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdOrderTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:i,antd:S},renderOpts:{compile:function(){var h=g()(j()().mark(function p(){var o,r=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,r));case 3:case"end":return a.stop()}},p)}));function I(){return h.apply(this,arguments)}return I}()}}}},62511:function(Q,A,e){"use strict";var c;e.r(A),e.d(A,{demos:function(){return p}});var j=e(5574),x=e.n(j),g=e(15009),u=e.n(g),i=e(99289),S=e.n(i),l=e(67294),h=e(73117),I=e(52872),p={"docs-f-antd-table-demo-0":{component:l.memo(l.lazy(S()(u()().mark(function o(){var r,d,a;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return r=v.sent,d=r.FAntdTable,a=function(m){var s=m.current,E=m.pageSize;return new Promise(function(f){setTimeout(function(){f({code:"0",total:21,data:Array.from({length:21},function(y,T){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(T+1,"\u6761\u6570\u636E")}}).slice((s-1)*E,s*E)})},300)})},v.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(d,{api:a,columns:m})}});case 6:case"end":return v.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'

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
}`},izid:{type:"NPM",value:"0.1.27"}},entry:"index.jsx"},context:{izid:h},renderOpts:{compile:function(){var o=S()(u()().mark(function d(){var a,n=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-1":{component:l.memo(l.lazy(S()(u()().mark(function o(){var r,d,a;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return r=v.sent,d=r.FAntdTable,a=function(m){var s=m.current,E=m.pageSize;return new Promise(function(f){setTimeout(function(){f({status:200,data:{code:"OK",size:21,records:Array.from({length:21},function(y,T){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(T+1,"\u6761\u6570\u636E")}}).slice((s-1)*E,s*E)}})},300)})},v.abrupt("return",{default:function(){var m=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(d,{api:a,columns:m,getApiData:function(E){return E.data},reqeustPageConfig:function(E,f){return{pageSearch:{page:E,limit:f}}},mapperOptions:{total:"size",data:"records"},successValid:function(E){return E.code==="OK"}})}});case 6:case"end":return v.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'

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
}`},izid:{type:"NPM",value:"0.1.27"}},entry:"index.jsx"},context:{izid:h},renderOpts:{compile:function(){var o=S()(u()().mark(function d(){var a,n=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-2":{component:l.memo(l.lazy(S()(u()().mark(function o(){var r,d,a,n,v,t,m,s,E;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return r=y.sent,d=r.FAntdTable,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=y.sent,n=a.useRef,v=a.useState,y.next=11,Promise.resolve().then(e.bind(e,52872));case 11:return t=y.sent,m=t.Button,s=t.Space,E=function($){var C=$.current,B=$.pageSize;return new Promise(function(O){setTimeout(function(){O({code:"0",total:21,data:Array.from({length:21},function(G,J){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(J+1,"\u6761\u6570\u636E")}}).slice((C-1)*B,C*B)})},300)})},y.abrupt("return",{default:function(){var $=n(),C=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],B=function(G){var J;(J=$.current)===null||J===void 0||J[G]()};return l.createElement(l.Fragment,null,l.createElement(s,{style:{marginBottom:"10px"}},l.createElement(m,{onClick:function(){return B("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(m,{onClick:function(){return B("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(m,{onClick:function(){return B("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),l.createElement(d,{ref:$,api:E,columns:C,autoInit:!1}))}});case 16:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(l,2)),antd:I},renderOpts:{compile:function(){var o=S()(u()().mark(function d(){var a,n=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-3":{component:l.memo(l.lazy(S()(u()().mark(function o(){var r,d,a,n,v,t,m,s,E;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return r=y.sent,d=r.FAntdTable,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=y.sent,n=a.useState,v=a.useRef,y.next=11,Promise.resolve().then(e.bind(e,52872));case 11:return t=y.sent,m=t.Radio,s=t.Button,E=function($){var C=$.current,B=$.pageSize;return new Promise(function(O){setTimeout(function(){O({code:"0",total:21,data:Array.from({length:21},function(G,J){return{id:J,name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(J+1,"\u6761\u6570\u636E")}}).slice((C-1)*B,C*B)})},300)})},y.abrupt("return",{default:function(){var $=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],C=n([]),B=x()(C,2),O=B[0],G=B[1],J=n([]),Y=x()(J,2),ae=Y[0],ce=Y[1],me=v(),ve=function(){var pe;return ce((pe=me.current)===null||pe===void 0?void 0:pe.getSelected())};return l.createElement(l.Fragment,null,JSON.stringify(O),l.createElement(s,{onClick:ve},"\u83B7\u53D6\u9009\u4E2D\u6570\u636E"),JSON.stringify(ae),l.createElement(d,{ref:me,checkboxState:[O,G],rowKey:"id",api:E,columns:$}))}});case 16:case"end":return y.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(l,2)),antd:I},renderOpts:{compile:function(){var o=S()(u()().mark(function d(){var a,n=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-4":{component:l.memo(l.lazy(S()(u()().mark(function o(){var r,d,a,n,v,t,m,s;return u()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return r=f.sent,d=r.FAntdTable,f.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=f.sent,n=a.useState,f.next=10,Promise.resolve().then(e.bind(e,52872));case 10:return v=f.sent,t=v.Radio,m=v.Button,s=function(T){var $=T.current,C=T.pageSize;return new Promise(function(B){setTimeout(function(){B({code:"0",total:21,data:Array.from({length:21},function(O,G){return{id:G,name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(G+1,"\u6761\u6570\u636E")}}).slice(($-1)*C,$*C)})},300)})},f.abrupt("return",{default:function(){var T=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],$=n({}),C=x()($,2),B=C[0],O=C[1];return l.createElement(l.Fragment,null,l.createElement(m,{onClick:function(){return O(3)}},"\u9009\u4E2D\u7B2C\u56DB\u6761\u6570\u636E"),JSON.stringify(B),l.createElement(d,{radioState:[B,O],rowKey:"id",api:s,columns:T}))}});case 15:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-4",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(l,2)),antd:I},renderOpts:{compile:function(){var o=S()(u()().mark(function d(){var a,n=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-5":{component:l.memo(l.lazy(S()(u()().mark(function o(){var r,d,a,n,v;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return r=m.sent,d=r.FAntdTable,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=m.sent,n=a.useState,v=function(E){var f=E.current,y=E.pageSize;return new Promise(function(T){setTimeout(function(){T({code:"0",total:21,data:Array.from({length:21},function($,C){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(C+1,"\u6761\u6570\u636E")}}).slice((f-1)*y,f*y)})},300)})},m.abrupt("return",{default:function(){var E=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(d,{api:v,columns:E,filter:function(y){return y.more!=="\u8FD9\u662F\u7B2C5\u6761\u6570\u636E"}})}});case 10:case"end":return m.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-5",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(l,2))},renderOpts:{compile:function(){var o=S()(u()().mark(function d(){var a,n=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-6":{component:l.memo(l.lazy(S()(u()().mark(function o(){var r,d,a,n,v;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return r=m.sent,d=r.FAntdTable,m.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=m.sent,n=a.useState,v=function(E){var f=E.current,y=E.pageSize;return new Promise(function(T){setTimeout(function(){T({code:"0",total:21,data:Array.from({length:21},function($,C){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(C+1,"\u6761\u6570\u636E")}}).slice((f-1)*y,f*y)})},300)})},m.abrupt("return",{default:function(){var E=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}];return l.createElement(d,{api:v,columns:E,requestValid:function(y){return y.current!==2}})}});case 10:case"end":return m.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-6",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(l,2))},renderOpts:{compile:function(){var o=S()(u()().mark(function d(){var a,n=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-7":{component:l.memo(l.lazy(S()(u()().mark(function o(){var r,d,a,n,v,t,m,s,E,f;return u()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return r=T.sent,d=r.FAntdTable,a=r.FAntdInput,T.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return n=T.sent,v=n.useRef,t=n.useState,T.next=12,Promise.resolve().then(e.bind(e,52872));case 12:return m=T.sent,s=m.Button,E=m.Space,f=function(C){var B=C.current,O=C.pageSize;return new Promise(function(G){setTimeout(function(){G({code:"0",total:21,data:Array.from({length:21},function(J,Y){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(Y+1,"\u6761\u6570\u636E")}}).slice((B-1)*O,B*O)})},300)})},T.abrupt("return",{default:function(){var C=v(),B=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],O=t(),G=x()(O,2),J=G[0],Y=G[1],ae=t(),ce=x()(ae,2),me=ce[0],ve=ce[1],ee=function(ze){var Se;(Se=C.current)===null||Se===void 0||Se[ze]({name:J})},pe=t(),De=x()(pe,2),be=De[0],ge=De[1];return l.createElement(l.Fragment,null,l.createElement(E,{style:{marginBottom:"10px"}},l.createElement(s,{onClick:function(){return ee("init")}},"\u91CD\u7F6E\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(s,{onClick:function(){return ee("reset")}},"\u91CD\u7F6E\u6761\u6570/\u9875\u6570\u540E\u83B7\u53D6\u6570\u636E"),l.createElement(s,{onClick:function(){return ee("reload")}},"\u5237\u65B0\u5F53\u524D\u9875\u6570\u636E")),l.createElement(a,{state:[me,ve],placeholder:"\u8F93\u5165\u8BF7\u6C42\u53C2\u6570"}),l.createElement(a,{state:[J,Y],placeholder:"\u8F93\u5165\u624B\u52A8\u8BF7\u6C42\u989D\u5916\u53C2\u6570"}),l.createElement("p",null,JSON.stringify(be)),l.createElement(d,{ref:C,api:f,apiData:{value:me},columns:B,requestValid:function(ze){return ge(ze),!0}}))}});case 17:case"end":return T.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-7",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable, FAntdInput } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(l,2)),antd:I},renderOpts:{compile:function(){var o=S()(u()().mark(function d(){var a,n=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()}},"docs-f-antd-table-demo-8":{component:l.memo(l.lazy(S()(u()().mark(function o(){var r,d,a,n,v,t,m,s;return u()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return r=f.sent,d=r.FAntdTable,f.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=f.sent,n=a.useRef,v=a.useState,f.next=11,Promise.resolve().then(e.bind(e,52872));case 11:return t=f.sent,m=t.Button,s=function(T){var $=T.current,C=T.pageSize;return new Promise(function(B){setTimeout(function(){B({code:"0",total:21,data:Array.from({length:21},function(O,G){return{name:"Xin",more:"\u8FD9\u662F\u7B2C".concat(G+1,"\u6761\u6570\u636E")}}).slice(($-1)*C,$*C)})},300)})},f.abrupt("return",{default:function(){var T=n(),$=[{title:"\u59D3\u540D",dataIndex:"name"},{title:"\u8BF4\u660E",dataIndex:"more"},{title:"\u64CD\u4F5C",key:"active",render:function(){return l.createElement("a",null,"Delete")}}],C=v(),B=x()(C,2),O=B[0],G=B[1],J=function(){var ae;G((ae=T.current)===null||ae===void 0?void 0:ae.getInfo())};return l.createElement(l.Fragment,null,l.createElement(m,{onClick:J},"\u83B7\u53D6\u8868\u683C\u4FE1\u606F"),l.createElement("p",null,JSON.stringify(O)),l.createElement(d,{ref:T,api:s,columns:$}))}});case 15:case"end":return f.stop()}},o)})))),asset:{type:"BLOCK",id:"docs-f-antd-table-demo-8",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FAntdTable } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(l,2)),antd:I},renderOpts:{compile:function(){var o=S()(u()().mark(function d(){var a,n=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,n));case 3:case"end":return t.stop()}},d)}));function r(){return o.apply(this,arguments)}return r}()}}}},537:function(Q,A,e){"use strict";e.r(A),e.d(A,{demos:function(){return l}});var c=e(15009),j=e.n(c),x=e(99289),g=e.n(x),u=e(67294),i=e(73117),S=e(52872),l={"docs-f-local-store-demo-0":{component:u.memo(u.lazy(g()(j()().mark(function h(){var I,p,o,r,d;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return I=n.sent,p=I.FLocalStore,n.next=6,Promise.resolve().then(e.bind(e,52872));case 6:return o=n.sent,r=o.Button,d=o.Space,n.abrupt("return",{default:function(){var t=function(s){s==="demo1"&&p.setItem({key:"demoKey",value:{name:"fas"}}),s==="demo2"&&p.setItem({key:"demoKey",value:"fas,duration5000",duration:5e3}),s==="demo3"&&p.removeItem("demoKey"),s==="demo4"&&console.log(p.getItem("demoKey"))};return u.createElement(d,null,u.createElement(r,{onClick:function(){return t("demo1")}},"\u5B58\u50A8\u5185\u5BB9"),u.createElement(r,{onClick:function(){return t("demo2")}},"\u5B58\u50A8\u5185\u5BB9\uFF08\u4E94\u79D2\u8FC7\u671F\uFF09"),u.createElement(r,{onClick:function(){return t("demo3")}},"\u6E05\u7A7A\u5B58\u50A8"),u.createElement(r,{onClick:function(){return t("demo4")}},"\u6253\u5370\u5B58\u50A8\u5185\u5BB9"))}});case 10:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-local-store-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FLocalStore } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:i,antd:S},renderOpts:{compile:function(){var h=g()(j()().mark(function p(){var o,r=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,r));case 3:case"end":return a.stop()}},p)}));function I(){return h.apply(this,arguments)}return I}()}},"docs-f-local-store-demo-1":{component:u.memo(u.lazy(g()(j()().mark(function h(){var I,p,o,r,d;return j()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return I=n.sent,p=I.FLocalStore,n.next=6,Promise.resolve().then(e.bind(e,52872));case 6:return o=n.sent,r=o.Button,d=o.Space,n.abrupt("return",{default:function(){var t=function(s){s==="demo1"&&p.setItem({key:"demoKey",value:{name:"fas"},local:!1}),s==="demo2"&&p.setItem({key:"demoKey",value:"fas,duration5000",duration:5e3,local:!1}),s==="demo3"&&p.removeItem("demoKey"),s==="demo4"&&console.log(p.getItem("demoKey"))};return u.createElement(d,null,u.createElement(r,{onClick:function(){return t("demo1")}},"\u5B58\u50A8\u5185\u5BB9"),u.createElement(r,{onClick:function(){return t("demo2")}},"\u5B58\u50A8\u5185\u5BB9\uFF08\u4E94\u79D2\u8FC7\u671F\uFF09"),u.createElement(r,{onClick:function(){return t("demo3")}},"\u6E05\u7A7A\u5B58\u50A8"),u.createElement(r,{onClick:function(){return t("demo4")}},"\u6253\u5370\u5B58\u50A8\u5185\u5BB9"))}});case 10:case"end":return n.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-f-local-store-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { FLocalStore } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:i,antd:S},renderOpts:{compile:function(){var h=g()(j()().mark(function p(){var o,r=arguments;return j()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,r));case 3:case"end":return a.stop()}},p)}));function I(){return h.apply(this,arguments)}return I}()}}}},46477:function(Q,A,e){"use strict";var c;e.r(A),e.d(A,{demos:function(){return r}});var j=e(5574),x=e.n(j),g=e(15009),u=e.n(g),i=e(99289),S=e.n(i),l=e(67294),h=e(73117),I=e(52872),p=e(21322),o=e.n(p),r={"docs-pwd-score-demo-0":{component:l.memo(l.lazy(S()(u()().mark(function d(){var a,n;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return a=t.sent,n=a.PwdScore,t.abrupt("return",{default:function(){return l.createElement(l.Fragment,null,l.createElement(n,null),l.createElement(n,{value:0}),l.createElement(n,{value:1}),l.createElement(n,{value:2}),l.createElement(n,{value:3}),l.createElement(n,{value:4}))}});case 5:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore />
        <PwdScore value={0} />
        <PwdScore value={1} />
        <PwdScore value={2} />
        <PwdScore value={3} />
        <PwdScore value={4} />
    </>
}`},izid:{type:"NPM",value:"0.1.27"}},entry:"index.jsx"},context:{izid:h},renderOpts:{compile:function(){var d=S()(u()().mark(function n(){var v,t=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(250).then(e.bind(e,90250));case 2:return s.abrupt("return",(v=s.sent).default.apply(v,t));case 3:case"end":return s.stop()}},n)}));function a(){return d.apply(this,arguments)}return a}()}},"docs-pwd-score-demo-1":{component:l.memo(l.lazy(S()(u()().mark(function d(){var a,n,v,t,m,s,E;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return a=y.sent,n=a.PwdScore,y.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return v=y.sent,t=v.useMemo,m=v.useState,y.next=11,Promise.resolve().then(e.bind(e,52872));case 11:return s=y.sent,E=s.Button,y.abrupt("return",{default:function(){var $=m(),C=x()($,2),B=C[0],O=C[1],G=t(function(){return[{color:"#a0133d",label:"\u975E\u5E38\u5F31",value:11},{color:"#2f9715",label:"\u5F3A",value:13},{color:"#ffa500",label:"\u4E00\u822C",value:12}]},[]),J=function(){if(B===void 0)return O(11);if(B===13)return O(void 0);O(B+1)};return l.createElement(l.Fragment,null,l.createElement(n,{value:B,scoreList:G}),l.createElement(E,{onClick:J},"\u8C03\u6574\u5F3A\u5EA6"))}});case 14:case"end":return y.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-1",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(l,2)),antd:I},renderOpts:{compile:function(){var d=S()(u()().mark(function n(){var v,t=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(250).then(e.bind(e,90250));case 2:return s.abrupt("return",(v=s.sent).default.apply(v,t));case 3:case"end":return s.stop()}},n)}));function a(){return d.apply(this,arguments)}return a}()}},"docs-pwd-score-demo-2":{component:l.memo(l.lazy(S()(u()().mark(function d(){var a,n;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return a=t.sent,n=a.PwdScore,t.abrupt("return",{default:function(){return l.createElement(l.Fragment,null,l.createElement(n,{value:0,reverse:!0}),l.createElement(n,{value:1,reverse:!0}),l.createElement(n,{value:2,reverse:!0}),l.createElement(n,{value:3,reverse:!0}),l.createElement(n,{value:4,reverse:!0}))}});case 5:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-2",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore } from 'izid'

export default () => {
    return <>
        <PwdScore value={0} reverse />
        <PwdScore value={1} reverse />
        <PwdScore value={2} reverse />
        <PwdScore value={3} reverse />
        <PwdScore value={4} reverse />
    </>
}`},izid:{type:"NPM",value:"0.1.27"}},entry:"index.jsx"},context:{izid:h},renderOpts:{compile:function(){var d=S()(u()().mark(function n(){var v,t=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(250).then(e.bind(e,90250));case 2:return s.abrupt("return",(v=s.sent).default.apply(v,t));case 3:case"end":return s.stop()}},n)}));function a(){return d.apply(this,arguments)}return a}()}},"docs-pwd-score-demo-3":{component:l.memo(l.lazy(S()(u()().mark(function d(){var a,n,v,t,m,s,E,f,y,T,$,C;return u()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Promise.resolve().then(e.bind(e,73117));case 2:return a=O.sent,n=a.PwdScore,v=a.FAntdInput,O.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return t=O.sent,m=t.useState,O.next=11,Promise.resolve().then(e.t.bind(e,21322,23));case 11:return s=O.sent,E=s.default,O.next=15,Promise.resolve().then(e.bind(e,52872));case 15:return f=O.sent,y=f.Form,T=f.Button,$=f.Input,C=f.Flex,O.abrupt("return",{default:function(){var J=m(),Y=x()(J,2),ae=Y[0],ce=Y[1],me=m({}),ve=x()(me,2),ee=ve[0],pe=ve[1],De=m(""),be=x()(De,2),ge=be[0],ue=be[1],ze=function(){ce(ge?E(ge).score:void 0)};return l.createElement(l.Fragment,null,l.createElement(y,{layout:"vertical",onFinish:pe},l.createElement(y.Item,{name:"password",label:l.createElement(C,{align:"center"},l.createElement("span",null,"\u5BC6\u7801"),l.createElement(n,{value:ae})),rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"},function(Se){var Ne=Se.getFieldValue;return{validator:function(We,je){return!je||ae>=1?Promise.resolve():Promise.reject("\u5BC6\u7801\u5F3A\u5EA6\u592A\u5F31")}}}]},l.createElement(v.Password,{state:[ge,ue],onChange:ze})),l.createElement(y.Item,null,l.createElement(T,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4"))),"\u63D0\u4EA4\u6570\u636E\uFF1A",JSON.stringify(ee))}});case 21:case"end":return O.stop()}},d)})))),asset:{type:"BLOCK",id:"docs-pwd-score-demo-3",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { PwdScore, FAntdInput } from 'izid'
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
}`},izid:{type:"NPM",value:"0.1.27"},react:{type:"NPM",value:"19.2.4"},zxcvbn:{type:"NPM",value:"4.4.2"},antd:{type:"NPM",value:"6.3.0"}},entry:"index.jsx"},context:{izid:h,react:c||(c=e.t(l,2)),zxcvbn:p,antd:I},renderOpts:{compile:function(){var d=S()(u()().mark(function n(){var v,t=arguments;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(250).then(e.bind(e,90250));case 2:return s.abrupt("return",(v=s.sent).default.apply(v,t));case 3:case"end":return s.stop()}},n)}));function a(){return d.apply(this,arguments)}return a}()}}}},11171:function(Q,A,e){"use strict";e.r(A),e.d(A,{demos:function(){return j}});var c=e(67294),j={}},73117:function(Q,A,e){"use strict";e.r(A),e.d(A,{AntdDragModal:function(){return We},Demo:function(){return j},DemoLog:function(){return je},FAntdInput:function(){return E},FAntdOrderTable:function(){return ve},FAntdTable:function(){return B},FLocalStore:function(){return sn},PwdScore:function(){return J}});var c=e(85893),j=function(){return(0,c.jsx)(c.Fragment,{children:"This is a demo component."})},x=e(97857),g=e.n(x),u=e(13769),i=e.n(u),S=e(28775),l=e(17691),h=e(67294),I=e(111),p=e(14615),o=["state","onChange"],r=["state","onInput"],d=["state","onChange","mode","strict"],a=function(b,D){var F=b.state,z=b.onChange,M=i()(b,o);return g()({ref:D,allowClear:!0,value:F==null?void 0:F[0],onChange:function(N){var U;N.target.value=(U=N.target.value)===null||U===void 0?void 0:U.trim();for(var V=arguments.length,R=new Array(V>1?V-1:0),K=1;K<V;K++)R[K-1]=arguments[K];F==null||F[1].apply(F,[N.target.value].concat(R)),z==null||z.apply(void 0,[N].concat(R))}},M)},n=(0,h.forwardRef)(function(P,b){return(0,c.jsx)(S.Z,g()({placeholder:"\u8BF7\u8F93\u5165"},a(P,b)))}),v=S.Z.$$typeof,t=S.Z.render,m=i()(S.Z,["$$typeof","render"]);for(var s in m)n[s]=S.Z[s];n.Password=(0,h.forwardRef)(function(P,b){return(0,c.jsx)(S.Z.Password,g()({placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},a(P,b)))}),n.Search=(0,h.forwardRef)(function(P,b){var D,F,z,M=function(){for(var R,K=arguments.length,Z=new Array(K),W=0;W<K;W++)Z[W]=arguments[W];(R=P.onSearch)===null||R===void 0||R.call.apply(R,[P].concat(Z))},H=(0,I.Z)(M,(D=P.throttleDuration)!==null&&D!==void 0?D:0,{trailing:(F=P.throttleTrailing)!==null&&F!==void 0?F:!1}),N=(0,h.useCallback)((0,p.Z)(M,(z=P.debounceDuration)!==null&&z!==void 0?z:500),[]),U=function(R){var K;P.autoSearch&&N(R.target.value),(K=P.onInput)===null||K===void 0||K.call(P,R)};return(0,c.jsx)(S.Z.Search,g()(g()({placeholder:P.autoSearch?"\u8F93\u5165\u540E\u81EA\u52A8\u641C\u7D22":"\u8BF7\u8F93\u5165"},a(P,b)),{},{onSearch:H,onInput:U}))}),n.TextArea=(0,h.forwardRef)(function(P,b){return(0,c.jsx)(S.Z.TextArea,g()(g()({placeholder:"\u8BF7\u8F93\u5165",showCount:!0,maxLength:100},a(P,b)),{},{style:g()({height:100},P==null?void 0:P.style)}))}),n.OTP=(0,h.forwardRef)(function(P,b){var D=P.state,F=P.onInput,z=i()(P,r);return(0,c.jsx)(S.Z.OTP,g()(g()({ref:b,value:D==null?void 0:D[0]},z),{},{onInput:function(H){D==null||D[1](H.join("")),F&&F(H)}}))}),n.Number=(0,h.forwardRef)(function(P,b){var D=P.state,F=P.onChange,z=P.mode,M=P.strict,H=i()(P,d),N=function(V){D==null||D[1](V),F&&F(V)};return(0,c.jsx)(l.Z,g()({value:D==null?void 0:D[0],onChange:N,placeholder:"\u8BF7\u8F93\u5165",ref:b,keyboard:!0,changeOnWheel:!0,min:M?0:void 0,max:z==="percent"&&M?100:void 0,step:M?1:.1,precision:M?0:void 0,suffix:z==="percent"?"%":void 0,prefix:z==="price"?"\uFFE5":void 0},H))});var E=n,f=e(5574),y=e.n(f),T=e(68694),$=["api","apiData","checkboxState","radioState","filter","getApiData","requestValid","requestPageConfig","successValid","mapperOptions","initPageSize","initCurrent","autoInit","pagination","columns","rowSelection","dataSource"],C=(0,h.forwardRef)(function(P,b){var D=P.api,F=P.apiData,z=P.checkboxState,M=P.radioState,H=P.filter,N=H===void 0?function(L){return!0}:H,U=P.getApiData,V=U===void 0?function(L){return L}:U,R=P.requestValid,K=R===void 0?function(L){return!0}:R,Z=P.requestPageConfig,W=Z===void 0?function(L,X){return{current:L,pageSize:X}}:Z,w=P.successValid,Pe=w===void 0?function(L){return L.code==="0"}:w,Ce=P.mapperOptions,fe=Ce===void 0?{total:"total",data:"data"}:Ce,ye=P.initPageSize,de=ye===void 0?10:ye,Ee=P.initCurrent,le=Ee===void 0?1:Ee,Ae=P.autoInit,xe=Ae===void 0?!0:Ae,re=P.pagination,se=re===void 0?{}:re,he=P.columns,Te=he===void 0?[]:he,k=P.rowSelection,oe=P.dataSource,ne=i()(P,$),cn=(0,h.useState)(de),Ze=y()(cn,2),Oe=Ze[0],mn=Ze[1],pn=(0,h.useState)(le),Ge=y()(pn,2),Fe=Ge[0],vn=Ge[1],In=(0,h.useState)(0),He=y()(In,2),fn=He[0],yn=He[1],xn=(0,h.useState)(!1),Je=y()(xn,2),hn=Je[0],Qe=Je[1],gn=(0,h.useState)([]),Ye=y()(gn,2),Me=Ye[0],ke=Ye[1],ie=(0,h.useCallback)(function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},X=L.current,te=X===void 0?Fe:X,q=L.pageSize,_=q===void 0?Oe:q,nn=L.data,En=nn===void 0?F:nn,tn=L.otherData,An=tn===void 0?{}:tn,Dn=!D&&oe;if(Dn)return Promise.resolve();var an=Object.assign({},W(te,_),En,An);if(K(an)){Qe(!0);var bn=te,zn=_;return D(an).then(function(rn){var dn=V(rn);if(Pe(dn)&&bn===te&&zn===_){var Ke,Tn=((Ke=dn[fe.data])!==null&&Ke!==void 0?Ke:[]).filter(N);yn(rn[fe.total]),ke(Tn),vn(te),mn(_)}}).finally(function(){Qe(!1)})}},[F,D,V,K,W,Pe,fe,N,oe]),qe=(0,h.useCallback)(function(L){return ie({current:le,pageSize:Oe,otherData:L})},[le,Oe,ie]),_e=(0,h.useCallback)(function(L){return ie({current:le,pageSize:de,data:{},otherData:L})},[le,de,ie]),en=(0,h.useCallback)(function(L){return ie({otherData:L})},[ie]),$e=(0,h.useCallback)(function(){return{tableData:Me,configCurrent:Fe,configPageSize:Oe,selected:ne!=null&&ne.rowKey?Me.filter(function(L){if(M)return L[ne.rowKey]===M[0];if(z){var X=z[0];return X.includes(L[ne.rowKey])}}):void 0}},[Me,Fe,Oe,z,M]),Sn=(0,h.useCallback)(function(){return $e().selected},[$e]),Be=(0,h.useRef)();(0,h.useImperativeHandle)(b,function(){var L,X;return{getTableData:ie,init:qe,reload:en,reset:_e,getInfo:$e,getSelected:Sn,nativeElement:(L=Be.current)===null||L===void 0?void 0:L.nativeElement,scrollTo:(X=Be.current)===null||X===void 0?void 0:X.scrollTo}},[ie,qe,en,_e,Be,$e]);var Pn=(0,h.useMemo)(function(){return z?g()(g()({type:"checkbox",selectedRowKeys:z[0]},k!=null?k:{}),{},{onChange:function(){for(var X,te=arguments.length,q=new Array(te),_=0;_<te;_++)q[_]=arguments[_];z[1](q[0]),k==null||(X=k.onChange)===null||X===void 0||X.call.apply(X,[k].concat(q))}}):M?g()(g()({type:"radio",selectedRowKeys:[M[0]]},k!=null?k:{}),{},{onChange:function(){for(var X,te=arguments.length,q=new Array(te),_=0;_<te;_++)q[_]=arguments[_];M[1](q[0][0]),k==null||(X=k.onChange)===null||X===void 0||X.call.apply(X,[k].concat(q))}}):k},[z,M,k]);return(0,h.useEffect)(function(){xe&&!oe&&ie()},[]),(0,h.useEffect)(function(){oe&&ke(oe)},[oe]),(0,c.jsx)(T.Z,g()(g()({ref:Be,loading:hn,dataSource:oe!=null?oe:Me},ne),{},{rowSelection:Pn,columns:Te==null?void 0:Te.map(function(L){var X;return L.key=(X=L.key)!==null&&X!==void 0?X:L.dataIndex,L}),pagination:se===!1?!1:g()(g()({showSizeChanger:!0,current:Fe,pageSize:Oe,total:fn,pageSizeOptions:[5,10,20,50]},se),{},{onChange:function(X,te){var q;ie({current:X,pageSize:te}),(q=se.onChange)===null||q===void 0||q.call(se,X,te),M&&M[1](void 0),z&&z[1]([])}})}))}),B=C,O={"pwd-score__wrapper":"ECZRO8sIboA2Jvnzyv_S","pwd-score__item":"VU4c6Mn96G89buIwnU4M","pwd-score__text":"mstSfTCI_kUSytZ2oNZG"},G=function(b){var D=b.value,F=b.scoreList,z=F===void 0?[{color:"#a0133d",label:"\u975E\u5E38\u5F31",value:0},{color:"#f7e84d",label:"\u8F83\u5F31",value:1},{color:"#ffa500",label:"\u4E00\u822C",value:2},{color:"#1677ff",label:"\u8F83\u5F3A",value:3},{color:"#2f9715",label:"\u5F3A",value:4}]:F,M=b.defaultColor,H=M===void 0?"#e2e2e2":M,N=b.reverse,U=N===void 0?!1:N,V=(0,h.useMemo)(function(){return z.sort(function(Z,W){return Z.value>W.value?U?-1:1:Z.value<W.value?U?1:-1:0})},[z,U]),R=(0,h.useCallback)(function(Z){var W=V.findIndex(function(w){return w.value===D});return W===Z?V[Z].color:H},[D,z]),K=(0,h.useMemo)(function(){var Z;return(Z=V.find(function(W){return W.value===D}))===null||Z===void 0?void 0:Z.label},[D,z]);return(0,c.jsxs)("div",{className:O["pwd-score__wrapper"],children:[Array.from({length:V.length},function(Z,W){return(0,c.jsx)("div",{className:O["pwd-score__item"],style:{backgroundColor:R(W)}},"pwd-score:"+W)}),(0,c.jsx)("span",{className:O["pwd-score__text"],style:{opacity:+!!K},children:K!=null?K:"\u65E0"})]})},J=G,Y={"table-tr__action-content":"WDUdr4YWFPgrL1jr_TcA","action-content__info":"Zy6XaXPuPGoOQGuKXA9r","action-content__item":"CuxqxKq6pw0Bf3SLqCjD","order-body_td":"X1OWv6o0pEijXwqe8ZVU","order-body_tr":"qBIN1Vcf0IsOpfXt3sKS",dark:"VuZ0QcgBeuQI7ua0zATw"},ae=["headerRender","headerOptions"],ce=["children","className","style"],me=(0,h.forwardRef)(function(P,b){var D=P.headerRender,F=P.headerOptions,z=i()(P,ae),M=function(w){return(0,c.jsx)("table",g()(g()({},w),{},{style:g()(g()({},w.style),{},{borderCollapse:"collapse"})}))},H=function(w){return(0,c.jsx)("thead",g()({},w))},N=function(w){return(0,c.jsx)("tr",g()({},w))},U=function(w){return(0,c.jsx)("th",g()({},w))},V=function(w){return(0,c.jsx)("tbody",g()({},w))},R=function(w){return(0,c.jsx)("td",g()(g()({},w),{},{style:g()(g()({},w.style),{},{borderRightStyle:"solid",borderRightWidth:"1px"}),className:Y["order-body_td"]}))},K=function(w){var Pe=w.children,Ce=w.className,fe=w.style,ye=i()(w,ce),de;if("data-row-key"in w){var Ee=Pe.at(-1);Ee&&(de=Ee.props.record)}return(0,c.jsxs)(c.Fragment,{children:[de&&(D||F)&&(0,c.jsx)("tr",g()(g()({},ye),{},{"data-row-key":w["data-row-key"]+"/children",children:(0,c.jsx)("td",{colSpan:"9",style:{padding:"0"},children:(0,c.jsxs)("div",{className:"".concat(Y["table-tr__action-content"]),children:[(0,c.jsx)("div",{className:Y["action-content__info"],children:D==null?void 0:D.map(function(le){return(0,c.jsxs)("span",{className:Y["action-content__item"],children:[le.label,"\uFF1A",le.render(de)]},le.label)})}),F&&F(de)]})})})),(0,c.jsx)("tr",g()(g()({},ye),{},{style:{style:fe,borderStyle:"solid",borderWidth:"1px 0 0 1px"},className:Y["order-body_tr"],children:Pe}))]})},Z=(0,h.useRef)({table:M,header:{wrapper:H,row:N,cell:U},body:{wrapper:V,row:K,cell:R}});return(0,c.jsx)(B,g()({ref:b,components:Z.current},z))}),ve=me,ee=e(85576),pe=e(61193),De=e.n(pe),be={"ant-model_scroll-body":"t8l_iIWb08irUTsYAUnf"},ge=["children","state","draggableProps","titleStyles"],ue=function(b){var D,F,z,M,H=b.children,N=b.state,U=b.draggableProps,V=b.titleStyles,R=i()(b,ge),K=(0,h.useRef)(),Z=(0,h.useState)({left:0,top:0,bottom:0,right:0}),W=y()(Z,2),w=W[0],Pe=W[1],Ce=(0,h.useState)(!0),fe=y()(Ce,2),ye=fe[0],de=fe[1],Ee=function(xe,re){var se,he,Te=window.document.documentElement,k=Te.clientWidth,oe=Te.clientHeight,ne=(se=K.current)===null||se===void 0?void 0:se.getBoundingClientRect();ne&&(U==null||(he=U.onStart)===null||he===void 0||he.call(U,ne),Pe({left:-ne.left+re.x,right:k-(ne.right-re.x),top:-ne.top+re.y,bottom:oe-(ne.bottom-re.y)}))},le=function(){var xe,re;N==null||(xe=N[1])===null||xe===void 0||xe.call(N,!1),R==null||(re=R.onCancel)===null||re===void 0||re.call(R)};return(0,c.jsx)(ee.Z,g()(g()({centered:!0},R),{},{classNames:g()(g()({},(D=R==null?void 0:R.classNames)!==null&&D!==void 0?D:{}),{},{body:"".concat(be["ant-model_scroll-body"]," ").concat((F=R==null||(z=R.classNames)===null||z===void 0?void 0:z.body)!==null&&F!==void 0?F:"")}),open:N==null?void 0:N[0],onCancel:le,title:(0,c.jsx)("div",{style:g()(g()({},V!=null?V:{}),{},{cursor:"move"}),onMouseOver:function(){return ye&&de(!1)},onMouseOut:function(){return de(!0)},children:(M=R==null?void 0:R.title)!==null&&M!==void 0?M:"\u9ED8\u8BA4\u6807\u9898"}),modalRender:function(xe){return(0,c.jsx)(De(),g()(g()({},U),{},{disabled:ye,bounds:w,nodeRef:K,onStart:function(se,he){return Ee(se,he)},children:(0,c.jsx)("div",{ref:K,children:xe})}))},children:H}))},ze=ee.Z.$$typeof,Se=ee.Z.render,Ne=i()(ee.Z,["$$typeof","render"]);for(var Re in Ne)ue[Re]=ee.Z[Re];var We=ue,je=function(){console.log("This is a demo log")},ln=e(81354),Ie=e.n(ln),Le=new Map,Ue=function(b,D){return Ie().AES.encrypt(JSON.stringify({value:b}),D).toString()},Ve=function(b,D){var F,z;return(F=JSON.parse((z=Ie().AES.decrypt(b,D).toString(Ie().enc.Utf8))!==null&&z!==void 0?z:""))===null||F===void 0?void 0:F.value},we=function(b,D){return Ie().PBKDF2(b,D,{keySize:128,iterations:128})+""},on=function(b){var D=b.key,F=b.value,z=b.duration,M=z===void 0?-1:z,H=b.local,N=H===void 0?!0:H,U=Ie().lib.WordArray.random(128),V=we(D,U),R=Ue(F,V),K=Ie().SHA3(D)+"",Z=Ue({value:R,vi:{delay:M===-1?M:Date.now()+M,salt:U}},D);N?localStorage.setItem(K,Z):Le.set(K,Z)},un=function(b){var D=function(z){var M=Ie().SHA3(z)+"",H=Le.get(M),N=localStorage.getItem(M);if(N&&!H&&(H=N),!!H){var U=Ve(H,z),V=U.vi,R=V.delay,K=V.salt,Z=U.value;if(R!==-1&&Date.now()>R)return Xe(z);var W=we(z,K);return Ve(Z,W)}};return Array.isArray(b)?b.map(D):D(b)},Xe=function(b){var D=function(z){var M=String(Ie().SHA3(z));Le.delete(M),localStorage.removeItem(M)};Array.isArray(b)?b.forEach(D):D(b)},sn={setItem:on,getItem:un,removeItem:Xe}},42611:function(Q,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"AntdDragModal",paraId:0,tocIndex:0},{value:"\u662F\u57FA\u4E8E",paraId:0,tocIndex:0},{value:"antd modal",paraId:0,tocIndex:0},{value:"\u5C01\u88C5\u7684\u57FA\u7840\u53EF\u62D6\u62FD\u5BF9\u8BDD\u6846\uFF0C\u5E76\u9650\u5236\u4E86",paraId:0,tocIndex:0},{value:"ant-modal-body",paraId:0,tocIndex:0},{value:"\u7684\u6700\u5927\u9AD8\u5EA6\uFF08\u60A8\u4F9D\u65E7\u53EF\u4EE5\u4F7F\u7528",paraId:0,tocIndex:0},{value:"classNames",paraId:0,tocIndex:0},{value:"\u53BB\u6539\u52A8\uFF09",paraId:0,tocIndex:0},{value:"\u9700\u8981\u5F15\u5165 ",paraId:1,tocIndex:0},{value:"react-draggable",paraId:1,tocIndex:0},{value:" \u4F7F\u7528\uFF0C",paraId:1,tocIndex:0},{value:"npm install react-draggable",paraId:1,tocIndex:0},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:2,tocIndex:2},{value:"Antd Modal",paraId:2,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B",paraId:3,tocIndex:2},{value:"\u8BF4\u660E",paraId:3,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:2},{value:"state",paraId:3,tocIndex:2},{value:"[string, function]",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"useState",paraId:3,tocIndex:2},{value:"\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A\u663E\u793A\u72B6\u6001",paraId:3,tocIndex:2},{value:"draggableProps",paraId:3,tocIndex:2},{value:"object",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"react-draggable",paraId:3,tocIndex:2},{value:"\u4E0B",paraId:3,tocIndex:2},{value:"Draggable",paraId:3,tocIndex:2},{value:"\u7EC4\u4EF6\u7684\u66F4\u591A",paraId:3,tocIndex:2},{value:"props",paraId:3,tocIndex:2},{value:"titleStyles",paraId:3,tocIndex:2},{value:"object",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"\u5BF9\u8BDD\u6846",paraId:3,tocIndex:2},{value:"title",paraId:3,tocIndex:2},{value:"\u7684\u7236\u7EA7\u76D2\u5B50\u7684\u6837\u5F0F",paraId:3,tocIndex:2},{value:"\u66F4\u591A\u65B9\u6CD5\u7EE7\u627F",paraId:4,tocIndex:3},{value:"Antd Modal",paraId:4,tocIndex:3}]},6627:function(Q,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2ADemo\u7EC4\u4EF6\uFF0C\u7528\u6765\u505A\u6587\u6863\u793A\u4F8B",paraId:0,tocIndex:0},{value:"\u5C5E\u6027\u540D",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"\u65B9\u6CD5\u540D",paraId:2,tocIndex:4},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"\u65B9\u6CD5\u540D",paraId:5,tocIndex:7},{value:"\u662F\u5426\u5FC5\u586B",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u5C5E\u6027\u540D",paraId:7,tocIndex:10},{value:"\u7C7B\u578B",paraId:7,tocIndex:10},{value:"\u662F\u5426\u5FC5\u586B",paraId:7,tocIndex:10},{value:"\u8BF4\u660E",paraId:7,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:10},{value:"\u65B9\u6CD5\u540D",paraId:8,tocIndex:11},{value:"\u662F\u5426\u5FC5\u586B",paraId:8,tocIndex:11},{value:"\u8BF4\u660E",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u8BF4\u660E",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12}]},76057:function(Q,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2ADemo\u5DE5\u5177\uFF0C\u7528\u6765\u505A\u6587\u6863\u793A\u4F8B",paraId:0,tocIndex:0},{value:"\u8BF7\u524D\u5F80\u63A7\u5236\u53F0\u67E5\u770B",paraId:1,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u586B",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3}]},87455:function(Q,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2A\u6709\u5404\u79CD\u5E38\u89C1\u4E1A\u52A1\u573A\u666F\u7684Antd Input\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:1,tocIndex:2},{value:"\u9700\u8981\u5F15\u5165 ",paraId:2,tocIndex:2},{value:"lodash-es",paraId:2,tocIndex:2},{value:" \u4F7F\u7528\uFF0C",paraId:2,tocIndex:2},{value:"npm install lodash-es",paraId:2,tocIndex:2},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:3,tocIndex:3},{value:"\u53EF\u4EE5\u4F7F\u7528",paraId:4},{value:"debounceDuration",paraId:4},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:4},{value:"500",paraId:4},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:4},{value:"\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:5,tocIndex:4},{value:"\u4F7F\u7528",paraId:6},{value:"throttleDuration",paraId:6},{value:"\u5C5E\u6027\u63A7\u5236\u9632\u6296\u65F6\u95F4\uFF0C\u9ED8\u8BA4",paraId:6},{value:"0",paraId:6},{value:"\uFF08\u6BEB\u79D2\uFF09",paraId:6},{value:"\u4F7F\u7528",paraId:6},{value:"throttleTrailing",paraId:6},{value:"\u5C5E\u6027\u63A7\u5236\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u641C\u7D22\uFF0C\u9ED8\u8BA4",paraId:6},{value:"false",paraId:6},{value:"\u5728\u8868\u5355\u4E2D\u65B9\u6CD5\u4F7F\u7528\u540CAntd Input\uFF0C\u4F7F\u7528F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8F93\u51FA",paraId:7,tocIndex:11},{value:"\u4F60\u4E0D\u80FD\u5728\u8868\u5355\u4E2D\u4F7F\u7528setState\u53BB\u4FEE\u6539\u8868\u5355\u57DF\u7684\u503C\uFF0C\u8BE6\u89C1\uFF1A",paraId:8},{value:"FormItem",paraId:8},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:9,tocIndex:13},{value:"Antd Input",paraId:9,tocIndex:13},{value:"\u5C5E\u6027\u540D",paraId:10,tocIndex:13},{value:"\u7C7B\u578B",paraId:10,tocIndex:13},{value:"\u662F\u5426\u5FC5\u586B",paraId:10,tocIndex:13},{value:"\u8BF4\u660E",paraId:10,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:13},{value:"state",paraId:10,tocIndex:13},{value:"[string, function]",paraId:10,tocIndex:13},{value:"false",paraId:10,tocIndex:13},{value:"useState",paraId:10,tocIndex:13},{value:"\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:10,tocIndex:13},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:11,tocIndex:14},{value:"Antd Input.Search",paraId:11,tocIndex:14},{value:"\u9700\u8981\u5F15\u5165 ",paraId:12,tocIndex:14},{value:"lodash-es",paraId:12,tocIndex:14},{value:" \u4F7F\u7528\uFF0C",paraId:12,tocIndex:14},{value:"npm install lodash-es",paraId:12,tocIndex:14},{value:"\u5C5E\u6027\u540D",paraId:13,tocIndex:14},{value:"\u7C7B\u578B",paraId:13,tocIndex:14},{value:"\u662F\u5426\u5FC5\u586B",paraId:13,tocIndex:14},{value:"\u8BF4\u660E",paraId:13,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:14},{value:"state",paraId:13,tocIndex:14},{value:"[string, function]",paraId:13,tocIndex:14},{value:"false",paraId:13,tocIndex:14},{value:"useState",paraId:13,tocIndex:14},{value:"\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:13,tocIndex:14},{value:"autoSearch",paraId:13,tocIndex:14},{value:"function",paraId:13,tocIndex:14},{value:"false",paraId:13,tocIndex:14},{value:"\u8F93\u5165\u65F6\u662F\u5426\u81EA\u52A8\u4F7F\u7528\u9632\u6296\u641C\u7D22",paraId:13,tocIndex:14},{value:"debounceDuration",paraId:13,tocIndex:14},{value:"number",paraId:13,tocIndex:14},{value:"false",paraId:13,tocIndex:14},{value:"\u5F00\u542FautoSearch\u540E\uFF0C\u9632\u6296\u65F6\u95F4",paraId:13,tocIndex:14},{value:"500",paraId:13,tocIndex:14},{value:"throttleDuration",paraId:13,tocIndex:14},{value:"number",paraId:13,tocIndex:14},{value:"false",paraId:13,tocIndex:14},{value:"\u89E6\u53D1\u641C\u7D22\u4E8B\u4EF6\u65F6\u8282\u6D41\u65F6\u95F4",paraId:13,tocIndex:14},{value:"0",paraId:13,tocIndex:14},{value:"throttleTrailing",paraId:13,tocIndex:14},{value:"boolean",paraId:13,tocIndex:14},{value:"false",paraId:13,tocIndex:14},{value:"\u8282\u6D41\u641C\u7D22\u65F6\u95F4\u7ED3\u675F\u540E\u662F\u5426\u518D\u6B21\u89E6\u53D1\u641C\u7D22",paraId:13,tocIndex:14},{value:"false",paraId:13,tocIndex:14},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:14,tocIndex:15},{value:"Antd InputNumber",paraId:14,tocIndex:15},{value:"\u5C5E\u6027\u540D",paraId:15,tocIndex:15},{value:"\u7C7B\u578B",paraId:15,tocIndex:15},{value:"\u662F\u5426\u5FC5\u586B",paraId:15,tocIndex:15},{value:"\u8BF4\u660E",paraId:15,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:15},{value:"state",paraId:15,tocIndex:15},{value:"[string, function]",paraId:15,tocIndex:15},{value:"false",paraId:15,tocIndex:15},{value:"useState",paraId:15,tocIndex:15},{value:"\u521B\u5EFA\u7684state\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A",paraId:15,tocIndex:15},{value:"mode",paraId:15,tocIndex:15},{value:"price",paraId:15,tocIndex:15},{value:" ",paraId:15,tocIndex:15},{value:"percent",paraId:15,tocIndex:15},{value:"false",paraId:15,tocIndex:15},{value:"price",paraId:15,tocIndex:15},{value:"\u4EF7\u683C\u6A21\u5F0F\u3001",paraId:15,tocIndex:15},{value:"percent",paraId:15,tocIndex:15},{value:"\u767E\u5206\u6BD4\u6A21\u5F0F\uFF0C\u51FA\u73B0\u56FA\u5B9A\u7684\u683C\u5F0F",paraId:15,tocIndex:15},{value:"strict",paraId:15,tocIndex:15},{value:"boolean",paraId:15,tocIndex:15},{value:"false",paraId:15,tocIndex:15},{value:"\u4E25\u683C\u9650\u5236\uFF0C\u9650\u5236\u4E3A\u6B63\u6574\u6570\u3001\u6B65\u957F\u4E3A1\u3001\u767E\u5206\u6BD4\u6A21\u5F0F\u4E0B\u9650\u5236\u6700\u5927\u503C100",paraId:15,tocIndex:15},{value:"false",paraId:15,tocIndex:15},{value:"\u4E0EAntd Input.XXX\u76F8\u540C\uFF0C",paraId:16,tocIndex:16},{value:"Antd Input",paraId:16,tocIndex:16}]},8828:function(Q,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E",paraId:0,tocIndex:0},{value:"FAntdTable",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u5199\u7684\u8BA2\u5355\u8868\u683C\uFF0C\u539F\u7406\u662F\u4F7F\u7528\u4E86",paraId:0,tocIndex:0},{value:"antd table",paraId:0,tocIndex:0},{value:"\u7684\u81EA\u5B9A\u4E49",paraId:0,tocIndex:0},{value:"components",paraId:0,tocIndex:0},{value:`
\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u8BA2\u5355\u8868\u683C\u5728\u6BCF\u4E00\u9879\u6570\u636E\u7684\u5934\u90E8\u589E\u52A0\u4E86\u6570\u636E\u663E\u793A\u548C\u64CD\u4F5C\u7A7A\u95F4`,paraId:0,tocIndex:0},{value:"\u5176\u4ED6\u914D\u7F6E\u9879\u7EE7\u627F",paraId:2,tocIndex:2},{value:"FAntdTable",paraId:3,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:2},{value:"\u7C7B\u578B",paraId:4,tocIndex:2},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:2},{value:"\u8BF4\u660E",paraId:4,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:2},{value:"headerRender",paraId:4,tocIndex:2},{value:"{label: string, render: row => React}[]",paraId:4,tocIndex:2},{value:"false",paraId:4,tocIndex:2},{value:"\u5934\u90E8\u6570\u636E\u7684\u663E\u793A\u533A\u57DF",paraId:4,tocIndex:2},{value:"headerOptions",paraId:4,tocIndex:2},{value:"row => React",paraId:4,tocIndex:2},{value:"false",paraId:4,tocIndex:2},{value:"\u5934\u90E8\u6570\u636E\u7684\u64CD\u4F5C\u533A\u57DF",paraId:4,tocIndex:2}]},12808:function(Q,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"FAntdTable",paraId:0,tocIndex:0},{value:"\u662F\u5BF9Antd Table\u7684\u5C01\u88C5\uFF0C\u53EA\u9700\u8981\u6709api\u548Ccolumns\u5C5E\u6027\u5C31\u80FD\u5FEB\u901F\u6E32\u67D3\u51FA\u4E00\u4E2A\u5206\u9875\u8868\u683C\uFF0C\u5BF9Antd Table\u539F\u751F\u6539\u52A8\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"\u5185\u7F6E",paraId:1,tocIndex:0},{value:"api",paraId:1,tocIndex:0},{value:"\u8BF7\u6C42\uFF0C\u53EF\u4F7F\u7528",paraId:1,tocIndex:0},{value:"ref",paraId:1,tocIndex:0},{value:"\u63A7\u5236\u8BF7\u6C42",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\u4E0D\u5B58\u5728",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u65F6\uFF0C\u5982\u679C",paraId:1,tocIndex:0},{value:"dataIndex",paraId:1,tocIndex:0},{value:"\u6709\u503C\uFF0C\u5219\u81EA\u52A8\u5C06",paraId:1,tocIndex:0},{value:"dataIndex",paraId:1,tocIndex:0},{value:"\u5F53\u4F5C",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"checkboxState",paraId:1,tocIndex:0},{value:"\u548C",paraId:1,tocIndex:0},{value:"radioState",paraId:1,tocIndex:0},{value:"\u80FD\u66F4\u5FEB\u7684\u4F7F\u7528\u591A\u9009/\u5355\u9009",paraId:1,tocIndex:0},{value:"\u6709\u4E00\u5957\u9ED8\u8BA4\u7684\u5B57\u6BB5\u6620\u5C04\u3001\u521D\u59CB\u5206\u9875\u914D\u7F6E\uFF0C\u89C1\u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:0},{value:"\u6CE8\u610F\u4EE5\u4E0B\u89C4\u5B9A\uFF1A",paraId:2},{value:"\u5206\u9875\u53C2\u6570\u4E3Acurrent\u3001pageSize",paraId:3},{value:"api",paraId:3},{value:"\u8FD4\u56DE\u7684\u662F\u63A5\u53E3\u6570\u636E\uFF0C\u800C\u4E0D\u662F",paraId:3},{value:"response",paraId:3},{value:"\u6210\u529F\u72B6\u6001\u4E3A",paraId:3},{value:"code==='0'",paraId:3},{value:"\u603B\u6570\u636E\u6761\u6570\u5B57\u6BB5\u4E3A",paraId:3},{value:"total",paraId:3},{value:"\u6570\u636E\u5B57\u6BB5\u4E3A",paraId:3},{value:"data",paraId:3},{value:"\u5047\u8BBE\u63A5\u53E3\u8FD4\u56DEresponse\u5BF9\u8C61\uFF0C\u5206\u9875\u53C2\u6570\u4E3ApageSearch: { limit, page }\uFF0C\u8FD4\u56DE\u4F53\u91CC\u9762\u662Fsize\u548Crecords\uFF0C\u6210\u529F\u6761\u4EF6\u4E3Acode==='OK'",paraId:4,tocIndex:2},{value:"\u7ED1\u5B9A",paraId:5,tocIndex:4},{value:"checkboxState",paraId:5,tocIndex:4},{value:"\u548C",paraId:5,tocIndex:4},{value:"rowKey",paraId:5,tocIndex:4},{value:"\u5373\u53EF\uFF0C\u60F3\u8981\u83B7\u53D6\u9009\u4E2D\u7684\u5168\u90E8\u6570\u636E\u53EF\u4EE5\u4F7F\u7528",paraId:5,tocIndex:4},{value:"ref",paraId:5,tocIndex:4},{value:"\u4E2D\u7684",paraId:5,tocIndex:4},{value:"getSelected",paraId:5,tocIndex:4},{value:"\u65B9\u6CD5",paraId:5,tocIndex:4},{value:"\u4E0E\u591A\u9009\u7C7B\u4F3C\uFF0C\u7ED1\u5B9A",paraId:6,tocIndex:5},{value:"radioState",paraId:6,tocIndex:5},{value:"\u4EE5\u5FEB\u901F\u5B9E\u73B0\u5355\u9009\uFF0C\u7ED1\u5B9A\u503C\u4E3A",paraId:6,tocIndex:5},{value:"rowKey",paraId:6,tocIndex:5},{value:"\u7684\u503C\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6570\u7EC4",paraId:6,tocIndex:5},{value:"\u4F7F\u7528",paraId:7,tocIndex:6},{value:"filter",paraId:7,tocIndex:6},{value:"\u8FC7\u6EE4\u6389\u7B2C\u4E94\u6761\u6570\u636E",paraId:7,tocIndex:6},{value:"\u4F7F\u7528",paraId:8,tocIndex:7},{value:"requestValid",paraId:8,tocIndex:7},{value:"\u62E6\u622A\u7B2C\u4E8C\u9875\u7684\u8BF7\u6C42",paraId:8,tocIndex:7},{value:"\u5728",paraId:9,tocIndex:8},{value:"ref",paraId:9,tocIndex:8},{value:"\u5BF9\u8C61\u4E2D\u7684\u5404\u4E2A\u5237\u65B0\u65B9\u6CD5\u4E0A\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61\u5373\u53EF\uFF0C\u4F1A\u88AB\u5F53\u4F5C\u989D\u5916\u7684\u4E34\u65F6\u67E5\u8BE2\u53C2\u6570",paraId:9,tocIndex:8},{value:"\u53EF\u53C2\u8003",paraId:10,tocIndex:10},{value:"Antd Table",paraId:10,tocIndex:10},{value:"\u914D\u7F6E\u9879\u7EE7\u627F",paraId:11,tocIndex:11},{value:"Antd Table",paraId:11,tocIndex:11},{value:"\u5C5E\u6027\u540D",paraId:12,tocIndex:11},{value:"\u7C7B\u578B",paraId:12,tocIndex:11},{value:"\u662F\u5426\u5FC5\u586B",paraId:12,tocIndex:11},{value:"\u8BF4\u660E",paraId:12,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:11},{value:"api",paraId:12,tocIndex:11},{value:"apiData => Promise",paraId:12,tocIndex:11},{value:"\u662F",paraId:12,tocIndex:11},{value:"\u83B7\u53D6\u8868\u683C\u6570\u636E\u7684\u63A5\u53E3\u51FD\u6570",paraId:12,tocIndex:11},{value:"apiData",paraId:12,tocIndex:11},{value:"object",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"api\u51FD\u6570\u8BF7\u6C42\u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A",paraId:12,tocIndex:11},{value:"apiData",paraId:12,tocIndex:11},{value:" + ",paraId:12,tocIndex:11},{value:"requestPageConfig",paraId:12,tocIndex:11},{value:"checkboxState",paraId:12,tocIndex:11},{value:"array",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u591A\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:12,tocIndex:11},{value:"radioState",paraId:12,tocIndex:11},{value:"array",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"\u7528\u4E8E\u5FEB\u901F\u5EFA\u7ACB\u5355\u9009\u7ED1\u5B9A\u5173\u7CFB",paraId:12,tocIndex:11},{value:"filter",paraId:12,tocIndex:11},{value:"itemData => boolean",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"\u8FC7\u6EE4\u8868\u683C\u6570\u636E\uFF0C\u540C",paraId:12,tocIndex:11},{value:"Array.filter",paraId:12,tocIndex:11},{value:"data => true",paraId:12,tocIndex:11},{value:"getApiData",paraId:12,tocIndex:11},{value:"response => object",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"\u8FD4\u56DE\u540E\u7AEF\u63A5\u53E3\u54CD\u5E94\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u6D4F\u89C8\u5668response\uFF08\u5982\u679C\u63A5\u53E3\u8FD4\u56DE\u662Fresponse\uFF0C\u5EFA\u8BAE\u53BB\u8C03\u6574\u54CD\u5E94\u62E6\u622A\u5668\uFF0C\u65E0\u6CD5\u8C03\u6574\u62E6\u622A\u5668\u53EF\u4EE5\u6539\u4E3A",paraId:12,tocIndex:11},{value:"response => response.data",paraId:12,tocIndex:11},{value:"\uFF09",paraId:12,tocIndex:11},{value:"response => response",paraId:12,tocIndex:11},{value:"requestValid",paraId:12,tocIndex:11},{value:"requestArgs => boolean",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"\u662F\u5426\u8FDB\u884C\u8BF7\u6C42\uFF0C\u53EF\u7528\u4E8E\u5728\u4E0D\u6EE1\u8DB3\u8BF7\u6C42\u6761\u4EF6\u65F6\u62E6\u622A\u8BF7\u6C42\uFF0C",paraId:12,tocIndex:11},{value:"requestArgs",paraId:12,tocIndex:11},{value:"\u63A5\u53E3\u8BF7\u6C42\u53C2\u6570",paraId:12,tocIndex:11},{value:"requestArgs => true",paraId:12,tocIndex:11},{value:"requestPageConfig",paraId:12,tocIndex:11},{value:"(current, pageSize) => object",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"\u8FD4\u56DE\u4F20\u9012\u63A5\u53E3\u7684\u5206\u9875\u914D\u7F6E\uFF0C\u9ED8\u8BA4",paraId:12,tocIndex:11},{value:"current, pageSize",paraId:12,tocIndex:11},{value:"\u53C2\u6570\uFF0Ccurrent\u5F53\u524D\u9875\uFF0CpageSize\u5F53\u524D\u6761\u6570",paraId:12,tocIndex:11},{value:"(current, pageSize) => ({ current, pageSize })",paraId:12,tocIndex:11},{value:"successValid",paraId:12,tocIndex:11},{value:"response => boolean",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"\u5224\u65AD\u8BF7\u6C42\u662F\u5426\u6210\u529F\uFF0C\u9ED8\u8BA4\u5224\u65AD\u54CD\u5E94\u6570\u636E\u4E2D\u7684",paraId:12,tocIndex:11},{value:"code",paraId:12,tocIndex:11},{value:"\u4E3A\u5B57\u7B26\u4E32",paraId:12,tocIndex:11},{value:"0",paraId:12,tocIndex:11},{value:"data => data.code === '0'",paraId:12,tocIndex:11},{value:"mapperOptions",paraId:12,tocIndex:11},{value:"object",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"\u8868\u683C\u6570\u636E\u6620\u5C04\u5B57\u6BB5\u540D\u79F0",paraId:12,tocIndex:11},{value:"{ total: 'total', data: 'data' }",paraId:12,tocIndex:11},{value:"initPageSize",paraId:12,tocIndex:11},{value:"number",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u6761\u6570",paraId:12,tocIndex:11},{value:"10",paraId:12,tocIndex:11},{value:"initCurrent",paraId:12,tocIndex:11},{value:"number",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"\u521D\u59CB\u8868\u683C\u6570\u636E\u9875\u6570",paraId:12,tocIndex:11},{value:"1",paraId:12,tocIndex:11},{value:"autoInit",paraId:12,tocIndex:11},{value:"boolean",paraId:12,tocIndex:11},{value:"\u5426",paraId:12,tocIndex:11},{value:"\u662F\u5426\u81EA\u52A8\u83B7\u53D6\u8868\u683C\u6570\u636E",paraId:12,tocIndex:11},{value:"true",paraId:12,tocIndex:11},{value:"\u65B9\u6CD5\u540D",paraId:13,tocIndex:12},{value:"\u8BF4\u660E",paraId:13,tocIndex:12},{value:"\u7C7B\u578B",paraId:13,tocIndex:12},{value:"getTableData",paraId:13,tocIndex:12},{value:"\u7EC4\u4EF6\u66B4\u9732\u7684\u67E5\u8BE2\u65B9\u6CD5\uFF0C\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F20\u5165data\u53C2\u6570\u4F1A\u8986\u76D6apiData\uFF0C\u9700\u8981\u643A\u5E26\u5176\u4ED6\u53C2\u6570\u8BF7\u4F7F\u7528otherData",paraId:13,tocIndex:12},{value:"({ current\u3001pageSize\u3001data\u3001otherData }) => Promise",paraId:13,tocIndex:12},{value:"init",paraId:13,tocIndex:12},{value:"\u6839\u636E\u5F53\u524D\u6761\u6570\u3001\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u521D\u59CB\u9875\u6570\u7684\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u989D\u5916\u67E5\u8BE2\u6570\u636E\uFF0C\u4E00\u822C\u7528\u4E8E\u67E5\u8BE2",paraId:13,tocIndex:12},{value:"otherData => Promise",paraId:13,tocIndex:12},{value:"reset",paraId:13,tocIndex:12},{value:"\u4F7F\u7528\u521D\u59CB\u6761\u6570\u3001\u521D\u59CB\u9875\u6570\u3001\u7A7A\u67E5\u8BE2\u6761\u4EF6\u83B7\u53D6\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u91CD\u7F6E",paraId:13,tocIndex:12},{value:"otherData => Promise",paraId:13,tocIndex:12},{value:"reload",paraId:13,tocIndex:12},{value:"\u5237\u65B0\u5F53\u524D\u9875\u9762\u6570\u636E\uFF0C\u53EF\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5F53\u4F5C\u67E5\u8BE2\u6761\u4EF6",paraId:13,tocIndex:12},{value:"otherData => Promise",paraId:13,tocIndex:12},{value:"getInfo",paraId:13,tocIndex:12},{value:"\u83B7\u53D6\u5F53\u524D\u8868\u683C\u8BF7\u6C42\u6570\u636E",paraId:13,tocIndex:12},{value:"() => ({ current, pageSize, data })",paraId:13,tocIndex:12},{value:"getSelected",paraId:13,tocIndex:12},{value:"\u83B7\u53D6\u5F53\u524D\u8868\u683C\u9009\u4E2D\u6570\u636E",paraId:13,tocIndex:12},{value:"() => array|string|number ",paraId:13,tocIndex:12}]},44061:function(Q,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"FLocalStore",paraId:0,tocIndex:0},{value:"\u5BF9",paraId:0,tocIndex:0},{value:"localStorage",paraId:0,tocIndex:0},{value:"\u8FDB\u884C\u4E86\u5C01\u88C5\uFF0C\u7528\u4E8E\u5728\u672C\u5730\u5B89\u5168\u5730\u5B58\u53D6\u654F\u611F\u6570\u636E\u3002 \u4E3A\u4E86\u907F\u514D",paraId:0,tocIndex:0},{value:"key",paraId:0,tocIndex:0},{value:"\u66B4\u9732\uFF0C\u4F1A\u5148\u5BF9",paraId:0,tocIndex:0},{value:"key",paraId:0,tocIndex:0},{value:"\u8FDB\u884C",paraId:0,tocIndex:0},{value:"\u4E0D\u53EF\u9006\u6563\u5217\u52A0\u5BC6",paraId:0,tocIndex:0},{value:`
\uFF0C\u540C\u65F6\u4F7F\u7528`,paraId:0,tocIndex:0},{value:"\u968F\u673A\u76D0",paraId:0,tocIndex:0},{value:"+",paraId:0,tocIndex:0},{value:"PBKDF2",paraId:0,tocIndex:0},{value:"\u751F\u6210\u5BC6\u94A5\uFF0C\u5BF9\u5B58\u50A8\u7684\u5185\u5BB9\u8FDB\u884C\u52A0\u5BC6\u3002 \u4F18\u70B9\u5982\u4E0B\uFF1A",paraId:0,tocIndex:0},{value:"\u5B58\u50A8\u548C\u53D6\u51FA\u65F6\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u8F6C\u6362",paraId:1,tocIndex:0},{value:"JSON",paraId:1,tocIndex:0},{value:"\u4E86",paraId:1,tocIndex:0},{value:"\u5728",paraId:1,tocIndex:0},{value:"localStorage",paraId:1,tocIndex:0},{value:"\u4E2D\u53EA\u80FD\u770B\u5230\u52A0\u5BC6\u540E\u7684",paraId:1,tocIndex:0},{value:"key",paraId:1,tocIndex:0},{value:"\u548C",paraId:1,tocIndex:0},{value:"value",paraId:1,tocIndex:0},{value:"\uFF0C\u6570\u636E\u66F4\u52A0\u5B89\u5168",paraId:1,tocIndex:0},{value:"\u53EF\u8BBE\u7F6E\u6570\u636E\u8FC7\u671F\u65F6\u95F4",paraId:1,tocIndex:0},{value:"\u53EF\u914D\u7F6E\u4E0D\u5B58\u5165\u672C\u5730\uFF0C\u5F53\u4F5C\u5168\u5C40cache\u4F7F\u7528",paraId:1,tocIndex:0},{value:"\u9700\u8981\u5F15\u5165 ",paraId:2,tocIndex:0},{value:"crypto-js",paraId:2,tocIndex:0},{value:" \u4F7F\u7528\uFF0C",paraId:2,tocIndex:0},{value:"npm install crypto-js",paraId:2,tocIndex:0},{value:"\u5C06\u6570\u636E\u5B58\u50A8\u5230",paraId:3,tocIndex:1},{value:"localStorage",paraId:3,tocIndex:1},{value:"\uFF0C\u8BF7\u524D\u5F80\u63A7\u5236\u53F0\u67E5\u770B",paraId:3,tocIndex:1},{value:"localStorage",paraId:3,tocIndex:1},{value:"\u548C",paraId:3,tocIndex:1},{value:"console",paraId:3,tocIndex:1},{value:"\u914D\u7F6E",paraId:4,tocIndex:2},{value:"local",paraId:4,tocIndex:2},{value:"\u4E3A",paraId:4,tocIndex:2},{value:"false",paraId:4,tocIndex:2},{value:"\uFF0C\u5C06\u6570\u636E\u5B58\u50A8\u5230",paraId:4,tocIndex:2},{value:"\u5168\u5C40Map",paraId:4,tocIndex:2},{value:"\uFF0C\u6D4F\u89C8\u5668\u5237\u65B0\u540E\u6570\u636E\u5931\u6548\uFF0C\u8BF7\u524D\u5F80\u63A7\u5236\u53F0\u67E5\u770B",paraId:4,tocIndex:2},{value:"console",paraId:4,tocIndex:2},{value:"\u7528\u4E8E\u5C06\u6570\u636E\u52A0\u5BC6\u5B58\u50A8\u5230",paraId:5,tocIndex:4},{value:"Map",paraId:5,tocIndex:4},{value:"\u6216",paraId:5,tocIndex:4},{value:"localStorage",paraId:5,tocIndex:4},{value:"\uFF0C",paraId:5,tocIndex:4},{value:"setItem",paraId:5,tocIndex:4},{value:"\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61",paraId:5,tocIndex:4},{value:"options",paraId:5,tocIndex:4},{value:"\uFF0C\u65E0\u8FD4\u56DE\u503C",paraId:5,tocIndex:4},{value:"\u53C2\u6570\u540D",paraId:6,tocIndex:5},{value:"\u7C7B\u578B",paraId:6,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:6,tocIndex:5},{value:"\u8BF4\u660E",paraId:6,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:5},{value:"key",paraId:6,tocIndex:5},{value:"string",paraId:6,tocIndex:5},{value:"\u662F",paraId:6,tocIndex:5},{value:"\u5B58\u50A8\u7684key",paraId:6,tocIndex:5},{value:"value",paraId:6,tocIndex:5},{value:"string | number | object",paraId:6,tocIndex:5},{value:"\u662F",paraId:6,tocIndex:5},{value:"\u5B58\u50A8\u7684\u5185\u5BB9",paraId:6,tocIndex:5},{value:"duration",paraId:6,tocIndex:5},{value:"number",paraId:6,tocIndex:5},{value:"\u5426",paraId:6,tocIndex:5},{value:"\u5B58\u50A8\u7684\u6709\u6548\u671F\uFF08\u6BEB\u79D2\uFF09\uFF0C-1\u8868\u793A\u4E00\u76F4\u6709\u6548",paraId:6,tocIndex:5},{value:"-1",paraId:6,tocIndex:5},{value:"local",paraId:6,tocIndex:5},{value:"boolean",paraId:6,tocIndex:5},{value:"\u5426",paraId:6,tocIndex:5},{value:"\u662F\u5426\u5B58\u5165",paraId:6,tocIndex:5},{value:"localStorage",paraId:6,tocIndex:5},{value:"\uFF0C",paraId:6,tocIndex:5},{value:"false",paraId:6,tocIndex:5},{value:"\u5219\u4E3A\u5B58\u5165",paraId:6,tocIndex:5},{value:"Map",paraId:6,tocIndex:5},{value:"\u5F53\u4F5C\u4E34\u65F6\u6570\u636E\u4F7F\u7528",paraId:6,tocIndex:5},{value:"true",paraId:6,tocIndex:5},{value:"\u7528\u4E8E\u53D6\u51FA\u5B58\u50A8\u7684\u6570\u636E\uFF0C",paraId:7,tocIndex:6},{value:"getItem",paraId:7,tocIndex:6},{value:"\u53EA\u9700\u8981\u4F20\u5165",paraId:7,tocIndex:6},{value:"key",paraId:7,tocIndex:6},{value:"\u5373\u53EF\uFF0C\u8FD4\u56DE",paraId:7,tocIndex:6},{value:"setItem",paraId:7,tocIndex:6},{value:"\u5B58\u5165\u7684",paraId:7,tocIndex:6},{value:"value",paraId:7,tocIndex:6},{value:"\uFF0C\u6570\u636E\u4E3A\u7A7A\u6216\u8FC7\u671F\u65F6\u8FD4\u56DE",paraId:7,tocIndex:6},{value:"undefined",paraId:7,tocIndex:6},{value:"\u6CE8\u610F\u4E8B\u9879",paraId:8,tocIndex:6},{value:"\u5982\u679C\u4F20\u5165\u591A\u4E2Akey\u65F6\uFF0C\u8FD4\u56DE\u503C\u4E3A\u6570\u7EC4",paraId:9,tocIndex:6},{value:"\u5F53",paraId:9,tocIndex:6},{value:"Map",paraId:9,tocIndex:6},{value:"\u6570\u636E\u548C",paraId:9,tocIndex:6},{value:"localStorage",paraId:9,tocIndex:6},{value:"\u90FD\u5B58\u5728\u6570\u636E\u65F6\uFF0C\u4EE5",paraId:9,tocIndex:6},{value:"Map",paraId:9,tocIndex:6},{value:"\u6570\u636E\u4E3A\u4F18\u5148",paraId:9,tocIndex:6},{value:"\u53C2\u6570\u540D",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"\u662F\u5426\u5FC5\u586B",paraId:10,tocIndex:6},{value:"\u8BF4\u660E",paraId:10,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:6},{value:"key",paraId:10,tocIndex:6},{value:"string | array",paraId:10,tocIndex:6},{value:"\u662F",paraId:10,tocIndex:6},{value:"\u5B58\u50A8\u7684key\uFF0C\u4F20\u5165\u6570\u7EC4\u83B7\u53D6\u591A\u4E2A",paraId:10,tocIndex:6},{value:"\u7528\u4E8E\u5220\u9664\u5B58\u50A8\u7684\u6570\u636E\uFF0C",paraId:11,tocIndex:7},{value:"removeItem",paraId:11,tocIndex:7},{value:"\u53EA\u9700\u8981\u4F20\u5165",paraId:11,tocIndex:7},{value:"key",paraId:11,tocIndex:7},{value:"\u5373\u53EF\uFF0C\u65E0\u8FD4\u56DE\u503C",paraId:11,tocIndex:7},{value:"\u53C2\u6570\u540D",paraId:12,tocIndex:7},{value:"\u7C7B\u578B",paraId:12,tocIndex:7},{value:"\u662F\u5426\u5FC5\u586B",paraId:12,tocIndex:7},{value:"\u8BF4\u660E",paraId:12,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:7},{value:"key",paraId:12,tocIndex:7},{value:"string | array",paraId:12,tocIndex:7},{value:"\u662F",paraId:12,tocIndex:7},{value:"\u5B58\u50A8\u7684key\uFF0C\u4F20\u5165\u6570\u7EC4\u5220\u9664\u591A\u4E2A",paraId:12,tocIndex:7}]},6282:function(Q,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:"\u8FD9\u662F\u4E00\u4E2A\u663E\u793A\u5BC6\u7801\u5F3A\u5EA6\u7684\u663E\u793A\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u6709\u4E94\u4E2A\u7B49\u7EA7(0-4)\uFF0C\u53EF\u81EA\u5B9A\u4E49\u7B49\u7EA7",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E",paraId:1,tocIndex:2},{value:"scoreList",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u6765\u6E32\u67D3\u989C\u8272\u548C\u6587\u5B57\uFF0C\u6839\u636E",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\u8FDB\u884C\u6392\u5E8F",paraId:1,tocIndex:2},{value:"\u4F7F\u7528",paraId:2,tocIndex:3},{value:"reverse",paraId:2,tocIndex:3},{value:"\u8C03\u6574\u6E32\u67D3\u987A\u5E8F",paraId:2,tocIndex:3},{value:"\u9700\u8981\u5F15\u5165\u5E93",paraId:3,tocIndex:4},{value:"zxcvbn",paraId:3,tocIndex:4},{value:"\u4F7F\u7528\uFF0C\u5728\u8868\u5355\u4E2D\u81EA\u52A8\u8BA1\u7B97\u5BC6\u7801\u5F3A\u5EA6\uFF0C\u5E76\u9650\u5236\u4F7F\u7528\u7684\u5BC6\u7801\u5F3A\u5EA6\u4E0D\u80FD\u4E3A",paraId:3,tocIndex:4},{value:"\u975E\u5E38\u5F31",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:5},{value:"\u7C7B\u578B",paraId:4,tocIndex:5},{value:"\u662F\u5426\u5FC5\u586B",paraId:4,tocIndex:5},{value:"\u8BF4\u660E",paraId:4,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:5},{value:"value",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"\u8BBE\u7F6E\u5BC6\u7801\u5F3A\u5EA6\uFF0C\u9ED8\u8BA4\u53D6\u503C\u8303\u56F40-4",paraId:4,tocIndex:5},{value:"scoreList",paraId:4,tocIndex:5},{value:"array",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u6E32\u67D3",paraId:4,tocIndex:5},{value:'[{"color":"#a0133d","label":"\u975E\u5E38\u5F31","value":0},{"color":"#f7e84d","label":"\u8F83\u5F31","value":1},{"color":"#ffa500","label":"\u4E00\u822C","value":2},{"color":"#1677ff","label":"\u8F83\u5F3A","value":3},{"color":"#2f9715","label":"\u5F3A","value":4}]',paraId:4,tocIndex:5},{value:"defaultColor",paraId:4,tocIndex:5},{value:"color",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"\u8BBE\u7F6E\u9ED8\u8BA4\u5E95\u8272",paraId:4,tocIndex:5},{value:"'#e2e2e2'",paraId:4,tocIndex:5},{value:"reverse",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"\u8C03\u6574\u5F3A\u5EA6\u663E\u793A\u987A\u5E8F",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5}]},51446:function(Q,A,e){"use strict";e.r(A),e.d(A,{texts:function(){return c}});const c=[{value:`\u8FD9\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u5C01\u88C5\u7EC4\u4EF6\uFF0C\u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u89C1\u7684\u4E1A\u52A1\u529F\u80FD\uFF0C\u4E3B\u8981\u4E3A\u4E86\u907F\u514D\u5728\u9879\u76EE\u4E2D\u7EC4\u4EF6\u7684\u7B80\u5355\u5C5E\u6027\u5197\u4F59\u3002
\u4EE5\u4E0B\u662F\u5C01\u88C5\u539F\u5219\uFF1A`,paraId:0,tocIndex:0},{value:"\u4E0D\u7834\u574F\u539F\u6709\u7EC4\u4EF6\u7684\u5C5E\u6027\u3001\u65B9\u6CD5\u3001Ref\u3001\u5B50\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u4FDD\u6301\u539F\u6709\u7EC4\u4EF6\u7684\u53EF\u62D3\u5C55\u6027",paraId:1,tocIndex:0},{value:`npm install izid
# or
pnpm add izid
# or
yarn add izid
`,paraId:2,tocIndex:1},{value:"Npm",paraId:3,tocIndex:2}]},42480:function(){}}]);
