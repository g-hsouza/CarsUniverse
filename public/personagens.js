const personagens = {

    mcqueen: {
        imagem: "assets/imgs/Mcqueen.png",
        nome: "Relâmpago McQueen",
        descricao: "Relâmpago McQueen é um carro de corrida talentoso, confiante e competitivo. Ao longo de sua jornada, aprende que a amizade, a humildade e o trabalho em equipe são tão importantes quanto cruzar a linha de chegada em primeiro lugar.",
        modelo: "Chevrolet Corvette C6",
        filme: "Carros",
        personalidade: "Competitivo, determinado e confiante",
    },

    mate: {
    imagem: "assets/imgs/Mater.png",
    nome: "Mate",
    descricao: "Mate é um caminhão-guincho enferrujado, divertido e de bom coração. Melhor amigo de Relâmpago McQueen, está sempre disposto a ajudar e encara qualquer situação com espontaneidade. Sua lealdade e seu jeito descontraído mostram que a verdadeira amizade vai muito além das aparências.",
    modelo: "Inspirado em um caminhão-guincho International Harvester",
    filme: "Carros",
    personalidade: "Leal, divertido e prestativo",
    },

    sally: {
    imagem: "assets/imgs/Sally.png",
    nome: "Sally Carrera",
    descricao: "Sally é uma Porsche que deixou a vida agitada da Califórnia para recomeçar em Radiator Springs. Inteligente, independente e carismática, trabalha como advogada e acredita no potencial da pequena cidade. Ela ajuda McQueen a perceber que existe muito mais na vida do que fama e velocidade.",
    modelo: "Porsche 911 Carrera",
    filme: "Carros",
    personalidade: "Inteligente, independente e carismática",
    },

    hudsonHornet: {
    imagem: "assets/imgs/Doc.png",
    nome: "Doc Hudson",
    descricao: "Doc Hudson é um respeitado morador de Radiator Springs que esconde um passado glorioso nas pistas de corrida. Conhecido como o Fabuloso Hudson Hornet, foi um grande campeão da Copa Pistão. Inicialmente reservado e exigente, torna-se um mentor importante para McQueen, ensinando-lhe o valor da disciplina, da humildade e da experiência.",
    modelo: "Hudson Hornet (1951)",
    filme: "Carros",
    personalidade: "Reservado, sábio e exigente",
    },

    luigi: {
    imagem: "assets/imgs/Luigi.png",
    nome: "Luigi",
    descricao: "Luigi é um simpático carro italiano que administra uma loja de pneus em Radiator Springs. Apaixonado por Ferraris, demonstra entusiasmo sempre que o assunto envolve corridas e automobilismo. Ao lado de seu inseparável amigo Guido, oferece apoio a McQueen e mostra que a paixão por carros pode unir pessoas de diferentes lugares.",
    modelo: "Fiat 500 (1959)",
    filme: "Carros",
    personalidade: "Entusiasmado, amigável e apaixonado por carros",
    },

    guido: {
    imagem: "assets/imgs/Guido.png",
    nome: "Guido",
    descricao: "Guido é uma pequena empilhadeira italiana e o melhor amigo de Luigi. Apesar de seu tamanho, possui habilidades extraordinárias na troca de pneus e sonha em participar de um grande momento nas pistas. Silencioso e determinado, conquista a todos com sua eficiência e demonstra que talento não depende de tamanho.",
    modelo: "Empilhadeira inspirada na BMW Isetta",
    filme: "Carros",
    personalidade: "Determinado, habilidoso e dedicado",
    },

    rei: {
    imagem: "assets/imgs/Rei.png",
    nome: "O Rei",
    descricao: "Strip Weathers, conhecido como O Rei, é uma lenda das corridas e um dos competidores mais respeitados da Copa Pistão. Experiente, humilde e esportivo, encara as competições com profissionalismo e valoriza o respeito entre os pilotos. Sua trajetória representa a experiência de um campeão que está próximo de encerrar uma carreira brilhante.",
    modelo: "Plymouth Superbird (1970)",
    filme: "Carros",
    personalidade: "Experiente, humilde e esportivo",
    },

    chick: {
    imagem: "assets/imgs/hicks.png",
    nome: "Chick Hicks",
    descricao: "Chick Hicks é um piloto competitivo que deseja conquistar a Copa Pistão a qualquer custo. Obcecado por vencer e superar seus rivais, frequentemente recorre a atitudes desleais para obter vantagem. Sua rivalidade com McQueen evidencia a diferença entre buscar a vitória a qualquer preço e competir com respeito.",
    modelo: "Buick Regal Grand National",
    filme: "Carros",
    personalidade: "Arrogante, ambicioso e desleal",
    },

    finn: {
    imagem: "assets/imgs/Mcmissile.png",
    nome: "Finn McMissile",
    descricao: "Finn McMissile é um espião britânico experiente, conhecido por sua inteligência, elegância e capacidade de escapar de situações perigosas. Equipado com tecnologias avançadas, investiga uma conspiração internacional durante o Grande Prêmio Mundial. Sua habilidade estratégica e coragem fazem dele um agente fundamental na missão.",
    modelo: "Peerless GT, com referências ao Aston Martin DB5",
    filme: "Carros 2",
    personalidade: "Inteligente, elegante e corajoso",
    },

    holley: {
    imagem: "assets/imgs/Holley.png",
    nome: "Holley Shiftwell",
    descricao: "Holley Shiftwell é uma agente britânica inteligente e tecnológica que trabalha no serviço de inteligência. Embora inicialmente atue em funções de escritório, acaba envolvida em uma missão de campo ao lado de Finn McMissile e Mate. Com equipamentos sofisticados e raciocínio rápido, demonstra que competência e coragem podem superar a inexperiência.",
    modelo: "TVR Tuscan S, com possíveis referências a outros esportivos britânicos",
    filme: "Carros 2",
    personalidade: "Inteligente, observadora e tecnológica",
    },

    cruz: {
    imagem: "assets/imgs/Cruz.png",
    nome: "Cruz Ramirez",
    descricao: "Cruz Ramirez é uma treinadora dedicada que trabalha no centro de treinamento da equipe Rust-eze. Apesar de possuir grande talento e paixão pelas corridas, inicialmente acredita que seu lugar não é nas pistas. Ao conhecer McQueen, descobre seu próprio potencial e aprende a confiar em suas habilidades, mostrando que nunca é tarde para perseguir um sonho.",
    modelo: "Toyota 86 / Scion FR-S, com elementos do Honda Civic Del Sol",
    filme: "Carros 3",
    personalidade: "Otimista, determinada e talentosa",
    },  

    storm: {
    imagem: "assets/imgs/Storm.png",
    nome: "Jackson Storm",
    descricao: "Jackson Storm é um piloto da nova geração que utiliza tecnologia avançada e treinamento moderno para dominar as pistas. Extremamente rápido e confiante, acredita que os métodos tradicionais estão ultrapassados. Sua chegada representa um desafio para McQueen e levanta uma questão importante: como a experiência pode se adaptar à evolução constante do automobilismo?",
    modelo: "Carro de corrida fictício da nova geração da Copa Pistão",
    filme: "Carros 3",
    personalidade: "Cadillac Cien Concept (2002)",
    },

}