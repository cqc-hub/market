<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <p>参数信息</p>
    <table :key="index" class="info-size" v-for="(table, index) in paramInfo.sizes">
      <tr :key="indey" v-for="(tr, indey) in table">
        <td :key="indez" v-for="(td, indez) in tr">{{ td }}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr :key="index" v-for="(info, index) in paramInfo.infos">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.param-info {
  font-size: 12px;
  padding: 20px 15px;
  border-bottom: 3px solid #ebeef1;
}

.param-info p {
  font-size: 20px;
  margin-bottom: 10px;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  width: 70px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}

.param-value {
  color: deeppink;
}

.info-img img {
  width: 100%;
}
</style>
