"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[95452],{43571:(e,o,n)=>{n.r(o),n.d(o,{comp:()=>i,data:()=>l});var t=n(6254);const a={},i=(0,n(58079).A)(a,[["render",function(e,o){const n=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[o[8]||(o[8]=(0,t.Lk)("h1",{id:"loginovo-zg-101zl",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#loginovo-zg-101zl"},[(0,t.Lk)("span",null,"Loginovo ZG-101ZL")])],-1)),(0,t.Lk)("table",null,[o[6]||(o[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[o[2]||(o[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"ZG-101ZL")],-1)),(0,t.Lk)("tr",null,[o[1]||(o[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(n,{to:"/supported-devices/#v=Loginovo"},{default:(0,t.k6)((()=>o[0]||(o[0]=[(0,t.eW)("Loginovo")]))),_:1})])]),o[3]||(o[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Smart button")],-1)),o[4]||(o[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"action, battery, operation_mode")],-1)),o[5]||(o[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZG-101ZL.png",alt:"Loginovo ZG-101ZL"})])],-1))])]),o[9]||(o[9]=(0,t.Lk)("h2",{id:"operation-mode",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#operation-mode"},[(0,t.Lk)("span",null,"Operation mode")])],-1)),o[10]||(o[10]=(0,t.Lk)("p",null,'You can switch between the "command" and "event" operation mode with a triple click',-1)),o[11]||(o[11]=(0,t.Lk)("p",null,"Command mode enables on/off mode : single click : on double click : off long press (>5s) and release : brightness_move_to_level",-1)),o[12]||(o[12]=(0,t.Lk)("p",null,"You can then use OnOff and LevelCtrl binding in this mode",-1)),o[13]||(o[13]=(0,t.Lk)("p",null,"Event mode enables click : single/double/hold",-1)),o[14]||(o[14]=(0,t.Lk)("h2",{id:"options",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#options"},[(0,t.Lk)("span",null,"Options")])],-1)),(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>o[7]||(o[7]=[(0,t.eW)("How to use device type specific configuration")]))),_:1})])]),o[15]||(o[15]=(0,t.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>hold</code>, <code>brightness_move_to_level</code>, <code>color_temperature_move</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>on</code>, <code>off</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum"><span>Operation mode (enum)</span></a></h3><p>Operation mode: &quot;command&quot; - for group control, &quot;event&quot; - for clicks. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>command</code>, <code>event</code>.</p>',9))])}]]),l=JSON.parse('{"path":"/devices/ZG-101ZL.html","title":"Loginovo ZG-101ZL control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Loginovo ZG-101ZL control via MQTT","description":"Integrate your Loginovo ZG-101ZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-30T19:41:12.000Z"},"headers":[{"level":2,"title":"Operation mode","slug":"operation-mode","link":"#operation-mode","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Operation mode (enum)","slug":"operation-mode-enum","link":"#operation-mode-enum","children":[]}]}],"git":{"updatedTime":1743179599000},"filePathRelative":"devices/ZG-101ZL.md"}')}}]);