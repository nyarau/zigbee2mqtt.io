"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[83577],{67309:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>a,data:()=>n});var d=t(6254);const i={},a=(0,t(58079).A)(i,[["render",function(e,o){const t=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[o[11]||(o[11]=(0,d.Lk)("h1",{id:"sonoff-zbm5-3c-120",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#sonoff-zbm5-3c-120"},[(0,d.Lk)("span",null,"SONOFF ZBM5-3C-120")])],-1)),(0,d.Lk)("table",null,[o[6]||(o[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[o[2]||(o[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"ZBM5-3C-120")],-1)),(0,d.Lk)("tr",null,[o[1]||(o[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(t,{to:"/supported-devices/#v=SONOFF"},{default:(0,d.k6)((()=>o[0]||(o[0]=[(0,d.eW)("SONOFF")]))),_:1})])]),o[3]||(o[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Zigbee Smart three-channel wall switch (type 120).")],-1)),o[4]||(o[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"switch (state), power_on_behavior, device_work_mode, network_indicator, detach_relay_mode, action")],-1)),o[5]||(o[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZBM5-3C-120.png",alt:"SONOFF ZBM5-3C-120"})])],-1))])]),o[12]||(o[12]=(0,d.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,d.Lk)("span",null,"OTA updates")])],-1)),(0,d.Lk)("p",null,[o[8]||(o[8]=(0,d.eW)("This device supports OTA updates, for more information see ")),(0,d.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,d.k6)((()=>o[7]||(o[7]=[(0,d.eW)("OTA updates")]))),_:1}),o[9]||(o[9]=(0,d.eW)("."))]),o[13]||(o[13]=(0,d.Lk)("h2",{id:"options",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#options"},[(0,d.Lk)("span",null,"Options")])],-1)),(0,d.Lk)("p",null,[(0,d.Lk)("em",null,[(0,d.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.k6)((()=>o[10]||(o[10]=[(0,d.eW)("How to use device type specific configuration")]))),_:1})])]),o[14]||(o[14]=(0,d.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint"><span>Switch (l1 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint"><span>Switch (l2 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l3-endpoint"><span>Switch (l3 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l3&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l3&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-2" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-2"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l1-endpoint"><span>Power-on behavior (enum, l1 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-on-behavior-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l2-endpoint"><span>Power-on behavior (enum, l2 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-on-behavior-enum-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l3-endpoint"><span>Power-on behavior (enum, l3 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l3&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="device-work-mode-enum" tabindex="-1"><a class="header-anchor" href="#device-work-mode-enum"><span>Device work mode (enum)</span></a></h3><p>The device runs as a Zigbee End device or Zigbee router.. Value can be found in the published state on the <code>device_work_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_work_mode&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>Zigbee end device</code>, <code>Zigbee router</code>.</p><h3 id="network-indicator-binary" tabindex="-1"><a class="header-anchor" href="#network-indicator-binary"><span>Network indicator (binary)</span></a></h3><p>Network indicator settings, turn off/on the blue online status network indicator.. Value can be found in the published state on the <code>network_indicator</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;network_indicator&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;network_indicator&quot;: NEW_VALUE}</code>. If value equals <code>true</code> network indicator is ON, if <code>false</code> OFF.</p><h3 id="detach-relay-mode-composite" tabindex="-1"><a class="header-anchor" href="#detach-relay-mode-composite"><span>Detach relay mode (composite)</span></a></h3><p>Relay separation mode. Can be used when the load is a smart device (such as smart light), when we control the wall switch, do not want to turn off the power of the smart light, but through a scene command to control the smart light on or off, then we can enable the relay separation mode.. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detach_relay_mode&quot;: {&quot;detach_relay_outlet1&quot;: VALUE, &quot;detach_relay_outlet2&quot;: VALUE, &quot;detach_relay_outlet3&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;detach_relay_mode&quot;: &quot;&quot;}</code>.</p><ul><li><code>detach_relay_outlet1</code> (binary): Enable/disable detach relay. allowed values: <code>ENABLE</code> or <code>DISABLE</code></li><li><code>detach_relay_outlet2</code> (binary): Enable/disable detach relay. allowed values: <code>ENABLE</code> or <code>DISABLE</code></li><li><code>detach_relay_outlet3</code> (binary): Enable/disable detach relay. allowed values: <code>ENABLE</code> or <code>DISABLE</code></li></ul><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle_l1</code>, <code>toggle_l2</code>, <code>toggle_l3</code>.</p>',29))])}]]),n=JSON.parse('{"path":"/devices/ZBM5-3C-120.html","title":"SONOFF ZBM5-3C-120 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF ZBM5-3C-120 control via MQTT","description":"Integrate your SONOFF ZBM5-3C-120 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-28T09:47:20.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"Switch (l3 endpoint)","slug":"switch-l3-endpoint","link":"#switch-l3-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, l1 endpoint)","slug":"power-on-behavior-enum-l1-endpoint","link":"#power-on-behavior-enum-l1-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, l2 endpoint)","slug":"power-on-behavior-enum-l2-endpoint","link":"#power-on-behavior-enum-l2-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, l3 endpoint)","slug":"power-on-behavior-enum-l3-endpoint","link":"#power-on-behavior-enum-l3-endpoint","children":[]},{"level":3,"title":"Device work mode (enum)","slug":"device-work-mode-enum","link":"#device-work-mode-enum","children":[]},{"level":3,"title":"Network indicator (binary)","slug":"network-indicator-binary","link":"#network-indicator-binary","children":[]},{"level":3,"title":"Detach relay mode (composite)","slug":"detach-relay-mode-composite","link":"#detach-relay-mode-composite","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1743179599000},"filePathRelative":"devices/ZBM5-3C-120.md"}')}}]);