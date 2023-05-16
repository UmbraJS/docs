<script setup lang="ts">
const header = ref<HTMLElement | null>(null)
const tag = ref<HTMLElement | null>(null)
const chip = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const caption = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)
const span = ref<HTMLElement | null>(null)

</script>

<template>
  <div class="wrapper">
    <div class="markers">
      <MarkerBox 
        :to="() => header" 
        :offset="[100, 0, -70, 0]"
      >
        --background-20
      </MarkerBox>
      <MarkerBox 
        :to="() => title" 
        :offset="[100, 0, -95, -50]"
      >
        --foreground
      </MarkerBox>
      <MarkerBox 
        :to="() => caption" 
        :offset="[100, 0, -95, 0]"
      >
        --foreground-20
      </MarkerBox>
      <MarkerBox 
        :to="() => content" 
        :offset="[100, 0, -95, 0]"
      >
        --background
      </MarkerBox>
    </div>
    <div class="card">
      <div ref="header" class="header">
        <div ref="tag" class="tag">
          <p>A</p>
        </div>
        <div ref="chip" class="tag chip">
          <p>chip</p>
        </div>
      </div>
      <div ref="content" class="content">
        <h1 ref="title">Title</h1>
        <p ref="caption" class="caption">2 months ago</p>
        <p>Lorem ipsum dolor sit amet consectetur <span ref="span">adipisicing</span> elit. Quos in cum ea eum nulla sit, repellendus optio quidem obcaecati perferendis similique dolor reiciendis repudiandae doloremque omnis saepe sapiente nostrum iusto!</p>
      </div>
    </div>
    <div class="markers">
      <MarkerBox 
        :to="() => chip" 
        :offset="[-100, 0, 70, -50]"
      >
        --accent-20
      </MarkerBox>
      <MarkerBox 
        :to="() => tag" 
        :offset="[-100, 0, 30, 20]"
      >
        --accent-contrast
      </MarkerBox>
      <MarkerBox 
        :to="() => span" 
        :offset="[-100, 0, 80, -20]"
      >
        --accent
      </MarkerBox>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  border-radius: var(--radius);
  padding: 1rem;
  background: var(--background-10);
  margin-bottom: var(--space-xl);
  @media only screen and (max-width: 1100px) {
    display: none;
  }
}

.markers { 
  display: flex;
  flex-direction: column;
  gap: var(--space);
}

.card {
  width: 300px;
  border-radius: var(--radius);
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

p span {
  color: var(--accent);
}
</style>