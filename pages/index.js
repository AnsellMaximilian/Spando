import Layout from "../components/Layout";
import Tag from "../components/Blog/Tag";
import Hero from "../components/Hero";
import PostCard from "../components/Blog/PostCard";
import Link from "next/link";
import FeaturedPostCard from "../components/Blog/FeaturedPostCard";
import Panel from "../components/Panel";
export default function Home() {
  return (
    <Layout home>
      <Hero />
      <div className="container px-4 mx-auto mt-16 grid grid-cols-12 gap-4">
        <main className="grid grid-cols-12 gap-4 col-span-12 lg:col-span-8">
          <FeaturedPostCard
            title="Me Gusta: Dijelaskan"
            excerpt="'Me gusta', yang berarti 'aku suka', merupakan kalimat yang menarik karena strukturnya yang berbeda dari yang mungkin Anda duga berdasarkan terjemahannya."
            tags={["tata bahasa"]}
            date="23 April, 2021"
          />

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
        </main>
        <Panel classes="col-span-12 lg:col-span-4">
          <aside>
            <article>
              <h3 className="text-xl font-bold">Browse by Tags</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <Tag name="budaya" variant="big" />
                <Tag name="tata bahasa" variant="big" />
                <Tag name="pop culture" variant="big" />
                <Tag name="belajar" variant="big" />
                <Tag name="terjemahan" variant="big" />
                <Tag name="ekspresi" variant="big" />
                <Tag name="dasar" variant="big" />
              </div>
            </article>
            <article className="col-span-12 pt-8">
              <h3 className="text-xl font-bold">Bagus untuk Pemula</h3>
              <div className="mt-2 grid grid-cols-12">
                <Link href="/">
                  <a className="col-span-12 md:col-span-6 lg:col-span-12">
                    <article className="mb-4">
                      <h2 className="text-lg font-bold hover:underline">
                        Care Mengubah Kata
                      </h2>
                      <p className="mt-2">
                        Saya akan menjelaskan bagaimana Anda akan mengubah kata.
                      </p>
                    </article>
                  </a>
                </Link>
                <Link href="/">
                  <a className="col-span-12 md:col-span-6 lg:col-span-12">
                    <article className="mb-4">
                      <h2 className="text-lg font-bold hover:underline">
                        Care Mengubah Kata
                      </h2>
                      <p className="mt-2">
                        Saya akan menjelaskan bagaimana Anda akan mengubah kata.
                      </p>
                    </article>
                  </a>
                </Link>
              </div>
            </article>
          </aside>
        </Panel>
      </div>
    </Layout>
  );
}
