import{_ as r,q as o,k as u,l,B as n,M as p,x as _,u as f,y as m}from"./vendor-b03da118.js";import"./vendor-sortablejs-595f2e06.js";const v={name:"DeviceKostalSteca",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},b={class:"device-kostal-steca"},g={class:"small"};function h(t,e,a,x,k,s){const i=o("openwb-base-heading"),d=o("openwb-base-text-input");return u(),l("div",b,[n(i,null,{default:p(()=>[_(" Einstellungen für Kostal Piko MP oder Steca Grid Coolcept "),f("span",g,"(Modul: "+m(t.$options.name)+")",1)]),_:1}),n(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":a.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=c=>s.updateConfiguration(c,"configuration.ip_address"))},null,8,["model-value"])])}const C=r(v,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal_steca/device.vue"]]);export{C as default};