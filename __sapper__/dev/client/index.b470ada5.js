import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, p as globals, r as validate_each_argument, v as validate_slots, u as bind, t as text, e as element, a as space, f as claim_element, g as children, h as claim_text, c as claim_space, b as detach_dev, k as add_location, m as insert_hydration_dev, n as append_hydration_dev, w as set_data_dev, x as prop_dev, q as query_selector_all, j as attr_dev, y as add_render_callback, z as select_option, A as set_input_value, B as listen_dev, C as prevent_default, o as noop, D as destroy_each, E as run_all, F as select_value } from './client.fa652e9a.js';
import { s as successkid } from './successkid.d53948a6.js';

/* src/routes/create_certificate/index.svelte generated by Svelte v3.40.2 */

const { console: console_1 } = globals;
const file = "src/routes/create_certificate/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (103:1) {#each templates as t}
function create_each_block(ctx) {
	let option;
	let t0_value = /*t*/ ctx[9].name + "";
	let t0;
	let t1;
	let option_value_value;

	const block = {
		c: function create() {
			option = element("option");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			option = claim_element(nodes, "OPTION", {});
			var option_nodes = children(option);
			t0 = claim_text(option_nodes, t0_value);
			t1 = claim_space(option_nodes);
			option_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			option.__value = option_value_value = /*t*/ ctx[9]._id;
			option.value = option.__value;
			add_location(option, file, 103, 2, 1991);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, option, anchor);
			append_hydration_dev(option, t0);
			append_hydration_dev(option, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*templates*/ 4 && t0_value !== (t0_value = /*t*/ ctx[9].name + "")) set_data_dev(t0, t0_value);

			if (dirty & /*templates*/ 4 && option_value_value !== (option_value_value = /*t*/ ctx[9]._id)) {
				prop_dev(option, "__value", option_value_value);
				option.value = option.__value;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(option);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(103:1) {#each templates as t}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let form;
	let select;
	let option;
	let t3;
	let t4;
	let input0;
	let t5;
	let input1;
	let mounted;
	let dispose;
	let each_value = /*templates*/ ctx[2];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Create Certificate!");
			t2 = space();
			form = element("form");
			select = element("select");
			option = element("option");
			t3 = text("Select Template");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			input0 = element("input");
			t5 = space();
			input1 = element("input");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-oh6yg0\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Create Certificate!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);
			select = claim_element(form_nodes, "SELECT", { class: true });
			var select_nodes = children(select);
			option = claim_element(select_nodes, "OPTION", {});
			var option_nodes = children(option);
			t3 = claim_text(option_nodes, "Select Template");
			option_nodes.forEach(detach_dev);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(select_nodes);
			}

			select_nodes.forEach(detach_dev);
			t4 = claim_space(form_nodes);

			input0 = claim_element(form_nodes, "INPUT", {
				class: true,
				type: true,
				placeholder: true
			});

			t5 = claim_space(form_nodes);
			input1 = claim_element(form_nodes, "INPUT", { class: true, type: true });
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h1, "class", "svelte-1kk9opm");
			add_location(h1, file, 98, 0, 1751);
			option.__value = "0";
			option.value = option.__value;
			add_location(option, file, 101, 2, 1923);
			attr_dev(select, "class", "w3-input");
			if (/*selected*/ ctx[1] === void 0) add_render_callback(() => /*select_change_handler*/ ctx[6].call(select));
			add_location(select, file, 100, 1, 1831);
			attr_dev(input0, "class", "w3-input");
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Name on the Certificate");
			add_location(input0, file, 109, 1, 2061);
			attr_dev(input1, "class", "w3-button w3-round w3-border");
			attr_dev(input1, "type", "submit");
			input1.value = "Create Certificate";
			add_location(input1, file, 113, 1, 2234);
			add_location(form, file, 99, 0, 1782);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, h1, anchor);
			append_hydration_dev(h1, t1);
			insert_hydration_dev(target, t2, anchor);
			insert_hydration_dev(target, form, anchor);
			append_hydration_dev(form, select);
			append_hydration_dev(select, option);
			append_hydration_dev(option, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			select_option(select, /*selected*/ ctx[1]);
			append_hydration_dev(form, t4);
			append_hydration_dev(form, input0);
			set_input_value(input0, /*name*/ ctx[0]);
			append_hydration_dev(form, t5);
			append_hydration_dev(form, input1);

			if (!mounted) {
				dispose = [
					listen_dev(select, "change", /*select_change_handler*/ ctx[6]),
					listen_dev(select, "change", /*change_handler*/ ctx[7], false, false, false),
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[8]),
					listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[3]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*templates*/ 4) {
				each_value = /*templates*/ ctx[2];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*selected, templates*/ 6) {
				select_option(select, /*selected*/ ctx[1]);
			}

			if (dirty & /*name*/ 1 && input0.value !== /*name*/ ctx[0]) {
				set_input_value(input0, /*name*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(form);
			destroy_each(each_blocks, detaching);
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
	var templates;

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
	validate_slots('Create_certificate', slots, []);
	let { name } = $$props, { description } = $$props;
	let { selected = 0 } = $$props;
	let { user } = $$props, { templates } = $$props;

	async function handleSubmit() {
		if (name && selected != 0) {
			// const res= await fetch('login.json',{method:'get'});
			const res = await fetch('create_certificate.json', {
				mode: 'cors',
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, template_id: selected })
			});

			if (res.status == 200) {
				location.href = '/certificates';
			} else {
				let r = await res.text();
				console.log(r);
			}
		} // console.log(res);
	}

	const writable_props = ['name', 'description', 'selected', 'user', 'templates'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Create_certificate> was created with unknown prop '${key}'`);
	});

	function select_change_handler() {
		selected = select_value(this);
		$$invalidate(1, selected);
		$$invalidate(2, templates);
	}

	const change_handler = () => console.log(selected);

	function input0_input_handler() {
		name = this.value;
		$$invalidate(0, name);
	}

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
		if ('description' in $$props) $$invalidate(4, description = $$props.description);
		if ('selected' in $$props) $$invalidate(1, selected = $$props.selected);
		if ('user' in $$props) $$invalidate(5, user = $$props.user);
		if ('templates' in $$props) $$invalidate(2, templates = $$props.templates);
	};

	$$self.$capture_state = () => ({
		preload,
		name,
		description,
		selected,
		user,
		templates,
		successkid,
		bind,
		text,
		handleSubmit
	});

	$$self.$inject_state = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
		if ('description' in $$props) $$invalidate(4, description = $$props.description);
		if ('selected' in $$props) $$invalidate(1, selected = $$props.selected);
		if ('user' in $$props) $$invalidate(5, user = $$props.user);
		if ('templates' in $$props) $$invalidate(2, templates = $$props.templates);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		name,
		selected,
		templates,
		handleSubmit,
		description,
		user,
		select_change_handler,
		change_handler,
		input0_input_handler
	];
}

class Create_certificate extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			name: 0,
			description: 4,
			selected: 1,
			user: 5,
			templates: 2,
			handleSubmit: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Create_certificate",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*name*/ ctx[0] === undefined && !('name' in props)) {
			console_1.warn("<Create_certificate> was created without expected prop 'name'");
		}

		if (/*description*/ ctx[4] === undefined && !('description' in props)) {
			console_1.warn("<Create_certificate> was created without expected prop 'description'");
		}

		if (/*user*/ ctx[5] === undefined && !('user' in props)) {
			console_1.warn("<Create_certificate> was created without expected prop 'user'");
		}

		if (/*templates*/ ctx[2] === undefined && !('templates' in props)) {
			console_1.warn("<Create_certificate> was created without expected prop 'templates'");
		}
	}

	get name() {
		throw new Error("<Create_certificate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<Create_certificate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get description() {
		throw new Error("<Create_certificate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set description(value) {
		throw new Error("<Create_certificate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selected() {
		throw new Error("<Create_certificate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selected(value) {
		throw new Error("<Create_certificate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<Create_certificate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<Create_certificate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get templates() {
		throw new Error("<Create_certificate>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set templates(value) {
		throw new Error("<Create_certificate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get handleSubmit() {
		return this.$$.ctx[3];
	}

	set handleSubmit(value) {
		throw new Error("<Create_certificate>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Create_certificate;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjQ3MGFkYTUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY3JlYXRlX2NlcnRpZmljYXRlL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGNvbnN0IHByZWxvYWQgPSBhc3luYyBmdW5jdGlvbiggcGFnZSwgc2Vzc2lvbikge1xuXHRcdHZhciB7IHVzZXIgfSA9IHNlc3Npb247XG5cdFx0dmFyIHR4dDtcblx0XHR2YXIgdGVtcGxhdGVzO1xuXHRcdC8vIHVzZXI9SlNPTi5wYXJzZSh1c2VyKTtcblx0XHRpZighdXNlcilcblx0XHR7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZWRpcmVjdCgzMDEsICdsb2dpbicpO1xuXHRcdH1cblx0XHRjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKCd0ZW1wbGF0ZXMuanNvbicse21vZGU6J2NvcnMnLG1ldGhvZDonZ2V0J30pO1xuXHRcdGlmKHJlcy5zdGF0dXM9PTIwMCl7XG5cdFx0XHR2YXIgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdGlmKGRhdGEuc3RhdHVzID09IFwic3VjY2Vzc1wiKVxuXHRcdFx0e1xuXHRcdFx0XHR0ZW1wbGF0ZXMgPSBkYXRhLmRhdGE7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRlbXBsYXRlcyk7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0dGhpcy5lcnJvcihkYXRhLnN0YXR1cyxkYXRhLm1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xuXHRcdFx0XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKDEpO1xuXHRcdHJldHVybiB7IHVzZXIsIHRlbXBsYXRlcyB9O1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBuYW1lLGRlc2NyaXB0aW9uO1xuXHRleHBvcnQgbGV0IHNlbGVjdGVkPTA7XG5cdGV4cG9ydCBsZXQgdXNlcix0ZW1wbGF0ZXM7XG5cdFxuXHRpbXBvcnQgc3VjY2Vzc2tpZCBmcm9tICdpbWFnZXMvc3VjY2Vzc2tpZC5qcGcnO1xuaW1wb3J0IHsgYmluZCwgdGV4dCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpe1xuXHRpZihuYW1lICYmIHNlbGVjdGVkIT0wKVxuXHR7XG5cdFx0Ly8gY29uc3QgcmVzPSBhd2FpdCBmZXRjaCgnbG9naW4uanNvbicse21ldGhvZDonZ2V0J30pO1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdjcmVhdGVfY2VydGlmaWNhdGUuanNvbicse21vZGU6J2NvcnMnLG1ldGhvZDoncG9zdCcsaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSxib2R5OkpTT04uc3RyaW5naWZ5KHtuYW1lOm5hbWUsdGVtcGxhdGVfaWQ6c2VsZWN0ZWR9KX0pO1xuXHRcdGlmKHJlcy5zdGF0dXM9PTIwMClcblx0XHR7XG5cdFx0XHRsb2NhdGlvbi5ocmVmPScvY2VydGlmaWNhdGVzJztcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdGxldCByPSBhd2FpdCByZXMudGV4dCgpO1xuXHRcdFx0Y29uc29sZS5sb2cocik7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKHJlcyk7XG5cdH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdGgxLCBmaWd1cmUsIHAge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRtYXJnaW46IDAgMCAwLjVlbSAwO1xuXHR9XG5cblx0ZmlndXJlIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiA0MDBweDtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0fVxuXG5cdHAge1xuXHRcdG1hcmdpbjogMWVtIGF1dG87XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0XHRoMSB7XG5cdFx0XHRmb250LXNpemU6IDRlbTtcblx0XHR9XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNhcHBlciBwcm9qZWN0IHRlbXBsYXRlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cblxuPGgxPiBDcmVhdGUgQ2VydGlmaWNhdGUhIDwvaDE+XG48Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0gPlxuXHQ8c2VsZWN0IGNsYXNzPVwidzMtaW5wdXRcIiBiaW5kOnZhbHVlPXtzZWxlY3RlZH0gIG9uOmNoYW5nZT1cInsoKT0+Y29uc29sZS5sb2coc2VsZWN0ZWQpfVwiID5cblx0XHQ8b3B0aW9uIHZhbHVlPTAgPlNlbGVjdCBUZW1wbGF0ZTwvb3B0aW9uPlxuXHR7I2VhY2ggdGVtcGxhdGVzIGFzIHR9XG5cdFx0PG9wdGlvbiB2YWx1ZT17dC5faWR9PlxuXHRcdFx0e3QubmFtZX1cblx0XHQ8L29wdGlvbj5cblx0ey9lYWNofVxuXHRcblx0PC9zZWxlY3Q+XG5cdDxpbnB1dCBjbGFzcz1cInczLWlucHV0XCIgdHlwZT1cInRleHRcIiBiaW5kOnZhbHVlPXtuYW1lfSBwbGFjZWhvbGRlcj1cIk5hbWUgb24gdGhlIENlcnRpZmljYXRlXCIgLz5cblx0PCEtLSA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgYmluZDp2YWx1ZT17cGFzc3dvcmR9IG5hbWU9XCJwYXNzd29yZFwiIC8+IC0tPlxuXHRcblxuXHQ8aW5wdXQgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtYm9yZGVyXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlIENlcnRpZmljYXRlXCI+XG5cbjwvZm9ybT5cblxuPCEtLSA8cD48c3Ryb25nPlRyeSBlZGl0aW5nIHRoaXMgZmlsZSAoc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUpIHRvIHRlc3QgbGl2ZSByZWxvYWRpbmcue3VzZXJuYW1lfSB7cGFzc3dvcmR9PC9zdHJvbmc+PC9wPiAtLT5cbjwhLS0gPHA+c2Fhc2RhZDwvcD4gLS0+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQXdHSSxHQUFDLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQURPLEdBQUMsSUFBQyxHQUFHOzs7OztHQUFwQixvQkFFUzs7Ozs7aUVBRFAsR0FBQyxJQUFDLElBQUk7O3FGQURPLEdBQUMsSUFBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBRGQsR0FBUzs7OztnQ0FBZCxNQUFJOzs7Ozs7OzthQUpILHFCQUFxQjs7Ozs7YUFHTixpQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUg5QixxQkFBcUI7Ozs7Ozs7OztpQ0FHTixpQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBREksR0FBUTs7Ozs7Ozs7Ozs7Ozs7R0FGOUMsb0JBQThCOzs7R0FDOUIsb0JBZ0JPO0dBZk4sb0JBUVM7R0FQUixvQkFBeUM7Ozs7Ozs7c0NBREwsR0FBUTs7R0FTN0Msb0JBQThGO29DQUE5QyxHQUFJOztHQUlwRCxvQkFBcUY7Ozs7Ozs7aUVBZHRELEdBQVk7Ozs7Ozs7OytCQUdwQyxHQUFTOzs7OytCQUFkLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozt1Q0FGK0IsR0FBUTs7O3VEQVNHLEdBQUk7cUNBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNUd2QyxPQUFPLG1CQUFtQixJQUFJLEVBQUUsT0FBTztPQUM3QyxJQUFJLEtBQUssT0FBTztLQUVsQixTQUFTOzs7TUFFVCxJQUFJO1NBRUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTzs7O09BRTVCLEdBQUcsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixJQUFFLElBQUksRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUs7O0tBQ3BFLEdBQUcsQ0FBQyxNQUFNLElBQUUsR0FBRztNQUNiLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSTtFQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7O01BQ2IsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTO0dBRTFCLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSTs7R0FLckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxPQUFPOzs7OztVQU01QixJQUFJLEVBQUUsU0FBUzs7Ozs7O09BS2QsSUFBSSxnQkFBQyxXQUFXO09BQ2hCLFFBQVEsR0FBQyxDQUFDO09BQ1YsSUFBSSxnQkFBQyxTQUFTOztnQkFNSixZQUFZO01BQzlCLElBQUksSUFBSSxRQUFRLElBQUUsQ0FBQzs7U0FHZixHQUFHLFNBQVMsS0FBSyxDQUFDLHlCQUF5QjtJQUFFLElBQUksRUFBQyxNQUFNO0lBQUMsTUFBTSxFQUFDLE1BQU07SUFBQyxPQUFPLElBQUUsY0FBYyxFQUFDLGtCQUFrQjtJQUFFLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxHQUFPLElBQUksRUFBQyxXQUFXLEVBQUMsUUFBUTs7O09BQ3pLLEdBQUcsQ0FBQyxNQUFNLElBQUUsR0FBRztJQUVqQixRQUFRLENBQUMsSUFBSSxHQUFDLGVBQWU7O1FBSXpCLENBQUMsU0FBUSxHQUFHLENBQUMsSUFBSTtJQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztFQWdEc0IsUUFBUTs7Ozs7OEJBQW1CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTs7O0VBU3BDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
