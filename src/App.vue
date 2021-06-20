<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Welcome</router-link> |
      <router-link to="/class-binding">Class binding</router-link> |
      <router-link to="/v-model">Custom v-model</router-link> |
      <router-link to="/$set">Vue.$set()</router-link> |
      <router-link to="/watchers">Watchers</router-link> |
      <router-link to="/event-bus">EventBus</router-link>
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
    .highlightCotton {
      color: rgb(0, 255, 221);
    }
    .highlight {
      color: yellow;
    }
    .highlightBlue {
      color: #679ddf;
    }
    .highlightRed {
      color: rgb(255, 71, 71);
    }
    .highlightGreen {
      color: rgb(166, 255, 0);
    }
    .highlightPink {
      color: rgb(255, 0, 255);
    }
    .highlightSky {
      color: rgb(0, 225, 255);
    }
    .highlightOrange {
      color: rgb(255, 166, 0);
    }

    pre {
      outline: none;
      flex: 1;
      padding: 0.5em 1em;
      display: flex;
      code {
        font-family: monospace, 'courier new';
        color: white;
        padding: 2px;
        display: block;
      }
      .line-number {
        display: block;
        color: white;
        // float: left;
        margin: 0 1em 0 -1em;
        border-right: 1px solid;
        text-align: right;
        span {
          display: block;
          padding: 0 0.5em 0 1em;
          &.cl {
            display: block;
            clear: both;
          }
        }
      }
    }
  }
}
</style>
