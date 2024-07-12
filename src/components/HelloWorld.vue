<template>
  <div class="viewer-container" id="viewerContainer"></div>
  <div class="buttonContainer">
    <button @click="startAction">开始</button>
    <button @click="stopAction">结束</button>
  </div>
</template>

<script setup lang="ts">
import * as Cesium from 'cesium'
import { Viewer } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import MVTImageryProvider from 'mvt-imagery-provider'
import { onMounted, onUnmounted } from 'vue'

let viewer: Viewer
onMounted(async () => {
  viewer = new Viewer('viewerContainer', {
    animation: false, // 是否创建动画小器件，左下角仪表
    baseLayerPicker: false, // 是否显示图层选择器
    fullscreenButton: false, // 是否显示全屏按钮
    vrButton: false, // 是否显示VR按钮
    geocoder: false, // 是否显示地名查找控件
    homeButton: false, // 是否显示Home按钮
    infoBox: false, // 是否显示信息框
    sceneModePicker: false, // 是否显示3D/2D选择器
    selectionIndicator: false, // 是否显示选取指示器组件
    timeline: false, // 是否显示时间线
    navigationHelpButton: false, // 是否显示右上角的帮助按钮
    navigationInstructionsInitiallyVisible: false, // 是否在初始加载时显示导航帮助信息
  })
  viewer.cesiumWidget.creditContainer.style.display = 'none'

  // 加载mvt数据
  const provider = await MVTImageryProvider.fromUrl('./style/style.json', {
    accessToken: 'pk.eyJ1IjoibWluZ2xlLTIwMjMiLCJhIjoiY2xmcm44M3B0MDdoNjN3cXRoZXV1N2FveSJ9.NDA3K4LcsCQ2Ff6zQzYgdg',
  })

  viewer.scene.imageryLayers.addImageryProvider(provider)
  console.log(provider, 'provider=>')

  // const start = Cesium.JulianDate.fromDate(new Date(2023, 6, 4, 10, 0, 0))
  // const stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate())

  // viewer.clock.startTime = start.clone()
  // viewer.clock.stopTime = stop.clone()
  // viewer.clock.currentTime = start.clone()
  // viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP
  // viewer.clock.multiplier = 10

  // const position = new Cesium.SampledPositionProperty()

  // const positions = [
  //   Cesium.Cartesian3.fromDegrees(-75.1, 39.57, 100),
  //   Cesium.Cartesian3.fromDegrees(-75.2, 39.57, 100),
  //   Cesium.Cartesian3.fromDegrees(-75.3, 39.57, 100),
  // ]

  // const times = [
  //   Cesium.JulianDate.addSeconds(start, 0, new Cesium.JulianDate()),
  //   Cesium.JulianDate.addSeconds(start, 120, new Cesium.JulianDate()),
  //   Cesium.JulianDate.addSeconds(start, 240, new Cesium.JulianDate()),
  // ]

  // position.addSamples(times, positions)
  // console.log(position, 'position')

  // const entity = viewer.entities.add({
  //   position: position,
  //   point: {
  //     pixelSize: 10,
  //     color: Cesium.Color.RED,
  //   },
  //   // viewFrom: new Cesium.Cartesian3(-100, 100, 100),
  // })
  // viewer.trackedEntity = entity

  // position.setInterpolationOptions({
  //   interpolationDegree: 5,
  //   interpolationAlgorithm: Cesium.LagrangePolynomialApproximation,
  // })
  // // 定位到第一个点
  // viewer.camera.flyTo({
  //   destination: positions[0],
  //   orientation: {
  //     heading: Cesium.Math.toRadians(0),
  //     pitch: Cesium.Math.toRadians(-30),
  //     roll: Cesium.Math.toRadians(0),
  //   },
  // })
  // 定位到 114，23.53
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(114, 23.53, 5000),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-30),
      roll: Cesium.Math.toRadians(0),
    },
  })
})
function startAction() {
  viewer.clock.shouldAnimate = true
}
function stopAction() {
  viewer.clock.shouldAnimate = false
}
onUnmounted(() => {
  // handler.destroy()
})
</script>

<style scoped>
.viewer-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.buttonContainer {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 999;
}
</style>
