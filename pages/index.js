import Layout from "../components/Layout";
import Tag from "../components/Blog/Tag";
import Hero from "../components/Hero";
import PostCard from "../components/Blog/PostCard";
import FeaturedPostCard from "../components/Blog/FeaturedPostCard";
export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="container px-4 mx-auto">
        <div className="flex gap-4">
          <FeaturedPostCard
            title="Me Gusta: Dijelaskan"
            excerpt="'Me gusta', yang berarti 'aku suka', merupakan kalimat yang menarik karena strukturnya yang berbeda dari yang mungkin Anda duga berdasarkan terjemahannya."
            tags={["tata bahasa"]}
            date="23 April, 2021"
          />
          <article className="flex">
            <div className="p-4 bg-gray-50 shadow-md rounded-sm">
              <h2 className="text-xl font-bold">Browse by Tags</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <Tag name="budaya" />
                <Tag name="tata bahasa" />
                <Tag name="pop culture" />
                <Tag name="belajar" />
                <Tag name="terjemahan" />
                <Tag name="ekspresi" />
              </div>
            </div>
          </article>
        </div>
        <article className="flex gap-4 mt-16 flex-wrap">
          <PostCard
            title="Me Gusta: Dijelaskan"
            excerpt="'Me gusta', yang berarti 'aku suka', merupakan kalimat yang menarik karena strukturnya yang berbeda dari yang mungkin Anda duga berdasarkan terjemahannya."
            tags={["tata bahasa"]}
            date="23 April, 2021"
          />
          <PostCard
            title="Subjek vs. Objek"
            excerpt="Dalam post ini saya akan menjelaskan perbedaan subjek dan objek kalimat dalam bahasa Spanyol."
            tags={["tata bahasa"]}
            date="23 April, 2021"
          />
          <PostCard
            title="We Are the World Who Can Take It"
            excerpt="We will make it into the world of lies and deceit."
            tags={[
              "tata bahasa",
              "terjemahan",
              "ekspresi",
              "budaya",
              "belajar",
            ]}
            date="23 April, 2021"
          />
        </article>
      </div>
    </Layout>
  );
}
