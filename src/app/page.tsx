import Canvas from "@/components/Canvas/Canvas";

const Home: React.FC = () => {
	return (
		<main className="flex w-full flex-col items-center p-5">
			<div className="w-full max-w-[1200px]">
				<h1 className="text-2xl font-bold text-white my-2">Reactor</h1>
				<p className="mb-5 text-gray-400">Click anywhere on the image to leave a comment</p>
				<Canvas />
				<p className="mt-5 text-gray-400 hover:text-white text-xs">
					<a href="https://moodyboles.com/?ref=reactor" target="_blank">@moodyboles</a>
				</p>
			</div>
		</main>
	);
}

export default Home;