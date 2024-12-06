import { ExperienceEntry } from "@/components/exp-entry";

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Experience</h1>
      <p className="text-foreground/80 mb-12 text-base">
        A brief overview of my journey in robotics, drone operations, and
        innovative technology projects.
      </p>
      <div className="space-y-12">
        <ExperienceEntry
          title="Drone Operator and Emergency Response Specialist"
          company="Coastal Rescue Team"
          period="2021 - Present"
          description="Conducted surveillance and rescue operations using advanced drones like the DJI Matrice 300 RTK. Managed over 150 flight hours and performed aerial deployment of life jackets to enhance emergency response efficiency."
        />
        <ExperienceEntry
          title="Robotics Developer"
          company="ROBORESCUE UMA, University of Málaga"
          period="2020 - Present"
          description="Collaborated on the design and development of an articulated mobile robot for emergency scenarios. Applied advanced robotics concepts to create innovative solutions for rescue operations."
        />
        <ExperienceEntry
          title="Life Jacket Deployment System Designer"
          company="Independent Project"
          period="2021"
          description="Designed, fabricated, and implemented a drone-based system to release life jackets rapidly in emergencies. This project improved rescue response times significantly and demonstrated the potential of integrating drone technology with life-saving operations."
        />
      </div>
    </div>
  );
}
