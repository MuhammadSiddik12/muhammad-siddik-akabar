import img from "../5.svg";

function headPage() {
	return (
		<section class="hero is-white has-text-centered">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-centered">
						<div class="column">
							<h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
								Full Stack Developer
							</h1>
							<h2 class="subtitle is-size-4-tablet">
								{" "}
								I love Programming what I do.
							</h2>
							<img alt="" class="avatar" src={img}></img>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default headPage;
