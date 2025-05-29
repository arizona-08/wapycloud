import React from 'react'
import Title from '../components/Title'

function RealisationsSection() {
  return (
    <section className="mt-28">
      <div className="p-5">
        <div className="text-center mb-18">
          <Title text="Réalisations"/>
          <p className="text-custom-text-gray mt-5">Découvrez quelques exemples de réalisations déjà en ligne créer par nos soins</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Des projets concrets, des <span className="font-secondary text-primary">résultats visibles.</span></h3>
          <p>
            Vous pouvez retrouver ci-dessous différents sites web que nous sommes capables
            de mettre en place pour répondre à vos besoins.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RealisationsSection