<template>
  <div>
    <h1>v-model on custom component</h1>
    <a
      class="resource"
      href="https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components"
      target="_blank"
      >Resource</a
    >
    <section>
      <article>
        <pre contenteditable="true">
<code>&lt;p&gt;First Name: &#10100;&#10100; <span class="highlight">firstName</span> &#10101;&#10101;&lt;/p&gt;
&lt;input placeholder="First Name" v-model="<span class="highlight">firstName</span>" /&gt;
...
data() {
  return {
    <span class="highlight">firstName</span>: '',
  }
}</code></pre>
        <p>
          First Name:<span class="highlight"> {{ firstName }}</span>
        </p>
        <input placeholder="First Name" v-model="firstName" />
      </article>

      <article>
        <pre contenteditable="true">
<code>&lt;p>First Name: &#10100;&#10100; <span class="highlight">customFirstName</span> &#10101;&#10101;&lt;/p&gt;
&lt;BaseInput
  label="First Name"
  :<span class="highlight">value</span>="<span class="highlight">customFirstName</span>"
  @<span class="highlightRed">input</span>="<span class="highlightRed">updateValue</span>"
  placeholder="First Name"
/&gt;
//or @<span class="highlightRed">input</span>="(<span class="highlightBlue">newFirstName</span>) => (<span class="highlight">customFirstName</span> = <span class="highlightBlue">newFirstName</span>)"
...
data() {
  return {
    <span class="highlight">customFirstName</span>: '',
  }
}
methods: {
  <span class="highlightRed">updateValue</span>(<span class="highlightBlue">newFirstName</span>) {
    this.<span class="highlight">customFirstName</span> = <span class="highlightBlue">newFirstName</span>
  },
},
...
//In BaseInput component
&lt;div class="inputWrapper"&gt;
  &lt;label :for="label"&gt;&#10100;&#10100; label &#10101;&#10101;&lt;/label&gt;
  &lt;input
    :<span class="highlight">value</span>="<span class="highlight">value</span>"
    :id="label"
    :placeholder="placeholder"
    @<span class="highlightRed">input</span>="$emit('<span class="highlightRed">input</span>', <span class="highlightBlue">$event.target.value</span>)"
  /&gt;
&lt;/div&gt;</code></pre>
        <p>
          First Name:<span class="highlight"> {{ customFirstName }}</span>
        </p>
        <BaseInput
          label="First Name"
          :value="customFirstName"
          @input="updateValue"
          placeholder="First Name"
        />
      </article>

      <article>
        <pre contenteditable="true">
<code>&lt;p>Last Name: &#10100;&#10100; <span class="highlight">customLastName</span> &#10101;&#10101;&lt;/p&gt;
&lt;BaseInput
  label="Last Name"
  <span class="highlightRed">v-model</span>="<span class="highlight">customLastName</span>"
  placeholder="Last Name"
/&gt;
...
data() {
  return {
    <span class="highlight">customLastName</span>: '',
  }
}
...
//In BaseInput component
&lt;div class="inputWrapper"&gt;
  &lt;label :for="label"&gt;&#10100;&#10100; label &#10101;&#10101;&lt;/label&gt;
  &lt;input
    :<span class="highlight">value</span>="<span class="highlightRed">value</span>"
    :id="label"
    :placeholder="placeholder"
    @<span class="highlightRed">input</span>="$emit('<span class="highlightRed">input</span>', <span class="highlight">$event.target.value</span>)"
  /&gt;
&lt;/div&gt;</code></pre>
        <p>
          Last Name:<span class="highlight"> {{ customLastName }}</span>
        </p>
        <BaseInput
          label="Last Name"
          v-model="customLastName"
          placeholder="Last Name"
        />
      </article>
    </section>
  </div>
</template>

<script>
import preMixin from '@/preMixin'
import BaseInput from '@/components/BaseInput'

export default {
  components: {
    BaseInput,
  },
  data() {
    return {
      firstName: '',
      customFirstName: '',
      customLastName: '',
    }
  },
  methods: {
    updateValue(newFirstName) {
      this.customFirstName = newFirstName
    },
  },
  mixins: [preMixin],
}
</script>

<style lang="scss" scoped>
section {
  article {
    > p {
      flex: 1;
      margin: 0 20px;
      padding: 5px;
      border: 1px solid white;
      word-break: break-word;
    }
  }
}
</style>
