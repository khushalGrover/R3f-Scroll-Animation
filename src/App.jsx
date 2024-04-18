import Button from "./components/Button"; // Import your custom Button component
import React, { useState } from "react";
import { EnvironmentCanvas } from "./components/canvas/EnvironmentCanvas";
// import { EnvironmentCanvas2 } from "./components/canvas/EnvironmentCanvas2";
function App() {
	const [arg, setArg] = useState(1); // State to store the argument

	const handlePrevBtn = () => {
		/* If the value of arg is 0, then return */
		if (arg === 1) {
			return;
		}
		setArg(arg - 1); // Decrease the value of arg by 1
		console.log("First button clicked:", arg);
	};
	const handleNextBtn = () => {
		/* If the value of arg is 5, then return */
		if (arg === 3) {
			return;
		}
		setArg(arg + 1); // Increase the value of arg by 1
		console.log("Second button clicked:", arg);
	};

	return (
		<div className="relative">
			<div className=" fixed flex flex-col h-full w-full outline">
				
				{/* <EnvironmentCanvas arg={arg} /> */}
				<EnvironmentCanvas arg={arg} />
				
				
				<div className=" fixed b-0">
					<div className="flex items-end justify-center w-screen ">
						<Button
							onClick={handlePrevBtn}
							size="lg"
							variant="outline"
						>
							Prev.
						</Button>
						<Button size="ls" variant="outline">
							{arg}
						</Button>
						<Button
							onClick={handleNextBtn}
							size="lg"
							variant="outline"
						>
							Next
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
