   /*函数 ：为了完成某个功能的代码块，可以理解就是一个功能 */
        /*fn这个函数是为完成 js动态计算不同屏幕html的font-size*/
        function fn(){
            /*desw存着设计稿的宽是750*/
            var desW = 750;
            /*js获取屏幕的宽存在了winW*/
            var winW = document.documentElement.clientWidth || document.body.clientWidth;
            /*如果屏幕大于设置稿的宽，我让屏幕的宽等于设计稿的宽*/
            if(winW > desW){
                winW = desW;
            }
            /*计算html的font-size*/  
            var rate = winW / desW * 100;

            /*给html设置font-size*/
            document.documentElement.style.fontSize = rate + "px";
        }

        fn();
        //屏幕只要切换尺寸，能自动执行fn这个函数 
        window.addEventListener('resize',fn);
  