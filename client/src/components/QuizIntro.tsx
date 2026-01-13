import { Button } from '@/components/ui/button';

interface QuizIntroProps {
  onStart: () => void;
}

export default function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4"
      style={{
        backgroundImage: 'url(/images/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-2xl w-full">
        <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Qual o Perfil de Sono do Seu Bebê?
            </h1>
            <p className="text-lg text-muted-foreground">
              Descubra como o ebook <span className="font-semibold text-accent">"Bons Sonhos, Pequeno"</span> pode te ajudar!
            </p>
          </div>

          {/* Illustration */}
          <div className="mb-8">
            <img
              src="/images/baby-sleeping-illustration.png"
              alt="Bebê dormindo"
              className="w-48 h-48 mx-auto object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Description */}
          <div className="mb-8 space-y-4">
            <p className="text-base text-foreground leading-relaxed">
              Mães e pais, sabemos que o sono do bebê é um mistério! Cada pequeno tem seu próprio ritmo, mas entender o perfil de sono do seu filho é o primeiro passo para noites mais tranquilas.
            </p>
            <p className="text-base text-foreground leading-relaxed">
              Responda a estas 5 perguntas rápidas e descubra como o nosso ebook pode te guiar para um descanso merecido!
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex gap-4 flex-col sm:flex-row justify-center">
            <Button
              onClick={onStart}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Começar o Quiz 🌙
            </Button>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-muted-foreground mt-8">
            ⏱️ Leva apenas 2 minutos para descobrir!
          </p>
        </div>
      </div>
    </div>
  );
}
