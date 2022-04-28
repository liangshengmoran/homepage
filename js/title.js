        element = document.getElementById('favicon');
        var title;
        window.onblur=function(){
            title=document.title;
            document.title="快回来啊！！！";
            element.href = "img/favicon2.gif";
            
        };
        window.onfocus=function(){
            if(title){
                document.title="欢迎回来！！！";
                setTimeout('document.title="゛凉笙墨染ぅ."', 2000);
                element.href = "img/favicon.gif";
                setTimeout('element.href = "https://q.qlogo.cn/g?b=qq&nk=2359824360&s=100"', 2000);
            }
        }