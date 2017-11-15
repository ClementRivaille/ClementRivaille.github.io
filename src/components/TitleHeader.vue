<template>
  <header>
    <h1>Clément Rivaille</h1>
    <div>{{ $t('header.title') }}</div>
    <links-list></links-list>
    <head-menu></head-menu>
  </header>
</template>

<script>
import HeadMenu from './HeadMenu';
import LinksList from './LinksList';

export default {
  name: 'title-header',
  data() {
    return {};
  },
  components: { HeadMenu, LinksList },
};
</script>

<style scoped>
* {
  background: #265647;
  color: white;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  padding-top: 0.1em;
  margin: 0;
  font-size: 2.5em;
}
</style>