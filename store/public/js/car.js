    //全部商品/降价商品/库存紧张
    function Pay_Onclick(m){
        let pay_div = document.querySelectorAll('.carbody_row_details .carbody_row_pay .carbody_row_pay_left div');
        let pay_span = document.querySelectorAll('.carbody_row .carbody_row_pay .carbody_row_pay_left div>span:first-child');
        pay_div[m].style.cssText = 'border-bottom:2px solid rgb(255,68,0)'
        pay_span[m].style.color = 'rgb(255,68,0)';
        for(let n=0,len=pay_div.length;n<len;n++){
            if(n!=m){
                pay_div[n].style.cssText = 'border-bottom:1px solid rgba(255,68,0,0)';
                pay_span[n].style.color = 'rgb(0,0,0)'
            }
        }
    }
    //全选按钮
    function ChooseAll(m){
        //获取所有的复选框
        let CheckBox = document.querySelectorAll('.carbody_row input');
        //获取结算金额
        let PayMoney_1 = document.querySelector('.carbody_row_pay_right span:nth-child(2)');
        let PayMoney_2 = document.querySelector('.carbody_row_footchooseright div:nth-child(2) span');
        //获取两个结算按钮
        let PayButton_1 = document.querySelector('.carbody_row_pay_right button');
        let PayButton_2 = document.querySelector('.carbody_row_footchooseright div:last-child');
        //获取每个产品的单价
        let SingelMoney = document.querySelectorAll('.carbody_row_product div:nth-child(3) p:last-child span');
        //获取商品总数span
        let ProductTotal = document.querySelector('.carbody_row_footchooseright div:first-child>span');
        //获取每个商品栏位
        let ProductField = document.querySelectorAll('.carbody_row_product');
        //获取每个商品的数量
        let productNm = document.querySelectorAll('.carbody_row_product>div:nth-child(4) .number');
        //点击一个复选框时，checked状态不一致，所以用一个参数判断是点击的哪一个全选框
        let Arr_CheckBox = [CheckBox[0].checked,CheckBox[CheckBox.length-1].checked];
        if(Arr_CheckBox[m-1]){
            //结算按钮颜色改变
            PayButton_1.style.cssText = 'background-color:rgb(255,68,0)';
            PayButton_2.style.cssText = 'background-color:rgb(255,68,0)';
            ProductTotal.innerHTML = CheckBox.length-2;
            let TotalMoney = 0.00;
            for(let m=0,len=CheckBox.length;m<len;m++){
                //选中所有复选框
                CheckBox[m].checked = 'checked';
                //计算中金额并改变商品栏位背景色
                if(m+2<len){
                    TotalMoney += Number(SingelMoney[m].innerHTML * productNm[m].innerHTML);
                    ProductField[m].style.cssText = 'background-color:rgb(255,248,225)';
                }
            }
            //结算金额赋值
            PayMoney_1.innerHTML = '￥'+TotalMoney.toFixed(2);
            PayMoney_2.innerHTML = '￥'+TotalMoney.toFixed(2);
        }else{
            //总金额清零,结算按钮颜色改变
            PayMoney_1.innerHTML = '0.00';
            PayMoney_2.innerHTML = '0.00';
            PayButton_1.style.cssText = 'background-color:rgb(176,176,176)';
            PayButton_2.style.cssText = 'background-color:rgb(176,176,176)';
            ProductTotal.innerHTML = 0;
            for(let m=0,len=CheckBox.length;m<len;m++){
                //取消所有复选框
                CheckBox[m].checked = '';
                if(m+2<len){
                    //改变商品栏位背景色
                    ProductField[m].style.cssText = 'background-color:rgb(252,252,252)'
                } 
                
            }
        }
    }
    //选择部分商品
    function ChooseSingle(){
        //获取每个商品栏位
        let ProductField = document.querySelectorAll('.carbody_row_product');
        //获取所有的复选框
        let CheckBoxd = document.querySelectorAll('.carbody_row_product input');
        //获取每个产品的单价
        let SingelMoney = document.querySelectorAll('.carbody_row_product div:nth-child(3) p:last-child span');
        //获取商品总数span
        let ProductTotal = document.querySelector('.carbody_row_footchooseright div:first-child>span');
        //获取结算金额
        let PayMoney_1 = document.querySelector('.carbody_row_pay_right span:nth-child(2)');
        let PayMoney_2 = document.querySelector('.carbody_row_footchooseright div:nth-child(2) span');
        //获取两个结算按钮
        let PayButton_1 = document.querySelector('.carbody_row_pay_right button');
        let PayButton_2 = document.querySelector('.carbody_row_footchooseright div:last-child');
        let Total = 0.00;
        let ProductNumber = 0;
        //获取每个商品的数量
        let productNm = document.querySelectorAll('.carbody_row_product>div:nth-child(4) .number');
        for(let m = 0 ,len = CheckBoxd.length;m<len;m++){
            if(CheckBoxd[m].checked){
                Total += Number(SingelMoney[m].innerHTML* productNm[m].innerHTML);
                ProductNumber++;
                ProductField[m].style.cssText = 'background-color:rgb(255,248,225)'
            }else{
                ProductField[m].style.cssText = 'background-color:rgb(252,252,252)'
            }
        }
        //结算金额赋值
        if(Total.toFixed(2) == 0){
            PayMoney_1.innerHTML = 0.0.toFixed(2);
            PayMoney_2.innerHTML = 0.0.toFixed(2);
        }else{
            PayMoney_1.innerHTML = '￥'+Total.toFixed(2);
            PayMoney_2.innerHTML = '￥'+Total.toFixed(2);
        }
        //结算按钮颜色改变
        PayButton_1.style.cssText = 'background-color:rgb(255,68,0)';
        PayButton_2.style.cssText = 'background-color:rgb(255,68,0)';
        //商品数赋值
        ProductTotal.innerHTML = ProductNumber;
    }
    //删除购物车商品
    function Delete(e){
        //获取父元素
        let DeleteNode = document.querySelector('.carbody_row_details');
        //获取点击元素所在的Div
        let DeleteTarget = e.parentElement.parentElement;
        DeleteNode.removeChild(DeleteTarget);
    }
    //加减商品
    function addMinus(e){
        //获取结算金额
        let PayMoney_1 = document.querySelector('.carbody_row_pay_right span:nth-child(2)');
        let PayMoney_2 = document.querySelector('.carbody_row_footchooseright div:nth-child(2) span');
        //获取该产品的单价
        let thePrice = e.parentElement.nextElementSibling.innerHTML.split('￥')[1];
        if(e.innerHTML === '-'){
            let productNumber = e.nextElementSibling;
            if(productNumber.innerHTML > 1){
                productNumber.innerHTML--;
                if(PayMoney_1.innerHTML.slice(1) != 0.00){
                    PayMoney_1.innerHTML='￥'+(parseInt(PayMoney_1.innerHTML.slice(1)) - parseInt(thePrice)).toFixed(2);
                    PayMoney_2.innerHTML = PayMoney_1.innerHTML;
                }
                e.nextElementSibling.nextElementSibling.style.cssText = 'background-color:rgb(252,252,252);color:rgb(46,46,46)';
            }else{
                e.style.cssText = 'background-color:rgb(237,237,237);color:rgb(204,204,204)';
            }
        }else if(e.innerHTML === '+'){
            let productNumber = e.previousElementSibling;
            if(productNumber.innerHTML > 4){
                e.style.cssText = 'background-color:rgb(237,237,237);color:rgb(204,204,204)';
            }else{
                productNumber.innerHTML++;
                if(PayMoney_1.innerHTML.slice(1) != 0.00){
                    PayMoney_1.innerHTML='￥'+(parseInt(thePrice)+parseInt(PayMoney_1.innerHTML.slice(1))).toFixed(2);
                    PayMoney_2.innerHTML = PayMoney_1.innerHTML;
                }
                e.previousElementSibling.previousElementSibling.style.cssText = 'background-color:rgb(252,252,252);color:rgb(46,46,46)';
            }

        }
    }