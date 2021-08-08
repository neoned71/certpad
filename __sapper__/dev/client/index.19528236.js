import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, p as globals, v as validate_slots, u as bind, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, m as insert_hydration_dev, n as append_hydration_dev, A as set_input_value, B as listen_dev, C as prevent_default, o as noop, E as run_all } from './client.fba68fc1.js';
import { s as successkid } from './successkid.d53948a6.js';

/* src/routes/login/index.svelte generated by Svelte v3.40.2 */

const { console: console_1 } = globals;
const file = "src/routes/login/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let h2;
	let t3;
	let t4;
	let form;
	let input0;
	let t5;
	let input1;
	let t6;
	let input2;
	let t7;
	let a0;
	let t8;
	let t9;
	let p;
	let t10;
	let a1;
	let t11;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("CertPad");
			t2 = space();
			h2 = element("h2");
			t3 = text("Create and Manage Certificates for your institution...");
			t4 = space();
			form = element("form");
			input0 = element("input");
			t5 = space();
			input1 = element("input");
			t6 = space();
			input2 = element("input");
			t7 = space();
			a0 = element("a");
			t8 = text("Register new user");
			t9 = space();
			p = element("p");
			t10 = text("created by: ");
			a1 = element("a");
			t11 = text("neoned71");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-oh6yg0\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "CertPad");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, "Create and Manage Certificates for your institution...");
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);

			input0 = claim_element(form_nodes, "INPUT", {
				type: true,
				name: true,
				placeholder: true
			});

			t5 = claim_space(form_nodes);

			input1 = claim_element(form_nodes, "INPUT", {
				type: true,
				name: true,
				placeholder: true
			});

			t6 = claim_space(form_nodes);
			input2 = claim_element(form_nodes, "INPUT", { type: true });
			form_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			a0 = claim_element(nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t8 = claim_text(a0_nodes, "Register new user");
			a0_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t10 = claim_text(p_nodes, "created by: ");
			a1 = claim_element(p_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t11 = claim_text(a1_nodes, "neoned71");
			a1_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-1tqvmh4");
			add_location(h1, file, 87, 0, 1418);
			add_location(h2, file, 88, 0, 1435);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "name", "email");
			attr_dev(input0, "placeholder", "email");
			add_location(input0, file, 94, 1, 1552);
			attr_dev(input1, "type", "password");
			attr_dev(input1, "name", "password");
			attr_dev(input1, "placeholder", "password");
			add_location(input1, file, 95, 1, 1627);
			attr_dev(input2, "type", "submit");
			input2.value = "Login";
			add_location(input2, file, 97, 1, 1716);
			add_location(form, file, 92, 0, 1502);
			attr_dev(a0, "href", "/register");
			add_location(a0, file, 101, 0, 1763);
			attr_dev(a1, "href", "https://neoned71.com");
			add_location(a1, file, 107, 15, 1973);
			attr_dev(p, "class", "svelte-1tqvmh4");
			add_location(p, file, 107, 0, 1958);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t1);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, h2, anchor);
			append_hydration_dev(h2, t3);
			insert_hydration_dev(target, t4, anchor);
			insert_hydration_dev(target, form, anchor);
			append_hydration_dev(form, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append_hydration_dev(form, t5);
			append_hydration_dev(form, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append_hydration_dev(form, t6);
			append_hydration_dev(form, input2);
			insert_hydration_dev(target, t7, anchor);
			insert_hydration_dev(target, a0, anchor);
			append_hydration_dev(a0, t8);
			insert_hydration_dev(target, t9, anchor);
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, t10);
			append_hydration_dev(p, a1);
			append_hydration_dev(a1, t11);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[5]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[6]),
					listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[2]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*email*/ 1 && input0.value !== /*email*/ ctx[0]) {
				set_input_value(input0, /*email*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				set_input_value(input1, /*password*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(form);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(a0);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(p);
			mounted = false;
			run_all(dispose);
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
	console.log(user);

	if (user) {
		this.redirect(301, 'dashboard');
	}

	return { user, session };
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Login', slots, []);
	let { email } = $$props, { password } = $$props;
	let { user } = $$props, { session } = $$props;

	async function handleSubmit() {
		if (email && password) {
			// const res= await fetch('login.json',{method:'get'});
			const res = await fetch('login.json', {
				mode: 'cors',
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			if (res.status == 200) {
				var text = await res.text();
				text = JSON.parse(text);
				$$invalidate(3, session.user = text.user, session);
				location.href = "/dashboard";
			} else {
				alert("Login Failed");
				console.log(res.text());
			}
		}
	}

	const writable_props = ['email', 'password', 'user', 'session'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Login> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		email = this.value;
		$$invalidate(0, email);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	$$self.$$set = $$props => {
		if ('email' in $$props) $$invalidate(0, email = $$props.email);
		if ('password' in $$props) $$invalidate(1, password = $$props.password);
		if ('user' in $$props) $$invalidate(4, user = $$props.user);
		if ('session' in $$props) $$invalidate(3, session = $$props.session);
	};

	$$self.$capture_state = () => ({
		preload,
		email,
		password,
		user,
		session,
		successkid,
		bind,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ('email' in $$props) $$invalidate(0, email = $$props.email);
		if ('password' in $$props) $$invalidate(1, password = $$props.password);
		if ('user' in $$props) $$invalidate(4, user = $$props.user);
		if ('session' in $$props) $$invalidate(3, session = $$props.session);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		email,
		password,
		handleSubmit,
		session,
		user,
		input0_input_handler,
		input1_input_handler
	];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			email: 0,
			password: 1,
			user: 4,
			session: 3,
			handleSubmit: 2
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*email*/ ctx[0] === undefined && !('email' in props)) {
			console_1.warn("<Login> was created without expected prop 'email'");
		}

		if (/*password*/ ctx[1] === undefined && !('password' in props)) {
			console_1.warn("<Login> was created without expected prop 'password'");
		}

		if (/*user*/ ctx[4] === undefined && !('user' in props)) {
			console_1.warn("<Login> was created without expected prop 'user'");
		}

		if (/*session*/ ctx[3] === undefined && !('session' in props)) {
			console_1.warn("<Login> was created without expected prop 'session'");
		}
	}

	get email() {
		throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set email(value) {
		throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get password() {
		throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set password(value) {
		throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get session() {
		throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set session(value) {
		throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get handleSubmit() {
		return this.$$.ctx[2];
	}

	set handleSubmit(value) {
		throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Login;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTk1MjgyMzYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9naW4vaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRcblx0Ly8gaW1wb3J0IHsgUHJlbG9hZCB9IGZyb20gXCJAc2FwcGVyL2NvbW1vblwiO1xuXG5cdGV4cG9ydCBjb25zdCBwcmVsb2FkID0gYXN5bmMgZnVuY3Rpb24oIHBhZ2UsIHNlc3Npb24pIHtcblx0XHR2YXIgeyB1c2VyIH0gPSBzZXNzaW9uO1xuXHRcdC8vIHVzZXI9SlNPTi5wYXJzZSh1c2VyKTtcblx0XHRjb25zb2xlLmxvZyh1c2VyKTtcblx0XHRpZih1c2VyKVxuXHRcdHtcblx0XHRcdHRoaXMucmVkaXJlY3QoMzAxLCAnZGFzaGJvYXJkJyk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB7IHVzZXIsc2Vzc2lvbiB9O1xuXHR9XG5cblxuXHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IGVtYWlsLHBhc3N3b3JkO1xuXHRleHBvcnQgbGV0IHVzZXIsc2Vzc2lvbjtcblx0aW1wb3J0IHN1Y2Nlc3NraWQgZnJvbSAnaW1hZ2VzL3N1Y2Nlc3NraWQuanBnJztcbmltcG9ydCB7IGJpbmQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKXtcblx0aWYoZW1haWwgJiYgcGFzc3dvcmQpXG5cdHtcblx0XHQvLyBjb25zdCByZXM9IGF3YWl0IGZldGNoKCdsb2dpbi5qc29uJyx7bWV0aG9kOidnZXQnfSk7XG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2xvZ2luLmpzb24nLHttb2RlOidjb3JzJyxtZXRob2Q6J3Bvc3QnLGhlYWRlcnM6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30sYm9keTpKU09OLnN0cmluZ2lmeSh7ZW1haWwscGFzc3dvcmR9KX0pO1xuXHRcdGlmKHJlcy5zdGF0dXM9PTIwMClcblx0XHR7XG5cdFx0XHR2YXIgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cdFx0XHR0ZXh0ID0gSlNPTi5wYXJzZSh0ZXh0KTtcblx0XHRcdHNlc3Npb24udXNlciA9IHRleHQudXNlcjtcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSBcIi9kYXNoYm9hcmRcIjtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGFsZXJ0KFwiTG9naW4gRmFpbGVkXCIpO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzLnRleHQoKSk7XG5cdFx0fVxuXHRcdFxuXHR9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRoMSwgZmlndXJlLCBwIHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG5cblx0aDEge1xuXHRcdGZvbnQtc2l6ZTogMi44ZW07XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cblxuXHRmaWd1cmUge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IDQwMHB4O1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0cCB7XG5cdFx0bWFyZ2luOiAwZW0gYXV0bztcblx0fVxuXG5cdEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuXHRcdGgxIHtcblx0XHRcdGZvbnQtc2l6ZTogNGVtO1xuXHRcdH1cblx0fVxuXHRcbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNhcHBlciBwcm9qZWN0IHRlbXBsYXRlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT5DZXJ0UGFkPC9oMT5cbjxoMj5DcmVhdGUgYW5kIE1hbmFnZSBDZXJ0aWZpY2F0ZXMgZm9yIHlvdXIgaW5zdGl0dXRpb24uLi48L2gyPlxuXG5cblxuPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXtoYW5kbGVTdWJtaXR9ID5cblxuXHQ8aW5wdXQgdHlwZT1cInRleHRcIiBiaW5kOnZhbHVlPXtlbWFpbH0gbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIC8+XG5cdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBiaW5kOnZhbHVlPXtwYXNzd29yZH0gbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIC8+XG5cblx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgPlxuXG48L2Zvcm0+XG5cbjxhIGhyZWY9XCIvcmVnaXN0ZXJcIj5SZWdpc3RlciBuZXcgdXNlcjwvYT5cblxuPCEtLSA8cD48c3Ryb25nPlRyeSBlZGl0aW5nIHRoaXMgZmlsZSAoc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUpIHRvIHRlc3QgbGl2ZSByZWxvYWRpbmcue3VzZXJuYW1lfSB7cGFzc3dvcmR9PC9zdHJvbmc+PC9wPiAtLT5cbjwhLS0gPHA+c2Fhc2RhZDwvcD4gLS0+XG5cblxuPHA+Y3JlYXRlZCBieTogPGEgaHJlZj1cImh0dHBzOi8vbmVvbmVkNzEuY29tXCI+bmVvbmVkNzE8L2E+PC9wPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBdUZJLFNBQU87OzthQUNQLHdEQUFzRDs7Ozs7Ozs7OzthQWF0QyxtQkFBaUI7OztjQU1sQyxjQUFZOztjQUErQixVQUFROzs7Ozs7Ozs7NkJBcEJsRCxTQUFPOzs7Ozs2QkFDUCx3REFBc0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWF0QyxtQkFBaUI7Ozs7OzZCQU1sQyxjQUFZOzs7OEJBQStCLFVBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FwQnRELG9CQUFnQjs7O0dBQ2hCLG9CQUErRDs7O0dBSS9ELG9CQU9PO0dBTE4sb0JBQXlFO3FDQUExQyxHQUFLOztHQUNwQyxvQkFBc0Y7d0NBQW5ELEdBQVE7O0dBRTNDLG9CQUFvQzs7R0FJckMsb0JBQXlDOzs7R0FNekMsb0JBQThEOztHQUEvQyxvQkFBMkM7Ozs7Ozs7aUVBZjFCLEdBQVk7Ozs7Ozs7eURBRVosR0FBSztzQ0FBTCxHQUFLOzs7K0RBQ0QsR0FBUTt5Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTNGOUIsT0FBTyxtQkFBbUIsSUFBSSxFQUFFLE9BQU87T0FDN0MsSUFBSSxLQUFLLE9BQU87OztDQUV0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7O0tBQ2IsSUFBSTtFQUVOLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFdBQVc7OztVQUd0QixJQUFJLEVBQUMsT0FBTzs7Ozs7O09BUVgsS0FBSyxnQkFBQyxRQUFRO09BQ2QsSUFBSSxnQkFBQyxPQUFPOztnQkFLRixZQUFZO01BQzlCLEtBQUssSUFBSSxRQUFROztTQUdiLEdBQUcsU0FBUyxLQUFLLENBQUMsWUFBWTtJQUFFLElBQUksRUFBQyxNQUFNO0lBQUMsTUFBTSxFQUFDLE1BQU07SUFBQyxPQUFPLElBQUUsY0FBYyxFQUFDLGtCQUFrQjtJQUFFLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxHQUFFLEtBQUssRUFBQyxRQUFROzs7T0FDNUksR0FBRyxDQUFDLE1BQU0sSUFBRSxHQUFHO1FBRWIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJO0lBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7b0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7SUFDeEIsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZOztJQUc1QixLQUFLLENBQUMsY0FBYztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7RUFxRFMsS0FBSzs7Ozs7RUFDRCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
