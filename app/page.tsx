import HeroWithSlideshow from './components/HeroWithSlideshow'
import FeatureCards from './sections/FeatureCards'

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white">
      <HeroWithSlideshow />
      <FeatureCards />
    </main>
  )
}
