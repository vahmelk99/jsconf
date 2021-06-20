<template>
  <div>
    <h1>About Vue.$set or this.$set function</h1>
    <a
      class="resource"
      href="https://vuejs.org/v2/guide/reactivity.html#For-Objects"
      target="_blank"
      >Resource</a
    >
    <section>
      <article>
        <pre contenteditable="true">
<code>&lt;div
  v-for="({ <span class="highlightGreen">tasks</span>, <span class="highlightPink">dones</span> }, <span class="highlightBlue">user</span>) in <span class="highlight">users</span>"
  :key="<span class="highlightBlue">user</span>"
  class="user"
&gt;
  &lt;h2&gt;&#10100;&#10100; <span class="highlightBlue">user</span> &#10101;&#10101;&lt;/h2&gt;
  &lt;ol&gt;
    &lt;li
      v-for="<span class="highlightRed">task</span> in <span class="highlightGreen">tasks</span>"
      :key="<span class="highlightRed">task</span>"
      @click="<span class="highlightOrange">toggleTask</span>(<span class="highlightBlue">user</span>, <span class="highlightRed">task</span>)"
      :class="{ highlightGreen: <span class="highlightPink">dones</span>.has(<span class="highlightRed">task</span>)) }"
    &gt;
      &#10100;&#10100; <span class="highlightRed">task</span> &#10101;&#10101; &#10100;&#10100; <span class="highlightPink">dones</span>.has(<span class="highlightRed">task</span>) ? '&#9745;' : '&#9746;' &#10101;&#10101;
    &lt;/li&gt;
  &lt;/ol&gt;
&lt;/div&gt;
...
data() {
  return {
    <span class="highlight">users</span>: {
      <span class="highlightBlue">Heghine</span>: {
        <span class="highlightGreen">tasks</span>: ['<span class="highlightRed">Learn Vue.js</span>', '<span class="highlightRed">Create app</span>', '<span class="highlightRed">Do homework</span>'],
        <span class="highlightPink">dones</span>: new Set(),
      },
      <span class="highlightBlue">Gor</span>: {
        <span class="highlightGreen">tasks</span>: ['<span class="highlightRed">Learn React</span>', '<span class="highlightRed">Go to work</span>', '<span class="highlightRed">Make canvas app</span>'],
        <span class="highlightPink">dones</span>: new Set(),
      },
    },
  }
},
methods: {
  <span class="highlightOrange">toggleTask</span>(<span class="highlightBlue">user</span>, <span class="highlightRed">task</span>) {
    if (this.<span class="highlight">users</span>[<span class="highlightBlue">user</span>].<span class="highlightPink">dones</span>.has(<span class="highlightRed">task</span>)) this.<span class="highlight">users</span>[<span class="highlightBlue">user</span>].<span class="highlightPink">dones</span>.delete(<span class="highlightRed">task</span>)
    else this.<span class="highlight">users</span>[<span class="highlightBlue">user</span>].<span class="highlightPink">dones</span>.add(<span class="highlightRed">task</span>)
    console.log(this.<span class="highlight">users</span>[<span class="highlightBlue">user</span>].<span class="highlightPink">dones</span>)
  },
},</code></pre>
        <div class="toDoApp">
          <h1>To Do App</h1>
          <hr />
          <div
            v-for="({ tasks, dones }, user) in users"
            :key="user"
            class="user"
          >
            <h2>{{ user }}</h2>
            <ol>
              <li
                v-for="task in tasks"
                :key="task"
                @click="toggleTask(user, task)"
                :class="{ highlightGreen: dones.has(task) }"
              >
                {{ task }} {{ dones.has(task) ? '&#9745;' : '&#9746;' }}
              </li>
            </ol>
          </div>
        </div>
      </article>
      <article>
        <pre contenteditable="true">
<code>&lt;div
  v-for="({ <span class="highlightGreen">tasks</span>, <span class="highlightPink">dones</span> }, <span class="highlightBlue">user</span>) in <span class="highlight">users</span>"
  :key="<span class="highlightBlue">user</span>"
  class="user"
&gt;
  &lt;h2&gt;&#10100;&#10100; <span class="highlightBlue">user</span> &#10101;&#10101;&lt;/h2&gt;
  &lt;ol&gt;
    &lt;li
      v-for="<span class="highlightRed">task</span> in <span class="highlightGreen">tasks</span>"
      :key="<span class="highlightRed">task</span>"
      @click="<span class="highlightOrange">toggleTaskWithSet</span>(<span class="highlightBlue">user</span>, <span class="highlightRed">task</span>)"
      :class="{ highlightGreen: <span class="highlightPink">dones</span>.has(<span class="highlightRed">task</span>)) }"
    &gt;
      &#10100;&#10100; <span class="highlightRed">task</span> &#10101;&#10101; &#10100;&#10100; <span class="highlightPink">dones</span>.has(<span class="highlightRed">task</span>) ? '&#9745;' : '&#9746;' &#10101;&#10101;
    &lt;/li&gt;
  &lt;/ol&gt;
&lt;/div&gt;
...
data() {
  return {
    <span class="highlight">users</span>: {
      <span class="highlightBlue">Heghine</span>: {
        <span class="highlightGreen">tasks</span>: ['<span class="highlightRed">Learn Vue.js</span>', '<span class="highlightRed">Create app</span>', '<span class="highlightRed">Do homework</span>'],
        <span class="highlightPink">dones</span>: new Set(),
      },
      <span class="highlightBlue">Gor</span>: {
        <span class="highlightGreen">tasks</span>: ['<span class="highlightRed">Learn React</span>', '<span class="highlightRed">Go to work</span>', '<span class="highlightRed">Make canvas app</span>'],
        <span class="highlightPink">dones</span>: new Set(),
      },
    },
  }
},
methods: {
  <span class="highlightOrange">toggleTaskWithSet</span>(<span class="highlightBlue">user</span>, <span class="highlightRed">task</span>) {
    const <span class="highlightSky">updatedSet</span> = this.<span class="highlight">users</span>[<span class="highlightBlue">user</span>].<span class="highlightPink">dones</span>
    if (this.<span class="highlight">users</span>[<span class="highlightBlue">user</span>].<span class="highlightPink">dones</span>.has(<span class="highlightRed">task</span>)) <span class="highlightSky">updatedSet</span>.delete(<span class="highlightRed">task</span>)
    else <span class="highlightSky">updatedSet</span>.add(<span class="highlightRed">task</span>)

    this.<b>$set</b>(this.<span class="highlight">users</span>, <span class="highlightBlue">user</span>, { ...this.<span class="highlight">users</span>[<span class="highlightBlue">user</span>], <span class="highlightPink">dones</span>: <span class="highlightSky">updatedSet</span> })
    console.log(this.<span class="highlight">users</span>[<span class="highlightBlue">user</span>].<span class="highlightPink">dones</span>)
  },
},</code></pre>
        <div class="toDoApp">
          <h1>To Do App with $set</h1>
          <hr />
          <div
            v-for="({ tasks, dones }, user) in users"
            :key="user"
            class="user"
          >
            <h2>{{ user }}</h2>
            <ol>
              <li
                v-for="task in tasks"
                :key="task"
                @click="toggleTaskWithSet(user, task)"
                :class="{ highlightGreen: dones.has(task) }"
              >
                {{ task }} {{ dones.has(task) ? '&#9745;' : '&#9746;' }}
              </li>
            </ol>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
import preMixin from '@/preMixin'

export default {
  mixins: [preMixin],
  data() {
    return {
      users: {
        Heghine: {
          tasks: ['Learn Vue.js', 'Create app', 'Do homework'],
          dones: new Set(),
        },
        Gor: {
          tasks: ['Learn React', 'Go to work', 'Make canvas app'],
          dones: new Set(),
        },
      },
    }
  },
  methods: {
    toggleTask(user, task) {
      if (this.users[user].dones.has(task)) this.users[user].dones.delete(task)
      else this.users[user].dones.add(task)
      console.log(this.users[user].dones)
    },
    toggleTaskWithSet(user, task) {
      const updatedSet = this.users[user].dones
      if (this.users[user].dones.has(task)) updatedSet.delete(task)
      else updatedSet.add(task)

      this.$set(this.users, user, { ...this.users[user], dones: updatedSet })
      console.log(this.users[user].dones)
    },
  },
}
</script>

<style lang="scss" scoped>
.toDoApp {
  color: white;
  .user {
    padding: 20px;
    ol {
      list-style-position: inside;
      li {
        margin: 5px 0;
        font-size: 20px;
        &:hover {
          color: yellow;
          cursor: pointer;
          user-select: none;
        }
      }
    }
  }
}
</style>
