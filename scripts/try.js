let slider_img = document.querySelector('.slider-img');
let hairImage = ['hair1.png','hair2.png','hair3.png','hair4.png','hair5.png','hair6.png','hair7.png','hair8.png'];
let i = 0;

function prev(){
	if(i <= 0) i = hairImage.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= hairImage.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "assets/hair/"+hairImage[i]);
	
}

hairImage.onload=function()
{
    buildAvatar();
}

function buildAvatar(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width=800;
    canvas.height=800;
}

ctx.drawImage(hairImage,((800-hairImage.width)/2, 300));