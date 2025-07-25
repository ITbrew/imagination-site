'use client'
interface Props {
  index: number
}

const images = [
  // Note: Paths must be **exactly as in /public** (NO drive letter, NO backslashes, NO spaces in folder names!)
  '/BackgroundSlideshowImages/samplestoryimages/anime/redmalamuteandblackhusky.png',
  '/BackgroundSlideshowImages/samplestoryimages/anime/BackgroundSlideshowplaceholder1.png',
  '/BackgroundSlideshowImages/samplestoryimages/fantasyart/backgroundslideshowplaceholder2.png',
]

export default function BackgroundSlideshow({ index }: Props) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt=""
          className={`object-cover w-full h-full absolute transition-opacity duration-1000
            ${i === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: i }}
          draggable={false}
        />
      ))}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  )
}
