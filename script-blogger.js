document.addEventListener("DOMContentLoaded", function(){
				var body = document.querySelector('body'),
					menuOpen = document.querySelector('.menu-open'),
					menuList = document.querySelector('.menu-list'),
					menuOpacity = document.querySelector('.menu-opacity'),
					searchOpen = document.querySelector('.search-open'),
					searchClose = document.querySelector('.search-close'),
					searchForm = document.querySelector('.search-form'),
					searchOpacity = document.querySelector('.search-opacity');
				menuOpen.onclick = function(){
					menuList.classList.add('menu-list-block');
					menuOpacity.classList.add('menu-opacity-block');
					body.classList.add('body-overflow');
				}
				menuOpacity.onclick = function(){
					menuList.classList.remove('menu-list-block');
					menuOpacity.classList.remove('menu-opacity-block');
					body.classList.remove('body-overflow');
				}
				searchOpen.onclick = function(){
					searchForm.classList.add('search-form-block');
					searchOpacity.classList.add('search-opacity-block');
					body.classList.add('body-overflow');
				}
				searchClose.onclick = function(){
					searchForm.classList.remove('search-form-block');
					searchOpacity.classList.remove('search-opacity-block');
					body.classList.remove('body-overflow');
				}
				searchOpacity.onclick = function(){
					searchForm.classList.remove('search-form-block');
					searchOpacity.classList.remove('search-opacity-block');
					body.classList.remove('body-overflow');
				}	

	//Menu
$(document)['ready'](function(xm) {
    var x1 = -1,
        x2 = '',
        x3 = '';
    xm('#menu')['find']('ul')['find']('li')['each'](function() {
        for (var x4 = xm(this)['text'](), x5 = xm(this)['find']('a')['attr']('href'), xm0 = 0, x6 = 0; x6 < x4['length'] && (xm0 = x4['indexOf']('_', xm0), -1 != xm0); x6++) {
            xm0++
        };
        if (level = x6, level > x1 && (x2 += '<ul>', x3 += '<ul>'), level < x1) {
            offset = x1 - level;
            for (var x6 = 0; x6 < offset; x6++) {
                x2 += '</ul></li>', x3 += '</ul></li>'
            }
        };
        x4 = x4['replace'](/_/gi, ''), x2 += '<li><a href=\'' + x5 + '\'>' + x4 + '</a>', x3 += '<li><a href=\'' + x5 + '\'>';
        for (var x6 = 0; x6 < level; x6++) {
            x3 += ''
        };
        x3 += x4 + '</a>', x1 = level
    });
    for (var xm0 = 0; x1 >= xm0; xm0++) {
        x2 += '</ul>', x3 += '</ul>', 0 != xm0 && (x2 += '</li>', x3 += '</li>')
    };
    xm('#menu .LinkList')['html'](x3), xm('#menu > .LinkList > ul')['attr']('id', 'nav'),  xm('#menu ul > li > ul')['parent']('li')['addClass']('parent'), xm('#menu .widget')['attr']('style', 'display:block!important;')
});




 
 function initMenu() {
   $('#nav ul').hide();
   $('#nav li a').click(

   function () {
       var checkElement = $(this).next();
       if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
           $(this).removeClass("hiactive");
           $('#nav ul:visible').slideToggle('normal');

           return false;
       }
       if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
           removeActiveClassFromAll();
          $(this).addClass("hiactive");
           $('#nav ul:visible').slideToggle('normal');
           checkElement.slideToggle('normal');
           return false;
       }
   });

 
}

function removeActiveClassFromAll() {
    $('#nav li a').each(function (index) {
        $(this).removeClass("hiactive");
    });
}
$(document).ready(function () {initMenu();});



(function(a) {
    function h() {
        g || (g = !0, d ? (b.find("a").hide(), b.find("div.loading").show(), a.ajax(d, {
            dataType: "html"
        }).done(function(c) {
            var c = a("<div></div>").append(c.replace(j, "")),
                e = c.find("a.blog-pager-older-link");
            e ? d = e.attr("href") : (d = "", b.hide());
            c = c.find(i).children();
            a(i).append(c);
            window._gaq && window._gaq.push(["_trackPageview", d]);
            window.gapi && window.gapi.plusone && window.gapi.plusone.go && window.gapi.plusone.go();
            window.disqus_shortname && a.getScript("https://" + window.disqus_shortname + ".disqus.com/blogger_index.js");
            window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse();
            b.find("div.loading").hide();
            b.find("a").show();
            g = !1
        })) : b.hide())
    }
    function k() {
        var a = Math.max(f.height(), l.height(), document.documentElement.clientHeight),
            b = f.scrollTop() + f.height();
        0 > a - b && h()
    }
    var d = "",
        b = null,
        i = "div.main",
        g = !1,
        f = a(window),
        l = a(document),
        j = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    a(document).ready(function() {
        if ("item" != _WidgetManager._GetAllData().blog.pageType && (d = a("a.blog-pager-older-link").attr("href"))) {
            var c =
                a('<a class="load-more" href="javascript: void(0);" >Tải thêm</a>');
            c.click(h);
            var e = a(
              '<div style="display: none;" class="loading"><div class="container-loading"><div class="loading-spinner"></div></div></div>'

            );
            f.scroll(k);
            b = a('<div class="load-more-area"></div>');
            b.append(c);
            b.append(e);
            b.insertBefore(a("#blog-pager"));
            a("#blog-pager").hide()
        }
    })

})(jQuery);

	
	
	
	
			}, false)
