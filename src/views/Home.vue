<template>
  <!--
    Wrapping all elements of this view in a div even though vue3 allows
    for multiple elements per template without a root element.
    However, since there is a class applied to the router-view element
    in App.vue, vue will not know which sub element to apply that class
    onto, therefore, by grouping all under a div tag, the class applied
    on router-view element in App.vue will be inherited here on this div.
  -->
  <div style="max-width: 46em">
    <!--
      Need to use another div to apply the mx-6 style, because the main div have
      a container class applied to it from App.vue's router-view dynamic element.
      The container and mx-6 class cannot be used on the same element, as it will
      cause center alignment to get screwed up. Thus a new div is needed for margin.
    -->
    <div class="mx-6">
      <p class="title is-spaced">Interactive Blockchain Demo</p>

      <p class="subtitle">
        This Interactive Blockchain Demo website was created to help everyone
        learning about blockchain technology see and experiment to learn how
        things actually work instead of just reading about it somewhere.
      </p>
      <hr />

      <p class="subtitle">Select a concept to start learning!</p>

      <router-link
        class="button is-light is-success is-fullwidth is-large"
        :to="{ name: 'hash' }"
      >
        Hash
      </router-link>
      <br />

      <router-link
        class="button is-light is-success is-fullwidth is-large"
        :to="{ name: 'pow' }"
      >
        Proof of Work
      </router-link>
      <br />

      <router-link
        class="button is-light is-success is-fullwidth is-large"
        :to="{ name: 'signatures' }"
      >
        Signatures Demo
      </router-link>
      <br />

      <router-link
        class="button is-light is-success is-fullwidth is-large"
        :to="{ name: 'verify-signature' }"
      >
        Verify Signature
      </router-link>
    </div>
  </div>
</template>
