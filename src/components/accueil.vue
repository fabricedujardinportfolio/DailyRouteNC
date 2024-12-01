<template>
  <main>
    <!-- Afficher le loader si le composant est encore en chargement -->
    <div v-if="isLoading" class="loader-container">
      <p>Chargement...</p>
    </div>

    <!-- Modal pour choisir les informations personnelles -->
    <div v-else-if="showform_personal_informations" id="form-personal-informations">
      <h3>Bonjour et bienvenue ! C'est votre première connexion.</h3>
      <p>Merci de compléter vos informations pour pouvoir utiliser l'application.</p>

      <form @submit.prevent="savePersonalInfo" class="personal-info-form">
        <label for="residence">Lieu de résidence :</label>
        <GMapMap :center="center" :zoom="12" style="width: 100%; height: 300px;" @click="setResidenceLocation">
          <GMapMarker :position="center" />
        </GMapMap>
        <input
          v-model="personalInfo.residence"
          type="text"
          id="residence"
          placeholder="Adresse sélectionnée"
          readonly
          required
        />

        <label for="birthdate">Date de naissance :</label>
        <input v-model="personalInfo.birthdate" type="date" id="birthdate" required />

        <label for="phone">Téléphone :</label>
        <input v-model="personalInfo.phone" type="tel" id="phone" placeholder="Entrez votre numéro de téléphone"
          required />

        <label for="accountType">Type d'utilisateur :</label>
        <multiselect
          v-model="personalInfo.accountType"
          :options="accountTypeOptions"
          :multiple="true"
          track-by="name"
          label="name"
          placeholder="Choisissez un ou plusieurs types"
        ></multiselect>

        <button type="submit" class="submit-button">Enregistrer mes informations</button>
      </form>
    </div>

    <!-- Page d'accueil si les informations utilisateur sont complètes -->
    <section v-else id="accueil" class="hero content">
      <div class="hero-text">
        <h2>Facilitez vos déplacements quotidiens</h2>
        <p>Découvrez Daily Route NC, l'application qui révolutionne les trajets partagés en Nouvelle-Calédonie.</p>
        <button @click="goToLogin" class="hero-button">Commencer Maintenant</button>
      </div>
      <div class="hero-image">
        <img src="../assets/images/accueil/hero-image.jpg" alt="Carpool illustration">
      </div>
    </section>
  </main>
</template>

<script>
import { GMapMap, GMapMarker } from "@fawmi/vue-google-maps";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export default {
  name: "AccueilComponent",
  components: {
    GMapMap,
    GMapMarker,
    Multiselect,
  },
  data() {
    return {
      isLoading: true, // Gestion du loader local
      showform_personal_informations: false,
      personalInfo: {
        residence: "",
        birthdate: "",
        phone: "",
        accountType: [],
      },
      center: { lat: -22.2711, lng: 166.4416 },
      accountTypeOptions: [
        { name: "Marcheur" },
        { name: "Driver" },
      ],
    };
  },
  mounted() {
    this.checkUserPersonalInfo();
  },
  methods: {
    async checkUserPersonalInfo() {
      const auth = getAuth();
      const db = getFirestore();

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
              const userData = userDoc.data();
              console.log(userData.accountType);

              if (!userData.accountType || userData.accountType.length === 0) {
                this.showform_personal_informations = true;
              }
            } else {
              this.showform_personal_informations = true;
            }
          } catch (error) {
            // Todo : envoie email 
            console.error("Erreur lors de la récupération des informations :", error);
          }
        } else {
          this.goToLogin();
        }

        // Fin du chargement
        this.isLoading = false;
      });
    },

    async savePersonalInfo() {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;

      if (user) {
        try {
          await setDoc(
            doc(db, "users", user.uid),
            {
              residence: this.personalInfo.residence,
              birthdate: this.personalInfo.birthdate,
              phone: this.personalInfo.phone,
              accountType: this.personalInfo.accountType.map((type) => type.name),
              updatedAt: new Date(),
            },
            { merge: true }
          );

          this.showform_personal_informations = false;
        } catch (error) {
          console.error("Erreur lors de l'enregistrement :", error);
        }
      }
    },

    setResidenceLocation(event) {
      const latLng = event.latLng;
      this.center = { lat: latLng.lat(), lng: latLng.lng() };
      this.personalInfo.residence = `${latLng.lat()}, ${latLng.lng()}`;
    },

    redirectToDashboard() {
      window.location.href = "/accueil";
    },

    goToLogin() {
      window.location.href = "/login";
    },
  },
};
</script>

<style scoped>
/* Vous pouvez ajouter des styles ici si nécessaire */
</style>