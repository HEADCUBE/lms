import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
  <>

    <Hero/>
    <HomeMenu/>
    <section className="text-center my-16" id="about">
      <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
      />
      <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>
          Une pizzeria authentique et chaleureuse ou on peut bien manger une vraie Margherita comme à Napoli.
          La Street Pizzeria Napoletatna est un concept de pizza fait à la pure tradition Napolitaine.
          La pate est faite la veille et laissée reposer pendant au mois 24hrs .
        </p>
        <p> Nous utilisons de la tomate italienne, de la mozza fleure de lait faite des mains d’un italien livrer jusqu'à chez nous chaque 2 jours et
          en plus de tous nos produits frais qu’on sélectionne nous même pour avoir d’aussi délicieuses pizzas.
          </p>
        <p>La SPN tourne autour de notre super Four à bois fabriquer par l’une des plus ancienne maison et fabriquant de four napolitain,
          Stephano Ferrara Napoli, pour avoir la meilleure cuisson de pizza napolitaine.</p>
      </div>
    </section>
    <section className="text-center my-8" id="contact">
      <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
      />
      <div className="mt-8">
        <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
          +46 738 123 123
        </a>
      </div>
    </section>
  </>
)
}