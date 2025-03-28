"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62535],{28162:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>s});var i=o(6254);const l=o.p+"assets/img/putty-bootloader-1.0c50b302.png",r=o.p+"assets/img/putty-bootloader-2.b39ba5a6.png",n={},a=(0,o(58079).A)(n,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[7]||(t[7]=(0,i.Lk)("h1",{id:"sonoff-zbdongle-e",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#sonoff-zbdongle-e"},[(0,i.Lk)("span",null,"SONOFF ZBDongle-E")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZBDongle-E")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=SONOFF"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("SONOFF")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Sonoff Zigbee 3.0 USB Dongle Plus (EFR32MG21) with router firmware")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"light_indicator_level")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZBDongle-E.png",alt:"SONOFF ZBDongle-E"})])],-1))])]),t[8]||(t[8]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="how-to-create-a-sonoff-zbdongle-e-router" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-sonoff-zbdongle-e-router"><span>How to create a SONOFF ZBDongle-E Router</span></a></h3><p>You can create a powerful Zigbee router from an ordinary Sonoff Zigbee 3.0 USB Dongle Plus (Model &quot;ZBDongle-E&quot; with EFR32MG21 chip) by flashing a router firmware onto the device. You can find the official guide for flashing the device here: <a href="https://sonoff.tech/wp-content/uploads/2022/11/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf" target="_blank" rel="noopener noreferrer">SONOFF Zigbee 3.0 USB dongle plus firmware flashing</a>. The guide also contains the link to the official <a href="https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/Router" target="_blank" rel="noopener noreferrer">SONOFF Router Firmware for the ZBDongle-E</a>.</p><p>As an alternative to disassembling the device, you can also use the browser-based <a href="https://darkxst.github.io/silabs-firmware-builder/" target="_blank" rel="noopener noreferrer">Silabs Firmware Flasher</a>. Before flashing, download the router firmware and plug the dongle into a USB port on your computer. A browser supporting the WebSerial API is required; if in doubt, use <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong>. After the flashing is done, the dongle will immediately reboot into pairing mode. Pair as usual with Z2M.</p><h3 id="hints" tabindex="-1"><a class="header-anchor" href="#hints"><span>Hints</span></a></h3><p>The guide from SONOFF is not very detailed. Here are some additional hints:</p><ul><li>First, you have to disassemble the device and pull the logic board out of its housing. You need a <strong>J00 Phillips screwdriver</strong> for this. <img src="https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-screws.jpg" width="130" height="129"><img src="https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-board-in-housing.jpg" width="130" height="117"></li><li>Second, you need a <strong>software supporting the <a href="https://en.wikipedia.org/wiki/XMODEM" target="_blank" rel="noopener noreferrer">XMODEM file transfer protocol</a></strong> for sending the firmware image to the device. On Debian Linux like Ubuntu you can use lrzsz, <ul><li><p>install XMODEM transfer protocol and terminal emulator Putty with</p><ul><li>debian based OS: <code>sudo apt install lrzsz putty</code></li><li>arch based OS: <code>sudo paxman -S lrzsz putty</code></li></ul></li><li><p>user needs to be in dialout group in order to access serial ports</p><ul><li>debian based OS: <code>sudo adduser $USER dialout</code></li><li>arch based OS: <code>sudo usermod -a -G uucp $USER</code></li></ul></li><li><p>log in and out so that group membership comes into effect (You can check by running <code>id</code>)</p></li></ul></li><li>Third, plug in the device. You must operate on the naked logic board while it is plugged in. This is a lot easier if you use a <strong>USB extension cable</strong>.</li><li>Forth, to enter the Bootloader Mode, you have to <ul><li><p>Plug the device in</p></li><li><p>Connect to the device with the serial software (for serial connection parameters, see guide)</p><p><code>putty -serial -sercfg 115200,8,n,1 /dev/ttyACM0</code></p><p>If you get the error <code>PuTTY: unable to load font &quot;server:fixed&quot;</code>, run <code>export GDK_BACKEND=x11</code> previous to the putty command.</p></li><li><p>Press and hold the &quot;BOOT&quot; button (see image below)</p><img src="https://www.zigbee2mqtt.io/images/guides/SONOFF-DongleE-Router/dongle-e-buttons.png" width="648" height="242"></li><li><p>While holding the &quot;BOOT&quot; button press the &quot;RST&quot; button once to restart the device. You should see the output below. Release the &quot;BOOT&quot; button.</p><img src="'+l+'" width="350" height="250"></li></ul></li><li>Fifth, to upload the file <ul><li><p>In the bootloader terminal press &#39;1&#39; to initiate the upload</p><img src="'+r+'" width="350" height="250"></li><li><p>Open another terminal on the host system. Download the router firmware *.gbl file from <a href="https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/tree/master/Dongle-E/Router" target="_blank" rel="noopener noreferrer">here</a>, e.g.</p><p><code>wget https://github.com/itead/Sonoff_Zigbee_Dongle_Firmware/raw/refs/heads/master/Dongle-E/Router/Z3RouterUSBDonlge_EZNet6.10.3_V1.0.0.gbl</code></p></li><li><p>Send the file through XMODEM</p><ul><li>debian based OS: <code>sx Z3RouterUSBDonlge_EZNet6.10.3_V1.0.0.gbl &lt; /dev/ttyACM0 &gt; /dev/ttyACM0</code></li><li>arch based OS: <code>lrzsz-sx -X Z3RouterUSBDonlge_EZNet6.10.3_V1.0.0.gbl &lt; /dev/ttyACM0 &gt; /dev/ttyACM0</code> (Without the -X it will not use the xmodem protocol)</li></ul></li><li><p>Wait for &#39;Serial upload complete&#39;, then press &#39;2&#39; in the Bootloader Terminal to restart the dongle.</p></li></ul></li><li>Finally, the dongle LED blinks green, inidicating it is in paring mode. Pair as usual with Z2M.</li><li>Note: The dongle may not pair successfully if it is plugged into a USB 3.x socket, if it fails to pair try moving it to a USB 2 socket or a standalone USB charger.</li><li>If you have to re-pair the dongle and it does not show up you can try this step by step guide: <ol><li>Disassemble the device</li><li>Re-attach the antenna (to avoid burnout)</li><li>Provide power to the device</li><li>Permit join (allow pairing) to Zigbee2MQTT Coordinator</li><li>Press the boot button for about 5 seconds (green LED might not flash)</li><li>Monitor device becoming available</li><li>Power down device, remove antenna</li><li>Re-assemble device and attach antenna</li><li>Place router to it’s designed location</li></ol></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light-indicator-level-numeric" tabindex="-1"><a class="header-anchor" href="#light-indicator-level-numeric"><span>Light indicator level (numeric)</span></a></h3><p>Brightness of the indicator light. Value can be found in the published state on the <code>light_indicator_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>',10))])}]]),s=JSON.parse('{"path":"/devices/ZBDongle-E.html","title":"SONOFF ZBDongle-E control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF ZBDongle-E control via MQTT","description":"Integrate your SONOFF ZBDongle-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-30T20:52:51.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"How to create a SONOFF ZBDongle-E Router","slug":"how-to-create-a-sonoff-zbdongle-e-router","link":"#how-to-create-a-sonoff-zbdongle-e-router","children":[]},{"level":3,"title":"Hints","slug":"hints","link":"#hints","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light indicator level (numeric)","slug":"light-indicator-level-numeric","link":"#light-indicator-level-numeric","children":[]}]}],"git":{"updatedTime":1743179599000},"filePathRelative":"devices/ZBDongle-E.md"}')}}]);