import { Scroll } from "@react-three/drei";

const Section = (props) => {
	return (
		<section className={`h-screen flex flex-col justify-center p-10 ${props.right ? 'items-end': 'items-start'}`}>
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
					<h1>Building.com</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Non itaque quaerat enim praesentium voluptate
						quidem facilis quos error doloremque iure, placeat
						recusandae magni sit, similique natus deserunt fugiat
						voluptas dolorem.
					</p>
				</Section>
				<Section right>
					<h1>The Second Title</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Non itaque quaerat enim praesentium voluptate
						quidem facilis quos error doloremque iure, placeat
						recusandae magni sit, similique natus deserunt fugiat
						voluptas dolorem.
					</p>
				</Section>
                <Section>
					<h1>The Third Title</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Non itaque quaerat enim praesentium voluptate
						quidem facilis quos error doloremque iure, placeat
						recusandae magni sit, similique natus deserunt fugiat
						voluptas dolorem.
					</p>
				</Section>
			</div>
		</Scroll>
	);
};
