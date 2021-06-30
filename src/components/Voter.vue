<template>
  <div class="container">
    <h1 class="header-title">Voter</h1>
    <div class="candidats">
      <div
        class="cards-vote"
        v-for="candidat in candidats"
        :candidat="candidat"
        :key="candidat.id"
      >
        <vote-card :candidat="candidat" />
      </div>
    </div>
  </div>
</template>

<script>
const VoteCard = httpVueLoader("../components/VoteCard.vue");

module.exports = {
  name: "Voter",
  components: {
    VoteCard: VoteCard,
  },
  data() {
    return {
      candidats: [
        {
          id: 0,
          name: "François Fillon",
          parti: "Les Républicains",
          imgUrl: "../images/LR.jpg",
        },

        {
          id: 1,
          name: "Emmanuel Macron",
          parti: "La République En Marche",
          imgUrl: "../images/lrem.png",
        },

        {
          id: 2,
          name: "Marine Le Pen",
          parti: "Le Rassemblement National",
          imgUrl: "../images/RN.png",
        },

        {
          id: 3,
          name: "Yannick Jadot",
          parti: "Europe Ecologie Les Verts",
          imgUrl: "../images/LOGO_EELV_FOND_VERT1.jpg",
        },

        {
          id: 4,
          name: "Jean Luc Mélenchon",
          parti: "La France Insoumise",
          imgUrl: "../images/FranceInsoumise.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding: 30px 230px;
  background: #005c97; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.header-title {
  width: 150px;
  text-transform: uppercase;
  letter-spacing: 0.35rem;
  line-height: 2.5;
  color: white;
  border-bottom: 4px solid white;
}
</style>
