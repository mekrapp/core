import{_ as c,p as r,k as g,l as f,A as t,L as a,u as o,q as v,x as _}from"./vendor-2e22dd5c.js";import"./vendor-sortablejs-c63121b5.js";const b={name:"VehicleSocPSA",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},vehicleId:{required:!1}},data(){return{}},methods:{updateConfiguration(s,e=void 0){this.$emit("update:configuration",{value:s,object:e})}}},w={class:"vehicle-soc-psa"},h={class:"small"};function S(s,e,i,C,x,l){const d=r("openwb-base-heading"),u=r("openwb-base-text-input"),p=r("openwb-base-select-input"),m=r("openwb-base-card");return g(),f("div",w,[t(d,null,{default:a(()=>[o(" Einstellungen für PSA SoC "),v("span",h,"(Modul: "+_(s.$options.name)+")",1)]),_:1}),t(u,{title:"Benutzername",required:"",subtype:"user","model-value":i.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=n=>l.updateConfiguration(n,"configuration.user_id"))},{help:a(()=>[o(" Der Benutzername für die Anmeldung an den PSA-Servern. ")]),_:1},8,["model-value"]),t(u,{title:"Kennwort",required:"",subtype:"password","model-value":i.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=n=>l.updateConfiguration(n,"configuration.password"))},{help:a(()=>[o(" Das Passwort für die Anmeldung an den PSA-Servern. ")]),_:1},8,["model-value"]),t(p,{title:"Marke",required:"",notSelected:"Bitte auswählen",options:[{value:"Peugeot",text:"Peugeot"},{value:"Citroen",text:"Citroen"},{value:"DS",text:"DS"},{value:"Opel",text:"Opel"},{value:"Vauxhall",text:"Vauxhall"}],"model-value":i.configuration.manufacturer,"onUpdate:modelValue":e[2]||(e[2]=n=>l.updateConfiguration(n,"configuration.manufacturer"))},{help:a(()=>[o(" Marke aus des Fahrzeugs.")]),_:1},8,["model-value"]),t(u,{title:"VIN","model-value":i.configuration.vin,"onUpdate:modelValue":e[3]||(e[3]=n=>l.updateConfiguration(n,"configuration.vin"))},{help:a(()=>[o(" Die Fahrgestellnummer des Fahrzeugs. Nur notwendig falls mehrere Fahrzeuge im selben Account vorhanden sind. ")]),_:1},8,["model-value"]),t(m,{title:"Erweiterte Einstellungen",subtype:"info",collapsible:!0,collapsed:!0},{default:a(()=>[t(u,{title:"Client ID",subtype:"user","model-value":i.configuration.client_id,"onUpdate:modelValue":e[4]||(e[4]=n=>l.updateConfiguration(n,"configuration.client_id"))},{help:a(()=>[o(" Die Client-ID für die Anmeldung an den PSA-Servern, muss normalerweise nicht angegeben werden. ")]),_:1},8,["model-value"]),t(u,{title:"Client Secret",subtype:"password","model-value":i.configuration.client_secret,"onUpdate:modelValue":e[5]||(e[5]=n=>l.updateConfiguration(n,"configuration.client_secret"))},{help:a(()=>[o(" Das Client-Secret für die Anmeldung an den PSA-Servern, muss normalerweise nicht angegeben werden. ")]),_:1},8,["model-value"])]),_:1})])}const D=c(b,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/psa/vehicle.vue"]]);export{D as default};