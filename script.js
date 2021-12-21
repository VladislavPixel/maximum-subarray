const maxSubArray = function(nums) {
	if (nums.length > 1) {
		const arrayNegativeValues = []
		const arrayPozitiveValues = []
		let isCurrentMax
		let sumBetween
		for (let x = 0; x < nums.length; x++) {
			if (nums[x] <= 0) {
				arrayNegativeValues.push(nums[x])
			}
			if (isCurrentMax) {
				sumBetween += nums[x]
			}
			if (nums[x] > 0) {
				arrayPozitiveValues.push(nums[x])
				if (isCurrentMax === undefined) {
					isCurrentMax = true
					sumBetween = nums[x]
					continue
				}
				if (isCurrentMax) {
					if (sumBetween > nums[x]) {
						arrayPozitiveValues.push(sumBetween) 
					} else {
						sumBetween = nums[x]
					}
				}
			}
		}
		if (arrayNegativeValues.length === nums.length) return Math.max(...nums)
		if (arrayPozitiveValues.length === 1) return arrayPozitiveValues[0]
		return Math.max(...arrayPozitiveValues)
	}
	return nums[0]
}

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6
// console.log(maxSubArray([1])) // 1
// console.log(maxSubArray([5,4,-1,7,8])) // 23
// console.log(maxSubArray([-3,1,-2,2])) // 2
// console.log(maxSubArray([-2,1])) // 1
// console.log(maxSubArray([1,2])) // 3
// console.log(maxSubArray([8,-19,5,-4,20])) // 21
// console.log(maxSubArray([2,-1,1,1])) // 3
// console.log(maxSubArray([-5,8,-5,1,1,-3,5,5,-3,-3,6,4,-7,-4,-8,0,-1,-6])) // 16