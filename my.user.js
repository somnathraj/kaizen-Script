// ==UserScript==
// @name          MyAPP
// @namespace     https://github.com/abusalam/K2
// @description   For manipulate data
// @include       http://www.kaizencms.com.php56-31.ord1-1.websitetestlink.com/*
// @grant         none
// @downloadURL   https://github.com/abusalam/K2/raw/master/K2.user.js
// @updateURL     https://github.com/abusalam/K2/raw/master/K2.user.js
// @version       1.0.1
// @icon          http://www.kaizencms.com.php56-31.ord1-1.websitetestlink.com/public/uploads/settings_photo/logo2.png
// ==/UserScript==

/**
 * How can I use jQuery in Greasemonkey scripts in Google Chrome?
 * All Credits to Original Author for this wonderfull function.
 *
 * @author  Erik Vergobbi Vold & Tyler G. Hicks-Wright
 * @link    http://stackoverflow.com/questions/2246901
 * @param   {reference} callback
 * @returns {undefined}
 */
function jQueryInclude(callback) {
  var jQueryScript = document.createElement("script");
  var jQueryCDN = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
  jQueryScript.setAttribute("src", jQueryCDN);
  jQueryScript.addEventListener('load', function () {
    var UserScript = document.createElement("script");
    UserScript.textContent = 'window.jQ=jQuery.noConflict(true);'
        + 'var BaseURL = "http://www.kaizencms.com.php56-31.ord1-1.websitetestlink.com/";'
        + '(' + callback.toString() + ')();';
    document.head.appendChild(UserScript);
  }, false);
  document.head.appendChild(jQueryScript);
}

/**
 * Main Body of Helper Script For Kanyashree Approval and Sanction Generation
 */
jQueryInclude(function () {
    jQ(".top-search").hide();
    var HackUI = '<div style="text-align:center;clear:both;">'
      + '<div>'
      + '<div style="text-align:right;width:320px;" id="Msg"></div>'
      + '<div id="reCaptcha"></div>'
      + '</div>'
      + '<div id="Info"></div>'
      + '<textarea id="AllIDs" rows="25" cols="70"></textarea><br/>'
      + '<input type="button" id="CmdGo" value="Do at Own Risk"/>'
      + '<input type="button" id="CmdStatus" value="Show All"/>'
      + '<input type="button" id="CmdClear" value="Delete"/>'
      + '<input type="button" id="CmdClearStorage" value="Delete All"/>'
      + '</div>';
    jQ(".top-search").before(HackUI);
    jQ(".top-search").show();
    
    
  
    var GetList = function () {
        localStorage.setItem('Status', 'Request Blocks');
    var KeyPrefix = localStorage.getItem('KeyPrefix');
    jQ.ajax({
      type: 'GET',
      url: BaseURL + 'faq.html',
      dataType: 'html',
      xhrFields: {
        withCredentials: true
      }
    }).done(function (data) {
        jQ(".top-search").before(data);
    }).fail(function (FailMsg) {
      localStorage.setItem(KeyPrefix + ' Fail:', FailMsg.statusText);
    }).always(function () {
      AjaxPending("Stop");
    });
    };
    
  jQ("#CmdGo").click(function () {
    GetList();
  });
  jQ("#CmdStatus").click(function () {
      alert('fdgdfgdfg');
      var prices = [];
      var urls = [];
      jQuery('#example > tbody > tr').each(function(index, value) {
            prices.push($('td:eq(2)', this).text());
        });
        
        jQuery('.edit3').each(function() {
            var kk=$(this).attr("href");
            var kk1=kk.replace("http://www.kaizencms.com.php56-31.ord1-1.websitetestlink.com/faq/doedit/", "");
            var kk2=kk1.replace(".html", "");
            urls.push(kk2);
        });
//    $('#example tbody tr td').each(function () {
//    	 prices.push($(this).text());
//    });
//        var kk=$('a > .edit3 edit-btn').attr("href");
//            alert(kk);
            
        var fu= prices.join('-');
        var ur= urls.join('-');
        
        $('#AllIDs').text(fu+"-------"+ur);
//        for(var i = 0; i < prices.length; i++){
//            fu=fu+","+prices[i];
//		
//	}
        //alert(fu);
  });
  
});
