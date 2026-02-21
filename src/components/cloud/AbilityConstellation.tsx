import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ability {
  id: string;
  name: string;
  summary: string;
  x: number;
  y: number;
  connections: string[];
  color: string;
}

const abilities: Ability[] = [
  { id: 'cloud', name: 'Cloud Computing', summary: 'Architecting scalable Azure infrastructure for enterprise workloads.', x: 0.5, y: 0.12, connections: ['networking', 'storage', 'vm', 'security', 'kubernetes', 'migration', 'monitoring', 'entra'], color: 'hsl(187, 100%, 50%)' },
  { id: 'networking', name: 'Azure Networking', summary: 'Designing VNets, NSGs, and hybrid secure connectivity architectures.', x: 0.18, y: 0.18, connections: ['cloud', 'security', 'firewall', 'migration'], color: 'hsl(200, 80%, 60%)' },
  { id: 'entra', name: 'Microsoft Entra ID', summary: 'Managing RBAC, MFA, SSO, and conditional access policies.', x: 0.35, y: 0.05, connections: ['security', 'cloud', 'powershell', 'monitoring'], color: 'hsl(340, 70%, 55%)' },
  { id: 'security', name: 'Security & Identity', summary: 'Implementing zero-trust access control and governance strategies.', x: 0.3, y: 0.18, connections: ['cloud', 'firewall', 'networking', 'monitoring', 'entra'], color: 'hsl(0, 70%, 55%)' },
  { id: 'firewall', name: 'Firewall & WAF', summary: 'Protecting workloads using Azure-native perimeter security.', x: 0.08, y: 0.28, connections: ['security', 'networking'], color: 'hsl(15, 65%, 50%)' },
  { id: 'storage', name: 'Azure Storage', summary: 'Implementing durable and cost-efficient cloud data strategies.', x: 0.82, y: 0.18, connections: ['cloud', 'databases', 'backup', 'migration'], color: 'hsl(170, 80%, 45%)' },
  { id: 'vm', name: 'Azure Virtual Machines', summary: 'Provisioning and managing scalable production compute workloads.', x: 0.65, y: 0.22, connections: ['cloud', 'virtualization', 'backup', 'monitoring'], color: 'hsl(195, 80%, 55%)' },
  { id: 'virtualization', name: 'Virtualization', summary: 'Abstracting compute using Azure VMs and Hyper-V environments.', x: 0.6, y: 0.35, connections: ['cloud', 'vm', 'docker', 'linux'], color: 'hsl(190, 70%, 50%)' },
  { id: 'kubernetes', name: 'Kubernetes (AKS)', summary: 'Orchestrating enterprise container workloads at scale.', x: 0.72, y: 0.48, connections: ['docker', 'cloud', 'iac'], color: 'hsl(220, 75%, 55%)' },
  { id: 'docker', name: 'Docker', summary: 'Containerizing applications for portable cloud deployments.', x: 0.52, y: 0.48, connections: ['linux', 'cloud', 'kubernetes'], color: 'hsl(205, 85%, 55%)' },
  { id: 'linux', name: 'Linux', summary: 'Administering reliable server and container environments.', x: 0.32, y: 0.55, connections: ['docker', 'bash', 'virtualization'], color: 'hsl(45, 70%, 55%)' },
  { id: 'bash', name: 'Bash Scripting', summary: 'Automating Unix-based system and deployment tasks.', x: 0.42, y: 0.72, connections: ['linux', 'powershell', 'docker'], color: 'hsl(120, 40%, 50%)' },
  { id: 'powershell', name: 'PowerShell', summary: 'Automating Azure administration and identity management workflows.', x: 0.65, y: 0.72, connections: ['entra', 'iac', 'bash'], color: 'hsl(215, 60%, 60%)' },
  { id: 'iac', name: 'Infrastructure as Code', summary: 'Automating deployments using ARM and Bicep templates.', x: 0.85, y: 0.6, connections: ['cloud', 'kubernetes', 'powershell', 'arm', 'bicep'], color: 'hsl(270, 50%, 55%)' },
  { id: 'databases', name: 'Azure SQL & Databases', summary: 'Managing secure relational enterprise data platforms.', x: 0.9, y: 0.38, connections: ['storage', 'cloud', 'fabric', 'powerbi'], color: 'hsl(210, 70%, 55%)' },
  { id: 'fabric', name: 'Microsoft Fabric', summary: 'Building unified analytics and enterprise data pipelines.', x: 0.12, y: 0.45, connections: ['databases', 'powerbi', 'ai', 'copilot'], color: 'hsl(260, 60%, 60%)' },
  { id: 'ai', name: 'Azure OpenAI & AI Apps', summary: 'Developing AI-powered applications using LLM integration.', x: 0.4, y: 0.3, connections: ['cloud', 'fabric', 'foundry'], color: 'hsl(280, 65%, 60%)' },
  { id: 'foundry', name: 'Microsoft Azure Foundry', summary: 'Integrating embeddings and AI models into enterprise solutions.', x: 0.55, y: 0.3, connections: ['ai', 'cloud'], color: 'hsl(300, 60%, 55%)' },
  { id: 'copilot', name: 'Azure Copilot', summary: 'Leveraging AI-assisted analytics and reporting capabilities.', x: 0.18, y: 0.35, connections: ['fabric', 'ai'], color: 'hsl(290, 70%, 60%)' },
  { id: 'migration', name: 'Azure Migration', summary: 'Planning and executing secure workload migrations to Azure.', x: 0.88, y: 0.48, connections: ['cloud', 'networking', 'storage'], color: 'hsl(25, 70%, 55%)' },
  { id: 'monitoring', name: 'Monitoring & Observability', summary: 'Using Azure Monitor and Sentinel for proactive visibility.', x: 0.22, y: 0.75, connections: ['cloud', 'security', 'powerbi'], color: 'hsl(50, 75%, 55%)' },
  { id: 'backup', name: 'Backup & Disaster Recovery', summary: 'Designing resilient recovery and business continuity strategies.', x: 0.95, y: 0.22, connections: ['storage', 'vm', 'cloud'], color: 'hsl(160, 60%, 45%)' },
  { id: 'arm', name: 'ARM Templates', summary: 'Defining Azure infrastructure declaratively for repeatable deployments.', x: 0.78, y: 0.63, connections: ['iac', 'cloud', 'powershell'], color: 'hsl(260, 55%, 60%)' },
  { id: 'devops', name: 'Azure DevOps CI/CD', summary: 'Implemented automated build and deployment pipelines to Azure.', x: 0.75, y: 0.85, connections: ['cloud', 'iac', 'powershell', 'portfolio', 'kubernetes'], color: 'hsl(225, 80%, 55%)' },
  { id: 'bicep', name: 'Bicep', summary: 'Simplifying Azure infrastructure code with modular template design.', x: 0.92, y: 0.63, connections: ['iac', 'cloud', 'arm'], color: 'hsl(275, 60%, 55%)' }
];

const AbilityConstellation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [offsets, setOffsets] = useState<Record<string, { dx: number; dy: number }>>({});
  const animRef = useRef<number>();
  const timeRef = useRef(0);

  const animate = useCallback(() => {
    timeRef.current += 0.005;
    const t = timeRef.current;
    const newOffsets: Record<string, { dx: number; dy: number }> = {};
    abilities.forEach((a, i) => {
      const seed = i * 1.7;
      newOffsets[a.id] = {
        dx: Math.sin(t + seed) * 12 + Math.cos(t * 0.7 + seed * 2) * 8,
        dy: Math.cos(t * 0.8 + seed) * 10 + Math.sin(t * 0.5 + seed * 1.3) * 6,
      };
    });
    setOffsets(newOffsets);
    animRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (!hoveredId) {
      animRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [hoveredId, animate]);

  const getPos = (a: Ability) => {
    const o = offsets[a.id] || { dx: 0, dy: 0 };
    const px = anyActive ? 0 : o.dx;
    const py = anyActive ? 0 : o.dy;
    return { x: a.x * 100 + px * 0.1, y: a.y * 100 + py * 0.1 };
  };

  const [showAll, setShowAll] = useState(false);

  const isConnected = (id: string) => {
    if (showAll) return true;
    if (!hoveredId) return false;
    const hovered = abilities.find(a => a.id === hoveredId);
    return hovered?.connections.includes(id) || id === hoveredId;
  };

  const anyActive = hoveredId || showAll;

  return (
    <section id="abilities" className="py-24 px-6 bg-muted/20 relative overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display-cloud text-gradient-cloud mb-4 text-center">
          Core Abilities
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-12 max-w-lg mx-auto">
          A living system of interconnected skills. Hover to explore.
        </p>

        <div
          ref={containerRef}
          className="relative w-full min-h-[500px] md:min-h-[700px]"
          style={{ aspectRatio: '16 / 12' }}
        >
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {abilities.map(a =>
              a.connections
                .filter(cId => cId > a.id) // avoid duplicate lines
                .map(cId => {
                  const target = abilities.find(b => b.id === cId);
                  if (!target) return null;
                  const from = getPos(a);
                  const to = getPos(target);
                  const lineActive = anyActive && (isConnected(a.id) && isConnected(target.id));
                  const dimmed = anyActive && !lineActive;
                  return (
                    <line
                      key={`${a.id}-${cId}`}
                      x1={`${from.x}%`}
                      y1={`${from.y}%`}
                      x2={`${to.x}%`}
                      y2={`${to.y}%`}
                      stroke={lineActive ? 'hsl(187, 100%, 50%)' : 'hsl(200, 30%, 30%)'}
                      strokeWidth={lineActive ? 0.15 : 0.08}
                      opacity={dimmed ? 0.1 : lineActive ? 0.8 : 0.25}
                      style={{ transition: 'all 0.5s ease' }}
                    />
                  );
                })
            )}
          </svg>

          {/* Ability dots */}
          {abilities.map(a => {
            const pos = getPos(a);
            const active = hoveredId === a.id;
            const connected = isConnected(a.id);
            const dimmed = anyActive && !connected;

            return (
              <div
                key={a.id}
                className="absolute"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: 'translate(-50%, -50%)',
                  transition: anyActive ? 'left 0.5s ease, top 0.5s ease' : undefined,
                  zIndex: active ? 20 : 10,
                }}
                onMouseEnter={() => setHoveredId(a.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Outer glow */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: active ? 48 : connected ? 28 : 20,
                    height: active ? 48 : connected ? 28 : 20,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: a.color,
                    opacity: active ? 0.25 : (showAll || connected) ? 0.15 : 0.06,
                    filter: `blur(${active ? 16 : 8}px)`,
                    transition: 'all 0.4s ease',
                  }}
                />
                {/* Core dot */}
                <div
                  className="rounded-full cursor-pointer relative"
                  style={{
                    width: active ? 16 : connected ? 10 : 8,
                    height: active ? 16 : connected ? 10 : 8,
                    background: a.color,
                    boxShadow: active
                      ? `0 0 20px ${a.color}, 0 0 40px ${a.color}40`
                      : `0 0 8px ${a.color}60`,
                    opacity: dimmed ? 0.3 : 1,
                    transition: 'all 0.4s ease',
                  }}
                />

                {/* Tooltip - show on individual hover or show name label when showAll */}
                <AnimatePresence>
                  {active && !showAll && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-56 pointer-events-none"
                    >
                      <div
                        className="backdrop-blur-xl rounded-xl p-4 border"
                        style={{
                          background: 'hsl(220, 30%, 10% / 0.85)',
                          borderColor: `${a.color}40`,
                          boxShadow: `0 8px 32px hsl(0 0% 0% / 0.4), 0 0 20px ${a.color}15`,
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ background: a.color, boxShadow: `0 0 6px ${a.color}` }}
                          />
                          <span className="text-sm font-bold font-display-cloud text-foreground">
                            {a.name}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {a.summary}
                        </p>
                      </div>
                    </motion.div>
                  )}
                  {showAll && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 pointer-events-none whitespace-nowrap"
                    >
                      <span
                        className="text-[10px] font-display-cloud font-medium px-1.5 py-0.5 rounded backdrop-blur-sm"
                        style={{ color: a.color, background: 'hsl(220 30% 10% / 0.6)' }}
                      >
                        {a.name}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Central "Show All" dot */}
          <div
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 30,
            }}
            onMouseEnter={() => setShowAll(true)}
            onMouseLeave={() => setShowAll(false)}
          >
            <motion.div
              className="relative cursor-pointer flex items-center justify-center"
              animate={{
                boxShadow: showAll
                  ? '0 0 30px hsl(187 100% 50% / 0.4), 0 0 60px hsl(187 100% 50% / 0.15)'
                  : '0 0 15px hsl(187 100% 50% / 0.2)',
              }}
              style={{
                width: showAll ? 28 : 20,
                height: showAll ? 28 : 20,
                borderRadius: '50%',
                background: 'radial-gradient(circle, hsl(187 100% 60%), hsl(220 80% 40%))',
                border: '1px solid hsl(187 100% 50% / 0.4)',
                transition: 'width 0.3s ease, height 0.3s ease',
              }}
            />
            <AnimatePresence>
              {!showAll && (
                <motion.span
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[9px] text-primary/50 font-display-cloud whitespace-nowrap pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Hover to reveal all
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AbilityConstellation;
