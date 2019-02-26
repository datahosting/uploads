<script type='text/javascript'>
    (function(a) {
        function h() {
            g || (g = !0, d ? (b.find("a").hide(), b.find("img").show(), a.ajax(d, {
                dataType: "html"
            }).done(function(c) {
                var c = a("<div></div>").append(c.replace(j, "")),
                    e = c.find("a.blog-pager-older-link");
                e ? d = e.attr("href") : (d = "", b.hide());
                c = c.find(i).children();
                a(i).append(c);
                window._gaq && window._gaq.push(["_trackPageview", d]);
                window.gapi && window.gapi.plusone && window.gapi.plusone.go && window.gapi.plusone.go();
                window.disqus_shortname && a.getScript("http://" + window.disqus_shortname + ".disqus.com/blogger_index.js");
                window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse();
                b.find("img").hide();
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
            i = "div.blog-posts",
            g = !1,
            f = a(window),
            l = a(document),
            j = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        a(document).ready(function() {
            if ("item" != _WidgetManager._GetAllData().blog.pageType && (d = a("a.blog-pager-older-link").attr("href"))) {
                var c =
                    a('<a href="javascript:;" >Tải thêm bài viết</a>');
                c.click(h);
                var e = a('<img src="http://3.bp.blogspot.com/-AZyqKh-riBI/Uvm8rXjpFQI/AAAAAAAABsg/KG87IcAZzso/s1600/fb-style-loader-namkna.gif" style="display: none;">');
                f.scroll(k);
                b = a('<div class="button medium"></div>');
                b.append(c);
                b.append(e);
                b.insertBefore(a("#blog-pager"));
                a("#blog-pager").hide()
            }
        })
    })(jQuery);
</script>
