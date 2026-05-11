export default function MattiasBirthdayPage() {
  const gallery = [
    {
      src: "attachment:file_00000000eea071fba74d9bb4730df71b",
      title: "Blacky cuidando al viejito",
      text: "Blacky supervisando que Mattias siga respirando mientras duerme como abuelo de 30 años 💀",
    },
    {
      src: "attachment:file_00000000764c71f5addf0c2809bf2352",
      title: "Lokis siendo reina",
      text: "Lokis aprobando oficialmente a su humano favorito 🐱✨",
    },
  ];

  const letters = [
    {
      title: "📨 ÁBREME SI YA TE SIENTES VIEJITO",
      content:
        "Felices 30 viejito 😭💖 Aunque ya te duelan las rodillas y seguramente haces sonidos al levantarte de la cama, sigues siendo el niño más lindo del mundo para mí. Gracias por existir, por aguantarme, por acompañarme siempre y por hacerme sentir amada todos los días.",
    },
    {
      title: "📨 ÁBREME SI NECESITAS RECORDAR QUE TE AMAMOS",
      content:
        "Yo, Blacky y Lokis te amamos muchísimo. Gracias por tratarnos tan bien, por ser atento, respetuoso, paciente, amoroso y por cuidar siempre de nosotros. Espero que nunca cambies porque honestamente eres una persona demasiado especial.",
    },
    {
      title: "📨 ÁBREME SI QUIERES SABER LO QUE MÁS AMO DE TI",
      content:
        "Amo cuando me abrazas, cuando me cuidas, cuando eres comprensivo conmigo incluso cuando estoy intensa 😭. Amo que seas tierno, calmado, paciente y que siempre intentes hacerme sentir mejor. Estoy demasiado feliz de haberte conocido.",
    },
    {
      title: "📨 ÁBREME SI AÚN SE TE PARA",
      content:
        "La verdad era importante agregar esta sección científica para confirmar si los 30 llegaron fuertes o no. Pero pase lo que pase… igual te amo muchísimo JAJAJA 💀❤️",
    },
    {
      title: "📨 ÁBREME SI QUIERES SABER MI FUTURO FAVORITO",
      content:
        "Quiero vivir contigo, despertar contigo, seguir creando recuerdos contigo y con nuestros hijos peludos. Espero que cumplas muchísimos años más conmigo y que podamos seguir creciendo juntos. Eres hogar para mí. 🌙✨",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white relative font-sans">
      {/* Galaxy background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0f172a] to-black" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-70">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating hearts */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 animate-bounce opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              fontSize: `${Math.random() * 20 + 14}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 px-6 py-10 max-w-6xl mx-auto">
        {/* Hero */}
        <section className="text-center py-20">
          <p className="uppercase tracking-[0.4em] text-pink-300 text-sm mb-5">
            Feliz cumpleaños Mattias
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 bg-gradient-to-r from-pink-300 via-white to-blue-300 bg-clip-text text-transparent">
            LOS 30
            <br />
            TE PEGARON
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-300 leading-relaxed">
            Pero sigues siendo el hombre más hermoso, atento, paciente,
            amoroso y especial del universo entero 🌌
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl px-6 py-4">
              🏎️ Fan de F1
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl px-6 py-4">
              🌙 Astronomía lover
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl px-6 py-4">
              🎮 Shooter gamer
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl px-6 py-4">
              👴 Anciano oficialmente
            </div>
          </div>
        </section>

        {/* Love Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-10">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-pink-300">
              Gracias por todo ❤️
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Gracias por siempre estar conmigo, por aguantarme incluso
              cuando me pongo intensa, por cuidarme, abrazarme y hacerme
              sentir segura contigo.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Amo que seas respetuoso, atento, comprensivo, paciente,
              amoroso y tierno. Amo cómo tratas a nuestros hijos peludos y
              cómo haces que todos se sientan queridos.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Honestamente estoy demasiado feliz de haberte conocido y espero
              que cumplas muchísimos años más conmigo. Ya todos queremos vivir
              contigo 😭✨
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-[2rem] p-8 border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="text-7xl mb-5">🌌</div>
            <h3 className="text-3xl font-bold mb-4">
              Carta interestelar para Mattias
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Si pudiera viajar por todas las galaxias del universo igual te
              seguiría eligiendo a ti. Gracias por convertir los días normales
              en recuerdos hermosos. Eres mi lugar favorito.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20">
          <h2 className="text-5xl font-black text-center mb-14 bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
            Nuestra mini familia 💖
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:scale-[1.02] transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-pink-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pet opinions */}
        <section className="py-10 grid md:grid-cols-2 gap-8">
          <div className="bg-orange-400/10 border border-orange-300/20 rounded-[2rem] p-8 backdrop-blur-xl">
            <h3 className="text-3xl font-bold mb-5">🐶 Relatorio de Blacky</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              "Mi humano favorito me carga, me da cariño y me deja dormir con
              él aunque ocupe toda la cama. Le doy 10/10. A veces ronca fuerte,
              pero lo perdono porque me ama muchísimo."
            </p>
          </div>

          <div className="bg-pink-400/10 border border-pink-300/20 rounded-[2rem] p-8 backdrop-blur-xl">
            <h3 className="text-3xl font-bold mb-5">🐱 Relatorio de Lokis</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              "Como gata calico oficialmente complicada, apruebo a Mattias.
              Me respeta como reina absoluta de esta casa y acepta que yo mande
              sobre todos. Buen humano."
            </p>
          </div>
        </section>

        {/* Letters */}
        <section className="py-24">
          <h2 className="text-5xl font-black text-center mb-16">
            Cartas espaciales para abrir 🚀
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {letters.map((letter, index) => (
              <details
                key={index}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
              >
                <summary className="cursor-pointer list-none p-6 text-xl font-bold flex items-center justify-between hover:bg-white/5 transition-all">
                  {letter.title}
                  <span className="group-open:rotate-180 transition-transform duration-500">
                    ⬇️
                  </span>
                </summary>

                <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed">
                  {letter.content}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Final message */}
        <section className="text-center py-24">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-500/10 to-blue-500/10 border border-white/10 rounded-[3rem] p-10 backdrop-blur-2xl shadow-2xl">
            <div className="text-8xl mb-6">❤️</div>

            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
              Feliz cumpleaños mi amor
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Perdón por no enviarte nada físicamente 😭 no sabía la dirección
              de la nueva casa, PERO quería hacerte algo especial que pudieras
              guardar siempre.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Gracias por existir. Gracias por amarme. Gracias por cuidar de
              nosotros.
            </p>

            <p className="text-2xl font-bold text-pink-300 leading-relaxed">
              Te amo muchísimo Mattias 🌙✨
            </p>

            <div className="mt-10 text-sm uppercase tracking-[0.4em] text-gray-400">
              Con amor infinito ♡
            </div>
          </div>
        </section>

        {/* Music note */}
        <section className="text-center pb-10 text-gray-400">
          🎵 Daylight — Taylor Swift 🎵
          <p className="mt-3 text-sm opacity-70">
            “I once believed love would be burning red, but it's golden...”
          </p>
        </section>
      </div>
    </div>
  );
}
