<template>
  <div>
    <h1>Account Page</h1>

    <div v-if="!signedIn">
      <amplify-authenticator></amplify-authenticator>
    </div>

    <div v-if="signedIn">
      <amplify-sign-out></amplify-sign-out>

      {{ user.username }}
    </div>

    Signed In: {{ signedIn }}
    <q-btn color="primary" icon="mail" label="Back to Home" to="/" />
  </div>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue';
import { Auth } from 'aws-amplify';

export default {
  name: 'account',
  mounted() {
    this.findUser();

    AmplifyEventBus.$on('authState', info => {
      console.log('auth', info);

      if (info == 'signedIn') {
        this.findUser();
        this.$router.push('/');
      } else {
        this.$store.state.signedIn = false;
        this.$store.state.user = null;
      }
    });
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.$store.state.signedIn = true;
        this.$store.state.user = user;
      } catch (err) {
        console.log('Find User error', err);
        this.$store.state.signedIn = false;
        this.$store.state.user = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
