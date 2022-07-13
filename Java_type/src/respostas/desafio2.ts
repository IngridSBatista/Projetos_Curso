

enum job{
    Atriz,
    Padeiro
}

interface pessoas{
    nome: String,
    idade: Number,
    profissao: job
}

let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: job.Atriz
}

let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: job.Padeiro
}

let pessoa3 = {
    nome: "Laura",
    idade: "32",
    profissao: job.Atriz
};

let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: job.Padeiro
}
