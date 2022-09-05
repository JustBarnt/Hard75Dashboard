<script lang="ts">
	import Login from "./components/Login.svelte";

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
	</nav>
</header>

<Login/>

<style lang="scss">
	header{
		width: 100vw;
		height: 5%;
		display: flex;
		place-content: center space-between;
		align-items: center;
		z-index: 10;
		background: $headerBG;
		background-blend-mode: multiply, multiply;
		box-shadow: 0 0 2rem #1e1e1e;

		h1{
			font-size: 2.5rem;
			padding-left: 1.6rem;
		}

		p{
			font-size: 1.6rem;
			font-weight: 600;
		}

		nav{
			font-size: 1.2rem;
			padding-right: 1.2rem;
	
			span {
				padding: 0.75rem;
			}
	
			a{
				@include a-base;
		
				&:hover, &:focus, &:focus-visible, &:active{
					@include a-hover;
				}
		
			}
		}
	}

</style>