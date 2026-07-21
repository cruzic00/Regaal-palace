import PageHero from '../components/PageHero'
import Blog from '../sections/Blog'

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="News & Blogs"
        crumb="Blog"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
      />
      <Blog />
    </>
  )
}
