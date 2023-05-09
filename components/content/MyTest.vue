<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <div class="header" data-to>
        <MarkerBox ref="from" class="marker-bg20">
          --background-20
          <MarkerLine :offset="[80, 0, -70, 0]" />
        </MarkerBox>
        <div class="tag">
          <p>A</p>
        </div>
        <div class="tag chip">
          <p>chip</p>
        </div>
      </div>
      <div class="content">
        <h1>Title</h1>
        <p class="caption">2 months ago</p>
        <p>Lorem ipsum dolor sit amet consectetur <span>adipisicing</span> elit. Quos in cum ea eum nulla sit, repellendus optio quidem obcaecati perferendis similique dolor reiciendis repudiandae doloremque omnis saepe sapiente nostrum iusto!</p>
      </div>
      <div class="footer" /> 
    </div>
  </div>
</template>

<style scoped>
.marker-bg20 {
  position: absolute;
  left: -300px;
  top: 0px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius);
  padding: 1rem;
  background: var(--background-10);
  margin-bottom: var(--space-xl);
}

.card {
  width: 300px;
  border-radius: var(--radius);
  border: solid 2px var(--foreground-20);
}

.card .header {
  position: relative;
  background-color: var(--background-20);
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 100px;
}

.card .header .tag {
  position: absolute;
  bottom: -15px;
  right: var(--space-s);
  width: 30px;
  height: 30px;
  background-color: var(--accent);
  border-radius: var(--radius);
  display: flex;
  justify-content: center;
  align-self: center;
  color: var(--accent-contrast);
}

.card .header .tag p {
  color: var(--accent-contrast) !important;
  font-weight: bold;
  line-height: 28px;
}

.card .header .tag.chip {
  position: absolute;
  bottom: -15px;
  right: calc(var(--space-s) + 30px + var(--space-s));
  width: 60px;
  height: 30px;
  background-color: var(--accent-20);
  border-radius: var(--radius);
  border: solid 1px var(--accent-10);
}

.card .header .tag.chip p {
  color: var(--accent) !important;
  font-weight: bold;
  line-height: 28px;
}

.content {
  background-color: var(--background);
  padding: var(--space);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  padding-bottom: var(--space-m);
}

.content p.caption {
  color: var(--foreground-20) !important;
}

.content h1 {
  font-size: 32px;
  font-weight: bold;
  line-height: 0.8;
}

p span {
  color: var(--accent);
}
</style>