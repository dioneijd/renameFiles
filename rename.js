const fs = require('fs');
const path = require('path');

const pasta = 'fotos'; // substitua pelo caminho para a sua pasta
const prefixo = 'prefixo_do_arquivo_'; // substitua pelo prefixo que você quer adicionar ao nome do arquivo


let contador = 1;
fs.readdirSync(pasta).forEach((arquivoAntigo) => {
  const caminhoAntigo = path.join(pasta, arquivoAntigo);
  if (fs.statSync(caminhoAntigo).isFile()) {
    const { name, ext } = path.parse(arquivoAntigo);

    const num = name.substring(12)
    const numeroComZero = num.padStart(4,'0')
    const novoNome = `foto-${numeroComZero}${ext}`
    
    console.log(name, ext, novoNome, num, numeroComZero, novoNome)
    const caminhoNovo = path.join(pasta, novoNome);
    fs.renameSync(caminhoAntigo, caminhoNovo);
  }

});