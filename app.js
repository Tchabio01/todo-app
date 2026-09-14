// ===== TODO APP - LOCAL STORAGE FUNCTIONALITY =====

class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.STORAGE_KEY = 'todos';
        this.init();
    }

    init() {
        this.loadTodos();
        this.attachEventListeners();
        this.render();
    }

    // ===== LOCAL STORAGE METHODS =====
    
    loadTodos() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            this.todos = stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading todos:', error);
            this.todos = [];
        }
    }

    saveTodos() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
        } catch (error) {
            console.error('Error saving todos:', error);
            alert('Failed to save todos. Local storage might be full.');
        }
    }

    // ===== TODO MANAGEMENT =====
    
    addTodo(text, priority = 'medium') {
        if (!text.trim()) {
            alert('Please enter a task!');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            priority: priority,
            createdAt: new Date().toLocaleDateString(),
            completedAt: null
        };

        this.todos.unshift(todo);
        this.saveTodos();
        this.render();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveTodos();
        this.render();
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            todo.completedAt = todo.completed ? new Date().toLocaleDateString() : null;
            this.saveTodos();
            this.render();
        }
    }

    clearCompleted() {
        const count = this.todos.filter(t => t.completed).length;
        if (count > 0 && confirm(`Delete ${count} completed task(s)?`)) {
            this.todos = this.todos.filter(todo => !todo.completed);
            this.saveTodos();
            this.render();
        }
    }

    clearAll() {
        if (this.todos.length > 0 && confirm('Are you sure? This will delete ALL tasks!')) {
            this.todos = [];
            this.saveTodos();
            this.render();
        }
    }

    // ===== FILTERING =====
    
    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            default:
                return this.todos;
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        this.render();
    }

    // ===== STATISTICS =====
    
    getStats() {
        const completed = this.todos.filter(todo => todo.completed).length;
        return {
            total: this.todos.length,
            completed: completed,
            remaining: this.todos.length - completed
        };
    }

    // ===== RENDERING =====
    
    render() {
        this.updateStats();
        this.renderTodos();
        this.updateEmptyState();
    }

    updateStats() {
        const stats = this.getStats();
        document.getElementById('totalCount').textContent = stats.total;
        document.getElementById('completedCount').textContent = stats.completed;
        document.getElementById('remainingCount').textContent = stats.remaining;
    }

    renderTodos() {
        const todoList = document.getElementById('todoList');
        const filteredTodos = this.getFilteredTodos();

        todoList.innerHTML = '';

        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input 
                    type="checkbox" 
                    class="checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    onchange="app.toggleTodo(${todo.id})"
                >
                <span class="todo-priority priority-${todo.priority}">${todo.priority.toUpperCase()}</span>
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <span class="todo-date">${todo.createdAt}</span>
                <button class="delete-btn" onclick="app.deleteTodo(${todo.id})">Delete</button>
            `;
            todoList.appendChild(li);
        });
    }

    updateEmptyState() {
        const emptyState = document.getElementById('emptyState');
        const todoList = document.getElementById('todoList');
        
        if (this.todos.length === 0) {
            emptyState.classList.add('show');
            todoList.style.display = 'none';
        } else {
            emptyState.classList.remove('show');
            todoList.style.display = 'block';
        }
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // ===== EVENT LISTENERS =====
    
    attachEventListeners() {
        // Add button
        document.getElementById('addBtn').addEventListener('click', () => this.handleAddTodo());

        // Enter key in input
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleAddTodo();
            }
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Clear buttons
        document.getElementById('clearCompletedBtn').addEventListener('click', () => this.clearCompleted());
        document.getElementById('clearAllBtn').addEventListener('click', () => this.clearAll());
    }

    handleAddTodo() {
        const input = document.getElementById('todoInput');
        const priority = this.getPriorityFromInput(input.value);
        const text = this.extractTextFromInput(input.value);
        
        this.addTodo(text, priority);
        input.value = '';
        input.focus();
    }

    getPriorityFromInput(input) {
        if (input.startsWith('!!! ')) return 'high';
        if (input.startsWith('!! ')) return 'medium';
        if (input.startsWith('! ')) return 'low';
        return 'medium';
    }

    extractTextFromInput(input) {
        return input.replace(/^(!!!|!!|!) /, '').trim();
    }
}

// ===== INITIALIZE APP =====
const app = new TodoApp();

// Log for debugging
console.log('📝 Todo App Loaded!');
console.log('💾 Local Storage Key:', app.STORAGE_KEY);
console.log('📊 Total todos:', app.todos.length);
