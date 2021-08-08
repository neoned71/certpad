<script context="module">
	
	// import { Preload } from "@sapper/common";

	export const preload = async function( page, session) {
		var { user } = session;
		// user=JSON.parse(user);
		if(!user)
		{
			return this.redirect(301, 'login');
		}
		return { user };
	}


	
</script>



<script>

	export let name,description;
	export let user;
	let color;
	import successkid from 'images/successkid.jpg';
import { bind } from 'svelte/internal';


export async function handleSubmit(){
	if(name && description)
	{
		// const res= await fetch('login.json',{method:'get'});
		const res = await fetch('create_template.json',{mode:'cors',method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,description,color})});
		if(res.status==200)
		{
			location.href='/templates';
		}
		else
		{
			let r= await res.text();
			console.log(r);
		}
		// console.log(res);
	}
}
</script>



  
  
<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	#red {
		background-color: red;
	color: red;
  }
  #option-2 {
	color: green;
  }
  
  #option-3 {
	color: yellow;
  }
  
  #option-4 {
	color: blue;
  }

  input[type="text"]{
	  margin:0;
  }
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1> Create Template! </h1>

<form on:submit|preventDefault={handleSubmit} >

	<input class="w3-input" type="text" bind:value={name} placeholder="name of the template" />
	<textarea class="w3-input" bind:value={description} placeholder="description" />
	<select class="w3-input" bind:value={color}>
		<option  id="red">RED</option>
		<option id="blue">BLUE</option>
		<option id="yellow">YELLOW</option>
		<option id="purple">PURPLE</option>
		<option id="green">GREEN</option>
		<option id="orange">ORANGE</option>
	</select>
	<input class="w3-button w3-border w3-round" type="submit" value="Create template">

</form>

<!-- <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.{username} {password}</strong></p> -->
<!-- <p>saasdad</p> -->