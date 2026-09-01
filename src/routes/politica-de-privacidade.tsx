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
    meta: [{ name: "robots", content: "index,follow" }],
  }),
  component: PoliticaDePrivacidade,
});

function PoliticaDePrivacidade() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de Privacidade"
      updatedAt="[DATA A PREENCHER]"
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
          L.A. Tech Braga.
        </p>
        <ul>
          <li>
            <strong>Denominação/entidade legal:</strong> [A PREENCHER — ex.: nome
            completo do titular ou firma da empresa]
          </li>
          <li>
            <strong>NIF:</strong> [A PREENCHER]
          </li>
          <li>
            <strong>Morada:</strong> [A PREENCHER]
          </li>
          <li>
            <strong>Contacto:</strong>{" "}
            <a href="tel:+351934587555">+351 934 587 555</a>
          </li>
          <li>
            <strong>Contacto para questões de privacidade/RGPD:</strong> [A PREENCHER —
            e-mail ou outro meio de contacto dedicado]
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
          [A PREENCHER — descreva aqui, de forma verdadeira, onde e como os dados são
          efetivamente guardados (ex.: histórico de conversas do WhatsApp Business) e
          que medidas de segurança são aplicadas.]
        </p>
      </section>

      <section>
        <h2>6. Prazo de conservação</h2>
        <p>
          [A PREENCHER — indique durante quanto tempo os dados de contacto são
          conservados, quando esse prazo puder ser definido.]
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
          <a href="tel:+351934587555">+351 934 587 555</a> ou [A PREENCHER — outro
          canal de contacto dedicado, ex.: e-mail].
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
          pela Google Ireland Limited, para compreender como os visitantes utilizam o
          site. O Google Analytics só é ativado após consentimento explícito, através
          do Google Consent Mode.
        </p>
      </section>

      <section>
        <h2>11. Meta Pixel</h2>
        <p>
          Quando o utilizador dá consentimento para cookies de marketing, este site
          pode utilizar o Meta Pixel, uma ferramenta fornecida pela Meta Platforms
          Ireland Limited, para medir a eficácia de campanhas publicitárias. O Meta
          Pixel só é ativado após consentimento explícito.
        </p>
      </section>

      <section>
        <h2>12. Destinatários e subcontratantes</h2>
        <p>
          [A PREENCHER — se aplicável, identifique aqui fornecedores/subcontratantes
          que possam ter acesso aos dados (ex.: WhatsApp/Meta como plataforma de
          comunicação, alojamento do site, etc.).]
        </p>
      </section>
    </LegalPage>
  );
}
