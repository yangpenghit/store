window.onload=function(){ 
    //owl-carousel 循环
    $(".owl-carousel").owlCarousel({
            loop:true,//无限循环
            autoplay:true,
            dots:false,
            autoplayTimeout:2500,//自动播放时间间隔
            autoplaySpeed:1000,//自动播放速度
            //autoplayHoverPause:true,//鼠标悬停时暂停
            margin:40,//幻灯片间距
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
    });
    let Dropli = document.getElementsByClassName('header_li');
    let Dropbox = document.getElementsByClassName('dropdown_style');
    for(var i=0;i<Dropli.length;i++){
        Dropli[i].onmouseover = function(){
            Dropbox[0].style.cssText = 'opacity: 1;margin-top:0px;z-index:10';
        }
        Dropbox[0].onmouseover = function(){
            Dropbox[0].style.cssText = 'opacity: 1;margin-top:0px;z-index:10';
        }
        Dropli[i].onmouseout = function(){
            Dropbox[0].style.cssText = 'opacity: 0;margin-top:20px;z-index:-1';
        }
        Dropbox[0].onmouseout = function(){
            Dropbox[0].style.cssText = 'opacity: 0;margin-top:20px;z-index:-1';
        }
    }
}
window.onscroll = function(){
    let  scrollTop = document.documentElement.scrollTop;
    //导航栏变矮
    let Header = document.getElementsByClassName('header_style')
    //显示右部回到顶部按钮
    let Rightbar = document.getElementsByClassName('rightbar');
    let header_search_span = document.getElementsByClassName('header_search_span')[0];
    if(scrollTop >= 100){
        Rightbar[0].style.cssText = 'z-index:10;opacity:1'
        Header[0].style.cssText = 'height: 67px;'
        header_search_span.style.cssText = 'font-size:17px;'
    }else{
        Rightbar[0].style.cssText = "z-index:-1;opacity:0"
        Header[0].style.cssText = 'height: 87px;'
        header_search_span.style.cssText = 'font-size:20px;'
    }
}