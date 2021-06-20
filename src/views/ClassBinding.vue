<template>
  <div class="about">
    <h1>Class binding ways</h1>
    <a href="https://vuejs.org/v2/guide/class-and-style.html" target="_blank"
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
    '<span class="highlight">static-class-name</span>': <span class="highlightGreen">condition1</span>,
    <span class="highlight">alsoCanHaveStaticClasses</span>: <span class="highlightGreen">condition2</span>,
  }"  
&gt;&lt;/div&gt;
...
&lt;script&gt;
export default {
  data() {
    return {
      <span class="highlightGreen">condition1</span>: true,
      <span class="highlightGreen">condition2</span>: false,
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
    { <span class="highlight">alsoCanHaveStaticClasses</span>: <span class="highlightGreen">condition1</span> },
    <span class="highlightBlue">dynamicClassName</span>,
    '<span class="highlight">anotherStaticClass</span>',
  ]"  
&gt;&lt;/div&gt;
...
&lt;script&gt;
export default {
  data() {
    return {
      <span class="highlightGreen">condition1</span>: true,
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
export default {
  data() {
    return {
      dynamicClassName: 'static-class-name',
      condition1: true,
      condition2: false,
    }
  },
}
</script>

<style lang="scss" scoped>
a {
  font-size: 20px;
  color: green;
  font-weight: bold;
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
    pre[contenteditable] {
      outline: none;
      flex: auto;
    }
    span {
      &.highlight {
        color: yellow;
      }
      &.highlightBlue {
        color: #679ddf;
      }
      &.highlightGreen {
        color: rgb(255, 71, 71);
      }
    }
    code {
      font-family: monospace, 'courier new';
      color: white;
      padding: 2px;
      font-size: 105%;
    }
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
