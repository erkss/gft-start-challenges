class Heroi
{
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
const heroi1 = new Heroi('Gandalf', 150, 'mago');
const heroi2 = new Heroi('Conan', 35, 'guerreiro');
const heroi3 = new Heroi('Ryu', 29, 'monge');
const heroi4 = new Heroi('Shinobi', 25, 'ninja');
const heroi5 = new Heroi('Kratos', 1000, 'deus');

heroi1.atacar(); // O mago atacou usando magia
heroi2.atacar(); // O guerreiro atacou usando espada
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken
heroi5.atacar(); // O kratos atacou usando um ataque desconhecido