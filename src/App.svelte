<script lang="ts">
	let username:string = "JustBarnt";
</script>

<header>
		<h1>75-Hard Challenge</h1>
		<p>Welcome, {username}!</p>
	<nav>
		<span class="nav-text">
			<a href="/">Home</a>
		</span>
		<span class="nav-text">
			<a href="/">Login</a>
		</span>
		<span class="nav-text">
			<a href="/">Create Account</a>
		</span>
	</nav>
</header>
<section>

</section>

<style lang="scss">
	header{
		color:white;
		position: fixed;
		width: $headerWidth;
		display:flex;
		place-content: space-between;
		place-items: center;
		z-index: 10;
		margin: 0.5% 2.5%;
		height: 5%;
		border-radius: 5rem;
		background: linear-gradient(45deg, $headerGrad);
		box-shadow: 0 0 2rem #574f69b2;
	}

	nav > span{
		padding: 0.75rem;
	}

	nav{
		font-size: 1.2rem;
		padding-right: 1.2rem;
	}

	nav a{
		color: white;
		text-decoration: none;
		font-weight: 600;
		border-radius: 3rem;
		border: 0.15rem solid transparent;
		padding: 0.5rem;
		transition: border-color 0.5s, background-color 0.5s;
	}

	nav a:hover, nav a:focus, nav a:focus-visible, nav a:active{
		border-color: #5B4687;
		background: linear-gradient(0deg,#6A529E75, #9E525F75);
	}

	header > h1{
		font-size: 2.5rem;
		padding-left: 1.6rem;
	}

	header > p{
		font-size: 1.6rem;
		font-weight: 600;
	}
</style>