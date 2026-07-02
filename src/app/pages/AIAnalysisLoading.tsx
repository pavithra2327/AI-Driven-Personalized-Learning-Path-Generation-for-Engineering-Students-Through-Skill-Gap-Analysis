import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Sparkles, Brain, Target, Zap, CheckCircle } from "lucide-react";

const stages = [
  { icon: Brain, label: "Analyzing Skills", desc: "Processing your technical knowledge profile...", color: "#5B5CEB" },
  { icon: Sparkles, label: "Analyzing Interests", desc: "Mapping your interests to career domains...", color: "#7C4DFF" },
  { icon: Target, label: "Matching Careers", desc: "Running AI career compatibility engine...", color: "#00D4FF" },
  { icon: Zap, label: "Finding Best Learning Path", desc: "Generating your personalized roadmap...", color: "#22C55E" },
];

const nodes = [
  { x: 50, y: 15 }, { x: 20, y: 35 }, { x: 80, y: 35 },
  { x: 10, y: 60 }, { x: 40, y: 60 }, { x: 60, y: 60 }, { x: 90, y: 60 },
  { x: 25, y: 82 }, { x: 50, y: 82 }, { x: 75, y: 82 },
];

const edges = [
  [0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,8],[5,8],[6,9],
];

export function AIAnalysisLoading() {
  const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeEdge, setActiveEdge] = useState(0);

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setActiveStage(s => {
        if (s < stages.length - 1) return s + 1;
        clearInterval(stageInterval);
        return s;
      });
    }, 2000);
    return () => clearInterval(stageInterval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => navigate("/career-confirmation"), 500);
          return 100;
        }
        return p + 1.25;
      });
    }, 100);
    return () => clearInterval(progressInterval);
  }, [navigate]);

  useEffect(() => {
    const edgeInterval = setInterval(() => {
      setActiveEdge(e => (e + 1) % edges.length);
    }, 300);
    return () => clearInterval(edgeInterval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: "linear-gradient(135deg, #0F0E2A 0%, #1A0533 50%, #041421 100%)", fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20 text-white/70" style={{ background: "rgba(255,255,255,0.05)" }}>
          <Sparkles className="w-4 h-4 text-purple-400" />
          AI Analysis in Progress
        </div>
        <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
          AI is analyzing your profile...
        </h1>
        <p className="text-white/50 text-lg">Our neural network is processing your assessment data</p>
      </div>

      {/* Neural Network Visualization */}
      <div className="relative w-80 h-64 mb-12">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Edges */}
          {edges.map(([from, to], i) => (
            <motion.line
              key={i}
              x1={nodes[from].x}
              y1={nodes[from].y}
              x2={nodes[to].x}
              y2={nodes[to].y}
              stroke={i === activeEdge ? "#00D4FF" : "rgba(255,255,255,0.15)"}
              strokeWidth={i === activeEdge ? "0.8" : "0.4"}
              animate={{ stroke: i === activeEdge ? "#00D4FF" : "rgba(255,255,255,0.15)" }}
              transition={{ duration: 0.3 }}
            />
          ))}
          {/* Nodes */}
          {nodes.map((node, i) => (
            <g key={i}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="3.5"
                fill={i === edges[activeEdge]?.[0] || i === edges[activeEdge]?.[1] ? "#5B5CEB" : "rgba(255,255,255,0.2)"}
                animate={{
                  fill: i === edges[activeEdge]?.[0] || i === edges[activeEdge]?.[1] ? "#5B5CEB" : "rgba(255,255,255,0.2)",
                  r: i === edges[activeEdge]?.[0] || i === edges[activeEdge]?.[1] ? 5 : 3.5,
                }}
                transition={{ duration: 0.3 }}
              />
              {(i === edges[activeEdge]?.[0] || i === edges[activeEdge]?.[1]) && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="none"
                  stroke="#5B5CEB"
                  strokeWidth="0.5"
                  opacity={0.4}
                  animate={{ r: [6, 10], opacity: [0.5, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Progress Circle */}
      <div className="relative w-32 h-32 mb-10">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
          <motion.circle
            cx="50" cy="50" r="40"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 40}`}
            strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
            animate={{ strokeDashoffset: `${2 * Math.PI * 40 * (1 - progress / 100)}` }}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5B5CEB" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Stage Cards */}
      <div className="w-full max-w-md space-y-3">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          const isDone = i < activeStage;
          const isActive = i === activeStage;
          return (
            <motion.div
              key={stage.label}
              animate={{ opacity: i <= activeStage ? 1 : 0.4 }}
              className="flex items-center gap-4 px-5 py-4 rounded-2xl border"
              style={{
                background: isActive ? `${stage.color}15` : "rgba(255,255,255,0.04)",
                borderColor: isActive ? `${stage.color}40` : "rgba(255,255,255,0.08)",
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: isDone || isActive ? `${stage.color}25` : "rgba(255,255,255,0.08)" }}>
                {isDone ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <Icon className="w-5 h-5" style={{ color: isActive ? stage.color : "rgba(255,255,255,0.4)" }} />
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: isDone ? "#22C55E" : isActive ? "#ffffff" : "rgba(255,255,255,0.4)" }}>{stage.label}</p>
                {isActive && <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{stage.desc}</p>}
              </div>
              {isActive && (
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ background: stage.color }}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <p className="text-white/30 text-sm mt-10">This usually takes 8-10 seconds...</p>
    </div>
  );
}
