<template>
  <div>
    <countdown :countdownSize="countdownSize" :deadlineISO="deadlineISO" />
  </div>
</template>

<script>
export default {
  name: 'AppInstallation',
  data() {
    return {
      countdownSize: '3rem',
      deadlineISO: '2024-09-03T12:00:00',
    };
  },
};
</script>
