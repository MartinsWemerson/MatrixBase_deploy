import React from 'react'
import { CardServiços } from '../CardServiços'
import Principal from "c:/Users/wemer/OneDrive/Documentos/Projetos/projeto-web/matrixBase/src/components/imgs/principal50.jpg"
import serve1 from "c:/Users/wemer/OneDrive/Documentos/Projetos/projeto-web/matrixBase/src/components/imgs/serve1.png"
import serve2 from "c:/Users/wemer/OneDrive/Documentos/Projetos/projeto-web/matrixBase/src/components/imgs/serve2.png"
import serve3 from "c:/Users/wemer/OneDrive/Documentos/Projetos/projeto-web/matrixBase/src/components/imgs/serve4.png"
export const Home = () => {
  return (
    <main>
      <section>
        <section>
         <img src={Principal} alt="servideos" title='Centro de Servidores' className='w-full h-full'  />
          <h1 className='  bg-green-500 text-white p-5 text-bold   font-medium text-center max-sm:text-justify max-sm:text-xs max-sm:p-4  '>Seja bem-vindo à <strong >Matrix Base</strong>, onde a excelência em servidores encontra seu ponto de convergência, oferecendo soluções confiáveis e inovadoras para potencializar o seu negócio no mundo digital.</h1>
        </section>
        <CardServiços to={"/serviços"} img={serve1} butao="Saiba mais" title='Soluções de Big Data' description="Uma das principais ofertas é a capacidade de coletar, armazenar e processar grandes quantidades de dados de diferentes fontes, incluindo redes sociais, dispositivos IoT, transações online e muito mais. Isso permite uma visão holística das operações e do comportamento do cliente."/>
        <CardServiços to={"/serviços"} img={serve2} butao="Saiba mais" title="Administração de Banco de Dados" description='Gerenciamento contínuo de bancos de dados, incluindo monitoramento de desempenho, ajuste de configuração, backup e recuperação de dados, e aplicação de patches de segurança.'/>
        <CardServiços to={"/contato"} img={serve3} butao="Contato" title="Segurança e Privacidade de Dados" description="Priorizamos a segurança e a privacidade de seus dados em todos os aspectos de nossos serviços. Implementamos as mais recentes práticas e protocolos de segurança para garantir a integridade de suas informações e cumprir os mais altos padrões de conformidade regulatória."/>
      </section>
    </main>
  )
}
