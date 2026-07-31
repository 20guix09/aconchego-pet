"use client";

import { useEffect, useState } from "react";

const services = [
  ["✦", "Banhos especializados", "Atendimento adaptado para cada animal, incluindo cães idosos e pets que precisam de cuidados especiais."],
  ["✂", "Tosa especializada", "Técnicas de corte e acabamento realizadas com segurança, respeitando a pelagem e a raça."],
  ["♡", "Especialidade em Golden Retriever", "Experiência no manejo, banho, escovação, hidratação e acabamento de Golden Retrievers."],
  ["⌁", "Cronograma capilar e hidratação", "Tratamentos para diminuir o ressecamento e devolver maciez e brilho à pelagem."],
  ["⚕", "Consultas de rotina", "Avaliação geral da saúde, acompanhamento e orientações cuidadosas aos tutores."],
  ["＋", "Medicina preventiva", "Acompanhamento preventivo para seu pet viver com mais saúde e qualidade de vida."],
  ["◉", "Protocolos vacinais", "Orientação e aplicação de vacinas conforme as necessidades e a fase de vida do animal."],
  ["⌾", "Controle de parasitas", "Orientações de prevenção contra pulgas, carrapatos e vermes."],
];

const reviews = [
  ["Jacqueline Martins", "Local Guide", "Sempre levo meus cães para banho e tosa. A Thais é super cuidadosa e amorosa com meus bebês. Super recomendo!"],
  ["Mariana Rigatto", "Local Guide", "Pompom, meu Spitz, foi muito bem atendido. Fizeram a tosa na tesoura com experiência e ele voltou muito cheiroso. Ainda ganhou petisco no final. Tem cartão fidelidade, adorei!"],
  ["Marley Pizaia", "", "Profissionais super dedicados. Atendem minha bebê com muito carinho, amor e cuidado. Gratidão por tudo!"],
  ["Fernanda Crocetta Schraiber", "", "Eles são muito atenciosos e gentis. Precisei de atendimento em uma emergência e não mediram esforços para ajudar. Além do profissionalismo, há o lado humano, que conta muito para mim."],
  ["Adelita Siqueira", "", "Adorei! O ambiente é organizado e as meninas são muito gentis e acolhedoras. Foi o primeiro banho da minha cachorrinha em um pet shop e foi muito tranquilo."],
  ["Thais Mascarenhas", "", "Recepção nota 1000, atendimento nota 1000 e cuidados com os pets nota 1000. Voltarei com certeza!"],
  ["Márcia Barbieri", "", "São bons profissionais, com atendimento rápido e eficaz. O ambiente é limpo e cheiroso, e todos são muito carinhosos. Nota 10!"],
  ["Gabriel Thomé", "", "Extremamente atenciosos, muito educados, valor muito bacana e meu cachorro voltou mais cheiroso do que nunca!"],
  ["Isabela Kazahaya", "", "Um lugar com atendimento muito atencioso, desde a primeira conversa pelo WhatsApp até o cuidado no banho da minha cachorrinha."],
];

const gallery = [
  ["golden-sofa.png", "Golden Retriever relaxando após os cuidados"],
  ["cachorro-preto.png", "Cachorro preto com bandana após o banho"],
  ["hero-golden.png", "Golden Retriever com bandana rosa"],
  ["spitz-branco.png", "Spitz branco bem cuidado na Aconchego Pet"],
  ["loja-interna.png", "Área interna da loja Aconchego Pet"],
  ["consultorio.png", "Consultório veterinário da Aconchego Pet"],
];

const WHATSAPP_NUMBER = "5543991557691";
const INSTAGRAM_URL = "https://www.instagram.com/aconchegopetlondrina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const navigation = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Sobre", "#sobre"],
  ["Avaliações", "#avaliacoes"],
  ["Estrutura", "#estrutura"],
  ["Localização", "#localizacao"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const openWhatsApp = (service?: string, customMessage?: string) => {
    const base = "Olá! Vim pelo site da Aconchego Pet e gostaria de agendar um atendimento para meu pet.";
    const message = customMessage || (service ? `${base} Tenho interesse em: ${service}.` : base);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className={scrolled ? "site-header scrolled" : "site-header"}>
        <a className="brand" href="#inicio" aria-label="Aconchego Pet — início">
          <img src="/assets/images/logo-principal.png" alt="Aconchego Pet" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu">
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <button className="btn btn-small" onClick={() => openWhatsApp()}>Agendar agora</button>
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">Estética animal e consultório veterinário em Londrina</span>
            <h1>O cuidado e o <em>aconchego</em> que o seu melhor amigo merece</h1>
            <p>Banho, tosa e atendimento veterinário com carinho, segurança e atenção às necessidades de cada pet.</p>
            <div className="hero-actions">
              <button className="btn" onClick={() => openWhatsApp()}>Agendar pelo WhatsApp <span>→</span></button>
              <a className="btn btn-ghost" href="#servicos">Conhecer nossos serviços</a>
            </div>
            <ul className="trust-list" aria-label="Diferenciais">
              <li>✓ Atendimento humanizado</li>
              <li>✓ Cães e gatos</li>
              <li>✓ Ambiente acolhedor</li>
              <li>★ Avaliações 5 estrelas</li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit" aria-hidden="true">♡</div>
            <img src="/assets/images/hero-golden.png" alt="Golden Retriever bem cuidado na Aconchego Pet" width="1080" height="1440" />
            <div className="floating-note"><b>Feito com carinho</b><span>para cada personalidade</span></div>
          </div>
        </section>

        <section className="services section" id="servicos">
          <div className="section-heading">
            <span className="eyebrow">Nossos cuidados</span>
            <h2>Tudo o que seu pet precisa <em>em um só lugar</em></h2>
            <p>Cuidados estéticos e veterinários realizados com atenção, experiência e muito carinho.</p>
          </div>
          <div className="category-label"><span>01</span> Estética pet</div>
          <div className="service-grid">
            {services.slice(0, 4).map(([icon, title, text]) => (
              <article className="service-card" key={title}>
                <div className="service-icon" aria-hidden="true">{icon}</div>
                <h3>{title}</h3><p>{text}</p>
                <button onClick={() => openWhatsApp(title)}>Agendar serviço <span>→</span></button>
              </article>
            ))}
          </div>
          <div className="category-label vet"><span>02</span> Consultório veterinário</div>
          <div className="service-grid">
            {services.slice(4).map(([icon, title, text]) => (
              <article className="service-card" key={title}>
                <div className="service-icon" aria-hidden="true">{icon}</div>
                <h3>{title}</h3><p>{text}</p>
                <button onClick={() => openWhatsApp(title)}>Agendar serviço <span>→</span></button>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="about-image reveal">
            <img src="/assets/images/equipe.png" alt="Equipe da Aconchego Pet no espaço de atendimento" width="1080" height="1440" loading="lazy" />
            <span>Seu pet cuidado como parte da família ♡</span>
          </div>
          <div className="about-copy">
            <span className="eyebrow">Sobre a Aconchego</span>
            <h2>Carinho que faz parte de <em>cada atendimento</em></h2>
            <p>Na Aconchego Pet, cada animal é atendido de forma individual, respeitando sua personalidade, idade e necessidades. Nosso objetivo é oferecer um ambiente seguro, organizado e acolhedor, proporcionando tranquilidade para o pet e confiança para o tutor.</p>
            <ul className="feature-list">
              <li><b>01</b><span>Atendimento humanizado</span></li>
              <li><b>02</b><span>Atenção especial a pets idosos</span></li>
              <li><b>03</b><span>Experiência com Golden Retrievers</span></li>
              <li><b>04</b><span>Ambiente limpo e confortável</span></li>
            </ul>
          </div>
        </section>

        <section className="gallery section" aria-labelledby="galeria-titulo">
          <div className="section-heading">
            <span className="eyebrow">Nosso dia a dia</span>
            <h2 id="galeria-titulo">Momentos de carinho na <em>Aconchego Pet</em></h2>
          </div>
          <div className="gallery-grid">
            {gallery.map(([file, alt], index) => (
              <button className={`gallery-item item-${index + 1}`} key={file} onClick={() => setLightbox(file)} aria-label={`Ampliar: ${alt}`}>
                <img src={`/assets/images/${file}`} alt={alt} loading="lazy" decoding="async" />
                <span>Ver foto ↗</span>
              </button>
            ))}
          </div>
        </section>

        <section className="video-section section">
          <div className="video-copy">
            <span className="eyebrow">Nos bastidores</span>
            <h2>Veja de perto <em>todo esse cuidado</em></h2>
            <p>Cada atendimento é realizado com paciência, carinho e respeito ao tempo de cada pet.</p>
            <button className="btn" onClick={() => openWhatsApp()}>Agendar pelo WhatsApp →</button>
          </div>
          <div className="phone-frame">
            <span className="phone-speaker" aria-hidden="true" />
            <video controls playsInline preload="metadata" poster="/assets/images/golden-sofa.png">
              <source src="/assets/videos/video-pet.mp4" type="video/mp4" />
              Seu navegador não oferece suporte ao vídeo.
            </video>
          </div>
        </section>

        <section className="reviews section" id="avaliacoes">
          <div className="section-heading">
            <span className="eyebrow">Histórias reais</span>
            <h2>Quem conhece, <em>recomenda</em></h2>
            <p>Avaliações 5 estrelas de tutores que confiam na Aconchego Pet.</p>
          </div>
          <div
            className="review-stage"
            aria-live="polite"
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const distance = event.changedTouches[0].clientX - touchStart;
              if (Math.abs(distance) > 45) {
                setReviewIndex((reviewIndex + (distance < 0 ? 1 : -1) + reviews.length) % reviews.length);
              }
              setTouchStart(null);
            }}
          >
            <article className="review-card" key={reviewIndex}>
              <div className="review-stars" aria-label="5 estrelas">★★★★★</div>
              <blockquote>“{reviews[reviewIndex][2]}”</blockquote>
              <div className="review-person">
                <span>{reviews[reviewIndex][0][0]}</span>
                <div><b>{reviews[reviewIndex][0]}</b>{reviews[reviewIndex][1] && <small>{reviews[reviewIndex][1]}</small>}</div>
              </div>
            </article>
            <div className="review-controls">
              <button onClick={() => setReviewIndex((current) => (current - 1 + reviews.length) % reviews.length)} aria-label="Avaliação anterior">←</button>
              <div>{reviews.map((_, i) => <button key={i} className={i === reviewIndex ? "active" : ""} onClick={() => setReviewIndex(i)} aria-label={`Ver avaliação ${i + 1}`} />)}</div>
              <button onClick={() => setReviewIndex((current) => (current + 1) % reviews.length)} aria-label="Próxima avaliação">→</button>
            </div>
          </div>
        </section>

        <section className="structure section" id="estrutura">
          <div className="section-heading">
            <span className="eyebrow">Nossa estrutura</span>
            <h2>Um espaço preparado para <em>receber seu pet</em></h2>
          </div>
          <div className="structure-grid">
            <article>
              <img src="/assets/images/loja-interna.png" alt="Loja e espaço de atendimento da Aconchego Pet" loading="lazy" />
              <div><span>01</span><h3>Loja e espaço de atendimento</h3><p>Um ambiente organizado, acolhedor e com produtos selecionados para o bem-estar dos animais.</p></div>
            </article>
            <article>
              <img src="/assets/images/consultorio.png" alt="Consultório veterinário limpo e equipado" loading="lazy" />
              <div><span>02</span><h3>Consultório veterinário</h3><p>Um espaço limpo e estruturado para consultas, avaliações e cuidados preventivos.</p></div>
            </article>
          </div>
        </section>

        <section className="contact section" id="localizacao">
          <div className="contact-card">
            <div className="contact-copy">
              <span className="eyebrow">Venha nos visitar</span>
              <h2>Estamos esperando por <em>você e seu pet</em></h2>
              <h3>Aconchego Pet</h3>
              <p>Estética Animal e Consultório Veterinário<br />Avenida São João, 758<br />Londrina — Paraná</p>
              <p className="schedule">Consulte os horários disponíveis pelo WhatsApp.</p>
              <a className="phone-contact" href="tel:+5543991557691"><span>✆</span> (43) 99155-7691</a>
              <div className="quick-messages" aria-label="Mensagens rápidas">
                <button onClick={() => openWhatsApp(undefined, "Olá! Vim pelo site da Aconchego Pet e gostaria de agendar banho e tosa para meu pet.")}>Agendar banho e tosa</button>
                <button onClick={() => openWhatsApp(undefined, "Olá! Vim pelo site da Aconchego Pet e gostaria de agendar uma consulta veterinária para meu pet.")}>Agendar consulta</button>
                <button onClick={() => openWhatsApp(undefined, "Olá! Vim pelo site da Aconchego Pet e gostaria de tirar uma dúvida sobre os serviços.")}>Tirar uma dúvida</button>
              </div>
              <div className="hero-actions">
                <a className="btn btn-ghost" href="https://www.google.com/maps/search/?api=1&query=Avenida+São+João+758+Londrina+Paraná" target="_blank" rel="noreferrer">Abrir no Google Maps</a>
                <button className="btn" onClick={() => openWhatsApp()}>Agendar pelo WhatsApp</button>
              </div>
              <a className="instagram-button" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">◎ Acompanhar no Instagram</a>
            </div>
            <iframe title="Mapa da Aconchego Pet em Londrina" loading="lazy" src="https://www.google.com/maps?q=Avenida%20S%C3%A3o%20Jo%C3%A3o%2C%20758%2C%20Londrina%2C%20Paran%C3%A1&output=embed" />
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-brand"><img src="/assets/images/logo-principal.png" alt="Aconchego Pet" /><p>Estética Animal e Consultório Veterinário</p></div>
        <div><b>Links rápidos</b><a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#sobre">Sobre</a><a href="#localizacao">Localização</a></div>
        <div><b>Contato</b><p>Avenida São João, 758<br />Londrina — Paraná</p><a href="tel:+5543991557691">(43) 99155-7691</a><button onClick={() => openWhatsApp()}>Falar pelo WhatsApp →</button><a className="footer-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">◎ Instagram</a></div>
        <p className="footer-bottom">© {new Date().getFullYear()} Aconchego Pet. Feito com carinho para quem cuida com amor. <span>Site criado por <b>GM Web Studio</b>.</span></p>
      </footer>
      <button className="whatsapp-float" onClick={() => openWhatsApp()} aria-label="Agendar atendimento pelo WhatsApp"><i aria-hidden="true">✆</i><span>Agendar</span></button>
      <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Voltar ao topo">↑</button>
      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} aria-label="Fechar imagem">×</button>
          <img src={`/assets/images/${lightbox}`} alt="" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  );
}
