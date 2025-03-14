//index about

import { MainAbout, MainText, TopicTitles, DivText, Title, CommonText  } from "./styles";


export default function Layout(){
    return(
        <MainAbout>
            <Title> Saudações!</Title>
            <DivText>
                <MainText>
                Eu sou Guilherme G. Becker, estudante de Ciências da Computação 
                e estou começando minha jornada como desenvolvedor, 
                atualmente morando em Ijuí - RS, Brasil.
                </MainText>
                <TopicTitles>Experiência</TopicTitles>
                <CommonText><b>Lumiun</b>,  uma startup de segurança e tecnologia, 
                    trabalhei como suporte técnico e Customer Success (CS) por quase um ano, 
                    aonde aprendi muito sobre redes, 
                    principalmente sobre a camada de aplicação voltada ao DNS e também sobre as camadas de redes e de transporte, 
                    conhecimento necessários para auxiliar todos os clientes e parceiros da empresa. 
                    </CommonText>
                <CommonText><b>Compass UOL</b>, durante 6 meses participei do programa de bolsas voltado para desenvolvimento fullstack de e-commerces, 
                    neste tempo aprendi linguagens de programação como, 
                    JavaScript e TypeScript para  o desenvolvimento de aplicações de vendas e ainda me adaptei ao dia-a-dia de um desenvolvedor 
                    participando ativamente das reuniões diárias e até mesmo coordenando algumas e realizando entregas de projetos e trabalhos 
                    de acordo com o solicitado. 
                    </CommonText>
                <TopicTitles>Offline</TopicTitles>
                <CommonText>Quando não estou estudando ou escrevendo códigos, 
                    aproveito para olhar algumas séries ou filmes e passar um tempo com minha família e amigos. 
                </CommonText>
            </DivText>
        </MainAbout> 

    );
};




export{}