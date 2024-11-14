<template>
  <main id="accueil" class="content">
    <section class="hero">
      <div class="hero-text">
        <h2>Facilitez vos déplacements quotidiens</h2>
        <p>
          Découvrez Daily Route NC, l'application qui révolutionne les trajets partagés en Nouvelle-Calédonie. Réservez
          un trajet, proposez le vôtre, et rejoignez une communauté qui se déplace de manière plus intelligente et plus
          écologique.
        </p>
        <button @click="goToLogin" class="hero-button">Commencer Maintenant</button>
      </div>
      <div class="hero-image">
        <img src="../assets/images/accueil/hero-image.jpg" alt="Carpool illustration">
      </div>
    </section>

    <section class="features">
      <div class="feature-item">
        <i class="fas fa-map-marker-alt feature-icon"></i>
        <h3>Définissez vos trajets</h3>
        <p>Configurez vos trajets réguliers et partagez vos déplacements avec ceux qui vont dans la même direction.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-car feature-icon"></i>
        <h3>Partage de voiture</h3>
        <p>Optimisez l'utilisation des places disponibles dans votre véhicule, réduisez les coûts et l'impact
          environnemental.</p>
      </div>
      <div class="feature-item">
        <i class="fas fa-coins feature-icon"></i>
        <h3>Jetons de trajet</h3>
        <p>Achetez des jetons dans notre boutique et utilisez-les pour rejoindre des trajets partagés facilement et
          rapidement.</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AccueilComponent',
  props: {
    msg: String // Cette propriété peut être utilisée dans le template
  }
}
</script>
