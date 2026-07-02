import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Send, Bot, User, Sparkles, Code, BookOpen, Briefcase, FileText, HelpCircle, Lightbulb, RotateCcw, Copy, ThumbsUp, ThumbsDown } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
}

const quickPrompts = [
  { icon: Code, label: "Coding Help", prompt: "Help me understand recursion in Python with examples" },
  { icon: BookOpen, label: "Explain Topic", prompt: "Explain DBMS normalization in simple terms" },
  { icon: Lightbulb, label: "Suggest Projects", prompt: "Suggest 5 beginner ML projects for my portfolio" },
  { icon: HelpCircle, label: "Interview Prep", prompt: "Give me top 10 Java interview questions for freshers" },
  { icon: FileText, label: "Resume Review", prompt: "How should I structure my resume as a 2nd year CSE student?" },
  { icon: Briefcase, label: "Career Advice", prompt: "What skills should I learn to become an AI Engineer?" },
];

const aiResponses: Record<string, string> = {
  default: "That's a great question! As an AI Career Mentor, I'm here to help you excel in your engineering journey. Could you provide more details so I can give you the most relevant guidance?",
  recursion: `**Recursion in Python** 🐍\n\nRecursion is when a function calls itself to solve smaller subproblems.\n\n**Simple Example — Factorial:**\n\`\`\`python\ndef factorial(n):\n    if n == 0:  # Base case\n        return 1\n    return n * factorial(n - 1)  # Recursive case\n\nprint(factorial(5))  # Output: 120\n\`\`\`\n\n**Key Rules:**\n1. ✅ Always have a **base case** (stopping condition)\n2. ✅ Each call should move **closer to the base case**\n3. ✅ Trust the recursion — don't trace mentally!\n\n**Think of it like:** Russian dolls — each doll opens to reveal a smaller identical doll, until you reach the smallest one (base case).\n\nWant me to show more examples like Fibonacci or Tree Traversal?`,
  dbms: `**DBMS Normalization — Simple Explanation** 📊\n\nNormalization is organizing your database to **reduce redundancy** and **improve data integrity**.\n\n**The 3 Main Normal Forms:**\n\n**1NF (First Normal Form)**\n- Each column has atomic (single) values\n- No repeating groups\n\n**2NF (Second Normal Form)**\n- Already in 1NF\n- No partial dependencies\n\n**3NF (Third Normal Form)**\n- Already in 2NF\n- No transitive dependencies\n\n**Simple Analogy:** Normalization is like organizing your room — 1NF means everything has its place, 2NF means related items are grouped, 3NF means nothing is stored in the wrong room.\n\nNeed practice questions for your exams?`,
  projects: `**5 Beginner ML Projects for Your Portfolio** 🚀\n\n1. **Iris Flower Classifier** — Use Scikit-learn to classify flowers. Perfect for learning classification.\n\n2. **Movie Recommendation System** — Build using collaborative filtering. Great for understanding ML logic.\n\n3. **Stock Price Predictor** — Use LSTM neural networks with historical data. Impressive for interviews!\n\n4. **Spam Email Detector** — NLP + Naive Bayes. Practical real-world application.\n\n5. **Face Mask Detection** — OpenCV + CNN. Very visual and impressive.\n\n**Pro Tips:**\n- Host all projects on GitHub\n- Write a clear README for each\n- Deploy at least 2 on Streamlit or Hugging Face\n- Document your process and results\n\nWant detailed step-by-step guidance for any of these?`,
};

function getAIResponse(msg: string): string {
  const lower = msg.toLowerCase();
  if (lower.includes("recursion") || lower.includes("python")) return aiResponses.recursion;
  if (lower.includes("dbms") || lower.includes("normaliz")) return aiResponses.dbms;
  if (lower.includes("project") || lower.includes("portfolio")) return aiResponses.projects;
  return aiResponses.default;
}

function formatMessage(content: string) {
  const lines = content.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("```")) return null;
    if (line.startsWith("**") && line.endsWith("**")) {
      return <p key={i} className="font-bold text-foreground mt-2">{line.slice(2, -2)}</p>;
    }
    if (line.startsWith("- ") || line.startsWith("* ")) {
      return <li key={i} className="ml-4 list-disc">{line.slice(2)}</li>;
    }
    if (/^\d+\./.test(line)) {
      return <li key={i} className="ml-4 list-decimal">{line.replace(/^\d+\. /, "")}</li>;
    }
    if (line.trim() === "") return <br key={i} />;
    return <p key={i} className="leading-relaxed">{line}</p>;
  });
}

export function AIMentor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "ai",
      content: "Hi! I'm your AI Mentor 🤖 I'm here to help you with coding, exam prep, career advice, project ideas, and more. What would you like to learn today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string = input) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", content: text, timestamp: new Date() };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: Message = { id: Date.now() + 1, role: "ai", content: getAIResponse(text), timestamp: new Date() };
      setMessages(m => [...m, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-full" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div className="px-6 py-5 bg-white border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}>
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground" style={{ fontFamily: "Poppins, sans-serif" }}>AI Mentor</h1>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-600 font-medium">Online — Ready to help</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setMessages([messages[0]])}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-muted-foreground border border-border hover:bg-muted transition-all"
          >
            <RotateCcw className="w-4 h-4" /> New Chat
          </button>
        </div>

        {/* Quick Prompts */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
          {quickPrompts.map((qp) => {
            const Icon = qp.icon;
            return (
              <button
                key={qp.label}
                onClick={() => sendMessage(qp.prompt)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border border-border hover:border-primary/40 hover:bg-muted whitespace-nowrap transition-all flex-shrink-0"
              >
                <Icon className="w-3.5 h-3.5" style={{ color: "#5B5CEB" }} />
                {qp.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${msg.role === "ai" ? "shadow-lg" : "bg-muted"}`}
              style={msg.role === "ai" ? { background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" } : {}}>
              {msg.role === "ai" ? <Sparkles className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-muted-foreground" />}
            </div>

            <div className={`max-w-[75%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
              <div
                className={`px-5 py-4 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "text-white rounded-tr-sm" : "text-foreground rounded-tl-sm shadow-sm border border-border"}`}
                style={msg.role === "user" ? { background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" } : { background: "white" }}
              >
                <div className="space-y-1">
                  {formatMessage(msg.content)}
                </div>
              </div>

              {msg.role === "ai" && (
                <div className="flex items-center gap-2 px-1">
                  <button className="text-muted-foreground hover:text-foreground transition-colors"><ThumbsUp className="w-3.5 h-3.5" /></button>
                  <button className="text-muted-foreground hover:text-foreground transition-colors"><ThumbsDown className="w-3.5 h-3.5" /></button>
                  <button className="text-muted-foreground hover:text-foreground transition-colors"><Copy className="w-3.5 h-3.5" /></button>
                  <span className="text-xs text-muted-foreground">{msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}>
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="px-5 py-4 rounded-2xl bg-white border border-border shadow-sm flex items-center gap-1.5">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-muted-foreground"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-6 bg-white border-t border-border">
        <div className="flex gap-3 items-end">
          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
              placeholder="Ask me anything — coding, career, projects, interviews..."
              rows={1}
              className="w-full px-5 py-3.5 rounded-2xl border border-border bg-muted/40 text-sm resize-none outline-none focus:border-primary/50 focus:bg-white transition-all"
              style={{ minHeight: "52px", maxHeight: "120px" }}
            />
          </div>
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all hover:opacity-90 hover:shadow-lg disabled:opacity-40"
            style={{ background: "linear-gradient(135deg, #5B5CEB, #7C4DFF)" }}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-3">AI Mentor can make mistakes. Always verify important information.</p>
      </div>
    </div>
  );
}
