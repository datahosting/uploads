document.addEventListener(&quot;DOMContentLoaded&quot;, function(){
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
    

  }, false)
