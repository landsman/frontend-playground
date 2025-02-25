import './styles/style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>A long time ago in galaxy far, far away....</h1>

    <h2>Republica</h2>

    <div class="chewbacca">
    </div>

    <div class="falcon">
        <img src="/luke.png" alt="young Luke" />
    </div>

    <div class="yoda">
        <img src="/yoda.png" alt="master of jedi Yoda" />
    </div>

    <h2>After years ...</h2>

    <div class="vader">
        <img src="../public/vader.png" alt="Darth Vader">
    </div>
  </div>
`
