import Header from "./Header";
import Headline from "./Headline";

export default function Home() {
  return (
    <>
      <header className="w-full">
        <Header />
      </header>
      <main className="">
        <div className="flex flex-col justify-center items-center h-screen bg-[#101010]">
          <Headline />
        </div>

        <div className="bg-white p-12 max-w-7xl mx-auto">
          <h1>
            O que significa Lorem ipsum? Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso
            bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável
            com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido. É uma seqüência de
            palavras latinas que, como estão posicionadas, não formem frases com um sentido completo, mas dão vida a um
            texto de teste útil para preencher espaços que irão Posteriormente serão ocupados a partir de textos ad hoc
            compostos por profissionais de comunicação. É certamente o texto de marcador de posição mais famoso , mesmo
            que existam diferentes versões distinguíveis da ordem em que as palavras latinas são repetidas. Lorem ipsum
            contém as tipos de letra mais em uso, um aspecto que permite que você tenha uma visão geral da renderização
            do texto em termos de escolha da fonte e tamanho da fonte . Ao se referir a Lorem ipsum, diferentes
            expressões são usadas, nomeadamente texto de preenchimento , texto fictício , texto cego ou texto do espaço
            reservado: em suma, seu significado também pode ser zero, mas sua utilidade é tão clara quanto ao longo dos
            séculos e resiste às versões irônicas e modernas que vieram com a chegada da web. A versão mais usada do
            Lorem Ipsum « Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. » O gerador de texto Lorem Ipsum é SEO-proof! Com a nossa
            ferramenta de geração de texto de preenchimento, além de personalizar o texto com elementos HTML, você tem a
            possibilidade de criar um novo começando diretamente do seu texto! Desta forma, você evitará indexar o site
            com as palavras-chave contidas no clássico Lorem Ipsum.
          </h1>
        </div>
      </main>

      <template></template>
    </>
  );
}
