// 'js/mian.js'

// HAIR

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

window.onload = function() 
    {

        // HEAD
        let x = 6; // number of heads 
        let avatarHead = new Image();
            //let avatarHeadStyle = randomColor({hue: 'red', count: 18});
        let avatarHeadNum= function next(){
            if(i >= headImage.length-1) i = -1;
            i++;
            return setImg();			 
        }
        let avatarHeadName = "assets/head/head" + avatarHeadNum + ".png"; 
        avatarHead.src=avatarHeadName;

        // HAIR
        let v = 8; //number of haircups
        let avatarHair = new Image();
        let avatarHairNum = function next(){
            if(i >= hairImage.length-1) i = -1;
            i++;
            return setImg();			 
        }
        let avatarHairName = "assets/hair/hair" + avatarHairNum + ".png";
        avatarHair.src=avatarHairName;

        // HEAD LOADED
        avatarHead.onload=function()
        {
            buildAvatar();
        }

        //HAIR LOADED
        avatarHair.onload=function()
        {
            buildAvatar();
        }


        // BUILDING THE AVATAR - THE LAST AIRBENDER
        function buildAvatar()
        {
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            canvas.width=800;
            canvas.height=800;

            // DRAW HEAD
            ctx.drawImage(avatarHead, ((800-avatarHead.width)/2),125); // center elements horizontally - x axis, then y axis
            //ctx.avatarHeadStyle=newColor;

            // DRAW HAIR
            ctx.drawImage(avatarHair, ((800-avatarHair.width)/2),25);
            
        }
    }