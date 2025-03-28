"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24404],{27294:(e,n,s)=>{s.r(n),s.d(n,{comp:()=>o,data:()=>l});var a=s(6254);const t={},o=(0,s(58079).A)(t,[["render",function(e,n){const s=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n[7]||(n[7]=(0,a.Lk)("h1",{id:"aubess-zxzir-02",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#aubess-zxzir-02"},[(0,a.Lk)("span",null,"Aubess ZXZIR-02")])],-1)),(0,a.Lk)("table",null,[n[6]||(n[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[n[2]||(n[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZXZIR-02")],-1)),(0,a.Lk)("tr",null,[n[1]||(n[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(s,{to:"/supported-devices/#v=Aubess"},{default:(0,a.k6)((()=>n[0]||(n[0]=[(0,a.eW)("Aubess")]))),_:1})])]),n[3]||(n[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Universal smart IR remote control")],-1)),n[4]||(n[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"learn_ir_code, learned_ir_code, ir_code_to_send")],-1)),n[5]||(n[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZXZIR-02.png",alt:"Aubess ZXZIR-02"})])],-1))])]),n[8]||(n[8]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>Device can learn IR codes and send already known IR codes.</p><h3 id="control" tabindex="-1"><a class="header-anchor" href="#control"><span>Control</span></a></h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can control the device:</p><h4 id="switch-to-a-learning-mode" tabindex="-1"><a class="header-anchor" href="#switch-to-a-learning-mode"><span>Switch to a learning mode</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;learn_ir_code&quot;</span><span class="token operator">:</span><span class="token string">&quot;ON&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The command activates the orange light on the device. You have several seconds to take source IR remote, move it closer to the device and press a button. The learned IR code will be exposed as <code>learned_ir_code</code>.</p><h4 id="send-already-learned-ir-code" tabindex="-1"><a class="header-anchor" href="#send-already-learned-ir-code"><span>Send already learned IR code</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;ir_code_to_send&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;previously learned IR code&gt;&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="learn-ir-code-binary" tabindex="-1"><a class="header-anchor" href="#learn-ir-code-binary"><span>Learn ir code (binary)</span></a></h3><p>Turn on to learn new IR code. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;learn_ir_code&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> learn ir code is ON, if <code>OFF</code> OFF.</p><h3 id="learned-ir-code-text" tabindex="-1"><a class="header-anchor" href="#learned-ir-code-text"><span>Learned ir code (text)</span></a></h3><p>The IR code learned by device. Value can be found in the published state on the <code>learned_ir_code</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="ir-code-to-send-text" tabindex="-1"><a class="header-anchor" href="#ir-code-to-send-text"><span>Ir code to send (text)</span></a></h3><p>The IR code to send by device. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ir_code_to_send&quot;: NEW_VALUE}</code>.</p>',18))])}]]),l=JSON.parse('{"path":"/devices/ZXZIR-02.html","title":"Aubess ZXZIR-02 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aubess ZXZIR-02 control via MQTT","description":"Integrate your Aubess ZXZIR-02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-05-28T16:23:11.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Control","slug":"control","link":"#control","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Learn ir code (binary)","slug":"learn-ir-code-binary","link":"#learn-ir-code-binary","children":[]},{"level":3,"title":"Learned ir code (text)","slug":"learned-ir-code-text","link":"#learned-ir-code-text","children":[]},{"level":3,"title":"Ir code to send (text)","slug":"ir-code-to-send-text","link":"#ir-code-to-send-text","children":[]}]}],"git":{"updatedTime":1743179599000},"filePathRelative":"devices/ZXZIR-02.md"}')}}]);