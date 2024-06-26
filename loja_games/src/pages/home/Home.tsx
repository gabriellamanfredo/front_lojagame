import home from '../../assets/logohome.png'

function Home() {
  return (
    <>
      <div className="bg-blue-900 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem vinde a loja de games!</h2>
            <p className='text-xl'>A sua diversão na palma da mão</p>

            <div className="flex justify-around gap-4">

              <button className='rounded bg-white text-blue-800 py-2 px-4'>Veja nossos produtos</button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={home} alt="" className='w-2/3' />
          </div>

        </div>
      </div>

    </>
  );
}

export default Home;