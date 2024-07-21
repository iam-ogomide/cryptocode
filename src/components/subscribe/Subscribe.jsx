import './Subscribe.scss';

const Subscribe = () => {
  return (
    <section className="subscribe">
        <div className="subscribe_container wrapper">
            <h2>Subscribe and get news update</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ratione quae ullam. Quisquam explicabo doloremque, ipsam, aspernatur eius, aliquam pariatur exercitationem quae maiores omnis similique magnam. Amet, repellendus. Iure quibusdam nihil quod dicta explicabo aliquid recusandae temporibus, architecto dolores. Voluptas!</p>
            <form action="#">
                <input type="email" placeholder='Write your email here' />
                <a href="#" className='btn'>Subscribe</a>
            </form>
        </div>
    </section>
  )
}

export default Subscribe