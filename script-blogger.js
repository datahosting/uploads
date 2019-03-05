  document.addEventListener(&quot;DOMContentLoaded&quot;, function(){

$(document)['ready'](function(so_1) {
    var so_3 = -1,
        so_7 = '',
        so_8 = '';
    so_1('#menu')['find']('ul')['find']('li')['each'](function() {
        for (var so_9 = so_1(this)['text'](), x7 = so_1(this)['find']('a')['attr']('href'), so_10 = 0, x9 = 0; x9 < so_9['length'] && (so_10 = so_9['indexOf']('_', so_10), -1 != so_10); x9++) {
            so_10++
        };
        if (level = x9, level > so_3 && (so_7 += '<ul>', so_8 += '<ul>'), level < so_3) {
            offset = so_3 - level;
            for (var x9 = 0; x9 < offset; x9++) {
                so_7 += '</ul></li>', so_8 += '</ul></li>'
            }
        };
        so_9 = so_9['replace'](/_/gi, ''), so_7 += '<li><a href=\'' + x7 + '\'>' + so_9 + '</a>', so_8 += '<li><a href=\'' + x7 + '\'>';
        for (var x9 = 0; x9 < level; x9++) {
            so_8 += ''
        };
        so_8 += so_9 + '</a>', so_3 = level
    });
    for (var so_10 = 0; so_3 >= so_10; so_10++) {
        so_7 += '</ul>', so_8 += '</ul>', 0 != so_10 && (so_7 += '</li>', so_8 += '</li>')
    };
    so_1('#menu .LinkList')['html'](so_8), so_1('#menu > .LinkList > ul')['attr']('id', 'nav'),  so_1('#menu ul > li > ul')['parent']('li')['addClass']('parent'), so_1('#menu .widget')['attr']('style', 'display:block!important;')
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


    var body = document.querySelector(&#39;body&#39;),
        menuOpen = document.querySelector(&#39;.menu-open&#39;),
        menuList = document.querySelector(&#39;.menu-list&#39;),
        menuOpacity = document.querySelector(&#39;.menu-opacity&#39;),
        searchOpen = document.querySelector(&#39;.search-open&#39;),
        searchClose = document.querySelector(&#39;.search-close&#39;),
        searchForm = document.querySelector(&#39;.search-form&#39;),
        searchOpacity = document.querySelector(&#39;.search-opacity&#39;);
    searchOpen.onclick = function(){
        searchForm.classList.add(&#39;search-form-block&#39;);
        searchOpacity.classList.add(&#39;search-opacity-block&#39;);
        body.classList.add(&#39;body-overflow&#39;);
      }
      searchClose.onclick = function(){
        searchForm.classList.remove(&#39;search-form-block&#39;);
        searchOpacity.classList.remove(&#39;search-opacity-block&#39;);
        body.classList.remove(&#39;body-overflow&#39;);
      }
      searchOpacity.onclick = function(){
        searchForm.classList.remove(&#39;search-form-block&#39;);
        searchOpacity.classList.remove(&#39;search-opacity-block&#39;);
        body.classList.remove(&#39;body-overflow&#39;);
      } 
      menuOpen.onclick = function(){
        menuList.classList.add(&#39;menu-list-block&#39;);
        menuOpacity.classList.add(&#39;menu-opacity-block&#39;);
        body.classList.add(&#39;body-overflow&#39;);
      }
      menuOpacity.onclick = function(){
        menuList.classList.remove(&#39;menu-list-block&#39;);
        menuOpacity.classList.remove(&#39;menu-opacity-block&#39;);
        body.classList.remove(&#39;body-overflow&#39;);
      }
      


    

  
   //<![CDATA[
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
