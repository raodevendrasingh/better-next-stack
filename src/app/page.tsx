import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="container mx-auto min-h-screen w-full flex items-center justify-center">
			<div className="absolute top-0 right-0 p-4">
				<ThemeToggle />
			</div>
			<div className="flex flex-col items-center space-y-3">
				<h1 className="text-6xl font-bold">Better Next Stack</h1>
				<h2 className="text-2xl font-bold">SAAS Template</h2>
				<Button>Get Started</Button>
			</div>
		</div>
	);
}
