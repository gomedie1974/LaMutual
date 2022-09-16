  //formulario alta cliente (FORMSPREE)
  const form = document.querySelector('#form')
  form.addEventListener('submit', enviar)
  
  async function enviar(e) {
    e.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    })
    if (response.ok){
      this.reset()
      Swal.fire({
        title: '<strong>Mensaje enviado</strong>',
        icon: 'success',
        confirmButtonText:
          '<a href="//lnmutual.com.ar"><i class="text-white">Volver</i></a> ',
      })

   }
  }
  