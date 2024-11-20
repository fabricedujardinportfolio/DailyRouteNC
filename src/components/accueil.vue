<template>
  <main>
    <!-- Modal pour choisir les informations personnelles -->
    <div v-if="showPersonalInfoForm" id="personalInfoForm">
      <h3>Bonjour et bienvenue ! C'est votre première connexion.</h3>
      <p>Merci de compléter vos informations pour pouvoir utiliser l'application.</p>

      <form @submit.prevent="savePersonalInfo" class="personal-info-form">
        <label for="residence">Lieu de résidence :</label>
        <!-- Carte Google Maps -->
        <GMapMap
          :center="center"
          :zoom="12"
          style="width: 100%; height: 300px;"
          @click="setResidenceLocation"
        >
          <GMapMarker :position="center" />
        </GMapMap>

        <!-- Afficher l'adresse sélectionnée -->
        <input v-model="personalInfo.residence" type="text" id="residence" placeholder="Adresse sélectionnée" readonly />

        <label for="birthdate">Date de naissance :</label>
        <input v-model="personalInfo.birthdate" type="date" id="birthdate" required />

        <label for="phone">Téléphone :</label>
        <input v-model="personalInfo.phone" type="tel" id="phone" required />

        <label for="accountType">Type d'utilisateur :</label>
        <!-- Utilisation de vue-multiselect pour le multi-select -->
        <multiselect 
          v-model="personalInfo.accountType"
          :options="accountTypeOptions"
          placeholder="Choisissez un ou plusieurs types"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          label="name"
          track-by="name"
          class="multi-select"
        ></multiselect>

        <button type="submit" class="submit-button">Enregistrer mes informations</button>
      </form>
    </div>
    
    <!-- Contenu principal -->
    <main v-else id="accueil" class="content">
      <section class="hero">
        <div class="hero-text">
          <h2>Facilitez vos déplacements quotidiens</h2>
          <p>
            Découvrez Daily Route NC, l'application qui révolutionne les trajets partagés en Nouvelle-Calédonie.
          </p>
          <button @click="goToLogin" class="hero-button">Commencer Maintenant</button>
        </div>
        <div class="hero-image">
          <img src="../assets/images/accueil/hero-image.jpg" alt="Carpool illustration">
        </div>
      </section>

      <!-- Autres sections -->
    </main>
  </main>
</template>

<script>
// Importer les composants nécessaires
import { GMapMap, GMapMarker } from '@fawmi/vue-google-maps';
import Multiselect from 'vue-multiselect';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export default {
  name: 'AccueilComponent',
  components: {
    GMapMap,
    GMapMarker,
    Multiselect,
  },
  data() {
    return {
      showPersonalInfoForm: false,
      personalInfo: {
        residence: '',
        birthdate: '',
        phone: '',
        accountType: [],
      },
      center: { lat: -22.2711, lng: 166.4416 }, // Coordonnées par défaut (Nouvelle-Calédonie)
      accountTypeOptions: [
        { name: 'Marcheur' },
        { name: 'Driver' },
      ],
    };
  },
  mounted() {
    this.checkUserPersonalInfo(); // Vérifie les infos personnelles lors du montage du composant
  },
  methods: {
    // Vérifie si l'utilisateur a déjà renseigné ses informations personnelles
    async checkUserPersonalInfo() {
      const auth = getAuth();
      const db = getFirestore();

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (!userData.residence || !userData.birthdate || !userData.phone || !userData.accountType) {
              this.showPersonalInfoForm = true;
            } else {
              this.redirectToDashboard();
            }
          } else {
            this.showPersonalInfoForm = true;
          }
        } else {
          this.goToLogin();
        }
      });
    },

    // Enregistre les informations personnelles dans Firestore
    async savePersonalInfo() {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;

      if (user) {
        try {
          await setDoc(doc(db, "users", user.uid), {
            residence: this.personalInfo.residence,
            birthdate: this.personalInfo.birthdate,
            phone: this.personalInfo.phone,
            accountType: this.personalInfo.accountType.map(type => type.name),
            updatedAt: new Date(),
          }, { merge: true });

          console.log("Informations personnelles enregistrées :", this.personalInfo);
          this.redirectToDashboard();
        } catch (error) {
          console.error("Erreur lors de l'enregistrement des informations personnelles :", error);
        }
      }
    },

    // Mettre à jour les coordonnées du lieu de résidence en fonction du clic sur la carte
    setResidenceLocation(event) {
      const latLng = event.latLng;
      this.center = { lat: latLng.lat(), lng: latLng.lng() };
      this.personalInfo.residence = `${latLng.lat()}, ${latLng.lng()}`; // Stocker les coordonnées comme adresse
    },

    redirectToDashboard() {
      window.location.href = "/dashboard";
    },

    goToLogin() {
      window.location.href = "/login";
    },
  },
};
</script>

<style scoped>
/* Styles pour le formulaire d'informations personnelles */
#personalInfoForm {
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  margin: auto;
}

#personalInfoForm h3 {
  font-size: 24px;
}

#personalInfoForm p {
  font-size: 16px;
}

#personalInfoForm form label,
#personalInfoForm form input,
#personalInfoForm form select,
#personalInfoForm form button,
.multi-select .multiselect__tags,
.multi-select .multiselect__input {
  display: block;
  width: calc(100% - 20px);
  margin-bottom: 15px;
}

#personalInfoForm form input,
.multi-select .multiselect__tags,
.multi-select .multiselect__input,
#personalInfoForm form button {
  padding: 10px;
}

#personalInfoForm form input,
.multi-select .multiselect__tags,
.multi-select .multiselect__input {
  border-radius: 5px;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
}

.submit-button:hover {
  background-color: #45a049;
}

/* Hero section */
.hero-text h2,
.hero-text p,
.hero-button {
  color: #333;
}

.hero-image img {
  width: 100%;
}
</style>