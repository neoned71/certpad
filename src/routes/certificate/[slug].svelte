<script context="module">
	export async function preload(p,session) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		let params = p.params;
		// console.log("printing:")
		// console.log(p);
		// console.log(session);
		const res = await this.fetch(`/certificate/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			// console.log(data.certificate)
			
			return { certificate: data.certificate };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
// import { userInfo } from "os";


	export let certificate;
	let date= new Date(certificate.timestamp);
	let d= new Date(date).toLocaleDateString('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});
	let day= date.getDay();
	
	console.log(certificate.issuer);
	
	// console.log(t);
</script>

<style>
	*{
		color:white;
	}
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #dfc502;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	.container{
		
		width:100%;
		/* border:1px solid rgb(140, 140, 140); */
		border-radius: 5px;
		margin:10px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(45deg,rgb(134, 60, 253),var(--template-color));

	}
	img{
		display:block;
		width:150px;
	}
	.certificate{
		font-size: 120px;
		font-family: 'MonteCarlo', cursive;
	}
	.organization{
		color:black;
		font-size: 80px;
		font-family: 'MonteCarlo', cursive;
	}
	.cont{
		font-family: 'MonteCarlo', cursive;
		font-size: 30px;
	}
	.straight{
		font-family: 'Merriweather', serif;

		/* font-family: 'MonteCarlo', cursive; */
	}
	.flex{
		margin-top: 30px;
		display:flex;
		align-items: stretch;
	}
	.flexit{
		flex:1;
		padding:20px;
	}
	p{
		width:100%;
		margin:0;
		text-align: center;
	}
</style>

<svelte:head>
	<title>{certificate.template.name}</title>
</svelte:head>


<div class="container w3-card " style="--template-color:{certificate.template.color}">
	<h1 class="certificate">Certificate</h1>
	<p class="straight">{d }</p>
	
	<img src={certificate.issuer.logo} alt="logo" />
	
	<h2 class="organization">{certificate.issuer.organization}</h2>
	
	<span class="cont" >This is to certify that</span>
	<h2 class="straight" >{certificate.name}</h2>
	<h4 class="cont" >has completed</h4>
	<h1 class="straight" >{certificate.template.name}</h1>
	<h4 class="cont" >with flying colors!!</h4>
	
	<div class="flex">
		<div class="flexit">
			<!-- <img src={certificate.issuer.signature} alt="logo" /> -->
		</div>
		<div class="flexit">
			<img src={certificate.issuer.signature} alt="logo" />
			<hr style="color:black">
			<p class="cont">{certificate.issuer.name}</p>
			
			<p class="straight">{certificate.issuer.post}</p>
			<p class="straight">{certificate.issuer.organization}</p>
			
		</div>
	</div>
	<!-- <h1>{certificate.template.name}</h1> -->
	
	
</div>
