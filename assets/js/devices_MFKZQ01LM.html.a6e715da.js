"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47927],{5923:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>n,data:()=>c});var o=i(6254);const a={},n=(0,i(58079).A)(a,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[9]||(t[9]=(0,o.Lk)("h1",{id:"aqara-mfkzq01lm",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#aqara-mfkzq01lm"},[(0,o.Lk)("span",null,"Aqara MFKZQ01LM")])],-1)),(0,o.Lk)("table",null,[t[7]||(t[7]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"MFKZQ01LM")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=Aqara"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Cube")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery, voltage, action_angle, device_temperature, power_outage_count, action_from_side, action_side, action_to_side, side, action")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MFKZQ01LM.png",alt:"Aqara MFKZQ01LM"})])],-1)),t[6]||(t[6]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"White-label"),(0,o.Lk)("td",null,"Xiaomi MFKZQ01LM")],-1))])]),t[10]||(t[10]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery"><span>Battery</span></a></h3><p>Uses a CR2450 battery</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Remove the back plate by using the included tool or a wedge to click it off. Press and hold the LINK button inside the device for +- 5 seconds (until the blue light blinks three times). After this the device will automatically join, but the interview process may not finish. If that happens, keep doing short presses to the LINK button to keep the light flashing, until the interview process finishes successfully.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',6)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[8]||(t[8]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[11]||(t[11]=(0,o.Fv)('<ul><li><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-angle-numeric" tabindex="-1"><a class="header-anchor" href="#action-angle-numeric"><span>Action angle (numeric)</span></a></h3><p>Value can be found in the published state on the <code>action_angle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-360</code> and the maximum value is <code>360</code>. The unit of this value is <code>°</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric"><span>Device temperature (numeric)</span></a></h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric"><span>Power outage count (numeric)</span></a></h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-from-side-numeric" tabindex="-1"><a class="header-anchor" href="#action-from-side-numeric"><span>Action from side (numeric)</span></a></h3><p>Side of the cube. Value can be found in the published state on the <code>action_from_side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-side-numeric" tabindex="-1"><a class="header-anchor" href="#action-side-numeric"><span>Action side (numeric)</span></a></h3><p>Side of the cube. Value can be found in the published state on the <code>action_side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-to-side-numeric" tabindex="-1"><a class="header-anchor" href="#action-to-side-numeric"><span>Action to side (numeric)</span></a></h3><p>Side of the cube. Value can be found in the published state on the <code>action_to_side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="side-numeric" tabindex="-1"><a class="header-anchor" href="#side-numeric"><span>Side (numeric)</span></a></h3><p>Side of the cube. Value can be found in the published state on the <code>side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>shake</code>, <code>throw</code>, <code>wakeup</code>, <code>fall</code>, <code>tap</code>, <code>slide</code>, <code>flip180</code>, <code>flip90</code>, <code>rotate_left</code>, <code>rotate_right</code>.</p>',22))])}]]),c=JSON.parse('{"path":"/devices/MFKZQ01LM.html","title":"Aqara MFKZQ01LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara MFKZQ01LM control via MQTT","description":"Integrate your Aqara MFKZQ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-02-01T14:45:54.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Battery","slug":"battery","link":"#battery","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Action angle (numeric)","slug":"action-angle-numeric","link":"#action-angle-numeric","children":[]},{"level":3,"title":"Device temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Action from side (numeric)","slug":"action-from-side-numeric","link":"#action-from-side-numeric","children":[]},{"level":3,"title":"Action side (numeric)","slug":"action-side-numeric","link":"#action-side-numeric","children":[]},{"level":3,"title":"Action to side (numeric)","slug":"action-to-side-numeric","link":"#action-to-side-numeric","children":[]},{"level":3,"title":"Side (numeric)","slug":"side-numeric","link":"#side-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1743179599000},"filePathRelative":"devices/MFKZQ01LM.md"}')}}]);