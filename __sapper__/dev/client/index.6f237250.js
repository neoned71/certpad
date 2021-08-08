import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as src_url_equal, m as insert_hydration_dev, n as append_hydration_dev, o as noop } from './client.5e6bee42.js';
import { s as successkid } from './successkid.d53948a6.js';

/* src/routes/index.svelte generated by Svelte v3.40.2 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let figure;
	let img;
	let img_src_value;
	let t3;
	let figcaption;
	let t4;
	let t5;
	let p;
	let strong;
	let t6;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Great success!");
			t2 = space();
			figure = element("figure");
			img = element("img");
			t3 = space();
			figcaption = element("figcaption");
			t4 = text("Have fun with Sapper!");
			t5 = space();
			p = element("p");
			strong = element("strong");
			t6 = text("Try editing this file (src/routes/index.svelte) to test live reloading.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-oh6yg0\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Great success!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			figure = claim_element(nodes, "FIGURE", { class: true });
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { alt: true, src: true, class: true });
			t3 = claim_space(figure_nodes);
			figcaption = claim_element(figure_nodes, "FIGCAPTION", {});
			var figcaption_nodes = children(figcaption);
			t4 = claim_text(figcaption_nodes, "Have fun with Sapper!");
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			strong = claim_element(p_nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t6 = claim_text(strong_nodes, "Try editing this file (src/routes/index.svelte) to test live reloading.");
			strong_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-1kk9opm");
			add_location(h1, file, 58, 0, 781);
			attr_dev(img, "alt", "Success Kid");
			if (!src_url_equal(img.src, img_src_value = successkid)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1kk9opm");
			add_location(img, file, 61, 1, 816);
			add_location(figcaption, file, 62, 1, 860);
			attr_dev(figure, "class", "svelte-1kk9opm");
			add_location(figure, file, 60, 0, 806);
			add_location(strong, file, 65, 3, 921);
			attr_dev(p, "class", "svelte-1kk9opm");
			add_location(p, file, 65, 0, 918);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t1);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, figure, anchor);
			append_hydration_dev(figure, img);
			append_hydration_dev(figure, t3);
			append_hydration_dev(figure, figcaption);
			append_hydration_dev(figcaption, t4);
			insert_hydration_dev(target, t5, anchor);
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, strong);
			append_hydration_dev(strong, t6);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(figure);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(p);
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

const preload = async function (page, session) {
	var { user } = session;

	// user=JSON.parse(user);
	if (user) {
		this.redirect(301, 'dashboard');
	} else {
		this.redirect(301, 'login');
	}

	return { user };
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Routes', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ preload, successkid });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmYyMzcyNTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXG5leHBvcnQgY29uc3QgcHJlbG9hZCA9IGFzeW5jIGZ1bmN0aW9uKCBwYWdlLCBzZXNzaW9uKSB7XG5cdFx0dmFyIHsgdXNlciB9ID0gc2Vzc2lvbjtcblx0XHQvLyB1c2VyPUpTT04ucGFyc2UodXNlcik7XG5cdFx0aWYodXNlcilcblx0XHR7XG5cdFx0XHR0aGlzLnJlZGlyZWN0KDMwMSwgJ2Rhc2hib2FyZCcpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0dGhpcy5yZWRpcmVjdCgzMDEsJ2xvZ2luJyk7XG5cdFx0fVxuXHRcdHJldHVybiB7IHVzZXIgfTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBzdWNjZXNza2lkIGZyb20gJ2ltYWdlcy9zdWNjZXNza2lkLmpwZyc7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRoMSwgZmlndXJlLCBwIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHRoMSB7XG5cdFx0Zm9udC1zaXplOiAyLjhlbTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuXG5cdGZpZ3VyZSB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDFlbSBhdXRvO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TYXBwZXIgcHJvamVjdCB0ZW1wbGF0ZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+R3JlYXQgc3VjY2VzcyE8L2gxPlxuXG48ZmlndXJlPlxuXHQ8aW1nIGFsdD1cIlN1Y2Nlc3MgS2lkXCIgc3JjPVwie3N1Y2Nlc3NraWR9XCI+XG5cdDxmaWdjYXB0aW9uPkhhdmUgZnVuIHdpdGggU2FwcGVyITwvZmlnY2FwdGlvbj5cbjwvZmlndXJlPlxuXG48cD48c3Ryb25nPlRyeSBlZGl0aW5nIHRoaXMgZmlsZSAoc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUpIHRvIHRlc3QgbGl2ZSByZWxvYWRpbmcuPC9zdHJvbmc+PC9wPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBMERJLGdCQUFjOzs7Ozs7YUFJTCx1QkFBcUI7Ozs7YUFHdkIseUVBQXVFOzs7Ozs7Ozs7NkJBUDlFLGdCQUFjOzs7Ozs7Ozs7cUNBSUwsdUJBQXFCOzs7Ozs7OztpQ0FHdkIseUVBQXVFOzs7Ozs7Ozs7OytDQUpwRCxVQUFVOzs7Ozs7Ozs7Ozs7R0FIeEMsb0JBQXVCOzs7R0FFdkIsb0JBR1M7R0FGUixvQkFBMEM7O0dBQzFDLG9CQUE4Qzs7O0dBRy9DLG9CQUErRjtHQUE1RixvQkFBd0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQS9EOUUsT0FBTyxtQkFBbUIsSUFBSSxFQUFFLE9BQU87T0FDNUMsSUFBSSxLQUFLLE9BQU87OztLQUVuQixJQUFJO0VBRU4sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsV0FBVzs7RUFHOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsT0FBTzs7O1VBRWpCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
