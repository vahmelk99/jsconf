<template>
  <div>
    <h1>Class binding ways</h1>
    <a
      class="resource"
      href="https://vuejs.org/v2/guide/class-and-style.html"
      target="_blank"
      >Resource</a
    >

    <section>
      <article class="static">
        <pre contenteditable="true">
<code>&lt;div class="<span class="highlight">static-class-name</span>"&gt;&lt;/div&gt;
...
&lt;style&gt;
  .<span class="highlight">static-class-name</span> {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: yellow;
  }
&lt;/style&gt;</code></pre>
        <!-- testdiv -->
        <div class="static-class-name"></div>
        <!-- /testdiv -->
      </article>

      <article>
        <pre contenteditable="true">
<code>&lt;div :class="<span class="highlightBlue">dynamicClassName</span>" class="<span class="highlight">alsoCanHaveStaticClasses</span>"&gt;&lt;/div&gt;
...
&lt;script&gt;
export default {
  data() {
    return {
      <span class="highlightBlue">dynamicClassName</span>: '<span class="highlight">static-class-name</span>',
    }
  },
}
&lt;/script&gt;
...
&lt;style&gt;
  .<span class="highlight">static-class-name</span> {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: yellow;
  }
  .<span class="highlight">alsoCanHaveStaticClasses</span> {
    border: 15px solid purple;
  }
&lt;/style&gt;</code></pre>
        <!-- testdiv -->
        <div :class="dynamicClassName" class="alsoCanHaveStaticClasses"></div>
        <!-- /testdiv -->
      </article>

      <article>
        <pre contenteditable="true">
<code>&lt;div :class="[<span class="highlightBlue">dynamicClassName</span>, '<span class="highlight">alsoCanHaveStaticClasses</span>']"&gt;&lt;/div&gt;
...
&lt;script&gt;
export default {
  data() {
    return {
      <span class="highlightBlue">dynamicClassName</span>: '<span class="highlight">static-class-name</span>',
    }
  },
}
&lt;/script&gt;
...
&lt;style&gt;
  .<span class="highlight">static-class-name</span> {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: yellow;
  }
  .<span class="highlight">alsoCanHaveStaticClasses</span> {
    border: 15px solid purple;
  }
&lt;/style&gt;</code></pre>
        <!-- testdiv -->
        <div :class="[dynamicClassName, 'alsoCanHaveStaticClasses']"></div>
        <!-- /testdiv -->
      </article>

      <article>
        <pre contenteditable="true">
<code>&lt;div
  :class="{
    '<span class="highlight">static-class-name</span>': <span class="highlightRed">condition1</span>,
    <span class="highlight">alsoCanHaveStaticClasses</span>: <span class="highlightRed">condition2</span>,
  }"  
&gt;&lt;/div&gt;
...
&lt;script&gt;
export default {
  data() {
    return {
      <span class="highlightRed">condition1</span>: true,
      <span class="highlightRed">condition2</span>: false,
    }
  },
}
&lt;/script&gt;
...
&lt;style&gt;
  .<span class="highlight">static-class-name</span> {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: yellow;
  }
  .<span class="highlight">alsoCanHaveStaticClasses</span> {
    border: 15px solid purple;
  }
&lt;/style&gt;</code></pre>
        <!-- testdiv -->
        <div
          :class="{
            'static-class-name': condition1,
            alsoCanHaveStaticClasses: condition2,
          }"
        ></div>
        <!-- /testdiv -->
      </article>

      <article>
        <pre contenteditable="true">
<code>&lt;div
  :class="[
    { <span class="highlight">alsoCanHaveStaticClasses</span>: <span class="highlightRed">condition1</span> },
    <span class="highlightBlue">dynamicClassName</span>,
    '<span class="highlight">anotherStaticClass</span>',
  ]"  
&gt;&lt;/div&gt;
...
&lt;script&gt;
export default {
  data() {
    return {
      <span class="highlightRed">condition1</span>: true,
      <span class="highlightBlue">dynamicClassName</span>: '<span class="highlight">static-class-name</span>',
    }
  },
}
&lt;/script&gt;
...
&lt;style&gt;
  .<span class="highlight">static-class-name</span> {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: yellow;
  }
  .<span class="highlight">alsoCanHaveStaticClasses</span> {
    border: 15px solid purple;
  }
  .<span class="highlight">anotherStaticClass</span> {
    transform: skew(20deg);
  }
&lt;/style&gt;</code></pre>
        <!-- testdiv -->
        <div
          :class="[
            { alsoCanHaveStaticClasses: condition1 },
            dynamicClassName,
            'anotherStaticClass',
          ]"
        ></div>
        <!-- /testdiv -->
      </article>
    </section>
  </div>
</template>

<script>
import preMixin from '@/preMixin'

export default {
  data() {
    return {
      dynamicClassName: 'static-class-name',
      condition1: true,
      condition2: false,
    }
  },
  mixins: [preMixin],
}
</script>

<style lang="scss" scoped>
section {
  article {
    .static-class-name {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: yellow;
    }
    .alsoCanHaveStaticClasses {
      border: 15px solid purple;
    }
    .anotherStaticClass {
      transform: skew(20deg);
    }
  }
}
</style>
