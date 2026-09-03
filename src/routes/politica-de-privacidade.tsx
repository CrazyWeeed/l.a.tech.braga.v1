import { createFileRoute } from "@tanstack/react-router";
import { createSeoHead, SITE_URL } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Política de Privacidade | L.A. Tech Braga";
const description =
  "Como a L.A. Tech Braga recolhe, utiliza e protege os dados pessoais recolhidos através deste site.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    ...createSeoHead({
      title,
      description,
      canonical: `${SITE_URL}/politica-de-privacidade`,
    }),
  }),
  component: PoliticaDePrivacidade,
});

function PoliticaDePrivacidade() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de Privacidade"
      updatedAt="2 de setembro de 2026"
    >
      <p>
        Esta página explica como a L.A. Tech Braga trata os dados pessoais recolhidos
        através do site <strong>la-tech.pt</strong>, em conformidade com o Regulamento
        Geral sobre a Proteção de Dados (RGPD).
      </p>

      <section>
        <h2>1. Responsável pelo tratamento dos dados</h2>
        <p>
          O responsável pelo tratamento dos dados recolhidos através deste site é a
          L.A. Tech Braga, atividade de assistência informática.
        </p>
        <ul>
          <li>
            <strong>Contacto:</strong>{" "}
            <a href="tel:+351934587555">+351 934 587 555</a>
          </li>
          <li>
            <strong>Contacto para questões de privacidade/RGPD:</strong> através do
            mesmo número, por chamada ou WhatsApp.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Dados recolhidos através do formulário de orçamento</h2>
        <p>Ao preencher o formulário de pedido de assistência, podemos recolher:</p>
        <ul>
          <li>Nome;</li>
          <li>Número de telefone;</li>
          <li>Localidade (opcional);</li>
          <li>Descrição do problema técnico reportado.</li>
        </ul>
        <p>
          Estes dados são enviados diretamente para o WhatsApp do prestador de serviço,
          não sendo armazenados numa base de dados própria deste site.
        </p>
      </section>

      <section>
        <h2>3. Finalidade do tratamento</h2>
        <p>
          Os dados recolhidos através do formulário destinam-se exclusivamente a
          responder ao pedido de assistência técnica submetido, permitindo o contacto
          e o acompanhamento do serviço solicitado.
        </p>
      </section>

      <section>
        <h2>4. Base legal</h2>
        <p>
          O tratamento dos dados do formulário de orçamento tem por base a execução de
          diligências pré-contratuais a pedido do titular dos dados, nos termos da
          alínea b) do artigo 6.º, n.º 1 do RGPD.
        </p>
        <p>
          O tratamento de dados através de cookies de análise e marketing tem por base
          o consentimento do utilizador, nos termos da alínea a) do artigo 6.º, n.º 1
          do RGPD, prestado através do banner de cookies apresentado no site.
        </p>
      </section>

      <section>
        <h2>5. Armazenamento e segurança dos dados</h2>
        <p>
          Os dados do formulário não são guardados numa base de dados própria deste
          site. Ficam apenas no histórico de conversa do WhatsApp associado ao número
          de contacto do prestador, uma aplicação de terceiros (WhatsApp/Meta
          Platforms Ireland Limited) com as suas próprias medidas de segurança e
          encriptação.
        </p>
      </section>

      <section>
        <h2>6. Prazo de conservação</h2>
        <p>
          Os dados ficam conservados no histórico do WhatsApp enquanto isso for útil
          para o acompanhamento do serviço solicitado, podendo o titular pedir a sua
          eliminação a qualquer momento, nos termos da secção 7.
        </p>
      </section>

      <section>
        <h2>7. Direitos do titular dos dados</h2>
        <p>Nos termos do RGPD, tem direito a:</p>
        <ul>
          <li>Aceder aos seus dados pessoais;</li>
          <li>Solicitar a retificação de dados incorretos ou incompletos;</li>
          <li>Solicitar o apagamento dos seus dados;</li>
          <li>Solicitar a limitação do tratamento;</li>
          <li>Opor-se ao tratamento;</li>
          <li>Solicitar a portabilidade dos dados;</li>
          <li>Retirar o consentimento a qualquer momento, sem afetar a licitude do tratamento realizado antes dessa retirada.</li>
        </ul>
      </section>

      <section>
        <h2>8. Como exercer estes direitos</h2>
        <p>
          Para exercer qualquer um destes direitos, contacte-nos através de{" "}
          <a href="tel:+351934587555">+351 934 587 555</a> (chamada ou WhatsApp).
        </p>
        <p>
          Tem também o direito de apresentar reclamação junto da Comissão Nacional de
          Proteção de Dados (CNPD), autoridade de controlo em Portugal.
        </p>
      </section>

      <section>
        <h2>9. Utilização de cookies</h2>
        <p>
          Este site utiliza cookies. Para mais informação sobre que cookies são
          utilizados e para que finalidade, consulte a nossa{" "}
          <a href="/politica-de-cookies">Política de Cookies</a>.
        </p>
      </section>

      <section>
        <h2>10. Google Analytics</h2>
        <p>
          Quando o utilizador dá consentimento para cookies de análise, este site pode
          utilizar o Google Analytics 4, um serviço de análise de tráfego fornecido
          pela Google Ireland Limited. Esta ferramenta recolhe dados estatísticos e
          anónimos sobre a navegação — por exemplo, quantas pessoas visitam o site,
          que páginas veem, de onde vêm e quanto tempo ficam — para perceber como o
          site é utilizado e onde pode ser melhorado. Não é usada para fins
          publicitários. O Google Analytics só é ativado após consentimento
          explícito, através do Google Consent Mode.
        </p>
      </section>

      <section>
        <h2>11. Meta Pixel</h2>
        <p>
          Quando o utilizador dá consentimento para cookies de marketing, este site
          pode utilizar o Meta Pixel, uma ferramenta fornecida pela Meta Platforms
          Ireland Limited. Ao contrário do Google Analytics, o Meta Pixel tem uma
          finalidade publicitária: mede o resultado de eventuais campanhas de
          anúncios no Facebook e Instagram (por exemplo, se uma visita ao site veio de
          um anúncio) e pode ser usado para criar públicos personalizados ou
          semelhantes, de forma a mostrar anúncios deste negócio a pessoas que já
          visitaram o site ou com perfil parecido. O Meta Pixel só é ativado após
          consentimento explícito para cookies de marketing, e é possível recusar
          apenas esta categoria sem afetar a navegação no site.
        </p>
      </section>

      <section>
        <h2>12. Destinatários e subcontratantes</h2>
        <p>
          Os únicos destinatários dos dados do formulário são o próprio prestador de
          serviço e o WhatsApp (Meta Platforms Ireland Limited), enquanto aplicação
          usada para comunicação com os clientes. Não são vendidos, cedidos ou
          partilhados com mais ninguém.
        </p>
      </section>
    </LegalPage>
  );
}
