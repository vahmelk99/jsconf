<template>
  <div>
    <h1>Watchers: immediate, deep, handler and many watchers</h1>
    <a class="resource" href="https://vuejs.org/v2/api/#watch" target="_blank"
      >Resource</a
    >
    <section>
      <article>
        <pre contenteditable="true">
<code>&lt;div class="search"&gt;
  &lt;div&gt;
    &lt;BaseInput
      v-model="<span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightRed">id</span>"
      placeholder="Student Id"
    /&gt;
    &lt;BaseInput
      v-model="<span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightBlue">task</span>.<span class="highlightOrange">number</span>"
      placeholder="Task Id"
    /&gt;
  &lt;/div&gt;
  &lt;div class="taskBody"&gt;
    &lt;h2 :class="colored"&gt;
      Title for user No. &#10100;&#10100; <span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightRed">id</span> &#10101;&#10101;, task No.&#10100;&#10100;
        <span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightBlue">task</span>.<span class="highlightOrange">number</span>
      &#10101;&#10101;
    &lt;/h2&gt;
    &lt;p&gt;&#10100;&#10100; <span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightBlue">task</span>.<span class="highlightOrange">title</span> &#10101;&#10101;&lt;/p&gt;
    &lt;h2 :class="colored"&gt;Description&lt;/h2&gt;
    &lt;p&gt;&#10100;&#10100; <span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightBlue">task</span>.<span class="highlightOrange">body</span> &#10101;&#10101;&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
...
data() {
  return {
    colored: 'highlight',
    <span class="highlight">classroom</span>: {
      <span class="highlightGreen">student</span>: {
        <span class="highlightRed">id</span>: '',
        <span class="highlightBlue">task</span>: {
          <span class="highlightOrange">number</span>: '',
        },
      },
      <span class="highlightPink">allTasks</span> [],
    },
  }
},
watch: {
  <span class="highlightSky">'</span><span class="highlight">classroom</span>.<span class="highlightGreen">student</span><span class="highlightSky">'</span>: <span class="highlightSky">[
    {</span>
      async <span class="highlightSky">handler</span>(<span class="highlightGreen">_oldStudentObj</span>, <span class="highlightGreen">newStudentObj</span>) {
        if (!<span class="highlightGreen">newStudentObj</span>) {
          //first load
          const res = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
          )
          this.<span class="highlight">classroom</span>.<span class="highlightPink">allTasks</span> = await res.json()
          this.<span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightRed">id</span> = '1'
          this.<span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightBlue">task</span>.<span class="highlightOrange">number</span> = '1'
        }
        const task = this.<span class="highlight">classroom</span>.<span class="highlightPink">allTasks</span>.find(
          (task) =>
            task.userId === +this.<span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightRed">id</span> &&
            task.id === +this.<span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightBlue">task</span>.<span class="highlightOrange">number</span>
        )
        if (task) Object.assign(this.<span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightBlue">task</span>, task)
        else
          Object.assign(this.<span class="highlight">classroom</span>.<span class="highlightGreen">student</span>.<span class="highlightBlue">task</span>, {
            <span class="highlightOrange">title</span>: 'Not Found',
            <span class="highlightOrange">body</span>: 'Not Found',
          })
<span class="highlightSky">      },
      deep: true,
      immediate: true,
    },
    {
      handler: '<span class="highlightCotton">colorHandler</span>',
      deep: true,
    },
  ]</span>,
},
methods: {
  <span class="highlightCotton">colorHandler</span>() {
    this.colored = [
      'highlight',
      'highlightBlue',
      'highlightRed',
      'highlightGreen',
      'highlightPink',
      'highlightSky',
      'highlightOrange',
    ][Math.floor(Math.random() * 7)]
  },
},</code></pre>

        <div class="search">
          <div>
            <BaseInput
              v-model="classroom.student.id"
              placeholder="Student Id"
            />
            <BaseInput
              v-model="classroom.student.task.number"
              placeholder="Task Id"
            />
          </div>
          <div class="taskBody">
            <h2 :class="colored">
              Title for user No.{{ classroom.student.id }}, task No.{{
                classroom.student.task.number
              }}
            </h2>
            <p>{{ classroom.student.task.title }}</p>
            <h2 :class="colored">Description</h2>
            <p>{{ classroom.student.task.body }}</p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import preMixin from '@/preMixin'
import BaseInput from '@/components/BaseInput.vue'

export default {
  mixins: [preMixin],
  components: {
    BaseInput,
  },
  data() {
    return {
      colored: 'highlight',
      classroom: {
        student: {
          id: '',
          task: {
            number: '',
          },
        },
        allTasks: [],
      },
    }
  },
  watch: {
    'classroom.student': [
      {
        async handler(_oldStudentObj, newStudentObj) {
          if (!newStudentObj) {
            //first load
            const res = await fetch(
              'https://jsonplaceholder.typicode.com/posts'
            )
            this.classroom.allTasks = await res.json()
            this.classroom.student.id = '1'
            this.classroom.student.task.number = '1'
          }
          const task = this.classroom.allTasks.find(
            (task) =>
              task.userId === +this.classroom.student.id &&
              task.id === +this.classroom.student.task.number
          )
          if (task) Object.assign(this.classroom.student.task, task)
          else
            Object.assign(this.classroom.student.task, {
              title: 'Not Found',
              body: 'Not Found',
            })
        },
        deep: true,
        immediate: true,
      },
      {
        handler: 'colorHandler',
        deep: true,
      },
    ],
  },
  methods: {
    colorHandler() {
      this.colored = [
        'highlight',
        'highlightBlue',
        'highlightRed',
        'highlightGreen',
        'highlightPink',
        'highlightSky',
        'highlightOrange',
        'highlightCotton',
      ][Math.floor(Math.random() * 8)]
    },
  },
}
</script>

<style lang="scss" scoped>
.taskBody {
  text-align: center;
  color: white;
  word-break: break-word;
}
.search {
  flex: 1;
}
</style>
