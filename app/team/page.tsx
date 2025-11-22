'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';

const team = [
	{
		name: 'Rohan Kumar',
		role: 'Founder',
		credentials: 'OYO | Yes2Growth | IIT-M',
		bio: 'Rohan led online user acquisition for India and SEA at OYO Growth. Managed budgets ranging from $5k to $250k/month across Google, Meta, Programmatic, Affiliates, TikTok. Scaled paid user acquisition by 2.2x, 3x & 1.7x in India, Indonesia & Malaysia respectively.',
		image: '👨‍💼',
	},
	{
		name: 'Gayatri Ramdas',
		role: 'Brand Strategy',
		credentials: 'Conde Nast | Databricks | The Rockefeller Foundation',
		bio: 'Content strategist who has created digital content for diverse organizations including MNCs, NGOs, unicorn startups. Expertise in email marketing, user engagement, technical documentation, and social media management with proven track record in data-driven content strategies.',
		image: '👩‍💼',
	},
	{
		name: 'Anubhav Mishra',
		role: 'Strategy Consultant',
		credentials: 'PWC | Bain | IIT-M | IIM-K',
		bio: 'Strategic consultant with extensive experience in business transformation and growth strategy across multiple industries.',
		image: '👨‍💻',
	},
	{
		name: 'Ashok Kumar',
		role: 'Growth Specialist',
		credentials: 'IIT-M',
		bio: 'Growth specialist focused on scaling operations and optimizing business processes for sustainable expansion.',
		image: '👨‍🔬',
	},
	{
		name: 'Ramnaresh Chouhan',
		role: 'Product & Data Analytics',
		credentials: 'IIT-M',
		bio: 'Seasoned data professional with proven track record in SaaS, product development, and logistics. Successfully implemented advanced analytics, A/B testing, and automation initiatives at Whatfix and Delhivery.',
		image: '👨‍💼',
	},
	{
		name: 'Yash Murty',
		role: 'Technical Lead',
		credentials: 'IIT-M',
		bio: 'Technical expert specializing in building scalable solutions and implementing cutting-edge technologies for business growth.',
		image: '👨‍💻',
	},
];

export default function Team() {
	return (
		<main className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #0F172A 0%, #0a1628 100%)' }}>
			<Navbar />

			<section className="pt-32 pb-24 px-6 md:px-12">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center mb-16"
					>
						<h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
							Our <span className="text-emerald-400">Team</span>
						</h1>
						<div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-8"></div>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Our team comprises experienced growth strategists, campaign managers, data analysts, content marketers,
							and experts from premier institutions and organizations. When working with your business, Growth
							Supercharged takes complete ownership and responsibility for campaign strategy, execution, and success.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{team.map((member, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
							>
								<div className="text-6xl mb-6 text-center">{member.image}</div>

								<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300 text-center">
									{member.name}
								</h3>

								<p className="text-emerald-400 font-semibold mb-2 text-center">{member.role}</p>

								<p className="text-sm text-gray-500 mb-4 text-center">{member.credentials}</p>

								<p className="text-gray-400 leading-relaxed text-sm mb-6">{member.bio}</p>

								<div className="flex justify-center">
									<a
										href="#"
										className="w-10 h-10 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-full flex items-center justify-center transition-colors duration-300"
									>
										<Linkedin className="w-5 h-5 text-emerald-400" />
									</a>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
//                 <p className="text-sm text-muted-foreground mb-3">{member.background}</p>
//                 <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }
