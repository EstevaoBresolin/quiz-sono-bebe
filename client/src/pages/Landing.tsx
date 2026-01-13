import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Star, Users, Zap } from "lucide-react";

export default function Landing() {
  const handleBuyNow = () => {
    // Rola suavemente ao topo antes de abrir o link de vendas
    // (melhora a experiência em telas longas / mobile)
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Abrir o link após pequena demora para que a rolagem seja percebida
    setTimeout(() => {
      // TODO: Integrar com link de vendas real (Hotmart, Eduzz, Gumroad)
      window.open("https://pay.kiwify.com.br/qK7XNX5", "_blank");
    }, 300);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section - Conversão */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 py-12"
        style={{
          backgroundImage: "url(/images/landing-hero-section.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-3xl w-full text-center text-white">
          <div className="mb-6 inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-full">
            <p className="text-sm font-semibold">✨ Seu Perfil Descoberto</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Agora é Hora de Transformar as Noites
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md font-medium">
            Você já sabe qual é o desafio do seu bebê. Agora tenha acesso ao
            guia completo com estratégias práticas e comprovadas.
          </p>

          {/* Price and CTA */}
          <div className="bg-white/95 backdrop-blur rounded-2xl p-8 md:p-10 mb-8 inline-block shadow-2xl">
            <p className="text-4xl md:text-5xl font-bold text-accent mb-3">
              R$ 19,90
            </p>
            <p className="text-foreground/80 mb-6 font-medium">
              Acesso imediato ao ebook completo
            </p>
            <Button
              onClick={handleBuyNow}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg font-semibold px-12 py-7 rounded-full transition-all duration-300 hover:scale-105 shadow-xl w-full"
            >
              Comprar Agora 🌙
            </Button>
            <p className="text-xs text-foreground/70 mt-4">
              ✅ Pagamento seguro • 📱 Acesso imediato • 🔒 Garantia de
              satisfação
            </p>
          </div>

          <p className="text-sm drop-shadow-md font-medium">
            Menos que um café. Impacto para a vida toda.
          </p>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-accent/20 to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-semibold text-foreground">
            ⏰ Não deixe para depois. Cada noite de sono perdida é uma
            oportunidade de melhora que passa.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            O Que Você Vai Receber
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Guia Completo (12 páginas)
                </h3>
                <p className="text-foreground/80">
                  Conteúdo direto ao ponto, sem enrolação. Leitura rápida, ideal
                  para pais cansados.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Método "Caminho das Nuvens"
                </h3>
                <p className="text-foreground/80">
                  Rotina noturna em 4 passos simples que você pode aplicar hoje
                  mesmo.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Ambiente Ideal Explicado
                </h3>
                <p className="text-foreground/80">
                  Luz, som, temperatura e segurança. Tudo que seu bebê precisa
                  para relaxar.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Dicas Práticas Imediatas
                </h3>
                <p className="text-foreground/80">
                  Ruído branco, massagem, transição do colo para o berço. Tudo
                  com instruções claras.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Gestão de Expectativas
                </h3>
                <p className="text-foreground/80">
                  Entenda que cada bebê é único. Sem promessas milagrosas,
                  apenas realidade.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Linguagem Acolhedora
                </h3>
                <p className="text-foreground/80">
                  Sem julgamentos. Você não está sozinha(o). Nós entendemos o
                  cansaço.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Por Que Isso Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-0 shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Baseado em Rotina
              </h3>
              <p className="text-foreground/80">
                Bebês prosperam com previsibilidade. Uma rotina consistente é a
                base do bom sono.
              </p>
            </Card>
            <Card className="p-8 bg-white border-0 shadow-lg">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Ambiente Adequado
              </h3>
              <p className="text-foreground/80">
                Pequenas mudanças no ambiente podem fazer uma diferença enorme
                no sono.
              </p>
            </Card>
            <Card className="p-8 bg-white border-0 shadow-lg">
              <div className="text-5xl mb-4">⏳</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Constância Diária
              </h3>
              <p className="text-foreground/80">
                Resultados vêm com repetição. Cada noite que você segue a
                rotina, melhora.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Histórias de Pais que Transformaram as Noites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-muted/30 border-0">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 mb-4 italic">
                "Finalmente consegui entender por que meu filho acordava tanto.
                As dicas foram transformadoras! Agora ele dorme a noite toda."
              </p>
              <p className="font-semibold text-foreground">
                — Maria, mãe de 2 filhos
              </p>
            </Card>
            <Card className="p-8 bg-muted/30 border-0">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 mb-4 italic">
                "Sem julgamentos, sem culpa. Exatamente o que eu precisava neste
                momento tão cansativo. Recomendo para todas as mães!"
              </p>
              <p className="font-semibold text-foreground">
                — João, pai de 1 filho
              </p>
            </Card>
            <Card className="p-8 bg-muted/30 border-0">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 mb-4 italic">
                "Aplicamos o método 'Caminho das Nuvens' e em uma semana já
                vimos diferença. Meu bebê está muito mais calmo."
              </p>
              <p className="font-semibold text-foreground">
                — Ana, mãe de 1 filho
              </p>
            </Card>
            <Card className="p-8 bg-muted/30 border-0">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 mb-4 italic">
                "Melhor investimento que fiz para minha saúde mental. Dormir bem
                novamente é um luxo que eu tinha esquecido."
              </p>
              <p className="font-semibold text-foreground">
                — Carlos, pai de 2 filhos
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Antes vs. Depois
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-2 border-red-200">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                ❌ Sem o Guia
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-foreground/80">
                    Noites mal dormidas e cansaço extremo
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-foreground/80">
                    Incerteza sobre o que fazer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-foreground/80">
                    Tentativa e erro constante
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-foreground/80">
                    Frustração e desespero
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span className="text-foreground/80">
                    Impacto na saúde mental
                  </span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 bg-white border-2 border-accent">
              <h3 className="text-2xl font-bold text-accent mb-6">
                ✅ Com o Guia
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">
                    Noites mais tranquilas e descanso merecido
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">
                    Estratégias claras e práticas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">
                    Método comprovado e estruturado
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">
                    Confiança e segurança
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-foreground/80">
                    Bem-estar da família restaurado
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Seu Bebê Merece Dormir Bem
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            E você merece descansar. Não é luxo, é necessidade.
          </p>
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-3xl p-12 mb-8">
            <p className="text-5xl md:text-6xl font-bold text-accent mb-4">
              R$ 19,90
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              Um investimento pequeno para mudanças grandes na vida da sua
              família.
            </p>
            <Button
              onClick={handleBuyNow}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg font-semibold px-12 py-7 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Comprar Agora 🌙
            </Button>
          </div>
          <p className="text-sm text-foreground/70">
            ✅ Pagamento seguro • 📱 Acesso imediato • 🔒 Garantia de satisfação
            • ⚕️ Não substitui acompanhamento pediátrico
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-foreground/5 text-center text-foreground/70">
        <p className="text-sm">
          © 2024 Bons Sonhos, Pequeno. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Este conteúdo é informativo e não substitui acompanhamento pediátrico
          profissional.
        </p>
      </footer>
    </div>
  );
}
