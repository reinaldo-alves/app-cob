import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './styles.css';

function Contato(){
    
    return (
        <>
            <Header />
            <h1 id="entrecontato">Entre em contato conosco</h1>
            <div className='contact-container'>
                <div className='contentd'>
                    <div className='social-container'>
                        <h2 className='subtitle'>através das redes sociais...</h2>
                        <a className="redesocial" href="https://www.facebook.com/conhecendoobrasil.oficial/" target="_blank" rel="noreferrer">
                            <img className="logosocial" id="facebook" alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" />
                            <p className='socialname'>/conhecendoobrasil.oficial</p>
                        </a>
                        <a className="redesocial" href="https://www.instagram.com/conhecendoobrasil.oficial/" target="_blank" rel="noreferrer">
                            <img className="logosocial" id="instagram" alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" />
                            <p className='socialname'>@conhecendoobrasil.oficial</p>
                        </a>
                        <a className="redesocial" href="https://www.youtube.com/@ConhecendooBrasiloficial" target="_blank" rel="noreferrer">
                            <img className="logosocial" id="youtube" alt='' src="https://www.apaulista.org.br/wp-content/uploads/2021/02/youtube-logo.png" />
                            <p className='socialname'>@ConhecendooBrasiloficial</p>
                        </a>
                    </div>
                    <div className='form-container'>
                        <h2 className='subtitle'>...ou deixe uma mensagem.</h2>
                        <form action='https://formspree.io/f/xzbqzkoa' method='POST'>
                            <label className='labela'>Nome</label>
                            <input className='caixa' type="text" name="name" placeholder="Digite seu nome completo" />
                            <br />
                            <label className='labela'>Email</label>
                            <input className='caixa' type="email" name="email" placeholder="Digite um email válido" />
                            <br />
                            <label className='labela'>Mensagem</label>
                            <textarea className='caixa message' name="message" placeholder="Digite sua mensagem aqui"></textarea>
                            <br />
                            <div className="CheckBox-container">
                                <input className="CheckBox" type="CheckBox" name="CheckBox" />
                                <label className='labela'>Aceito receber emails com atualizações de conteúdo</label>
                            </div>
                            <br />
                            <div className="button-container">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contato