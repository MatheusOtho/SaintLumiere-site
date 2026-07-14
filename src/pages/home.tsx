import Hero from "./home/hero"
import Carrossel from "./home/carrossel"
import Personalizados from "./home/personalizado"
import Categorias from "./home/categorias"
import Destaques from "./home/destaques"

function Home() {
  return (
    <>
        <main className="max-w-[1600px] m-auto">
            <Hero/>
            <Carrossel/>
            <Personalizados/>
            <Categorias/>
            <Destaques/>
        </main>
    </>
  );
}

export default Home;
