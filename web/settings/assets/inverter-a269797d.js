import{_ as c,u as t,k as d,l as p,D as o,N as s,y as i,x as u,z as l}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const _={name:"DeviceBenningInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},f={class:"device-benning-inverter"},m={class:"small"};function b(e,n,g,v,h,w){const a=t("openwb-base-heading"),r=t("openwb-base-alert");return d(),p("div",f,[o(a,null,{default:s(()=>[i(" Einstellungen für Benning Wechselrichter "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[i(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const x=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/benning/inverter.vue"]]);export{x as default};