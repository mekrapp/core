(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ScheduledChargeConfig"],{a822:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a={class:"scheduledChargeConfig"},u={id:"myForm"},c=Object(o["createTextVNode"])("Hilfetext");function r(e,t,n,r,s,i){var d=Object(o["resolveComponent"])("button-group-input"),l=Object(o["resolveComponent"])("card"),m=Object(o["resolveComponent"])("submit-buttons");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createElementVNode"])("form",u,[Object(o["createVNode"])(l,{title:"Phasenumschaltung"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"},{buttonValue:0,text:"Automatik"}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/scheduled_charging/phases_to_use"],"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.updateState("openWB/general/chargemode_config/scheduled_charging/phases_to_use",t)})},{help:Object(o["withCtx"])((function(){return[c]})),_:1},8,["model-value"])]})),_:1}),Object(o["createVNode"])(m,{onSave:t[1]||(t[1]=function(t){return e.$emit("save")}),onReset:t[2]||(t[2]=function(t){return e.$emit("reset")}),onDefaults:t[3]||(t[3]=function(t){return e.$emit("defaults")})})])])}var s=n("118d"),i=n("ae8d"),d=n("2804"),l=n("4492"),m={name:"ScheduledChargeConfig",mixins:[s["a"]],components:{Card:i["a"],ButtonGroupInput:d["a"],SubmitButtons:l["a"]},data:function(){return{mqttTopicsToSubscribe:["openWB/general/chargemode_config/scheduled_charging/phases_to_use"]}}};m.render=r;t["default"]=m}}]);
//# sourceMappingURL=ScheduledChargeConfig.ffce8676.js.map