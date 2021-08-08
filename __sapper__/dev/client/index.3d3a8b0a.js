import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, p as globals, v as validate_slots, u as bind, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as src_url_equal, m as insert_hydration_dev, n as append_hydration_dev, A as set_input_value, B as listen_dev, C as prevent_default, w as set_data_dev, o as noop, E as run_all } from './client.fa652e9a.js';
import { s as successkid } from './successkid.d53948a6.js';

/* src/routes/register/index.svelte generated by Svelte v3.40.2 */

const { console: console_1 } = globals;
const file = "src/routes/register/index.svelte";

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
	let t6;
	let form;
	let input0;
	let t7;
	let input1;
	let t8;
	let input2;
	let t9;
	let p;
	let t10;
	let mounted;
	let dispose;

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
			t4 = text("Have fun with Sapper! ");
			t5 = text(/*user*/ ctx[2]);
			t6 = space();
			form = element("form");
			input0 = element("input");
			t7 = space();
			input1 = element("input");
			t8 = space();
			input2 = element("input");
			t9 = space();
			p = element("p");
			t10 = text("saasdad");
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
			t4 = claim_text(figcaption_nodes, "Have fun with Sapper! ");
			t5 = claim_text(figcaption_nodes, /*user*/ ctx[2]);
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);
			input0 = claim_element(form_nodes, "INPUT", { type: true, name: true });
			t7 = claim_space(form_nodes);
			input1 = claim_element(form_nodes, "INPUT", { type: true, name: true });
			t8 = claim_space(form_nodes);
			input2 = claim_element(form_nodes, "INPUT", { type: true });
			form_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t10 = claim_text(p_nodes, "saasdad");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-1kk9opm");
			add_location(h1, file, 77, 0, 1454);
			attr_dev(img, "alt", "Success Kid");
			if (!src_url_equal(img.src, img_src_value = successkid)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1kk9opm");
			add_location(img, file, 80, 1, 1489);
			add_location(figcaption, file, 81, 1, 1533);
			attr_dev(figure, "class", "svelte-1kk9opm");
			add_location(figure, file, 79, 0, 1479);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "name", "email");
			add_location(input0, file, 86, 1, 1650);
			attr_dev(input1, "type", "password");
			attr_dev(input1, "name", "password");
			add_location(input1, file, 87, 1, 1705);
			attr_dev(input2, "type", "submit");
			add_location(input2, file, 89, 1, 1771);
			add_location(form, file, 84, 0, 1600);
			attr_dev(p, "class", "svelte-1kk9opm");
			add_location(p, file, 94, 0, 1929);
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
			append_hydration_dev(figcaption, t5);
			insert_hydration_dev(target, t6, anchor);
			insert_hydration_dev(target, form, anchor);
			append_hydration_dev(form, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append_hydration_dev(form, t7);
			append_hydration_dev(form, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append_hydration_dev(form, t8);
			append_hydration_dev(form, input2);
			insert_hydration_dev(target, t9, anchor);
			insert_hydration_dev(target, p, anchor);
			append_hydration_dev(p, t10);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[4]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[5]),
					listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[3]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*user*/ 4) set_data_dev(t5, /*user*/ ctx[2]);

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
			if (detaching) detach_dev(figure);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(form);
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
	const { user } = session;

	if (user) {
		return this.redirect(301, 'dashboard');
	}
}; // console.log(val);
// const res= await this.fetch('login.json',{method:'get'});
// const res = await this.fetch('login.json',{method:'post',headers:{'Content-type':'application/json'},body:JSON.stringify({username:"w",password:"asd"})});
// console.log(res);

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Register', slots, []);
	let { email } = $$props, { password } = $$props;
	let { user } = $$props;

	async function handleSubmit() {
		if (email && password) {
			// const res= await fetch('login.json',{method:'get'});
			const res = await fetch('register.json', {
				mode: 'cors',
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			console.log(res);
		}
	}

	const writable_props = ['email', 'password', 'user'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Register> was created with unknown prop '${key}'`);
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
		if ('user' in $$props) $$invalidate(2, user = $$props.user);
	};

	$$self.$capture_state = () => ({
		preload,
		email,
		password,
		user,
		successkid,
		bind,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ('email' in $$props) $$invalidate(0, email = $$props.email);
		if ('password' in $$props) $$invalidate(1, password = $$props.password);
		if ('user' in $$props) $$invalidate(2, user = $$props.user);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		email,
		password,
		user,
		handleSubmit,
		input0_input_handler,
		input1_input_handler
	];
}

class Register extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			email: 0,
			password: 1,
			user: 2,
			handleSubmit: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Register",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*email*/ ctx[0] === undefined && !('email' in props)) {
			console_1.warn("<Register> was created without expected prop 'email'");
		}

		if (/*password*/ ctx[1] === undefined && !('password' in props)) {
			console_1.warn("<Register> was created without expected prop 'password'");
		}

		if (/*user*/ ctx[2] === undefined && !('user' in props)) {
			console_1.warn("<Register> was created without expected prop 'user'");
		}
	}

	get email() {
		throw new Error("<Register>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set email(value) {
		throw new Error("<Register>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get password() {
		throw new Error("<Register>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set password(value) {
		throw new Error("<Register>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<Register>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<Register>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get handleSubmit() {
		return this.$$.ctx[3];
	}

	set handleSubmit(value) {
		throw new Error("<Register>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Register;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2QzYThiMGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcmVnaXN0ZXIvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRcblx0Ly8gaW1wb3J0IHsgUHJlbG9hZCB9IGZyb20gXCJAc2FwcGVyL2NvbW1vblwiO1xuXG5cdGV4cG9ydCBjb25zdCBwcmVsb2FkID0gYXN5bmMgZnVuY3Rpb24oIHBhZ2UsIHNlc3Npb24pIHtcblx0XHRjb25zdCB7IHVzZXJ9ID0gc2Vzc2lvbjtcblx0XHRpZih1c2VyKVxuXHRcdHtcblx0XHRcdHJldHVybiB0aGlzLnJlZGlyZWN0KDMwMSwgJ2Rhc2hib2FyZCcpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyh2YWwpO1xuXHRcdC8vIGNvbnN0IHJlcz0gYXdhaXQgdGhpcy5mZXRjaCgnbG9naW4uanNvbicse21ldGhvZDonZ2V0J30pO1xuXHRcdC8vIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goJ2xvZ2luLmpzb24nLHttZXRob2Q6J3Bvc3QnLGhlYWRlcnM6eydDb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30sYm9keTpKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6XCJ3XCIscGFzc3dvcmQ6XCJhc2RcIn0pfSk7XG5cdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcblx0XHQvL2NvbnNvbGUubG9nKHJlcyk7XG5cdFx0Ly8gcmV0dXJuIHsgdXNlciB9O1xuXHR9XG5cblxuXHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IGVtYWlsLHBhc3N3b3JkO1xuXHRleHBvcnQgbGV0IHVzZXI7XG5cdGltcG9ydCBzdWNjZXNza2lkIGZyb20gJ2ltYWdlcy9zdWNjZXNza2lkLmpwZyc7XG5pbXBvcnQgeyBiaW5kIH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCl7XG5cdGlmKGVtYWlsICYmIHBhc3N3b3JkKVxuXHR7XG5cdFx0Ly8gY29uc3QgcmVzPSBhd2FpdCBmZXRjaCgnbG9naW4uanNvbicse21ldGhvZDonZ2V0J30pO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdyZWdpc3Rlci5qc29uJyx7bW9kZTonY29ycycsbWV0aG9kOidwb3N0JyxoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9LGJvZHk6SlNPTi5zdHJpbmdpZnkoe2VtYWlsLHBhc3N3b3JkfSl9KTtcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHR9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRoMSwgZmlndXJlLCBwIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHRoMSB7XG5cdFx0Zm9udC1zaXplOiAyLjhlbTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuXG5cdGZpZ3VyZSB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDFlbSBhdXRvO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TYXBwZXIgcHJvamVjdCB0ZW1wbGF0ZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+R3JlYXQgc3VjY2VzcyE8L2gxPlxuXG48ZmlndXJlPlxuXHQ8aW1nIGFsdD1cIlN1Y2Nlc3MgS2lkXCIgc3JjPVwie3N1Y2Nlc3NraWR9XCI+XG5cdDxmaWdjYXB0aW9uPkhhdmUgZnVuIHdpdGggU2FwcGVyISB7IHVzZXIgfTwvZmlnY2FwdGlvbj5cbjwvZmlndXJlPlxuXG48Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0gPlxuXG5cdDxpbnB1dCB0eXBlPVwidGV4dFwiIGJpbmQ6dmFsdWU9e2VtYWlsfSBuYW1lPVwiZW1haWxcIiAvPlxuXHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgYmluZDp2YWx1ZT17cGFzc3dvcmR9IG5hbWU9XCJwYXNzd29yZFwiIC8+XG5cblx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIj5cblxuPC9mb3JtPlxuXG48IS0tIDxwPjxzdHJvbmc+VHJ5IGVkaXRpbmcgdGhpcyBmaWxlIChzcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSkgdG8gdGVzdCBsaXZlIHJlbG9hZGluZy57dXNlcm5hbWV9IHtwYXNzd29yZH08L3N0cm9uZz48L3A+IC0tPlxuPHA+c2Fhc2RhZDwvcD4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQTZFSSxnQkFBYzs7Ozs7O2FBSUwsd0JBQXNCO3NCQUFFLEdBQUk7Ozs7Ozs7Ozs7Y0FhdEMsU0FBTzs7Ozs7Ozs7OzZCQWpCTixnQkFBYzs7Ozs7Ozs7O3FDQUlMLHdCQUFzQjs4Q0FBRSxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7NkJBYXRDLFNBQU87Ozs7Ozs7OzsrQ0Fkb0IsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FIeEMsb0JBQXVCOzs7R0FFdkIsb0JBR1M7R0FGUixvQkFBMEM7O0dBQzFDLG9CQUF1RDs7OztHQUd4RCxvQkFPTztHQUxOLG9CQUFxRDtxQ0FBdEIsR0FBSzs7R0FDcEMsb0JBQStEO3dDQUE1QixHQUFROztHQUUzQyxvQkFBcUI7O0dBS3RCLG9CQUFjOzs7Ozs7O2lFQVZrQixHQUFZOzs7Ozs7O3FEQUhQLEdBQUk7O3lEQUtULEdBQUs7c0NBQUwsR0FBSzs7OytEQUNELEdBQVE7eUNBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbkY5QixPQUFPLG1CQUFtQixJQUFJLEVBQUUsT0FBTztTQUMzQyxJQUFJLEtBQUksT0FBTzs7S0FDcEIsSUFBSTtTQUVDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFdBQVc7Ozs7Ozs7Ozs7T0FlNUIsS0FBSyxnQkFBQyxRQUFRO09BQ2QsSUFBSTs7Z0JBS00sWUFBWTtNQUM5QixLQUFLLElBQUksUUFBUTs7U0FHYixHQUFHLFNBQVMsS0FBSyxDQUFDLGVBQWU7SUFBRSxJQUFJLEVBQUMsTUFBTTtJQUFDLE1BQU0sRUFBQyxNQUFNO0lBQUMsT0FBTyxJQUFFLGNBQWMsRUFBQyxrQkFBa0I7SUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRSxLQUFLLEVBQUMsUUFBUTs7O0dBQ2xKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7RUFvRGUsS0FBSzs7Ozs7RUFDRCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
