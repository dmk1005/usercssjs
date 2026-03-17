// ==UserScript==
// @name         Roblox Help 2011 js - Dual Different HTML
// @namespace    http://tampermonkey.net/
// @version      1
// @description  두 위치에 서로 다른 HTML을 삽입
// @author       Your Name
// @match        https://en.help.roblox.com/hc/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roblox.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    const headerExtraHtml = `
<div id="top-menu-background">
        <div id="top-menu">
          <ul id="green" style="width: 100%;">
            <li class="clazz tab_home first active"><a href="https://en.help.roblox.com" class="tab">Home</a></li><li class="main tab_forums first"><a class="tab" href="/web/20110408085203mp_/http://roblox.zendesk.com/forums">Answers</a></li>
              <li class="main clazz tab_new" style="display: none;"><a href="/web/20110408085203mp_/http://roblox.zendesk.com/anonymous_requests/new" class="tab">Submit a request</a></li>
            <li class="main clazz tab_requests" style="display: none;"><a href="/web/20110408085203/http://roblox.zendesk.com/requests" class="tab">Check your existing requests</a></li>

          </ul>
        </div>
      </div>
    `;

    const searchExtraHtml = `
<section id="sidebar">



<div class="widget draggable" id="widget_125662"><div class="blue_box_top"><a href="" class="widget_close_button" onclick="widgetManager.removeWidgetFromPage('home', 'index', 125662); return false;" style="display: none;" title="remove widget from this page"></a></div><div class="side-box-content">      Click to return to <a id="ctl00_cphRoblox_HyperLink3" href="http://www.roblox.com/" target="_blank">ROBLOX</a> <p>Type your question in the search box to find an answer.<br> </p><p>Still can't find what you're looking for? Check out our <a onclick="top.location = 'https://web.archive.org/web/20130718223103/http://www.roblox.com/Forum/Default.aspx'"> Forums</a> for Game Play/Building information, and to interact with the ROBLOX Community.<br></p><p>If you need assistance with your account or a have billing issue, email <a href="mailto:info@roblox.com?subject=Inquiry%20from%20the%20ROBLOX%20Help%20page">info@roblox.com</a>. See the <a id="ctl00_cphRoblox_HyperLink3" href="http://corp.roblox.com/contact-us" target="_blank">Contact Us</a> page for more ways to reach ROBLOX.
</p><div style="clear:left; height:8px;"></div></div><div class="blue_box_bottom">&nbsp;<a href="http://roblox.zendesk.com/widgets/125662/edit" class="widget_edit_button" rel="edit" style="display: none;" title="edit widget">edit</a></div></div>


<div class="widget draggable" id="widget_188924"><div class="blue_box_top"><a href="" class="widget_close_button" onclick="widgetManager.removeWidgetFromPage('home', 'index', 188924); return false;" style="display: none;" title="remove widget from this page"></a></div><div class="side-box-content"><h3>Other Help Sources</h3>      <h3><a id="ctl00_cphRoblox_hlWiki" class="MenuItem" href="https://rbxlegacy.wiki" target="_blank">Building/Scripting Wiki</a><br>
<a id="ctl00_cphRoblox_hyperlink5" class="MenuItem" href="https://rbxlegacy.wiki/index.php/Change_Log" target="_blank">Product Change Log</a><br>
            <a id="ctl00_cphRoblox_HyperLink1" title="Discuss your building challenges with the Roblox community and find answers to your questions in our Building Forum." href="http://www.roblox.com/Forum/ShowForum.aspx?ForumID=19" target="_blank">Building Forum</a><br>
            <a id="ctl00_cphRoblox_HyperLink2" title="Someone else has probably already asked your scripting question, click here to search for the answer in our Scripting Forum." href="http://www.roblox.com/Forum/ShowForum.aspx?ForumID=20" target="_blank">Scripting Forum</a><br>
            <a id="ctl00_cphRoblox_HyperLink4" title="Other users may have had the same technical issue that you are having.  Browse our Technical Forum for help." href="http://www.roblox.com/Forum/ShowForum.aspx?ForumID=14" target="_blank">Technical Forum</a><br>
            <a id="ctl00_cphRoblox_HyperLink3" title="Have a good idea? Post it for everyone to discuss and debate in our Suggestions Forum." href="http://www.roblox.com/Forum/ShowForum.aspx?ForumID=21" target="_blank">Suggestions</a><br>
<a id="ctl00_cphRoblox_HyperLink3" href="http://www.roblox.com/Parents.aspx" target="_blank">Parents</a><br></h3>

<div style="clear:left; height:8px;"></div></div><div class="blue_box_bottom">&nbsp;<a href="http://roblox.zendesk.com/widgets/188924/edit" class="widget_edit_button" rel="edit" style="display: none;" title="edit widget">edit</a></div></div>

</div>
    `;

    const injectObjects = () => {
        const header = document.querySelector('header.header');
        if (header) {
            header.insertAdjacentHTML('afterend', headerExtraHtml);
        }

        const searchSection = document.querySelector('section.section.search-section');
        if (searchSection) {
            searchSection.insertAdjacentHTML('afterend', searchExtraHtml);
        }
    };

    if (document.readyState === 'complete') {
        injectObjects();
    } else {
        window.addEventListener('load', injectObjects);
    }
})();