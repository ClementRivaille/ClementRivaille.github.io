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
export default {
  name: 'about',
  data() {
    // Calculate age…
    const birth = new Date('1991/10/06');
    const age = Math.floor((new Date() - birth) / 1000 / 60 / 60 / 24 / 365);
    return { age };
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
