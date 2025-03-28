"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[4296],{58364:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>o,data:()=>n});var i=t(6254);const r={},o=(0,t(58079).A)(r,[["render",function(e,a){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a[8]||(a[8]=(0,i.Lk)("h1",{id:"tuya-lcz030",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-lcz030"},[(0,i.Lk)("span",null,"Tuya LCZ030")])],-1)),(0,i.Lk)("table",null,[a[6]||(a[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[a[2]||(a[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"LCZ030")],-1)),(0,i.Lk)("tr",null,[a[1]||(a[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>a[0]||(a[0]=[(0,i.eW)("Tuya")]))),_:1})])]),a[3]||(a[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Temperature & humidity & illuminance sensor with display")],-1)),a[4]||(a[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"temperature, humidity, battery, alarm_temperature_max, alarm_temperature_min, alarm_humidity_max, alarm_humidity_min, alarm_humidity, alarm_temperature, illuminance")],-1)),a[5]||(a[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/LCZ030.png",alt:"Tuya LCZ030"})])],-1))])]),a[9]||(a[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="warning" tabindex="-1"><a class="header-anchor" href="#warning"><span>Warning</span></a></h3><p>For full functionality of this device you will need to pair it to a TuYa Gateway prior use.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',4)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>a[7]||(a[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),a[10]||(a[10]=(0,i.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_raw</code>: Expose the raw illuminance value. The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alarm-temperature-max-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-max-numeric"><span>Alarm temperature max (numeric)</span></a></h3><p>Alarm temperature max. Value can be found in the published state on the <code>alarm_temperature_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_temperature_max&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="alarm-temperature-min-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-min-numeric"><span>Alarm temperature min (numeric)</span></a></h3><p>Alarm temperature min. Value can be found in the published state on the <code>alarm_temperature_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_temperature_min&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>80</code>. The unit of this value is <code>°C</code>.</p><h3 id="alarm-humidity-max-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-max-numeric"><span>Alarm humidity max (numeric)</span></a></h3><p>Alarm humidity max. Value can be found in the published state on the <code>alarm_humidity_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_humidity_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alarm-humidity-min-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-min-numeric"><span>Alarm humidity min (numeric)</span></a></h3><p>Alarm humidity min. Value can be found in the published state on the <code>alarm_humidity_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_humidity_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alarm-humidity-enum" tabindex="-1"><a class="header-anchor" href="#alarm-humidity-enum"><span>Alarm humidity (enum)</span></a></h3><p>Alarm humidity status. Value can be found in the published state on the <code>alarm_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>below_min_humdity</code>, <code>over_humidity</code>, <code>off</code>.</p><h3 id="alarm-temperature-enum" tabindex="-1"><a class="header-anchor" href="#alarm-temperature-enum"><span>Alarm temperature (enum)</span></a></h3><p>Alarm temperature status. Value can be found in the published state on the <code>alarm_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>below_min_temperature</code>, <code>over_temperature</code>, <code>off</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p>',22))])}]]),n=JSON.parse('{"path":"/devices/LCZ030.html","title":"Tuya LCZ030 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya LCZ030 control via MQTT","description":"Integrate your Tuya LCZ030 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-01T17:18:02.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Warning","slug":"warning","link":"#warning","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Alarm temperature max (numeric)","slug":"alarm-temperature-max-numeric","link":"#alarm-temperature-max-numeric","children":[]},{"level":3,"title":"Alarm temperature min (numeric)","slug":"alarm-temperature-min-numeric","link":"#alarm-temperature-min-numeric","children":[]},{"level":3,"title":"Alarm humidity max (numeric)","slug":"alarm-humidity-max-numeric","link":"#alarm-humidity-max-numeric","children":[]},{"level":3,"title":"Alarm humidity min (numeric)","slug":"alarm-humidity-min-numeric","link":"#alarm-humidity-min-numeric","children":[]},{"level":3,"title":"Alarm humidity (enum)","slug":"alarm-humidity-enum","link":"#alarm-humidity-enum","children":[]},{"level":3,"title":"Alarm temperature (enum)","slug":"alarm-temperature-enum","link":"#alarm-temperature-enum","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]}]}],"git":{"updatedTime":1743179599000},"filePathRelative":"devices/LCZ030.md"}')}}]);