// JavaScript Document

function imageSlice(src,target){
	var that=this;
	this.src=src;
	this.target=target;
	$(this.target).empty();
	$(this.target).html(
	'<div class="imageSlice">'+
    	'<img src="'+this.src+'" class="pic"/>'+
        '<div class="handle handleTL"></div>'+
        '<div class="handle handleTR"></div>'+
        '<div class="handle handleBL"></div>'+
        '<div class="handle handleBR"></div>'+
        '<div class="background backgroundT"></div>'+
        '<div class="background backgroundB"></div>'+
        '<div class="background backgroundL"></div>'+
        '<div class="background backgroundR"></div>'+
        '<div class="showFrame"></div>'+
    '</div>'
	);
	$(this.target+" .pic").unbind("load").bind("load",function(){
		that.width=$(this).width();
		that.height=$(this).height();
		that.draw();
		});
	}
imageSlice.prototype.x=0;
imageSlice.prototype.y=0;
imageSlice.prototype.height=0;
imageSlice.prototype.width=0;
imageSlice.prototype.src="http://";
imageSlice.prototype.draw=function(){
	$(this.target+" .handleTL").css({
		top:this.y-10,
		left:this.x-10
		});
	$(this.target+" .handleTR").css({
		top:this.y-10,
		left:this.x+this.width-10
		});
	$(this.target+" .handleBL").css({
		top:this.y+this.height-10,
		left:this.x-10
		});
	$(this.target+" .handleBR").css({
		top:this.y+this.height-10,
		left:this.x+this.width-10
		});
	$(this.target+" .backgroundT").css({
		top:0,
		height:this.y,
		right:0,
		left:0
		});
	$(this.target+" .backgroundB").css({
		top:this.y+this.height,
		bottom:0,
		right:0,
		left:0
		});
	$(this.target+" .backgroundL").css({
		top:this.y,
		bottom:this.y+this.height,
		width:this.x,
		left:0
		});
	$(this.target+" .backgroundR").css({
		top:this.y,
		bottom:this.y+this.height,
		right:0,
		left:this.x+this.width
		});
	$(this.target+" .showFrame").css({
		top:this.y,
		left:this.x,
		height:this.height,
		width:this.width
		})
	}