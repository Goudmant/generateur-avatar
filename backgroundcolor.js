///////////////////TEST1
//    // Add function to pick random rgb values
//function getRandomRGB() {
//    var r = Math.floor(Math.random() * 255);
//    var g = Math.floor(Math.random() * 255);
//    var b = Math.floor(Math.random() * 255);
//    return "rgb(" + r + "," + g + "," + b + ")";
//}
//    
//    // You may want to add this other function to simplify your code, too
//function addFilledRect(arg1, arg2, arg3, arg4) {
//    // Inside this function, we're using the ctx variable from outside
//    ctx.fillStyle = getRandomRGB();       // Call the function to get a random rgv color
//    ctx.fillRect(arg1, arg2, arg3, arg4); // Create the filled rectangle
//
//
//}
//     
//var canvas = document.getElementById("canvas");
//var ctx = canvas.getContext("2d");
//
//    // Then, you can call the above function multiple times // POSITION X, Y ET DIMENSION DU CARRE DE COULEUR 
//addFilledRect(0, 0, 800, 800);

///////////////////TEST2
//function randomColor(){
//    var color = "#";
//    var randomHex = "123456ABCDEF";  
//    for(var i = 0; i<6;i++){
//        color+= randomHex[Math.floor(Math.random()*40)]
//    }
//
//    return color;
//}
//
//var mytimer ;
//
//function setColor(){
//    
//    $("canvas").css("background-color", randomColor);
//}
//
//var mytimer = setInterval(setColor, .1);

///////////////////TEST3

/* App.svelte generated by Svelte v3.34.0 */
import {
	SvelteComponentDev,
	add_location,
	attr_dev,
	binding_callbacks,
	detach_dev,
	dispatch_dev,
	element,
	init,
	insert_dev,
	noop,
	safe_not_equal,
	validate_slots
} from "svelte/internal";

import { onMount } from "svelte";
const file = "App.svelte";

function create_fragment(ctx) {
	let canvas_1;
	let canvas_1_width_value;
	let canvas_1_height_value;

	const block = {
		c: function create() {
			canvas_1 = element("canvas");
			attr_dev(canvas_1, "width", canvas_1_width_value = 32);
			attr_dev(canvas_1, "height", canvas_1_height_value = 32);
			attr_dev(canvas_1, "class", "svelte-7wnteg");
			add_location(canvas_1, file, 50, 0, 1074);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, canvas_1, anchor);
			/*canvas_1_binding*/ ctx[1](canvas_1);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(canvas_1);
			/*canvas_1_binding*/ ctx[1](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("App", slots, []);
	let canvas;

	onMount(() => {
		const ctx = canvas.getContext("2d");
		let frame;

		(function loop() {
			frame = requestAnimationFrame(loop);
			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

			for (let p = 0; p < imageData.data.length; p += 4) {
				const i = p / 4;
				const x = i % canvas.width;
				const y = i / canvas.height >>> 0;
				const t = window.performance.now();
				const r = 64 + 128 * x / canvas.width + 64 * Math.sin(t / 1000);
				const g = 64 + 128 * y / canvas.height + 64 * Math.cos(t / 1400);
				const b = 128;
				imageData.data[p + 0] = r;
				imageData.data[p + 1] = g;
				imageData.data[p + 2] = b;
				imageData.data[p + 3] = 255;
			}

			ctx.putImageData(imageData, 0, 0);
		})();

		return () => {
			cancelAnimationFrame(frame);
		};
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
	});

	function canvas_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			canvas = $$value;
			$$invalidate(0, canvas);
		});
	}

	$$self.$capture_state = () => ({ onMount, canvas });

	$$self.$inject_state = $$props => {
		if ("canvas" in $$props) $$invalidate(0, canvas = $$props.canvas);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [canvas, canvas_1_binding];
}

class App extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "App",
			options,
			id: create_fragment.name
		});
	}
}

