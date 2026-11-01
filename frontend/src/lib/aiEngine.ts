export interface AIResponse {
  answer: string;
  codeSnippet?: string;
  keyTakeaways?: string[];
  suggestedFollowups?: string[];
}

export const AI_ASSISTANT_KNOWLEDGE: Record<string, string> = {
  dsa: `### Data Structures & Algorithms (DSA) Interview Guide

**Q: How do you detect a cycle in a linked list?**
* **Approach**: Use **Floyd's Cycle Detection Algorithm (Fast & Slow Pointer Technique)**.
* **Logic**: Initialize two pointers, \`slow\` moving 1 step at a time and \`fast\` moving 2 steps. If a cycle exists, \`slow\` and \`fast\` will eventually meet.
* **Time Complexity**: \\(O(N)\\)
* **Space Complexity**: \\(O(1)\\)

\`\`\`python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def hasCycle(head: ListNode) -> bool:
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
\`\`\`

**Key Points for Recruiter**:
1. Always state edge cases first (empty list or single node).
2. Compare Space Complexity vs Hash Set approach (\\(O(N)\\) space).`,

  dbms: `### Database Management Systems (DBMS) & SQL

**Q: What is the difference between WHERE and HAVING clause in SQL?**
1. **WHERE Clause**: Filters rows *before* aggregation occurs. It cannot be used with aggregate functions like \`SUM()\`, \`AVG()\`, or \`COUNT()\`.
2. **HAVING Clause**: Filters groups *after* the \`GROUP BY\` clause has aggregated data.

\`\`\`sql
-- Example: Select departments with average salary > 75000
SELECT department_id, AVG(salary) AS avg_sal
FROM employees
WHERE status = 'Active' -- Row level filter
GROUP BY department_id
HAVING AVG(salary) > 75000; -- Group level filter
\`\`\`

**ACID Properties Reminder**:
- **Atomicity**: All or nothing transaction.
- **Consistency**: DB transitions from one valid state to another.
- **Isolation**: Concurrent transactions execute independently.
- **Durability**: Committed data is permanently saved.`,

  os: `### Operating Systems (OS) Core Concepts

**Q: Explain Deadlock and its 4 Necessary Conditions.**
A **Deadlock** occurs when a set of processes are blocked because each process is holding a resource and waiting for another resource held by another process.

**4 Coffman Conditions**:
1. **Mutual Exclusion**: At least one resource must be non-shareable.
2. **Hold and Wait**: Process holding resources can request additional resources.
3. **No Preemption**: Resources cannot be forcibly taken away.
4. **Circular Wait**: A closed chain of processes exists such that each waits for a resource held by the next.

**Prevention**: Break any one of the 4 Coffman conditions (e.g., Banker's Algorithm for avoidance).`,

  networks: `### Computer Networks (CN)

**Q: What happens when you type \`https://google.com\` in a browser?**
1. **DNS Lookup**: Browser checks local DNS cache, OS cache, router cache, and queries DNS Resolvers to get the IP address (e.g., \`142.250.190.46\`).
2. **TCP 3-Way Handshake**: Client sends \`SYN\`, Server responds with \`SYN-ACK\`, Client sends \`ACK\`.
3. **TLS/SSL Handshake**: Establishes encrypted session key for HTTPS.
4. **HTTP GET Request**: Browser sends request headers.
5. **Server Response**: Nginx/Apache returns HTTP 200 with HTML content.
6. **DOM Rendering**: Browser constructs DOM & CSSOM trees, executes JavaScript, renders layout.`,

  hr: `### HR & Behavioral Interview (STAR Framework)

**Q: Tell me about a time you faced a tough technical challenge and how you solved it.**

**Use the STAR Method**:
- **Situation**: During our final year capstone project, our microservices backend suffered severe latency during load testing.
- **Task**: I was tasked with reducing API response times from 3.4 seconds to under 400ms before client demo day.
- **Action**: I ran profiling using Py-Spy and discovered redundant N+1 SQL queries. I implemented Redis caching for static lookups and added database indexing on foreign keys.
- **Result**: Reduced response times by 88% to 280ms, handled 500+ concurrent requests smoothly, and earned an 'A' grade.`,
};

export function getAIAnswer(prompt: string, category?: string): string {
  const query = prompt.toLowerCase();
  if (query.includes("dsa") || query.includes("linked list") || query.includes("binary tree") || category === "DSA") {
    return AI_ASSISTANT_KNOWLEDGE.dsa;
  }
  if (query.includes("sql") || query.includes("dbms") || query.includes("having") || category === "DBMS" || category === "SQL") {
    return AI_ASSISTANT_KNOWLEDGE.dbms;
  }
  if (query.includes("os") || query.includes("deadlock") || query.includes("process") || category === "Operating Systems") {
    return AI_ASSISTANT_KNOWLEDGE.os;
  }
  if (query.includes("http") || query.includes("dns") || query.includes("network") || category === "Computer Networks") {
    return AI_ASSISTANT_KNOWLEDGE.networks;
  }
  if (query.includes("hr") || query.includes("behavioral") || query.includes("challenge") || category === "HR Questions") {
    return AI_ASSISTANT_KNOWLEDGE.hr;
  }

  return `### AI Interview Expert Analysis

**Response to**: "${prompt}"

**Core Recommendation**:
When answering this question in a real interview (e.g. for **Google, Amazon, or TCS**):
1. **Direct Answer First**: State your core thesis clearly in 1-2 sentences.
2. **Technical Depth**: Explain the underlying mechanism or algorithm behind your decision.
3. **Trade-offs**: Highlight time vs space complexity or architectural pros & cons.

\`\`\`javascript
// Recommended approach snippet
function optimizeProcess(input) {
  // 1. Sanitize & validate inputs
  if (!input) return null;
  
  // 2. Efficient hash map lookup O(1)
  const map = new Map();
  return map;
}
\`\`\`

**Follow-up Questions Recruiter May Ask**:
- How would this scale if data volume grows to 10M records?
- What edge cases could crash this implementation?`;
}

// Evaluate STAR Method
export function evaluateSTARAnswer(answer: string) {
  const hasSituation = /situation|when|during|in my|last year|at/i.test(answer);
  const hasTask = /task|goal|objective|needed to|assigned/i.test(answer);
  const hasAction = /action|i implemented|i created|i built|i analyzed|i decided/i.test(answer);
  const hasResult = /result|outcome|achieved|reduced|improved|increased|percent|%/i.test(answer);

  const situationScore = hasSituation ? 25 : 12;
  const taskScore = hasTask ? 25 : 14;
  const actionScore = hasAction ? 25 : 15;
  const resultScore = hasResult ? 25 : 10;
  const totalScore = situationScore + taskScore + actionScore + resultScore;

  return {
    totalScore,
    breakdown: {
      situation: { score: situationScore, status: hasSituation ? "Detected" : "Weak Context" },
      task: { score: taskScore, status: hasTask ? "Clear Goal" : "Implicit" },
      action: { score: actionScore, status: hasAction ? "Strong Ownership" : "Needs Detail" },
      result: { score: resultScore, status: hasResult ? "Quantified Output" : "Missing Metrics" },
    },
    feedback:
      totalScore > 80
        ? "Excellent STAR structure! You provided clear situation context, personal actions, and quantifiable results."
        : "Good attempt! To boost your score above 85, explicitly include metrics in your Result section (e.g., 'reduced latency by 40%').",
  };
}

// Voice Speech & Tone Analysis Simulation
export function analyzeSpeechMetrics(audioDurationSec: number, transcript: string) {
  const wordCount = transcript.trim().split(/\s+/).length || 1;
  const minutes = Math.max(audioDurationSec / 60, 0.2);
  const wpm = Math.round(wordCount / minutes);

  const fillerRegex = /\b(um|uh|like|you know|basically|actually|sort of|kind of)\b/gi;
  const fillerMatches = transcript.match(fillerRegex) || [];
  const fillerCount = fillerMatches.length;

  const confidenceScore = Math.min(Math.max(92 - fillerCount * 4, 60), 98);
  const tonePositivity = 88;
  const toneStress = Math.min(15 + fillerCount * 5, 45);

  return {
    wpm,
    wpmStatus: wpm >= 120 && wpm <= 160 ? "Optimal (120-160 WPM)" : wpm < 120 ? "Slightly Slow" : "Fast Pace",
    fillerCount,
    fillerWordsDetected: Array.from(new Set(fillerMatches)),
    confidenceScore,
    toneAnalysis: {
      professionalism: 90,
      confidence: confidenceScore,
      stress: toneStress,
      positivity: tonePositivity,
      enthusiasm: 85,
    },
    suggestions: [
      wpm > 165 ? "Try to slow down your speaking rate slightly for clarity." : "Great speaking tempo!",
      fillerCount > 2 ? `Reduce filler words like "${fillerMatches.slice(0, 2).join(", ")}". Use deliberate pauses instead.` : "Minimal filler words detected. Excellent articulation!",
    ],
  };
}
