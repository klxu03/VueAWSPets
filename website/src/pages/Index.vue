<template>
  <q-page>
    <h2>Home</h2>
    <q-btn color="primary" icon="mail" label="Accounts" to="/account" />

    <h2>Input pet</h2>
    <div>
      <q-select v-model="type" :options="petTypes" label="Type of Pet" />
      <q-input v-model="price" label="Price of Pet" />
      <q-btn
        style="background: goldenrod; color: white"
        label="Submit Pet"
        @click="createPet"
      />
    </div>

    <h2>Pets</h2>
    <div v-for="pet in pets" :key="pet.id" class="flex flex-center">
      <PetDisplay :pet="pet" />
    </div>
  </q-page>
</template>

<script>
import PetDisplay from '../components/PetDisplay';

import API, { graphqlOperation } from '@aws-amplify/api';

import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

const petTypes = ['dog', 'cat', 'fish', 'bird', 'gecko'];

export default {
  name: 'home',
  mounted() {
    this.listPets();
  },
  data() {
    return {
      pets: [],
      type: '',
      price: null,
      petTypes
    };
  },
  methods: {
    async listPets() {
      const reply = await API.graphql(graphqlOperation(queries.listPets));
      console.log('listPets', reply.data.listPets);
      this.pets = reply.data.listPets;
    },
    async createPet() {
      const input = {
        input: {
          type: this.type,
          price: this.price
        }
      };
      const reply = await API.graphql(
        graphqlOperation(mutations.createPet, input)
      );
      console.log('createPet', reply);
    },
    clearInput() {
      this.type = '';
      this.price = null;
    }
  },
  components: {
    PetDisplay
  }
};
</script>
