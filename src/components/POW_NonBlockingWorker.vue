<template>
  <div v-if="loading">Loading...</div>

  <!--
    Only show the results section if the hash has been calculated already.
    Which means that this will only appear after the first POW is calculated.
    This will not be shown on load, where there is no POW and time to show yet.
  -->
  <div v-else-if="hash">
    Time taken in seconds: <code>{{ (time / 1000).toFixed(2) }}</code>
    <br />

    POW: <code>{{ pow }}</code>
    <br />

    <!-- Word wrap added as this will be quite long and will overflow on mobile -->
    Final hash: <code style="word-wrap: break-word">{{ hash }}</code>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import POWWorker from "../pow-worker?worker";

export default defineComponent({
  name: "NonBlockingWorker",

  props: {
    startCompute: {
      type: Boolean,
      required: true,
    },

    difficulty: {
      type: Number,
      required: true,
    },
    blockData: {
      type: String,
      required: true,
    },
  },

  emits: ["compute-done"],

  data() {
    return {
      loading: false,

      // Time it took to calculate the POW number in milliseconds
      time: 0,
      pow: 0,
      hash: "",
    };
  },

  watch: {
    startCompute(start) {
      // Only run compute function if it is set to true.
      // Where parent component setting startCompute to true is used as the trigger to start computation.
      // This component will set startCompute to false once compute completes by emitting an event up.
      if (start) this.compute();
    },
  },

  methods: {
    compute() {
      this.loading = true;

      // Reset the pow and hash
      this.pow = 0;
      this.hash = "";
      this.time = 0;

      // Get start time to compute time of hashing later
      const startTime = performance.now();

      if (window.Worker) {
        // https://vitejs.dev/guide/features.html#web-workers
        const worker = new POWWorker();

        worker.postMessage({
          blockData: this.blockData,
          difficulty: this.difficulty,
        });

        worker.onmessage = (e) => {
          // Calculate time taken right after computation completes before doing anything else
          this.time = performance.now() - startTime;
          this.hash = e.data.hash;
          this.pow = e.data.pow;
          this.loading = false;

          this.$emit("compute-done");
        };
      } else {
        alert("Your browser doesn't support Web Workers!");
      }
    },
  },
});
</script>