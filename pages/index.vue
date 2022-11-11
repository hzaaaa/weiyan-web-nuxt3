<template>
	<NuxtLayout name="base-layout">
		<div class="container">
			<div id="banner">
				<div id="background">
					<div class="center" id="banner-content">
						<div class="title1">
							<img src="@/assets/image/banner_title.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.container #banner #background {
	height: vh(500);

	/* max-height: 750px; */
	background: url("@/assets/image/banner.jpg") no-repeat;
	background-position: center;
	background-size: cover;
}
#banner #background .center .title1 img {
	width: 656px;
	height: 105px;
}
</style>
