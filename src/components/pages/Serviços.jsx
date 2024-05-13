import React from 'react'
import { CardProdutos } from '../CardProdutos'
import serve6 from "c:/Users/wemer/OneDrive/Documentos/Projetos/projeto-web/matrixBase/src/components/imgs/serve1.png"
import serve from "c:/Users/wemer/OneDrive/Documentos/Projetos/projeto-web/matrixBase/src/components/imgs/serve6.png"
import serve7 from "c:/Users/wemer/OneDrive/Documentos/Projetos/projeto-web/matrixBase/src/components/imgs/serve3.png"
import serve8 from "c:/Users/wemer/OneDrive/Documentos/Projetos/projeto-web/matrixBase/src/components/imgs/server7.png"
import serve3 from "c:/Users/wemer/OneDrive/Documentos/Projetos/projeto-web/matrixBase/src/components/imgs/server8.png"
import vpn from "c:/Users/wemer/OneDrive/Documentos/Projetos/projeto-web/matrixBase/src/components/imgs/vpn.png"
export const Serviços = () => {
  return (
    <main>
      <section className='flex justify-center'>
       <h1 className='font-medium text-4xl border-l-8 border-green-800 text-black pl-2 m-20'>Serviços</h1>
      </section>
      <section className='grid sm:grid-cols-3 gap-4 sm:gap-20 sm:p-10 p-4 '>
         <CardProdutos img={vpn} grafo=" Proteja sua privacidade online com nossa VPN premium! Navegue na internet de forma segura e anônima, onde quer que esteja. Com nossa tecnologia de ponta, você pode acessar conteúdos bloqueados geograficamente e manter suas informações pessoais protegidas contra hackers e bisbilhoteiros."/>
         <CardProdutos img={serve6} grafo="Experimente o poder da hospedagem de servidores em nosso datacenter de última geração. Oferecemos um ambiente seguro e confiável para hospedar seus servidores, com redundância de energia, refrigeração eficiente e acesso físico restrito para garantir a integridade dos seus sistemas."/>
         <CardProdutos img={serve} grafo="Liberte-se das limitações físicas de armazenamento com nossa solução de armazenamento em nuvem altamente escalável e segura. Com acesso instantâneo aos seus dados de qualquer lugar do mundo, você pode armazenar, compartilhar e acessar arquivos com facilidade e tranquilidade."/>
         <CardProdutos img={serve3} grafo="Proteja seus dados mais preciosos com nossos serviços de backup e recuperação de última geração. Implementamos estratégias de backup automatizadas e redundantes para garantir a disponibilidade contínua dos seus dados, mesmo em caso de falhas de hardware ou desastres naturais."/>
         <CardProdutos img={serve7} grafo="Conecte-se com confiança e velocidade através de nossos serviços de rede premium. Nossa infraestrutura de rede de alta capacidade e baixa latência oferece conectividade rápida e confiável para atender às suas necessidades de comunicação e colaboração. Com uma equipe dedicada monitorando proativamente o desempenho da rede."/>
         <CardProdutos img={serve8} grafo="Proteja seus dados contra ameaças cibernéticas com nossos serviços abrangentes de segurança da informação. Desde firewalls avançados até detecção de intrusão em tempo real, implementamos as mais recentes tecnologias e melhores práticas de segurança para manter seus dados seguros e sua rede protegida contra ataques maliciosos. "/>
    
    </section>
     
    </main>
  )
}
