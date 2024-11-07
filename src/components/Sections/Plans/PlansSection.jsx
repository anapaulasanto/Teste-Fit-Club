import styles from '../../../styles/PlansSection.module.scss'
import CardPlans from './CardPlans';

const PlansSection = () => {
    return (
        <section className={styles.plans_section}>
            <div className={styles.title}>
                <h1>OUR PRICING PLAN</h1>
            </div>
            <div className={styles.subtitle}>
                <p>Our pricing plan comes with various membership tiers, each tollored to cater to different preferences and fitness aspirations</p>
            </div>
            <div className={styles.cards_plans}>
                <CardPlans 
                    title="Basic Plan"
                    subtitle="$16"
                    descriptions={[
                        "Smart workout plan",
                        "At home workouts"
                    ]}
                />
                <CardPlans 
                    title="Weekly Plan"
                    subtitle="$25"
                    descriptions={[
                        "PRO Gyms",
                        "Smart workout plan",
                        "At home workouts"
                    ]}
                />
                <CardPlans 
                    title="Monthly Plan"
                    subtitle="$45"
                    descriptions={[
                        "ELITE Gyms & Classes",
                        "PRO Gyms",
                        "Smart workout plan",
                        "At home workouts",
                        "Personal Training"
                    ]}
                />
            </div>

        </section>
    );
};

export default PlansSection;