export type SupportedLanguage = 
  | 'java' 
  | 'typescript' 
  | 'python' 
  | 'go' 
  | 'rust' 
  | 'cpp' 
  | 'sql' 
  | 'shell' 
  | 'symbols'
  | 'custom'

export type SnippetCategory = 
  | 'spring_boot' 
  | 'framework' 
  | 'algorithms' 
  | 'idioms' 
  | 'symbols' 
  | 'system'
  | 'user_custom'

export interface CodeSnippet {
  id: string
  title: string
  language: SupportedLanguage
  category: SnippetCategory
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  description: string
  code: string
  symbolCount: number
}

export type IdeThemeId = 'vscode-dark' | 'one-dark' | 'dracula' | 'monokai' | 'github-dark'

export interface IdeThemeConfig {
  id: IdeThemeId
  name: string
  bg: string
  text: string
  lineNumbers: string
  border: string
  currentLine: string
  correctText: string
  errorBg: string
}

export const IDE_THEMES: Record<IdeThemeId, IdeThemeConfig> = {
  'vscode-dark': {
    id: 'vscode-dark',
    name: 'VS Code Dark+',
    bg: 'bg-[#1e1e2e]',
    text: 'text-[#cdd6f4]',
    lineNumbers: 'text-neutral-600 border-neutral-800/60',
    border: 'border-neutral-800',
    currentLine: 'bg-sky-500/30 ring-sky-400',
    correctText: 'text-emerald-400',
    errorBg: 'bg-rose-500/20 text-rose-400 decoration-rose-500',
  },
  'one-dark': {
    id: 'one-dark',
    name: 'One Dark Pro',
    bg: 'bg-[#282c34]',
    text: 'text-[#abb2bf]',
    lineNumbers: 'text-neutral-500 border-neutral-700/60',
    border: 'border-neutral-700',
    currentLine: 'bg-blue-500/30 ring-blue-400',
    correctText: 'text-green-400',
    errorBg: 'bg-red-500/20 text-red-400 decoration-red-500',
  },
  'dracula': {
    id: 'dracula',
    name: 'Dracula',
    bg: 'bg-[#282a36]',
    text: 'text-[#f8f8f2]',
    lineNumbers: 'text-[#6272a4] border-[#44475a]',
    border: 'border-[#44475a]',
    currentLine: 'bg-[#bd93f9]/30 ring-[#bd93f9]',
    correctText: 'text-[#50fa7b]',
    errorBg: 'bg-[#ff5555]/20 text-[#ff5555] decoration-[#ff5555]',
  },
  'monokai': {
    id: 'monokai',
    name: 'Monokai Pro',
    bg: 'bg-[#2d2a2e]',
    text: 'text-[#fcfcfa]',
    lineNumbers: 'text-neutral-600 border-neutral-700',
    border: 'border-neutral-700',
    currentLine: 'bg-amber-500/30 ring-amber-400',
    correctText: 'text-[#a9dc76]',
    errorBg: 'bg-[#ff6188]/20 text-[#ff6188] decoration-[#ff6188]',
  },
  'github-dark': {
    id: 'github-dark',
    name: 'GitHub Dark',
    bg: 'bg-[#0d1117]',
    text: 'text-[#c9d1d9]',
    lineNumbers: 'text-neutral-600 border-neutral-800',
    border: 'border-neutral-800',
    currentLine: 'bg-purple-500/30 ring-purple-400',
    correctText: 'text-emerald-400',
    errorBg: 'bg-rose-500/20 text-rose-400 decoration-rose-500',
  },
}

export const LANGUAGE_METADATA: Record<SupportedLanguage, { name: string; icon: string; badgeColor: string; description: string }> = {
  java: {
    name: 'Java / Spring Boot',
    icon: '☕',
    badgeColor: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    description: 'Enterprise Java, annotations, Streams, JPA & Spring Boot REST endpoints.'
  },
  typescript: {
    name: 'TypeScript / React',
    icon: '⚡',
    badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    description: 'Modern TS types, generics, async/await, Zod schemas, and React hooks.'
  },
  python: {
    name: 'Python',
    icon: '🐍',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    description: 'List comprehensions, decorators, dataclasses, and FastAPI routes.'
  },
  go: {
    name: 'Go (Golang)',
    icon: '🐹',
    badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    description: 'Goroutines, channels, error checking, and struct methods.'
  },
  rust: {
    name: 'Rust',
    icon: '🦀',
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    description: 'Borrow checker syntax, pattern matching, Result/Option, and Tokio async.'
  },
  cpp: {
    name: 'C++',
    icon: '⚙️',
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    description: 'Pointers, templates, STL vectors, and memory management.'
  },
  sql: {
    name: 'SQL',
    icon: '🗄️',
    badgeColor: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
    description: 'CTEs, window functions, complex JOINs, and indexing queries.'
  },
  shell: {
    name: 'Shell / Bash',
    icon: '🐚',
    badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
    description: 'Pipelines, git commands, environment variables, and script logic.'
  },
  symbols: {
    name: 'Symbol Muscle Drill',
    icon: '🎯',
    badgeColor: 'bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/20',
    description: 'High-density drill for brackets, operators, lambdas, and special keys.'
  },
  custom: {
    name: 'Custom Code Upload',
    icon: '📂',
    badgeColor: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
    description: 'Your uploaded code snippet or custom pasted source code.'
  }
}

export const CODE_SNIPPETS: CodeSnippet[] = [
  // Java / Spring Boot
  {
    id: 'java-spring-controller',
    title: 'Spring Boot REST Controller',
    language: 'java',
    category: 'spring_boot',
    difficulty: 'intermediate',
    description: 'Standard Spring Boot controller with constructor dependency injection.',
    code: `@RestController\n@RequestMapping("/api/v1/users")\npublic class UserController {\n    private final UserService userService;\n\n    public UserController(UserService userService) {\n        this.userService = userService;\n    }\n\n    @GetMapping("/{id}")\n    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {\n        return ResponseEntity.ok(userService.findById(id));\n    }\n}`,
    symbolCount: 42
  },
  {
    id: 'java-stream-api',
    title: 'Java Stream Filter & Map',
    language: 'java',
    category: 'idioms',
    difficulty: 'beginner',
    description: 'Transforming collections cleanly with functional Java Streams.',
    code: `List<String> activeUserEmails = users.stream()\n    .filter(user -> user.isActive() && user.isEmailVerified())\n    .map(User::getEmail)\n    .collect(Collectors.toList());`,
    symbolCount: 28
  },

  // TypeScript
  {
    id: 'ts-generic-fetcher',
    title: 'Typed API Fetcher with Generics',
    language: 'typescript',
    category: 'framework',
    difficulty: 'intermediate',
    description: 'Type-safe asynchronous HTTP wrapper using generic parameters.',
    code: `async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {\n  const response = await fetch(\`/api/v1\${endpoint}\`, options);\n  if (!response.ok) {\n    throw new Error(\`HTTP error! status: \${response.status}\`);\n  }\n  return (await response.json()) as T;\n}`,
    symbolCount: 38
  },
  {
    id: 'ts-zod-schema',
    title: 'Zod Validation Schema',
    language: 'typescript',
    category: 'idioms',
    difficulty: 'beginner',
    description: 'Defining runtime object schema validation rules.',
    code: `const UserProfileSchema = z.object({\n  id: z.string().uuid(),\n  username: z.string().min(3).max(20),\n  role: z.enum(['ADMIN', 'DEVELOPER', 'USER']),\n  preferences: z.object({\n    darkMode: z.boolean().default(true),\n  }),\n});`,
    symbolCount: 36
  },

  // Python
  {
    id: 'py-dataclass-decorator',
    title: 'FastAPI Model & Dataclass',
    language: 'python',
    category: 'framework',
    difficulty: 'beginner',
    description: 'Modern Python type hints with Pydantic / FastAPI model definition.',
    code: `from pydantic import BaseModel, Field\nfrom typing import Optional\n\nclass CreateTaskRequest(BaseModel):\n    title: str = Field(..., min_length=1, max_length=100)\n    description: Optional[str] = None\n    priority: int = Field(default=1, ge=1, le=5)`,
    symbolCount: 30
  },
  {
    id: 'py-async-context-manager',
    title: 'Async Context Manager',
    language: 'python',
    category: 'idioms',
    difficulty: 'intermediate',
    description: 'Custom asynchronous context manager utilizing __aenter__ and __aexit__.',
    code: `class DatabaseSession:\n    async def __aenter__(self):\n        self.conn = await pool.acquire()\n        return self.conn\n\n    async def __aexit__(self, exc_type, exc_val, exc_tb):\n        await pool.release(self.conn)`,
    symbolCount: 32
  },

  // Go
  {
    id: 'go-worker-pool',
    title: 'Go Channel Worker Pool',
    language: 'go',
    category: 'system',
    difficulty: 'advanced',
    description: 'Concurrent task execution using Goroutines and sync.WaitGroup.',
    code: `func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {\n    defer wg.Done()\n    for job := range jobs {\n        results <- job * 2\n    }\n}`,
    symbolCount: 34
  },
  {
    id: 'go-http-handler',
    title: 'Go HTTP Server Handler',
    language: 'go',
    category: 'framework',
    difficulty: 'intermediate',
    description: 'Standard library HTTP handler with JSON encoding and error check.',
    code: `func handleHealthCheck(w http.ResponseWriter, r *http.Request) {\n    if r.Method != http.MethodGet {\n        http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)\n        return\n    }\n    w.Header().Set("Content-Type", "application/json")\n    json.NewEncoder(w).Encode(map[string]string{"status": "ok"})\n}`,
    symbolCount: 40
  },

  // Rust
  {
    id: 'rust-pattern-matching',
    title: 'Rust Pattern Matching & Result',
    language: 'rust',
    category: 'idioms',
    difficulty: 'intermediate',
    description: 'Exhaustive pattern matching with Result and custom enum.',
    code: `pub fn process_order(status: OrderStatus) -> Result<String, OrderError> {\n    match status {\n        OrderStatus::Pending => Ok(String::from("Queued for processing")),\n        OrderStatus::Completed(id) => Ok(format!("Order #{} fulfilled", id)),\n        OrderStatus::Failed(err) => Err(OrderError::ProcessingFailed(err)),\n    }\n}`,
    symbolCount: 45
  },

  // SQL
  {
    id: 'sql-cte-window',
    title: 'SQL CTE & Window Function',
    language: 'sql',
    category: 'algorithms',
    difficulty: 'advanced',
    description: 'Advanced analytics query calculating rank over partitions.',
    code: `WITH MonthlyUserStats AS (\n    SELECT \n        user_id,\n        COUNT(session_id) AS total_sessions,\n        DENSE_RANK() OVER (PARTITION BY region ORDER BY COUNT(session_id) DESC) AS rank\n    FROM user_activity_logs\n    WHERE created_at >= NOW() - INTERVAL '30 days'\n    GROUP BY user_id, region\n)\nSELECT * FROM MonthlyUserStats WHERE rank <= 3;`,
    symbolCount: 48
  },

  // Shell
  {
    id: 'shell-pipe-script',
    title: 'Bash Pipeline & Log Parsing',
    language: 'shell',
    category: 'system',
    difficulty: 'intermediate',
    description: 'Extracting top failing IP addresses from access logs.',
    code: `cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head -n 10`,
    symbolCount: 22
  },

  // Symbol Drill
  {
    id: 'symbols-operator-drill',
    title: 'High-Density Symbol Muscle Drill',
    language: 'symbols',
    category: 'symbols',
    difficulty: 'advanced',
    description: 'Train muscle memory for brackets, arrows, colons, and operators.',
    code: `map.set("key", (x: number) => { return [x ?? 0, x ? { a: x, b: !x } : null]; });`,
    symbolCount: 52
  }
]

export const generateCustomSymbolDrill = (weakSymbols: string[]): CodeSnippet => {
  const symbols = weakSymbols.length > 0 ? weakSymbols : ['{', '}', '=>', ';', '(', ')', '[', ']', '->', '?']
  const pattern = symbols.map((s) => `${s} val ${s}`).join(' ')
  const code = `// Targeted Muscle Drill for Weak Symbols:\nconst drill = [ ${pattern} ];\nif (drill.length > 0) { console.log("${symbols.join('')}"); }`

  return {
    id: `custom-symbol-drill-${Date.now()}`,
    title: 'Targeted Weak Symbol Drill',
    language: 'symbols',
    category: 'symbols',
    difficulty: 'advanced',
    description: `Auto-generated drill targeting your weak keys: ${symbols.join(', ')}`,
    code,
    symbolCount: symbols.length * 3 + 10,
  }
}
