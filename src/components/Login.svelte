<script lang="ts">
	let accounts: Login = { username: "justbarnt", password: "admin" };
	let attempt: Login = { username: "", password: "" };

	let success:boolean | null = null;
	let message: { success: string, error: string } = { success: "Success! Signing-In!", error: "Invalid username and/or password." };
	$: hidden = success === null ? "hidden" : ""; 
	$: visible = success !== null ? "visible" : "";
	$: alertColor = success ? "#00C9A5" : "#E07F91";

	function HandleLogin(): void 
	{
		success = ((attempt.username === accounts.username) && (attempt.password === accounts.password));
	}

	function HandleInput(event): void 
	{
		let value:string = event.currentTarget.value;
		let name:string = event.currentTarget.name;

		name === "username" ? 
			attempt.username = value : 
			attempt.password = value;
	}
</script>

<section>
	<form id="LoginForm" on:submit|preventDefault="{HandleLogin}" autocomplete="off">
		<h1>Sign In</h1>
		<alert class:hidden class:visible style="background-color:{alertColor}">
			<p>
				{success ? message.success : message.error}
			</p>
		</alert>
		<input
			type="text"
			name="username"
			class="login-field"
			placeholder="Username"
			on:input="{HandleInput}" />
		<input
			type="password"
			name="password"
			class="login-field"
			placeholder="Password"
			on:input="{HandleInput}" />
		<input
			type="submit"
			value="Login"
			class="submit-login"/>
		<p>Create Account</p>
	</form>
</section>

<style lang="scss">

	section{
		height: 95%;
		display: flex;
		justify-content: center;
		align-items: center;

		p{
			font-size: 1.2rem;
			text-align: center;
			border-bottom: 0.2rem solid transparent;
			padding-bottom: 0.2rem;
			cursor:pointer;
			width: fit-content;
			align-self: center;
			transition: all 0.25s;

			&:hover{
				border-bottom: 0.2rem solid white;
			}
		}
	}
	
	form{
		display: flex;
		flex-flow: column wrap;
		place-content: center center;
		color: white;
		padding: 5rem 5rem;
		border-radius: 1rem;
		background: linear-gradient(to left, #6E6085, #E07F91);

		h1{
			font-size: 2.5rem;
			text-align: center;
		}

		*{
			margin: 1rem 0;
		}
	}

	alert{
		&.hidden{
			@include alert-base;
			@include alert-hidden;
		}

		&.visible{
			@include alert-base;
			@include alert-visible;
		}
	}

	.login-field {
		@include input-base;
		box-shadow: 0 0 .75rem $purpleDark;

		&:active, &:focus{
			background: #303030;
			border-color: $magenta;
			padding: 0.75rem;
			border-radius: 1rem;
			outline: none;
		}

		&::placeholder{
			color: white;
		}
	}

	.submit-login {
		@include button-base;
		cursor: pointer;
		transition: all 0.25s;

		&:hover{
			border-color: $magenta;
			background-color: #303030;
			border-radius: 1rem;
		}
	}
</style>
