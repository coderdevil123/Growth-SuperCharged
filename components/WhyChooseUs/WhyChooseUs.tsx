"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const reasons = [
	{
		title: "Experienced Team and Network",
		description:
			"Our team brings expertise from premier institutions and leading companies, giving us insights into diverse market landscapes.",
	},
	{
		title: "End-to-End Solutions",
		description:
			"From digital marketing to operational scaling, we provide comprehensive solutions tailored to your growth challenges.",
	},
	{
		title: "Data-Driven Insights",
		description:
			"Every decision is backed by data to ensure maximum ROI and measurable results for your business.",
	},
	{
		title: "Dynamic & Disciplined",
		description:
			"We balance creativity with discipline, ensuring every initiative aligns with your business objectives.",
	},
];

export default function WhyChooseUs() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const container = containerRef.current;
		const items = container.children;
		const itemWidth = (items[0] as HTMLElement).offsetWidth + 32;
		const totalWidth = itemWidth * reasons.length;

		// Duplicate items for seamless loop
		container.innerHTML += container.innerHTML;

		// Set initial position to start from left
		gsap.set(container, { x: -totalWidth });

		// Infinite scroll animation (left to right)
		gsap.to(container, {
			x: 0,
			duration: 25,
			ease: "none",
			repeat: -1,
		});

		return () => {
			gsap.killTweensOf(container);
		};
	}, []);

	return (
		<section
			className="py-32 overflow-hidden"
			style={{
				background:
					"linear-gradient(to bottom, #e0f2e9 0%, #a7f3d0 50%, #34d399 100%)",
			}}
		>
			{/* Header */}
			<div className="px-4 sm:px-6 lg:px-8 mb-16">
				<div className="max-w-7xl mx-auto text-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
						style={{ color: "#0F172A", letterSpacing: "-0.02em" }}
					>
						Why Choose{" "}
						<span style={{ color: "#10B981" }}>Growth SuperCharged</span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg md:text-xl max-w-3xl mx-auto"
						style={{ color: "#6B7280" }}
					>
						We combine deep expertise with dynamic problem-solving to deliver
						transformative results.
					</motion.p>
				</div>
			</div>

			{/* Infinite Scrolling Container */}
			<div className="relative">
				<div
					ref={containerRef}
					className="flex gap-8"
					style={{ width: "max-content" }}
				>
					{reasons.map((item, i) => (
						<motion.div
							key={i}
							className="p-10 rounded-2xl flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300"
							style={{
								width: "450px",
								minHeight: "280px",
								backgroundColor: "#FFFFFF",
								border: "2px solid #34D399",
							}}
							whileHover={{ y: -8, scale: 1.02 }}
						>
							<div
								className="h-1 mb-6 rounded-full"
								style={{ backgroundColor: "#10B981", width: "60px" }}
							/>
							<h3
								className="text-2xl md:text-3xl font-bold mb-4"
								style={{ color: "#0F172A", letterSpacing: "-0.01em" }}
							>
								{item.title}
							</h3>
							<p
								className="text-base md:text-lg leading-relaxed"
								style={{ color: "#6B7280" }}
							>
								{item.description}
							</p>
						</motion.div>
					))}
				</div>

				{/* Very light gradient overlays */}
				<div
					className="absolute top-0 left-0 h-full w-64 pointer-events-none z-10"
					style={{
						background:
							"linear-gradient(to right, rgba(224, 242, 233, 0.9) 0%, rgba(224, 242, 233, 0.5) 40%, transparent 100%)",
					}}
				/>
				<div
					className="absolute top-0 right-0 h-full w-64 pointer-events-none z-10"
					style={{
						background:
							"linear-gradient(to left, rgba(52, 211, 153, 0.9) 0%, rgba(52, 211, 153, 0.5) 40%, transparent 100%)",
					}}
				/>
			</div>

			{/* Background grid pattern */}
			<div
				className="absolute inset-0 pointer-events-none opacity-5"
				style={{
					backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.3) 2px, transparent 2px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.3) 2px, transparent 2px),
            linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
          `,
					backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
				}}
			/>
		</section>
	);
}
						// />
// 					</svg>
// 				</motion.div>
// 			</div>

// 			{/* Background grid pattern */}
// 			<div
// 				className="absolute inset-0 pointer-events-none opacity-5"
// 				style={{
// 					backgroundImage: `
//             linear-gradient(rgba(16, 185, 129, 0.3) 2px, transparent 2px),
//             linear-gradient(90deg, rgba(16, 185, 129, 0.3) 2px, transparent 2px),
//             linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
//           `,
// 					backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
// 				}}
// 			/>
// 		</section>
// 	);
// }
// //           </p>
//         </motion.div>

//         {/* Cards in single row - horizontal layout */}
//         <div
//           ref={cardsRef}
//           className="flex flex-col gap-8"
//           style={{
//             perspective: "1000px",
//             transformStyle: "preserve-3d",
//           }}
//         >
//           {reasons.map((item, i) => (
//             <div
//               key={i}
//               className="why-card p-10 rounded-2xl transition-all duration-300 hover:shadow-2xl"
//               style={{
//                 backgroundColor: "#FFFFFF",
//                 border: "2px solid #34D399",
//                 minHeight: "200px",
//               }}
//             >
//               <div
//                 className="card-line h-1 mb-6 rounded-full"
//                 style={{ backgroundColor: "#10B981", width: 0 }}
//               />
//               <h3
//                 className="card-title text-2xl md:text-3xl font-bold mb-4"
//                 style={{ color: "#0F172A", letterSpacing: "-0.01em" }}
//               >
//                 {item.title}
//               </h3>
//               <p
//                 className="card-description text-base md:text-lg leading-relaxed"
//                 style={{ color: "#6B7280" }}
//               >
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="text-center mt-16"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="inline-block text-4xl"
//             style={{ color: "#10B981" }}
//           >
//             ☟
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Background grid pattern */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-5"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(16, 185, 129, 0.3) 2px, transparent 2px),
//             linear-gradient(90deg, rgba(16, 185, 129, 0.3) 2px, transparent 2px),
//             linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
//           `,
//           backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
//         }}
//       />
//     </section>
//   );
// }
