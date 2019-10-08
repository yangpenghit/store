window.onload = function(){
    //整个div容器
    let container = document.getElementsByClassName('container')[0];
    //容器中的小图片
    let smallimg = container.getElementsByTagName('img')[0];
    //容器中的span滑块
    let slider = document.getElementsByClassName('slider')[0];
    //放置放大图片的div
    let enlarge = document .getElementsByClassName('enlarge')[0];
    //容器中的大图片
    let bigimg = enlarge.getElementsByTagName('img')[0];
    //鼠标移入时
    container.onmousemove = function(evt){
        //获取事件
        let e = evt || window.event;
        //获取大图和小图之间的倍数
        let n = bigimg.offsetHeight / smallimg.offsetHeight;
        //获取小图位置
        let smallimg_X = smallimg.getBoundingClientRect().left;
        let smallimg_Y = smallimg.getBoundingClientRect().top + document.documentElement.scrollTop;
        //获取鼠标相对于容器的位置
        let mouse_X = e.pageX - smallimg_X;
        let mouse_Y = e.pageY - smallimg_Y
        
        //开始进行界面操作
        //1、将slider和enlarge两个div设置为可见(display:'block')
        slider.style.display = 'block';
        enlarge.style.display = 'block';
        //2、设置slider的高宽
        slider.style.width = smallimg.offsetWidth/2 + 'px';
        slider.style.height = smallimg.offsetWidth/2 +'px';
        //3、设置边界以及大图片移动算法
        if(mouse_X <= slider.offsetWidth/2){
            //最左侧
            bigimg.style.left = '0px'; //大图居左
            slider.style.left = smallimg.offsetLeft + 'px'; //sider与图片左端对齐
        }else if(mouse_X > slider.offsetWidth/2 && mouse_X < smallimg.offsetWidth-slider.offsetWidth/2){
            //在中间部分时
            let tempX = mouse_X - slider.offsetWidth/2;
            bigimg.style.left = -n*tempX +'px';
            slider.style.left = tempX + smallimg.offsetLeft + 'px';
        }else{
            //最右侧
            bigimg.style.left = -n*(smallimg.offsetWidth - slider.offsetWidth) + 'px';
            slider.style.left = smallimg.offsetLeft + smallimg.offsetWidth -slider.offsetWidth + 'px';
        };
        if(mouse_Y <= slider.offsetWidth/2){
            //最顶部
            bigimg.style.top = '0px';
            slider.style.top = '0px';
        }else if(mouse_Y > slider.offsetHeight/2 && mouse_Y <smallimg.offsetHeight-slider.offsetHeight/2){
            //在中间部分
            let tempY = mouse_Y - slider.offsetHeight/2;
            bigimg.style.top = -n*tempY + 'px';
            slider.style.top = tempY + 'px'
        }else{
            //最底部
            bigimg.style.top = -(n-1)*smallimg.offsetHeight + 'px';
            slider.style.top = smallimg.offsetHeight - slider.offsetHeight + 'px';
        }
    }
    //鼠标移出时
    container.onmouseout = function(){
        slider.style.display = 'none';
        enlarge.style.display = 'none';
    }

    let first_address = document.getElementsByClassName('first_address')[0];
    let second_address = document.getElementsByClassName('second_address')[0];
    let remove = document.getElementsByClassName('fa-remove')[0];
    first_address.onmouseover = function(){
        first_address.style.cssText = 'color: rgb(255,68,0);border:1px solid rgb(255,68,0);background-color: rgb(255,242,232);cursor: pointer;'
    }
    first_address.onmouseout = function(){
        if(second_address.style.opacity !== '1'){
            first_address.style.cssText = 'color:black;border:1px solid rgb(255,68,0,0);background-color:whit;'
        }
    }
    first_address.onclick = function(){
        second_address.style.cssText = 'opacity:1;z-index:2';
        first_address.style.cssText = 'color:white;background-color:rgb(255,68,0);border:1px solid rgb(255,68,0);'
    }
    remove.onclick = function(){
        second_address.style.cssText = 'opacity:0;z-index:-1';
        first_address.style.cssText = 'color:black;background-color:white;border:1px solid rgba(255,68,0,0);'
    };

    let choose1 = document.getElementById('choose1');
    let choose2 = document.getElementById('choose2');
    let choose3 = document.getElementById('choose3');
    //进入选择区域时
    let move = document.getElementsByClassName('move')[0];
    move.style.width = choose1.offsetWidth + 'px';
    move.style.height = choose1.offsetHeight  + 'px';
    move.style.left = choose1.offsetLeft + 'px';
    move.style.top = choose1.offsetTop + 'px';

    let region = document.getElementsByClassName('region')[0];
    let region_1 = document.getElementsByClassName('region_1')[0];
    let region_2 = document.getElementsByClassName('region_2')[0];

    let elems = document.querySelectorAll('.region>table td');
    for(let i=0;i<elems.length;i++){
        elems[i].onclick = function(){
            choose1.firstElementChild.innerHTML = elems[i].innerHTML;
            choose1.style.cssText = 'border:1px solid rgb(96,96,96);border-bottom:none;';
            choose2.style.cssText = 'border:1px solid rgba(96,96,96,0);border-bottom:none;';
            move.style.left = choose2.offsetLeft + 'px';
            move.style.top = choose2.offsetTop + 'px';
            choose2.style.opacity = '1';
            region.style.display = 'none';
            region_1.style.display = 'block';
        }
    };
    let elems_1 = document.querySelectorAll('.region_1>table td');
    for(let i=0,len=elems_1.length;i<len;i++){
        elems_1[i].onclick = function(){
            choose2.firstElementChild.innerHTML = elems_1[i].innerHTML;
            choose2.style.cssText = 'border:1px solid rgb(96,96,96);border-bottom:none;';
            move.style.left = choose3.offsetLeft + 'px';
            move.style.top = choose3.offsetTop + 'px';
            choose2.style.opacity = '1';
            choose3.style.opacity = '1';
            region_1.style.display = 'none';
            region_2.style.display = 'block';
        }
    };
    let elems_2 = document.querySelectorAll('.region_2>table td');
    for(let i=0,len=elems_2.length;i<len;i++){
        elems_2[i].onclick = function(){
            choose3.firstElementChild.innerHTML = elems_2[i].innerHTML;
            first_address.firstElementChild.innerHTML = choose1.firstElementChild.innerHTML+choose2.firstElementChild.innerHTML+choose3.firstElementChild.innerHTML;
            second_address.style.cssText = 'opacity:0;z-index:-1';
            first_address.style.cssText = 'color:black;background-color:white;border:1px solid rgba(255,68,0,0);'
        }
    };
    choose2.onclick = function(){
        choose2.firstElementChild.innerHTML = '请选择&nbsp;';
        choose3.style.opacity = '0';
        region_1.style.display = 'block';
        region_2.style.display = 'none';
        move.style.left = choose2.offsetLeft + 'px';
        move.style.top = choose2.offsetTop + 'px';
        choose2.style.cssText = 'border: 1px solid rgba(0,0,0,0);border-bottom:none;opacity:1';
    }
    choose1.onclick = function(){
        choose1.firstElementChild.innerHTML = '请选择&nbsp;';
        choose2.style.opacity = '0';
        choose3.style.opacity = '0';
        region.style.display = 'block';
        region_1.style.display = 'none';
        region_2.style.display = 'none';
        move.style.left = choose1.offsetLeft + 'px';
        move.style.top = choose1.offsetTop + 'px';
        choose1.style.cssText = 'border: 1px solid rgba(0,0,0,0);border-bottom:none;opacity:1';
    }
    
    //选择尺码效果
    function clickcolor(element){
        for(let i = 0,len = element.length;i<len;i++){
            element[i].onclick = function(){
                element[i].style.cssText = 'color:rgb(255,68,0);border:1px solid rgb(255,68,0)';
                for(let m=0;m<len;m++){
                    if(m !== i){
                        element[m].style.cssText = 'color:black;border: 1px solid gray;'
                    }
                }
            }
        }
    }
    let size_choose = document.getElementsByClassName('size_choose')[0].children;
    clickcolor(size_choose);
    let color_choose = document.getElementsByClassName('color_choose')[0].children;
    clickcolor(color_choose);

    //价格加减
    let minus = document.getElementsByClassName('minus')[0];
    let add = document.getElementsByClassName('add')[0];
    let number = document.getElementsByClassName('number')[0];
    let repertory = document.querySelector('.body_style .product .product_1 .shopping .second_row .count span');
    add.onclick = function(){
        if(number.innerHTML == repertory.innerHTML){
            return;
        }
        minus.style.cssText = 'background-color:white;color:black'
        number.innerHTML++;
        if(number.innerHTML == repertory.innerHTML){
            add.style.cssText = 'background-color: rgb(237,237,237);color: rgb(204,204,204);'
        }
    };
    minus.onclick = function(){
        if(number.innerHTML == 1){
            return;
        }
        add.style.cssText = 'background-color:white;color:black'
        number.innerHTML--;
        if(number.innerHTML == 1){
            minus.style.cssText = 'background-color: rgb(237,237,237);color: rgb(204,204,204);'
            minus.removeEventListener('click');
        }
    }

    //小图改变大图
    let hover_div = document.querySelectorAll('.body_style .product .product-2 .button_img div img');
    for(let i=0;i<hover_div.length;i++){
        hover_div[i].onmouseover = function(){
            let src = 'img/product-details/gallery_' + (i+1) +'.jpg'
            smallimg.src = src;
            bigimg.src = src;
        }
    }
}