const caixaPrincipal = document.querySelector(".caixa-pricipal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [

    {
        enunciado: "Assim que saiu do colégio vocẽ se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início eu ficaria com medo do que essa tecnologia pode fazer."

            },
            {
                texto:"Isso é incrível",
                afirmacao:"Sempre quis saber como uma AI é em seu dia a dia."
            }
        ]

    }
]
