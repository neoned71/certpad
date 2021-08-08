import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, p as globals, v as validate_slots, u as bind, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, y as add_render_callback, m as insert_hydration_dev, n as append_hydration_dev, A as set_input_value, z as select_option, B as listen_dev, C as prevent_default, o as noop, E as run_all, F as select_value } from './client.58f0d4c4.js';
import { s as successkid } from './successkid.d53948a6.js';

/* src/routes/create_template/index.svelte generated by Svelte v3.40.2 */

const { console: console_1 } = globals;
const file = "src/routes/create_template/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let form;
	let input0;
	let t3;
	let textarea;
	let t4;
	let select;
	let option0;
	let t5;
	let option1;
	let t6;
	let option2;
	let t7;
	let option3;
	let t8;
	let option4;
	let t9;
	let option5;
	let t10;
	let t11;
	let input1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Create Template!");
			t2 = space();
			form = element("form");
			input0 = element("input");
			t3 = space();
			textarea = element("textarea");
			t4 = space();
			select = element("select");
			option0 = element("option");
			t5 = text("RED");
			option1 = element("option");
			t6 = text("BLUE");
			option2 = element("option");
			t7 = text("YELLOW");
			option3 = element("option");
			t8 = text("PURPLE");
			option4 = element("option");
			t9 = text("GREEN");
			option5 = element("option");
			t10 = text("ORANGE");
			t11 = space();
			input1 = element("input");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-oh6yg0\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Create Template!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);

			input0 = claim_element(form_nodes, "INPUT", {
				class: true,
				type: true,
				placeholder: true
			});

			t3 = claim_space(form_nodes);
			textarea = claim_element(form_nodes, "TEXTAREA", { class: true, placeholder: true });
			children(textarea).forEach(detach_dev);
			t4 = claim_space(form_nodes);
			select = claim_element(form_nodes, "SELECT", { class: true });
			var select_nodes = children(select);
			option0 = claim_element(select_nodes, "OPTION", { id: true, class: true });
			var option0_nodes = children(option0);
			t5 = claim_text(option0_nodes, "RED");
			option0_nodes.forEach(detach_dev);
			option1 = claim_element(select_nodes, "OPTION", { id: true });
			var option1_nodes = children(option1);
			t6 = claim_text(option1_nodes, "BLUE");
			option1_nodes.forEach(detach_dev);
			option2 = claim_element(select_nodes, "OPTION", { id: true });
			var option2_nodes = children(option2);
			t7 = claim_text(option2_nodes, "YELLOW");
			option2_nodes.forEach(detach_dev);
			option3 = claim_element(select_nodes, "OPTION", { id: true });
			var option3_nodes = children(option3);
			t8 = claim_text(option3_nodes, "PURPLE");
			option3_nodes.forEach(detach_dev);
			option4 = claim_element(select_nodes, "OPTION", { id: true });
			var option4_nodes = children(option4);
			t9 = claim_text(option4_nodes, "GREEN");
			option4_nodes.forEach(detach_dev);
			option5 = claim_element(select_nodes, "OPTION", { id: true });
			var option5_nodes = children(option5);
			t10 = claim_text(option5_nodes, "ORANGE");
			option5_nodes.forEach(detach_dev);
			select_nodes.forEach(detach_dev);
			t11 = claim_space(form_nodes);
			input1 = claim_element(form_nodes, "INPUT", { class: true, type: true });
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-18pro61");
			add_location(h1, file, 110, 0, 1548);
			attr_dev(input0, "class", "w3-input svelte-18pro61");
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "name of the template");
			add_location(input0, file, 114, 1, 1627);
			attr_dev(textarea, "class", "w3-input");
			attr_dev(textarea, "placeholder", "description");
			add_location(textarea, file, 115, 1, 1720);
			attr_dev(option0, "id", "red");
			option0.__value = "RED";
			option0.value = option0.__value;
			attr_dev(option0, "class", "svelte-18pro61");
			add_location(option0, file, 117, 2, 1849);
			attr_dev(option1, "id", "blue");
			option1.__value = "BLUE";
			option1.value = option1.__value;
			add_location(option1, file, 118, 2, 1882);
			attr_dev(option2, "id", "yellow");
			option2.__value = "YELLOW";
			option2.value = option2.__value;
			add_location(option2, file, 119, 2, 1916);
			attr_dev(option3, "id", "purple");
			option3.__value = "PURPLE";
			option3.value = option3.__value;
			add_location(option3, file, 120, 2, 1954);
			attr_dev(option4, "id", "green");
			option4.__value = "GREEN";
			option4.value = option4.__value;
			add_location(option4, file, 121, 2, 1992);
			attr_dev(option5, "id", "orange");
			option5.__value = "ORANGE";
			option5.value = option5.__value;
			add_location(option5, file, 122, 2, 2028);
			attr_dev(select, "class", "w3-input");
			if (/*color*/ ctx[3] === void 0) add_render_callback(() => /*select_change_handler*/ ctx[7].call(select));
			add_location(select, file, 116, 1, 1802);
			attr_dev(input1, "class", "w3-button w3-border w3-round");
			attr_dev(input1, "type", "submit");
			input1.value = "Create template";
			add_location(input1, file, 124, 1, 2076);
			add_location(form, file, 112, 0, 1577);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t1);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, form, anchor);
			append_hydration_dev(form, input0);
			set_input_value(input0, /*name*/ ctx[0]);
			append_hydration_dev(form, t3);
			append_hydration_dev(form, textarea);
			set_input_value(textarea, /*description*/ ctx[1]);
			append_hydration_dev(form, t4);
			append_hydration_dev(form, select);
			append_hydration_dev(select, option0);
			append_hydration_dev(option0, t5);
			append_hydration_dev(select, option1);
			append_hydration_dev(option1, t6);
			append_hydration_dev(select, option2);
			append_hydration_dev(option2, t7);
			append_hydration_dev(select, option3);
			append_hydration_dev(option3, t8);
			append_hydration_dev(select, option4);
			append_hydration_dev(option4, t9);
			append_hydration_dev(select, option5);
			append_hydration_dev(option5, t10);
			select_option(select, /*color*/ ctx[3]);
			append_hydration_dev(form, t11);
			append_hydration_dev(form, input1);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[5]),
					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[6]),
					listen_dev(select, "change", /*select_change_handler*/ ctx[7]),
					listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[2]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*name*/ 1 && input0.value !== /*name*/ ctx[0]) {
				set_input_value(input0, /*name*/ ctx[0]);
			}

			if (dirty & /*description*/ 2) {
				set_input_value(textarea, /*description*/ ctx[1]);
			}

			if (dirty & /*color*/ 8) {
				select_option(select, /*color*/ ctx[3]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(form);
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
	if (!user) {
		return this.redirect(301, 'login');
	}

	return { user };
};

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Create_template', slots, []);
	let { name } = $$props, { description } = $$props;
	let { user } = $$props;
	let color;

	async function handleSubmit() {
		if (name && description) {
			// const res= await fetch('login.json',{method:'get'});
			const res = await fetch('create_template.json', {
				mode: 'cors',
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, description, color })
			});

			if (res.status == 200) {
				location.href = '/templates';
			} else {
				let r = await res.text();
				console.log(r);
			}
		} // console.log(res);
	}

	const writable_props = ['name', 'description', 'user'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Create_template> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		name = this.value;
		$$invalidate(0, name);
	}

	function textarea_input_handler() {
		description = this.value;
		$$invalidate(1, description);
	}

	function select_change_handler() {
		color = select_value(this);
		$$invalidate(3, color);
	}

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
		if ('description' in $$props) $$invalidate(1, description = $$props.description);
		if ('user' in $$props) $$invalidate(4, user = $$props.user);
	};

	$$self.$capture_state = () => ({
		preload,
		name,
		description,
		user,
		color,
		successkid,
		bind,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
		if ('description' in $$props) $$invalidate(1, description = $$props.description);
		if ('user' in $$props) $$invalidate(4, user = $$props.user);
		if ('color' in $$props) $$invalidate(3, color = $$props.color);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		name,
		description,
		handleSubmit,
		color,
		user,
		input0_input_handler,
		textarea_input_handler,
		select_change_handler
	];
}

class Create_template extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			name: 0,
			description: 1,
			user: 4,
			handleSubmit: 2
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Create_template",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*name*/ ctx[0] === undefined && !('name' in props)) {
			console_1.warn("<Create_template> was created without expected prop 'name'");
		}

		if (/*description*/ ctx[1] === undefined && !('description' in props)) {
			console_1.warn("<Create_template> was created without expected prop 'description'");
		}

		if (/*user*/ ctx[4] === undefined && !('user' in props)) {
			console_1.warn("<Create_template> was created without expected prop 'user'");
		}
	}

	get name() {
		throw new Error("<Create_template>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<Create_template>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get description() {
		throw new Error("<Create_template>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set description(value) {
		throw new Error("<Create_template>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<Create_template>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<Create_template>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get handleSubmit() {
		return this.$$.ctx[2];
	}

	set handleSubmit(value) {
		throw new Error("<Create_template>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Create_template;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzkzMmZmNWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY3JlYXRlX3RlbXBsYXRlL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0XG5cdC8vIGltcG9ydCB7IFByZWxvYWQgfSBmcm9tIFwiQHNhcHBlci9jb21tb25cIjtcblxuXHRleHBvcnQgY29uc3QgcHJlbG9hZCA9IGFzeW5jIGZ1bmN0aW9uKCBwYWdlLCBzZXNzaW9uKSB7XG5cdFx0dmFyIHsgdXNlciB9ID0gc2Vzc2lvbjtcblx0XHQvLyB1c2VyPUpTT04ucGFyc2UodXNlcik7XG5cdFx0aWYoIXVzZXIpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHRoaXMucmVkaXJlY3QoMzAxLCAnbG9naW4nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHsgdXNlciB9O1xuXHR9XG5cblxuXHRcbjwvc2NyaXB0PlxuXG5cblxuPHNjcmlwdD5cblxuXHRleHBvcnQgbGV0IG5hbWUsZGVzY3JpcHRpb247XG5cdGV4cG9ydCBsZXQgdXNlcjtcblx0bGV0IGNvbG9yO1xuXHRpbXBvcnQgc3VjY2Vzc2tpZCBmcm9tICdpbWFnZXMvc3VjY2Vzc2tpZC5qcGcnO1xuaW1wb3J0IHsgYmluZCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpe1xuXHRpZihuYW1lICYmIGRlc2NyaXB0aW9uKVxuXHR7XG5cdFx0Ly8gY29uc3QgcmVzPSBhd2FpdCBmZXRjaCgnbG9naW4uanNvbicse21ldGhvZDonZ2V0J30pO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdjcmVhdGVfdGVtcGxhdGUuanNvbicse21vZGU6J2NvcnMnLG1ldGhvZDoncG9zdCcsaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSxib2R5OkpTT04uc3RyaW5naWZ5KHtuYW1lLGRlc2NyaXB0aW9uLGNvbG9yfSl9KTtcblx0XHRpZihyZXMuc3RhdHVzPT0yMDApXG5cdFx0e1xuXHRcdFx0bG9jYXRpb24uaHJlZj0nL3RlbXBsYXRlcyc7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRsZXQgcj0gYXdhaXQgcmVzLnRleHQoKTtcblx0XHRcdGNvbnNvbGUubG9nKHIpO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyhyZXMpO1xuXHR9XG59XG48L3NjcmlwdD5cblxuXG5cbiAgXG4gIFxuPHN0eWxlPlxuXHRoMSwgZmlndXJlLCBwIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHRoMSB7XG5cdFx0Zm9udC1zaXplOiAyLjhlbTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuXG5cdGZpZ3VyZSB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDFlbSBhdXRvO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9XG5cblx0I3JlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXHRjb2xvcjogcmVkO1xuICB9XG4gICNvcHRpb24tMiB7XG5cdGNvbG9yOiBncmVlbjtcbiAgfVxuICBcbiAgI29wdGlvbi0zIHtcblx0Y29sb3I6IHllbGxvdztcbiAgfVxuICBcbiAgI29wdGlvbi00IHtcblx0Y29sb3I6IGJsdWU7XG4gIH1cblxuICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcblx0ICBtYXJnaW46MDtcbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U2FwcGVyIHByb2plY3QgdGVtcGxhdGU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPiBDcmVhdGUgVGVtcGxhdGUhIDwvaDE+XG5cbjxmb3JtIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD17aGFuZGxlU3VibWl0fSA+XG5cblx0PGlucHV0IGNsYXNzPVwidzMtaW5wdXRcIiB0eXBlPVwidGV4dFwiIGJpbmQ6dmFsdWU9e25hbWV9IHBsYWNlaG9sZGVyPVwibmFtZSBvZiB0aGUgdGVtcGxhdGVcIiAvPlxuXHQ8dGV4dGFyZWEgY2xhc3M9XCJ3My1pbnB1dFwiIGJpbmQ6dmFsdWU9e2Rlc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCIgLz5cblx0PHNlbGVjdCBjbGFzcz1cInczLWlucHV0XCIgYmluZDp2YWx1ZT17Y29sb3J9PlxuXHRcdDxvcHRpb24gIGlkPVwicmVkXCI+UkVEPC9vcHRpb24+XG5cdFx0PG9wdGlvbiBpZD1cImJsdWVcIj5CTFVFPC9vcHRpb24+XG5cdFx0PG9wdGlvbiBpZD1cInllbGxvd1wiPllFTExPVzwvb3B0aW9uPlxuXHRcdDxvcHRpb24gaWQ9XCJwdXJwbGVcIj5QVVJQTEU8L29wdGlvbj5cblx0XHQ8b3B0aW9uIGlkPVwiZ3JlZW5cIj5HUkVFTjwvb3B0aW9uPlxuXHRcdDxvcHRpb24gaWQ9XCJvcmFuZ2VcIj5PUkFOR0U8L29wdGlvbj5cblx0PC9zZWxlY3Q+XG5cdDxpbnB1dCBjbGFzcz1cInczLWJ1dHRvbiB3My1ib3JkZXIgdzMtcm91bmRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDcmVhdGUgdGVtcGxhdGVcIj5cblxuPC9mb3JtPlxuXG48IS0tIDxwPjxzdHJvbmc+VHJ5IGVkaXRpbmcgdGhpcyBmaWxlIChzcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSkgdG8gdGVzdCBsaXZlIHJlbG9hZGluZy57dXNlcm5hbWV9IHtwYXNzd29yZH08L3N0cm9uZz48L3A+IC0tPlxuPCEtLSA8cD5zYWFzZGFkPC9wPiAtLT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQThHSSxrQkFBa0I7Ozs7Ozs7OzthQU9GLEtBQUc7O2FBQ0gsTUFBSTs7YUFDRixRQUFNOzthQUNOLFFBQU07O2FBQ1AsT0FBSzs7Y0FDSixRQUFNOzs7Ozs7Ozs7Ozs2QkFaeEIsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPRixLQUFHOzs7O2tDQUNILE1BQUk7Ozs7a0NBQ0YsUUFBTTs7OztrQ0FDTixRQUFNOzs7O2tDQUNQLE9BQUs7Ozs7bUNBQ0osUUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQU5VLEdBQUs7Ozs7Ozs7Ozs7R0FOM0Msb0JBQTJCOzs7R0FFM0Isb0JBY087R0FaTixvQkFBMkY7b0NBQTNDLEdBQUk7O0dBQ3BELG9CQUFnRjs2Q0FBekMsR0FBVzs7R0FDbEQsb0JBT1M7R0FOUixvQkFBOEI7O0dBQzlCLG9CQUErQjs7R0FDL0Isb0JBQW1DOztHQUNuQyxvQkFBbUM7O0dBQ25DLG9CQUFpQzs7R0FDakMsb0JBQW1DOzttQ0FOQyxHQUFLOztHQVExQyxvQkFBa0Y7Ozs7Ozs7aUVBWm5ELEdBQVk7Ozs7Ozs7dURBRUssR0FBSTtxQ0FBSixHQUFJOzs7OzhDQUNiLEdBQVc7Ozs7b0NBQ2IsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFoSDdCLE9BQU8sbUJBQW1CLElBQUksRUFBRSxPQUFPO09BQzdDLElBQUksS0FBSyxPQUFPOzs7TUFFbEIsSUFBSTtTQUVBLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU87OztVQUV6QixJQUFJOzs7Ozs7T0FXSCxJQUFJLGdCQUFDLFdBQVc7T0FDaEIsSUFBSTtLQUNYLEtBQUs7O2dCQUtZLFlBQVk7TUFDOUIsSUFBSSxJQUFJLFdBQVc7O1NBR2YsR0FBRyxTQUFTLEtBQUssQ0FBQyxzQkFBc0I7SUFBRSxJQUFJLEVBQUMsTUFBTTtJQUFDLE1BQU0sRUFBQyxNQUFNO0lBQUMsT0FBTyxJQUFFLGNBQWMsRUFBQyxrQkFBa0I7SUFBRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRSxJQUFJLEVBQUMsV0FBVyxFQUFDLEtBQUs7OztPQUM5SixHQUFHLENBQUMsTUFBTSxJQUFFLEdBQUc7SUFFakIsUUFBUSxDQUFDLElBQUksR0FBQyxZQUFZOztRQUl0QixDQUFDLFNBQVEsR0FBRyxDQUFDLElBQUk7SUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7RUF5RWlDLElBQUk7Ozs7O0VBQ2IsV0FBVzs7Ozs7RUFDYixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
