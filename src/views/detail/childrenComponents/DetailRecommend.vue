<template>
	<div class="recommend-info">
    <div class="info-desc " >
			<div class="start"></div>
				<div class="desc">商家推荐</div>
			<div class="end"></div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "DetailRecommend"
    }
</script>

<style scoped>
	.recommend-info {
		padding: 20px 0;
		border-bottom: 5px solid #f2f5f8;
	}

	.info-desc {
		padding: 0 15px;
	}

	.info-desc .start,
	.info-desc .end {
		position: relative;
		width: 90px;
		height: 1px;
		background-color: #a3a3a5;
	}

	.info-desc .start {
		float: left;
	}

	.info-desc .end {
		float: right;
	}

	.info-desc .start::before,
	.info-desc .end::after {
		position: absolute;
		bottom: 0;
		width: 5px;
		height: 5px;
		content: "";
		background-color: #333333;
	}

	.info-desc .end::after {
		right: 0;
	}

	.info-desc .desc {
		font-size: 19px;
		text-align: center;
		padding: 15px 0;
	}




</style>
