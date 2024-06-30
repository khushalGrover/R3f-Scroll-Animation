import { Hero } from "./components/Hero";
import { EnvironmentCanvas } from "./components/canvas/EnvironmentCanvas";
function App() {
	return (
		<div className="relative">
			<div className="fixed flex h-full w-full outline">
				<EnvironmentCanvas />
			</div>
		</div>
	);
}

export default App;
