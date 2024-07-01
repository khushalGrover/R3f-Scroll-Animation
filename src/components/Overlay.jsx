import { Scroll } from "@react-three/drei";

const Section = (props) => {
	return (
		<section
			className={`h-screen flex flex-col justify-center p-10 ${
				props.right ? "items-end" : "items-start"
			}`}
		>
			<div className="w-1/2 flex items-center justify-center">
				<div className="max-w-sm w-full">
					<div className="bg-white rounded-lg px-8 py-12">
						{props.children}
					</div>
				</div>
			</div>
		</section>
	);
};

export const Overlay = () => {
	return (
		<Scroll html>
			<div className="w-screen">
				<Section>
					<h1>About Us</h1>
					<p>
						Bharat's biggest AI & Drone Expo is a premier event that
						brings together professionals, experts, and enthusiasts
						from the fields of Artificial Intelligence and drone
						technology. The expo aims to showcase the latest
						innovations, products, and solutions in AI and drone
						technology, as well as facilitate networking and
						collaboration among industry stakeholders.A popular
						event in the domains of artificial intelligence and
						drone technology, Bharat's AI & Drone Expo brings
						together professionals, experts, and enthusiasts. The
						purpose of the exhibition is to present the newest
						advancements in artificial intelligence (AI) and drone
						technology, as well as to encourage networking and
						cooperation between industry participants.
					</p>
				</Section>

				<Section right>
					<h1>Our Mission</h1>
					<p>
						Our mission of an AI & Drone expo could be multifaceted,
						but generally, it aims to serve as a platform for
						showcasing the latest advancements, applications, and
						technologies in artificial intelligence (AI) and drone
						technology.
					</p>
				</Section>
				<Section>
					<h1>Our Vision</h1>
					<p>
						Vision of an AI & Drone Expo is to serve as a dynamic
						platform that showcases cutting-edge advancements in
						artificial intelligence and drone technology. It aims to
						foster innovation, collaboration, and education within
						these rapidly evolving fields, while promoting
						responsible and ethical practices. Through exhibitions,
						workshops, and networking opportunities, the expo seeks
						to inspire and empower individuals and organizations to
						leverage AI and drones for positive societal impact
						across various industries and domains.
					</p>
				</Section>

				<Section right>
					<h1>Expo Hightlights</h1>
					<ul>
						<li>Conference Session</li>
						<li>Drone Demonstrations</li>
						<li>AI Workshops and Training</li>
						<li>Networking Opportunities</li>
					</ul>
				</Section>
				<Section>
					<h1>Our Exports</h1>
					<ol>
						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Reprehenderit consectetur
									sit ipsa?
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Reprehenderit consectetur
									sit ipsa?
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Reprehenderit consectetur
									sit ipsa?
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Reprehenderit consectetur
									sit ipsa?
								</li>
							</ul>
						</li>
					</ol>
				</Section>
				<Section>
					<h1>Our Special Guests</h1>
					<ol>
						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
								</li>
							</ul>
						</li>
					</ol>
				</Section>
				<Section>
					<h1>Our International Guests</h1>
					<ol>
						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet 
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
								</li>
							</ul>
						</li>
					</ol>
				</Section>
				<Section>
					<h1>Our Speakers</h1>
					<ol>
						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
									
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
									
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Reprehenderit consectetur
									sit ipsa?
								</li>
							</ul>
						</li>

						<li>
							<ul>
								<li>ABCD</li>
								<li>
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Reprehenderit consectetur
									sit ipsa?
								</li>
							</ul>
						</li>
					</ol>
				</Section>
			</div>
		</Scroll>
	);
};
