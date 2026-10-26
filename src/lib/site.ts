import homeDelivery from "@/assets/home-delivery.jpg";
import parcelBoxes from "@/assets/parcel-boxes.jpg";
import furniture from "@/assets/furniture.jpg";
import pallets from "@/assets/pallets.jpg";
import vanPlech from "@/assets/van-plech.jpg";
import vanPlachta from "@/assets/van-plachta.jpg";

export const contact = {
  email: "info@totheright.cz",
  phone: "+420 601 356 549",
  phoneHref: "tel:+420601356549",
};

export const company = {
  name: "ToTheRight s.r.o.",
  ico: "30098262",
  street: "Zenklova 24/54",
  district: "Libeň (Praha 8)",
  city: "180 00 Praha",
  register: "Spisová značka C 457243 vedená u Městského soudu v Praze",
  founded: "1. 10. 2026",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "home-delivery",
    title: "Home delivery",
    short: "Doručíme zásilku až ke dveřím — rychle, ohleduplně a s úsměvem.",
    long: "Dovážíme zásilky e‑shopů i jednotlivců přímo k zákazníkům domů. Domluvíme se na čase doručení, zásilku předáme osobně a o každém kroku víte.",
    points: ["Doručení až ke dveřím", "Domluva času s příjemcem", "Potvrzení o předání"],
    image: homeDelivery,
    imageAlt: "Kurýr předává balík zákaznici u dveří rodinného domu",
  },
  {
    slug: "vydejni-boxy",
    title: "Doručování do výdejních boxů",
    short: "Pravidelné závozy výdejních boxů a míst podle pevného rozpisu.",
    long: "Zásobujeme výdejní boxy a výdejní místa na pravidelných trasách. Držíme se časového plánu, aby zákazníci měli zásilky připravené včas.",
    points: ["Pravidelné trasy", "Spolehlivé časy závozu", "Praha a okolí i celá ČR"],
    image: parcelBoxes,
    imageAlt: "Kurýr vkládá balík do výdejního boxu",
  },
  {
    slug: "nabytek",
    title: "Přeprava nábytku",
    short: "Skříně, sedačky i kuchyně — zabalené, upevněné a bez šrámů.",
    long: "Nábytek převážíme v uzavřených dodávkách, chráníme ho dekami a fixačními popruhy. Vyneseme ho až na místo, kam potřebujete.",
    points: ["Ochranné deky a popruhy", "Vynáška do patra", "Šetrná manipulace"],
    image: furniture,
    imageAlt: "Dva pracovníci nakládají zabalenou sedačku do dodávky",
  },
  {
    slug: "elektronika",
    title: "Přeprava elektroniky",
    short: "Televize, spotřebiče i IT technika v bezpečí uzavřené dodávky.",
    long: "Elektronika patří do uzavřeného a suchého prostoru. Převážíme ji v plechových dodávkách, správně ukotvenou a bez zbytečného překládání.",
    points: ["Uzavřený a suchý prostor", "Správné ukotvení", "Velké spotřebiče i TV"],
    image: furniture,
    imageAlt: "Krabice s televizí připravená k naložení do dodávky",
  },
  {
    slug: "paletove-zbozi",
    title: "Přeprava paletového zboží",
    short: "Europalety a objemné náklady v plachtových dodávkách.",
    long: "Paletové zboží nakládáme do plachtových dodávek, které jdou naložit zezadu i z boku. Ideální pro zásobování skladů, prodejen a staveb.",
    points: ["Europalety i atypické palety", "Nakládka zezadu i z boku", "Závozy skladů a prodejen"],
    image: pallets,
    imageAlt: "Pracovník nakládá paletu s paletovým vozíkem do plachtové dodávky",
  },
];

export type Vehicle = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  specs: { label: string; value: string }[];
  bestFor: string[];
};

export const fleet: Vehicle[] = [
  {
    name: "Plechová dodávka",
    tagline: "Uzavřená a bezpečná",
    description:
      "Celokovová skříň chrání náklad před deštěm, prachem i nepovolanými zraky. Naše nejuniverzálnější vozidlo pro balíky, elektroniku i nábytek.",
    image: vanPlech,
    imageAlt: "Bílá plechová dodávka",
    specs: [
      { label: "Kategorie", value: "do 3,5 t" },
      { label: "Ložný prostor", value: "cca 12–14 m³" },
      { label: "Nakládka", value: "zadní a boční posuvné dveře" },
    ],
    bestFor: ["Home delivery", "Výdejní boxy", "Elektronika", "Nábytek"],
  },
  {
    name: "Plachtová dodávka",
    tagline: "Pro objemné a paletové zboží",
    description:
      "Plachtová nástavba s rovnou ložnou plochou pojme palety i rozměrné kusy. Boční plachta se dá odhrnout, takže nakládka jde i vysokozdvižným vozíkem.",
    image: vanPlachta,
    imageAlt: "Bílá plachtová dodávka s šedou plachtou",
    specs: [
      { label: "Kategorie", value: "do 3,5 t" },
      { label: "Kapacita", value: "až 8–10 europalet" },
      { label: "Nakládka", value: "zezadu i z boku" },
    ],
    bestFor: ["Paletové zboží", "Nábytek", "Objemné zásilky"],
  },
];

export const navItems = [
  { to: "/sluzby", label: "Služby" },
  { to: "/vozovy-park", label: "Vozový park" },
  { to: "/o-nas", label: "O nás" },
  { to: "/kontakt", label: "Kontakt" },
] as const;
