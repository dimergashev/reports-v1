import{K as c,au as m,f,$ as i}from"./index.CwJfOXnf.js";import{c as d,f as u,V as p,q as g}from"./vue-vendor.DoCRp14w.js";var h=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,k={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},b=c.extend({name:"progressspinner",style:h,classes:k}),y={name:"BaseProgressSpinner",extends:m,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:b,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},S={name:"ProgressSpinner",extends:y,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},N=["fill","stroke-width"];function $(n,e,r,t,o,s){return u(),d("div",p({class:n.cx("root"),role:"progressbar"},n.ptmi("root")),[(u(),d("svg",p({class:n.cx("spin"),viewBox:"25 25 50 50",style:s.svgStyle},n.ptm("spin")),[g("circle",p({class:n.cx("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,"stroke-width":n.strokeWidth,strokeMiterlimit:"10"},n.ptm("circle")),null,16,N)],16))],16)}S.render=$;const M={atAGlance:(n,e={})=>i.get("/api/reports/at-a-glance",{params:{clientId:n,...e}}).then(r=>r.data),getStatement:(n,e={})=>i.get("/api/reports/statement",{params:{clientId:n,...e}}).then(r=>r.data),lineDrill:(n={})=>i.get("/api/reports/line-drill",{params:n}).then(e=>e.data),aging:(n,e,r={})=>i.get("/api/reports/aging",{params:{clientId:n,side:e,...r}}).then(t=>t.data),generateMockData:n=>i.post("/api/reports/mock-data",null,{params:{clientId:n}}).then(e=>e.data),createShare:(n,e={})=>i.post("/api/reports/shares",e,{params:{clientId:n}}).then(r=>r.data),getShared:n=>f.get(`/api/reports/shared/${encodeURIComponent(n)}`).then(e=>e.data)};function w(n){if(n==null)return"—";const e=Math.round(Number(n));if(!Number.isFinite(e))return"—";const r=Math.abs(e).toLocaleString("en-US");return e<0?`(${r})`:r}function P(n,e){if(n==null||e===null||e===void 0)return{text:"—",direction:null};const r=Number(n),t=Number(e),o=Math.abs(r);if(!Number.isFinite(o)||o===0||!Number.isFinite(t))return{text:"—",direction:null};const s=t-r;if(s===0)return{text:"0%",direction:null};const a=Math.round(Math.abs(s)/o*100),l=s>0?"up":"down";return{text:`${l==="up"?"▲":"▼"} ${a}%`,direction:l}}function A(n){if(n==null)return"—";const e=Math.round(Number(n));return Number.isFinite(e)?e.toLocaleString("en-US"):"—"}function B(n,e){if(n==null||e===null||e===void 0)return null;const r=Number(n),t=Number(e);if(!Number.isFinite(r)||!Number.isFinite(t))return null;const o=r-t,s=Math.abs(t),a=s===0?null:Math.round(Math.abs(o)/s*100);return{abs:o,pct:a}}export{w as a,P as b,B as c,A as f,M as r,S as s};
