import{_ as s,q as a,k as p,l,B as r,M as m,x as c}from"./vendor-b03da118.js";import"./vendor-sortablejs-595f2e06.js";const _={name:"ChargePointExternalOpenwb",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0}},methods:{updateConfiguration(t,e=void 0){e&&(e="configuration."+e),this.$emit("update:configuration",{value:t,object:e})}}},f={class:"charge-point-externalopenwb"};function g(t,e,o,b,x,i){const u=a("openwb-base-text-input"),d=a("openwb-base-number-input");return p(),l("div",f,[r(u,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>i.updateConfiguration(n,"ip_address"))},null,8,["model-value"]),r(d,{title:"Ladepunkt-Nummer",required:"",min:1,max:2,"model-value":o.configuration.duo_num+1,"onUpdate:modelValue":e[1]||(e[1]=n=>i.updateConfiguration(n-1,"duo_num"))},{help:m(()=>[c(' Bei einfachen Ladepunkten ist hier immer eine "1" einzutragen. Lediglich bei einer openWB Duo kann mit "2" der zweite enthaltene Ladepunkt angesprochen werden. ')]),_:1},8,["model-value"])])}const v=s(_,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/external_openwb/chargePoint.vue"]]);export{v as default};