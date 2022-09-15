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
        position: 'top-center ',
        icon: 'success',
        title: 'Mensaje enviado',
        showConfirmButton: false,
        timer: 2000
      })
            
    }
  }
  