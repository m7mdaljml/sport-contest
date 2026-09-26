<template>
  <footer class="footer light">
    <div class="footer-inner">
      <div class="footer-copy">
        <span class="footer-sign">&copy;</span>
        {{ year }} {{ tGlobal.footer.author }}
      </div>

      <div class="footer-social">
        <a
          class="footer-link"
          href="https://github.com/M7mdaljml"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          class="footer-link"
          href="https://linkedin.com/in/mohammad-aljamal1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a class="footer-link" href="mailto:mohammadaljamal121@gmail.com">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { tGlobal } from "../../../i18n";

const year = new Date().getFullYear();
</script>
