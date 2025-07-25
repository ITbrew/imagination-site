'use client'

import { motion } from 'framer-motion'

export default function FeatureCards() {
  return (
    <section className="w-full px-6 py-12 md:py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Choose a Style',
            description: 'Pick your favorite story art style.',
          },
          {
            title: 'Add a Subject',
            description: 'Describe what the story should be about. A dragon goes to the moon? A pirate dog adventure?',
          },
          {
            title: 'Guide the Adventure',
            description:
              'Shape the story as you go — add your ideas after each scene, or leave it empty to let the tale flow naturally!',
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-zinc-400">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
