<script context="module">
	var templates ={};
	// import { Preload } from "@sapper/common";

	export const preload = async function( page, session) {
		var { user } = session;
		// user=JSON.parse(user);
		if(!user)
		{
			return this.redirect(301, 'login');
		}

		const res = await this.fetch('templates.json',{mode:'cors',method:'get'});
		if(res.status==200){
			var data = await res.json();
			// console.log(data);
			if(data.status == "success")
			{
				templates = data.data;
				// console.log(templates);
				
			}
			else{
				this.error(data.status,data.message);
			}
			// let data = JSON.parse(text);
			
		}
		// console.log(1);
		return { user, templates };
	}


	
</script>

<script>
	export let email,password;
	export let user;
	export let templates;
	let count=0;
	import successkid from 'images/successkid.jpg';



function increment_count(){
	count++;
	return count;
}
</script>

<style>
	h1, figure, p {
		text-align: center;

	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 5px;
		font-family: 'MonteCarlo', cursive;
	}
	h4{
		margin: 5px;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}


	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
	.item{
		padding:10px;
		display:block;
		width:100%;
		text-decoration: none;
		margin:1px;
		background-color: rgb(255, 255, 255);
	}
	.item:hover{
		/* background-color: rgb(191, 201, 255); */
		
	}


	p{
		text-align: left;
		margin:0;
	}

	hr{
		color:black;
	}

	h2{
		color:var(--ct-color);
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1> Templates! </h1>
<a href="/create_template">Create a new Template</a>
<hr>
{#each templates as template}
<div class="item">
	#{increment_count()}
	<h2 style="--ct-color:{template.color}">{template.name}</h2>
	
	<h4>Description:{template.description}</h4>
	
	<p>Color:{template.color}</p>
	<p>{template.timestamp}</p>
	<hr>
</div>

{/each}