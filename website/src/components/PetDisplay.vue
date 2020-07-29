<template>
  <div class="pet-display flex flex-center">
    <h4><strong>Type: </strong>{{ pet.type }}</h4>
    <q-space />
    <h4><strong>Price: </strong>{{ pet.price }}</h4>
    <q-space />
    <q-btn round color="red" icon="clear" flat @click="deletePet" />
  </div>
</template>

<script>
import API, { graphqlOperation } from '@aws-amplify/api';

import * as mutations from '../graphql/mutations';

export default {
  name: 'PetDisplay',
  props: {
    id: String,
    pet: Object
  },
  methods: {
    async deletePet() {
      console.log('I want to delete pet with price of', this.pet.price);
      const input = {
        id: this.pet.id
      };
      const reply = await API.graphql(
        graphqlOperation(mutations.deletePet, input)
      );
      console.log('deletePet', reply);
    }
  }
};
</script>

<style lang="scss" scoped>
.pet-display {
  width: 100%;
}
</style>
