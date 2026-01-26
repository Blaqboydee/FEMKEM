import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

interface CTAProps {
  title?: string;
  description?: string;
}

export default function CTA({ 
  title = "Ready to Start Your Hydroponic Journey?",
  description = "Contact us today to discuss your hydroponic system requirements and get a free consultation."
}: CTAProps) {
  return (
    <Section backgroundColor="accent">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
          {title}
        </h2>
        <p className="text-lg text-[#555555] mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
          <Button href="https://wa.me/234XXXXXXXXXX" variant="outline">
            WhatsApp Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
