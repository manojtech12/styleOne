import Nav from "./nav";
export default function About() {
    return (
        <>
     
        <div className="about-page">
            <img src="/images/banner.png" alt="StyleOne fashion collection" />

            <div className="about-content">
                <h1>About StyleOne</h1>

                <p>
                    At StyleOne, we believe fashion is more than just clothing.
                    It's a way to express your personality, confidence, and individuality.

                    Our goal is to make discovering your perfect style simple and enjoyable.
                    From everyday casual wear to trendy outfits, we bring together a
                    collection of styles that suit different tastes and occasions.

                    With our AI-powered outfit suggestions, finding what to wear
                    becomes easier. Get personalized clothing recommendations
                    based on your preferences, style, and occasion.
                </p>

                <h2>What Makes Us Different?</h2>

                <ul>
                    <li>Trending Fashion Collections</li>
                    <li>AI-Powered Outfit Suggestions</li>
                    <li>Personalized Clothing Recommendations</li>
                    <li>Easy and Smooth Shopping Experience</li>
                </ul>
            </div>
        </div>
        </>
    );
}
