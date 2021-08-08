import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, p as globals, r as validate_each_argument, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, c as claim_space, b as detach_dev, G as set_style, j as attr_dev, k as add_location, m as insert_hydration_dev, n as append_hydration_dev, w as set_data_dev, H as empty, q as query_selector_all, o as noop, D as destroy_each } from './client.8a22bf89.js';
import { s as successkid } from './successkid.d53948a6.js';

/* src/routes/templates/index.svelte generated by Svelte v3.40.2 */

const { console: console_1 } = globals;
const file = "src/routes/templates/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (130:0) {#each templates as template}
function create_each_block(ctx) {
	let div;
	let t0;
	let t1_value = /*increment_count*/ ctx[1]() + "";
	let t1;
	let t2;
	let h2;
	let t3_value = /*template*/ ctx[7].name + "";
	let t3;
	let t4;
	let h4;
	let t5;
	let t6_value = /*template*/ ctx[7].description + "";
	let t6;
	let t7;
	let p0;
	let t8;
	let t9_value = /*template*/ ctx[7].color + "";
	let t9;
	let t10;
	let p1;
	let t11_value = /*template*/ ctx[7].timestamp + "";
	let t11;
	let t12;
	let hr;
	let t13;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text("#");
			t1 = text(t1_value);
			t2 = space();
			h2 = element("h2");
			t3 = text(t3_value);
			t4 = space();
			h4 = element("h4");
			t5 = text("Description:");
			t6 = text(t6_value);
			t7 = space();
			p0 = element("p");
			t8 = text("Color:");
			t9 = text(t9_value);
			t10 = space();
			p1 = element("p");
			t11 = text(t11_value);
			t12 = space();
			hr = element("hr");
			t13 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, "#");
			t1 = claim_text(div_nodes, t1_value);
			t2 = claim_space(div_nodes);
			h2 = claim_element(div_nodes, "H2", { style: true, class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, t3_value);
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			h4 = claim_element(div_nodes, "H4", { class: true });
			var h4_nodes = children(h4);
			t5 = claim_text(h4_nodes, "Description:");
			t6 = claim_text(h4_nodes, t6_value);
			h4_nodes.forEach(detach_dev);
			t7 = claim_space(div_nodes);
			p0 = claim_element(div_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t8 = claim_text(p0_nodes, "Color:");
			t9 = claim_text(p0_nodes, t9_value);
			p0_nodes.forEach(detach_dev);
			t10 = claim_space(div_nodes);
			p1 = claim_element(div_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t11 = claim_text(p1_nodes, t11_value);
			p1_nodes.forEach(detach_dev);
			t12 = claim_space(div_nodes);
			hr = claim_element(div_nodes, "HR", { class: true });
			t13 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(h2, "--ct-color", /*template*/ ctx[7].color);
			attr_dev(h2, "class", "svelte-1buzu10");
			add_location(h2, file, 132, 1, 2133);
			attr_dev(h4, "class", "svelte-1buzu10");
			add_location(h4, file, 134, 1, 2197);
			attr_dev(p0, "class", "svelte-1buzu10");
			add_location(p0, file, 136, 1, 2244);
			attr_dev(p1, "class", "svelte-1buzu10");
			add_location(p1, file, 137, 1, 2275);
			attr_dev(hr, "class", "svelte-1buzu10");
			add_location(hr, file, 138, 1, 2304);
			attr_dev(div, "class", "item svelte-1buzu10");
			add_location(div, file, 130, 0, 2091);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, t0);
			append_hydration_dev(div, t1);
			append_hydration_dev(div, t2);
			append_hydration_dev(div, h2);
			append_hydration_dev(h2, t3);
			append_hydration_dev(div, t4);
			append_hydration_dev(div, h4);
			append_hydration_dev(h4, t5);
			append_hydration_dev(h4, t6);
			append_hydration_dev(div, t7);
			append_hydration_dev(div, p0);
			append_hydration_dev(p0, t8);
			append_hydration_dev(p0, t9);
			append_hydration_dev(div, t10);
			append_hydration_dev(div, p1);
			append_hydration_dev(p1, t11);
			append_hydration_dev(div, t12);
			append_hydration_dev(div, hr);
			append_hydration_dev(div, t13);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*templates*/ 1 && t3_value !== (t3_value = /*template*/ ctx[7].name + "")) set_data_dev(t3, t3_value);

			if (dirty & /*templates*/ 1) {
				set_style(h2, "--ct-color", /*template*/ ctx[7].color);
			}

			if (dirty & /*templates*/ 1 && t6_value !== (t6_value = /*template*/ ctx[7].description + "")) set_data_dev(t6, t6_value);
			if (dirty & /*templates*/ 1 && t9_value !== (t9_value = /*template*/ ctx[7].color + "")) set_data_dev(t9, t9_value);
			if (dirty & /*templates*/ 1 && t11_value !== (t11_value = /*template*/ ctx[7].timestamp + "")) set_data_dev(t11, t11_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(130:0) {#each templates as template}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let a;
	let t3;
	let t4;
	let hr;
	let t5;
	let each_1_anchor;
	let each_value = /*templates*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Templates!");
			t2 = space();
			a = element("a");
			t3 = text("Create a new Template");
			t4 = space();
			hr = element("hr");
			t5 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-oh6yg0\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Templates!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			t3 = claim_text(a_nodes, "Create a new Template");
			a_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			hr = claim_element(nodes, "HR", { class: true });
			t5 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-1buzu10");
			add_location(h1, file, 126, 0, 1981);
			attr_dev(a, "href", "/create_template");
			add_location(a, file, 127, 0, 2003);
			attr_dev(hr, "class", "svelte-1buzu10");
			add_location(hr, file, 128, 0, 2056);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t1);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, a, anchor);
			append_hydration_dev(a, t3);
			insert_hydration_dev(target, t4, anchor);
			insert_hydration_dev(target, hr, anchor);
			insert_hydration_dev(target, t5, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_hydration_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*templates, increment_count*/ 3) {
				each_value = /*templates*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(a);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(hr);
			if (detaching) detach_dev(t5);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
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

var templates = {};

const preload = async function (page, session) {
	var { user } = session;

	// user=JSON.parse(user);
	if (!user) {
		return this.redirect(301, 'login');
	}

	const res = await this.fetch('templates.json', { mode: 'cors', method: 'get' });

	if (res.status == 200) {
		var data = await res.json();
		console.log(data);

		if (data.status == "success") {
			templates = data.data;
		} else {
			this.error(data.status, data.message); // console.log(templates);
		}
	} // let data = JSON.parse(text);

	// console.log(1);
	return { user, templates };
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Templates', slots, []);
	let { email } = $$props, { password } = $$props;
	let { user } = $$props;
	let { templates } = $$props;
	let count = 0;

	async function handleSubmit() {
		if (email && password) {
			// const res= await fetch('login.json',{method:'get'});
			const res = await fetch('login.json', {
				mode: 'cors',
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			console.log(res);
		}

		console.log("sadasdsa");
	}

	function increment_count() {
		count++;
		return count;
	}

	const writable_props = ['email', 'password', 'user', 'templates'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Templates> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('email' in $$props) $$invalidate(2, email = $$props.email);
		if ('password' in $$props) $$invalidate(3, password = $$props.password);
		if ('user' in $$props) $$invalidate(4, user = $$props.user);
		if ('templates' in $$props) $$invalidate(0, templates = $$props.templates);
	};

	$$self.$capture_state = () => ({
		templates,
		preload,
		email,
		password,
		user,
		templates,
		count,
		successkid,
		handleSubmit,
		increment_count
	});

	$$self.$inject_state = $$props => {
		if ('email' in $$props) $$invalidate(2, email = $$props.email);
		if ('password' in $$props) $$invalidate(3, password = $$props.password);
		if ('user' in $$props) $$invalidate(4, user = $$props.user);
		if ('templates' in $$props) $$invalidate(0, templates = $$props.templates);
		if ('count' in $$props) count = $$props.count;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [templates, increment_count, email, password, user, handleSubmit];
}

class Templates extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			email: 2,
			password: 3,
			user: 4,
			templates: 0,
			handleSubmit: 5
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Templates",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*email*/ ctx[2] === undefined && !('email' in props)) {
			console_1.warn("<Templates> was created without expected prop 'email'");
		}

		if (/*password*/ ctx[3] === undefined && !('password' in props)) {
			console_1.warn("<Templates> was created without expected prop 'password'");
		}

		if (/*user*/ ctx[4] === undefined && !('user' in props)) {
			console_1.warn("<Templates> was created without expected prop 'user'");
		}

		if (/*templates*/ ctx[0] === undefined && !('templates' in props)) {
			console_1.warn("<Templates> was created without expected prop 'templates'");
		}
	}

	get email() {
		throw new Error("<Templates>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set email(value) {
		throw new Error("<Templates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get password() {
		throw new Error("<Templates>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set password(value) {
		throw new Error("<Templates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<Templates>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<Templates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get templates() {
		throw new Error("<Templates>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set templates(value) {
		throw new Error("<Templates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get handleSubmit() {
		return this.$$.ctx[5];
	}

	set handleSubmit(value) {
		throw new Error("<Templates>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Templates;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjQ4NzY1ZTYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdGVtcGxhdGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0dmFyIHRlbXBsYXRlcyA9e307XG5cdC8vIGltcG9ydCB7IFByZWxvYWQgfSBmcm9tIFwiQHNhcHBlci9jb21tb25cIjtcblxuXHRleHBvcnQgY29uc3QgcHJlbG9hZCA9IGFzeW5jIGZ1bmN0aW9uKCBwYWdlLCBzZXNzaW9uKSB7XG5cdFx0dmFyIHsgdXNlciB9ID0gc2Vzc2lvbjtcblx0XHQvLyB1c2VyPUpTT04ucGFyc2UodXNlcik7XG5cdFx0aWYoIXVzZXIpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHRoaXMucmVkaXJlY3QoMzAxLCAnbG9naW4nKTtcblx0XHR9XG5cblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKCd0ZW1wbGF0ZXMuanNvbicse21vZGU6J2NvcnMnLG1ldGhvZDonZ2V0J30pO1xuXHRcdGlmKHJlcy5zdGF0dXM9PTIwMCl7XG5cdFx0XHR2YXIgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdGlmKGRhdGEuc3RhdHVzID09IFwic3VjY2Vzc1wiKVxuXHRcdFx0e1xuXHRcdFx0XHR0ZW1wbGF0ZXMgPSBkYXRhLmRhdGE7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRlbXBsYXRlcyk7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0dGhpcy5lcnJvcihkYXRhLnN0YXR1cyxkYXRhLm1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xuXHRcdFx0XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKDEpO1xuXHRcdHJldHVybiB7IHVzZXIsIHRlbXBsYXRlcyB9O1xuXHR9XG5cblxuXHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IGVtYWlsLHBhc3N3b3JkO1xuXHRleHBvcnQgbGV0IHVzZXI7XG5cdGV4cG9ydCBsZXQgdGVtcGxhdGVzO1xuXHRsZXQgY291bnQ9MDtcblx0aW1wb3J0IHN1Y2Nlc3NraWQgZnJvbSAnaW1hZ2VzL3N1Y2Nlc3NraWQuanBnJztcblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKXtcblx0aWYoZW1haWwgJiYgcGFzc3dvcmQpXG5cdHtcblx0XHQvLyBjb25zdCByZXM9IGF3YWl0IGZldGNoKCdsb2dpbi5qc29uJyx7bWV0aG9kOidnZXQnfSk7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2xvZ2luLmpzb24nLHttb2RlOidjb3JzJyxtZXRob2Q6J3Bvc3QnLGhlYWRlcnM6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30sYm9keTpKU09OLnN0cmluZ2lmeSh7ZW1haWwscGFzc3dvcmR9KX0pO1xuXHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdH1cblx0Y29uc29sZS5sb2coXCJzYWRhc2RzYVwiKTtcdFxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRfY291bnQoKXtcblx0Y291bnQrKztcblx0cmV0dXJuIGNvdW50O1xufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0aDEsIGZpZ3VyZSwgcCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdH1cblxuXHRoMSB7XG5cdFx0Zm9udC1zaXplOiAyLjhlbTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0bWFyZ2luOiA1cHg7XG5cdFx0Zm9udC1mYW1pbHk6ICdNb250ZUNhcmxvJywgY3Vyc2l2ZTtcblx0fVxuXHRoNHtcblx0XHRtYXJnaW46IDVweDtcblx0fVxuXG5cdGZpZ3VyZSB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fVxuXHQuaXRlbXtcblx0XHRwYWRkaW5nOjEwcHg7XG5cdFx0ZGlzcGxheTpibG9jaztcblx0XHR3aWR0aDoxMDAlO1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRtYXJnaW46MXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcblx0fVxuXHQuaXRlbTpob3Zlcntcblx0XHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCAyMDEsIDI1NSk7ICovXG5cdFx0XG5cdH1cblxuXG5cdHB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRtYXJnaW46MDtcblx0fVxuXG5cdGhye1xuXHRcdGNvbG9yOmJsYWNrO1xuXHR9XG5cblx0aDJ7XG5cdFx0Y29sb3I6dmFyKC0tY3QtY29sb3IpO1xuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TYXBwZXIgcHJvamVjdCB0ZW1wbGF0ZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+IFRlbXBsYXRlcyEgPC9oMT5cbjxhIGhyZWY9XCIvY3JlYXRlX3RlbXBsYXRlXCI+Q3JlYXRlIGEgbmV3IFRlbXBsYXRlPC9hPlxuPGhyPlxueyNlYWNoIHRlbXBsYXRlcyBhcyB0ZW1wbGF0ZX1cbjxkaXYgY2xhc3M9XCJpdGVtXCI+XG5cdCN7aW5jcmVtZW50X2NvdW50KCl9XG5cdDxoMiBzdHlsZT1cIi0tY3QtY29sb3I6e3RlbXBsYXRlLmNvbG9yfVwiPnt0ZW1wbGF0ZS5uYW1lfTwvaDI+XG5cdFxuXHQ8aDQ+RGVzY3JpcHRpb246e3RlbXBsYXRlLmRlc2NyaXB0aW9ufTwvaDQ+XG5cdFxuXHQ8cD5Db2xvcjp7dGVtcGxhdGUuY29sb3J9PC9wPlxuXHQ8cD57dGVtcGxhdGUudGltZXN0YW1wfTwvcD5cblx0PGhyPlxuPC9kaXY+XG5cbnsvZWFjaH0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQW1JRyxHQUFlOzs7OzZCQUN3QixHQUFRLElBQUMsSUFBSTs7Ozs7NkJBRXJDLEdBQVEsSUFBQyxXQUFXOzs7Ozs2QkFFM0IsR0FBUSxJQUFDLEtBQUs7Ozs7OEJBQ3BCLEdBQVEsSUFBQyxTQUFTOzs7Ozs7Ozs7YUFQTCxHQUNoQjs7Ozs7OzthQUdHLGNBQVk7Ozs7YUFFYixRQUFNOzs7Ozs7Ozs7Ozs7OzhCQU5RLEdBQ2hCOzs7Ozs7Ozs7OzZCQUdHLGNBQVk7Ozs7Ozs2QkFFYixRQUFNOzs7Ozs7Ozs7Ozs7Ozs7NENBSmMsR0FBUSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztHQUZ0QyxvQkFTTTs7OztHQVBMLG9CQUE0RDs7O0dBRTVELG9CQUEyQzs7OztHQUUzQyxvQkFBNkI7Ozs7R0FDN0Isb0JBQTJCOzs7R0FDM0Isb0JBQUk7Ozs7d0VBTnFDLEdBQVEsSUFBQyxJQUFJOzs7NkNBQS9CLEdBQVEsSUFBQyxLQUFLOzs7d0VBRXBCLEdBQVEsSUFBQyxXQUFXO3dFQUUzQixHQUFRLElBQUMsS0FBSzswRUFDcEIsR0FBUSxJQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQVJoQixHQUFTOzs7O2dDQUFkLE1BQUk7Ozs7Ozs7O2FBSEYsWUFBWTs7O2FBQ1csdUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRDVDLFlBQVk7Ozs7OzRCQUNXLHVCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBRGhELG9CQUFxQjs7O0dBQ3JCLG9CQUFvRDs7O0dBQ3BELG9CQUFJOzs7Ozs7Ozs7OzsrQkFDRyxHQUFTOzs7OytCQUFkLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFoSUQsU0FBUzs7TUFHQSxPQUFPLG1CQUFtQixJQUFJLEVBQUUsT0FBTztPQUM3QyxJQUFJLEtBQUssT0FBTzs7O01BRWxCLElBQUk7U0FFQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPOzs7T0FHNUIsR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLElBQUUsSUFBSSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSzs7S0FDcEUsR0FBRyxDQUFDLE1BQU0sSUFBRSxHQUFHO01BQ2IsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJO0VBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSTs7TUFDYixJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVM7R0FFMUIsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJOztHQUtyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLE9BQU87Ozs7O1VBTTVCLElBQUksRUFBRSxTQUFTOzs7Ozs7T0FRZCxLQUFLLGdCQUFDLFFBQVE7T0FDZCxJQUFJO09BQ0osU0FBUztLQUNoQixLQUFLLEdBQUMsQ0FBQzs7Z0JBS1UsWUFBWTtNQUM5QixLQUFLLElBQUksUUFBUTs7U0FHYixHQUFHLFNBQVMsS0FBSyxDQUFDLFlBQVk7SUFBRSxJQUFJLEVBQUMsTUFBTTtJQUFDLE1BQU0sRUFBQyxNQUFNO0lBQUMsT0FBTyxJQUFFLGNBQWMsRUFBQyxrQkFBa0I7SUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRSxLQUFLLEVBQUMsUUFBUTs7O0dBQy9JLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7O0VBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTs7O1VBR2QsZUFBZTtFQUN2QixLQUFLO1NBQ0UsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
