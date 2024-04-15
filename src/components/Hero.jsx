// Hero.jsx
import React, { useState } from "react";
import Button from "./Button"; // Import your custom Button component
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
export function Hero() {
	const [arg, setArg] = useState(null); // State to store the argument

	const handleFirstButtonClick = () => {
		setArg("1");
		console.log("First button clicked:", arg);
	};
	const handleSecondButtonClick = () => {
		setArg("2");
		console.log("Second button clicked:", arg);
	};
	const handleThirdButtonClick = () => {
		setArg("3");
		console.log("Third button clicked:", arg);
	};

	return (
		<div className="outline flex flex-col">
            <h1 className="text-xl underline">Building.com</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non itaque quaerat enim praesentium voluptate quidem facilis quos error doloremque iure, placeat recusandae magni sit, similique natus deserunt fugiat voluptas dolorem.
            </p>
        </div>
	);
}
