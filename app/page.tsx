import Image from 'next/image'
import logo from './assets/logo.svg'
import woman from './assets/woman.svg'

export default function Home() {
  return (
    <main>
      <section>
        <nav className="flex justify-between items-center">
          <div>
            <Image
              src={logo}
              alt="Logo"
              width={129}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <ul className="flex">
            <li>
              <button>Funcionamento</button>
            </li>
            <li>
              <button>Preço</button>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </nav>
        <h1>Simplifique Seus Estudos</h1>
        <p>
          Deixe que nós fazermos a curadoria para você. Assine nossa plataforma
          e receba todos os meses um ebook novo de programação.
        </p>

        <form action="">
          <input type="text" placeholder="Coloque seu email" />
          <button>Assine Agora</button>
          <p>Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
        </form>
      </section>
      {/* 2ª SEÇÃO */}
      <section className="bg-white">
        <h2>Como funciona?</h2>
        <Image
          src={woman}
          alt="Woman"
          style={{ width: 'auto', height: 'auto' }}
        />
        <ul>
          <li>Acesso a 1 ebook por mês</li>
          <li>Curadoria especial</li>
          <li>Cancele quando quiser</li>
        </ul>
      </section>

      <section>
        <h2>Preço simples e transparente</h2>
        <p>
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
          para você? Assine o nosso plano mensal Pro Premium VIP e garanta
          mensalmente um ebook novo de programação. E por menos de um café por
          dia.{' '}
        </p>
        <div>
          <h3>Plano Pro Premiun VIP</h3>
        </div>
        <p>Tudo que você precisa para seus estudos</p>
        <p>R$29/mês</p>

        <ul>
          <li>1 ebook por mês</li>
          <li>Curadoria especial</li>
          <li>Acesso ilimitado</li>
          <li>Cancele a qualquer momento</li>
        </ul>
        <button>Assina Agora</button>
      </section>

      <section className="bg-white">
        <h2>Pronto Para Mudar Sua Vida?</h2>
        <p>
          Faça como milhares de outras pessoas. Assine nosso produto e tenha
          garantido seus estudos{' '}
        </p>
        <button>Assine Agora</button>
        <p>Comece sua assinatura agora mesmo. Cancele quando quiser. </p>
        <footer>
          <Image
            src={logo}
            alt="Logo"
            width={16}
            height={16}
            style={{ width: 'auto', height: 'auto' }}
          />
          <p>© 2024 LivroSaaS. Todos os direitos reservados.</p>
        </footer>
      </section>
    </main>
  )
}
