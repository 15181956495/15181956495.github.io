window.onload=function(){

    waterfall('main','pin');

    var dataInt={'data':[
                         {'src':'1.jpg'},
                         {'src':'2.jpg'},
                         {'src':'3.jpg'},
                         {'src':'4.jpg'},
                         {'src':'5.jpg'},
                         {'src':'6.jpg'},
                         {'src':'7.jpg'},
                         {'src':'8.jpg'},
                         {'src':'9.jpg'},
                         {'src':'10.jpg'},
                         {'src':'21.jpg'},
                         {'src':'22.jpg'},
                         {'src':'23.jpg'},
                         {'src':'24.jpg'},
                         {'src':'25.jpg'},
                         {'src':'26.jpg'},
                         {'src':'27.jpg'},
                         {'src':'28.jpg'},
                         {'src':'29.jpg'},
                         {'src':'30.jpg'},
                         {'src':'11.jpg'},
                         {'src':'12.jpg'},
                         {'src':'13.jpg'},
                         {'src':'14.jpg'},
                         {'src':'80.jpeg'},
                         {'src':'81.jpeg'},
                         {'src':'82.jpeg'},
                         {'src':'83.jpg'},
                         {'src':'15.jpg'},
                         {'src':'16.jpg'},
                         {'src':'17.jpg'},
                         {'src':'18.jpg'},
                         {'src':'19.jpg'},
                         {'src':'20.jpg'},
                         {'src':'16.jpg'},
                         {'src':'40.jpg'},
                        	                                                        	




]};  

    window.onscroll=function(){
        if(checkscrollside()){
            var oParent = document.getElementById('main');
            for(var i=0;i<dataInt.data.length;i++){
                var oPin=document.createElement('div'); 
                oPin.className='pin';                  
                oParent.appendChild(oPin);            
                var oBox=document.createElement('div');
                oBox.className='box';
                oPin.appendChild(oBox);
                var oImg=document.createElement('img');
                oImg.src="./pubuliu/"+dataInt.data[i].src;
                oBox.appendChild(oImg);
            }
            waterfall('main','pin');
        };
    }
}
function waterfall(parent,pin){
    var oParent=document.getElementById(parent);
    var aPin=getClassObj(oParent,pin);
    var iPinW=aPin[0].offsetWidth;
    var num=Math.floor(document.documentElement.clientWidth/iPinW);
    oParent.style.cssText='width:'+iPinW*num+'px;margin:0 auto;';

    var pinHArr=[];
    for(var i=0;i<aPin.length;i++){
        var pinH=aPin[i].offsetHeight;
        if(i<num){
            pinHArr[i]=pinH; 
        }else{
            var minH=Math.min.apply(null,pinHArr);
            var minHIndex=getminHIndex(pinHArr,minH);
            aPin[i].style.position='absolute';
            aPin[i].style.top=minH+'px';
            aPin[i].style.left=aPin[minHIndex].offsetLeft+'px';
            
            pinHArr[minHIndex]+=aPin[i].offsetHeight;
        }
    }
}

function getClassObj(parent,className){
    var obj=parent.getElementsByTagName('*');
    var pinS=[];
    for (var i=0;i<obj.length;i++) {
        if (obj[i].className==className){
            pinS.push(obj[i]);
        }
    };
    return pinS;
}

function getminHIndex(arr,minH){
    for(var i in arr){
        if(arr[i]==minH){
            return i;
        }
    }
}


function checkscrollside(){
    var oParent=document.getElementById('main');
    var aPin=getClassObj(oParent,'pin');
    var lastPinH=aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var documentH=document.documentElement.clientHeight;
    return (lastPinH<scrollTop+documentH)?true:false;
}