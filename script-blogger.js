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

			}, false)
