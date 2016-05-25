// JavaScript Document

function imageSlice(src, target) {
    var that = this;
    this.src = src;
    this.target = target;
    $(this.target).empty();
    $(this.target).html(
    '<div class="imageSlice">' + 
    '<img src="' + this.src + '" class="pic"/>' + 
    '<div class="handle handleTL"></div>' + 
    '<div class="handle handleTR"></div>' + 
    '<div class="handle handleBL"></div>' + 
    '<div class="handle handleBR"></div>' + 
    '<div class="background backgroundT"></div>' + 
    '<div class="background backgroundB"></div>' + 
    '<div class="background backgroundL"></div>' + 
    '<div class="background backgroundR"></div>' + 
    '<div class="showFrame"></div>' + 
    '</div>'
    );
    $(this.target + " .pic").unbind("load").bind("load", function() {
        that.width = $(this).width();
        that.height = $(this).height();
        that.draw();
    });
    $(this.target + " .handle").unbind('touchstart').bind('touchstart', function(ev) {
        ev.preventDefault();
    });
    var oldX = 0;
    var oldY = 0;
    $(this.target + " .handle").unbind("dragstart").bind("dragstart", function(ev) {
        oldX = ev.screenX
        oldY = ev.screenY;
    });
    $(this.target + " .handle.handleTL").unbind("drag").bind("drag", function(ev) {
    	var offsetX=((ev.screenX - oldX) || 0);
    	var offsetY=((ev.screenY - oldY) || 0);
        $(that.target + " .handleTL").css({
            top: that.y - 10 + offsetY,
            left: that.x + -10 + offsetX
        });
        $(that.target + " .backgroundT").css({
            top: 0,
            height: that.y + offsetY,
            right: 0,
            left: 0
        });
        $(that.target + " .backgroundL").css({
            top: that.y + offsetY,
            height: that.height - offsetY,
            width: that.x + offsetX,
            left: 0
        });
        $(that.target + " .handleBL").css({
            top: that.y + that.height - 10,
            left: that.x - 10 + offsetX
        });
        $(that.target + " .handleTR").css({
            top: that.y - 10 + offsetY,
            left: that.x + that.width - 10
        });
    });
    $(this.target + " .handle.handleTR").unbind("drag").bind("drag", function(ev) {
    	var offsetX=((ev.screenX - oldX) || 0);
    	var offsetY=((ev.screenY - oldY) || 0);
        $(that.target + " .handleTL").css({
            top: that.y - 10 + offsetY,
            left: that.x + -10
        });
        $(that.target + " .backgroundT").css({
            top: 0,
            height: that.y + offsetY,
            right: 0,
            left: 0
        });
        $(that.target + " .backgroundR").css({
            top: that.y + offsetY,
        	height: that.height - offsetY,
        	right: 0,
        	left: that.x + that.width+offsetX
        });
        $(that.target + " .handleBR").css({
            top: that.y + that.height - 10,
            left: that.x + that.width - 10 + offsetX
        });
        $(that.target + " .handleTR").css({
            top: that.y - 10 + offsetY,
            left: that.x + that.width - 10 + offsetX
        });
    });
    $(this.target + " .handle.handleBL").unbind("drag").bind("drag", function(ev) {
    	var offsetX=((ev.screenX - oldX) || 0);
    	var offsetY=((ev.screenY - oldY) || 0);
        $(that.target + " .handleTL").css({
            top: that.y - 10,
            left: that.x + -10 + offsetX
        });
        $(that.target + " .backgroundB").css({
            top: that.y + that.height + offsetY,
	        bottom: 0,
	        right: 0,
	        left: 0
        });
        $(that.target + " .backgroundL").css({
            top: that.y,
            height: that.height + offsetY,
            width: that.x + offsetX,
            left: 0
        });
        $(that.target + " .handleBL").css({
            top: that.y + that.height - 10 + offsetY,
            left: that.x - 10 + offsetX
        });
        $(that.target + " .handleBR").css({
            top: that.y + that.height - 10 + offsetY,
        	left: that.x + that.width - 10
        });
    });
    $(this.target + " .handle.handleBR").unbind("drag").bind("drag", function(ev) {
    	var offsetX=((ev.screenX - oldX) || 0);
    	var offsetY=((ev.screenY - oldY) || 0);
        $(that.target + " .handleTR").css({
            top: that.y - 10,
        	left: that.x + that.width - 10 + offsetX
        });
        $(that.target + " .backgroundB").css({
            top: that.y + that.height + offsetY,
	        bottom: 0,
	        right: 0,
	        left: 0
        });
        $(that.target + " .backgroundR").css({
            top: that.y,
        	height: that.height + offsetY,
        	right: 0,
        	left: that.x + that.width+offsetX
        });
        $(that.target + " .handleBL").css({
            top: that.y + that.height - 10 + offsetY,
            left: that.x - 10
        });
        $(that.target + " .handleBR").css({
            top: that.y + that.height - 10 + offsetY,
        	left: that.x + that.width - 10 + offsetX
        });
    });
    $(this.target + " .handle.handleTL").unbind("dragend").bind("dragend", function(ev) {
        that.x += ((ev.screenX - oldX) || 0);
        that.y += ((ev.screenY - oldY) || 0);
        that.width -= ((ev.screenX - oldX) || 0);
        that.height -= ((ev.screenY - oldY) || 0);
        that.draw();
    });
    $(this.target + " .handle.handleTR").unbind("dragend").bind("dragend", function(ev) {
        that.y += ((ev.screenY - oldY) || 0);
        that.width += ((ev.screenX - oldX) || 0);
        that.height -= ((ev.screenY - oldY) || 0);
        that.draw();
    });
    $(this.target + " .handle.handleBL").unbind("dragend").bind("dragend", function(ev) {
    	that.x += ((ev.screenX - oldX) || 0);
        that.width -= ((ev.screenX - oldX) || 0);
        that.height += ((ev.screenY - oldY) || 0);
    	that.draw();
    });
    $(this.target + " .handle.handleBR").unbind("dragend").bind("dragend", function(ev) {
        that.width += ((ev.screenX - oldX) || 0);
        that.height += ((ev.screenY - oldY) || 0);
    	that.draw();
    });
}
imageSlice.prototype.x = 0;
imageSlice.prototype.y = 0;
imageSlice.prototype.height = 0;
imageSlice.prototype.width = 0;
imageSlice.prototype.src = "http://";
imageSlice.prototype.draw = function() {
    $(this.target + " .handleTL").css({
        top: this.y - 10,
        left: this.x - 10
    });
    $(this.target + " .handleTR").css({
        top: this.y - 10,
        left: this.x + this.width - 10
    });
    $(this.target + " .handleBL").css({
        top: this.y + this.height - 10,
        left: this.x - 10
    });
    $(this.target + " .handleBR").css({
        top: this.y + this.height - 10,
        left: this.x + this.width - 10
    });
    $(this.target + " .backgroundT").css({
        top: 0,
        height: this.y,
        right: 0,
        left: 0
    });
    $(this.target + " .backgroundB").css({
        top: this.y + this.height,
        bottom: 0,
        right: 0,
        left: 0
    });
    $(this.target + " .backgroundL").css({
        top: this.y,
        height: this.height,
        width: this.x,
        left: 0
    });
    $(this.target + " .backgroundR").css({
        top: this.y,
        height: this.height,
        right: 0,
        left: this.x + this.width
    });
    $(this.target + " .showFrame").css({
        top: this.y,
        left: this.x,
        height: this.height,
        width: this.width
    })
}
