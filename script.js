window.onload = function() 
    {

        // HEAD
        let x = 7; // number of heads 
        let avatarHead = new Image();
        let avatarHeadNum= Math.floor(Math.random()*x)+1;
        let avatarHeadName = "assets/head/head" + avatarHeadNum + ".png";
        avatarHead.src=avatarHeadName;

        // EYES
        let y = 27; // number of pair of eyes 
        let avatarEyes = new Image();
        let avatarEyesNum= Math.floor(Math.random()*y)+1;
        let avatarEyesName = "assets/eyes/eyes" + avatarEyesNum + ".png";
        avatarEyes.src=avatarEyesName;

        // MOUTH
        let z = 32; // number of mouths
        let avatarMouth = new Image();
        let avatarMouthNum= Math.floor(Math.random()*z)+1;
        let avatarMouthName = "assets/mouth/mouth" + avatarMouthNum + ".png";
        avatarMouth.src=avatarMouthName; 
        
        // HAIR
        let v = 8; //number of haircups
        let avatarHair = new Image();
        let avatarHairNum= Math.floor(Math.random()*v)+1;
        let avatarHairName = "assets/hair/hair" + avatarHairNum + ".png";
        avatarHair.src=avatarHairName;

        // NOSE 
        let w = 7; //number of noses
        let avatarNose = new Image();
        let avatarNoseNum= Math.floor(Math.random()*w)+1;
        let avatarNoseName = "assets/nose/nose" + avatarNoseNum + ".png";
        avatarNose.src=avatarNoseName;

        // BACKHAIR
        let h = 8; //number of Backhair
        let avatarBackhair = new Image();
        let avatarBackhairNum= Math.floor(Math.random()*h)+1;
        let avatarBackhairName = "assets/backhair/backhair" + avatarBackhairNum + ".png";
        avatarBackhair.src=avatarBackhairName;

        // HEAD LOADED
        avatarHead.onload=function()
        {
                buildAvatar();
        }

        // EYES LOADED
        avatarEyes.onload=function()
        {
            buildAvatar(); // if you don't build the robot each time a single element is loaded, you might end up with elements not showing up (server error, image size etc) - light function
        }     
            
        // MOUTH LOADED
        avatarMouth.onload=function()
        {
            buildAvatar();
        }

        //HAIR LOADED
        avatarHair.onload=function()
        {
            buildAvatar();
        }

        //BACKHAIR LOADED
        avatarBackhair.onload=function()
        {
            buildAvatar();
        }

        //NOSE LOADED
        avatarNose.onload=function()
        {
            buildAvatar();
        }

        // BUILDING THE AVATAR - THE LAST AIRBENDER
        function buildAvatar()
        {
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            canvas.width=1000;
            canvas.height=1000;

            // DRAW
            // Here we need to think about the ORDER in which we're going to put the parts of the images : HEAD first then EYES because they come in front : HEAD >>> EYES

            //DRAW BACKHAIR
            ctx.drawImage(avatarBackhair, ((1000-avatarBackhair.width)/2),125);

            // DRAW HEAD
            ctx.drawImage(avatarHead, ((1000-avatarHead.width)/2),125); // center elements horizontally - x axis, then y axis

            // DRAW HAIR
            ctx.drawImage(avatarHair, ((1000-avatarHair.width)/2),50);
            
            // DRAW EYES
            ctx.drawImage(avatarEyes, ((1000-avatarEyes.width)/2),200); 
        
            // DRAW MOUTH
            ctx.drawImage(avatarMouth, ((1000-avatarMouth.width)/2),500);
            
            //DRAW NOSE
            ctx.drawImage(avatarNose, ((1000-avatarNose.width)/2),300);

        }
    }