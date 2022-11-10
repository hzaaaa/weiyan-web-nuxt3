<template>
	<NuxtLayout name="base-layout">
		<div v-for="i in 5" :key="i">
			<NuxtLink :to="`/article/${i}`">jump to news {{ i }}</NuxtLink>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss"></style>
