<template>
  <div>
    <h1>EventBus event</h1>
    <a
      class="resource"
      href="https://www.digitalocean.com/community/tutorials/vuejs-global-event-bus"
      target="_blank"
      >Resource</a
    >
    <section>
      <article class="eventBusWrapper">
        <div
          @click="change(-1)"
          class="changer"
          :style="{
            visibility: pages[selected] === 'props' ? 'hidden' : 'visible',
          }"
        >
          <span>&#10094;</span>
        </div>
        <div class="inner">
          <transition-group name="slide-fade" tag="div" mode="out-in">
            <img
              v-show="pages[selected] === 'props'"
              :key="selected"
              src="@/assets/props.png"
              class="props"
            />
            <img
              v-show="pages[selected] === 'bus'"
              :key="selected"
              src="@/assets/eventbus.jpeg"
              class="props"
            />
            <div
              v-show="pages[selected] === 'code'"
              :key="selected"
              class="code"
            >
              <div>
                <h1 class="highlightPink">In <i>@/EventBus.js</i></h1>
                <pre contenteditable="true">
<code>import Vue from 'vue'
export default <span class="highlightGreen">new Vue()</span></code></pre>
                <h1 class="highlightSky">In <i>@/Component1.vue</i></h1>
                <pre contenteditable="true">
<code>&lt;template&gt;
  &lt;button @click="<span class="highlightOrange">emitSomeEvent</span>"&gt;Generate Random Number&lt;/button&gt;
&lt;/template&gt;

&lt;script&gt;
import <span class="highlightGreen">EventBus</span> from '<span class="highlightPink">@/EventBus.js</span>'
export default {
  methods: {
    <span class="highlightOrange">emitSomeEvent</span>() {
      //Some stuff
      <span class="highlightGreen">EventBus</span>.<b><i>$emit</i></b>('<span class="highlight">buttonClicked</span>', <span class="highlightRed">Math.floor(Math.random() * 101)</span>)
    },
  },
}
&lt;/script&gt;</code></pre>
                <h1 class="highlightCotton">In <i>@/Component2.vue</i></h1>
                <pre contenteditable="true">
<code>&lt;template&gt;
  &lt;div&gt;&#10100;&#10100;<span class="highlightBlue"> number </span>&#10101;&#10101;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import <span class="highlightGreen">EventBus</span> from '<span class="highlightPink">@/EventBus.js</span>'

export default {
  data() {
    return {
      <span class="highlightBlue">number</span>: null,
    }
  },
  created() {
    <span class="highlightGreen">EventBus</span>.<b><i>$on</i></b>('<span class="highlight">buttonClicked</span>', <span class="highlight">(</span><span class="highlightRed">number</span><span class="highlight">) =&gt; (this.</span><span class="highlightBlue">number</span> <span class="highlight">=</span> <span class="highlightRed">number</span><span class="highlight">)</span>)
  },
}
&lt;/script&gt;
</code></pre>
              </div>
              <!-- testdiv -->
              <div class="testRes">
                <Component1 class="highlightSky" />
                <Component2 class="highlightCotton" />
              </div>
              <!-- /testdiv -->
            </div>
          </transition-group>
        </div>
        <div
          @click="change(1)"
          class="changer"
          :style="{
            visibility: pages[selected] === 'code' ? 'hidden' : 'visible',
          }"
        >
          <span>&#10095;</span>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import preMixin from '@/preMixin'
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'

export default {
  mixins: [preMixin],
  components: {
    Component1,
    Component2,
  },
  data() {
    return {
      pages: ['props', 'bus', 'code'],
      selected: 2,
    }
  },
  methods: {
    change(direction) {
      if (this.selected > 0 && direction < 0) {
        --this.selected
      } else if (this.selected < this.pages.length - 1 && direction > 0) {
        ++this.selected
      }
    },
  },
}
</script>

<style lang="scss" scoped>
article.eventBusWrapper {
  display: flex;
  min-height: 730px;
  padding-left: 0;
  padding-right: 0;
  align-items: stretch;
  .inner {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 700px;
    }
    .code {
      color: white;
      display: flex;
      align-items: center;
      .testRes * {
        font-size: 18px;
      }
      h1 {
        font-size: 30px;
      }
    }
  }
  .changer {
    display: flex;
    align-items: center;
    color: white;
    font-size: 50px;
    line-height: 50px;
    cursor: pointer;
    &:hover {
      color: aquamarine;
    }
    span {
      user-select: none;
      padding: 3px 10px 10px;
    }
  }
}
</style>
