window.onload=function(){
		
	 
	//banner选项卡
	var bannerimgs=getClass("banner-img");
		var scrollbarzis=getClass("scrollbarzi");
		var bannerbgs=getClass("bannerbg")[0];
		var bannerGuanggaoyu=getClass("bannerGuanggaoyu");
		color=["#E9E9E9","#E9E9E9","#E62601","#FF4200","#E9E9E9"]
		var timeOut;
		for (var i = 0; i < scrollbarzis.length; i++) {
			scrollbarzis[i].index=i;
			scrollbarzis[i].onmouseover=function(){
			var that=this;
			clearTimeout(timeOut)
			timeOut=setTimeout(function(){
				for (var j = 0; j < bannerimgs.length; j++) {
					bannerimgs[j].style.display="none";
					scrollbarzis[j].style.background="#ccc"
				}
				bannerimgs[that.index].style.display="block"
				that.style.background="#fff";
				bannerbgs.style.background=color[that.index];
				clearInterval(t);},300)
			}
			scrollbarzis[i].onmouseout=function(){
				num=this.index
			}
			bannerimgs[i].onmouseover=function(){
				clearInterval(t)}
				bannerimgs[i].onmouseout=function(){
				t=setInterval(lunbo,3000)}
		}
		//banner轮播图
		var num=0;
		var t=setInterval(lunbo,3000)
		function lunbo(){
			num++;
			if(num==bannerimgs.length){
				num=0;
			}
			for (var i = 0; i < bannerimgs.length; i++) {
				bannerimgs[i].style.display="none";
				scrollbarzis[i].style.background="#ccc";
				};
				bannerimgs[num].style.display="block";
				scrollbarzis[num].style.background="#fff";
				bannerbgs.style.background=color[num];
			}

	 //侧条
	 var ceimgbox=getClass("ceimgbox");
	 var ceimgboxzi=getClass("ceimgboxzi")[0];
	 var cetiaotanchu=getClass("cetiaotanchu");
	 var cetiaotanchuzi=getClass("cetiaotanchuzi")[0];
	 var carlogo=getClass("carlogo")[0];
	 var sidecar=getClass("sidecar")[0];
	 var timeOut;
	 for (var i = 0; i < ceimgbox.length; i++) {
	 	ceimgbox[i].index=i;
	 	ceimgbox[i].onmouseover=function(){
	 		var that=this;
	 		ceimgbox[that.index].style.background="#c40000"
	 		clearTimeout(timeOut);
	 		timeOut=setTimeout(function(){
	 		cetiaotanchu[that.index].style.display="block"	
	 		animate(cetiaotanchu[that.index],{opacity:1,marginRight:0},200,Tween.Quad.easeIn);
	 	},300)
	 	}
	 	ceimgbox[i].onmouseout=function(){
	 		clearTimeout(timeOut);
	 		ceimgbox[this.index].style.background="#000";
	 		animate(cetiaotanchu[this.index],{opacity:0.8,marginRight:10},200,Tween.Linear,function(){
	 			this.style.display="none";
	 		});
	 	}
	 	ceimgboxzi.onmouseover=function(){
	 		cetiaotanchuzi.style.display="block"
	 		animate(cetiaotanchuzi,{marginRight:0},300,Tween.Linear);
	 	}
	 	ceimgboxzi.onmouseout=function(){
	 		cetiaotanchuzi.style.display="none";
	 	}
	 	sidecar.onmouseover=function(){
	 		sidecar.style.background="#c40000";
	 		carlogo.style.backgroundImage="url(imgs/gudingcetiao/car2.png)"
	 	}
	 	sidecar.onmouseout=function(){
	 		sidecar.style.background="#000"
	 		carlogo.style.backgroundImage="url(imgs/gudingcetiao/car.png)"
	 	}
	 };

	 //search框
	var input=document.getElementById("topsearchInfo")
	input.onfocus=function () {
		if (input.value=="糖果零食过年必备") {
			input.value=""
		}
	}
	input.onblur=function () {
		if (input.value=="") {
			input.value="糖果零食过年必备"
		};
	}
	
	var input2=document.getElementById("searchInfo")
	input2.onfocus=function () {
		if (input2.value=="糖果零食过年必备") {
			input2.value=""
		}
	}
	input2.onblur=function () {
		if (input2.value=="") {
			input2.value="糖果零食过年必备"
		};
	}

	//返回顶部
	var fanhuidingbu1=$(".fanhuidingbu1")[0]
	fanhuidingbu1.onclick=function(){
		var obj=document.documentElement.scrollTop?document.documentElement:document.body
		animate(obj,{scrollTop:0})
	}

	//顶部条
	var topbarshowbox=$(".topbarshowbox")[0]
	var fanhuidingbu=$(".fanhuidingbu")[0]
	var flag1=true,flag2=true;
	var obj=document.documentElement.scrollTop?document.documentElement:document.body
	var imgs=$("img")
	if(obj.scrollTop>688){
		topbarshowbox.style.top="0"
		}else{
		topbarshowbox.style.top="-50px"
		}	
	for (var i = 0; i < imgs.length; i++) {
			if(obj.scrollTop<document.documentElement.clientHeight){
				imgs[i].src=imgs[i].getAttribute("data-src")
			}
		};
	window.onscroll=function(){
		 obj=document.documentElement.scrollTop?document.documentElement:document.body
		/*animate(obj,{scrollTop:0},1000)*/
		/*if(obj.scrollTop!=0){
			fanhuidingbu.style.display="block"
		}*/
		if(obj.scrollTop>688){
			if(flag1){
				flag1=false;
			animate(topbarshowbox,{top:0},function(){
				flag1=true;
				flag2=true;
			})
		}
		}else{
			if(flag2){
				flag2=false;
			animate(topbarshowbox,{top:-50},function(){
				flag1=true;
				flag2=true;
			})
		  }
		}
		for (var i = 0; i < imgs.length; i++) {
			if(obj.scrollTop>imgs[i].offsetTop-document.documentElement.clientHeight){
				imgs[i].src=imgs[i].getAttribute("data-src")
			}
		};
	}
	//sidebar
	var sidenav=$(".sidenav")[0]
	var sidenavul=getFirst(sidenav)
	var sidenavli=getChildren(sidenavul)
	var sidenavimg=$(".sidenavimg");
	var sidenavtanchu=$(".sidenavtanchu")
	for (var i = 0; i < sidenavli.length; i++) {
		sidenavli[i].index=i
		sidenavli[i].onmouseover=function(){
			for (var j = 0; j < sidenavli.length; j++) {
			sidenavimg[j].style.display="none";
			sidenavtanchu[j].style.display="none"
			};
			sidenavimg[this.index].style.display="block";
			sidenavtanchu[this.index].style.display="block";
			animate(sidenavtanchu[this.index],{left:190})
		};	
		sidenavli[i].onmouseout=function(){
			sidenavimg[this.index].style.display="none";
			sidenavtanchu[this.index].style.display="none";
		}
	}

}