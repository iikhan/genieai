import React, { useState, useEffect } from 'react';
import { Terminal, Play, Pause } from 'lucide-react';

const CodeDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      prompt: "Generate a React component for a todo list",
      code: `function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="todo-list">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}`
    },
    {
      prompt: "Add TypeScript types to the component",
      code: `interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: input,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  return (
    <div className="todo-list">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}`
    },
    {
      prompt: "Add styling and animations",
      code: `interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: input,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg
                    hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-3 bg-gray-50 rounded-lg animate-fadeIn"
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  return (
    <section className="section bg-neutral-950 text-white overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">
            Watch AI transform your <span className="text-gradient">code</span>
          </h2>
          <p className="text-lg text-neutral-400">
            See how Cursor helps you write better code faster with AI-powered suggestions
            and automatic refactoring.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="code-window">
            <div className="code-window-header">
              <div className="window-button window-button-red"></div>
              <div className="window-button window-button-yellow"></div>
              <div className="window-button window-button-green"></div>
              <div className="ml-4 flex items-center gap-2">
                <Terminal size={14} className="text-neutral-400" />
                <span className="text-sm text-neutral-400">demo.tsx</span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1 hover:bg-neutral-800 rounded"
                >
                  {isPlaying ? (
                    <Pause size={14} className="text-neutral-400" />
                  ) : (
                    <Play size={14} className="text-neutral-400" />
                  )}
                </button>
              </div>
            </div>
            <div className="code-content">
              <div className="mb-4 text-sm text-neutral-400">
                <span className="text-primary-500">&gt;</span> {demoSteps[currentStep].prompt}
              </div>
              <pre className="text-sm">
                <code>{demoSteps[currentStep].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;