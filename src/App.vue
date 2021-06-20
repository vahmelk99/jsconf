<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Welcome</router-link> |
      <router-link to="/class-binding">Class binding</router-link> |
      <router-link to="/v-model">Custom v-model</router-link> |
      <router-link to="/$set">Vue.$set()</router-link> |
      <router-link to="/event-bus">EventBus</router-link> |
      <router-link to="/watchers">Watchers</router-link>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

// html,
// body {
//   width: 100vw;
//   height: 100vh;
// }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: #ffdd00;
  min-height: 100vh;
  overflow: hidden;
}

#nav {
  padding: 30px;
  user-select: none;
  a {
    transition: all 0.2s;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
      // font-size: 25px;
    }
  }
}

a.resource {
  font-size: 20px;
  color: green;
  font-weight: bold;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

section {
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  width: 95%;
  text-align: left;
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    background-color: black;
    padding: 10px;
    border: 1px solid white;
    code {
      font-family: monospace, 'courier new';
      color: white;
      padding: 2px;
    }
    span {
      &.highlight {
        color: yellow;
      }
      &.highlightBlue {
        color: #679ddf;
      }
      &.highlightRed {
        color: rgb(255, 71, 71);
      }
      &.highlightGreen {
        color: rgb(166, 255, 0);
      }
    }
    pre {
      outline: none;
      flex: 1;
      margin: 0 0 1em;
      padding: 0.5em 1em;
    }

    pre code,
    pre .line-number {
      display: block;
    }

    pre .line-number {
      float: left;
      margin: 0 1em 0 -1em;
      border-right: 1px solid;
      text-align: right;
    }

    pre .line-number span {
      display: block;
      padding: 0 0.5em 0 1em;
    }

    pre .cl {
      display: block;
      clear: both;
    }
  }
}
</style>
