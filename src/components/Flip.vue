<template>
  <div class="rotate-container">
    <div class="flipper">
      <div class="front">
        <!-- 前面内容 -->
        <slot name="front"></slot>
      </div>
      <div class="back">
        <!-- 背面内容 -->
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.rotate-container {
  width: 320px;
  height: 20px;
  perspective: 1000px; /* 添加透视效果 */
}

.rotate-container:hover .flipper {
  transform: rotateY(180deg);
}

.flipper {
  transition-duration: 1s;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
}

.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.front {
  z-index: 2;
}

.back {
  transform: rotateY(180deg);
}
</style>
