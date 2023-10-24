import styles from '@/styles/TutorialSkeletonCard.module.css';

export default function TutorialSkeletonCard() {
    return (
        <div className="col-lg-4 col-sm-6">
            <div className={`cardtutorial ${styles.skeleton}`}>
                <div className="cardtutorial-header">
                    <div className={styles.skeletonThumbnail} />
                    <div className={styles.skeletonPlayButton} />
                </div>
            </div>
        </div>
    );
}
