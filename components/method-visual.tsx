import Image from "next/image";
import type { Language } from "@/lib/manufacturing";

const photos: Record<string, { src: string; en: string; tr: string }> = {
  foam: { src: "/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg", en: "Shaped foam assembly before finishing", tr: "Son yüzey öncesinde şekillendirilmiş strafor form" },
  tooling: { src: "/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-04.jpeg", en: "CNC relief and model production from our archive", tr: "Arşivimizden CNC rölyef ve model üretimi" }
};

const captions: Record<string, { en: string; tr: string }> = {
  glass: { en: "Reinforcement + resin + mold", tr: "Cam elyaf + reçine + kalıp" },
  carbon: { en: "Layup · vacuum bagging · infusion", tr: "Elle serme · vakum torbalama · infüzyon" },
  printing: { en: "Digital model → layers → part", tr: "Dijital model → katmanlar → parça" },
  pu: { en: "Mold preparation → casting → demolding", tr: "Kalıp hazırlığı → döküm → kalıptan alma" },
  epoxy: { en: "Mold → resin pour → cure", tr: "Kalıp → reçine dökümü → kür" },
  wood: { en: "Machining → assembly → complete furniture", tr: "İşleme → birleştirme → komple mobilya" }
};

export function MethodVisual({ id, lang, detail = false }: { id: string; lang: Language; detail?: boolean }) {
  const photo = photos[id];
  const caption = photo?.[lang] ?? captions[id]?.[lang] ?? (lang === "tr" ? "Üretim süreci" : "Production process");
  return <figure className="min-w-0">
    <div className={`relative overflow-hidden bg-[#e9e4d9] ${detail ? "aspect-[16/7]" : "aspect-[16/9]"}`}>
      {photo ? <Image src={photo.src} alt={photo[lang]} fill sizes={detail ? "(min-width: 1024px) 80vw, 100vw" : "(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"} className="object-cover" /> : <svg viewBox="0 0 480 270" role="img" aria-label={caption} className="h-full w-full">
        <defs><pattern id={`fiber-${id}`} width="14" height="14" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="#252722"/><path d="M0 0h7v14H0z" fill="#45483f"/><path d="M0 7h14" stroke="#111" strokeWidth="3"/></pattern></defs>
        <path d="M55 224h370" stroke="#c4baa8" strokeWidth="2"/>
        {(id === "carbon" || id === "glass") && <g strokeWidth="3" strokeLinejoin="round">
          <path d="M94 183q140 80 278-8l-7 22q-140 72-265 1Z" fill="#b6a48a" stroke="#8c6a43"/>
          <path d="M101 169q135 73 264-9l-3 15q-127 80-257 12Z" fill={id === "carbon" ? "url(#fiber-carbon)" : "#f9f8f2"} stroke="#625c51"/>
          <path d="M105 140q136 76 251-9l4 19q-120 82-257 7Z" fill={id === "carbon" ? "url(#fiber-carbon)" : "#fff"} stroke="#8b8272"/>
          <path d="M100 111q143 79 249-9" fill="none" stroke="#8c6a43" strokeDasharray="7 5"/>
          {id === "carbon" && <><path d="M84 192V92q133-69 285-9l8 102" fill="#b9d2d8" fillOpacity=".18" stroke="#67858d"/><path d="M370 102h34V67h27" stroke="#67858d" fill="none"/></>}
        </g>}
        {id === "printing" && <g stroke="#8c6a43" strokeWidth="3" strokeLinejoin="round"><path d="M96 218 239 250l145-43-143-29Z" fill="#b6a48a"/>{Array.from({length:8},(_,i)=><path key={i} d={`M155 ${197-i*10}q88 40 169-8v9q-80 49-169 8Z`} fill={i%2 ? "#d5c2a2":"#efdfc3"}/>)}<path d="M213 42h72v42l-27 24h-21l-23-24Z" fill="#333b3c"/><path d="M248 108v18"/><path d="M248 33V12h-98" fill="none"/></g>}
        {(id === "epoxy" || id === "pu") && <g strokeWidth="3" strokeLinejoin="round"><path d="M100 174 239 134l147 36v42l-147 40-139-37Z" fill="#b4a58d" stroke="#8c6a43"/><path d="m118 180 120-34 129 30-129 34Z" fill={id === "epoxy" ? "#75a6a5" : "#e2bb6e"} stroke="#625c51"/><path d="M118 180v24l120 32 129-34v-26l-129 34Z" fill="#ddd2be" stroke="#8c6a43"/><path d="m228 56 63-17 17 66-67 18Z" fill="#f8f5eb" stroke="#625c51"/><path d="M241 123q-26 22-8 54" fill="none" stroke={id === "epoxy" ? "#578e90" : "#cda353"} strokeWidth="8"/></g>}
        {id === "wood" && <g stroke="#8c6a43" strokeWidth="3" strokeLinejoin="round"><path d="m154 63 150-21 42 25v140l-146 35-46-27Z" fill="#b6a48a"/><path d="m164 76 131-19v143l-131 29Z" fill="#eee3cf"/><path d="m164 128 131-23m-131 71 131-28"/><path d="m306 57 73 30v148l-73-34Z" fill="#d6bd94"/><path d="m317 78 51 22m-51-7 51 22m-51 70 51 22" stroke="#bc9e70" strokeWidth="2"/><path d="M326 129v27" stroke="#333b3c" strokeWidth="5"/></g>}
      </svg>}
      {!photo && <span className="absolute left-3 top-3 bg-porcelain/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink/65">{lang === "tr" ? "Süreç şeması" : "Process illustration"}</span>}
    </div>
    {detail && <figcaption className="mt-3 text-sm leading-6 text-ink/70">{caption}</figcaption>}
  </figure>;
}
