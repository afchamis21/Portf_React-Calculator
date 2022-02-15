import{s as x,j as g,r as h,R as N,a as v}from"./vendor.5152cadd.js";const F=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}};F();const S=x.div`
  display: flex;
  align-items: center;
  height: 100vh;
  li{
    list-style-type: none;
    ul{
      padding: 0.5rem;
      font-size:1.5rem;
      height: 3rem;
      width: max(20rem, 30vw);
    }
  }

`,e=g.exports.jsx,b=g.exports.jsxs,w=g.exports.Fragment;function O(t){return e(S,{children:e("li",{children:t.history.map((r,l)=>b("ul",{children:[r,e("hr",{})]},l))})})}const T=x.div`

display: grid;
grid-template-columns: max(20rem, 30vw) 1fr;
height: 100vh;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;

.container {
  display: flex;
  align-items: center;
  justify-content: center;

  body{
  height: 50rem;
  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .display{
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    height:7rem;
    background-color: #5429CC;
    font-size: 5rem;
    line-height:5rem;
    text-align: right;
    color: #fff;
    border-radius: 2rem;
    margin-bottom:1rem;
  }

  .buttonArea{
    display:flex;
    flex-wrap: wrap;
    gap:0.5rem;
    margin-top: 0.25rem;
    margin-left: 0.25rem;

    button{
      height: 8rem;
      width: 8rem;
      border: none;
      border-radius:4rem;
      font-size: 2.5rem;
      transition: filter 0.1s;
      background-color: #F0F2F5;
      box-shadow: 0 0 3px  #969CB3;

      &:hover{
        cursor: pointer;
        filter: brightness(0.8);
      }
    } 

    .greenButton{
      background-color:#26996f;
      color: #FFFFFF;
    }

    .greenText{
      color:#26996f;
    }

    .redText{
      color: #e52e4d;
    }
  }
}
}

`;function $(){const[t,r]=h.exports.useState("0"),[l,s]=h.exports.useState(0),[n,o]=h.exports.useState(""),[d,f]=h.exports.useState(80),[a,u]=h.exports.useState([]);function c(i){t.length>8&&f(80-3.2*(t.length-8)),t=="0"?r(i):r(`${t}${i}`)}function k(){t=="0"?p():(r("0"),f(80))}function p(){r("0"),s(0),o(""),f(80),u([])}function y(){r(`${Number(t)*-1}`)}function m(i){switch(i){case"+":s(Number(t)),u([...a,t+" +"]),r("0"),o("+");break;case"-":s(Number(t)),u([...a,t+" -"]),r("0"),o("-");break;case"*":s(Number(t)),u([...a,t+" *"]),r("0"),o("*");break;case"/":s(Number(t)),u([...a,t+" /"]),r("0"),o("/");break;case"%":r(`${Number(t)/100}`)}}function C(){let i="";switch(n){case"+":i=`${Number(t)+l}`,u([...a,t+" + "+l.toString()+" = "+i]),s(0);break;case"-":i=`${l-Number(t)}`,u([...a,l.toString()+" - "+t+" = "+i]),s(0);break;case"*":i=`${Number(t)*l}`,u([...a,t+" * "+l.toString()+" = "+i]),s(0);break;case"/":i=`${l/Number(t)}`,u([...a,l.toString()+" / "+t+" = "+i]),console.log(t,l),s(0);break}i.length>8&&f(80-3.2*(i.length-8)),r(i)}return b(T,{children:[e("aside",{children:e(O,{history:a})}),e("div",{className:"container",children:b("body",{children:[b("div",{className:"display",style:{fontSize:d},children:[" ",t]}),b("div",{className:"buttonArea",children:[e("button",{className:"redText",onClick:k,children:"C"}),e("button",{className:"redText",onClick:p,children:"AC"}),e("button",{className:"greenText",onClick:()=>m("%"),children:"%"}),e("button",{className:"greenText",onClick:()=>m("/"),children:"\xF7"}),e("button",{onClick:()=>c("7"),children:"7"}),e("button",{onClick:()=>c("8"),children:"8"}),e("button",{onClick:()=>c("9"),children:"9"}),e("button",{className:"greenText",onClick:()=>m("*"),children:"X"}),e("button",{onClick:()=>c("4"),children:"4"}),e("button",{onClick:()=>c("5"),children:"5"}),e("button",{onClick:()=>c("6"),children:"6"}),e("button",{className:"greenText",onClick:()=>m("-"),children:"-"}),e("button",{onClick:()=>c("1"),children:"1"}),e("button",{onClick:()=>c("2"),children:"2"}),e("button",{onClick:()=>c("3"),children:"3"}),e("button",{className:"greenText",onClick:()=>m("+"),children:"+"}),e("button",{onClick:y,children:"\xB1"}),e("button",{onClick:()=>c("0"),children:"0"}),e("button",{onClick:()=>c("."),children:"."}),e("button",{className:"greenButton",onClick:C,children:"="})]})]})})]})}function j(){return e(w,{children:e($,{})})}N.render(e(v.StrictMode,{children:e(j,{})}),document.getElementById("root"));
