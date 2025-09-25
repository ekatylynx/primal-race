import styles from './RecapGrid.module.css';

interface GridItem {
	id?: number;
	width?: number;
	height?: number;
	content?: React.ReactNode;
	type?: string;
	videoUrl?: string;
	title?: string;
	textContent?: string;
	imageUrl?: string;
	imageAlt?: string;
	buttonLink?: string;
	buttonText?: string;
	backgroundColor?: string;
	blockIcon?: string;
}

export const gridData = [
	// 1 line: video, text block
	{
		id: 1,
		type: 'video',
		width: 710,
		height: 300,
		title: 'Title or video alt',
		videoUrl: 'https://www.youtube.com/embed/D2CKOIiabfg',
		videoThumbnail: '/thumbnails/gym-tour.jpg',
	},
	{
		id: 2,
		type: 'text',
		width: 412,
		height: 293,
		title: 'Primal Dubai – March 14–16, 2025',
		textContent:
			'Held over three action-packed days in Dubai, this was the biggest and most competitive Primal event to date. The highly anticipated Mixed Pairs category made its debut, alongside Solo...',
		buttonLink: '/about',
		blockIcon: '/bicycle.svg',
	},

	// 2nd line: video, text block, image
	{
		id: 3,
		type: 'video',
		width: 338,
		height: 293,
		title: 'Title or video alt',
		videoUrl: '/videos/training.mp4',
		videoThumbnail: '/thumbnails/training.jpg',
	},
	{
		id: 4,
		type: 'text',
		width: 412,
		height: 293,
		title: 'Primal Saudi – February 7, 2025',
		textContent:
			'Primal made its Saudi Arabia debut in Riyadh, and the response was explosive. Athletes from across the Kingdom and the GCC came together for a full day of competition packed with intensity...',
		blockIcon: '/layer.svg',
	},
	{
		id: 5,
		type: 'image',
		width: 338,
		height: 293,
		title: 'Title or image alt',
		imageUrl: '/images/team.jpg',
		imageAlt: 'Image alt',
	},

	// 3rd line: text block, video
	{
		id: 6,
		type: 'text',
		width: 412,
		height: 293,
		title: 'Testimonials',
		textContent:
			'"Primal Saudi blew my mind. The atmosphere, the workouts, and the community were unmatched. I felt proud just being there."– Mashael A., Team of 3 (KSA)',
		buttonLink: '/signup',
		blockIcon: '/weight.svg',
	},
	{
		id: 7,
		type: 'video',
		width: 712,
		height: 293,
		title: 'Title or video alt',
		videoUrl: '/videos/reviews.mp4',
		videoThumbnail: '/thumbnails/reviews.jpg',
	},
];

export default function RecapGrid() {
	const renderContent = (item: GridItem) => {};
	return (
		<div className={`${styles.gridContainer}`}>
			{/* {gridData.map((item, index) => (
				<div
					key={item.id}
					className={`${styles.gridItem} ${getItemSizeClass(index)}`}
					// style={{ backgroundColor: item.backgroundColor }}
				>
					{renderContent(item)}
				</div>
			))} */}
			<div className={`${styles.gridItem} ${styles.item1}`}>
				<iframe
					className={styles.video}
					src='https://www.youtube.com/embed/D2CKOIiabfg'
					title='YouTube video player'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
				></iframe>
			</div>
			<div className={`${styles.gridItem} ${styles.item2}`}>
				<div className={styles.textIconContainer}>
					<img className={styles.textIcon} src={'/bicycle.svg'} alt='bicycle' />
				</div>
				<div>
					<h3 className={styles.itemTitle}>Primal Dubai – March 14–16, 2025</h3>
					<p className={styles.itemDescription}>
						Held over three action-packed days in Dubai, this was the biggest
						and most competitive Primal event to date. The highly anticipated
						Mixed Pairs category made its debut, alongside Solo...
					</p>
				</div>
			</div>
			<div className={`${styles.gridItem} ${styles.item3}`}>
				<div className={styles.videoContainer}></div>
			</div>
			<div className={`${styles.gridItem} ${styles.item4}`}>
				<div className={styles.textIconContainer}>
					<img className={styles.textIcon} src={'/bicycle.svg'} alt='bicycle' />
				</div>
				<div>
					<h3 className={styles.itemTitle}>Primal Saudi – February 7, 2025</h3>
					<p className={styles.itemDescription}>
						Primal made its Saudi Arabia debut in Riyadh, and the response was
						explosive. Athletes from across the Kingdom and the GCC came
						together for a full day of competition packed with intensity...
					</p>
				</div>
			</div>
			<div className={`${styles.gridItem} ${styles.item5}`}></div>
			<div className={`${styles.gridItem} ${styles.item6}`}>
				<div className={styles.textIconContainer}>
					<img className={styles.textIcon} src={'/bicycle.svg'} alt='bicycle' />
				</div>
				<div>
					<h3 className={styles.itemTitle}>Testimonials</h3>
					<p className={styles.itemDescription}>
						"Primal Saudi blew my mind. The atmosphere, the workouts, and the
						community were unmatched. I felt proud just being there."
						<br />
						<span className={styles.itemDetails}>
							– Mashael A., Team of 3 (KSA)
						</span>
					</p>
				</div>
			</div>
			<div className={`${styles.gridItem} ${styles.item7}`}></div>
		</div>
	);
}
