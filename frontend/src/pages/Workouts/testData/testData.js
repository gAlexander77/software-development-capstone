const workoutsData = [
	{
		workoutName: "Dumbbell Bench Press",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-9e-dumbbell-bench-press-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-9e-dumbbell-bench-press-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The dumbbell bench press is a mainstay of workout enthusiasts worldwide. It’s a classic move for building a bigger, stronger chest. As such, it’s often placed first in mass-building chest workouts.",
		muscles: "Chest",
		equipment: "Dumbbell",
	},
	{
		workoutName: "Pushups",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-102a-push-up-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-102a-push-up-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The push-up is a popular bodyweight exercise that is commonly used in military and tactical physical fitness tests. It’s a classic movement to build upper-body muscle and strength, emphasizing the chest, triceps, and shoulders, but also working the upper back and core.",
		muscles: "Chest",
		equipment: "Body Only",
	},
	{
		workoutName: "Close-grip bench press",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-82e-close-grip-bench-press-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-82e-close-grip-bench-press-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The close-grip bench press is a popular exercise targeting the triceps and chest. The main difference between this exercise and the standard bench press is that the hands and elbows are placed closer together, which places more of an emphasis on the triceps. The close-grip bench press is often used as an accessory movement for the traditional bench press, or as a triceps builder for arm training. Similar to the bench press, it can be trained in low reps for strength or higher reps for muscle or strength endurance.",
		muscles: "Chest",
		equipment: "Barbell",
	},
	{
		workoutName: "Weighted pull-up",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-96c-weighted-pull-up-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-96c-weighted-pull-up-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-3.gif",
		description: "The weighted pull-up is a more advanced variation of the pull-up exercise in which the lifter adds extra weight to their body. Options for adding weight include a dip belt, weighted vest, chains, a dumbbell placed between the feet or legs, or looping a kettlebell over the foot. Like other pull-up variations, the weighted pull-up builds strength and muscle in the upper back, biceps, and core.",
		muscles: "Lats",
		equipment: ["Other",],
	},
	{
		workoutName: "Dumbbell Flyes",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-31e-dumbbell-chest-fly-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-31e-dumbbell-chest-fly-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The dumbbell chest fly is a popular exercise that targets the pectoral or chest muscles. It attempts to isolate the chest muscles, stretching and contracting them while limiting involvement of the shoulders. Unlike a press, where the elbows bend and flex, flyes should keep a relatively consistent elbow angle. The motion is sometimes compared to \"hugging a tree.\" Dumbbell flyes are usually performed for moderate to high reps, such as 8-12 reps per set or more, as part of a chest or upper-body focused workout. ",
		muscles: "Chest",
		equipment: "Dumbbell",
	},
	{
		workoutName: "Incline dumbbell bench press",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-3n-incline-dumbbell-bench-press-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-3n-incline-dumbbell-bench-press-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The incline dumbbell bench press is a popular upper-body exercise targeting the upper pectoral muscles. While it can be a strength-focused movement, it is usually performed for moderate to high reps, such as 8-12 reps per set or more, as part of upper-body or chest-focused training.",
		muscles: "Chest",
		equipment: "Dumbbell",
	},
	{
		workoutName: "Low-cable cross-over",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-5c-low-cable-cross-over-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-5c-low-cable-cross-over-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The low-cable cross-over is an isolation movement that uses a cable stack to target the upper portion of the pectoral muscles. It is common in upper-body and chest-focused muscle-building workouts, often in combination with presses or flyes from other angles to target all portions of the chest.",
		muscles: "Chest",
		equipment: "Cable",
	},
	{
		workoutName: "Barbell Bench Press - Medium Grip",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-81e-bench-press-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-81e-bench-press-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The bench press is a compound exercise that builds strength and muscle in the chest and triceps. When many people think of listing, the bench press is often the first exercise that comes to mind",
		muscles: "Chest",
		equipment: "Barbell",
	},
	{
		workoutName: "Chest dip",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-2m-chest-dip-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-2m-chest-dip-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The chest dip is a bodyweight exercise performed on parallel bars or on a pull-up and dip station. It targets the chest, triceps, and shoulders. Dips with a chest focus are usually performed with the torso leaning forward and the elbows angled out from the torso. Dips can be performed for low reps for strength or higher reps for muscle growth.",
		muscles: "Chest",
		equipment: "Other",
	},
	{
		workoutName: "Decline Dumbbell Flyes",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-31n-decline-dumbbell-chest-fly-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-31n-decline-dumbbell-chest-fly-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The decline dumbbell chest fly is an upper body isolation exercise targeting the lower chest. It will require less weight than a decline press, which makes it a great hypertrophy exercise with high reps.",
		muscles: "Chest",
		equipment: "Dumbbell",
	},
	{
		workoutName: "Bodyweight Flyes",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/2019-xdb-182s-double-bar-roll-out-chest-fly-m1.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/2019-xdb-182s-double-bar-roll-out-chest-fly-m2.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The double-bar roll-out chest fly is a chest exercise that utilizes two rotating barbells as \"handles\" for a chest fly. It targets the muscles of the chest, but is also an intense core workout. It's a tough movement that is usually performed in the chest-focused portion of a workout.",
		muscles: "Chest",
		equipment: "E-Z Curl Bar",
	},
	{
		workoutName: "Incline cable chest fly",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-10c-incline-cable-chest-fly-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-10c-incline-cable-chest-fly-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The incline cable chest fly is an isolation movement that uses a cable stack and an incline bench to target the upper portion of the pectoral muscles. It is common in upper-body and chest-focused muscle-building workouts, often after pressing movements like the barbell or dumbbell bench press or as a finishing movement at the end of the workout. It is often used in combination with other flyes to target the chest from different angles.",
		muscles: "Chest",
		equipment: "Cable",
	},
	{
		workoutName: "Decline barbell bench press",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-34n-decline-barbell-bench-press-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-34n-decline-barbell-bench-press-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The decline barbell bench press is a popular upper-body exercise targeting the lower pectoral muscles. While it can be a strength-focused movement, it is usually performed for moderate to high reps, such as 8-12 reps per set or more, as part of upper-body or chest-focused training.",
		muscles: "Chest",
		equipment: "Barbell",
	},
	{
		workoutName: "Wide-grip bench press",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-84e-wide-grip-bench-press-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-84e-wide-grip-bench-press-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The wide-grip bench press is a compound exercise targeting the chest and, to a lesser extent, the triceps. The main difference between this exercise and the standard bench press is that the hands are placed farther apart on the bar. Many lifters find they can handle more weight going wide than with narrower grips, although it's also worth noting that plenty of banged-up lifters have said benching with a wide grip may also have contributed to their shoulder injuries and pain. The wide-grip bench is often used as a chest-building movement in chest or upper-body workouts, or as an accessory movement for the traditional bench press.",
		muscles: "Chest",
		equipment: "Barbell",
	},
	{
		workoutName: "Reverse-grip incline dumbbell bench press",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-4n-reverse-grip-incline-dumbbell-bench-press-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-4n-reverse-grip-incline-dumbbell-bench-press-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The reverse-grip incline dumbbell bench press is an upper-body exercise targeting the pectoral muscles. Pressing with a reverse grip targets the upper chest in particular, especially when performed on an incline. This press variation is usually performed for moderate to high reps, such as 8-12 reps per set or more, as part of upper-body or chest-focused training.",
		muscles: "Chest",
		equipment: "Dumbbell",
	},
	{
		workoutName: "Cable Crossover",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-1c-cable-cross-over-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-1c-cable-cross-over-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The cable cross-over is an isolation movement that uses a cable stack to build bigger and stronger pectoral muscles. Since it's done using adjustable pulleys, you can target different parts of your chest by setting the pulleys at different levels. It is common in upper body and chest-focused muscle-building workouts, often as a pre-exhaust at the beginning of a workout, or a finishing movement at the end. It is often in combination with other presses or flyes to target the chest from different angles.",
		muscles: "Chest",
		equipment: "Cable",
	},
	{
		workoutName: "Barbell Incline Bench Press Medium-Grip",
		images: ["https://www.bodybuilding.com/images/2020/xdb/originals/xdb-42n-incline-bench-press-m1-16x9.jpg",
				"https://www.bodybuilding.com/images/2020/xdb/originals/xdb-42n-incline-bench-press-m2-16x9.jpg"],
		diagram: "https://artifacts.bbcomcdn.com/@bbcom/exercises-app/2.1.2/img/guide-1.gif",
		description: "The incline bench press is an upper body compound movement that targets the upper chest.",
		muscles: "Chest",
		equipment: "Barbell",
	},
	{
		workoutName: "",
		images: ["",""],
		diagram: "",
		description: "",
		muscles: "",
		equipment: "",
	},
];

export default workoutsData;