import { createFileRoute } from "@tanstack/react-router";
import { createSeoHead, SITE_URL } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";
import { openCookiePreferences } from "@/lib/consent";

const title = "Política de Cookies | L.A. Tech Braga";
const description =
  "Que cookies são utilizados no site da L.A. Tech Braga, para que servem e como pode alterar a sua escolha.";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    ...createSeoHead({
      title,
      description,
      canonical: `${SITE_URL}/politica-de-cookies`,
    }),
  }),
  component: PoliticaDeCookies,
});

function PoliticaDeCookies() {
  return (
    <LegalPage eyebrow="Legal" title="Política de Cookies" updatedAt="2 de setembro de 2026">
      <p>
        Um cookie é um pequeno ficheiro guardado no seu dispositivo quando visita um
        site. Este site utiliza cookies para funcionar corretamente e, apenas com o
        seu consentimento, para analisar o tráfego e medir campanhas.
      </p>

      <section>
        <h2>Cookies necessários</h2>
        <p>
          Essenciais para o funcionamento do site (por exemplo, para guardar a sua
          escolha sobre cookies). Não podem ser desativados e não dependem de
          consentimento, por não recolherem dados para fins de análise ou marketing.
        </p>
      </section>

      <section>
        <h2>Cookies de análise (Google Analytics)</h2>
        <p>
          Usados apenas se aceitar, através do Google Analytics 4, para perceber
          quantas pessoas visitam o site, que páginas veem e como chegam até nós —
          dados estatísticos e anónimos, usados só para melhorar o site. Não servem
          para fins publicitários. Só são ativados depois de o utilizador clicar em
          "Aceitar" no banner de cookies.
        </p>
      </section>

      <section>
        <h2>Cookies de marketing (Meta Pixel)</h2>
        <p>
          Usados apenas se aceitar, através do Meta Pixel. Ao contrário dos cookies de
          análise, estes têm finalidade publicitária: medem o resultado de eventuais
          campanhas de anúncios no Facebook e Instagram e podem ser usados para
          mostrar anúncios deste negócio a quem já visitou o site. Só são ativados
          depois de o utilizador clicar em "Aceitar" no banner de cookies, e podem ser
          recusados sem afetar o funcionamento do site.
        </p>
      </section>

      <section>
        <h2>Como alterar ou retirar o seu consentimento</h2>
        <p>
          Pode alterar a sua escolha a qualquer momento através do link{" "}
          <button
            type="button"
            onClick={openCookiePreferences}
            className="underline underline-offset-[3px]"
            style={{ color: "var(--color-ignition)" }}
          >
            "Preferências de cookies"
          </button>{" "}
          disponível no rodapé do site, ou apagando os cookies diretamente nas
          definições do seu navegador.
        </p>
      </section>
    </LegalPage>
  );
}
