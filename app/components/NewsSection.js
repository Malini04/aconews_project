import BreakingNews from './BreakingNews';
import DailyFeed from './DailyFeed';

const NewsSection = () => {
    return (
        <div className="w-full max-w-[860px] mx-auto mt-8 grid grid-cols-4 gap-8 border-b-4 border-gray-700">
            {/* Breaking News Section (75% width) */}
            <div className="col-span-3">
                <BreakingNews />
            </div>

            {/* Daily Feed Section (25% width) */}
            <div className="col-span-1">
                <DailyFeed />
            </div>
        </div>
    );
};

export default NewsSection;
