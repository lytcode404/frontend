import ImageSlider from '../Components/ImageSlider.jsx'
import HeroSlide from '../Components/HeroSlide.jsx'
import BlogPosts1 from '../Components/BlogPosts1.jsx'
import BlogPosts2 from '../Components/BlogPosts2.jsx';
import BlogPosts3 from '../Components/BlogPosts3.jsx';
import Hero1 from '../Components/Hero1.jsx';
import BlogPosts4 from '../Components/BlogPosts4.jsx';
import Hero2 from '../Components/Hero2.jsx';
import BlogPosts5 from '../Components/BlogPosts5.jsx';
import BlogPosts6 from '../Components/BlogPosts6.jsx';
import Hero3 from '../Components/Hero3.jsx';
import Hero4 from '../Components/Hero4.jsx';

export default function Home() {
  const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/600',
    'https://picsum.photos/800/300'
  ];
  return (
    <>
      <ImageSlider images={images}/>
      <BlogPosts1/>
      <BlogPosts2/>
      <BlogPosts3/>
      <Hero1/>
      <BlogPosts4/>
      <Hero2/>
      <BlogPosts5/>
      <BlogPosts6/>
      <Hero3/>
      <Hero4/>
    </>
  )
}
