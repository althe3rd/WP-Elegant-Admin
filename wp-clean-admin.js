jQuery(document).ready(function($) {

var isHome = false;

  	 var siteurli = $("#wp-admin-bar-site-name a").attr("href") + "wp-admin/";
  	 var currentURL = document.URL;
  	
 if(currentURL == siteurli || currentURL == siteurli+"index.php") {
		isHome = true;

	}
	
$(".subsubsub").append("<li class='filter' id='filter-by-options'><a href='#'> Filter</a></li>");

$("#filter-by-options").click(function(e) {
  	e.preventDefault();
  	
  	$(".tablenav.top").toggle();
  	//$(".auto-fold #adminmenuback, .auto-fold #adminmenuwrap").toggleClass("menuHide");
  	
  });

  
 $("#wp-admin-bar-root-default").prepend("<li id='wp-admin-bar-wp-menu'><a href='#' class='ab-item sideNavMenuToggle'><span class='ab-icon'></span> Menu</a></li>");
 //$(".auto-fold #adminmenuback, .auto-fold #adminmenuwrap").addClass("menuHide");
 
 var randNum = Math.floor((Math.random()*3)+1);
 
 if(isHome) {
 $("body").prepend("<div class='greeting show'><div class='inner'>Hello</div></div>");
 }
 
 if(randNum == 1) {
	 $(".greeting .inner").text("Hello");
 }
 
 if(randNum == 2) {
	 $(".greeting .inner").text("Hi There");
 }
 
 if(randNum == 2) {
	 $(".greeting .inner").text("Whats Up?");
 }
 
 setTimeout(function() {
	 
 
 $(".greeting").removeClass("show");
 },2000);
 
 $(".postbox").addClass("anim");
 
 setTimeout(function() {
	$(".postbox").removeClass("anim");	 
	$(".postbox").css("opacity","1");
 },5000)
 
 
 $(".sideNavMenuToggle").click(function(e) {
  	e.preventDefault();
  	
  	$(".auto-fold #adminmenuback, .auto-fold #adminmenuwrap").toggleClass("menuShown");
  	$("#wpcontent, #wpfooter").toggleClass("menuopen");
  	//$(".auto-fold #adminmenuback, .auto-fold #adminmenuwrap").toggleClass("menuHide");
  	
  });

 function setGetParameter(url, paramName, paramValue)
{
	
    //var url = window.location.href;
    if (url.indexOf(paramName + "=") >= 0)
    {
    	console.log(paramName);
        var prefix = url.substring(0, url.indexOf(paramName));
        var suffix = url.substring(url.indexOf(paramName)).substring(url.indexOf("=") + 1);
        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
        url = prefix + paramName + "=" + paramValue + suffix;
    }
    else
    {
if (url.indexOf("?") < 0) 
        url += "?" + paramName + "=" + paramValue;
    else
        url += "&" + paramName + "=" + paramValue;
    }
    return url;
}

function gup( name ){
name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
var regexS = "[\\?&]"+name+"=([^&#]*)";  
var regex = new RegExp( regexS );  
var results = regex.exec( window.location.href ); 
 if( results == null )    return "";  
else    return results[1];}


 var siteurl = $("#wp-admin-bar-site-name a").attr("href") + "wp-admin/";
var currentURL = document.URL;

/*$("#adminmenuwrap").fadeIn(300);*/


$('#wpbody').animate({
    opacity: 1   
	  }, 300, function() {
	    // Animation complete.
	  });
	   
	if(currentURL == siteurl) {
	
	//sessionStorage.removeItem("section");
	 sessionStorage.setItem("section", "0");
	 // Handler for .ready() called.
	$("body").append('<div id="whiteout"><div id="wplogogray"></div></div>');
	setTimeout(function() {
	$('#whiteout #wplogogray').addClass("animate");
	
	},300);
	setTimeout(function() {
		
		$('#whiteout').fadeOut(400, function() {
	    // Animation complete.
		});
		
	},1600);
	
	}

 


var analytics = false;
var analyticsUrl;

//Check to see if JetPack analytics is installed
$( "a" ).each(function( index ) {
	 if($(this).text() == "Site Stats") {
		analyticsUrl = $(this).attr("href");
		analytics = true;
		
	} 
 });
 
var sectioncheck = gup("section");

if (sectioncheck) {
$( "#wpbody a" ).each(function( index ) {
	 var h = $(this).attr("href");
	 	if(h) {
	 	h = setGetParameter(h, "section", sectioncheck);
	 	 $(this).attr("href",h);
	 	}
	
 });
 
 $( "#wpbody input" ).each(function( index ) {
	 var i = $(this).attr("type");
	 if(i == "submit") {
		 var s = $(this).closest("form").attr("action");
		 //console.log(s);
		 if(s) {
			 //s = setGetParameter(s, "section", sectioncheck);
			 //$(this).closest("form").attr("action",s);
			 
		 }
		 
		 
	 }
	
 });
 
 sessionStorage.setItem("section", sectioncheck);
}
 

 
 if(analytics) {
 //$("#wpwrap").prepend('<div class="newGlobalMenu"><nav class="cleanNav"><a href="#" class="dashboardButton active">Dashboard<span></span></a><a href="#" class="analyticsButton" data-section="0">Statistics<span></span></a><a href="#" class="contentButton">Content<span></span></a><a href="#" class="settingsButton">Settings<span></span></a></nav><div class="wplogo"></div><a href="#" class="previewButton"><span class="previewButtonText"></span><div class="previewFade"></div></a></div>'); 
 } else {
	 //$("#wpwrap").prepend('<div class="newGlobalMenu"><nav class="cleanNav"><a href="#" class="dashboardButton active">Dashboard<span></span></a><a href="#" class="contentButton">Content<span></span></a><a href="#" class="settingsButton">Settings<span></span></a></nav><div class="wplogo"></div><a href="#" class="previewButton"><span class="previewButtonText"></span><div class="previewFade"></div></a></div>');
 }

//$("#wpcontent").prepend('<div id="splash"></div>');
 
 
 //$("#adminmenu").prepend('<li class="wp-not-current-submenu wp-menu-separator"><h3 class="dashboard">Dashboard</h3><p>Get a view of everything in wordpress from the dashboard.</p></li>');
 
 var siteurl = $("#wp-admin-bar-site-name a").attr("href");
 var sitename = $("#wp-admin-bar-site-name a").first().text();
 
 if(analyticsUrl) {
 	analyticsUrl = setGetParameter(analyticsUrl, "section", "0");
 }
 
 var updatesurl = $("#wp-admin-bar-updates a").attr("href");
 if(updatesurl) {
 	updatesurl = setGetParameter(updatesurl, "section", "0");
 }
 
 var dashboardurl = $("a.menu-icon-dashboard").attr("href");
 if(dashboardurl) {
 	dashboardurl = setGetParameter(dashboardurl, "section", "0");
 }

 
 var contenturl = siteurl + "wp-admin/index.php?section=1&splash=content";
 
 var splashresult = gup("splash");
 
if(splashresult) {
	$("#wpcontent #splash").show();
	$( "#wpcontent #splash" ).addClass(splashresult);  	
} else {
	$("#wpcontent #splash").hide();
}
 
 //var settingsurl = $("a.menu-icon-appearance").attr("href");
 //settingsurl = setGetParameter(settingsurl, "section", "2");
 
 $(".previewButton").attr("href",siteurl);
 $(".previewButtonText").text(sitename);
 $(".cleanNav .dashboardButton").attr("href",dashboardurl);
 $(".cleanNav .contentButton").attr("href",contenturl);
 $(".cleanNav .analyticsButton").attr("href",analyticsUrl);
 $("#wp-admin-bar-updates a").attr("href",updatesurl);
 
 



 var foundposts = false;
 var foundmultisite = false;
 
/* $( "li.wp-menu-separator" ).each(function( index ) {
 		$(this).attr("data-section",index);
 		$(this).nextAll("li").attr("data-section",index);
 		
 		
 		
 		
 		var t = $(this).next().find(".wp-menu-name").text();
 		
	  	if(t == "Posts") {
		  	$(this).html("<h3 class='content'>Content</h3><p>Create and edit your content.</p>");
		  	foundposts = true;
	  	}
	  	
	  	if(t == "Sites") {
	  		$(this).html("<h3 class='settings'>Configure</h3><p>Change settings for your site, access import and export tools, and adjust user information.</p>");
		  	foundmultisite = true;
		  	 var settingsurl = $("a.menu-icon-dashboard").attr("href");
			 if(settingsurl) {
			 	settingsurl = setGetParameter(settingsurl, "section", "1");
			 	settingsurl = setGetParameter(settingsurl, "splash", "settings");
			 }
		  	$(".cleanNav .settingsButton").attr("href",settingsurl);
	  	}
	  	
	  	if(t == "Appearance" && foundmultisite == false) {
		  	$(this).html("<h3 class='settings'>Configure</h3><p>Change settings for your site, access import and export tools, and adjust user information.</p>");
		  	
		  	  var settingsurl = $("a.menu-icon-dashboard").attr("href");
			 if(settingsurl) {
			 	settingsurl = setGetParameter(settingsurl, "section", "2");
			 	settingsurl = setGetParameter(settingsurl, "splash", "settings");
			 }
			 $(".cleanNav .settingsButton").attr("href",settingsurl);
		  	
	  	} 
  	});*/
  	
  if(!foundposts) {
	  /*$(".contentButton").hide();*/
  }
  
  	
  	
  	/*$( "#adminmenu a" ).each(function( index ) {
 		var urlstart = $(this).attr("href");
 		var setindex = $(this).closest("li.menu-top").attr("data-section");
 		
 		if(setindex) {
 		var parm = setGetParameter(urlstart,"section",setindex);
 		$(this).attr("href",parm);
 		//console.log(setindex);
 		}
 		
  	});*/
  	
  	
  	/*( "#wpadminbar a" ).each(function( index ) {
 		var urlstart = $(this).attr("href");
 		
 		if($(this).closest("li").attr("id") == "wp-admin-bar-network-admin-s") {
	 		var parm = setGetParameter(urlstart,"section","1");
 		} else if($(this).closest("li").attr("id") == "wp-admin-bar-network-admin-u") {
	 		var parm = setGetParameter(urlstart,"section","1");
 		} else if($(this).closest("li").attr("id") == "wp-admin-bar-blog-1-n") {
	 		var parm = setGetParameter(urlstart,"section","1");
 		} else if($(this).closest("li").attr("id") == "wp-admin-bar-blog-1-c") {
	 		var parm = setGetParameter(urlstart,"section","1");
 		} else {
	 		var parm = setGetParameter(urlstart,"section","0");
 			
 		}
 		$(this).attr("href",parm);
 		
 		
  	});*/
  	
  	 var siteurli = $("#wp-admin-bar-site-name a").attr("href") + "wp-admin/";
var currentURL = document.URL;
  	
 if(currentURL == siteurli) {
	
		/*$( "#adminmenu li.menu-top, #adminmenu li.wp-menu-separator" ).each(function( index ) {
	   		var t = $(this).attr("data-section");
	   		
		  	if(t == "0") {
			  	$(this).show();
			  	
		  	} else {
			  	$(this).hide();
			  	
		  	}
		 });*/
	
	
	
	
	}
  var sessionstorage = sessionStorage.getItem("section");
 

var sectionresult = gup("section");


if(sessionstorage) {
	 /*$( "#adminmenu li.menu-top, #adminmenu li.wp-menu-separator" ).each(function( index ) {
	   		var t = $(this).attr("data-section");
	   		
		  	if(sessionstorage == t) {
			  	$(this).show();
			  	
		  	} else {
			  	$(this).hide();
			  	
		  	}
		 });
		 console.log("used session storage");*/
 } else {

if(sectionresult) {
	
		/*$( "#adminmenu li.menu-top, #adminmenu li.wp-menu-separator" ).each(function( index ) {
	   		var t = $(this).attr("data-section");
	   		
		  	if(sectionresult == t) {
			  	$(this).show();
			  	
		  	} else {
			  	$(this).hide();
			  	
		  	}
		 });
		 console.log("used url parm");*/
  	
} 
}
  	
 
  
  /*$(".wp-admin-bar-wp-logo a").click(function(e) {
  	e.preventDefault();
  	$(".auto-fold #adminmenuback, .auto-fold #adminmenuwrap").toggle();
  	return false;
  });*/
  	
  $("#adminmenu a").click(function() {
  	//return false;
 	var l = $(this).closest("li.menu-top").attr("data-section");
 	//var url = $(this).attr("href") + "&foo=bar";
 	//$(this).attr("href",url);
 	
 	/*$( "#adminmenu li.menu-top" ).each(function( index ) {
   		var t = $(this).attr("data-section");
   		
	  	if(l == t) {
		  	$(this).show();
		  	
	  	} else {
		  	$(this).hide();
		  	
	  	}
  	});*/
  	
  	
 });
 
 


 
 
/*$( "#adminmenu li.menu-icon-dashboard" ).attr("data-section","9");*/


 /*$(".cleanNav .dashboardButton").click(function() {
 	
   $( "#adminmenu li.menu-top" ).each(function( index ) {
	  	if($(this).hasClass("menu-icon-dashboard")) {
		  	$(this).show();
		  	//$(this).attr("data-show","yes");
	  	} else {
		  	$(this).hide();
		  	//$(this).attr("data-show","no");
	  	}
  	});
 });
 
 $(".cleanNav .dashboardButton").click(function() {
   $( "#adminmenu li.menu-top" ).each(function( index ) {
	  	
		  	$(this).show();
		  	//$(this).attr("data-show","yes");
  	});
 });*/
 

 /* $(".cleanNav .contentButton").mouseover(function() {
   $( "#adminmenu li.menu-top" ).each(function( index ) {
	  	if($(this).hasClass("menu-icon-post") || $(this).hasClass("menu-icon-media") || $(this).hasClass("menu-icon-page") || $(this).hasClass("menu-icon-comments")) {
		  	$(this).show();
	  	} else {
		  	$(this).hide();
	  	}
  	});
 });
 
 $(".cleanNav .contentButton").mouseout(function() {
   $( "#adminmenu li.menu-top" ).each(function( index ) {
	  	
		  	$(this).show();
	  	
  	});
 });*/
 
 

 
  WebFontConfig = {
    google: { families: [ 'Open+Sans:300,600:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
 
});