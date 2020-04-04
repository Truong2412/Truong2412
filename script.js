document.addEventListener("DOMContentLoaded",function(){
	// Hàm cho nút Next prev
	var btnNext=document.querySelector('.btn-next');
	var btnPrev=document.querySelector('.btn-prev');
	var slides=document.querySelectorAll('.slides ul li');
	var btns=document.querySelectorAll('ul.btn-bot li');
	var slidelength=slides.length;var number=0;
	//hàm autoslide
	var autoslide=setInterval(function(){
			var status='fixed',statusAll=0;
			if(status=='move'){return false;}status='move';
			slideNow=slides[number];
			btnNow=btns[number];
			if(number<(slidelength-1)) {
				number++;
			}else {number=0;}
			slideNext=slides[number];
			btnNext=btns[number];
			btnNow.classList.remove('btn-active');
			btnNext.classList.add('btn-active');
			slideNow.classList.add('nextout');
			slideNext.classList.add('nextin');
			slideNow.addEventListener('webkitAnimationEnd',function(){
				slideNow.classList.remove('slide-active');
				slideNow.classList.remove('nextout');
				statusAll++;
				if(statusAll=2){status='fixed';}
			})
			slideNext.addEventListener('webkitAnimationEnd',function(){
				slideNext.classList.add('slide-active');
				slideNext.classList.remove('nextin');
				statusAll++;
				if(statusAll=2){status='fixed';}
			})
	},3000);
			// tạo cho nút dưới
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click',function(){
			clearInterval(autoslide);
			for (var i = 0; i < btns.length; i++) {
				btns[i].classList.remove('btn-active');
			}
			this.classList.add('btn-active');
			var btnactive=this,btnnumber=0;
			for(btnnumber=0;btnactive=btnactive.previousElementSibling;btnnumber++){}
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('slide-active');
			}
				slides[btnnumber].classList.add('slide-active');
		})
	}
	btnNext.addEventListener('click',function(){
		clearInterval(autoslide);
		var status='fixed',statusAll=0;
		if(status=='move'){return false;}status='move';
		slideNow=slides[number];
		btnNow=btns[number];
		if(number<(slidelength-1)) {
			number++;
		}else {number=0;}
		slideNext=slides[number];
		btnNext=btns[number];
		btnNow.classList.remove('btn-active');
		btnNext.classList.add('btn-active');
		slideNow.classList.add('nextout');
		slideNext.classList.add('nextin');
		slideNow.addEventListener('webkitAnimationEnd',function(){
			slideNow.classList.remove('slide-active');
			slideNow.classList.remove('nextout');
			statusAll++;
			if(statusAll=2){status='fixed';}
		})
		slideNext.addEventListener('webkitAnimationEnd',function(){
			slideNext.classList.add('slide-active');
			slideNext.classList.remove('nextin');
			statusAll++;
			if(statusAll=2){status='fixed';}
		})
	});
	//hàm cho nút prev
		btnPrev.addEventListener('click',function(){
		clearInterval(autoslide);
		var status='fixed',statusAll=0;
		if(status=='move'){return false;}status='move';
		slideNow=slides[number];
		btnNow=btns[number];
		if(number>0) {
			number--;
		}else {number=(slidelength-1);}
		slidePrev=slides[number];
		btnPrev=btns[number];
		btnNow.classList.remove('btn-active');
		btnPrev.classList.add('btn-active');
		slideNow.classList.add('prevout');
		slidePrev.classList.add('previn');
		slideNow.addEventListener('webkitAnimationEnd',function(){
			slideNow.classList.remove('slide-active');
			slideNow.classList.remove('prevout');
			statusAll++;
			if(statusAll=2){status='fixed';}
		})
		slidePrev.addEventListener('webkitAnimationEnd',function(){
			slidePrev.classList.add('slide-active');
			slidePrev.classList.remove('previn');
			statusAll++;
			if(statusAll=2){status='fixed';}
		})
	});
	var csNext=document.querySelector('.customer-next'),
		csPrev=document.querySelector('.customer-prev'),
		csslides=document.querySelectorAll('.customer-slides ul li'),
		csslidelength=csslides.length;
	var csnumber=0;
	csNext.addEventListener('click',function(){
		var csslideNow=csslides[csnumber];
		var csstatus='fixed',csstatusAll=0;
		if(csstatus=='move'){return false;}csstatus='move';
		if(csnumber<(csslidelength-1)){csnumber++;}else{csnumber=0;}
		var csslideNext=csslides[csnumber];
		csslideNow.classList.add('csout');
		csslideNext.classList.add('csin');
		csslideNow.addEventListener('webkitAnimationEnd',function(){
			csslideNow.classList.remove('customer-active');
			csslideNow.classList.remove('csout');
			csstatusAll++;if(csstatusAll=2){csstatus='fixed';}
		})
		csslideNext.addEventListener('webkitAnimationEnd',function(){
			csslideNext.classList.add('customer-active');
			csslideNext.classList.remove('csin');
			csstatusAll++;if(csstatusAll=2){csstatus='fixed';}
		})
	});
	csPrev.addEventListener('click',function(){
		var csslideNow=csslides[csnumber];
		var csstatus='fixed',csstatusAll=0;
		if(csstatus=='move'){return false;}csstatus='move';
		if(csnumber>0){csnumber--;}else{csnumber=(csslidelength-1);}
		console.log(csnumber);
		var csslidePrev=csslides[csnumber];
		csslideNow.classList.add('csprevout');
		csslidePrev.classList.add('csprevin');
		csslideNow.addEventListener('webkitAnimationEnd',function(){
			csslideNow.classList.remove('customer-active');
			csslideNow.classList.remove('csprevout');
			csstatusAll++;if(csstatusAll=2){csstatus='fixed';}
		})
		csslidePrev.addEventListener('webkitAnimationEnd',function(){
			csslidePrev.classList.add('customer-active');
			csslidePrev.classList.remove('csprevin');
			csstatusAll++;if(csstatusAll=2){csstatus='fixed';}
		})
	})			
})
$(document).ready(function() {
	$(window).scroll(function(event) {
		var menutop=$(document).scrollTop();
		if(menutop>=900){
			$('.menu').addClass('menu-fixed');
		}
		else {
			$('.menu').removeClass('menu-fixed');
		}
	});
});	