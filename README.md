# 📝 To-Do List Application

A modern, responsive to-do list application with full local storage functionality for managing your daily tasks.

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Quickly add new to-do items
- ✅ **Mark Complete** - Check off completed tasks
- ✅ **Delete Tasks** - Remove individual tasks
- ✅ **Priority Levels** - Set task priority (High, Medium, Low)
- ✅ **Filter Tasks** - View All, Active, or Completed tasks
- ✅ **Statistics Dashboard** - See total, completed, and remaining tasks
- ✅ **Bulk Actions** - Clear completed or all tasks at once

### Local Storage
- 💾 **Persistent Storage** - All tasks are saved to browser's local storage
- 🔄 **Auto-Save** - Changes are automatically saved
- 📱 **Data Persistence** - Tasks remain after page refresh or browser restart
- ⚙️ **Error Handling** - Graceful handling of storage errors

### User Experience
- 🎨 **Modern Design** - Beautiful gradient UI with smooth animations
- 📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⌨️ **Keyboard Support** - Press Enter to add tasks quickly
- 🎯 **Intuitive Interface** - Easy to use without instructions
- 🔍 **Visual Feedback** - Hover effects and smooth transitions

## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tchabio01/todo-app.git
   cd todo-app
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No server or dependencies needed!

### Usage

#### Adding Tasks
1. Type your task in the input field
2. Press Enter or click the "Add" button
3. Task appears at the top of the list

#### Priority Levels
You can set task priority by prefixing with:
- `!!! ` - High priority (red)
- `!! ` - Medium priority (orange) - default
- `! ` - Low priority (teal)

Example: `!!! Finish project` creates a high-priority task

#### Filtering Tasks
- **All** - Show all tasks
- **Active** - Show incomplete tasks only
- **Completed** - Show completed tasks only

#### Managing Tasks
- **Check box** - Mark task as complete/incomplete
- **Delete button** - Remove specific task
- **Clear Completed** - Delete all finished tasks
- **Clear All** - Delete all tasks (with confirmation)

## 📂 Project Structure

```
todo-app/
├── index.html      # Main HTML file
├── styles.css      # Styling and responsive design
├── app.js          # Main application logic
├── README.md       # Documentation
└── LICENSE         # MIT License
```

## 🛠️ Technical Details

### Local Storage Implementation

```javascript
// Saving tasks
localStorage.setItem('todos', JSON.stringify(todos));

// Loading tasks
const todos = JSON.parse(localStorage.getItem('todos'));
```

### Data Structure

Each task is stored as a JSON object:

```javascript
{
  id: 1234567890,              // Unique timestamp-based ID
  text: "Buy groceries",        // Task description
  completed: false,             // Completion status
  priority: "high",             // Priority level
  createdAt: "9/14/2026",      // Creation date
  completedAt: null             // Completion date (if completed)
}
```

## 🌐 Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Local Storage Support**: Works in all modern browsers with ~5MB storage capacity

## 📊 Features Breakdown

### 1. Local Storage
- Auto-save on every action
- Error handling for storage quota exceeded
- JSON serialization for complex data
- Persistent across browser sessions

### 2. Filtering System
- Real-time filter switching
- Maintains statistics across all tasks
- Visual indicator for active filter

### 3. Statistics
- Total task count
- Completed task count
- Remaining task count
- Updates in real-time

### 4. Responsive Design
- Mobile-first approach
- Flexible layouts
- Touch-friendly buttons
- Optimized for all screen sizes

## 🎨 Customization

### Change Color Scheme
Edit the gradient colors in `styles.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify Storage Key
In `app.js`, change:

```javascript
this.STORAGE_KEY = 'todos'; // Change to any unique key
```

### Add New Priority Levels
1. Add new priority in `getPriorityFromInput()` method
2. Add corresponding CSS class in `styles.css`

## 🚀 Future Enhancements

- [ ] Due dates for tasks
- [ ] Task categories/tags
- [ ] Recurring tasks
- [ ] Search functionality
- [ ] Dark mode
- [ ] Drag and drop reordering
- [ ] Export/Import tasks
- [ ] Cloud sync with backend
- [ ] Notifications/reminders
- [ ] Task descriptions/notes

## 📝 API Reference

### TodoApp Class Methods

```javascript
// Add a new task
app.addTodo(text, priority)

// Delete a task
app.deleteTodo(id)

// Toggle task completion
app.toggleTodo(id)

// Clear completed tasks
app.clearCompleted()

// Clear all tasks
app.clearAll()

// Change filter
app.setFilter(filter)  // 'all', 'active', 'completed'

// Get statistics
app.getStats()  // Returns {total, completed, remaining}

// Save to local storage
app.saveTodos()

// Load from local storage
app.loadTodos()
```

## 💾 Local Storage Details

### Storage Quota
- Typical limit: 5-10MB per domain
- Actual capacity depends on browser
- Check available space before large operations

### Data Persistence
- Data persists across page refreshes
- Data persists across browser sessions
- Data is domain-specific
- Clearing browser cache may delete data

### Error Handling
- Try-catch blocks for storage operations
- User notifications for storage failures
- Graceful degradation if storage unavailable

## 🐛 Troubleshooting

### Tasks not saving?
1. Check browser console for errors
2. Verify local storage is enabled
3. Clear browser cache and try again
4. Check if local storage quota is exceeded

### Tasks disappearing?
1. Check if browser is in private/incognito mode
2. Verify local storage isn't being cleared on exit
3. Check browser settings for site storage

### Performance issues?
1. Reduce number of tasks (use filters)
2. Clear completed tasks regularly
3. Check browser extensions interfering with storage

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👤 Author

**Tchabio01**
- GitHub: [@Tchabio01](https://github.com/Tchabio01)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you encounter any issues or have suggestions:
1. Open an issue on GitHub
2. Describe the problem clearly
3. Include browser and OS information
4. Provide steps to reproduce

---

**Made with ❤️ and JavaScript**
