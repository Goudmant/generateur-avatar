<script>
	import { avatar } from './avatarData.js';
	
let indexAvatar = 0;	
	$: image= avatar[indexAvatar].image;
	$: name= avatar[indexAvatar].name;
const next = () => {
// 	if(indexAvatar = avatar.length-1) {
// 	indexAvatar = 0;
// 	}	else{
	showName = false;
	indexAvatar += 1;
// 	}
}
const prev = () =>{
	showName = false;
	indexAvatar -=1;
}

// const next = () => {
// if (indexAvatar === 0) {
// 	indexAvatar = avatar.length-1;
// } else {
// 		indexAvatar -=1;
// 	}
// }
// const next = () => {
// 	indexAvatar -= 1;
// }
	// let image=;
// let name=;

	
let showName = false;
const toggleShowName = () => showName = !showName;
	
</script>

<div class="flip-card">
  <div class="flip-card-inner" class:flip-it={showName}>
    <div class="flip-card-front">
			<div class="imgavatar">
      	<img src={image} alt="Avatar">
			</div>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>{name}</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
 <div id="btn-content">
	  <button on:click={prev}> prev </button>
	 <button on:click={toggleShowName}>
		 {showName ? "gogogo" : "nonono"}</button>
		 <button on:click={next}>-></button>
	 
	 
</div> 


<style>
	/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 400px;
  height: 400px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
/* .flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
} */
	
.flip-it {
  transform: rotateY(180deg);
}
	
/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
	button{
	background-color:goldenrod;
	border:1px solid red;
	border-radius: 15px;
	}
	.imgavatar{
/* background-color:pink; */
	display:flex;
		justify-content:center;
		align-content:center;
	}

img{
max-width:80%;
padding-top:15px;
	}
	
</style>