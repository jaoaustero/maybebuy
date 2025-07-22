export default function Home() {
	return (
		<div>
			<div className="bg-white
				rounded-[10px]
				p-[24px]">
				<div>
					<p>May 2025</p>
				</div>

				<div>
					<div>
						<p>Saved</p>
						<p>$452<span>.13</span></p>
					</div>

					<div>
						<p>Expense</p>
						<p>$452<span>.13</span></p>
					</div>

					<progress max="100"
						value="80"></progress>
				</div>
			</div>
		</div>
	);
}
