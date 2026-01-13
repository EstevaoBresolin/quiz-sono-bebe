import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import type { ResultProfile } from "./QuizContainer";

interface QuizResultProps {
  profile: ResultProfile;
  onRetake: () => void;
}

export default function QuizResult({ profile, onRetake }: QuizResultProps) {
  const [, setLocation] = useLocation();

  const handleGoToLanding = () => {
    setLocation("/landing");
  };
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage: "url(/images/result-celebration.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl w-full">
        {/* Result Card */}
        <Card className="bg-white/97 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 animate-in slide-in-from-bottom duration-500">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{profile.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              {profile.profileName}
            </h1>
            <p className="text-lg text-accent font-semibold">
              Seu Perfil de Sono
            </p>
          </div>

          {/* Description */}
          <div className="bg-muted/30 rounded-2xl p-6 md:p-8 mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              {profile.description}
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-8 mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Pronto para transformar as noites do seu bebê?
            </h2>
            <p className="text-lg text-foreground mb-6">
              O ebook{" "}
              <span className="font-semibold text-accent">
                "Bons Sonhos, Pequeno"
              </span>{" "}
              foi criado especialmente para pais como você!
            </p>
            <p className="text-3xl font-bold text-accent mb-6">
              Apenas R$ 19,90
            </p>
            <p className="text-base text-muted-foreground mb-6">
              Guia prático, acolhedor e sem promessas milagrosas. Apenas
              estratégias que funcionam.
            </p>
            <Button
              onClick={handleGoToLanding}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Quero Noites Mais Tranquilas! 🌙
            </Button>
          </div>
          {/* Recommended Chapters */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              📚 Capítulos Recomendados do Ebook:
            </h3>
            <div className="space-y-3">
              {profile.chapters.map((chapter, index) => (
                <div
                  key={index}
                  className="bg-accent/10 border-l-4 border-accent rounded-lg p-4 flex items-start gap-3"
                >
                  <span className="text-accent font-bold text-lg flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-foreground font-medium">{chapter}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">📖</div>
              <p className="font-semibold text-foreground">12 Páginas</p>
              <p className="text-sm text-muted-foreground">
                Leitura rápida e prática
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">💡</div>
              <p className="font-semibold text-foreground">Dicas Práticas</p>
              <p className="text-sm text-muted-foreground">
                Aplicáveis desde hoje
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">❤️</div>
              <p className="font-semibold text-foreground">Acolhedor</p>
              <p className="text-sm text-muted-foreground">Sem julgamentos</p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Quer refazer o quiz e descobrir mais sobre o perfil do seu bebê?
            </p>
            <Button
              onClick={onRetake}
              variant="outline"
              size="lg"
              className="rounded-full font-semibold"
            >
              Refazer o Quiz
            </Button>
          </div>
        </Card>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/80 mb-3">
            ✅ Conteúdo baseado em boas práticas de sono infantil
          </p>
          <p className="text-sm text-white/80">
            ⚕️ Não substitui acompanhamento pediátrico
          </p>
        </div>
      </div>
    </div>
  );
}
