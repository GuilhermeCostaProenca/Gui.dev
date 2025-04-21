import ToolsGrid from "../SkillsSection/ToolsGrid";
import CollaborateCard from "../SkillsSection/CollaborateCard";
import NavigationCard from "../SkillsSection/NavigationCard";
import GlobalReachCard from "../SkillsSection/GlobalReach";
import AnimationEffects from "../SkillsSection/AnimationEffects";

export default function SkillsAndTools() {
  return (
    <section className="w-full bg-black text-white py-32 px-4" id="skills">
      <div className="max-w-6xl mx-auto space-y-24">
        <ToolsGrid />
        
        <div className="grid md:grid-cols-3 gap-6">
          <CollaborateCard />
          <NavigationCard />
          <GlobalReachCard />
        </div>

        <AnimationEffects />
      </div>
    </section>
  );
}
