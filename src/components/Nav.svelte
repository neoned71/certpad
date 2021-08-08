<script context="module">
	export const preload = async function( page, session) {
		var { user } = session;
		// console.log(user);
		return { user };
	}
</script>


<script>
	export let user;
	export let segment;

	async function logout(){
		const res = await fetch('auth.json',{mode:'cors',method:'get'});
		if(res.status==200)
		{
			user=null;
			location.href='/login';
		}
		
	}
	console.log(user);
	console.log("user");

	// async function fun(){
	// 	console.log("function");const res = await fetch('auth.json',{mode:'cors',method:'get'});
	// }
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(28, 129, 196);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}


	.rgt{
		flex:1;
		display: flex;
		justify-content: center;
		/* justify-self: right; */
	}
	.lft{
		flex:1;
		display: flex;
		justify-content: center;

		
	}

	.nav{
		width:100%;
		display:flex;

	}
</style>

<nav class="nav">
	<div class="lft">
		<ul>
			<li><a aria-current="{segment === "dashboard" ? 'page' : undefined}" href=".">Dashboard</a></li>
			<li><a aria-current="{segment === 'templates'? 'page' : undefined}" href="/templates">Templates</a></li>

			<li><a rel=prefetch aria-current="{segment === 'certificates' ? 'page' : undefined}" href="/certificates">Certificates</a></li>
		</ul>
	</div>

	<!-- {#if (user === undefined || user === null)} -->
	
	<div class="rgt">
		<ul>
			<li>
				<a href="." on:click={logout}>Logout</a>
			</li>


		</ul>
	</div>
	<!-- {:else} -->
	<!-- <div class="rgt">
		<ul>
			<li>
				<a href="/login">Login</a>
			</li>
			<li>
				<a href="/register">Register</a>
			</li>


		</ul>
	</div> -->

	<!-- {/if} -->
</nav>
