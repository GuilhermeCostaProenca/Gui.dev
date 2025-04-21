import ToolsGrid from "../SkillsSection/ToolsGrid";
import CollaborateCard from "../SkillsSection/CollaborateCard";
import NavigationCard from "../SkillsSection/NavigationCard";
import GlobalReachCard from "../SkillsSection/GlobalReachCard";
import AnimationEffects from "../SkillsSection/AnimationEffects";

export default function SkillsAndTools() {
  return (
    <section className="w-full bg-black text-white py-32 px-4" id="skills">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* GRID UNIFICADO IGUAL O DO DEVANSH */}
        <div className="grid md:grid-cols-4 gap-6">
          <ToolsGrid />           {/* 1ª coluna */}
          <CollaborateCard />     {/* 2ª coluna */}
          <NavigationCard />      {/* 3ª coluna */}
          <GlobalReachCard />     {/* 4ª coluna */}
        </div>

        {/* ANIMAÇÕES */}
        <AnimationEffects />
      </div>
    </section>
  );
}
