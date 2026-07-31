import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aconchego Pet | Estética Animal e Veterinário em Londrina",
  description: "Banho, tosa, hidratação, consultas e cuidados veterinários em Londrina. Atendimento humanizado para cães e gatos na Aconchego Pet.",
  metadataBase: new URL("https://aconchego-pet-londrina.example.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aconchego Pet | Cuidado animal em Londrina",
    description: "Estética animal e consultório veterinário com atendimento humanizado.",
    locale: "pt_BR",
    type: "website",
    images: ["/assets/images/hero-golden.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aconchego Pet | Cuidado animal em Londrina",
    description: "Estética animal e consultório veterinário com atendimento humanizado.",
    images: ["/assets/images/hero-golden.png"],
  },
  icons: {
    icon: "/assets/images/favicon.png",
    shortcut: "/assets/images/favicon.png",
  },
  themeColor: "#315F54",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Aconchego Pet",
  description: "Estética Animal e Consultório Veterinário",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida São João, 758",
    addressLocality: "Londrina",
    addressRegion: "Paraná",
    addressCountry: "BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
