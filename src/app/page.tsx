import Canvas from "@/components/Canvas/Canvas";

const Home: React.FC = () => {
	return (
		<main className="flex w-full flex-col items-center p-5">
			<div className="w-full max-w-[1200px]">
				<h1 className="text-2xl font-bold text-white my-2">Reactor</h1>
				<p className="mb-5 text-gray-400">Click anywhere on the image to leave a comment</p>
				<Canvas />
				<hr className="my-5 border-gray-600" />
				<div className="text-gray-200">
					<h6>Potential Future Implementations:</h6>
					<ul className="list-disc list-inside mt-2">
						<li>Extend canvas media to accept videos and reacting to specific frames.</li>
						<li>Implement a backend to store comments and reactions.</li>
						<li>Allow replying to comments/threads.</li>
						<li>Use emojis library instead of the limited emojis options.</li>
					</ul>
				</div>
				<hr className="my-5 border-gray-600" />
				<p className="text-gray-400 hover:text-white text-xs">
					<a href="https://moodyboles.com/?ref=reactor" target="_blank">@moodyboles</a>
				</p>
			</div>
		</main>
	);
}

export default Home;