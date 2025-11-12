# Todo List App

A simple and elegant Todo application built with TypeScript and vanilla DOM manipulation. This app allows users to add, remove, and manage their tasks with a clean, modern interface.

## Features

- ✅ Add new todos with a simple input field
- 🗑️ Delete individual todos with a trash icon
- 🧹 Clear all todos at once
- 💾 Persistent storage using localStorage
- 📱 Responsive design that works on all devices
- 🎨 Modern UI with smooth animations and hover effects
- 📊 Pending tasks counter

## Technologies Used

- **TypeScript** - For type-safe JavaScript development
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - DOM manipulation and event handling
- **Font Awesome** - Icon library for UI elements

## Project Structure

```
todo-list-typeScript/
├── src/
│   └── todolist.ts          # Main TypeScript source code
├── index.html               # HTML structure
├── style.css                # CSS styling
├── package.json             # Project configuration and dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Installation and Setup

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd todo-list-typeScript
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the TypeScript code**
   ```bash
   npm run build
   ```

4. **Run in development mode (with file watching)**
   ```bash
   npm run dev
   ```

5. **Preview the application**
   ```bash
   npm run preview
   ```

## Usage

1. Open `index.html` in your web browser after building the TypeScript code
2. Type your todo in the input field
3. Click the "+" button or press Enter to add the todo
4. Hover over any todo to reveal the delete icon
5. Click the trash icon to remove individual todos
6. Use the "Clear All" button to remove all todos at once

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Compile TypeScript with file watching for development
- `npm run preview` - Preview the application using the serve package

## Key Components

### TypeScript Features
- **Type Safety**: Uses TypeScript interfaces for better code quality
- **Modern JavaScript**: Utilizes modern features like `crypto.randomUUID()`
- **Local Storage**: Persistent data storage using localStorage API

### CSS Features
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern Styling**: Clean design with gradients and smooth transitions
- **Hover Effects**: Interactive elements with visual feedback

### HTML Structure
- **Semantic HTML5**: Proper use of HTML5 elements
- **Accessibility**: Proper form labels and keyboard navigation support

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is licensed under the ISC License.

## Contributing

Feel free to submit issues and enhancement requests!

## Author

Created with ❤️ using TypeScript and vanilla web technologies