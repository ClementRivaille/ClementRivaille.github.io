<template>
<div>
  <h2>{{ $t('about.title') }}</h2>
  <p>{{ $t('about.dev') }}</p>
  <p>{{ $t('about.games') }}</p>
  <p>{{ $t('about.perso') }}</p>

  <div class="useful">
    <h3> {{ $t('about.useful.title' ) }} </h3>
    <ul>
      <li> <strong>{{ $t('about.useful.location') }}</strong> Vannes, France </li>
      <li> <strong>{{ $t('about.useful.employer') }}</strong> <a href="https://www.mgdis.fr">MGDIS</a></li>
      <li> <strong>{{ $t('about.useful.age') }}</strong> {{ age }}</li>
    </ul>
  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'about',
  data() {
    return {
      age: moment().diff('1991-06-10', 'years', false),
    };
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
